/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { ActionTree } from "vuex";
import { BlockState } from "@/store/modules/block/state";

// TODO: Вынести
import { RootState } from "@/store";

export type BlockActionT = {};

enum BlockActionE {}

const actions: ActionTree<BlockState, RootState> & BlockActionT = {};

export default actions;
