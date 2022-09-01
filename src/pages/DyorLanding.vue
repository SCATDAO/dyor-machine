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
        <svg
          id="SVGRoot"
          width="300px"
          height="100px"
          version="1.1"
          viewBox="0 0 300 100"
          xmlns="http://www.w3.org/2000/svg"
          opacity=".3"
        >
          <text
            x="141.39316"
            y="81.102722"
            font-family="Nunito"
            font-size="40px"
            font-weight="bold"
            style="line-height: 1.25"
            xml:space="preserve"
          >
            <tspan x="141.39316" y="81.102722" />
          </text>
          <g
            transform="matrix(1.875 0 0 1.875 127.25 22.603)"
            fill="#0069f5"
            fill-rule="evenodd"
          >
            <path
              d="m6 18h3c0.66667 0.11438 1 0.44772 1 1s-0.33333 0.88562-1 1h-5v-5c0-0.66667 0.33333-1 1-1s1 0.33333 1 1zm12 0v-3c0.11438-0.66667 0.44772-1 1-1s0.88562 0.33333 1 1v5h-5c-0.66667 0-1-0.33333-1-1s0.33333-1 1-1zm0-12h-3c-0.66667-0.11438-1-0.44772-1-1 0-0.55228 0.33333-0.88562 1-1h5v5c0 0.66667-0.33333 1-1 1s-1-0.33333-1-1zm-12 0v3c-0.11438 0.66667-0.44772 1-1 1-0.55228 0-0.88562-0.33333-1-1v-5h5c0.66667 0 1 0.33333 1 1s-0.33333 1-1 1z"
              fill="#0069f5"
              fill-rule="nonzero"
            />
          </g>
        </svg>
      </button>
      <div class="css-landing-cpx">
        <svg
          id="SVGRoot"
          width="300px"
          height="100px"
          version="1.1"
          viewBox="0 0 300 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#0069f5" stroke-width="1.5132">
            <path
              d="m134.6 47.429c0-0.75661 0.75661-1.5132 1.5132-1.5132 0.75662 0 1.5132 0.75661 1.5132 1.5132v7.5661c0 1.6715 1.355 3.0264 3.0264 3.0264h18.159c1.6715 0 3.0264-1.355 3.0264-3.0264v-7.5661c0-0.83573 0.67748-1.5132 1.5132-1.5132 0.83572 0 1.5132 0.67749 1.5132 1.5132v7.5661c0 3.3429-2.71 6.0529-6.0529 6.0529h-18.159c-3.3429 0-6.0529-2.71-6.0529-6.0529v-7.5661z"
              opacity=".3"
            />
            <rect
              id="Rectangle"
              x="148.22"
              y="30.784"
              width="3.0274"
              height="21.185"
              rx="1.5132"
              opacity=".3"
            />
            <path
              d="m149.79 32.869-6.5509 6.5509c-0.59095 0.59095-1.5491 0.59095-2.14 0-0.59095-0.59095-0.59095-1.5491 0-2.14l7.5661-7.5661c0.56909-0.56909 1.4841-0.59316 2.0823-0.05476l7.5661 6.8095c0.6212 0.55907 0.67156 1.5159 0.11244 2.1371-0.55908 0.62119-1.5159 0.67155-2.1371 0.11248z"
            />
          </g>
          <text
            x="141.39316"
            y="81.102722"
            font-family="Nunito"
            font-size="40px"
            font-weight="bold"
            style="line-height: 1.25"
            xml:space="preserve"
          >
            <tspan x="141.39316" y="81.102722" />
          </text>
        </svg>

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
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='300' height='600' preserveAspectRatio='none' viewBox='0 0 300 600'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1093%26quot%3b)' fill='none'%3e%3crect width='300' height='600' x='0' y='0' fill='rgba(0%2c 105%2c 245%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c261.293C51.319%2c272.678%2c113.717%2c272.859%2c152.676%2c237.568C191.76%2c202.164%2c167.837%2c134.57%2c191.769%2c87.578C217.432%2c37.189%2c289.994%2c13.844%2c295.288%2c-42.456C300.56%2c-98.52%2c260.817%2c-152.404%2c217.748%2c-188.68C177.213%2c-222.822%2c119.355%2c-218.372%2c68.543%2c-233.437C17.56%2c-248.553%2c-28.856%2c-285.25%2c-81.449%2c-277.39C-136.416%2c-269.176%2c-191.461%2c-238.236%2c-219.69%2c-190.362C-246.995%2c-144.055%2c-223.911%2c-86.197%2c-225.866%2c-32.475C-227.571%2c14.375%2c-252.34%2c63.787%2c-230.449%2c105.243C-208.688%2c146.452%2c-153.162%2c152.151%2c-114.575%2c178.281C-74.717%2c205.271%2c-46.995%2c250.868%2c0%2c261.293' fill='%23005fdd'%3e%3c/path%3e%3cpath d='M300 817.0889999999999C348.193 816.529 404.014 850.509 441.622 820.367 480.092 789.534 462.999 727.1659999999999 472.54499999999996 678.798 479.64 642.848 493.495 609.13 490.519 572.608 487.404 534.376 480.31899999999996 494.509 455.16700000000003 465.547 430.026 436.597 389.916 429.4 354.151 415.579 314.936 400.425 275.9 368.699 235.608 380.7 195.315 392.701 183.425 443.363 155.464 474.759 126.994 506.727 86.89500000000001 527.662 69.781 566.9 49.672 613.003 35.24799999999999 665.91 51.29900000000001 713.578 67.814 762.624 108.46700000000001 803.8 156.246 823.686 201.447 842.499 251.043 817.658 300 817.0889999999999' fill='%230f76ff'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1093'%3e%3crect width='300' height='600' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;
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
