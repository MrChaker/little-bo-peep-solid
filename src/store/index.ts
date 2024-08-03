import { createStore } from "solid-js/store";

type Store = {
  page_state: "fixed" | "free";
};

const [store, set_store] = createStore<Store>({
  page_state: "fixed",
});

export { store, set_store };
export type { Store };
