<script setup>
    import { ref, computed } from 'vue';
    import {storeToRefs} from 'pinia'
    import {useDataStore} from "@/store/store"

    let vocals = ["A","B","C","D", "E"];
    const dataStore = useDataStore();
    const {data, index, renderedQuestionNumber} = storeToRefs(dataStore);
    let selectedOption = ref(null);

    const currentQuestion = computed(() => {
        return data.value.questions[renderedQuestionNumber.value[index.value - 1]]

    });

    const toggleSelection = (answerIndex) => {
        const answer = currentQuestion.value.answers[answerIndex];
        answer.isSelected = !answer.isSelected;
    };

    const selectSingleOption = (answerIndex) => {
        currentQuestion.value.answers.forEach((answer, i) => {
            answer.isSelected = i === answerIndex;
        });
    };

    const handleSelectedAnswer = () => {
        currentQuestion.value.isAnswered = true;
    };

</script>

<template>
    <div
        class="d-flex"
        v-for="(answer, i) in currentQuestion.answers"
        :key="i"
    >
        <span>{{ vocals[i] }}</span>
        <div
            class="form-check ml-1"
            :class="{
                'green': currentQuestion.isAnswered && answer.correct,
                'red': currentQuestion.isAnswered && answer.isSelected && !answer.correct
            }"
        >
            <div v-if="currentQuestion.isMultiple">
                <input
                    class="form-check-input"
                    type="checkbox"
                    :checked="answer.isSelected"
                    @change="toggleSelection(i)"
                    :disabled="currentQuestion.isAnswered"
                >
            </div>
            <div v-else>
                <input
                    class="form-check-input"
                    type="radio"
                    :checked="answer.isSelected"
                    @change="selectSingleOption(i)"
                    :disabled="currentQuestion.isAnswered"
                >
            </div>
            <label class="form-check-label">
                {{ answer.option }}
            </label>
        </div>
    </div>
    <br>
    <button
        class="btn btn-warning mx-2"
        :class="{'d-none': currentQuestion.isAnswered}"
        @click="handleSelectedAnswer"
    >
        Validar
    </button>
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
