<template>
  <div class="css-dyor-doc-pwo">
    <div class="css-dyor-doc-bar">
      <template v-if="general_data.scheme === 'dapp'">
        <div class="css-dyor-doc-brw">
          <div class="css-dyor-doc-sbc">Tokenomics</div>
          <div class="css-dyor-doc-swc">
            Public and private token distribution
          </div>
        </div>
        <div class="css-dyor-doc-sbg" id="chart1">
          <apexchart
            type="donut"
            :options="donut_option"
            height="350"
            :series="donut_data"
          ></apexchart>
        </div>

        <div class="css-dyor-doc-sdc">
          <div
            v-for="(item, key) of report_audit.charts.tokenomics.ref"
            :key="key"
          >
            {{ general_data.score_per_question[item].name }}:

            <span>
              {{
                formatChar(general_data.score_per_question[item].answer)
              }}</span
            >
          </div>
        </div>
      </template>
      <div class="html2pdf__page-break" />
      <div class="css-dyor-doc-brw" id="css-com-break">
        <div class="css-dyor-doc-sbc">Community</div>
        <div class="css-dyor-doc-swc">Social networks information</div>
      </div>
      <div class="css-dyor-doc-sbg" id="chart">
        <apexchart
          type="bar"
          height="350"
          :options="bar_options"
          :series="bar_data"
        ></apexchart>
      </div>
      <div class="css-dyor-doc-sdc" style="padding-top: 1rem">
        <div v-for="(item, key) of report_audit.charts.community" :key="key">
          {{ general_data.score_per_question[item.id].name }}:

          <span>
            {{ formatChar(general_data.score_per_question[item.id].answer) }}</span
          >
        </div>
      </div>
    </div>
    <div class="html2pdf__page-break" />
  </div>
</template>

<script>
export default {
  created() {
    this.updateDonutData();
    this.updateBarChart();
  },
  data() {
    return {
      reportDataDecoded: Object,
      questionList: Object,
      donut_data: [],
      donut_option: {
        colors: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#9b19f5",
          "#ffa300",
          "#dc0ab4",
          "#b3d4ff",
          "#00bfa0",
        ],
        labels: [],
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
      },
      bar_data: [
        {
          data: [0, 0, 0, 0],
        },
      ],
      bar_options: {
        colors: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#9b19f5",
          "#ffa300",
          "#dc0ab4",
          "#b3d4ff",
          "#00bfa0",
        ],
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
          categories: [],
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
    updateDonutData() {
      if (this.general_data.scheme === "dapp") {
        const data = this.report_audit.charts.tokenomics;

        this.donut_data = data.values;

        this.donut_option.labels = data.labels;
      }
    },
    updateBarChart() {
      try {
        const data = this.report_audit.charts.community;

        this.bar_options.xaxis.categories = Object.keys(data);

        let bar_data = Object.values(data).map((e) => e.value);

        let bar_legends = [];

        bar_data.forEach((e) => bar_legends.push(e + " - Followers"));

        this.bar_data[0].data = bar_data;

        this.bar_options.legend.customLegendItems = bar_legends;
      } catch (e) {
        console.error(e);
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
  background: var(--background-a);
  width: 100%;
  height: 100%;
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
  white-space: nowrap;
}

.css-dyor-doc-ctp {
  padding-top: 1rem;
}

#css-com-break {
  margin-top: 3rem;
}

.css-dyor-doc-sbc {
  font-size: var(--text-size-title);
  font-weight: bold;
  text-align: start;
}

.css-dyor-doc-sdc {
  padding: 0 1rem;
  box-sizing: border-box;
}
.css-dyor-doc-sdc div {
  margin-top: 1.5rem;
  display: flex;
  font-weight: 600;
  justify-content: space-between;
}

.css-dyor-doc-sdc span {
  color: var(--text-b);
  font-weight: 500;
}

.css-dyor-doc-brw {
  display: flex;
  border-top: 1px solid var(--border-primary);
  border-bottom: 1px solid var(--border-primary);
  padding: 1rem 0;
  align-items: center;
  justify-content: space-between;
}

.css-dyor-doc-swc {
  color: var(--text-b);
}

.css-dyor-doc-sbg {
  margin-top: 2rem;
}
</style>