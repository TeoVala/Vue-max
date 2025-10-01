<template>
  <h2>My Course Goal</h2>
  <div>{{ goal.courseGoal }}</div>
  <h3>OUTPUT COURSE GOAL</h3>
  <div v-show='goal.isVisible'>{{ goal.courseGoal }}</div>
  <button @click='toggleVisibility(goal.isVisible)'>Toggle Goal</button>

  <!-- Task 4: Also solve the assignment with the Options API -->
  <!--<h2>My Course Goal</h2>

    <div>{{ courseGoal }}</div>
    <h3>OUTPUT COURSE GOAL</h3>
    <div v-show='isVisible'>{{ courseGoal }}</div>
    <button @click='toggleVisibility'>Toggle Goal</button> -->
  </template>

  <script>
  // import { reactive } from 'vue';
  import { ref } from 'vue';

  export default {
   setup () {
     // const courseGoal = ref('Finish the course and learned how to use vue like a glove');
     // const isVisible = ref(true);
     //
     // const goal = reactive({
     //   courseGoal: 'Finish the course and learned how to use vue like a glove',
     //   isVisible: true,
     // })

     const goal = ref({
       courseGoal: 'Finish the course and learned how to use vue like a glove',
       isVisible: true,
     })

     // function toggleVisibility() {
     //   isVisible.value = !isVisible.value;
     // }

     function toggleVisibility() {
       // goal.isVisible = !goal.isVisible
       goal.value.isVisible = !goal.value.isVisible;
       }
     // return { goal :courseGoal, isVisible: isVisible, toggleVisibility : toggleVisibility }
     // return { goal, toggleVisibility : toggleVisibility }
     return { goal, toggleVisibility}
   }
   //  data() {
   //    return {
   //      courseGoal: 'Finish the course and learned how to use vue like a glove',
   //      isVisible: true,
   //    }
   //  },
   //  methods: {
   //    toggleVisibility() {
   //      this.isVisible = !this.isVisible;
   //    }
   //  }
  }
  </script>

  <style>
  html {
    font-family: sans-serif;
  }
  body {
    margin: 3rem;
    text-align: center;
  }
  </style>