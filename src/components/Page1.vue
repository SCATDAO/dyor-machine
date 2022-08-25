<template>
  <div class="css-dyor-doc-pwo">
    <img src="../assets/report-cover.svg" alt="" />
    <div class="css-dyor-doc-rap">
      <div class="css-dyor-doc-aiw">
        <img
          class="css-dyor-doc-scw"
          id="logo-img"
          :src="report_audit.project_logo"
          alt=""
        />
      </div>
    </div>
    <div class="css-dyor-doc-rsb">
      <b>{{ general_data.project }}</b>
      <b>DYOR REPORT</b>
      <b>{{ report_date.getFullYear() }}</b>
    </div>
    <div class="css-dyor-doc-rcb">
      <div>{{ report_date.getDate() }}</div>
      <div>{{ report_date.toLocaleString("default", { month: "long" }) }}</div>
      <div>{{ report_date.getFullYear() }}</div>
    </div>
    <div class="css-dyor-doc-rub">
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
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap");

.css-dyor-doc-rap {
  width: 100%;
  top: 18%;
  height: 100px;
  display: flex;
  justify-content: center;
  position: absolute;
}

.css-dyor-doc-scw {
  width: 80px;
  height: 80px;
}

.css-dyor-back-svg {
  min-width: 300px;
  image-rendering: optimizeQuality;
}
.css-dyor-doc-aiw {
  width: 100px;
  height: 100px;
  background-size: contain;
  box-shadow: 1px 1px 20px var(--shadow-blue);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.css-dyor-doc-rcb {
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

.css-dyor-doc-rcb div {
  margin-right: 0.5rem;
}

.css-dyor-doc-rub {
  display: flex;
  flex-direction: column;
  color: #fff;
  position: absolute;
  bottom: 10rem;
  text-align: start;
  padding: 0 4rem;
  letter-spacing: 0.04em;
}

.css-dyor-doc-pwo {
  width: 100%;
  height: 1121px;
  background: var(--base-color-white-primary);
  box-sizing: border-box;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
}

.css-dyor-doc-rsb {
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