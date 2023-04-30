<template>
  <div class="css-adb-pwo">
    <div class="css-adb-fpg">
      <div class="css-adb-sxf">
        <canvas
          class="camva"
          id="quickResponse2"
          style="image-rendering: pixelated"
        ></canvas>
        <div class="css-adb-sfx">
          <span class="css-adb-sxx"> <span>ID:</span> {{ id }}</span>
          <span class="css-adb-sxx">
            <span>Date:</span> {{ report_date.toLocaleString() }}</span
          >
          <span class="css-adb-sxx">
            <span>Author:</span> {{ general_data.author }}</span
          >
        </div>
      </div>
      <div class="css-adb-sdq">
        <div class="css-adb-sxa">
          <div class="css-adb-sxz">
            <img
              class="css-adb-csx"
              :src="'data:image/png;base64,' + report_audit.project_logo.split(',')[1]"
              alt=""
            />
          </div>

          <span class="css-adb-psp" style="text-transform: capitalize">{{
            general_data.project
          }}</span>
          <span class="css-adb-pss">Total percentage:</span>
          <span class="css-adb-tsp"
            >{{ general_data.total_percentage }}
            <span style="font-size: var(--text-size-third)">%</span>
          </span>
        </div>
      </div>
      <div class="css-adb-sbc">General Information</div>
      <div class="css-adb-sba">
        Name:
        <span style="text-transform: capitalize">
          {{ general_data.project }}
        </span>
      </div>

      <div class="css-adb-sba">
        Category:
        <span>
          <span style="text-transform: uppercase">
            {{ general_data.category || general_data.scheme }}
          </span></span
        >
      </div>
      <div class="css-adb-sba">
        Description:
        <span>
          {{ general_data.description }}
        </span>
      </div>
      <div class="css-adb-sba">
        Symbol:
        <span style="text-transform: uppercase">
          {{ general_data.symbol || "N/A" }}
        </span>
      </div>
      <div class="css-adb-sba">
        Website:
        <span style="text-transform: lowercase">
          {{ general_data.website }}
        </span>
      </div>

      <div class="css-adb-sba">
        Repository:
        <span style="text-transform: lowercase">
          {{ general_data.repository || "N/A" }}
        </span>
      </div>

      <template v-if="general_data.scheme === 'nft'">
        <div class="css-adb-sba">
          Discord:
          <span style="text-transform: lowercase">
            {{ general_data.discord || "N/A" }}
          </span>
        </div>

        <div class="css-adb-sba">
          Twitter:
          <span style="text-transform: lowercase">
            {{ general_data.twitter || "N/A" }}
          </span>
        </div>
        <div class="css-adb-sba">
          Number in circulation:
          <span style="text-transform: lowercase">
            {{ general_data.number_in_circulation || "N/A" }}
          </span>
        </div>
        <div class="css-adb-sba">
          Whitelist:
          <span style="text-transform: lowercase">
            {{ general_data.whitelist || "N/A" }}
          </span>
        </div>

        <div class="css-adb-sba">
          Number per mint:
          <span style="text-transform: lowercase">
            {{ general_data.number_per_mint || "N/A" }}
          </span>
        </div>

        <div class="css-adb-sba">
          Mint date:
          <span style="text-transform: lowercase">
            {{ general_data.mint_date || "N/A" }}
          </span>
        </div>
      </template>
    </div>
  </div>
</template>
      <div class="html2pdf__page-break" />
      <div class="css-adb-sba">
        Repository:
        <span style="text-transform: lowercase">
          {{ general_data.repository || "N/A" }}
        </span>
      </div>
      <div class="css-adb-sba">
        Report creator:
        <span style="text-transform: capitalize">
          {{ general_data.author }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import QRious from "qrious";

export default {
  props: ["id", "total_percentage"],
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
    createNewCanvas() {
      const quickResponse = new QRious({
        element: document.getElementById("quickResponse2"),
        value: `https://audits.dyortool.io/report/${this.id}`,
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
.css-adb-pwo {
  background: var(--base-color-white-primary);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 1rem 2rem;
  padding-top: 3rem;
}

.css-adb-tsp {
  margin-top: 1rem;
  font-size: var(--text-size-fifth);

}

.css-adb-csx {
  width: 80px;
  height: 80px;
}
.css-adb-fpg {
  display: flex;
  flex-direction: column;
}

.css-adb-sba {
  justify-content: space-between;
  display: flex;
  box-sizing: border-box;
  align-items: center;

  font-weight: 600;
  border-radius: 6px;
  padding: 0 1rem;
  margin-top: 3rem;
  text-align: start;
}

.css-adb-sdq {
  border: 1px solid var(--border-primary);
  border-radius: 6px;
  margin-top: 1rem;
  box-sizing: border-box;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
}

.css-adb-psp {
  font-weight: bold;
  margin-top: 1rem;
  font-size: var(--text-size-fourth);
}
.css-adb-pss {
  margin-top: 1rem;
}
.css-adb-sxf {
  display: flex;
  align-items: center;
}

.css-adb-sfx {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 0rem 1rem;
  height: 100px;
  text-align: start;
  flex-direction: column;
  justify-content: space-around;
}

.css-adb-sxa {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.css-adb-sxz {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  border: 1px solid var(--border-primary);
  align-items: center;
  border-radius: 8px;
}
.css-adb-sbc span {
  color: var(--text-b);
  font-size: var(--text-size-primary);
  font-weight: initial;
}
.css-adb-sba span {
  width: 50%;
  text-align: end;
  font-weight: 500;
  color: var(--text-b);
}

.css-adb-sbc {
  font-size: var(--text-size-title);
  font-weight: bold;
  text-align: start;
  margin-top: 2rem;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--border-primary);
  border-bottom: 1px solid var(--border-primary);
  justify-content: space-between;
}
</style>