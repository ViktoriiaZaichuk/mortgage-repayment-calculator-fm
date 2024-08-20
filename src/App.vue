<script setup>
import ButtonCalculate from './components/ButtonCalculate.vue';
import CardResults from './components/CardResults.vue';
import InterestRate from './components/InterestRate.vue';
import MortageAmount from './components/MortageAmount.vue';
import MortageTerm from './components/MortageTerm.vue';
import MortageType from './components/MortageType.vue';


</script>

<template>
    <div class="bg-slate100 min-w-full min-h-dvh flex justify-center items-center">
        <div class="bg-white min-w-full min-h-dvh sm:min-h-fit sm:min-w-fit flex flex-col sm:flex-row sm:rounded-3xl overflow-clip">
            <div class="flex-1 bg-white p-6">
                <div class="flex flex-col items-start justify-start sm:flex-row sm:justify-between sm:items-center">
                    <h1>Mortage Calculator</h1>
                    <button>Clear All</button>
                </div>
                <MortageAmount />
                <div>
                    <MortageTerm />
                    <InterestRate />
                </div>
                <MortageType />
                <ButtonCalculate />
            </div>
            <CardResults />
        </div>
    </div>
</template>

