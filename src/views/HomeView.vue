<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const count = ref(0);
</script>

<template>
    <div class="px-4 py-6">
        <p>
            Welcome back Bruce, <br />
            Gotham has been calling for you.. <br />
            Hurry up and save the city!
        </p>
    </div>
</template>

<style scoped>
/* CSS */
.btn {
    appearance: none;
    background-color: #ffffff;
    border-radius: 40em;
    border-style: none;
    box-shadow: #adcfff 0 -12px 6px inset;
    box-sizing: border-box;
    color: #000000;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -0.24px;
    margin: 0;
    outline: none;
    padding: 1rem 1.3rem;
    quotes: auto;
    text-align: center;
    text-decoration: none;
    transition: all 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.btn:hover {
    background-color: #ffc229;
    box-shadow: #ff6314 0 -6px 8px inset;
    transform: scale(1.125);
}

.btn:active {
    transform: scale(1.025);
}

@media (min-width: 768px) {
    .btn {
        font-size: 1.5rem;
        padding: 0.75rem 2rem;
    }
}
</style>
