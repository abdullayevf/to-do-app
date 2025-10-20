<script setup lang="ts"></script>

<template>
    <div class="min-h-screen bg-gray-50 font-display">
        <nav class="bg-white shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex space-x-8">
                        <RouterLink
                            to="/"
                            class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                            active-class="border-blue-500 text-gray-900"
                            exact-active-class="border-blue-500 text-gray-900"
                        >
                            Home
                        </RouterLink>
                        <RouterLink
                            to="/about"
                            class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors"
                            active-class="border-blue-500 text-gray-900"
                        >
                            About
                        </RouterLink>
                    </div>

                    <div class="flex space-x-8">
                        <RouterLink
                            to="/register"
                            class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                            active-class="border-blue-500 text-gray-900"
                            exact-active-class="border-blue-500 text-gray-900"
                        >
                            Sign in
                        </RouterLink>
                    </div>
                </div>
            </div>
        </nav>
        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <RouterView />
        </main>
    </div>
</template>
