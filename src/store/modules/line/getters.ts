import { GetterTree } from "vuex";
import { LineState } from "@/store/modules/line/state";
import { Line } from "@/models/Line";

// TODO: Вынести
import { RootState } from "@/store/types";

export type LineGetterT = {
  [LineGetterE.getLines](state: LineState): Line[];
};

export enum LineGetterE {
  getLines = "GET_LINES",
}

const getters: GetterTree<LineState, RootState> & LineGetterT = {
  [LineGetterE.getLines]: (state) => state.lines,
};

export default getters;
