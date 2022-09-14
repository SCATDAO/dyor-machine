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
          <div class="css-w-f-843">
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
                          :src="
                            'data:image/png;base64,' +
                            report_audit.project_logo.split(',')[1]
                          "
                          alt=""
                        />
                      </div>
                      <div class="css-w-f-std">
                        <div>Total percentage</div>
                        <div class="css-w-f-stx">
                          {{ general_data.total_percentage }}%
                        </div>
                        <div class="css-w-f-stm">
                          Community report by
                          <span>{{ general_data.author }}</span>
                        </div>
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
                  v-on:click="showTab(name)"
                >
                  <div class="css-w-f-8c2">
                    <span style="text-transform: capitalize; font-weight: 600">
                      {{ name.replace("_", " ") }}</span
                    >
                    <div style="color: var(--text-b)">
                      {{
                        item === "doesn't apply"
                          ? "Doesn't apply"
                          : item.score + " / " + item.max_score
                      }}
                    </div>
                  </div>

                  <template v-if="dropdown_list.includes(name)">
                    <div class="css-w-f-qao">
                      <div
                        class="css-w-f-qah"
                        v-for="element of item.questions"
                        :key="element.id"
                      >
                        {{ element.id }}. {{ element.question }}

                        <div>
                          {{ element.score.toFixed(2) }} /
                          {{ element.max_score }}
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>

              <div class="css-w-f-cri"></div>
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
      dropdown_list: [],
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
    showTab(name) {
      !this.dropdown_list.includes(name)
        ? this.dropdown_list.push(name)
        : (this.dropdown_list = this.dropdown_list.filter(
            (item) => item !== name
          ));
    },
    getReport() {
      axios({
        method: "get",
        url: `https://api.dyortool.io/1.1/report/search-id/${this.id}`,
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
  padding: 1rem;
  font-size: var(--text-size-title);
  justify-content: space-between;
}
.css-w-f-8c2:hover {
  background: #f7f7f7;
  border-radius: 8px;
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
}

.css-w-f-843 {
  height: 100%;

  z-index: 2;
}

.css-w-f-sox {
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  z-index: 112;
  position: relative;
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
  background: var(--blue);
  box-sizing: border-box;
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
  height: 100px;
}

.css-w-f-tw {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: none;
  background: var(--base-color-white-primary);
  box-sizing: border-box;
}

.css-w-f-ttt {
  margin: 2rem;
  margin: 0 15%;
  color: var(--text-color-primary);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
}

.css-w-f-qai {
  margin-top: 1rem;
  display: flex;

  align-items: center;
  justify-content: space-between;
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

.css-w-f-stw {
  display: flex;
  width: 500px;
  min-width: 500px;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
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
  padding: 1rem 0.75rem;
  margin-right: 1rem;
  border-radius: 99px;
  display: flex;
  cursor: pointer;
  border: none;
  background: #23272a;
  color: #ffffff;
  box-shadow: var(--shadow-a);
  justify-content: center;
}

.css-w-f-shai:hover,
.css-w-f-shai:active,
.css-w-f-shai:focus {
  background: #ffffff;
  color: #fff;
  transition: var(--transition-a);
  background: rgba(61, 65, 68, 1);
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
  padding: 0 3rem;
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
  font-size: var(--text-size-fifth);
  text-transform: capitalize;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
}

.css-w-f-sfw {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.css-w-f-std {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 1rem;
  text-align: center;
}

.css-w-f-std div {
  margin-top: 1rem;
}

.css-w-f-stx {
  font-size: var(--text-size-fifth);
}

.css-w-f-sta {
  height: 80px;
  width: 80px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border: 3px solid #ffffff;
}

.css-w-f-txa {
  border: 3px solid #ffffff;
  border-radius: 8px;
  width: 80px;
  height: 80px;
}

.css-w-f-ttw {
  color: var(--text-color-primary);
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
}

@media (max-width: 600px) {
  .css-w-f-tw {
    width: 100%;
    display: flex;
    flex-direction: column;

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

  .css-w-f-her {
    box-shadow: none;
    padding: 0 8%;
  }

  .css-w-f-ttq {
    padding: 0;
  }
  .css-w-f-ttw {
    flex-direction: column;
    padding: 10%;
    margin: 0;
    border-radius: 0;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    background: var(--blue);
  }

  .css-w-f-ttt {
    margin: 0 8%;
  }

  .css-w-f-843 {
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
    width: initial;
    min-width: 0;
  }

  .css-w-f-tw {
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
  }

  .css-w-f-srp,
  .css-w-f-ttq {
    background: transparent;
  }

  .css-w-f-sti {
    margin-top: 1rem;
    margin-left: initial;
    margin-right: initial;
  }
}
</style>