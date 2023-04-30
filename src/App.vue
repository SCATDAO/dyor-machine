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
@import "primevue/resources/primevue.min.css";

@import "primeicons/primeicons.css";
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

  --blue: linear-gradient(
    45deg,
    rgba(0, 105, 245, 1) 0%,
    rgba(64, 78, 237, 1) 100%
  );

  --text-a: rgb(15, 20, 25);
  --text-b: rgb(83, 100, 113);
  --text-c: #7a7d82;
  --text-w: #ffffff;

  --background-a: #ffffff;
  --background-b: #fafafa;
  --background-c: linear-gradient(
    45deg,
    rgba(0, 105, 245, 1) 0%,
    rgba(64, 78, 237, 1) 100%
  );

  --transition-a: ease-in 0.2s;
  
  --shadow-a: 0 5px 10px rgba(0, 0, 0, 0.1);

  --border-a: #e9f1fc;

  --button-a: #23272a;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-family: 'Noto Sans', sans-serif;
  text-rendering: auto;
}

html,
body {
  padding: 0;
  margin: 0;
}
header {
  width: 100%;
  min-width: 100%;
  height: 54px;
  min-height: 54px;
  max-height: 54px;
  display: flex;
  align-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1.5rem;
  z-index: 10;
  padding: 0 10%;
}
button {
  font-size: var(--text-size-primary);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--base-color-white-primary);
  flex-direction: column;
  overflow: hidden;
  animation-name: deploy;
  animation-duration: 1s;
  -webkit-tap-highlight-color: transparent;
  image-rendering: optimizeQuality;
  text-rendering: geometricPrecision;
}

@keyframes deploy {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
