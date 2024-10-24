<script setup>
    import { ref } from 'vue';
    import {storeToRefs} from 'pinia'
    import {useDataStore} from "@/store/store"

    let vocals = ["A","B","C","D"];
    const dataStore = useDataStore();
    const {data, index, renderedQuestionNumber} = storeToRefs(dataStore);
    let selectedOption = ref(null);

    function handleSelectedAnswer() {
        data.value.questions[renderedQuestionNumber.value[index.value - 1]].isAnswered = true;
        data.value.questions[renderedQuestionNumber.value[index.value - 1]].answers[selectedOption.value].isSelected = true;
    }

</script>

<template>
    <div class="d-flex" v-for="answers, i in data.questions[renderedQuestionNumber[index - 1]]?.answers" :key="i">
        <span>{{vocals[i]}}</span>
        <div class="form-check ml-1" :class="{'green': answers.isSelected && answers.correct || !answers.isSelected && answers.correct && data.questions[renderedQuestionNumber[index - 1]].isAnswered, 'red': answers.isSelected && !answers.correct}" >
            <input class="form-check-input" :value="i"  type="radio" :checked="answers.isSelected" v-model="selectedOption" :disabled="data.questions[renderedQuestionNumber[index - 1]]?.isAnswered">
            <label class="form-check-label">
                {{answers.option}}
            </label>
        </div>
    </div>
    <br>
    <button class="btn btn-warning mx-2" :class="{'d-none': data.questions[renderedQuestionNumber[index - 1]]?.isAnswered}" @click="handleSelectedAnswer">Validar</button>
</template>

<style scoped>
    .green{
        background-color: lightgreen;
    }
    .red{
        background-color: lightcoral;
    }
    .ml-1{
        margin-left: 0.5rem;
    }
</style>
