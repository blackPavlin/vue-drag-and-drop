import { MutationTree } from "vuex";
import { LineState } from "@/store/modules/line/state";

export type LineMutationT<S = LineState> = {
  [LineMutationE.removeLine](state: S, lineID: string): void;
};

export enum LineMutationE {
  removeLine = "REMOVE_LINE",
  createLine = "CREATE_LINE",
}

const mutations: MutationTree<LineState> & LineMutationT = {
  [LineMutationE.removeLine](state, lineID): void {
    state.lines = state.lines.filter((line) => line.id !== lineID);
  },
};

export default mutations;
