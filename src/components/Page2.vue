<template>
  <div class="css-dyor-doc-pwo">
    <div class="css-dyor-doc-fpg">
      <div class="css-dyor-doc-dba">
        Dyor tool is a tool for the crypto community aimed at investors who
        dedicate research to potential projects to invest. The information
        contained in this report belongs solely and exclusively to its creator.
      </div>
      <div class="css-dyor-doc-sdq"></div>
      <div class="css-dyor-doc-sbc">
       General Information 
      </div>
      <div class="css-dyor-doc-sba">
        Name:
        <span style="text-transform: capitalize;"> {{ newAudit.pn }} </span>
      </div>

      <div class="css-dyor-doc-sba">
        Category:
        <span>
          <span style="text-transform: capitalize;">
            {{ newAudit.pc }}
          </span></span
        >
      </div>
      <div class="css-dyor-doc-sba">
        Description:
        <span style="text-transform: capitalize"> {{ newAudit.pd }} </span>
      </div>
      <div class="css-dyor-doc-sba">
        Token:
        <span style="text-transform: uppercase"> {{ newAudit.ps }} </span>
      </div>
      <div class="css-dyor-doc-sba">
        Website:
        <span style="text-transform: lowercase"> {{ newAudit.pw }} </span>
      </div>

      <div class="css-dyor-doc-sba">
        Github/Repository:
        <span style="text-transform: lowercase"> {{ newAudit.pr }} </span>
      </div>
      <div class="html2pdf__page-break" />
      <div class="css-dyor-doc-sba">
        Report creator:
        <span style="text-transform: capitalize"> {{ newAudit.an }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    newAudit() {
      return this.$store.getters.sendMeAudit;
    },
  },
};
</script>

<style scoped>
.css-dyor-doc-pwo {
  background: var(--base-color-white-primary);
  width: 100%;
  height: 100%;
  font-family: "Nunito", sans-serif;
  box-sizing: border-box;
  padding: 1rem 3rem;
  padding-top: 3rem;
}

.css-dyor-doc-fpg {
  display: flex;
  flex-direction: column;
}

.css-dyor-doc-sba {
  justify-content: space-between;
  display: flex;
  font-weight: bold;
  margin-top: 2rem;
  text-align: start;
}

.css-dyor-doc-sdq {
  border: 1px solid var(--border-primary);
  border-radius: 4px;
  height: 300px;
  margin-top: 1rem;
}

.css-dyor-doc-sbc span {
  color: var(--text-color-secondary);
  font-size: var(--text-size-primary);
  font-weight: initial;
}

.css-dyor-doc-dba {
  font-size: var(--text-size-secondary);
  border-radius: 4px;
  border: 1px solid var(--color-soft-blue);
  background: var(--color-soft-blue);
  color: var(--complementary-color-blue);
  box-sizing: border-box;
  padding: 1rem;
  text-align: center;
  display: flex;
}

.css-dyor-doc-sba span {
  width: 80%;
  text-align: end;
  color: var(--text-color-secondary);
}

.css-dyor-doc-sbc {
  font-size: var(--text-size-title);
  font-weight: 700;
  text-align: start;
  margin-top: 2rem;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  border-top: 1px dashed var(--border-primary);
  border-bottom: 1px dashed var(--border-primary);
  justify-content: space-between;
}
</style>