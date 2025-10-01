const app = Vue.createApp({
  data() {
    return {
      name: 'Teo Vala',
      age: 28,
      image: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3ZuN21ubmp2ZHY3d2l3NWxhcnFuZmk5cjlva2VhYWk5Z3MwNXRzZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Dg4TxjYikCpiGd7tYs/giphy.webp'
    }
  },
  methods: {
    calculateAge(num) {
      return this.age + num;
    },
    favNum(){
      return Math.random();
    }
  }
});

app.mount('#assignment')