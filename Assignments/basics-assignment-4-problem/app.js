const app = Vue.createApp({
    data() {
        return {
            userInput: "",
            showParagraph: true,
            userInputColor: "",
        };
    },
    computed: {
        paraClasses() {
            return {
                user1: this.userInput === "user1",
                user2: this.userInput === "user2",
                visible: this.showParagraph,
                hidden: !this.showParagraph
            };
        },
        setBackgroundColor() {
            return this.userInputColor;
        },
    },
    methods: {
        addStyle(event) {
            this.userInput = event.target.value;
        },
        toggleParagraph(event) {
            this.showParagraph = !this.showParagraph;
        },
        getBackgroundColor(event) {
            this.userInputColor = event.target.value;
        },
    },
});

app.mount("#assignment");
