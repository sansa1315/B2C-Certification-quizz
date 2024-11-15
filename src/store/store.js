import { defineStore } from "pinia";
import importData from "../resources/data"
import { ref, reactive } from "vue";

export const useDataStore = defineStore('data', () => {
    const data = reactive(importData);
    let index = ref(0);
    let renderedQuestionNumber = ref([]);    

    renderedQuestionNumber.value = Object.keys(data.questions).sort((a,b) => 0.5 - Math.random())    


    return {
        data,
        index,
        renderedQuestionNumber,

    }
})