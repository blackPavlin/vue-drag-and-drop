/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { GetterTree } from "vuex";
import { LineState } from "@/store/modules/line/state";

// TODO: Вынести
import { RootState } from "@/store";

export type LineGetterT = {};

enum LineGetterE {}

const getters: GetterTree<LineState, RootState> = {};

export default getters;
