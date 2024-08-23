<script setup>
import ResultsEmpty from './ResultsEmpty.vue';
import { defineProps } from 'vue';

const props = defineProps({
    result: {
        type: Object,
        default: null
    }
});

</script>

<template>
    <div class="bg-slate700 text-white flex-1 p-8 sm:rounded-bl-3xl">
        <div v-if="result">
            <p class="text-slate900">Monthly Payment: £{{ result.monthlyPayment }}</p>
            <p class="text-slate900">Total Payment: £{{ result.totalPayment }}</p>
            <p class="text-slate900">Total Interest: £{{ result.totalInterest }}</p>
        </div>
        <div v-else>
            <ResultsEmpty />
        </div>
    </div>
</template>