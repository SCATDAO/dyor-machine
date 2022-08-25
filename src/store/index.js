import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    report_date: null,
    report_data: null,
    report_audit: null,
    general_data: null,
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
    saveReportDate(state, payload) {
      state.report_date = payload;
    },
    saveReportData(state, payload) {
      state.report_data = payload;
    },
    saveAuditData(state, payload) {
      state.report_audit = payload;
    },
    saveGeneralData(state, payload) {
      state.general_data = payload;
      state.controlValue.filename = payload.project + " report";
    },
    showReportLayout(state) {
      state.controlValue.showLayout = true;
    },
  },
  getters: {
    getField,
    getReportDate(state) {
      return state.report_date;
    },
    getReportData(state) {
      return state.report_data;
    },
    getAuditData(state) {
      return state.report_audit;
    },
    getGeneralData(state) {
      return state.general_data;
    },
  },
});
