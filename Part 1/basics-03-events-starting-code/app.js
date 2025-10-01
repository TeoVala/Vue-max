const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    addCounter(num) {
      this.counter = this.counter + num;
    },
    reduceCounter(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      // console.log(event);
      this.name = event.target.value;
    },
    submitForm(event) {
      //event.preventDefault(); // Stops page from reloading vue can use .prevent to do this also
      alert('Submitted');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  }
});

app.mount('#events');
