<script setup>
  import {storeToRefs} from 'pinia'
  import {useDataStore} from "@/store/store"
  import radioButton from './RadioButton.vue'
  import results from './ResultsView.vue'

  const dataStore = useDataStore()
  const {data, index, renderedQuestionNumber} = storeToRefs(dataStore);

  function resetRadioButtons() {
    document.querySelectorAll(".form-check-input").forEach(input => {
      input.parentElement.classList.remove("green", "red");
      input.checked = false;
    });
  }

  function next() {
    index.value++
    resetRadioButtons();

  }

  function back() {
    index.value > 0 && index.value--;
  }

</script>

<template>
  <div class="container mt-4">
    <div v-if="index <= Object.keys(data.questions).length">
      <div class="card">
        <div class="card-body">
          <div v-if="index">
            <h5 class="card-title">Pregunta: {{index}}</h5>
            <p>{{data.questions[renderedQuestionNumber[index - 1]]?.approach}}</p>
            <p>{{data.questions[renderedQuestionNumber[index - 1]]?.question}}</p>
            <div v-if="`/src/assets/${renderedQuestionNumber[index - 1]}.png`">
              <img :src="`/src/assets/${renderedQuestionNumber[index - 1]}.png`" alt="">
            </div>
            <ul v-for="option, i in data.questions[renderedQuestionNumber[index - 1]]?.options" :key="i">
              <li>{{option}}</li>
            </ul>
            <radio-button />
            <button type="button" class="btn btn-info" :class="index == 1 && 'disabled'" @click="back">Back</button>
            <button  type="button" class="btn btn-primary mx-2" :class="{'d-none':!data.questions[renderedQuestionNumber[index - 1]]?.isAnswered}" @click="next">Next</button>
          </div>
          <div v-else>
            <h1>Welcome</h1>
            <button class="btn btn-success"  @click="next">Iniciar</button>
          </div>
        </div>
      </div>

    </div>
    <div v-else>
      <results />
    </div>
  </div>


</template>

<style scoped>

</style>
