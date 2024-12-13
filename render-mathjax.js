//  Load the packages needed for MathJax
//
import { mathjax } from "mathjax-full/js/mathjax.js";
import { TeX } from "mathjax-full/js/input/tex.js";
import { SVG } from "mathjax-full/js/output/svg.js";
import { liteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor.js";
import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html.js";
import { AssistiveMmlHandler } from "mathjax-full/js/a11y/assistive-mml.js";
import { AllPackages } from "mathjax-full/js/input/tex/AllPackages.js";
import fs from "fs";
import path from "path";
import "mathjax-full/js/util/entities/all.js";

//
//  Get the command-line arguments
//
// var argv = require("yargs")
//   .demand(1)
//   .strict()
//   .usage("$0 [options] file.html > converted.html")
//   .options({
//     em: {
//       default: 16,
//       describe: "em-size in pixels",
//     },
//     ex: {
//       default: 8,
//       describe: "ex-size in pixels",
//     },
//     packages: {
//       default: AllPackages.sort().join(", "),
//       describe: 'the packages to use, e.g. "base, ams"',
//     },
//     fontCache: {
//       default: "global",
//       describe: "cache type: local, global, none",
//     },
//   }).argv;

//
//  Read the HTML file
//
// const htmlfile = require("fs").readFileSync(argv._[0], "utf8");

//
//  Minimal CSS needed for stand-alone image
//
const CSS = [
  "svg a{fill:blue;stroke:blue}",
  '[data-mml-node="merror"]>g{fill:red;stroke:red}',
  '[data-mml-node="merror"]>rect[data-background]{fill:yellow;stroke:none}',
  "[data-frame],[data-line]{stroke-width:70px;fill:none}",
  ".mjx-dashed{stroke-dasharray:140}",
  ".mjx-dotted{stroke-linecap:round;stroke-dasharray:0,140}",
  "use[data-c]{stroke-width:3px}",
].join("");

const parseMathString = (mathString, isDisplayMath) => {
  const adaptor = liteAdaptor();
  const handler = RegisterHTMLHandler(adaptor);
  //if (argv.assistiveMml) AssistiveMmlHandler(handler);

  const tex = new TeX({
    packages: AllPackages.sort()
      .join(", ")
      .split(/\s*,\s*/),
  });
  const svg = new SVG({ fontCache: true ? "local" : "none" });
  const html = mathjax.document("", { InputJax: tex, OutputJax: svg });

  const node = html.convert(mathString, {
    display: isDisplayMath,
    em: 16,
    ex: 8,
    containerWidth: 80 * 16,
  });

  let result = adaptor.innerHTML(node);
  return false
    ? result.replace(/<defs>/, `<defs><style>${CSS}</style>`)
    : result;
};

// Function to extract and typeset math expressions from file
const typesetMath = async (fileContents) => {
  const mathRegex =
    /(?<!\\)\$\$(.*?)(?<!\\)\$\$|(?<!\\)\$(.*?)(?<!\\)\$|(?<!\\)\\\[(.*?)(?<!\\)\\\]|(?<!\\)\\\((.*?)(?<!\\)\\\)/gs;
  let match;

  let processedString = fileContents
    .replace(/{`\$(.*?)\$`}/gs, "$$$1$")
    .replace(/{`\$\$(.*?)\$\$`}/gs, "$$$$1$$");

  while ((match = mathRegex.exec(fileContents)) !== null) {
    const [fullMatch, displayMath, inlineMath1, displayMathAlt, inlineMathAlt] =
      match;
    const mathContent =
      displayMath || inlineMath1 || displayMathAlt || inlineMathAlt;

    // Typeset the math content

    let result = parseMathString(mathContent, Boolean(displayMath));

    processedString = processedString.replace(fullMatch, result);
  }

  return processedString;
};

//
const processJSXFiles = async (directory) => {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const filePath = path.join(directory, file);
    try {
      if (path.extname(file) === ".tsx") {
        console.log(`Processing file: ${filePath}`);

        const file = fs.readFileSync(filePath, "utf-8");
        const processedContents = await typesetMath(file);

        fs.writeFileSync(filePath, processedContents, "utf-8");
        console.log(`Updated file: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error processing file ${filePath}\nError: ${error}`);
    }
  }
};

const [, , directoryArg] = process.argv;
if (!directoryArg) {
  console.error("Error: Please provide a directory as an argument.");
  process.exit(1);
}

const jsxDirectory = path.resolve(directoryArg);

(async () => {
  try {
    await processJSXFiles(jsxDirectory);
  } catch (error) {
    console.error("Error processing files:", error);
  }
})();
