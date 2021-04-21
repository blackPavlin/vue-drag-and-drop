import { BlockState } from "@/store/modules/block/state";
import { LineState } from "@/store/modules/line/state";
import { BlockStore } from "@/store/modules/block";
import { LineStore } from "@/store/modules/line";

export type RootState = {
  block: BlockState;
  line: LineState;
};

export type Store = BlockStore<Pick<RootState, "block">> &
  LineStore<Pick<RootState, "line">>;
