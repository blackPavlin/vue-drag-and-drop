<template>
  <div class="wrapper">
    <Field />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Field from "@/components/Field.vue";

export default defineComponent({
  name: "App",
  components: {
    Field
  }
});
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  width: 800px;
  height: 500px;
}
</style>
