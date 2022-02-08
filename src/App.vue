<template>
  <div id="app">
 <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
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

* {
  padding: 0;
  margin: 0;
}

html,
body {
  padding: 0;
  margin: 0;
}
header {
  width: 100%;
  min-width: 100%;
  height: 64px;
  min-height: 64px;
  max-height: 64px;
  display: flex;
  align-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1.5rem;
  z-index: 10;
  padding: 0 10%;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--base-color-white-primary);
  flex-direction: column;
  overflow: hidden;
}
</style>
