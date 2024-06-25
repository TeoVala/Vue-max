<template>
    <li>
        <!-- <h2>{{ frie/nd.name }}</h2> Part 1 -->
         <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
         <button @click="toggleFavorite">
            Toggle Favorite
        </button>
        <!-- toggleFavorite shouldnt be allowed because its done inside child -->
         <button @click="toggleDetails">
            {{ detailsAreVisible ? "Hide" : "Show" }} Details
        </button>
        <button @click="$emit('delete', id)">Delete</button>
        <ul v-if="detailsAreVisible">
            <!-- <li><strong>Phone:</strong> {{ friend.phone }}</li>  Part 1
            <li><strong>Email:</strong> {{ friend.email }}</li> -->

            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
 // When you define props use camelCase, in our front end Vue automaticaly changes them to phoneNumber ->phone-number
    // props: [
    //   'name',
    //   'phoneNumber',
    //   'emailAddress',
    //   'isFavorite'
    // ],
    props:{ // https://vuejs.org/guide/components/props.html#runtime-type-checks
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        emailAddress: String,
        isFavorite: {
            type: Boolean,
            required: false,
            default: false, // function (){} You can also add a function that will calculate and return the value
            // validator: function (value) {
            //    return  value === '1' || value === '0';
            // }
        },
    },
    emits: ['toggle-favorite', 'delete'], // its recomended but you might not use it, its a way on documenting your emits
    // emits: { This way you can call a function when even is emmited
    //     'toggle-favorite': function(id) {
    //         if (id) {
    //             return true;
    //         } else {
    //             console.warn('Id is missing');
    //             return false;
    //         }
    //     },

    // },
    data() {
        return {
            detailsAreVisible: false,
            // friendIsFavorite: this.isFavorite, // We set the data from parent to a new variable inside child (because vue doesnt allow the child to change parent data)
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        // toggleFavorite() {
        //   if (this.isFavorite === '1') {
        //     this.isFavorite = '0';
        //   } else {
        //     this.isFavorite = '1';
        //   }
        // }
        toggleFavorite() {
        //   if (this.friendIsFavorite === '1') {
        //     this.friendIsFavorite = '0';
        //   } else {
        //     this.friendIsFavorite = '1';
        //   }
            // this.friendIsFavorite = !this.friendIsFavorite;
            this.$emit('toggle-favorite', this.id); // when toggleFavorite is emited then we send the this.id variable to our App.vue
        }
        
    },
};
</script>
