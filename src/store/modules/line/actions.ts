/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { ActionTree } from "vuex";
import { LineState } from "@/store/modules/line/state";

// TODO: Вынести
import { RootState } from "@/store";

export type LineActionT = {};

enum LineActionE {}

const actions: ActionTree<LineState, RootState> & LineActionT = {};

export default actions;
