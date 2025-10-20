<script setup lang="ts">
import { ref } from "vue";

const credentials = ref({
    username: "",
    password: "",
});

const handleFormSubmission = () => {
    console.log("Form SUbmitted: ", credentials.value);
    credentials.value = {
        username: "",
        password: "",
    };
};
</script>

<template>
    <div class="px-4 py-6">
        <form
            action=""
            class="mt-34 mx-auto flex border space-y-4 max-w-1/3 p-4 flex-col"
        >
            <input
                class="input"
                type="text"
                placeholder="username"
                v-model="credentials.username"
                autocomplete="off"
            />
            <input
                class="input"
                type="password"
                placeholder="password"
                autocomplete="off"
                v-model="credentials.password"
            />
            <button
                class="cursor-pointer"
                @click.prevent="handleFormSubmission"
            >
                Sign up
            </button>
        </form>
        <p class="flex justify-center mt-4">
            <router-link
                to="login"
                class="hover:opacity-100 font-light opacity-50"
                >I have an account.</router-link
            >
        </p>
    </div>
</template>

<style scoped>
.input {
    border: 1px solid black;
    padding: 0.4rem 1.2rem;
}
</style>
