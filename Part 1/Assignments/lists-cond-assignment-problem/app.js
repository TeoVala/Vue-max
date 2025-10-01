const app = Vue.createApp({
  data() {
    return {
      inputTask: '',
      taskList: [],
      listVisibility: true,
    }
  }
  ,
  computed: {
    buttonText(){
      if (this.listVisibility){
        return 'Hide List';
      }
      return 'Show List';
    }
  },
  methods: {
    addTask() {
      this.taskList.push(this.inputTask)
    },
    toggleListVisibility(){
      this.listVisibility = !this.listVisibility;
    }
  }
});

app.mount('#assignment');