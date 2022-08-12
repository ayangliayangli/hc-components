<template>
    <div>
        <span>{{counter}}</span>
        <button @click="add">+</button>
        <Button></Button>
    </div>
</template>

<script setup lang="ts">
import { Button } from '@amydad/hc-components';
import '@amydad/hc-components/lib/button/style/index.css'
import { ref } from 'vue';

const counter = ref(0)

const add = () => {
    counter.value += 1
}

</script>

<style scoped>

</style>