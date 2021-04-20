/* eslint-disable @typescript-eslint/no-empty-interface */
export interface LineState {
  lines: Line[];
}

export interface Line {}

const state: LineState = {
  lines: [],
};

export default state;
