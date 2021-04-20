/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { MutationTree } from "vuex";
import { BlockState } from "@/store/modules/block/state";

export type BlockMutationT = {};

enum BlockMutationE {}

const mutations: MutationTree<BlockState> & BlockMutationT = {};

export default mutations;
