<template>
  <div class="css-dyor-doc-pwo">
    <div class="css-dyor-doc-fpg">
      <div class="css-dyor-doc-dba">
        Dyor tool is a tool for the crypto community aimed at investors who
        dedicate research to potential projects to invest. The information
        contained in this report belongs solely and exclusively to its creator.
      </div>
      <div class="css-dyor-doc-sdq">
        <div class="css-dyor-doc-sxa">
          <div class="css-dyor-doc-sxz">
            <img class="css-dyor-doc-csx" :src="newAudit.pl" alt="" />
          </div>

          <span class="css-dyor-doc-psp">{{ newAudit.pn }}</span>
          <span class="css-dyor-doc-pss">Total Score:</span>
          <span class="css-dyor-doc-tsp">{{ totalScore }}%</span>
        </div>
        <div class="css-dyor-doc-sxf">
          <canvas
            class="camva"
            id="quickResponse2"
            style="image-rendering: pixelated"
          ></canvas>
          <div class="css-dyor-doc-sfx">
            <span class="css-dyor-doc-sxx">
              <span>Report_ID:</span> {{ reportCode }}</span
            >
            <span class="css-dyor-doc-sxx"> <span>Date:</span> 12/12/2022</span>
            <span class="css-dyor-doc-sxx">
              <span>Created_by:</span> {{ newAudit.an }}</span
            >
          </div>
        </div>
      </div>
      <div class="css-dyor-doc-sbc">General Information</div>
      <div class="css-dyor-doc-sba">
        Name:
        <span style="text-transform: capitalize"> {{ newAudit.pn }} </span>
      </div>

      <div class="css-dyor-doc-sba">
        Category:
        <span>
          <span style="text-transform: capitalize">
            {{ newAudit.pc }}
          </span></span
        >
      </div>
      <div class="css-dyor-doc-sba">
        Description:
        <span style="text-transform: capitalize"> {{ newAudit.pd }} </span>
      </div>
      <div class="css-dyor-doc-sba">
        Token:
        <span style="text-transform: uppercase"> {{ newAudit.ps }} </span>
      </div>
      <div class="css-dyor-doc-sba">
        Website:
        <span style="text-transform: lowercase"> {{ newAudit.pw }} </span>
      </div>

      <div class="css-dyor-doc-sba">
        Github/Repository:
        <span style="text-transform: lowercase"> {{ newAudit.pr }} </span>
      </div>
      <div class="html2pdf__page-break" />
      <div class="css-dyor-doc-sba">
        Report creator:
        <span style="text-transform: capitalize"> {{ newAudit.an }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import QRious from "qrious";

export default {
  props: ["reportCode", "totalScore"],
  computed: {
    newAudit() {
      return this.$store.getters.sendMeAudit;
    },
  },
  mounted() {
    this.createNewCanvas();
  },
  methods: {
    createNewCanvas() {
      const quickResponse = new QRious({
        element: document.getElementById("quickResponse2"),
        value: `http://192.168.1.3:8080/report/${this.reportCode}`,
      });
      quickResponse.size = 100;
      quickResponse.background = "transparent";
      quickResponse.foregroundAlpha = 0.8;
      quickResponse.backgroundAlpha = 0.8;
      quickResponse.foreground = "#000000";
      quickResponse.level = "L";
    },
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
  padding-top: 3rem;
}

.css-dyor-doc-tsp {
  margin-top: 1rem;
  font-size: var(--text-size-fifth);
}

.css-dyor-doc-csx {
  width: 80px;
  height: 80px;
}
.css-dyor-doc-fpg {
  display: flex;
  flex-direction: column;
}

.css-dyor-doc-sba {
  justify-content: space-between;
  display: flex;
  font-weight: bold;
  margin-top: 2rem;
  text-align: start;
}

.css-dyor-doc-sdq {
  border: 1px solid var(--border-primary);
  border-radius: 4px;
  height: 500px;
  margin-top: 1rem;
  box-sizing: border-box;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
}

.css-dyor-doc-psp {
  font-weight: bold;
  margin-top: 1rem;
  text-transform: uppercase;
}
.css-dyor-doc-pss {
  margin-top: 1rem;
}
.css-dyor-doc-sxf {
  display: flex;
  margin-top: 4rem;
  align-items: center;
}

.css-dyor-doc-sfx {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 0rem 1rem;
  height: 100%;
  text-align: start;
  flex-direction: column;
  justify-content: space-around;
}

.css-dyor-doc-sxa {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 3rem;
}

.css-dyor-doc-sxz {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  border: 1px solid var(--border-primary);
  align-items: center;
  border-radius: 8px;
}
.css-dyor-doc-sbc span {
  color: var(--text-color-secondary);
  font-size: var(--text-size-primary);
  font-weight: initial;
}

.css-dyor-doc-dba {
  font-size: var(--text-size-secondary);
  border-radius: 4px;
  border: 1px solid var(--color-soft-blue);
  background: var(--color-soft-blue);
  color: var(--complementary-color-blue);
  box-sizing: border-box;
  padding: 1rem;
  text-align: center;
  display: flex;
}

.css-dyor-doc-sba span {
  width: 80%;
  text-align: end;
  color: var(--text-color-secondary);
}

.css-dyor-doc-sbc {
  font-size: var(--text-size-title);
  font-weight: 700;
  text-align: start;
  margin-top: 2rem;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  border-top: 1px dashed var(--border-primary);
  border-bottom: 1px dashed var(--border-primary);
  justify-content: space-between;
}
</style>