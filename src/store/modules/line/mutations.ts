/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { MutationTree } from "vuex";
import { LineState } from "@/store/modules/line/state";

export type LineMutationT = {};

enum LineMutationE {}

const mutations: MutationTree<LineState> & LineMutationT = {};

export default mutations;
