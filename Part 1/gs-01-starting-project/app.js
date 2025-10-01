Vue.createApp({
  // data: function (){} or like that its the same
  data() {
    return {
      goals: [],
      enteredValue: '', // We made a connection with the index.html using the v-model
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue); // You must use this because it must be refered the data from inside the object
      this.enteredValue = '';
    }
  }
}).mount('#app');
