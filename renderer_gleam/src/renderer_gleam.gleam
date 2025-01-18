import gleam/option.{Some}
import gleam/list
import gleam/string
import simplifile
import infrastructure as infra
import renderer_refactor as rf
import writerly_parser as wp
import pipeline
import blamedlines.{type BlamedLine, type Blame, BlamedLine, Blame}
import vxml_parser.{type VXML, BlamedAttribute}
import solid

const ins = string.inspect

fn blame_us(message: String) -> Blame {
  Blame(message, -1, [])
}

fn lbp_splitter(root: VXML) -> Result(List(#(VXML, FragmentType)), LBPFragmentingError) {
  let chapter_vxmls = infra.children_with_tag(root, "Chapter")
  let bootcamp_vxmls = infra.children_with_tag(root, "Bootcamp")
  use toc_vxml <- infra.on_error_on_ok(
    infra.unique_child_with_tag(root, "TOCAuthorSuppliedContents"),
    with_on_error: fn(error) {
      case error {
        infra.MoreThanOne -> Error(MoreThanOneTOCAuthorSuppliedContents)
        infra.LessThanOne -> Error(NoTOCAuthorSuppliedContents)
      }
    }
  )
  use panel_vxml <- infra.on_error_on_ok(
    infra.unique_child_with_tag(root, "PanelAuthorSuppliedContents"),
    with_on_error: fn(error) {
      case error {
        infra.MoreThanOne -> Error(MoreThanOnePanelAuthorSuppliedContents)
        infra.LessThanOne -> Error(NoPanelAuthorSuppliedContents)
      }
    }
  )

  Ok(list.flatten(
    [
      [#(toc_vxml, TOCAuthorSuppliedContents)],
      [#(panel_vxml, PanelAuthorSuppliedContents)],
      list.index_map(chapter_vxmls, fn(c, index){#(c, Chapter(index + 1))}),
      list.index_map(bootcamp_vxmls, fn(c, index){#(c, Bootcamp(index + 1))}),
    ]
  ))
}

fn lbp_chapter_bootcamp_common_emitter(
  fragment: VXML,
  fragment_type: FragmentType,
  number: Int
) -> Result(#(String, List(BlamedLine), FragmentType), LBPEmitterError) {
  use with_attribute <- infra.on_error_on_ok(
    over: infra.prepend_unique_key_attribute(
      fragment,
      BlamedAttribute(blame_us("lbp_fragment_emitter(A)"), "number", ins(number))
    ),
    with_on_error: fn(_) { Error(NumberAttributeAlreadyExists(fragment_type, number)) }
  )

  let lines = list.flatten([
    [
      case fragment_type {
        Chapter(_) -> BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import Chapter from \"~/components/Chapter\";")
        Bootcamp(_) -> BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import Bootcamp from \"~/components/Bootcamp\";")
        _ -> panic as "bad fragment_type"
      }
    ],
    [
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import { Section, Example, NoBreak, CustomBlock, Pause, WriterlyBlankLine } from \"~/components/Wrappers\";"),
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import { CentralDisplay, CentralDisplayItalic } from \"~/components/Delimiters\";"),
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import { Math, MathBlock } from \"~/components/Math\";"),
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import { ImageRight, ImageLeft } from \"~/components/SideImage\";"),
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import Image from \"~/components/Image\";"),
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import InlineImage from \"~/components/InlineImage\";"),
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import { Exercise, Exercises } from \"~/components/Exercises\";"),
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import Solution from \"~/components/Solution\";"),
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import Table from \"~/components/Table\";"),
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import Grid from \"~/components/Grid\";"),
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import { List, Item } from \"~/components/List\";"),
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import { SectionDivider, StarDivider } from \"~/components/SectionDivider\";"),
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import VerticalChunk from \"~/components/VerticalChunk\";"),
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, ""),
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, "const Article = () => {"),
      BlamedLine(blame_us("lbp_fragment_emitter"), 2, "return ("),
    ],
    solid.vxml_to_jsx_blamed_lines(with_attribute, 4),
    [
      BlamedLine(blame_us("lbp_fragment_emitter"), 2, ");"),
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, "};"),
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, ""),
      BlamedLine(blame_us("lbp_fragment_emitter"), 0, "export default Article;"),
    ]
  ])

  let path = case fragment_type {
    Chapter(number) -> "routes/article/chapter" <> ins(number) <> ".tsx"
    Bootcamp(number) -> "routes/article/bootcamp" <> ins(number) <> ".tsx"
    _ -> panic as "should be chapter or bootcamp"
  }

  Ok(#(path, lines, fragment_type))
}

