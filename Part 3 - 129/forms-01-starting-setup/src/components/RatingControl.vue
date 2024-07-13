<template>
  <ul>
    <li :class='{active: modelValue === "poor"}'>
      <button type='button' @click='active("poor")'>Poor</button>
    </li>
    <li :class='{active: modelValue === "average"}'>
      <button type='button' @click='active("average")'>Average</button>
    </li>
    <li :class='{active: modelValue === "great"}'>
      <button type='button' @click='active("great")'>Great</button>
    </li>

  </ul>
</template>

<script>
export default {
  name: 'RatingControl',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  // data() {
  //   return {
  //     activeOption: null
  //   };
  // },

  // computed: {
  //   activeOption() {
  //     return this.modelValue;
  //   },
  // },

  methods: {
    active(option) {

      this.$emit('update:modelValue', option);
    }
  }
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: .5rem 0;
  padding: 0;
  display: flex;

}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>