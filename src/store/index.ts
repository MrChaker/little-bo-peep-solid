import { createStore, SetStoreFunction } from "solid-js/store";

type ExercisesState = {
  selected: boolean;
  solution_open: boolean;
  transition_duration: number;
}[];

type Store = {
  page_state: "fixed" | "free";
  panel_opened: boolean;
  burger_background_on: boolean;
  exercises: ExercisesState;

  selected_exo: number;
  solutions_open: boolean[];
  transition_duration: number;

  show_section_dividers: boolean;
  show_areas: boolean;
  show_squiggles: boolean;
};

const [store, set_store] = createStore<Store>({
  page_state: "fixed",
  panel_opened: false,

  burger_background_on: false,
  exercises: [],

  selected_exo: 0,
  solutions_open: [],
  transition_duration: 1000,

  show_section_dividers: false,
  show_areas: false,
  show_squiggles: true,
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
