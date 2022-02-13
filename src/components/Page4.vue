<template>
  <div class="css-dyor-doc-pwo">
    <div class="css-dyor-doc-rtw">
      Development Team

      <span>
        <div>
          {{ evaluateCategory("Development Team") }} /
          {{ KnowMaxCategory("Development Team") }}
        </div></span
      >
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
        <div class="css-dyor-doc-ror">
          <div class="textarea2">{{ element.textarea }}</div>
        </div>
      </div>
    </div>

    <div class="css-dyor-doc-rtw">
      Tokenomics

      <span>
        <div>
          {{ evaluateCategory("Tokenomics") }} /
          {{ KnowMaxCategory("Tokenomics") }}
        </div></span
      >
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
        <div class="css-dyor-doc-ror">
          <div class="textarea2">{{ element.textarea }}</div>
        </div>
      </div>
    </div>

    <div class="css-dyor-doc-rtw">
      Community

      <span>
        <div>
          {{ evaluateCategory("Community") }} /
          {{ KnowMaxCategory("Community") }}
        </div></span
      >
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
        <div class="css-dyor-doc-ror">
          <div class="textarea2">{{ element.textarea }}</div>
        </div>
      </div>
    </div>

    <div class="css-dyor-doc-rtw">
      ICO Trading Metrics
      <span>
        <div>
          <template v-if="evaluateCategory('Metrics') === 404">
            <span>Doesn't Apply </span>
          </template>

          <template v-if="evaluateCategory('Metrics') !== 404">
            <span
              >{{ evaluateCategory("Metrics") }} /
              {{ KnowMaxCategory("Metrics") }}</span
            >
          </template>
        </div></span
      >
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
        <div class="css-dyor-doc-ror">
          <div class="textarea2">{{ element.textarea }}</div>
        </div>
      </div>
    </div>

    <div class="css-dyor-doc-dtx">
      The information contained in the DYOR Tool and within this report is not
      intended as, and shall not be understood or construed as, financial
      advice. The makers of the tool and creator of this report are not
      financial advisors or attorneys, and the information contained on the
      website and within this report is not a substitute for financial advice
      from a professional who is aware of the facts and circumstances of your
      individual situation. The creators of the tool and creator of this report
      accept no liability whatsoever for any loss or damage you may incur. We
      expressly recommend that you seek advice from a professional.
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
      isNoApply: false,
    };
  },
  totalScore() {
    let counter = 0;
    if (this.isNoApply) {
      for (const element of this.questionList.slice(0, 23)) {
        for (const option of element.options) {
          if (option.id === element.answer) {
            counter += option.value;
          }
        }
      }

      return ((counter * 100) / 30).toFixed(2);
    } else {
      for (const element of this.questionList) {
        for (const option of element.options) {
          if (option.id === element.answer) {
            counter += option.value;
          }
        }
      }
      return ((counter * 100) / 35).toFixed(2);
    }
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
            if (element.answer === 404) {
              counter = 404;
            }
            if (option.id === element.answer) {
              counter += option.value;
            }
          }
        }
      }
      if (counter === 404) {
        this.isNoApply = true;
        return counter;
      } else {
        return counter.toFixed(2);
      }
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
  padding: 1rem 1rem;
  border: 1px solid var(--border-primary);

  border-radius: 4px;
  align-items: center;
  border-left: 2px solid var(--complementary-color-blue);
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.css-dyor-doc-dtx {
  border: 1px solid var(--complementary-color-blue);
  background: var(--color-soft-blue);
  color: var(--complementary-color-blue);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-size: var(--text-size-secondary);
  margin-top: 1rem;
}
.textarea2 {
  width: 100%;
  border: none;
  font-size: var(--text-size-primary);
  text-align: left;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  caret-color: var(--text-color-primary);
  color: var(--text-color-secondary);
  resize: none;
  font-family: "Nunito", sans-serif;
  font-weight: lighter;
  padding: 0.5rem;
  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: anywhere;
  border: 1px solid transparent;
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
  box-sizing: content;
}

.css-dyor-doc-rrr {
  border-bottom: 1px solid var(--border-primary);
  padding: 1rem 1rem;
  font-weight: 600;
  color: var(--text-color-primary);
}

.css-dyor-doc-rtw span {
  font-size: var(--text-size-primary);
  color: var(--text-color-secondary);
}

.css-dyor-doc-rsw {
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  border: 1px solid var(--border-primary);
  margin-top: 1rem;
  text-align: start;
  border-radius: 4px;
}

.css-dyor-doc-rsw div {
  white-space: nowrap;
  margin-left: 10px;
}
</style>