<template>
    <div>
        <active-user :name="user.name" :age="user.age" />
        <user-data @update-user="updateActiveUser" />
    </div>
</template>

<script>
export default {
    data() {
        return {
          user:{
            name: "John Doe",
            age: 32,
          }
        };
    },
    methods: {
        updateActiveUser(name, age) {
          this.user ={
          name: name,
          age: +age // adding + in front converts to number and prevents string
          }
        },
    },
};
</script>

<style>
button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
    font: inherit;
    padding: 0.15rem;
}
</style>