fn toc_emitter(fragment: VXML, fragment_type: FragmentType) -> Result(#(String, List(BlamedLine), FragmentType), LBPEmitterError) {
  let lines = list.flatten([
    [
      BlamedLine(blame_us("toc_emitter"), 0, "import TOCTitle from \"./TOCTitle\";"),
      BlamedLine(blame_us("toc_emitter"), 0, "import TOCItem from \"./TOCItem\";"),
      BlamedLine(blame_us("toc_emitter"), 0, "import Spacer from \"./Spacer\";"),
      BlamedLine(blame_us("toc_emitter"), 0, ""),
      BlamedLine(blame_us("toc_emitter"), 0, "const TOCAuthorSuppliedContent = () => {"),
      BlamedLine(blame_us("toc_emitter"), 2, "return ("),
      BlamedLine(blame_us("toc_emitter"), 4, "<>"),
    ],
    solid.vxmls_to_jsx_blamed_lines(fragment |> infra.get_children, 6),
    [
      BlamedLine(blame_us("toc_emitter"), 4, "</>"),
      BlamedLine(blame_us("toc_emitter"), 2, ");"),
      BlamedLine(blame_us("toc_emitter"), 0, "};"),
      BlamedLine(blame_us("toc_emitter"), 0, ""),
      BlamedLine(blame_us("toc_emitter"), 0, "export default TOCAuthorSuppliedContent;"),
    ],
  ])

  let path = "components/TOCAuthorSuppliedContents.tsx"

  Ok(#(path, lines, fragment_type))
}

fn panel_emitter(fragment: VXML, fragment_type: FragmentType) -> Result(#(String, List(BlamedLine), FragmentType), LBPEmitterError) {
  let lines = list.flatten([
    [
      BlamedLine(blame_us("panel_emitter"), 0, "import PanelTitle from \"./PanelTitle\";"),
      BlamedLine(blame_us("panel_emitter"), 0, "import PanelItem from \"./PanelItem\";"),
      BlamedLine(blame_us("panel_emitter"), 0, ""),
      BlamedLine(blame_us("panel_emitter"), 0, "const PanelAuthorSuppliedContent = () => {"),
      BlamedLine(blame_us("panel_emitter"), 2, "return ("),
      BlamedLine(blame_us("panel_emitter"), 4, "<>"),
    ],
    solid.vxmls_to_jsx_blamed_lines(fragment |> infra.get_children, 6),
    [
      BlamedLine(blame_us("panel_emitter"), 4, "</>"),
      BlamedLine(blame_us("panel_emitter"), 2, ");"),
      BlamedLine(blame_us("panel_emitter"), 0, "};"),
      BlamedLine(blame_us("panel_emitter"), 0, ""),
      BlamedLine(blame_us("panel_emitter"), 0, "export default PanelAuthorSuppliedContent;"),
    ],
  ])

  let path = "components/PanelAuthorSuppliedContents.tsx"

  Ok(#(path, lines, fragment_type))
}

fn lbp_emitter(pair : #(VXML, FragmentType)) -> Result(#(String, List(BlamedLine), FragmentType), LBPEmitterError) {
  let #(vxml, fragment_type) = pair
  case fragment_type {
    Chapter(number) -> lbp_chapter_bootcamp_common_emitter(vxml, fragment_type, number)
    Bootcamp(number) -> lbp_chapter_bootcamp_common_emitter(vxml, fragment_type, number)
    TOCAuthorSuppliedContents -> toc_emitter(vxml, fragment_type)
    PanelAuthorSuppliedContents -> panel_emitter(vxml, fragment_type)
  }
}

fn jsx_printer(
  output_dir : String,
  thing: #(String, List(BlamedLine), FragmentType),
  use_prettier: Bool
) -> Result(String, JSXPrinterWithPrettierError) {
  let #(local_path, lines, _) = thing
  let output_dir = infra.drop_ending_slash(output_dir)
  let local_path = infra.drop_starting_slash(local_path)
  let path = output_dir <> "/" <> local_path
  let content = blamedlines.blamed_lines_to_string(lines)
  case simplifile.write(path, content) {
    Error(e) -> Error(IOError(ins(e) <> ": " <> path))
    Ok(Nil) -> {
      case use_prettier {
        False -> Ok(path)
        True -> case solid.run_prettier(".", path) {
          Ok(_) -> Ok(path)
          Error(e) -> Error(PrettierError(e))
        }
      }
    }
  }
}

type JSXPrinterWithPrettierError {
  IOError(String)
  PrettierError(#(Int, String))
}

type FragmentType {
  Chapter(Int)
  Bootcamp(Int)
  TOCAuthorSuppliedContents
  PanelAuthorSuppliedContents
}

type LBPFragmentingError {
  NoTOCAuthorSuppliedContents
  MoreThanOneTOCAuthorSuppliedContents
  NoPanelAuthorSuppliedContents
  MoreThanOnePanelAuthorSuppliedContents
}

type LBPEmitterError {
  NumberAttributeAlreadyExists(FragmentType, Int)
}

pub fn main() {
  let use_prettier = True

  let blamed_lines_assembler : rf.BlamedLinesAssembler(simplifile.FileError) = wp.assemble_blamed_lines
  let source_parser : rf.SourceParser(List(wp.Writerly), wp.WriterlyParseError) = fn(blamed_lines) { wp.parse_blamed_lines(blamed_lines, False) }
  let source_to_vxml_converter : rf.SourceToVXMLConverter(List(wp.Writerly)) = wp.writerlys_to_vxmls
  let pipeline : List(infra.Pipe) = pipeline.lbp_pipeline()
  let splitter : rf.Splitter(FragmentType, LBPFragmentingError) = lbp_splitter
  let emitter : rf.FragmentEmitter(FragmentType, LBPEmitterError) = lbp_emitter
  let printer : rf.FragmentPrinter(FragmentType, JSXPrinterWithPrettierError) = fn(a, b) { jsx_printer(a, b, use_prettier) }

  let renderer : rf.Renderer(
    simplifile.FileError,
    List(wp.Writerly),
    wp.WriterlyParseError,
    FragmentType,
    LBPFragmentingError,
    LBPEmitterError,
    JSXPrinterWithPrettierError,
  ) = rf.Renderer(
    assembler: blamed_lines_assembler,
    source_parser: source_parser,
    source_converter: source_to_vxml_converter,
    pipeline: pipeline,
    splitter: splitter,
    fragment_emitter: emitter,
    fragment_printer: printer,
  )

  let default_artifact_directory = "../renderer_artifacts"

  let assembler_debug_options  = rf.BlamedLinesAssemblerDebugOptions(
    debug_print: False,
    artifact_print: False,
    artifact_directory: default_artifact_directory
  )

  let source_parser_debug_options = rf.SourceParserDebugOptions(
    debug_print: False,
    artifact_print: False,
    artifact_directory: default_artifact_directory,
  )

  let source_emitter_debug_options = rf.SourceToVXMLConverterDebugOptions(
    debug_print: True,
    artifact_print: False,
    artifact_directory: default_artifact_directory,
  )

  let pipeline_debug_options = rf.PipelineDebugOptions(
    debug_print: fn(_step, _pipe) { False },
    artifact_print: fn(_, _) { False },
    artifact_directory: default_artifact_directory,
  )

  let splitter_debug_options : rf.SplitterDebugOptions(
    FragmentType
  ) = rf.SplitterDebugOptions(
    debug_print: fn(_vxml, _fragment_type) { False },
    artifact_print: fn(_vxml, _fragment_type) { False },
    artifact_directory: default_artifact_directory,
  )

  let fragment_emitter_debug_options : rf.FragmentEmitterDebugOptions(
    FragmentType
  ) = rf.FragmentEmitterDebugOptions(
    debug_print: fn(_vxml, _fragment_type) { False },
    artifact_print: fn(_vxml, _fragment_type) { False },
    artifact_directory: default_artifact_directory,
  )

  let fragment_printer_debug_options : rf.FragmentPrinterDebugOptions(
    FragmentType
  ) = rf.FragmentPrinterDebugOptions(
    debug_print: fn(_local_path, _lines, _fragment_type) { False },
    artifact_print: fn(_local_path, _lines, _fragment_type) { False },
    artifact_directory: default_artifact_directory,
  )

  let debug_options : rf.RendererDebugOptions(FragmentType) = rf.RendererDebugOptions(
    basic_messages: True,
    error_messages: True,
    artifact_print_is_debug_print: True,
    clear_artifact_directories: [default_artifact_directory],
    assembler_debug_options: assembler_debug_options,
    source_parser_debug_options: source_parser_debug_options,
    source_emitter_debug_options: source_emitter_debug_options,
    pipeline_debug_options: pipeline_debug_options,
    splitter_debug_options: splitter_debug_options,
    emitter_debug_options: fragment_emitter_debug_options,
    printer_debug_options: fragment_printer_debug_options,
  )

  let _ = rf.run_renderer(
    "../src/content",
    renderer,
    debug_options,
    Some("../src")
  )

  Nil
}
