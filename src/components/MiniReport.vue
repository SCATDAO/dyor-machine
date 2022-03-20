<template>
  <div class="css-mr-qca" id="capture2" style="image-rendering: pixelated">
    <div class="css-dc-koq">
      <div class="css-dc-qxs">
        <span>{{ newAudit.pn }}</span>
      </div>
      <div class="css-dc-qxk">
        <span> {{ newAudit.pc }} </span>
      </div>
      <div class="css-dc-xqq">
        <div class="css-dc-xaa">
          <div class="css-dc-qkz">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>

        <div class="css-dc-qza">
          <div class="css-dc-qxx">
            <span>Total Percentage</span>
          </div>
          <div class="css-dc-qxq">
            <span>{{ totalScore }} <span class="css-dc-qxp"> % </span> </span>
          </div>
        </div>
      </div>
    </div>

    <div class="css-dc-kqq">
      <div class="css-dc-qxh">Development Team<span>5.32/10.00</span></div>
      <div class="css-dc-qxh">Tokenomics<span>7.32/10.00</span></div>
      <div class="css-dc-qxh">Community<span>9.32/10.00</span></div>
      <div class="css-dc-qxh">ICO Trading Metrics<span>5.00/5.00</span></div>
    </div>
    <div class="css-dc-qox">
      <canvas
        class="camva"
        id="quickResponse3"
        style="image-rendering: pixelated"
      ></canvas>
      <div class="css-dc-qqq">
        <span class="css-dc-cqw"> <span>ID:</span> 98cas9dasd</span>
        <span class="css-dc-cqw"> <span>Date:</span> 12/02/2012</span>
        <span class="css-dc-cqw"> <span>Author:</span> Cardanofan</span>
      </div>
      <div class="css-mr-qcz">
        <svg
          id="SVGroot"
          width="200px"
          height="100px"
          version="1.1"
          viewBox="0 0 120 24"
          sodipodi:docname="dyor-tool.svg"
          inkscape:version="1.1.1 (1:1.1+202109281944+c3084ef5ed)"
          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:svg="http://www.w3.org/2000/svg"
        >
          <defs id="defs6457" />
          <sodipodi:namedview
            id="namedview6455"
            pagecolor="#ffffff"
            bordercolor="#666666"
            borderopacity="1.0"
            inkscape:pageshadow="2"
            inkscape:pageopacity="0.0"
            inkscape:pagecheckerboard="0"
            showgrid="false"
            inkscape:zoom="5.525"
            inkscape:cx="89.411765"
            inkscape:cy="-2.8054299"
            inkscape:window-width="1920"
            inkscape:window-height="1016"
            inkscape:window-x="0"
            inkscape:window-y="27"
            inkscape:window-maximized="1"
            inkscape:current-layer="SVGroot"
          />
          <g
            transform="matrix(0.10159,0,0,0.10159,-5.4495,-4.4501)"
            fill="#ffffff"
            id="g6452"
            style="fill: #ffffff; fill-opacity: 1"
          >
            <g fill="#ffffff" id="g6450" style="fill: #ffffff; fill-opacity: 1">
              <path
                class="st2"
                d="M 120.1,266.5 H 57.6 V 126.8 h 62.5 c 9.7,0 18.8,1.8 27.4,5.5 8.5,3.7 16,8.6 22.3,14.9 6.4,6.3 11.4,13.7 15,22.2 3.7,8.5 5.5,17.6 5.5,27.2 0,9.6 -1.8,18.7 -5.5,27.2 -3.7,8.5 -8.7,15.9 -15,22.2 -6.4,6.3 -13.8,11.3 -22.3,14.9 -8.6,3.8 -17.7,5.6 -27.4,5.6 z M 115.7,160.8 H 94.3 v 71.6 h 21.4 c 5,0 9.7,-0.9 14.1,-2.8 4.4,-1.9 8.2,-4.4 11.4,-7.7 3.2,-3.2 5.8,-7 7.6,-11.4 1.9,-4.4 2.8,-9 2.8,-14 0,-4.9 -0.9,-9.6 -2.8,-14 -1.9,-4.4 -4.4,-8.2 -7.6,-11.4 -3.2,-3.2 -7.1,-5.8 -11.4,-7.7 -4.3,-1.6 -9,-2.6 -14.1,-2.6 z"
                id="path6306"
                style="fill: #ffffff; fill-opacity: 1"
              />
              <path
                class="st2"
                d="m 271.8,218.4 v 48.1 H 232 V 218.4 L 183.2,127 h 43.9 l 24.8,48.6 24.7,-48.6 h 43.9 z"
                id="path6308"
                style="fill: #ffffff; fill-opacity: 1"
              />
              <path
                class="st2"
                d="m 387.7,270.8 c -10.3,0 -20,-1.9 -29,-5.8 -9,-3.8 -16.9,-9.1 -23.6,-15.8 -6.7,-6.7 -12,-14.5 -15.9,-23.5 -3.9,-9 -5.9,-18.6 -5.9,-28.8 0,-10.2 1.9,-19.8 5.9,-28.8 3.9,-9 9.2,-16.8 15.9,-23.5 6.7,-6.7 14.6,-11.9 23.6,-15.8 9,-3.9 18.7,-5.8 29,-5.8 10.2,0 19.8,2 28.9,5.8 9.1,3.9 16.9,9.2 23.7,15.8 6.7,6.7 12,14.5 15.9,23.5 3.9,9 5.9,18.6 5.9,28.8 0,10.2 -2,19.8 -5.9,28.8 -3.9,9 -9.2,16.8 -15.9,23.5 -6.7,6.7 -14.6,11.9 -23.7,15.8 -9,3.9 -18.7,5.8 -28.9,5.8 z m 0,-112.1 c -5.3,0 -10.2,1.1 -14.7,3.2 -4.5,2.1 -8.4,4.9 -11.6,8.4 -3.2,3.5 -5.8,7.5 -7.7,12.1 -1.9,4.6 -2.8,9.5 -2.8,14.7 0,5 0.9,9.9 2.8,14.6 1.9,4.7 4.4,8.8 7.7,12.2 3.2,3.5 7.1,6.3 11.6,8.4 4.5,2.1 9.4,3.2 14.7,3.2 5.3,0 10.2,-1 14.7,-3.2 4.5,-2.1 8.4,-4.9 11.6,-8.4 3.2,-3.5 5.8,-7.6 7.7,-12.2 1.9,-4.7 2.8,-9.5 2.8,-14.6 0,-5.2 -0.9,-10 -2.8,-14.7 -1.9,-4.6 -4.4,-8.7 -7.7,-12.1 -3.2,-3.5 -7.1,-6.3 -11.6,-8.4 -4.5,-2.2 -9.4,-3.2 -14.7,-3.2 z"
                id="path6310"
                style="fill: #ffffff; fill-opacity: 1"
              />
              <path
                class="st2"
                d="m 566.1,266.5 -24.3,-43.2 h -23.6 l 0.2,43.2 H 479.9 V 126.8 h 70 c 3.4,0 6.8,0.6 10.3,1.9 3.5,1.3 6.8,2.9 10.1,5 3.2,2.1 6.2,4.5 9,7.1 2.8,2.6 5.1,5.3 7,8.1 2.4,3.5 4.2,7.5 5.5,12.2 1.3,4.6 1.9,9 1.9,13.2 0,7 -1.6,13.4 -4.9,19.4 -3.2,6 -7.7,11 -13.5,15.1 l 32.8,57.6 h -42 z M 538.9,158 h -21.8 v 30 h 21.8 c 2.2,0 4.2,-0.4 6.1,-1.2 1.9,-0.8 3.6,-1.8 5,-3.2 1.4,-1.4 2.6,-3 3.4,-4.7 0.8,-1.8 1.3,-3.8 1.3,-5.9 0,-2.1 -0.4,-4.1 -1.3,-5.9 -0.8,-1.8 -2,-3.4 -3.4,-4.7 -1.4,-1.4 -3.1,-2.4 -5,-3.2 -1.9,-0.8 -3.9,-1.2 -6.1,-1.2 z"
                id="path6312"
                style="fill: #ffffff; fill-opacity: 1"
              />
              <path
                class="st2"
                d="M 796.3,161.4 H 758 V 266.5 H 720 V 161.4 h -38.3 l -2.5,-2.5 v -32 h 119.7 v 32 z"
                id="path6314"
                style="fill: #ffffff; fill-opacity: 1"
              />
              <path
                class="st2"
                d="M 1120.5,266.5 V 126.8 h 38.7 v 105.1 h 73.4 v 34.6 z"
                id="path6316"
                style="fill: #ffffff; fill-opacity: 1"
              />
              <path
                class="st3"
                d="m 917.6,127.4 c -8.8,-4.4 -17.9,-7 -27.3,-7.8 -9.4,-0.8 -18.9,0.2 -28.3,3.1 -5.4,1.6 -10.6,3.9 -15.5,6.8 L 788.8,60.7 c -3.7,-4.4 -10.2,-5 -14.6,-1.3 L 770,63 c -4.4,3.7 -5,10.2 -1.3,14.6 l 57.8,68.9 c -0.7,0.8 -1.3,1.6 -2,2.5 -8,9.6 -12.2,24.8 -12.2,24.8 -1.2,4.4 -2.1,8.8 -2.5,13.4 -0.9,9.4 0.1,18.8 2.9,28.2 2.8,9.4 7.5,18 14,25.8 6.6,7.8 14.2,13.9 23,18.3 8.8,4.4 17.9,7 27.3,7.8 9.4,0.8 18.8,-0.2 28.2,-3.1 9.4,-2.8 18,-7.6 25.9,-14.2 7.8,-6.6 14,-14.2 18.4,-23 4.5,-8.8 7.1,-17.9 8,-27.3 0.9,-9.4 -0.1,-18.8 -2.9,-28.2 -2.8,-9.4 -7.5,-18 -14,-25.8 -6.6,-7.8 -14.2,-13.9 -23,-18.3 z m 14,50.9 c 1.9,6.4 2.6,12.9 2,19.2 -0.6,6.3 -2.4,12.6 -5.5,18.6 -3,5.8 -7.2,11.1 -12.5,15.5 -5.4,4.5 -11.2,7.7 -17.4,9.6 -6.4,1.9 -12.9,2.7 -19.2,2.1 -6.3,-0.5 -12.6,-2.3 -18.5,-5.3 -5.8,-2.9 -11,-7 -15.4,-12.3 -4.4,-5.2 -7.6,-11.1 -9.4,-17.2 -1.9,-6.4 -2.6,-12.9 -2,-19.2 0.6,-6.4 2.4,-12.7 5.4,-18.8 2.9,-5.8 7.1,-11 12.4,-15.5 5.3,-4.4 11.1,-7.6 17.4,-9.5 6.5,-2 13,-2.7 19.4,-2.1 6.3,0.5 12.6,2.3 18.6,5.3 5.8,2.9 10.9,7 15.3,12.3 4.4,5.4 7.6,11.2 9.4,17.3 z"
                id="path6318"
                style="fill: #ffffff; fill-opacity: 1"
              />
              <path
                class="st4"
                d="m 884.1,143.1 c 6.9,0 13.4,1.3 19.4,3.9 6.2,2.7 11.7,6.3 16.3,10.8 4.5,4.5 8.1,9.9 10.8,16 2.6,5.9 3.9,12.4 3.9,19.3 0,6.9 -1.3,13.3 -3.9,19.3 -2.7,6.1 -6.3,11.5 -10.8,16 -4.5,4.5 -9.9,8.1 -16.1,10.7 -6,2.6 -12.6,3.9 -19.5,3.9 -7,0 -13.6,-1.3 -19.6,-3.8 -6.2,-2.6 -11.6,-6.2 -16.1,-10.7 -4.5,-4.5 -8.1,-9.9 -10.8,-16 -2.6,-5.9 -3.9,-12.4 -3.9,-19.3 0,-6.8 1.3,-13.3 3.9,-19.3 2.7,-6.1 6.3,-11.5 10.8,-16 4.6,-4.5 10,-8.2 16.2,-10.9 5.9,-2.6 12.4,-3.9 19.4,-3.9 m 0,-12 c -8.6,0 -16.8,1.6 -24.2,4.9 -7.6,3.3 -14.3,7.8 -19.9,13.3 -5.6,5.6 -10.1,12.2 -13.4,19.7 -3.2,7.4 -4.9,15.5 -4.9,24 0,8.5 1.6,16.6 4.9,24 3.3,7.6 7.8,14.2 13.4,19.7 5.6,5.6 12.3,10 19.8,13.2 7.5,3.2 15.6,4.8 24.3,4.8 8.5,0 16.7,-1.6 24.2,-4.8 7.6,-3.2 14.3,-7.7 19.9,-13.2 5.6,-5.6 10.1,-12.2 13.4,-19.7 3.2,-7.4 4.9,-15.5 4.9,-24 0,-8.5 -1.6,-16.6 -4.9,-24 -3.3,-7.6 -7.8,-14.2 -13.4,-19.7 -5.6,-5.6 -12.3,-10.1 -20,-13.3 -7.5,-3.3 -15.6,-4.9 -24.1,-4.9 z"
                id="path6320"
                style="fill: #ffffff; fill-opacity: 1"
              />
              <g
                fill="#ffffff"
                id="g6382"
                style="fill: #ffffff; fill-opacity: 1"
              >
                <path
                  class="st5"
                  d="m 882.5,183.8 c -0.1,-2.5 -2,-4.6 -4.6,-4.6 -2.4,0 -4.7,2.1 -4.6,4.6 0.1,2.5 2,4.6 4.6,4.6 2.5,-0.1 4.8,-2.2 4.6,-4.6 z"
                  id="path6322"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 894.4,183.8 c -0.1,-2.5 -2,-4.6 -4.6,-4.6 -2.4,0 -4.7,2.1 -4.6,4.6 0.1,2.5 2,4.6 4.6,4.6 2.5,-0.1 4.8,-2.2 4.6,-4.6 z"
                  id="path6324"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 900,194 c -0.1,-2.5 -2,-4.6 -4.6,-4.6 -2.4,0 -4.7,2.1 -4.6,4.6 0.1,2.5 2,4.6 4.6,4.6 2.5,-0.1 4.7,-2.1 4.6,-4.6 z"
                  id="path6326"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 894.3,204.2 c -0.1,-2.5 -2,-4.6 -4.6,-4.6 -2.4,0 -4.7,2.1 -4.6,4.6 0.1,2.5 2,4.6 4.6,4.6 2.4,0 4.7,-2.1 4.6,-4.6 z"
                  id="path6328"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 882.4,204 c -0.1,-2.5 -2,-4.6 -4.6,-4.6 -2.4,0 -4.7,2.1 -4.6,4.6 0.1,2.5 2,4.6 4.6,4.6 2.4,0 4.7,-2.1 4.6,-4.6 z"
                  id="path6330"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 876.8,194.2 c -0.1,-2.5 -2,-4.6 -4.6,-4.6 -2.4,0 -4.7,2.1 -4.6,4.6 0.1,2.5 2,4.6 4.6,4.6 2.4,-0.1 4.7,-2.2 4.6,-4.6 z"
                  id="path6332"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 901.2,181 c -3.8,0 -3.8,5.9 0,5.9 3.8,0 3.8,-5.9 0,-5.9 z"
                  id="path6334"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 883.9,170.8 c -3.8,0 -3.8,5.9 0,5.9 3.8,-0.1 3.8,-5.9 0,-5.9 z"
                  id="path6336"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 866.5,181 c -3.8,0 -3.8,5.9 0,5.9 3.7,0 3.7,-5.9 0,-5.9 z"
                  id="path6338"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 866.5,201.1 c -3.8,0 -3.8,5.9 0,5.9 3.7,0 3.7,-5.9 0,-5.9 z"
                  id="path6340"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 883.9,211.1 c -3.8,0 -3.8,5.9 0,5.9 3.8,0 3.8,-5.9 0,-5.9 z"
                  id="path6342"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 901.2,201.3 c -3.8,0 -3.8,5.9 0,5.9 3.8,-0.1 3.8,-5.9 0,-5.9 z"
                  id="path6344"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 896.8,169.2 c -2.9,0 -2.9,4.6 0,4.6 2.9,0 2.9,-4.6 0,-4.6 z"
                  id="path6346"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 870.9,169.4 c -2.9,0 -2.9,4.6 0,4.6 2.9,0 3,-4.6 0,-4.6 z"
                  id="path6348"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 857.9,191.7 c -2.9,0 -2.9,4.6 0,4.6 2.9,0 2.9,-4.6 0,-4.6 z"
                  id="path6350"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 870.7,214.2 c -2.9,0 -2.9,4.6 0,4.6 3,0 3,-4.6 0,-4.6 z"
                  id="path6352"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 909.8,191.7 c -2.9,0 -2.9,4.6 0,4.6 2.9,0 2.9,-4.6 0,-4.6 z"
                  id="path6354"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 911.5,176 c -2.5,0 -2.5,3.9 0,3.9 2.5,0 2.5,-3.9 0,-3.9 z"
                  id="path6356"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 883.9,224 c -2.5,0 -2.5,3.9 0,3.9 2.5,0 2.6,-3.9 0,-3.9 z"
                  id="path6358"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 896.6,214.2 c -2.9,0 -2.9,4.6 0,4.6 2.9,0 2.9,-4.6 0,-4.6 z"
                  id="path6360"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 883.9,160 c -2.5,0 -2.5,3.9 0,3.9 2.5,0.1 2.6,-3.9 0,-3.9 z"
                  id="path6362"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 856,175.9 c -2.5,0 -2.5,3.9 0,3.9 2.6,0 2.6,-3.9 0,-3.9 z"
                  id="path6364"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 856.2,208 c -2.5,0 -2.5,3.9 0,3.9 2.5,0 2.5,-3.9 0,-3.9 z"
                  id="path6366"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 911.5,208.2 c -2.5,0 -2.5,3.9 0,3.9 2.5,0 2.5,-3.9 0,-3.9 z"
                  id="path6368"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 919.1,192.6 c -1.8,0 -1.8,2.8 0,2.8 1.8,0 1.8,-2.8 0,-2.8 z"
                  id="path6370"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 901.2,162.1 c -1.8,0 -1.8,2.8 0,2.8 1.8,0 1.9,-2.8 0,-2.8 z"
                  id="path6372"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 866.3,162.3 c -1.8,0 -1.8,2.8 0,2.8 1.8,0 1.8,-2.8 0,-2.8 z"
                  id="path6374"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 848.8,192.6 c -1.8,0 -1.8,2.8 0,2.8 1.8,0 1.8,-2.8 0,-2.8 z"
                  id="path6376"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 866.3,222.9 c -1.8,0 -1.8,2.8 0,2.8 1.8,0 1.8,-2.8 0,-2.8 z"
                  id="path6378"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 901.2,222.7 c -1.8,0 -1.8,2.8 0,2.8 1.8,0 1.9,-2.8 0,-2.8 z"
                  id="path6380"
                  style="fill: #ffffff; fill-opacity: 1"
                />
              </g>
              <path
                class="st3"
                d="m 979.4,145.7 c -6.6,7.8 -11.2,16.4 -14,25.8 -2.8,9.4 -3.8,18.8 -2.9,28.2 0.9,9.4 3.5,18.5 8,27.3 4.5,8.8 10.6,16.4 18.4,23 7.9,6.6 16.5,11.4 25.9,14.2 9.4,2.8 18.8,3.9 28.2,3.1 9.4,-0.8 18.5,-3.4 27.3,-7.8 8.8,-4.4 16.4,-10.5 23,-18.3 6.6,-7.8 11.2,-16.4 14,-25.8 2.8,-9.4 3.8,-18.8 2.9,-28.2 -0.4,-4.5 -1.3,-9 -2.5,-13.4 0,0 -4.2,-15.2 -12.2,-24.8 -0.6,-0.8 -1.3,-1.7 -2,-2.5 l 57.8,-68.9 c 3.7,-4.4 3.1,-10.9 -1.3,-14.6 l -4.2,-3.6 c -4.4,-3.7 -10.9,-3.1 -14.6,1.3 l -57.7,68.8 c -4.9,-2.9 -10.1,-5.1 -15.5,-6.8 -9.4,-2.8 -18.9,-3.9 -28.3,-3.1 -9.4,0.8 -18.5,3.4 -27.3,7.8 -8.8,4.4 -16.4,10.5 -23,18.3 z m 18.4,15.4 c 4.4,-5.3 9.6,-9.4 15.3,-12.3 6,-3 12.2,-4.8 18.6,-5.3 6.4,-0.5 12.9,0.2 19.4,2.1 6.3,1.9 12.1,5.1 17.4,9.5 5.3,4.5 9.5,9.7 12.4,15.5 3,6.1 4.9,12.4 5.4,18.8 0.6,6.3 -0.1,12.8 -2,19.2 -1.9,6.2 -5,12 -9.4,17.2 -4.4,5.2 -9.6,9.4 -15.4,12.3 -6,3 -12.2,4.8 -18.5,5.3 -6.4,0.5 -12.8,-0.2 -19.2,-2.1 -6.2,-1.9 -12.1,-5.1 -17.4,-9.6 -5.3,-4.4 -9.5,-9.7 -12.5,-15.5 -3.1,-6 -4.9,-12.2 -5.5,-18.6 -0.6,-6.3 0.1,-12.8 2,-19.2 1.8,-6.2 5,-12 9.4,-17.3 z"
                id="path6384"
                style="fill: #ffffff; fill-opacity: 1"
              />
              <path
                class="st6"
                d="m 1035.9,143.1 c 7,0 13.5,1.3 19.4,3.9 6.2,2.7 11.7,6.3 16.2,10.9 4.5,4.5 8.1,9.8 10.8,16 2.6,5.9 3.9,12.4 3.9,19.3 0,6.8 -1.3,13.3 -3.9,19.3 -2.7,6.1 -6.3,11.5 -10.8,16 -4.5,4.5 -9.9,8.1 -16.1,10.7 -6,2.5 -12.5,3.8 -19.6,3.8 -6.9,0 -13.5,-1.3 -19.5,-3.9 -6.2,-2.6 -11.6,-6.2 -16.1,-10.7 -4.5,-4.5 -8.1,-9.9 -10.8,-16 -2.6,-5.9 -3.9,-12.4 -3.9,-19.3 0,-6.9 1.3,-13.3 3.9,-19.3 2.7,-6.1 6.3,-11.5 10.8,-16 4.5,-4.5 10,-8.2 16.3,-10.8 6,-2.6 12.5,-3.9 19.4,-3.9 m 0,-12 c -8.5,0 -16.6,1.6 -24.1,4.9 -7.6,3.3 -14.4,7.8 -20,13.3 -5.6,5.6 -10.1,12.2 -13.4,19.7 -3.2,7.4 -4.9,15.5 -4.9,24 0,8.5 1.6,16.6 4.9,24 3.3,7.6 7.8,14.2 13.4,19.7 5.6,5.5 12.3,10 19.9,13.2 7.5,3.2 15.7,4.8 24.2,4.8 8.6,0 16.8,-1.6 24.3,-4.8 7.6,-3.2 14.2,-7.7 19.8,-13.2 5.6,-5.6 10.1,-12.2 13.4,-19.7 3.2,-7.4 4.9,-15.5 4.9,-24 0,-8.5 -1.6,-16.6 -4.9,-24 -3.3,-7.5 -7.8,-14.2 -13.4,-19.7 -5.6,-5.6 -12.3,-10.1 -19.9,-13.3 -7.4,-3.3 -15.6,-4.9 -24.2,-4.9 z"
                id="path6386"
                style="fill: #ffffff; fill-opacity: 1"
              />
              <g
                fill="#ffffff"
                id="g6448"
                style="fill: #ffffff; fill-opacity: 1"
              >
                <path
                  class="st5"
                  d="m 1037.4,183.8 c 0.1,-2.5 2,-4.6 4.6,-4.6 2.4,0 4.7,2.1 4.6,4.6 -0.1,2.5 -2,4.6 -4.6,4.6 -2.4,-0.1 -4.7,-2.2 -4.6,-4.6 z"
                  id="path6388"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1025.5,183.8 c 0.1,-2.5 2,-4.6 4.6,-4.6 2.4,0 4.7,2.1 4.6,4.6 -0.1,2.5 -2,4.6 -4.6,4.6 -2.4,-0.1 -4.7,-2.2 -4.6,-4.6 z"
                  id="path6390"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1020,194 c 0.1,-2.5 2,-4.6 4.6,-4.6 2.4,0 4.7,2.1 4.6,4.6 -0.1,2.5 -2,4.6 -4.6,4.6 -2.5,-0.1 -4.7,-2.1 -4.6,-4.6 z"
                  id="path6392"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1025.7,204.2 c 0.1,-2.5 2,-4.6 4.6,-4.6 2.4,0 4.7,2.1 4.6,4.6 -0.1,2.5 -2,4.6 -4.6,4.6 -2.4,0 -4.7,-2.1 -4.6,-4.6 z"
                  id="path6394"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1037.6,204 c 0.1,-2.5 2,-4.6 4.6,-4.6 2.4,0 4.7,2.1 4.6,4.6 -0.1,2.5 -2,4.6 -4.6,4.6 -2.4,0 -4.7,-2.1 -4.6,-4.6 z"
                  id="path6396"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1043.2,194.2 c 0.1,-2.5 2,-4.6 4.6,-4.6 2.4,0 4.7,2.1 4.6,4.6 -0.1,2.5 -2,4.6 -4.6,4.6 -2.4,-0.1 -4.7,-2.2 -4.6,-4.6 z"
                  id="path6398"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1018.8,181 c 3.8,0 3.8,5.9 0,5.9 -3.8,0 -3.8,-5.9 0,-5.9 z"
                  id="path6400"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1036,170.8 c 3.8,0 3.8,5.9 0,5.9 -3.7,-0.1 -3.7,-5.9 0,-5.9 z"
                  id="path6402"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1053.5,181 c 3.8,0 3.8,5.9 0,5.9 -3.7,0 -3.7,-5.9 0,-5.9 z"
                  id="path6404"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1053.5,201.1 c 3.8,0 3.8,5.9 0,5.9 -3.7,0 -3.7,-5.9 0,-5.9 z"
                  id="path6406"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1036,211.1 c 3.8,0 3.8,5.9 0,5.9 -3.7,0 -3.7,-5.9 0,-5.9 z"
                  id="path6408"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1018.8,201.3 c 3.8,0 3.8,5.9 0,5.9 -3.8,-0.1 -3.8,-5.9 0,-5.9 z"
                  id="path6410"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1023.2,169.2 c 2.9,0 2.9,4.6 0,4.6 -2.9,0 -2.9,-4.6 0,-4.6 z"
                  id="path6412"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1049.1,169.4 c 2.9,0 2.9,4.6 0,4.6 -3,0 -3,-4.6 0,-4.6 z"
                  id="path6414"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1062.1,191.7 c 2.9,0 2.9,4.6 0,4.6 -2.9,0 -3,-4.6 0,-4.6 z"
                  id="path6416"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1049.3,214.2 c 2.9,0 2.9,4.6 0,4.6 -3,0 -3,-4.6 0,-4.6 z"
                  id="path6418"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1010.2,191.7 c 2.9,0 2.9,4.6 0,4.6 -2.9,0 -2.9,-4.6 0,-4.6 z"
                  id="path6420"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1008.5,176 c 2.5,0 2.5,3.9 0,3.9 -2.5,0 -2.5,-3.9 0,-3.9 z"
                  id="path6422"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1036,224 c 2.5,0 2.5,3.9 0,3.9 -2.5,0 -2.5,-3.9 0,-3.9 z"
                  id="path6424"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1023.4,214.2 c 2.9,0 2.9,4.6 0,4.6 -2.9,0 -2.9,-4.6 0,-4.6 z"
                  id="path6426"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1036,160 c 2.5,0 2.5,3.9 0,3.9 -2.5,0.1 -2.5,-3.9 0,-3.9 z"
                  id="path6428"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1063.9,175.9 c 2.5,0 2.5,3.9 0,3.9 -2.5,0 -2.5,-3.9 0,-3.9 z"
                  id="path6430"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1063.8,208 c 2.5,0 2.5,3.9 0,3.9 -2.6,0 -2.6,-3.9 0,-3.9 z"
                  id="path6432"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1008.5,208.2 c 2.5,0 2.5,3.9 0,3.9 -2.5,0 -2.5,-3.9 0,-3.9 z"
                  id="path6434"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1000.9,192.6 c 1.8,0 1.8,2.8 0,2.8 -1.8,0 -1.8,-2.8 0,-2.8 z"
                  id="path6436"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1018.8,162.1 c 1.8,0 1.8,2.8 0,2.8 -1.9,0 -1.9,-2.8 0,-2.8 z"
                  id="path6438"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1053.7,162.3 c 1.8,0 1.8,2.8 0,2.8 -1.8,0 -1.8,-2.8 0,-2.8 z"
                  id="path6440"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1071.2,192.6 c 1.8,0 1.8,2.8 0,2.8 -1.8,0 -1.8,-2.8 0,-2.8 z"
                  id="path6442"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1053.7,222.9 c 1.8,0 1.8,2.8 0,2.8 -1.8,0 -1.8,-2.8 0,-2.8 z"
                  id="path6444"
                  style="fill: #ffffff; fill-opacity: 1"
                />
                <path
                  class="st5"
                  d="m 1018.8,222.7 c 1.8,0 1.8,2.8 0,2.8 -1.9,0 -1.9,-2.8 0,-2.8 z"
                  id="path6446"
                  style="fill: #ffffff; fill-opacity: 1"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import html2canvas from "html2canvas";

