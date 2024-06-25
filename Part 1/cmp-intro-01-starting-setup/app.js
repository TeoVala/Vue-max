const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "12323 3123 1312",
                    email: "manuel@localhost.com",
                },
                {
                    id: "julie",
                    name: "Julie Jones",
                    phone: "32512 32123 13",
                    email: "julie@localhost.com",
                },
            ],
        };
    },
});
// A component is a custom html element
// All components must have two words and get separated by a '-'
// Components are mini apps inside our app
            detailsAreVisible: false,
// Using components you can automatically separate variables etc 'detailsAreVisible'
// this means that each template will have its own version of the variable so it will
// show and hide only inside itself
// p.76 for more on documentatoin for the docs
// https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463422#overview
app.component("friend-contact", {
    template: `
    <li>
                    <h2>{{ friend.name }}</h2>
                    <button @click="toggleDetails">
                        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
                    </button>
                    <ul v-if="detailsAreVisible">
                        <li><strong>Phone:</strong> {{ friend.phone }}</li>
                        <li><strong>Email:</strong> {{ friend.email }}</li>
                    </ul>
                </li>
  `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: "manuel",
                name: "Manuel Lorenz",
                phone: "12323 3123 1312",
                email: "manuel@localhost.com",
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});

app.mount("#app");
