/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { GetterTree } from "vuex";
import { LineState } from "@/store/modules/line/state";

// TODO: Вынести
import { RootState } from "@/store/types";

export type LineGetterT = {};

export enum LineGetterE {}

const getters: GetterTree<LineState, RootState> & LineGetterT = {};

export default getters;
