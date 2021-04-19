<template>
  <div class="field" @mousewheel.passive="zoom($event)">
    <svg
      class="field-svg"
      @mousedown="move($event)"
      :transform="computedMatrix"
    >
      <Blocks :scale="matrix.a" />
      <Lines />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useField from "@/composition/field";
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

<style lang="scss" scoped>
  @import '@/assets/styles/scss/field.scss';
</style>
