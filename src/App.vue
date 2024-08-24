<script setup>
import { ref } from 'vue';
import ButtonCalculate from './components/ButtonCalculate.vue';
import CardResults from './components/CardResults.vue';
import InterestRate from './components/InterestRate.vue';
import MortageAmount from './components/MortageAmount.vue';
import MortageTerm from './components/MortageTerm.vue';
import MortageType from './components/MortageType.vue';

const mortageAmount = ref('');
const mortageTerm = ref('');
const interestRate = ref('');
const mortageType = ref('');
 
// Store the result of the calculation
const calculationResult = ref(null); 

let mortageAmountRef = ref(null);
let mortageTermRef = ref(null);
let interestRateRef = ref(null);
let mortageTypeRef = ref(null);

const clearData = () => {
    const refs = [mortageAmountRef, mortageTermRef, interestRateRef, mortageTypeRef];
    refs.forEach(ref => ref.value?.clearData());
    calculationResult.value = null;
};

const calculateRepayments = () => {
    mortageAmountRef.value.validateInput();
    mortageTermRef.value.validateInput();
    interestRateRef.value.validateInput();
    mortageTypeRef.value.validateInput();

    if (!mortageAmount.value || !mortageTerm.value || !interestRate.value || !mortageType.value) {
        console.log('Some fields are missing');
    } else {
        // Calculation logic
        const principal = parseFloat(mortageAmount.value);
        const term = parseFloat(mortageTerm.value);
        const rate = parseFloat(interestRate.value);
        const isRepayment = mortageType.value === 'repayment';

        // Calculation for demonstration
        const monthlyRate = rate / 100 / 12;
        const numberOfPayments = term * 12;
        const monthlyPayment = isRepayment
            ? (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
            : principal * monthlyRate;

        calculationResult.value = {
            monthlyPayment: monthlyPayment.toFixed(2),
            totalPayment: (monthlyPayment * numberOfPayments).toFixed(2),
        };

        console.log('Proceeding with calculation...', calculationResult.value);
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
                <MortageAmount v-model="mortageAmount" ref="mortageAmountRef" />
                <div class="flex flex-col sm:flex-row mb-3 gap-x-4">
                    <MortageTerm v-model="mortageTerm" ref="mortageTermRef" />
                    <InterestRate v-model="interestRate" ref="interestRateRef" />
                </div>
                <MortageType v-model="mortageType" ref="mortageTypeRef" />
                <ButtonCalculate @click="calculateRepayments" />
            </div>
            <CardResults :result="calculationResult"  />
        </div>
    </div>
</template>

