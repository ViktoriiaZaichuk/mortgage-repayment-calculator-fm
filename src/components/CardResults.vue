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
    <div class="flex items-center justify-center bg-slate700 text-white flex-1 p-8 sm:rounded-bl-3xl">
        <div v-if="result">
            <div class="mb-8">
                <h2 class="font-bold text-xl mb-2">Your results</h2>
                <p class="text-slate100 text-center text-xs max-w-sm">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
            </div>
            <div class="bg-slate900 p-6 object-fill border-4 border-lime rounded-md border-x-0 border-b-0">
                <div class="pb-5 border border-slate700 border-x-0 border-t-0">
                    <p class="text-slate100 text-xs max-w-sm mb-2">Your monthly repayments</p>
                    <span class="text-lime text-4xl font-black">£{{ result.monthlyPayment }}</span>
                </div>
                <div class="mt-5">
                    <p class="text-slate100 text-xs max-w-sm mb-2">Total you'll repay over the term</p>
                    <span class="font-bold"> £{{ result.totalPayment }}</span>
                </div>
            </div>
        </div>
        <div v-else>
            <ResultsEmpty />
        </div>
    </div>
</template>