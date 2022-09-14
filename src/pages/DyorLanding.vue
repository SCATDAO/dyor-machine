<template>
  <div class="css-landing-cws">
    <div class="css-landing-cwx">
      <div class="css-landing-lwr">
        <img src="../assets/logo.svg" alt="" />
      </div>

      <div id="test-re">
        <template v-if="result">
          <a class="css-landing-cas" :href="result"> Go to Report </a>
        </template>
      </div>
      <div class="css-landing-cqs" id="teste">{{ reactiveResponse }}</div>

      <div class="css-landing-lbc"></div>

      <template v-if="isCamera">
        <qrcode-stream
          :key="_uid"
          @decode="onDecode"
          capture="user"
          :track="paintBoundingBox"
          @init="onInit"
        >
        </qrcode-stream>
      </template>

      <button class="css-landing-ecb" v-on:click="isCamera = !isCamera">
        <i class="pi pi-qrcode"></i>
      </button>

      <div class="css-landing-cpx">
        <i class="pi pi-upload sps"></i>

        <input
          type="file"
          accept="image/*"
          class="css-landing-iiu"
          id="decode-file"
          @change="scanQuickResponse"
        />
      </div>
      <div class="css-landing-wxs"></div>
    </div>
  </div>
</template>

<script>
import { Decoder } from "@nuintun/qrcode";

export default {
  data() {
    return {
      isCamera: false,
      result: "",
      imageUpload: "",
    };
  },
  computed: {
    reactiveResponse() {
      return this.result.slice(this.result.length - 10);
    },
  },
  methods: {
    onDecode(result) {
      this.result = result;
    },
    scanQuickResponse(e) {
      const qrcode = new Decoder();
      let file = e.target.files[0];
      if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
          qrcode
            .scan(e.target.result)
            .then((result) => {
              let a = document.getElementById("teste");
              let c = result.data.toString();
              a.innerText = c.slice(c.length - 10);
              let r = document.getElementById("test-re");
              const w = `<a href="${c}" style="height: 3rem; width:100%;  margin-top:3rem; align-items:  center;  justify-content:center; display: flex; background: var(--complementary-color-blue); color: #fff; border-radius: 8px;" target="_blank" >Go to report</a>`;
              r.innerHTML = w;
            })
            .catch((error) => {
              console.error(error);
            });
        };
        reader.readAsDataURL(file);
      }
    },
    onInit(promise) {
      promise.then(console.log).catch(console.error);
    },
    paintBoundingBox(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const {
          boundingBox: { x, y, width, height },
        } = detectedCode;

        ctx.lineWidth = 2;
        ctx.strokeStyle = "#007bff";
        ctx.strokeRect(x, y, width, height);
      }
    },
    logErrors(promise) {
      promise.catch(console.error);
    },
  },
};
</script>

<style scoped>
a {
  color: #fff;
}
i{
  color: var(--text-a);
}

.sps{
  position: absolute;
  z-index: 100;
}

.css-landing-scw {
  height: 3rem;
  border-radius: 8px;
  margin-top: auto;
  display: flex;
  background: var(--complementary-color-blue);
  justify-content: center;
  align-items: center;
}

.css-landing-cas {
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 2rem;
  background: var(--complementary-color-blue);
}
.css-landing-ecb {
  text-decoration: none;
  padding: 1rem;
  width: 100%;
  height: 100px;
  border: none;
  border-radius: 8px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 0px 20px var(--border-primary);
  font-weight: bold;
  background: transparent;
  border: 1px solid var(--border-primary);
}

.css-landing-wxs {
  height: 100px;
  min-height: 100px;
}
.qrcode-stream-wrapper {
  margin-top: 2rem;
}

.css-landing-iiu {
  width: 100%;
  height: 100px;
  opacity: 0;
  cursor: pointer;
}
.css-landing-ecb:hover {
  transition: ease-in 0.3s;
}

.css-landing-lwr {
  width: 100%;
  height: 3rem;
  align-items: center;
  display: flex;
}

.css-landing-cqs {
  width: 100%;
  height: 1rem;
  min-height: 1rem;
  padding: 1rem 0;
  margin-top: 2rem;
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
  background: var(--base-color-white-secondary);
  border: 1px solid var(--border-primary);
}

.css-landing-cpx {
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 20px var(--border-primary);
}

.css-landing-cpx svg {
  position: absolute;
}

.css-landing-cpx:hover {
  transition: 0.3s ease-out;
}
.css-landing-ecb {
  margin-top: 2rem;
}

.css-landing-cwx {
  width: 400px;
  height: 70%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: var(--base-color-white-primary);
  padding-top: 1rem;
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.css-landing-cws {
  display: flex;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  box-sizing: border-box;
  justify-content: center;
  scroll-behavior: smooth;
  overflow-y: auto;
  background: var(--blue);
  align-items: center;
}

#logo132 {
  width: 120px;
  height: 24px;
  z-index: 1;
}
@media (max-width: 600px) {
  .css-landing-cwx {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
}
</style>
