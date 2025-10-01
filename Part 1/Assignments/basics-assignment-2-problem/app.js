const app = Vue.createApp({
  data() {
    return {
      firstField: '',
      secondField: '',
      savedInput: '',
    }
  },
  methods: {
    showAlert() {
      return alert('Hehe xD')
    },
    updateInput(event){
      this.firstField = event.target.value;
    },
    saveInput(event){
      this.savedInput = event.target.value;
    },
    updateEnter(event){
      this.secondField = this.savedInput;
    }
  }
});

app.mount('#assignment');