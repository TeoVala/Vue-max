<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  props: ['firstName', 'lastName'],
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   }
  // }
  setup(props, context) {
    const uName = computed(() => {
      return props.firstName.value + ' ' + props.lastName.value;
    })

    const age = inject('userAge');

    console.log(context);
    //  context.emit('save-data'); // this.$emit('save-data', 1);
    return { userName: uName, age };
  }
};
</script>
