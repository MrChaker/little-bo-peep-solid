import { createStore, SetStoreFunction } from "solid-js/store";

type ExercisesState = {
  selected: boolean;
  solution_open: boolean;
}[];

type Store = {
  page_state: "fixed" | "free";
  burger_background_on: boolean;
  exercises: ExercisesState;
};

const [store, set_store] = createStore<Store>({
  page_state: "fixed",
  burger_background_on: false,
  exercises: [],
});

const getExerciseByIndex = (store: Store, index: number) => {
  return store.exercises.find((exercise, i) => i === index);
};

const updateSelectedExercises = (
  store: Store,
  set_store: SetStoreFunction<Store>,
  index: number
) => {
  set_store((prev) => ({
    ...prev,
    exercises: prev.exercises.map((exercise, i) => ({
      ...exercise,
      selected: i === index,
    })),
  }));
};

const updateOpenState = (
  store: Store,
  set_store: SetStoreFunction<Store>,
  index: number,
  open: boolean
) => {
  console.log(store);
  set_store((prev) => ({
    ...prev,
    exercises: prev.exercises.map((exercise, i) => {
      if (i === index) {
        return {
          ...exercise,
          solution_open: open,
        };
      }
      return exercise;
    }),
  }));
};

export {
  store,
  set_store,
  updateSelectedExercises,
  updateOpenState,
  getExerciseByIndex,
};
export type { Store };
