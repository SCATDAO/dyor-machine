import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';
import questionList from "../data"


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        questionList: questionList,
        reportDataDecoded: Object,
        controlValue: {
            showLayout: false,
            floatLayout: true,
            enableDownload: true,
            previewModal: false,
            paginateElementsByHeight: 1100,
            manualPagination: true,
            filename: "",
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

            state.questionList.forEach((e) => {
                e.answer = payload[e.id].an
                e.textarea = payload[e.id].ta
                e.input = payload[e.id].ed
            })

            state.controlValue.filename = payload[0].pn + " report"
        
        },
        showReportLayout(state) {
            state.controlValue.showLayout = true
        }
    },
    getters: {
        getField,
        sendMeReport(state) {
            return state.reportDataDecoded
        },
        sendMeAudit(state) {
            return state.reportDataDecoded[0]
        },
        sendMeQuestion(state) {
            return state.questionList
        }
    },
})