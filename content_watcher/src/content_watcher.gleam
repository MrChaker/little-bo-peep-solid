import filespy
import gleam/erlang/process
import gleam/io
import gleam/string
import renderer_gleam

pub fn main() {
  let _res =
    filespy.new()
    |> filespy.add_dir("../../little-bo-peep-solid/src")
    // |> filespy.add_dir("/mnt")
    |> filespy.set_handler(fn(path, event) {
      // for some reason there's no event when using content dir directly
      case string.contains(path, "/src/content/"), event {
        True, filespy.Unknown(_) -> {
          Nil
        }
        True, _ -> {
          let _ = renderer_gleam.main()
          Nil
        }
        False, _ -> Nil
      }
    })
    |> filespy.start()
  // Start the watcher!

  process.sleep_forever()
}
