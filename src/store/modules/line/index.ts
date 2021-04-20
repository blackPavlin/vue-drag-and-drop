import { Module, Store, CommitOptions, DispatchOptions } from "vuex";

import state, { LineState } from "@/store/modules/line/state";
import actions, { LineActionT } from "@/store/modules/line/actions";
import mutations, { LineMutationT } from "@/store/modules/line/mutations";
import getters, { LineGetterT } from "@/store/modules/line/getters";

// TODO: Вынести
import { RootState } from "@/store";

export type LineStore<S = LineState> = Omit<
  Store<S>,
  "getters" | "commit" | "dispatch"
> & {
  commit<
    K extends keyof LineMutationT,
    P extends Parameters<LineMutationT[K]>[1]
  >(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<LineMutationT[K]>;
} & {
  dispatch<K extends keyof LineActionT>(
    key: K,
    payload?: Parameters<LineActionT[K]>[1],
    options?: DispatchOptions
  ): ReturnType<LineActionT[K]>;
} & {
  getters: {
    [K in keyof LineGetterT]: ReturnType<LineGetterT[K]>;
  };
};

const line: Module<LineState, RootState> = {
  state,
  actions,
  mutations,
  getters,
};

export { LineState };
export default line;
