<template>
  <div class="css-w-f-wrap">
    <template v-if="!report_visible">
      <div class="css-w-f-wrap" :class="{ active: isMobiSharing }">
        <header class="css-w-f-her">
          <a href="https://dyortool.io/">
            <img src="../assets/logo.svg" alt="" />
          </a>
        </header>
        <div class="css-w-f-srp">
          <div class="css-w-f">
            <div class="css-w-f-tw">
              <div class="css-w-f-ttq">
                <div class="css-w-f-ttw">
                  <div class="css-w-f-stw">
                    <div class="css-w-f-stt">
                      {{ general_data.project }}
                    </div>
                    <div class="css-w-f-sfw">
                      <div class="css-w-f-sta">
                        <img
                          class="css-w-f-txa"
                          :src="report_audit.project_logo"
                          alt=""
                        />
                      </div>
                      <div class="css-w-f-std">
                        <div>Total Percentage</div>
                        <div class="css-w-f-stx">
                          {{ general_data.total_percentage }}%
                        </div>
                        <div class="css-w-f-stm">Created by scatcat</div>
                      </div>
                    </div>
                    <div class="css-w-f-sfw">
                      <div class="css-w-f-sha">
                        <button class="css-w-f-shai" @click="displayShare()">
                          <i class="pi pi-share-alt"></i>
                        </button>
                        <template v-if="share_visible">
                          <div class="css-w-f-xsc">
                            <div class="css-w-f-sox">
                              <div class="css-wf-qco" @click="displayShare()">
                                <MiniReport ref="miniReport" :id="id" />
                              </div>
                              <div class="css-wf-cak">
                                <a
                                  class="tooltip"
                                  target="_blank"
                                  :href="`https://twitter.com/intent/tweet?text=Click%20here%20to%20view%20my%20DYOR%20Tool%20Report%20=>%20${general_data.project.toUpperCase()}%20https://audits.dyortool.io/report/${id}`"
                                >
                                  <i class="pi pi-twitter"></i>
                                  <span class="tooltiptext">Twitter</span></a
                                >

                                <a
                                  class="tooltip"
                                  target="_blank"
                                  :href="`https://www.reddit.com/submit?url=Click%20here%20to%20view%20my%20DYOR%20Tool%20Report%20${general_data.project.toUpperCase()}%20-%20https://audits.dyortool.io/report/${id}`"
                                >
                                  <i class="pi pi-reddit"></i>
                                  <span class="tooltiptext">Reddit</span>
                                </a>

                                <a
                                  class="tooltip"
                                  target="_blank"
                                  :href="`https://www.facebook.com/sharer/sharer.php?u=https://audits.dyortool.io/report/${id}`"
                                >
                                  <i class="pi pi-facebook"></i>
                                  <span class="tooltiptext">Facebook</span>
                                </a>

                                <a
                                  class="tooltip"
                                  @click="$refs.miniReport.downloadImage()"
                                >
                                  <i class="pi pi-download"></i>
                                  <span class="tooltiptext">Download</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </template>

                        <button
                          class="css-w-f-shai"
                          @click="createMachineURL('download')"
                        >
                          <i class="pi pi-download"></i>
                        </button>

                        <button
                          class="css-w-f-shai"
                          @click="createMachineURL('show')"
                        >
                          Show
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="css-w-f-sts">
                    <div
                      class="css-w-f-sti"
                      v-for="(item, name) of general_data.category_score"
                      :key="name"
                    >
                      {{ name.replace("_", " ") }}
                      <span>
                        {{
                          item === "doesn't apply"
                            ? "doesn't apply"
                            : item.score + " / " + item.max_score
                        }}
                      </span>
                    </div>
                  </div>

                  <div class="css-w-f-shb">
                    <button class="css-w-f-shai" @click="displayShareM()">
                      Share
                    </button>

                    <button
                      class="css-w-f-shai"
                      @click="createMachineURL('download')"
                    >
                      Download
                    </button>

                    <button
                      class="css-w-f-shai"
                      @click="createMachineURL('show')"
                    >
                      Show
                    </button>
                  </div>
                  <template v-if="isMobiSharing">
                    <div class="css-w-f-sox">
                      <MobiReport ref="mobiReport" :id="id" />

                      <div class="css-w-f-xsc" @click="displayShare()">
                        <a
                          target="_blank"
                          :href="`https://twitter.com/intent/tweet?text=Click%20here%20to%20view%20my%20DYOR%20Tool%20Report%20=>%20${general_data.project.toUpperCase()}%20https://audits.dyortool.io/report/${id}`"
                          ><i class="pi pi-twitter"></i
                        ></a>

                        <a
                          target="_blank"
                          :href="`https://www.reddit.com/submit?url=Click%20here%20to%20view%20my%20DYOR%20Tool%20Report%20${general_data.project.toUpperCase()}%20-%20https://audits.dyortool.io/report/${id}`"
                        >
                          <i class="pi pi-reddit"></i>
                        </a>

                        <a
                          target="_blank"
                          :href="`https://www.facebook.com/sharer/sharer.php?u=https://audits.dyortool.io/report/${id}`"
                        >
                          <i class="pi pi-facebook"></i>
                        </a>
                        <a @click="$refs.mobiReport.downloadImage()">
                          <i class="pi pi-download"></i>
                        </a>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
              <div class="css-w-f-ttt">
                <div
                  class="css-w-f-qai"
                  v-for="(item, name) of general_data.category_score"
                  :key="name"
                  v-on:click="dropdown.e1 = !dropdown.e1"
                >
                  <div class="css-w-f-8c2">
                    <span style="text-transform: capitalize; font-weight: 600">
                      {{ name.replace("_", " ") }}</span
                    >
                    <button>
                      <i class="pi pi-folder-open"></i>
                    </button>
                  </div>

                  <template v-if="dropdown.e1 === true">
                    <div class="css-w-f-qao">
                      <div class="css-w-f-qah">
                        <div class="css-w-f-stb">Total Score:</div>
                        <div>
                          {{
                            item === "doesn't apply"
                              ? "Doesn't apply"
                              : item.score + " / " + item.max_score
                          }}
                        </div>
                      </div>
                      <div
                        class="css-w-f-qah"
                        v-for="element of item.questions"
                        :key="element.id"
                      >
                        {{ element.question }}

                        <div>
                          {{ element.score.toFixed(2) }} /
                          {{ element.max_score }}
                        </div>
                      </div>
                    </div>
                  </template>
                </div>

                <div class="css-w-f-qac"></div>
              </div>

              <div class=".css-w-f-cri"></div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="report_visible">
      <DyorGenerator
        :id="id"
        :route="report_route"
        :total_percentage="general_data.total_percentage"
      />
    </template>
  </div>
