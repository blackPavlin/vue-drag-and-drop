import { createStore, createLogger } from "vuex";
import block, { BlockState, BlockStore } from "@/store/modules/block";
import line, { LineState, LineStore } from "@/store/modules/line";

export type RootState = {
  block: BlockState;
  line: LineState;
};

export type Store = BlockStore<Pick<RootState, "block">> &
  LineStore<Pick<RootState, "line">>;

export default createStore({
  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : [],
  modules: {
    block,
    line,
  },
});
