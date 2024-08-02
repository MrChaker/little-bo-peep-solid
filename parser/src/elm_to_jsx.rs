use elm_parser::counter::counters::Counters;
use elm_parser::desugarer::{AttachToEnum, Desugarer, IgnoreOptions, ParagraphIndentOptions};
use elm_parser::emitter::Emitter;
use elm_parser::parser::Parser;
use elm_parser::parser_helpers::DataCell;

pub fn elm_to_jsx(elm: &str, counters: &mut Counters) -> String {
    let mut json = Parser::new(counters);
    let json_tree = json.export_json(&elm.to_string(), None, false);

    let mut desugarer: Desugarer = Desugarer::new(json_tree.as_str(), json.id);
    desugarer = desugarer
        .pre_process_exercises()
        .add_increamental_attr(vec![("Solution", "solution_number")])
        .auto_increamental_title("Exercise", "Exercise")
        .auto_increamental_title("Example", "Example")
        .wrap_block_delimited("InnerParagraph")
        .wrap_children(
            vec!["Section", "Solution", "Example", "Exercise"],
            "Paragraph",
            &Some(vec![
                IgnoreOptions {
                    element: "InlineImage",
                    attach_to: AttachToEnum::BOTH,
                },
                IgnoreOptions {
                    element: "ImageRight",
                    attach_to: AttachToEnum::BEFORE,
                },
                IgnoreOptions {
                    element: "ImageLeft",
                    attach_to: AttachToEnum::BEFORE,
                },
                IgnoreOptions {
                    element: "del",
                    attach_to: AttachToEnum::BOTH,
                },
                IgnoreOptions {
                    element: "Space",
                    attach_to: AttachToEnum::BEFORE,
                },
            ]),
        )
        .wrap_children(vec!["Grid"], "Span", &None)
        .wrap_children(vec!["List"], "Item", &None)
        .add_indent(&ParagraphIndentOptions {
            tags_before_non_indents: vec![
                "Image",
                "DisplayImage",
                "Pause",
                "StarDivider",
                "MathBlock",
                "Table",
                "SectionDivider",
                "Example",
                "InlineImage",
                "List",
                "Grid",
                "del",
                "DisplayCentered",
            ],
            tags_with_non_indent_first_child: vec![
                "Section",
                "Example",
                "Solution",
                "Table",
                "td",
                "ImageLink",
                "Paragraph",
                "ExerciseQuestion",
                "Exercise",
                "Item",
            ],
        })
        .add_attribute(vec!["Solution", "Example"], ("no_padding", "true"))
        .auto_convert_to_float(vec!["line", "padding_left"]);

    let json_value: DataCell = serde_json::from_str(&desugarer.json).unwrap();

    let emitter: Emitter =
        Emitter::new(vec!["img", "SectionDivider", "InlineImage", "StarDivider"]);

    emitter.emit_json(&json_value)
}
