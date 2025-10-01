<template>
  <div>
    <!-- Render the header only if we pass a value -->
    <header v-if="$slots.header">
      <slot name="header">
        <h2>The Default</h2> <!-- This will be rendered if there is not content -->
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots);
    // THe slots object that provides data of our slots
  }
}
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
section header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style> 