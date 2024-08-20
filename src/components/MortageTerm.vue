<script setup>

</script>

<template>
    <div class="flex-1">
        <label 
            for="mortage-amount" 
            class="text-slate500 text-xs mb-1 inline-block">
            Mortage Term
        </label>
        <div 
            :class="{'border-red': hasError}"
            class="flex border-slate300 rounded border hover:border-slate700 rounded-m overflow-clip cursor-pointer">
            <input 
            type="text"
            id="mortage-amount"
            v-model="rawValue"
            @input="handleInput"
            @blur="validateInput"
            class="focus:outline-none focus:ring-0 focus:bg-white p-2 text-slate900 font-bold inline-block w-full autofill:bg-transparent"
            >
            <span 
                :class="{'bg-red text-white': hasError}"
                class="text-slate500 font-bold bg-slate-100 inline-block p-2 px-3">years
            </span>
        </div>
        <p  
            v-if="hasError"
            class="text-red text-xs mt-1">
            This field is required
        </p>
    </div>
</template>