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

            state.questionList.forEach((e) => {
                e.answer = payload[e.id].an
                e.textarea = payload[e.id].ta
            })
            console.log(JSON.stringify(state.questionList[0].answer))
        },
        showReportLayout(state) {
            state.controlValue.showLayout = true
            console.log("yes")
        }
    },
    getters: {
        getField,
        sendMeReport(state) {
            return state.reportDataDecoded
        },
        sendMeQuestion(state) {
            return state.questionList
        }
    },
})