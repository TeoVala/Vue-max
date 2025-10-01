<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name</label>
            <input v-model="submitedName" type="text" />
        </div>
        <div>
            <label>Age</label>
            <input v-model="submitedAge" type="text" />
        </div>
        <button>Update</button>
    </form>
</template>

<script>
export default {
  emits: ["update-user"],
  data() {
    return {
      submitedName: "",
      submitedAge: "",
    }
  },
  methods: {
    submitData() {
      this.$emit("update-user",
        this.submitedName,
        this.submitedAge
      )
    }
  }
} 
</script>