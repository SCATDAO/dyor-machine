<template>
  <div class="css-mr-qca" id="capture2" style="image-rendering: pixelated">
    <div class="css-dc-koq">
      <div class="css-dc-qxs">
        <span>{{ general_data.project }}</span>
      </div>
      <div class="css-dc-qxk">
        <span> {{ report_audit.category || general_data.scheme }} </span>
      </div>
      <div class="css-dc-xqq">
        <div class="css-dc-xaa">
          <div class="css-dc-qkz">
            <img :src="report_audit.project_logo" alt="" />
          </div>
        </div>

        <div class="css-dc-qza">
          <div class="css-dc-qxx">
            <span>Total Percentage</span>
          </div>
          <div class="css-dc-qxq">
            <span
              >{{ general_data.total_percentage }}
              <span class="css-dc-qxp"> % </span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="css-dc-kqq">
      <div
        class="css-dc-qxh"
        v-for="(item, name) of general_data.category_score"
        :key="name"
      >
        <div style="text-transform: capitalize">
          {{ name.replace("_", " ") }}
        </div>
        <span>
          {{
            item === "doesn't apply"
              ? "Doesn't apply"
              : item.score + " / " + item.max_score
          }}
        </span>
      </div>
    </div>
    <div class="css-dc-qox">
      <canvas
        class="camva"
        id="qr-3"
        style="image-rendering: pixelated"
      ></canvas>
      <div class="css-dc-qqq">
        <span class="css-dc-cqw"> <span>ID:</span> {{ id }}</span>
        <span class="css-dc-cqw">
          <span>Date:</span>

          {{ report_date.getDate() }} /

          {{ report_date.toLocaleString("default", { month: "numeric" }) }} /

          {{ report_date.getFullYear() }}
        </span>
        <span class="css-dc-cqw">
          <span>Author:</span> {{ general_data.author }}</span
        >
      </div>
      <div class="css-mr-qcz">
        <img width="150" src="../assets/white-logo.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import html2canvas from "html2canvas";

import QRious from "qrious";

export default {
  props: ["id"],
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
  mounted() {
    this.createNewCanvas();
  },
  methods: {
    downloadImage() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.toContentWidth();
          this.createNewCanvas();
          const body = document.querySelector("body");
          body.style.opacity = "0";
          const recipe = document.querySelector("#capture2");
          recipe.style.transform = "scale(100%)";
          html2canvas(recipe, { width: 700, height: 900 }).then((canvas) => {
            canvas.style.imageRendering = "pixelated";
            const can = document.createElement("a");
            can.href = canvas.toDataURL("image/png;base64");
            can.download = `${this.general_data.project.replace(".", "-")}`;
            can.click();
            recipe.style.transform = "scale(60%)";
            this.toDeviceWidth();
            body.style.opacity = "1";
          });
        }, 1000);
      });
    },
    toContentWidth() {
      let metaTag = document.createElement("meta");
      metaTag.name = "viewport";
      metaTag.content = "content=width=1024";
      document.getElementsByTagName("head")[0].appendChild(metaTag);
    },
    toDeviceWidth() {
      let metaTag = document.createElement("meta");
      metaTag = document.createElement("meta");
      metaTag.name = "viewport";
      metaTag.content = "width=device-width, initial-scale=1";
      document.getElementsByTagName("head")[0].appendChild(metaTag);
    },
    createNewCanvas() {
      const quickResponse = new QRious({
        element: document.getElementById("qr-3"),
        value: `https://audits.dyortool.io/report/${this.id}`,
      });
      quickResponse.size = 100;
      quickResponse.background = "#ffffff";
      quickResponse.foregroundAlpha = 1;
      quickResponse.backgroundAlpha = 1;
      quickResponse.foreground = "#000000";
      quickResponse.level = "L";
    },
  },
};
</script>

<style scoped>

canvas {
  border: 2px solid #ffffff;
  border-radius: 3px;
}
.css-mr-qca {
  width: 700px;
  min-width: 700px;
  min-height: 900px;
  max-height: 900px;
  max-width: 700px;
  height: 900px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  z-index: 1000;
  background: linear-gradient(22.58deg, #0036c2 0%, #0069f5 100%);
}

#capture2 {
  transform: scale(60%);
}
.css-dc-qkz {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0 2rem;
}

.css-dc-qxp {
  font-size: var(--text-size-fourth) !important;
}
.css-dc-qza {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  text-align: left;
  justify-content: left;
  text-overflow: ellipsis;
}

.css-dc-xqq {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  margin-top: 2rem;
}
.css-dc-qxs,
.css-dc-qxx,
.css-dc-qxk,
.css-dc-qxq {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 2rem;
}

.css-dc-kqq {
  width: 700px;
  min-width: 700px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  margin-top: auto;
}

.css-dc-qxh {
  display: flex;
  width: 700px;
  min-width: 700px;
  max-width: 700px;
  height: 4rem;
  align-items: center;
  color: #ffffff;
  padding: 0 2rem;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 1rem;
  font-size: var(--text-size-fourth);
}

.css-dc-qxh div {
  text-align: left !important;
}
.css-dc-qxh span {
  letter-spacing: 0.03em;
  margin-left: auto;
  text-align: right !important;
}
.css-dc-cqw {
  color: #fff;
  font-size: var(--text-size-third);
}

.css-dc-qox {
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  box-sizing: border-box;
  padding: 0 2rem;
  margin-top: auto;
}

.css-dc-qqq {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 0rem 1rem;
  height: 100px;
  text-align: start;
  flex-direction: column;
  justify-content: space-between;
}

.css-dc-qxx,
.css-dc-qxq {
  padding: 0;
}
.css-mr-qcz {
  height: 6rem;

  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.css-dc-qxs {
  margin-top: 2rem;
}

.css-dc-qxk span {
  font-size: var(--text-size-third) !important;
  margin-left: 3px;
  text-transform: uppercase;
}
.css-dc-qxq span,
.css-dc-qxk,
.css-dc-qxs span {
  color: #fff;
  text-align: left;
  text-transform: uppercase;
  font-size: var(--text-size-sixth);
}

.css-dc-qxq span {
  font-size: var(--text-size-seventh);
}
.css-dc-qxx {
  font-weight: bold;
}

.css-dc-qxx span {
  color: #fff;
  text-align: left;
  white-space: nowrap;
  font-size: var(--text-size-fourth);
}
.css-dc-qkz img {
  border-radius: 50%;
  width: 120px;
  min-height: 120px;
  max-height: 120px;
  min-width: 120px;
  max-width: 120px;
  height: 120px;
  background: #ffffff;
}
</style>