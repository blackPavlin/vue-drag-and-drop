import { ref } from "vue";

export interface Line {
    id: number;
    points: Points;
}

export interface Points {
    x1: number;
    y1: number;
    x2: number;
    y2: number; 
    x3: number;
    y3: number;
    x4: number;
    y4: number;
}

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
