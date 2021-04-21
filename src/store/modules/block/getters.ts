import { GetterTree } from "vuex";
import { BlockState } from "@/store/modules/block/state";
import { Block } from "@/models/Block";

// TODO: Вынести
import { RootState } from "@/store/types";

export type BlockGetterT = {
  [BlockGetterE.getBlocks](state: BlockState): Block[];
};

export enum BlockGetterE {
  getBlocks = "GET_BLOCKS",
}

const getters: GetterTree<BlockState, RootState> & BlockGetterT = {
  [BlockGetterE.getBlocks]: (state): Block[] => state.blocks,
};

export default getters;
