<template>
  <div class="css-dyor-doc-pwo">
    <div class="css-dyor-doc-fpg">
      <div class="css-dyor-doc-sxf">
        <canvas
          class="camva"
          id="quickResponse2"
          style="image-rendering: pixelated"
        ></canvas>
        <div class="css-dyor-doc-sfx">
          <span class="css-dyor-doc-sxx"> <span>ID:</span> {{ id }}</span>
          <span class="css-dyor-doc-sxx">
            <span>Date:</span> {{ report_date.toLocaleString() }}</span
          >
          <span class="css-dyor-doc-sxx">
            <span>Author:</span> {{ general_data.author }}</span
          >
        </div>
      </div>
      <div class="css-dyor-doc-sdq">
        <div class="css-dyor-doc-sxa">
          <div class="css-dyor-doc-sxz">
            <img
              class="css-dyor-doc-csx"
              :src="report_audit.project_logo"
              alt=""
            />
          </div>

          <span class="css-dyor-doc-psp" style="text-transform: capitalize">{{
            general_data.project
          }}</span>
          <span class="css-dyor-doc-pss">Total percentage:</span>
          <span class="css-dyor-doc-tsp"
            >{{ general_data.total_percentage }}
            <span style="font-size: var(--text-size-third)">%</span>
          </span>
        </div>
      </div>
      <div class="css-dyor-doc-sbc">General Information</div>
      <div class="css-dyor-doc-sba">
        Name:
        <span style="text-transform: capitalize">
          {{ general_data.project }}
        </span>
      </div>

      <div class="css-dyor-doc-sba">
        Category:
        <span>
          <span style="text-transform: uppercase">
            {{ general_data.category || general_data.scheme }}
          </span></span
        >
      </div>
      <div class="css-dyor-doc-sba">
        Description:
        <span>
          {{ general_data.description }}
        </span>
      </div>
      <div class="css-dyor-doc-sba">
        Symbol:
        <span style="text-transform: uppercase">
          {{ general_data.symbol || "N/A" }}
        </span>
      </div>
      <div class="css-dyor-doc-sba">
        Website:
        <span style="text-transform: lowercase">
          {{ report_audit.website }}
        </span>
      </div>

      <div class="css-dyor-doc-sba">
        Repository:
        <span style="text-transform: lowercase">
          {{ report_audit.repository || "N/A" }}
        </span>
      </div>

      <template v-if="general_data.scheme === 'nft'">
        <div class="css-dyor-doc-sba">
          Discord:
          <span style="text-transform: lowercase">
            {{ report_audit.discord || "N/A" }}
          </span>
        </div>

        <div class="css-dyor-doc-sba">
          Twitter:
          <span style="text-transform: lowercase">
            {{ report_audit.twitter || "N/A" }}
          </span>
        </div>
        <div class="css-dyor-doc-sba">
          Number in circulation:
          <span style="text-transform: lowercase">
            {{ report_audit.number_in_circulation || "N/A" }}
          </span>
        </div>
        <div class="css-dyor-doc-sba">
          Whitelist:
          <span style="text-transform: lowercase">
            {{ report_audit.whitelist || "N/A" }}
          </span>
        </div>

        <div class="css-dyor-doc-sba">
          Number per mint:
          <span style="text-transform: lowercase">
            {{ report_audit.number_per_mint || "N/A" }}
          </span>
        </div>

        <div class="css-dyor-doc-sba">
          Mint date:
          <span style="text-transform: lowercase">
            {{ report_audit.mint_date || "N/A" }}
          </span>
        </div>
      </template>
    </div>
  </div>
</template>
      <div class="html2pdf__page-break" />
      <div class="css-dyor-doc-sba">
        Repository:
        <span style="text-transform: lowercase">
          {{ report_audit.repository || "N/A" }}
        </span>
      </div>
      <div class="css-dyor-doc-sba">
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
.css-dyor-doc-pwo {
  background: var(--base-color-white-primary);
  width: 100%;
  height: 100%;
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
  box-sizing: border-box;
  align-items: center;

  font-weight: 600;
  border-radius: 6px;
  padding: 0 1rem;
  margin-top: 3rem;
  text-align: start;
}

.css-dyor-doc-sdq {
  border: 1px solid var(--border-primary);
  border-radius: 6px;
  margin-top: 1rem;
  box-sizing: border-box;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
}

.css-dyor-doc-psp {
  font-weight: bold;
  margin-top: 1rem;
  font-size: var(--text-size-fourth);
}
.css-dyor-doc-pss {
  margin-top: 1rem;
}
.css-dyor-doc-sxf {
  display: flex;
  align-items: center;
}

.css-dyor-doc-sfx {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 0rem 1rem;
  height: 100px;
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
  margin-top: 2rem;
  margin-bottom: 2rem;
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
  color: var(--text-b);
  font-size: var(--text-size-primary);
  font-weight: initial;
}
.css-dyor-doc-sba span {
  width: 50%;
  text-align: end;
  font-weight: 500;
  color: var(--text-b);
}

.css-dyor-doc-sbc {
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