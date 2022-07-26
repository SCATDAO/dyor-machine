import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";
import questionList from "../data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questionList: questionList,
    reportDataDecoded: Object,
    reportVersion: 0,
    reporDate: "",
    controlValue: {
      showLayout: false,
      floatLayout: true,
      enableDownload: true,
      previewModal: false,
      paginateElementsByHeight: 1100,
      manualPagination: true,
      filename: "",
      pdfQuality: 2,
      pdfFormat: "a4",
      pdfOrientation: "portrait",
      pdfContentWidth: "800px",
    },
  },

  mutations: {
    updateField,
    updateReportDate(state, payload) {
      state.reportDate = payload;
    },
    updateReportData(state, payload) {
      state.reportDataDecoded = payload[0];
      state.reportVersion = payload[1];
      state.questionList[payload[1]].forEach((e) => {
        e.answer = payload[0][e.id].an;
        e.textarea = payload[0][e.id].ta;
        e.input = payload[0][e.id].ed;
      });

      state.controlValue.filename = payload[0][0].pn + " report";
    },
    showReportLayout(state) {
      state.controlValue.showLayout = true;
    },
  },
  getters: {
    getField,
    sendMeReport(state) {
      return state.reportDataDecoded;
    },
    sendMeAudit(state) {
      return state.reportDataDecoded[0];
    },
    sendMeQuestion(state) {
      return state.questionList[state.reportVersion];
    },
    sendMeDate(state) {
      return state.reportDate;
    },
  },
});
