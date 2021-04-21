import { Line } from "@/models/Line";

export interface LineState {
  lines: Line[];
}

const state: LineState = {
  lines: [],
};

export default state;
