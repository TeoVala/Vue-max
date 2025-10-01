const app = Vue.createApp({
  data() {
    return {
      number: 0,

    }
  },
  methods: {
    add(num){
      this.number += num;
    }
  },
  watch: {
    result() { // When result value changes from "Not ther yet" to something else this function runs
      that = this;
      console.log('Watcher initiated!')
      setTimeout(function() {
        that.number = 0;
      }, 5000);
    }
  },
  computed: {
    result() {
      if ( this.number < 37) {
        return 'Not there yet'
      } else if ( this.number > 37 ) {
        return 'Too much!'
      }
      return this.number
    }
  }
});

app.mount('#assignment');