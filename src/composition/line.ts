/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { computed } from "vue";
import { Line, Points } from "@/models/Line";
import { useStore } from "@/store";
import { LineGetterE } from "@/store/modules/line/getters";
import { LineMutationE } from "@/store/modules/line/mutations";

interface Props {
  scale: number;
}

export default function useLine(props: Readonly<Props>) {
  const store = useStore();

  const lines = computed<Line[]>(() => store.getters[LineGetterE.getLines]);

  const computedPath = (points: Points): string => {
    const { x1, y1, x2, y2, x3, y3, x4, y4 } = points;
    return `M${x1} ${y1} C${x2} ${y2} ${x3} ${y3} ${x4} ${y4}`;
  };

  const move = (line: Line): void => {};

  const create = (): void => {};

  const remove = (lineID: string): void => {
    store.commit(LineMutationE.removeLine, lineID);
  };

  return {
    lines,
    computedPath,
    move,
    create,
    remove,
  };
}
