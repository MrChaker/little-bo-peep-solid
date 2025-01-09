import gleam/int
import gleam/io
import gleam/list
import gleam/regexp
import gleam/result
import gleam/string
import lbp_desugaring as desugarer
import shellout
import simplifile

fn pop_path(path: String) -> String {
  path
  |> string.split("/")
  |> list.reverse()
  |> list.drop(1)
  |> list.reverse()
  |> string.join("/")
}

fn root() {
  let assert Ok(root) = simplifile.current_directory()
  pop_path(root)
}

fn add_space_between_word_and_digit(str: String) -> String {
  let assert Ok(re) = regexp.from_string("(\\w+)(\\d+)")
  let assert [_, name, digit, _] = regexp.split(re, str)
  name <> " " <> digit
}

fn add_boilerplate(file_path: String, file_name: String) {
  use file_content <- result.try(simplifile.read(file_path))
  let imports =
    "
    import ArticleTitle from \"~/components/ArticleTitle\"
    import Container from \"~/components/Container\";
    import Nav from \"~/components/Nav\";
    import {Section, Example, NoBreak, CustomBlock, Pause, WriterlyBlankLine} from \"~/components/Wrappers\"
    import {CentralDisplay, CentralDisplayItalic} from \"~/components/Delimiters\"
    import {Math, MathBlock} from \"~/components/Math\"
    import {ImageRight, ImageLeft} from \"~/components/SideImage\"
    import Image from \"~/components/Image\"
    import InlineImage from \"~/components/InlineImage\"
    import {Exercise, Exercises} from \"~/components/Exercises\"
    import Solution from \"~/components/Solution\"
    import Table from \"~/components/Table\"
    import Grid from \"~/components/Grid\"
    import {List, Item} from \"~/components/List\"
    import {SectionDivider, StarDivider} from \"~/components/SectionDivider\"
    import VerticalChunk from \"~/components/VerticalChunk\"
    import useScrollX from \"~/hooks/useScrollX\"
    import useSaveScroll from \"~/hooks/useSaveScroll\"\n"

  let file_name = string.drop_end(file_name, 4)
  // remove .tsx
  let capetalized = string.capitalise(file_name)
  let label =
    "{`"
    <> add_space_between_word_and_digit(capetalized)
    <> ": ` + props.title}"
  let on_mobile_label =
    "{`"
    <> add_space_between_word_and_digit(capetalized)
    <> ": ` + (props.mobile_title || props.title)}"

  let article_component = "const " <> capetalized <> " = (props: any) => {
            useScrollX();
            useSaveScroll();
            return (
            <>
                <ArticleTitle label=" <> label <> " on_mobile_label=" <> on_mobile_label <> " />
                {props.children}
             </>)
        }\n
    "

  use _ <- result.try(simplifile.write(
    file_path,
    imports <> article_component <> file_content,
  ))

  Ok("")
}

fn get_digit(str: String) -> Int {
  let assert Ok(re) = regexp.from_string("(\\w+)(\\d+)")
  let assert [_, _, digit, _] = regexp.split(re, str)

  let assert Ok(res) = int.parse(digit)
  res
}

fn is_of_article_type(str: String, article_type: String) -> Bool {
  let assert Ok(re) = regexp.from_string("(\\w+)(\\d+)")
  let assert [_, name, _, _] = regexp.split(re, str)
  name == article_type
}

