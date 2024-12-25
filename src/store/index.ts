import { createStore, SetStoreFunction } from "solid-js/store";

type ExercisesState = {
  selected: boolean;
  solution_open: boolean;
  transition_duration: number;
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

const getSelectedExercise = (store: Store) => {
  return store.exercises.find((exercise, i) => exercise.selected);
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

const updateExerciseByIndex = (
  store: Store,
  set_store: SetStoreFunction<Store>,
  index: number,
  update_obj: {
    field: keyof ExercisesState[number];
    value: any;
  }
) => {
  set_store((prev) => ({
    ...prev,
    exercises: prev.exercises.map((exercise, i) => {
      if (i === index) {
        return {
          ...exercise,
          [update_obj.field]: update_obj.value,
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
  updateExerciseByIndex,
  getExerciseByIndex,
  getSelectedExercise,
};
export type { Store };
