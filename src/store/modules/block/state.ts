/* eslint-disable @typescript-eslint/no-empty-interface */
export interface BlockState {
  blocks: Block[];
}

export interface Block {}

const state: BlockState = {
  blocks: [],
};

export default state;
