<template>
  <div class="css-dyor-doc-pwo">
    <div class="css-dyor-doc-rtw">
      Development Team
      <div>
        75%
        <span>
          <div>
            {{ evaluateCategory("Development Team") }} /
            {{ KnowMaxCategory("Development Team") }}
          </div></span
        >
      </div>
    </div>

    <div
      class="css-dyor-doc-qsw"
      v-for="element in searchByCategory('Development Team')"
      :key="element.id"
    >
      <div class="css-dyor-doc-rsw">
        {{ element.id }}. {{ element.question }}
        <div>
          {{ showAnswerData(element) }} / {{ knowMaxValue(element).toFixed(2) }}
        </div>
      </div>

      <div class="css-dyor-doc-rra">
        <div class="css-dyor-doc-rrr">
          <span>{{ knowAnswerOption(element) }}</span>
        </div>
        <div class="css-dyor-doc-ror">{{ element.textarea }}</div>
      </div>
    </div>

    <div class="css-dyor-doc-rtw">
      Tokenomics
      <div>
        75%
        <span>
          <div>
            {{ evaluateCategory("Tokenomics") }} /
            {{ KnowMaxCategory("Tokenomics") }}
          </div></span
        >
      </div>
    </div>

    <div
      class="css-dyor-doc-qsw"
      v-for="element in searchByCategory('Tokenomics')"
      :key="element.id"
    >
      <div class="css-dyor-doc-rsw">
        {{ element.id }}. {{ element.question }}
        <div>
          {{ showAnswerData(element) }} / {{ knowMaxValue(element).toFixed(2) }}
        </div>
      </div>

      <div class="css-dyor-doc-rra">
        <div class="css-dyor-doc-rrr">
          <span>{{ knowAnswerOption(element) }}</span>
        </div>
        <div class="css-dyor-doc-ror">{{ element.textarea }}</div>
      </div>
    </div>

    <div class="css-dyor-doc-rtw">
      Community
      <div>
        75%
        <span>
          <div>
            {{ evaluateCategory("Community") }} /
            {{ KnowMaxCategory("Community") }}
          </div></span
        >
      </div>
    </div>

    <div
      class="css-dyor-doc-qsw"
      v-for="element in searchByCategory('Community')"
      :key="element.id"
    >
      <div class="css-dyor-doc-rsw">
        {{ element.id }}. {{ element.question }}
        <div>
          {{ showAnswerData(element) }} / {{ knowMaxValue(element).toFixed(2) }}
        </div>
      </div>

      <div class="css-dyor-doc-rra">
        <div class="css-dyor-doc-rrr">
          <span>{{ knowAnswerOption(element) }}</span>
        </div>
        <div class="css-dyor-doc-ror">{{ element.textarea }}</div>
      </div>
    </div>

    <div class="css-dyor-doc-rtw">
      ICO Trading Metrics
      <div>
        75%
        <span>
          <div>
            {{ evaluateCategory("Metrics") }} /
            {{ KnowMaxCategory("Metrics") }}
          </div></span
        >
      </div>
    </div>

    <div
      class="css-dyor-doc-qsw"
      v-for="element in searchByCategory('Metrics')"
      :key="element.id"
    >
      <div class="css-dyor-doc-rsw">
        {{ element.id }}. {{ element.question }}
        <div>
          {{ showAnswerData(element) }} / {{ knowMaxValue(element).toFixed(2) }}
        </div>
      </div>

      <div class="css-dyor-doc-rra">
        <div class="css-dyor-doc-rrr">
          <span>{{ knowAnswerOption(element) }}</span>
        </div>
        <div class="css-dyor-doc-ror">{{ element.textarea }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.updateQuestionList();
    this.evaluateQuestions();
  },
  data() {
    return {
      questionList: Object,
      totalScore: 0,
    };
  },
  methods: {
    updateQuestionList() {
      this.questionList = this.$store.getters.sendMeQuestion;
    },
    evaluateQuestions() {
      let counter = 0;
      for (const answer of this.questionList) {
        for (const option of answer.options) {
          if (option.id === answer.answer) {
            counter += option.value;
          }
        }
      }
      this.totalScore = counter.toFixed(2);
    },
    knowAnswerOption(question) {
      for (const option of question.options) {
        if (option.id === question.answer) {
          return option.name;
        }
      }
    },
    KnowMaxCategory(e) {
      let counter = 0.0;
      for (const element of this.questionList) {
        if (element.category === e) {
          counter += this.knowMaxValue(element);
        }
      }
      return counter.toFixed(2);
    },
    showAnswerData(question) {
      for (const option of question.options) {
        if (option.id === question.answer) {
          return option.value.toFixed(2);
        }
      }
      return (0.0).toFixed(2);
    },
    knowMaxValue(question) {
      let counter = [];
      for (const option of question.options) {
        counter.push(option.value);
      }
      return Math.max(...counter);
    },
    searchByCategory(category) {
      let byCategory = [];
      for (const question of this.questionList) {
        if (question.category === category) {
          byCategory.push(question);
        }
      }
      return byCategory;
    },
    knowBrokePage(e) {
      return [3, 6, 9, 12, 15, 18, 21, 24, 27].includes(e) ? true : false;
    },
    evaluateCategory(cty) {
      let counter = 0;
      for (const element of this.questionList) {
        if (element.category === cty) {
          for (const option of element.options) {
            if (option.id === element.answer) {
              counter += option.value;
            }
          }
        }
      }
      return counter.toFixed(2);
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$emit("domRendered");
      }, 1000);
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap");

.css-dyor-doc-pwo {
  background: var(--base-color-white-primary);
  font-family: "Nunito", sans-serif;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 1rem 3rem;
}

.css-dyor-doc-qsw {
  display: flex;
  flex-direction: column;
}

.css-dyor-doc-rtw {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  font-size: var(--text-size-title);
  height: 100px;

  border-radius: 4px;
  align-items: center;
  margin-top: 1rem;
}

.css-dyor-doc-rra {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-primary);
  margin-top: 1rem;
  text-align: start;
  border-radius: 4px;
}

.css-dyor-doc-ror {
  padding: 1rem 1rem;
  white-space: pre-line;
  box-sizing: content;
  word-break: break-all;
}

.css-dyor-doc-rrr {
  border-bottom: 1px solid var(--border-primary);
  padding: 1rem 1rem;
  font-weight: bold;
  font-size: var(--text-size-secondary);
  color: var(--text-color-primary);
}

.css-dyor-doc-rtw div {
  display: flex;
  flex-direction: column;
  text-align: end;
}

.css-dyor-doc-rtw span {
  font-size: var(--text-size-secondary);
  color: var(--text-color-secondary);
}

.css-dyor-doc-rsw {
  display: flex;
  font-weight: bold;
  padding: 1rem;
  justify-content: space-between;
  border: 1px solid var(--border-primary);
  margin-top: 1rem;
  font-size: var(--text-size-secondary);
  border-radius: 4px;
  border-left: 2px solid var(--complementary-color-blue);
}
</style>