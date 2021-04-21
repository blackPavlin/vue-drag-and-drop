/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { ref } from "vue";
import { Line, Points } from "@/models/Line";

interface Props {
  scale: number;
}

export default function useLine(props: Readonly<Props>) {
  const lines = ref<Line[]>([]);

  const computedPath = (points: Points): string => {
    const { x1, y1, x2, y2, x3, y3, x4, y4 } = points;
    return `M${x1} ${y1} C${x2} ${y2} ${x3} ${y3} ${x4} ${y4}`;
  };

  const move = (line: Line): void => {};

  return { lines, computedPath, move };
}
