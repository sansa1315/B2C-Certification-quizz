import { defineStore } from "pinia";
import importData from "../resources/data"
import { ref } from "vue";

export const useDataStore = defineStore('data', () => {
    const data = ref(importData);
    let index = ref(0);
    let renderedQuestionNumber = ref([]);

    renderedQuestionNumber.value = Object.keys(data.value.questions).sort((a,b) => 0.5 - Math.random())
    console.log(renderedQuestionNumber)


    return {
        data,
        index,
        renderedQuestionNumber,

    }
})