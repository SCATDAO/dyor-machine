<template>
  <div class="css-dyor-doc-pwo">
    <div class="css-dyor-doc-bar">
      <div class="css-dyor-doc-brw">
        <div class="css-dyor-doc-sbc">Public distribution</div>
        <div class="css-dyor-doc-swc">Fair public and private distribution</div>
      </div>
      <div class="css-dyor-doc-sbg" id="chart1">
        <apexchart
          type="donut"
          :options="donutOption"
          height="350"
          :series="donutData"
        ></apexchart>
      </div>
      <div class="css-dyor-doc-sdc">
        <div>
          Vesting schedule
          <span>{{ knowAnswerOption(questionList[10]) }}</span>
        </div>
        <div>
          Minting policy Locked
          <span>{{ knowAnswerOption(questionList[11]) }}</span>
        </div>
        <div>
          Clear use case <span>{{ knowAnswerOption(questionList[12]) }}</span>
        </div>
      </div>
      <div class="css-dyor-doc-brw">
        <div class="css-dyor-doc-sbc">Community</div>
        <div class="css-dyor-doc-swc">Social networks information</div>
      </div>
      <div class="css-dyor-doc-sbg" id="chart">
        <apexchart
          type="bar"
          height="350"
          :options="barOption"
          :series="barData"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.updateQuestionList();
    this.evaluatePercentage();
  },
  methods: {
    searchByCategory(category) {
      let byCategory = [];
      for (const question of this.questionList) {
        if (question.category === category) {
          byCategory.push(question);
        }
      }
      return byCategory;
    },
    evaluatePercentage() {
      console.log(this.questionList[8].answer, "e");
    },
    updateQuestionList() {
      this.questionList = this.$store.getters.sendMeQuestion;
      console.log(this.questionList);
    },
    knowAnswerOption(question) {
      for (const option of question.options) {
        if (option.id === question.answer) {
          return option.name;
        }
      }
    },
  },
  data() {
    return {
      questionList: Object,
      donutData: [7, 13, 80],
      donutOption: {
        chart: {
          id: "chart1",
          type: "donut",

          animations: {
            enabled: false,
            animateGradually: {
              enabled: false,
            },
            dynamicAnimation: {
              enabled: false,
            },
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        labels: [
          "Development team / Early investors",
          "Public sale or rewards",
          "Rest of tokenomics distribution",
        ],
      },

      barData: [
        {
          data: [2100, 3200, 532, 1323],
        },
      ],
      barOption: {
        chart: {
          id: "chart",
          type: "bar",
          toolbar: {
            show: false,
            tools: {
              download: false,
            },
          },

          animations: {
            enabled: false,
            animateGradually: {
              enabled: false,
            },
            dynamicAnimation: {
              enabled: false,
            },
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
            distributed: true,
          },
        },
        labels: {
          style: {
            colors: ["#001737"],
            fontSize: "12px",
            fontWeight: "600",
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ["Twitter", "Reddit", "Telegram", "Discord"],
          labels: {
            style: {
              colors: ["#001737"],
              fontSize: "12px",
              fontWeight: "600",
            },
          },
        },
        tooltip: {
          enabled: true,
          // theme: true,
          x: {
            show: true,
            format: "MMM dd, yyyy HH:mm",
          },
        },
        legend: {
          show: true,
          labels: {
            useSeriesColors: false,
          },
          onItemClick: {
            toggleDataSeries: false,
          },
          onItemHover: {
            highlightDataSeries: false,
          },
          customLegendItems: [
            "1k to 5000k",
            "1k to 5000k",
            "1k to 5000k",
            "1k to 5000k",
          ],
        },
      },
    };
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
.css-dyor-doc-pwo {
  background: var(--base-color-white-primary);
  width: 100%;
  height: 100%;
  font-family: "Nunito", sans-serif;
  box-sizing: border-box;
  padding: 1rem 3rem;
}

.css-dyor-doc-bar {
  box-sizing: border-box;
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
}

.css-dyor-doc-sdc {
  height: 200px;
}

.css-dyor-doc-sbc {
  font-size: var(--text-size-title);
  font-weight: 700;
  text-align: start;
}

.css-dyor-doc-sdc {
  padding: 0 2rem;
  box-sizing: border-box;
}
.css-dyor-doc-sdc div {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}

.css-dyor-doc-sdc span {
  font-weight: bold;
}

.css-dyor-doc-brw {
  display: flex;
  justify-content: space-between;
}

.css-dyor-doc-swc {
  color: var(--text-color-secondary);
}

.css-dyor-doc-sbg {
  margin-top: 1rem;
}
</style>