import { createStore } from "solid-js/store";

type Store = {
  page_state: "fixed" | "free";
  burger_background_on: boolean;
};

const [store, set_store] = createStore<Store>({
  page_state: "fixed",
  burger_background_on: false,
});

export { store, set_store };
export type { Store };
