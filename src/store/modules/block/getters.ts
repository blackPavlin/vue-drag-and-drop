/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { GetterTree } from "vuex";
import { BlockState } from "@/store/modules/block/state";

// TODO: Вынести
import { RootState } from "@/store";

export type BlockGetterT = {};

enum BlockGetterE {}

const getters: GetterTree<BlockState, RootState> = {};

export default getters;
