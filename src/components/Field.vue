<template>
  <div class="field" @mousewheel.passive="zoom($event)">
    <svg
      class="field-svg"
      @mousedown="move($event)"
      :transform="computedMatrix"
    >
      <Blocks />
      <Lines />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useField from "@/composition/field.ts";
import Blocks from "@/components/Blocks.vue";
import Lines from "@/components/Lines.vue";

export default defineComponent({
  name: "Field",
  components: {
    Blocks,
    Lines,
  },
  setup() {
    return {
      ...useField(),
    };
  }
});
</script>

<style lang="scss">
.field {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid #4fc08d;
}

.field-svg {
  width: 1000px;
  height: 1000px;
  background: #f6f6f6;
}
</style>
