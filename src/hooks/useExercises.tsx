import { useLocation, useSearchParams } from "@solidjs/router";
import { Accessor, createEffect, createSignal, Setter } from "solid-js";
import { SetStoreFunction } from "solid-js/store";
import { useLocalStorage } from "solidjs-hooks";
import { useGlobalContext } from "~/store/StoreProvider";

const useExercises = (length: number) => {
  const { store, set_store } = useGlobalContext();

  const stored_selected_exo = () => store.selected_exo;
  const stored_solutions_open = () => store.solutions_open;

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const article = () => location.pathname.split("/").pop();

  const [selected_exo, set_selected_exo] = useLocalStorage(
    `${article()}_selected_exo`,
    "0"
  );
  set_store("selected_exo", Number(selected_exo()));

  const [solutions_open, set_solutions_open] = createSignal(
    Array.from({ length }).map(() => false)
  );

  const update_solution_open = (
    index: number,
    value: boolean,
    update_store: boolean = true
  ) => {
    set_solutions_open((prev) => {
      prev[index] = value;
      return [...prev];
    });

    localStorage.setItem(`${article()}_exo_${index}_opened`, String(value));

    if (update_store) {
      set_store("solutions_open", (prev) => {
        prev[index] = value;
        return [...prev];
      });
    }
  };

  if (localStorage) {
    let sso_array = [];
    for (let i = 0; i < length; i++) {
      let sso = localStorage.getItem(`${article()}_exo_${i}_opened`) || "false";
      sso_array.push(sso === "true");
    }
    set_store("solutions_open", sso_array);
  }

  // set local stored values from search params if they exist
  if (typeof searchParams.selected === "string") {
    set_selected_exo(searchParams.selected);
    set_store("selected_exo", Number(selected_exo()));
  }

  if (typeof searchParams.opened === "string") {
    update_solution_open(
      Number(selected_exo()),
      searchParams.opened === "true"
    );
  }

  createEffect(() => {
    set_selected_exo(String(stored_selected_exo()));
    setSearchParams({
      selected: String(stored_selected_exo()),
      opened: stored_solutions_open()[stored_selected_exo()],
    });
  });

  createEffect(() => {
    update_solution_open(
      Number(stored_selected_exo()),
      stored_solutions_open()[stored_selected_exo()],
      false
    );
    setSearchParams({
      opened: stored_solutions_open()[stored_selected_exo()],
      selected: String(stored_selected_exo()),
    });
  });
};

export default useExercises;
