<template>
  <div id="app">
    <section class="title-container">
      <h1 class="title-header">Vue HTML2PDF</h1>
    </section>
    <button :progress="progress" @click="downloadPdf()">x</button>
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
        <Page2 />
        <Page3 />
      </section>
    </vue-html2pdf>
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";

import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

import { mapFields } from "vuex-map-fields";

export default {
  name: "app",
  components: {
    VueHtml2pdf,
    Page1,
    Page2,
    Page3,
  },
  data() {
    return {
      contentRendered: false,
      progress: 0,
      generatingPdf: false,
      pdfDownloaded: false,
    };
  },

  computed: {
    ...mapFields(["controlValue"]),

    htmlToPdfOptions() {
      return {
        margin: 0,

        filename: "hee hee.pdf",

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
          format: this.controlValue.pdfFormat,
          orientation: this.controlValue.pdfOrientation,
        },
      };
    },
  },

  methods: {
    async downloadPdf() {
      if (!(await this.validateControlValue())) return;

      this.$refs.html2Pdf.generatePdf();
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap");

:root {
  --text-color-primary: #001737;
  --text-color-secondary: #727384;
  --text-size-secondary: 0.8rem;
  --text-size-primary: 1rem;
  --text-size-title: 1.25rem;
  --text-size-third: 1.563rem;
  --text-size-fourth: 1.953rem;
  --text-size-fifth: 2.441rem;
  --text-size-sixth: 3.052rem;
  --text-size-seventh: 3.815rem;
  --base-color-black-primary: #070a0e;
  --base-color-black-secondary: #86898d;
  --base-color-white-primary: #ffffff;
  --base-color-white-secondary: rgba(26, 108, 225, 0.03);
  --complementary-color-green: #7fedca;
  --complementary-color-yellow: #fac292;
  --complementary-color-blue: #0069f5;
  --color-soft-blue: rgba(0, 105, 245, 0.1);
  --border-primary: #e9f1fc;
  --shadow-blue: 0 0 25px rgba(26, 108, 225, 0.1);
}

html,
body {
  width: 100%;
  padding: 0;
  margin: 0;
}
.css-dyor-report {
  width: 100%;
  height: 2100px;
  background: var(--complementary-color-blue);
}

#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #141e30;
  flex-direction: column;
  overflow: hidden;
}
</style>
