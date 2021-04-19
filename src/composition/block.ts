import { ref } from "vue";

export interface Block {
    id: number;
    x: number;
    y: number;
}

interface Props {
    scale: number;
}

export default function useBlock(props: Readonly<Props>) {
    const blocks = ref<Block[]>([
        { id: 1, x: 10, y: 10 },
        { id: 2, x: 10, y: 10 },
    ]);

    const computedTransform = (x: number, y: number): string => {
        return `translate(${x}, ${y})`;
    }

    /** Сдвиг блока */
    const move = (block: Block): void => {
        document.ondragstart = () => false;
        document.body.onselectstart = () => false;

        document.body.onmousemove = (e: MouseEvent): void => {
            block.x = block.x + e.movementX / props.scale;
            block.y = block.y + e.movementY / props.scale;
          };

        document.body.onmouseup = (): void => {
            document.ondragstart = null;
            document.body.onselectstart = null;
            document.body.onmousemove = null;
            document.body.onmouseup = null;
        }
    }

    return { blocks, computedTransform, move };
}
