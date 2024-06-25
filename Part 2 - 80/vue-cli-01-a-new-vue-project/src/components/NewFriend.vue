<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name</label>
            <input type="text" v-model="inputName" />
        </div>

        <div>
            <label>Phone</label>
            <input type="tel" v-model="inputPhone" />
        </div>

        <div>
            <label>E-mail</label>
            <input type="email" v-model="inputEmail" />
        </div>
        <button>Add Contact</button>
    </form>
</template>

<script>
export default {
    emits: ["add-friend"],
    data() {
        return {
            // inputID: "",
            inputName: "",
            inputPhone: "",
            inputEmail: "",
        };
    },
    methods: {
        submitData() {
            this.$emit("add-friend", 
                // id: this.inputID,
                this.inputName,
                this.inputPhone,
                this.inputEmail,
                // isFavorite: false,
            );
        },
    },
};
</script>

<style></style>
