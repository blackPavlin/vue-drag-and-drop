import { Module, Store, CommitOptions, DispatchOptions } from "vuex";

import state, { BlockState } from "@/store/modules/block/state";
import actions, { BlockActionT } from "@/store/modules/block/actions";
import mutations, { BlockMutationT } from "@/store/modules/block/mutations";
import getters, { BlockGetterT } from "@/store/modules/block/getters";

// TODO: Вынести
import { RootState } from "@/store";

export type BlockStore<S = BlockState> = Omit<
  Store<S>,
  "getters" | "commit" | "dispatch"
> & {
  commit<
    K extends keyof BlockMutationT,
    P extends Parameters<BlockMutationT[K]>[1]
  >(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<BlockMutationT[K]>;
} & {
  dispatch<K extends keyof BlockActionT>(
    key: K,
    payload?: Parameters<BlockActionT[K]>[1],
    options?: DispatchOptions
  ): ReturnType<BlockActionT[K]>;
} & {
  getters: {
    [K in keyof BlockGetterT]: ReturnType<BlockGetterT[K]>;
  };
};

const block: Module<BlockState, RootState> = {
  state,
  actions,
  mutations,
  getters,
};

export { BlockState };
export default block;
