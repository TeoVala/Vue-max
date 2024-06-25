const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullname: '',
      lastName: '',
    };
  },
  watch: { // Must have the name of the data you want to updates
    // name(value) { // Whenever name changes or gets updated the function will run
    //   if (value === '') {
    //     this.fullname = ''  
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = ''  
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
    counter(value) { // So we use watchers if we want to run logic that doesnt run every time
      if (value > 50) { // but on some condition sometimes
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
        
      }
    }
  },
  computed: { // Computed updates only when any of the variables inside them gets update -> this.name etc
    fullname() { // Also you use this only for outputing data not for binding them to buttons etc
      if (this.name === '' || this.lastName === ''){ // use this when you want to check updates on more than one var
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: { // Methods rerun whenever anything in the page changes
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');