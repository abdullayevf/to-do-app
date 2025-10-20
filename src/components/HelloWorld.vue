<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps(["msg"]);
console.log(props.msg);
</script>

<template>
    <div
        class="w-full font-display font-medium min-h-screen bg-slate-900 flex items-center justify-center text-white"
    >
        <div>
            <Button
                class="border rounded text-black bg-white px-4 py-1 cursor-pointer"
                >Sign up</Button
            >
            <Button
                class="border rounded text-black bg-white px-4 py-1 cursor-pointer"
                >Sign in</Button
            >
        </div>
    </div>
</template>
