import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        reportDataDecoded: Object,
        controlValue: {
            showLayout: false,
            floatLayout: true,
            enableDownload: true,
            previewModal: false,
            paginateElementsByHeight: 1100,
            manualPagination: false,
            filename: 'dyor-report',
            pdfQuality: 2,
            pdfFormat: 'a4',
            pdfOrientation: 'portrait',
            pdfContentWidth: '800px'
        },
    },

    mutations: {
        updateField,
        updateReportData(state, payload) {
            state.reportDataDecoded = payload
            console.log( JSON.stringify(state.reportDataDecoded))
        },
        showReportLayout(state) {
            state.controlValue.showLayout = true
            console.log("yes")
        }
    },
    getters: {
        getField,
        sendMeReport(state){
            return state.reportDataDecoded
        }
    },
})