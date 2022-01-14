<template>
  <div class="css-dyor-doc-pwo">

  </div>
</template>

<script>
export default {
  data() {
    return {
      d: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$emit("domRendered");
      }, 1000);
    });
  },
};
</script>

<style scoped>
.css-dyor-doc-pwo {
  background: red;
  width: 100%;
  height: 1099px;
}
</style>