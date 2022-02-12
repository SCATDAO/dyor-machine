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
        <div>
          ISO Fee <span>{{ knowAnswerOption(questionList[13]) }}</span>
        </div>
      </div>
      <div class="html2pdf__page-break" />
      <div class="css-dyor-doc-brw" id="css-com-break">
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
          Twitter real followers

          <span>{{ knowAnswerOption(questionList[16]) }}</span>
        </div>
        <div>
          Reddit active environment
          <span>{{ knowAnswerOption(questionList[18]) }}</span>
        </div>
        <div>
          Telegram active environment
          <span>{{ knowAnswerOption(questionList[20]) }}</span>
        </div>
        <div>
          Discord active environment
          <span>{{ knowAnswerOption(questionList[22]) }}</span>
        </div>
      </div>
    </div>
          <div class="html2pdf__page-break" />
  </div>
</template>

<script>
export default {
  created() {
    this.updateQuestionList();
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
        if (data.per !== "") {
          dataSorted.push(data.per.replace(/\D/gm, "") * 1);
          labelSorted.push(data.name);
        }
      });

      this.donutData = dataSorted;
      this.donutOption.labels = labelSorted;
    },
    updateBarData() {
      let barData = [
        this.reportDataDecoded[16].ed.replace(/\D/gm, ""),
        this.reportDataDecoded[18].ed.replace(/\D/gm, ""),
        this.reportDataDecoded[20].ed.replace(/\D/gm, ""),
        this.reportDataDecoded[22].ed.replace(/\D/gm, ""),
      ];
      this.barData[0].data = barData;

      let barLegend = [];

      for (const e of barData) {
        barLegend.push(e + " Followers");
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
    updateQuestionList() {
      this.questionList = this.$store.getters.sendMeQuestion;
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
  flex-direction: column;
  padding-top: 2rem;
}

.css-dyor-doc-sdc {
  height: 200px;
}

.css-dyor-doc-ctp {
  padding-top: 1rem;
}

#css-com-break {
  margin-top: 3rem;
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
  border-top: 1px dashed var(--border-primary);
  border-bottom: 1px dashed var(--border-primary);
  padding: 1rem 0;
  align-items: center;
  justify-content: space-between;
}

.css-dyor-doc-swc {
  color: var(--text-color-secondary);
}

.css-dyor-doc-sbg {
  margin-top: 2rem;
}
</style>