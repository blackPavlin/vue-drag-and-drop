<template>
  <g class="bloks">
    <g
      class="block"
      v-for="block in blocks"
      :key="block.id"
      :transform="computedTransform(block.x, block.y)"
      @mousedown.stop="move(block)"
    >
      <rect rx="10px" ry="10px"></rect>
    </g>
  </g>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useBlock from "@/composition/block";

export default defineComponent({
  name: "Blocks",
  props: {
    scale: {
      type: Number,
      required: true,
    }
  },
  setup(props) {
    return {
      ...useBlock(props),
    };
  },
});
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/scss/block.scss';
</style>
