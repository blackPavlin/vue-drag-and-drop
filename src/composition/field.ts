/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { reactive, computed } from "vue";

export interface Matrix {
  a: number;
  b: number;
  c: number;
  d: number;
  x: number;
  y: number;
}

export default function useField() {
  const matrix = reactive<Matrix>({ a: 1, b: 0, c: 0, d: 1, x: 0, y: 0 });

  const computedMatrix = computed<string>(() => {
    return `matrix(${matrix.a}, ${matrix.b}, ${matrix.c}, ${matrix.d}, ${matrix.x}, ${matrix.y})`;
  });

  /** Сдвиг рабочей области */
  const move = (event: MouseEvent): void => {
    document.ondragstart = () => false;
    document.body.onselectstart = () => false;

    document.body.onmousemove = (e: MouseEvent): void => {
      matrix.x = matrix.x + e.movementX;
      matrix.y = matrix.y + e.movementY;
    };

    document.body.onmouseup = (): void => {
      document.ondragstart = null;
      document.body.onselectstart = null;
      document.body.onmousemove = null;
      document.body.onmouseup = null;
    };

    (<HTMLElement>event.target).onmouseout = (): void => {
      document.ondragstart = null;
      document.body.onselectstart = null;
      document.body.onmousemove = null;
      document.body.onmouseup = null;
      (<HTMLElement>event.target).onmouseout = null;
    };
  };

  /** Масштабирование рабочей области */
  const zoom = (event: WheelEvent): void => {
    const delta = event.deltaY < 0 ? 0.1 : -0.1;
    const scale = matrix.a + delta;

    if (scale > 2 || scale < 0.1) {
      return;
    }

    const directionX =
      event.offsetX - (<HTMLElement>event.target).clientWidth / 2;
    const directionY =
      event.offsetY - (<HTMLElement>event.target).clientHeight / 2;

    const offsetX = directionX < 0 ? -event.offsetX : 0;
    const offsetY = directionY < 0 ? -event.offsetY : 0;

    matrix.a = Number(scale.toFixed(1));
    matrix.d = Number(scale.toFixed(1));
    // matrix.x = matrix.x + offsetX / matrix.a;
    // matrix.y = matrix.y + offsetY / matrix.a;
  };

  return { matrix, computedMatrix, move, zoom };
}