import QRious from "qrious";

export default {
  props: ["totalScore", "newAudit"],
  data() {
    return {
      reportCode: "Paribus",
      reportDate: 123,
    };
  },
  mounted() {
    this.createNewCanvas();

    let metaTag = document.createElement("meta");
    metaTag.name = "viewport";
    metaTag.content = "content=width=1024";
    document.getElementsByTagName("head")[0].appendChild(metaTag);

    this.$nextTick(() => {
      setTimeout(() => {
        const recipe = document.querySelector("#capture2");
        html2canvas(recipe, { width: 700, height: 900 }).then((canvas) => {
          canvas.style.imageRendering = "pixelated";
          let can = document.createElement("a");
          can.href = canvas.toDataURL("image/png;base64");
          can.download = "IMAGE.PNG";
          can.click();
        });
      }, 1000);
    });

    metaTag = document.createElement("meta");
    metaTag.name = "viewport";
    metaTag.content = "width=device-width, initial-scale=1";
    document.getElementsByTagName("head")[0].appendChild(metaTag);
  },
  methods: {
    createNewCanvas() {
      const quickResponse = new QRious({
        element: document.getElementById("quickResponse3"),
        value: `https://audits.dyortool.io/report/${this.reportCode}`,
      });
      quickResponse.size = 100;
      quickResponse.background = "#ffffff";
      quickResponse.foregroundAlpha = 1;
      quickResponse.backgroundAlpha = 1;
      quickResponse.foreground = "#000000";
      quickResponse.level = "L";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap");

.css-mr-qca {
  font-family: "Nunito", sans-serif;
  width: 700px;
  height: 900px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  position: fixed;
  z-index: 1000;
  background: linear-gradient(22.58deg, #0036c2 0%, #0069f5 100%);
}
.css-dc-qkz {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0 2rem;
}

.css-dc-qxp {
  font-size: var(--text-size-fourth) !important;
}
.css-dc-qza {
  display: flex;
  flex-direction: column;
  min-height: 120px;
  height: 120px;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  text-align: left;
  justify-content: left;
  text-overflow: ellipsis;
}

.css-dc-xqq {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  margin-top: 2rem;
}
.css-dc-qxs,
.css-dc-qxx,
.css-dc-qxk,
.css-dc-qxq {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 2rem;
}

.css-dc-kqq {
  display: flex;
  flex-direction: column;
  margin-top: auto;
}

.css-dc-qxh {
  display: flex;
  width: 100%;
  height: 4rem;
  align-items: center;
  color: #ffffff;
  padding: 0 2rem;
  justify-content: space-between;
  box-sizing: border-box;
  text-align: left;
  margin-top: 1rem;
  font-size: var(--text-size-fourth);
}

.css-dc-qxh span {
  letter-spacing: 0.03em;
}
.css-dc-cqw {
  color: #fff;
  font-size: var(--text-size-third);
}

.css-dc-qox {
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  box-sizing: border-box;
  padding: 0 2rem;
  margin-top: auto;
}

.css-dc-qqq {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 0rem 1rem;
  height: 100px;
  text-align: start;
  flex-direction: column;
  justify-content: space-between;
}

.css-mr-qcz {
  height: 6rem;

  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.css-dc-qxs {
  margin-top: 2rem;
}

.css-dc-qxk span {
  font-size: var(--text-size-third) !important;
  margin-left: 3px;
  text-transform: capitalize;
}
.css-dc-qxq span,
.css-dc-qxk,
.css-dc-qxs span {
  color: #fff;
  text-align: left;
  text-transform: capitalize;
  font-size: var(--text-size-sixth);
}

.css-dc-qxq span {
  font-size: var(--text-size-seventh);
}
.css-dc-qxx {
  font-weight: bold;
}

.css-dc-qxx span {
  color: #fff;
  text-align: left;
  white-space: nowrap;
  font-size: var(--text-size-fourth);
}
.css-dc-qkz img {
  border-radius: 50%;
}
</style>