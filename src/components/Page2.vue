<template>
  <div class="css-dyor-doc-pwo">
    <div class="css-dyor-doc-rtw">
      Development Team
      <div>75% <span>7.00 / 10.00</span></div>
    </div>
    <div class="css-dyor-doc-rsw">
      {{ this.questionList[0].id }}. {{ this.questionList[0].question }}
      <div>0.00 / 0.00</div>
    </div>

    <div class="css-dyor-doc-rsw">
      {{ this.questionList[1].id }}. {{ this.questionList[1].question }}
      <div>4.00 / 4.00</div>
    </div>
    <div class="css-dyor-doc-rra">
      <div class="css-dyor-doc-rrr">R: <span>No</span></div>
      <div class="css-dyor-doc-ror">
        {{ this.$store.state.reportDataDecoded[2].ta }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.updateQuestionList();
  },
  data() {
    return {
      questionList: Object,
    };
  },
  methods: {
    updateQuestionList() {
      this.questionList = this.$store.getters.sendMeQuestion;
      console.log(this.questionList);
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
  height: 1099px;
  box-sizing: border-box;
  padding: 1rem 3rem;
}

.css-dyor-doc-rtw {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  font-size: var(--text-size-title);
  padding: 1rem;
}

.css-dyor-doc-rra {
  min-height: 300px;
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
  border-left: 1px solid var(--complementary-color-blue);
}
</style>