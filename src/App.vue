<script setup>
import { ref } from 'vue';
import ButtonCalculate from './components/ButtonCalculate.vue';
import CardResults from './components/CardResults.vue';
import InterestRate from './components/InterestRate.vue';
import MortageAmount from './components/MortageAmount.vue';
import MortageTerm from './components/MortageTerm.vue';
import MortageType from './components/MortageType.vue';

const mortgageAmount = ref('');
const mortgageTerm = ref('');
const interestRate = ref('');
const mortgageType = ref('');

let mortageAmountRef = ref(null);
let mortageTermRef = ref(null);
let interestRateRef = ref(null);
let mortageTypeRef = ref(null);

const clearData = () => {
    mortageAmountRef.value.clearData();
    mortageTermRef.value.clearData();
    interestRateRef.value.clearData();
    mortageTypeRef.value.clearData();
};

const calculateRepayments = () => {
    mortageAmountRef.value.validateInput();
    mortageTermRef.value.validateInput();
    interestRateRef.value.validateInput();
    // Assuming mortgageType doesn't require validation
    if (!mortgageAmount.value || !mortgageTerm.value || !interestRate.value) {
        console.log('Some fields are missing');
    } else {
        console.log('Proceeding with calculation...');
    }
};
</script>

<template>
    <div class="bg-slate100 min-w-full min-h-dvh flex justify-center items-center">
        <div class="bg-white min-w-full min-h-dvh sm:min-h-fit sm:min-w-fit flex flex-col sm:flex-row sm:rounded-3xl overflow-clip">
            <div class="flex-1 bg-white p-8">
                <div class="flex flex-col items-start justify-start sm:flex-row sm:justify-between sm:items-center">
                    <h1 class="text-slate700 font-bold text-xl">Mortage Calculator</h1>
                    <button
                        class="underline text-slate300 text-xs cursor-pointer hover:text-slate700"
                        @click="clearData"
                    >Clear All
                    </button>
                </div>
                <MortageAmount v-model="mortgageAmount" ref="mortageAmountRef" />
                <div class="flex flex-col sm:flex-row mb-3 gap-x-4">
                    <MortageTerm v-model="mortgageTerm" ref="mortageTermRef" />
                    <InterestRate v-model="interestRate" ref="interestRateRef" />
                </div>
                <MortageType />
                <ButtonCalculate @click="calculateRepayments" />
            </div>
            <CardResults />
        </div>
    </div>
</template>

