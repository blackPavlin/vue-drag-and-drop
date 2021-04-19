<template>
  <g class="lines">
    <g
      class="line"
      v-for="line in lines"
      :key="line.id"
    >
      <path :d="computedPath(line.points)" />
    </g>
  </g>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useLine from "@/composition/line";

export default defineComponent({
  name: "Lines",
  props: {
    scale: {
      type: Number,
      required: true,
    }
  },
  setup (props) {
    return {
      ...useLine(props),
    };
  },
});
</script>
