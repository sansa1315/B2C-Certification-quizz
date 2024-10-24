<script setup>
    import {storeToRefs} from 'pinia'
    import {useDataStore} from "@/store/store"

    // let vocals = ["A","B","C","D"];
    const dataStore = useDataStore();
    const {data, renderedQuestionNumber} = storeToRefs(dataStore);
</script>

<template>
    <h1>Results</h1>
    <div v-for="number, i in renderedQuestionNumber" :key="i">
        <span>{{i}}</span>
        <p>{{data.questions[number].approach}}</p>
        <p>{{data.questions[number].answers.filter(x => x.isSelected)[0].option}}</p>
    </div>
</template>