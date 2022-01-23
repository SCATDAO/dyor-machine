<template>
  <div class="css-dyor-doc-pwo">
    <div class="css-dyor-doc-bar">
      <div class="css-dyor-doc-brw">
        <div class="css-dyor-doc-sbc">Tokenomics</div>
        <div class="css-dyor-doc-swc">
          Public and private token distribution
        </div>
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
      <div class="css-dyor-doc-sdc" style="padding-top: 1rem">
        <div>
          <div>
            <svg
              width="16"
              fill="rgb(29, 155, 240)"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="
                r-1cvl2hr
                r-4qtqp9
                r-yyyyoo
                r-16y2uox
                r-8kz0gk
                r-dnmrzs
                r-bnwqim
                r-1plcrui
                r-lrvibr
                r-lrsllp
              "
            >
              <g>
                <path
                  d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                ></path>
              </g>
            </svg>
            <span> - Real followers</span>
          </div>
          <span>{{ knowAnswerOption(questionList[16]) }}</span>
        </div>
        <div>
          Reddit ¿Active environment?
          <span>{{ knowAnswerOption(questionList[18]) }}</span>
        </div>
        <div>
          Telegram ¿Active environment?
          <span>{{ knowAnswerOption(questionList[20]) }}</span>
        </div>
        <div>
          Discord ¿Active environment?
          <span>{{ knowAnswerOption(questionList[22]) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.updateQuestionList();
    this.evaluatePercentage();
    this.updateDataReport();
    this.updateChartData();
    this.updateBarData();
  },
  data() {
    return {
      reportDataDecoded: Object,
      questionList: Object,
      donutData: [],
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
        labels: [],
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
          customLegendItems: [],
        },
      },
    };
  },
  methods: {
    updateChartData() {
      let dataSorted = [];
      let labelSorted = [];
      this.reportDataDecoded[9].ed.forEach((data) => {
        dataSorted.push(data.per);
      });
      dataSorted.sort(function (a, b) {
        return a - b;
      });

      for (const element of dataSorted) {
        for (const per of this.reportDataDecoded[9].ed)
          if (element === per.per) {
            labelSorted.push(per.name);
          }
      }
      console.log(dataSorted);
      console.log(labelSorted);
      this.donutData = dataSorted;
      this.donutOption.labels = labelSorted;
    },
    updateBarData() {
      let barData = [
        this.reportDataDecoded[16].ta,
        this.reportDataDecoded[18].ta,
        this.reportDataDecoded[20].ta,
        this.reportDataDecoded[22].ta,
      ];
      this.barData[0].data = barData;

      let barLegend = [];

      for (const x of barData) {
        barLegend.push(x + " Users");
      }

      this.barOption.legend.customLegendItems = barLegend;
    },
    updateDataReport() {
      this.reportDataDecoded = this.$store.getters.sendMeReport;
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
  padding-top: 2rem;
}

.css-dyor-doc-sdc {
  height: 200px;
}

.css-dyor-doc-ctp {
  padding-top: 1rem;
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