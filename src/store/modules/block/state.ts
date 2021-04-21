import { Block } from "@/models/Block";

export interface BlockState {
  blocks: Block[];
}

const state: BlockState = {
  blocks: [
    { id: "1", x: 10, y: 10 },
    { id: "2", x: 10, y: 10 },
  ],
};

export default state;
