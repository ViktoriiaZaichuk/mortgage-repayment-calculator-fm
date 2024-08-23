<script setup>
import { ref, defineEmits, defineExpose } from 'vue';

// Define emit function to update the parent component
const emit = defineEmits(['update:modelValue']);

// Define the rawValue and error state
const rawValue = ref('');
const hasError = ref(false);

// Emit value when input changes
const handleInput = (event) => {
    rawValue.value = event.target.value;
    emit('update:modelValue', rawValue.value);
};

// Validate input and set error state
const validateInput = () => {
    hasError.value = !rawValue.value; 
};

// Clear data and emit empty value
const clearData = () => {
    rawValue.value = '';
    emit('update:modelValue', '');
    hasError.value = false;
};

// Expose methods to the parent component
defineExpose({
    clearData,
    validateInput,
    hasError
});
</script>

<template>
    <div class="mt-3 mb-3">
        <label for="mortage-type" class="text-slate500 text-xs mb-1 inline-block">
            Mortage Type
        </label>
        <div>
            <div :class="['pl-3 mb-2 flex rounded border cursor-pointer', { 'border-lime': rawValue === 'repayment', 'bg-lime-light': rawValue === 'repayment' }]">
                <input 
                    type="radio" 
                    id="repayment" 
                    name="mortgageType" 
                    value="repayment" 
                    v-model="rawValue" 
                    @change="handleInput"
                    class="p-2 block cursor-pointer"
                >
                <label for="repayment" class="block py-2 px-2 text-slate900 font-bold w-full cursor-pointer">Repayment</label>
            </div>
            <div :class="['pl-3 flex rounded border cursor-pointer', { 'border-lime': rawValue === 'interestOnly', 'bg-lime-light': rawValue === 'interestOnly' }]"
            >
                <input 
                    type="radio" 
                    id="interestOnly" 
                    name="mortgageType" 
                    value="interestOnly" 
                    v-model="rawValue" 
                    @change="handleInput"
                    class="cursor-pointer"
                >
                <label for="interestOnly" class="block py-2 px-2 text-slate900 font-bold cursor-pointer w-full">Interest Only</label>
            </div>
        </div>
        <p v-if="hasError" class="text-red text-xs mt-1">
            This field is required
        </p>
    </div>
</template>
