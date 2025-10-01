<template>
    <section>
        <base-card>
            <template #header>
                      <!-- v-slot:header can be written also as #header -->
                <h3>{{ fullName }}</h3>
                <base-badge
                    :type="role"
                    :caption="role.toUpperCase()"
                ></base-badge>
            </template>
            <template v-slot:default>
                <p>{{ infoText }}</p>
            </template>
            <!-- infotext will go to the seocond unamed slot because its the default( because it has no name )-->
        </base-card>
    </section>
</template>

<script>
export default {
    props: ["fullName", "infoText", "role"],
};
</script>
