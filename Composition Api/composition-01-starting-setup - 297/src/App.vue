<template>
  <section class='container'>
  <UserData class='test' :first-name='firstName' :last-name='lastName' />
    <button @click='setAge'>Change Age</button>
    <div>
      <input type='text' placeholder='First Name' v-model='firstName'>
      <input type='text' placeholder='Last Name' ref='lastNameInput'>
      <button @click='setLastName'>Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from '@/components/UserData.vue';

export default {
  components: {
    UserData,
  },
  setup() {
    // const userName = ref('Maximilian');
    const age = ref(31);
    const firstName = ref('');
    const lastName = ref('');

    const lastNameInput = ref(null);

    // const user = reactive({
    //   name: 'Maximilian',
    //   age: '31'
    // });

    provide('userAge', age);

    const userName = computed(() => {
      return firstName.value + ' ' + lastName.value
    })

    watch([age, userName], function(newValues, oldValues) {
      console.log('Old age: ' + oldValues[0]);
      console.log('New age: ' + newValues[0]);
      console.log('Old name: ' + oldValues[1]);
      console.log('New name: ' + newValues[1]);
    });

    function setNewAge() {
      age.value = 32;
    }

    function setFirstName(event) {
      firstName.value = event.target.value;
    }
    //
    // function setLastName(event) {
    //   lastName.value = event.target.value;
    // }
    function setLastName () {
      lastName.value = lastNameInput.value.value;
    }

    return { userName, age, firstName, lastName, lastNameInput, setAge: setNewAge, setFirstName,  setLastName};
  }
  // methods: {
  //   setNewAge() {
  //     this.age = 32;
  //   }
  // }

};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>