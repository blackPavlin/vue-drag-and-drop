import { createStore, createLogger } from "vuex";
import block from "@/store/modules/block";
import line from "@/store/modules/line";
import { RootState, Store } from "@/store/types";

export const store = createStore<RootState>({
  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : [],
  modules: {
    block,
    line,
  },
});

export function useStore(): Store {
  return store as Store;
}