fn get_sorted_articles(
  article_type,
) -> Result(List(#(Int, String)), simplifile.FileError) {
  use content_dir_items <- result.try(simplifile.read_directory(
    root() <> "/src/content",
  ))

  let assert Ok(output) =
    list.scan(content_dir_items, [], fn(acc, item) {
      let full_path = root() <> "/src/content/" <> item
      let assert Ok(is_dir) = simplifile.is_directory(full_path)
      case
        !string.starts_with(item, "#")
        && is_dir
        && is_of_article_type(item, article_type)
      {
        True -> {
          list.append(acc, [#(get_digit(item), full_path)])
        }
        False -> acc
      }
    })
    |> list.last()

  Ok(
    list.sort(output, fn(a, b) {
      let #(a, _) = a
      let #(b, _) = b
      int.compare(a, b)
    }),
  )
}

fn find_title(line: String, prop_name: String) {
  let trimmed = line |> string.trim()
  case string.starts_with(trimmed, prop_name) {
    True -> {
      let assert Ok(#(_, title)) = string.split_once(trimmed, " ")
      Ok(title)
    }
    False -> Error("")
  }
}

fn get_article_titles(path: String) {
  io.debug(path)
  use file_content <- result.try(simplifile.read(path))
  let lines = string.split(file_content, "\n")
  let title =
    list.find_map(lines, find_title(_, "title"))
    |> result.unwrap("")

  let mobile_title =
    list.find_map(lines, find_title(_, "mobile_title"))
    |> result.unwrap(title)

  Ok(#(title, mobile_title))
}

fn append_to_list(
  articles: List(#(Int, String)),
  article_type: String,
  output: String,
  // generated: String
) {
  case articles {
    [] -> output
    [#(i, path), ..rest] -> {
      let assert Ok(#(title, mobile_title)) =
        get_article_titles(path <> "/__parent.emu")

      let output =
        output
        <> "<MenuItem article_type=\""
        <> string.inspect(i)
        <> "\" label=\""
        <> title
        <> "\" on_mobile=\""
        <> mobile_title
        <> "\" href=\""
        <> article_type
        <> string.inspect(i)
        <> "\"/>"

      append_to_list(rest, article_type, output)
    }
  }
}

fn loop_splits(splits: List(String), generated: String) {
  case splits {
    [] -> string.join(splits, "")
    [prev_content, opening_div, _, closing_div, ..rest] -> {
      prev_content
      <> opening_div
      <> generated
      <> closing_div
      <> loop_splits(rest, generated)
    }
    _ -> string.join(splits, "")
  }
}

fn replace_content(path: String, article_type: String, generated: String) {
  // put content inside <div id="article_type"></div>
  use file_contents <- result.try(simplifile.read(path))
  let assert Ok(re) =
    regexp.compile(
      "(?s)(<div id=\"" <> article_type <> "\">)(.*?)(</div>)",
      regexp.Options(case_insensitive: False, multi_line: True),
    )
  let splits = regexp.split(re, file_contents)
  // each match will be splitted into 5 splits
  io.debug(splits |> list.length)

  case list.length(splits) >= 5 {
    True -> {
      simplifile.write(path, loop_splits(splits, generated))
    }
    False -> {
      Ok(Nil)
    }
  }
}

fn render_articles_list(path: String) {
  ["chapter", "bootcamp"]
  |> list.each(fn(article_type) {
    let assert Ok(articles) = get_sorted_articles(article_type)
    case list.length(articles) {
      0 -> Ok(Nil)
      _ -> {
        let output =
          "<Title label=\""
          <> string.capitalise(article_type)
          <> "\" />\n <ItemsList>\n"
          <> append_to_list(articles, article_type, "")
          <> "</ItemsList>\n"

        replace_content(path, article_type, output)
      }
    }
  })
}

pub fn main() {
  io.debug("🚀 Parsing markup to jsx 🚀")
  desugarer.emit_book(
    path: root() <> "/src/content",
    emitter: "solid",
    output_folder: root() <> "/generated",
  )

  io.debug("🚀 Adding Boilerplate 🚀")
  use generated_files <- result.try(simplifile.read_directory(
    root() <> "/generated",
  ))
  list.each(generated_files, fn(file) {
    add_boilerplate(root() <> "/generated/" <> file, file)
  })
  io.debug("🚀 Render table of contents and chapter panel 🚀")
  render_articles_list(root() <> "/src/components/TableOfContents.tsx")
  render_articles_list(root() <> "/src/components/Panel.tsx")

  io.println("🚀 Parsing done ! Running Running prettier 🚀")
  case
    shellout.command(
      run: "npx",
      in: "/",
      with: ["prettier", "--write", root() <> "/generated"],
      opt: [],
    )
  {
    Ok(_) -> Nil
    Error(#(_, e)) -> io.println_error("🔴 Could not run prettier " <> e)
  }

  io.println("🚀 Moving generated files to routes 🚀")
  use generated_files <- result.try(simplifile.read_directory(
    root() <> "/generated",
  ))
  list.each(generated_files, fn(file) {
    let assert Ok(content) = simplifile.read(root() <> "/generated/" <> file)
    simplifile.write(root() <> "/src/routes/article/" <> file, content)
  })
  io.println("🟢 Done 🟢")

  Ok(Nil)
}
