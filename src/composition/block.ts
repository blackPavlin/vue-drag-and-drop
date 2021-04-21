/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ref } from "vue";
import { Block } from "@/models/Block";

import { useStore } from "@/store";
import { BlockGetterE } from "@/store/modules/block/getters";
import { BlockMutationE } from "@/store/modules/block/mutations";

interface Props {
  scale: number;
}

const store = useStore();

export default function useBlock(props: Readonly<Props>) {
  const blocks = ref<Block[]>(store.getters[BlockGetterE.getBlocks]);

  const computedTransform = (x: number, y: number): string => {
    return `translate(${x}, ${y})`;
  };

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
    };
  };

  /** Удаление блока */
  const remove = (blockID: string): void => {
    store.commit(BlockMutationE.removeBlock, blockID);
  };

  return {
    blocks,
    computedTransform,
    move,
    remove,
  };
}