</template>

<script>
import axios from "axios";
import { BestialEncoder } from "bestial-encoder";
import QRious from "qrious";
import DyorGenerator from "../pages/DyorGenerator";
import DOMPurify from "dompurify";
import MiniReport from "../components/MiniReport.vue";
import MobiReport from "../components/MobiReport.vue";

const bestialEncoder = new BestialEncoder();

export default {
  props: {
    id: String,
  },
  components: {
    DyorGenerator,
    MiniReport,
    MobiReport,
  },
  data() {
    return {
      report_visible: false,
      report_route: "",
      dataParsed: [],
      share_visible: false,
      isMobiSharing: false,
      newAudit: {},
      isNoApply: false,
      teste: true,
      dropdown: { e1: false, e2: false, e3: false, e4: false },
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
  mounted() {
    this.getReport();
  },
  methods: {
    getReport() {
      axios({
        method: "get",
        url: `http://localhost:8000/v1/report/id/${this.id}`,
        headers: { "content-type": "application/json" },
      })
        .then((response) => {
          const report_data_decoded = JSON.parse(
            DOMPurify.sanitize(bestialEncoder.decodeByValue(response.data.data))
          );

          const response_ = JSON.parse(
            DOMPurify.sanitize(JSON.stringify(response.data))
          );

          const date = new Date(response_.date);

          this.$store.commit("saveReportDate", date);
          this.$store.commit("saveReportData", report_data_decoded);
          this.$store.commit("saveAuditData", report_data_decoded[0]);
          this.$store.commit("saveGeneralData", response_);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    displayShare() {
      this.share_visible = !this.share_visible;
    },
    displayShareM() {
      this.isMobiSharing = !this.isMobiSharing;
    },
    createMachineURL(route) {
      let metaTag = document.createElement("meta");
      metaTag.name = "viewport";
      metaTag.content = "content=width=1024";
      document.getElementsByTagName("head")[0].appendChild(metaTag);
      this.report_visible = !this.report_visible;
      this.report_route = route;
    },

    searchByCategory(category) {
      this.general_data.score_per_question.filter(
        (e) => (e.category = category)
      );
    },
  },
};
</script>

<style escoped>
a {
  text-decoration: none;
  cursor: pointer;
}

.css-w-f-8c2 {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

#logo-blue {
  fill: var(--complementary-color-blue);
}

.css-w-f-wrap {
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  box-sizing: border-box;
  flex-direction: column;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.css-w-f-cri {
  height: 100px;
}

.css-w-f-srp {
  width: 100%;
  caret-color: transparent;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  box-shadow: 1px 1px 20px var(--border-primary);
  background: var(--blue);
}

.css-w-f {
  height: 100%;
  margin: 0 15%;
  z-index: 2;
}

.css-w-f-sox {
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding-top: 68px;
  z-index: 112;
  position: relative;
  margin-top: 8rem;
  align-items: center;
  box-sizing: border-box;
  animation-name: deploy1;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  animation-duration: 0.5s;
  border: 1px solid var(--border-primary);
  background: rgb(255, 255, 255);
}

.css-wf-cak {
  display: flex;
  width: 80px;
  height: inherit;
  align-items: center;
  border-left: 1px solid var(--border-primary);
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
}

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  top: 10px;
  right: 115%;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}

.css-wf-qco {
  width: 100%;
  justify-content: center;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  align-items: center;
}

.css-w-f-xsc {
  position: fixed;
  width: 100%;
  height: 200%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
}

.css-w-f-ttq {
  padding: 2rem;
}

.css-w-f-sox a {
  width: 50px;
  z-index: 3;
  height: 50px;
  border: 1px solid var(--border-primary);
  justify-content: center;
  display: flex;
  margin-top: 1rem;
  align-items: center;
  border-radius: 8px;
  color: var(--text-a);
}

.css-w-f-sox a:hover {
  background: var(--base-color-white-secondary);
}

@keyframes deploy1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.css-w-f-qac {
  height: 300px;
}

.css-w-f-tw {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-primary);
  border-top: none;
  background: var(--base-color-white-primary);
  box-sizing: border-box;
  box-shadow: var(--shadow-a);
}

.css-w-f-ttt {
  margin: 2rem;
  color: var(--text-color-primary);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
}

.css-w-f-qai {
  margin-top: 1rem;
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--border-primary);
  border-radius: 6px;
  cursor: pointer;
  flex-direction: column;
}

.css-w-f-qah {
  display: flex;
  padding: 1rem;
  display: flex;
  align-items: center;
  border: 1px solid var(--border-primary);
  justify-content: space-between;
  margin-top: 1rem;
  border-radius: 6px;
  text-align: left;
  box-sizing: border-box;
}

.css-w-f-qah div {
  white-space: nowrap;
}

.css-w-f-qah span {
  font-weight: bold;
}

.css-w-f-qai button {
  background: transparent;
  border: none;
}

.css-w-f-qai:hover {
  background: var(--background-b);
}

.css-w-f-stw {
  display: flex;
  width: 350px;
  min-width: 350px;
  margin-right: 2rem;
  flex-direction: column;
  justify-content: space-between;
}

.css-w-f-stm {
  color: var(--text-color-secondary);
  text-transform: capitalize;
  font-size: var(--text-size-secondary);
}

.css-w-f-sts {
  flex-direction: column;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.css-w-f-sha {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.css-w-f-sha,
.css-w-f-shb {
  display: flex;
  position: relative;
  align-items: center;
}

.css-w-f-shb {
  display: none;
}

.css-w-f-shai {
  width: 100%;
  padding: 1rem;
  margin-right: 0.5rem;
  border-radius: 6px;
  display: flex;
  cursor: pointer;
  border: 1px solid #0069f5;
  background: transparent;
  color: #0069f5;
  justify-content: center;
}

.css-w-f-shai:hover,
.css-w-f-shai:active,
.css-w-f-shai:focus {
  background: var(--complementary-color-blue);
  color: #fff;
  fill: #fff;
  transition: ease-out 0.4s;
  animation-duration: 0.3s;
}

.css-w-f-qao {
  width: 100%;
  display: flex;
  animation-name: deploy;
  animation-duration: 1s;
  flex-direction: column;
}

.css-w-f-her {
  background: var(--base-color-white-primary);
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 3rem !important;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
}

.css-w-f-sti {
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid var(--color-soft-blue);
  display: flex;
  text-transform: capitalize;
}

.css-w-f-arrow.active {
  transform: rotate(180deg);
}

.css-w-f-sti span {
  margin-left: auto;
}

.css-w-f-stt {
  font-size: var(--text-size-title);
  text-transform: capitalize;
  font-weight: bold;
  text-align: start;
}

.css-w-f-sfw {
  width: 100%;
  display: flex;
}

.css-w-f-std {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 1rem;
  text-align: start;
}

.css-w-f-stx {
  font-size: var(--text-size-fifth);
}

.css-w-f-sta {
  height: 90px;
  width: 90px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border: 2px solid var(--border-primary);
}

.css-w-f-txa {
  width: 80px;
  border: 1px solid transparent;
  height: 80px;
}

.css-w-f-ttw {
  border: 1px solid var(--border-primary);
  color: var(--text-color-primary);
  border-radius: 8px;
  width: 100%;
  height: 350px;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  background: var(--background-b);
}

@media (max-width: 600px) {
  .css-w-f-tw {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-primary);
    border-top: none;
    background: var(--base-color-white-primary);
  }

  .css-w-f-wrap.active {
    overflow: hidden;
  }
  .css-w-f-shb {
    display: flex;
    flex-direction: column;
  }

  .css-w-f-xsc {
    background: var(--base-color-white-primary);
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0px;
    width: 100%;
    height: 100%;
  }
  .css-w-f-xsc div {
    top: 30%;
    font-size: var(--text-size-title);
    position: absolute;
  }
  .css-w-f-sha {
    display: none;
  }
  .css-w-f-qah {
    font-size: var(--text-size-secondary);
  }

  .css-w-f-shai {
    width: 100%;
    margin-top: 1rem;
    display: initial;
    margin-right: 0;
  }

  .css-w-f-ttq {
    padding: 0;
  }

  .css-w-f-her {
    background: var(--complementary-color-blue);
    box-shadow: none;
    padding: 0 10%;
  }

  .css-w-f-ttt {
    margin: 0 10%;
  }
  .css-w-f-sts {
    width: 100%;
  }
  #logo-blue {
    fill: #fff;
  }

  .css-w-f {
    margin: 0;
  }

  .css-w-f-ttw {
    height: 100%;
  }

  .css-w-f-sfw {
    margin-top: 1rem;
  }

  .css-w-f-stw {
    margin: initial;
  }

  .css-w-f-tw {
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
  }

  .css-w-f-srp {
    background: var(--blue);
  }

  .css-w-f-ttw {
    flex-direction: column;
    padding: 10%;
    margin: 0;
    border: 1px solid transparent;
  }

  .css-w-f-sti {
    margin-top: 1rem;
    margin-left: initial;
    margin-right: initial;
  }
}
</style>