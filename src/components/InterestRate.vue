<script setup>
import { ref, defineEmits, defineExpose } from 'vue';

const rawValue = ref('');
const hasError = ref(false);

const emit = defineEmits(['update:modelValue']);


const handleInput = (event) => {
    let value = event.target.value;

    // Remove any non-numeric characters except for the period (.) to allow decimals
    value = value.replace(/[^0-9.]/g, '');

    // Ensure that there is only one decimal point
    const parts = value.split('.');
    if (parts.length > 2) {
        value = `${parts[0]}.${parts.slice(1).join('')}`; // Merge multiple decimal points into one
    }

    // Enforce a maximum value of 100
    if (value && parseFloat(value) > 100) {
        value = '100';
    }

    // Update the rawValue with the non-formatted number
    rawValue.value = value;

    // Emit the raw value to the parent
    emit('update:modelValue', value);
};

const validateInput = () => {
    hasError.value = !rawValue.value; // Set error if the field is empty
};

const clearData = () => {
    rawValue.value = '';
    emit('update:modelValue', '');
    hasError.value = false;
};

defineExpose({
    clearData,
    validateInput,
    hasError
});
</script>

<template>
    <div class="mb-3 sm:mb-0 flex-1">
        <label 
            for="interest-rate" 
            class="text-slate500 text-xs mb-1 inline-block">
            Interest Rate
        </label>
        <div 
            :class="{'border-red': hasError, 'border-slate300': !hasError}"
            class="flex rounded border hover:border-slate700 rounded-m overflow-clip cursor-pointer">
            <input 
                type="text"
                id="interest-rate"
                v-model="rawValue"
                @input="handleInput"
                @blur="validateInput"
                class="focus:outline-none focus:ring-0 focus:bg-white p-2 text-slate900 font-bold inline-block w-full autofill:bg-transparent"
            >
            <span 
                :class="{'bg-red text-white': hasError, 'bg-slate-100': !hasError}"
                class="text-slate500 font-bold inline-block p-2 px-3">%
            </span>
        </div>
        <p  
            v-if="hasError"
            class="text-red text-xs mt-1">
            This field is required
        </p>
    </div>
</template>