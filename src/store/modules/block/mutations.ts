import { MutationTree } from "vuex";
import { BlockState } from "@/store/modules/block/state";

export type BlockMutationT<S = BlockState> = {
  [BlockMutationE.removeBlock](state: S, blockID: string): void;
};

export enum BlockMutationE {
  removeBlock = "REMOVE_BLOCK",
}

const mutations: MutationTree<BlockState> & BlockMutationT = {
  [BlockMutationE.removeBlock](state, blockID): void {
    state.blocks = state.blocks.filter((block) => block.id !== blockID);
  },
};

export default mutations;
