<template>
  <div class="css-dyor-doc-pwo">
    <div
      class="css-dyor-doc-rtw"
      v-for="(item, name) of general_data.category_score"
      :key="name"
    >
      <div class="css-haxu">
        {{ name.replace("_", " ") }}
        <span>
          <div>
            {{
              item === "doesn't apply"
                ? "Doesn't apply"
                : item.score + " / " + item.max_score
            }}
          </div></span
        >
      </div>

      <div
        class="css-dyor-doc-qsw"
        v-for="element of item.questions"
        :key="element.id"
      >
        <div class="css-dyor-doc-rsw">
          {{ element.id }}. {{ element.question }}
          <div>{{ element.score.toFixed(2) }} / {{ element.max_score }}</div>
        </div>

        <div class="css-dyor-doc-rra">
          <div class="css-dyor-doc-rrr">
            <span>{{ formatChar(element.answer) }}</span>
          </div>
          <div class="css-dyor-doc-ror">
            <div class="report_text">
              {{ report_data[element.id].textarea }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="css-dyor-doc-rtw">Final Thoughts</div>
    <div class="css-dyor-doc-rra">
      <div class="css-dyor-doc-rrr">
        <span>{{ report_audit.audit_opinion.answer }}</span>
      </div>
      <div class="css-dyor-doc-ror">
        <div class="report_text">{{ report_audit.audit_opinion.textarea }}</div>
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
  data() {
    return {
      questionList: Object,
      totalScore: 0,
      isNoApply: false,
    };
  },
  computed: {
    report_date() {
      return this.$store.getters.getReportDate;
    },
    report_data() {
      return this.$store.getters.getReportData;
    },
    report_audit() {
      return this.$store.getters.getAuditData;
    },
    general_data() {
      return this.$store.getters.getGeneralData;
    },
  },
  methods: {
    formatChar(e) {
      return e.replace(/&lt;/g, "Less than ").replace(/&gt;/g, "Greater than ");
    },
    knowBrokePage(e) {
      return [3, 6, 9, 12, 15, 18, 21, 24, 27].includes(e) ? true : false;
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
.css-haxu {
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  align-items: center;
  font-weight: 600;
  justify-content: space-between;
  font-size: var(--text-size-title);
  text-transform: capitalize;
  border: 1px solid var(--border-primary);
}
.css-dyor-doc-pwo {
  background: var(--base-color-white-primary);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 1rem 3rem;
}

.css-dyor-doc-qsw {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.css-dyor-doc-rtw {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.css-dyor-doc-dtx {
  border: 1px solid var(--complementary-color-blue);

  color: var(--complementary-color-blue);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  line-height: 1.5rem;
  font-size: var(--text-size-secondary);
  margin-top: 1rem;
}
.report_text {
  width: 100%;
  border: none;

  text-align: left;
  outline: none;
  caret-color: var(--text-b);
  color: var(--text-b);
  resize: none;
  line-height: 1.5rem;
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
}

.css-dyor-doc-rsw {
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  border: 1px solid var(--border-primary);
  margin-top: 1rem;
  text-align: start;
  border-radius: 4px;
  line-height: 1.5rem;
}

.css-dyor-doc-rsw div {
  white-space: nowrap;
  margin-left: 10px;
}
</style>