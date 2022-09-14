<template>
  <section>
    <header class="css-dyor-machine-her">
      <img src="../assets/logo.svg" alt="" />
    </header>

    <div class="css-549h">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>

    <vue-html2pdf
      :show-layout="controlValue.showLayout"
      :float-layout="controlValue.floatLayout"
      :enable-download="controlValue.enableDownload"
      :preview-modal="controlValue.previewModal"
      :filename="controlValue.filename"
      :paginate-elements-by-height="controlValue.paginateElementsByHeight"
      :pdf-quality="controlValue.pdfQuality"
      :pdf-format="controlValue.pdfFormat"
      :pdf-orientation="controlValue.pdfOrientation"
      :pdf-content-width="controlValue.pdfContentWidth"
      :manual-pagination="controlValue.manualPagination"
      :html-to-pdf-options="htmlToPdfOptions"
      @progress="onProgress($event)"
      @startPagination="startPagination()"
      @hasPaginated="hasPaginated()"
      @beforeDownload="beforeDownload($event)"
      @hasDownloaded="hasDownloaded($event)"
      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <Page1 />
        <Page2 :id="id" :total_percentage="total_percentage" />
        <Page3 />
        <Page4 />
      </section>
    </vue-html2pdf>
  </section>
</template>

<script>
import VueHtml2pdf from "../components/vue-html2pdf.vue";

import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";

import { mapFields } from "vuex-map-fields";

export default {
  name: "DyorGenerator",
  props: {
    route: String,
    total_percentage: String,
    id: String,
  },
  components: {
    VueHtml2pdf,
    Page1,
    Page2,
    Page3,
    Page4,
  },
  data() {
    return {
      contentRendered: false,
      progress: 0,
      generatingPdf: false,
      pdfDownloaded: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$emit("domRendered");
        this.knowCurrentRoute();
      }, 1000);
    });
  },
  computed: {
    ...mapFields(["controlValue"]),
    htmlToPdfOptions() {
      return {
        margin: 0,
        filename: this.controlValue.filename,
        image: {
          type: "jpeg",
          quality: 0.98,
        },
        enableLinks: true,
        html2canvas: {
          scale: this.controlValue.pdfQuality,
          useCORS: true,
        },
        jsPDF: {
          unit: "in",
          precision: 100,
          format: this.controlValue.pdfFormat,
          orientation: this.controlValue.pdfOrientation,
        },
      };
    },
  },
  methods: {
    knowCurrentRoute() {
      if (this.route === "download") {
        this.downloadPdf();
      }
      if (this.route === "show") {
        this.$store.commit("showReportLayout");
      }
    },
    async downloadPdf() {
      if (!(await this.validateControlValue())) return;

      this.$refs.html2Pdf.generatePdf();
    },
    async beforeDownload({ html2pdf, options, pdfContent }) {
      console.log(`On Before PDF Generation`);
      // await html2pdf().set(options).from(pdfContent).toPdf().get('pdf').then((pdf) => {
      // 	const totalPages = pdf.internal.getNumberOfPages()
      // 	for (let i = 1; i <= totalPages; i++) {
      // 		pdf.setPage(i)
      // 		pdf.setFontSize(10)
      // 		pdf.setTextColor(150)
      // 		pdf.text('Page ' + i + ' of ' + totalPages, (pdf.internal.pageSize.getWidth() * 0.88), (pdf.internal.pageSize.getHeight() - 0.3))
      // 	}
      // }).save()
    },
    validateControlValue() {
      if (this.controlValue.pdfQuality > 2) {
        alert("pdf-quality value should only be 0 - 2");
        this.controlValue.pdfQuality = 2;
        return false;
      }

      if (!this.controlValue.paginateElementsByHeight) {
        alert("paginate-elements-by-height value cannot be empty");
        this.controlValue.paginateElementsByHeight = 1400;
        return false;
      }

      const paperSizes = [
        "a0",
        "a1",
        "a2",
        "a3",
        "a4",
        "letter",
        "legal",
        "a5",
        "a6",
        "a7",
        "a8",
        "a9",
        "a10",
      ];

      if (!paperSizes.includes(this.controlValue.pdfFormat)) {
        alert(`pdf-format value should only be ${paperSizes}`);
        this.controlValue.pdfFormat = "a4";
        return false;
      }

      if (!this.controlValue.pdfOrientation) {
        alert("pdf-orientation value cannot be empty");
        this.controlValue.pdfOrientation = "portrait";
        return false;
      }

      if (!this.controlValue.pdfContentWidth) {
        alert("pdf-content-width value cannot be empty");
        this.controlValue.pdfContentWidth = "800px";
        return false;
      }
      return true;
    },

    onProgress(progress) {
      this.progress = progress;
      console.log(`PDF generation progress: ${progress}%`);
    },

    startPagination() {
      console.log(`PDF has started pagination`);
    },

    hasPaginated() {
      console.log(`PDF has been paginated`);
    },
    hasDownloaded(blobPdf) {
      console.log(`PDF has downloaded yehey`);
      this.pdfDownloaded = true;
      console.log(blobPdf);
    },

    domRendered() {
      console.log("Dom Has Rendered");
      this.contentRendered = true;
    },

    onBlobGenerate(blob) {
      console.log(blob);
    },
  },
};
</script>

<style scoped>
.css-dyor-machine-her {
  background: var(--base-color-white-primary);
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10%;
  box-shadow: 1px 1px 20px var(--border-primary);
}

.css-549h {
  display: flex;
  width: 100%;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  align-items: center;
  justify-content: center;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 44px;
  height: 44px;
  margin: 8px;
  border: 3px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #e7e7e7 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>