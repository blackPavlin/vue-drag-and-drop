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
    }

    (<HTMLElement>event.target).onmouseout = (): void => {
      document.ondragstart = null;
      document.body.onselectstart = null;
      document.body.onmousemove = null;
      document.body.onmouseup = null;
      (<HTMLElement>event.target).onmouseout = null;
    }
  };

  const zoom = (event: WheelEvent): void => {
    matrix.a = matrix.a + event.deltaY;
    matrix.d = matrix.d + event.deltaY;
  };

  return { computedMatrix, move, zoom };
}
