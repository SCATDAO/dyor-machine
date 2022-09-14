<template>
  <div class="css-dcx-pwo">
    <img src="../assets/report-cover.svg" alt="" />
    <div class="css-dcx-rap">
      <div class="css-dcx-aiw">
        <img
          class="css-dcx-scw"
          id="logo-img"
          :src="'data:image/png;base64,' + report_audit.project_logo.split(',')[1]"
          alt=""
        />
      </div>
    </div>
    <div class="css-dcx-rsb">
      <b style="font-weight: 300">{{ general_data.project }}</b>
      <b style="font-weight: 600">DYOR REPORT</b>
      <b>{{ report_date.getFullYear() }}</b>
    </div>
    <div class="css-dcx-rcb">
      <div>{{ report_date.getDate() }}</div>
      <div>{{ report_date.toLocaleString("default", { month: "long" }) }}</div>
      <div>{{ report_date.getFullYear() }} - {{ general_data.scheme }}</div>
    </div>
    <div class="css-dcx-rub">
      <span>Community report made by {{ general_data.author }}</span>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {};
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
  methods: {},
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
.css-dcx-rap {
  width: 100%;
  top: 18%;
  height: 100px;
  display: flex;
  justify-content: center;
  position: absolute;
}

.css-dcx-scw {
  width: 80px;
  height: 80px;
}

.css-dyor-back-svg {
  min-width: 300px;
  image-rendering: optimizeQuality;
}
.css-dcx-aiw {
  width: 100px;
  height: 100px;
  background-size: contain;
  box-shadow: 1px 1px 20px var(--shadow-blue);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.css-dcx-rcb {
  text-transform: uppercase;
  display: flex;
  color: #fff;
  position: absolute;
  bottom: 15rem;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  letter-spacing: 0.3em;
}

.css-dcx-rcb div {
  margin-right: 0.5rem;
}

.css-dcx-rub {
  display: flex;
  flex-direction: column;
  color: #fff;
  position: absolute;
  bottom: 10rem;
  text-align: start;
  padding: 0 4rem;
  letter-spacing: 0.04em;
  text-transform: capitalize;
}

.css-dcx-pwo {
  width: 100%;
  height: 1121px;
  background: var(--base-color-white-primary);
  box-sizing: border-box;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
}

.css-dcx-rsb {
  font-size: var(--text-size-fifth);
  display: flex;
  flex-direction: column;
  color: #fff;
  position: absolute;
  bottom: 20rem;
  text-align: start;
  padding: 0 4rem;

  letter-spacing: 0.04em;
  text-transform: uppercase;
}
</style>