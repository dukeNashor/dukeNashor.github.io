// ==UserScript==
// @name         Bili Atelier
// @name:zh-CN   Bili Atelier - B站精修工作台
// @namespace    https://github.com/dukeNashor/bili-atelier
// @version      0.2.1
// @description  一体化 B 站工具箱：已看标记、屏蔽增强、评论区 IP 属地显示。
// @author       dukeNashor
// @match        https://www.bilibili.com/*
// @match        https://search.bilibili.com/*
// @match        https://space.bilibili.com/*
// @match        https://t.bilibili.com/*
// @exclude      https://member.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @homepageURL  https://github.com/dukeNashor/bili-atelier
// @supportURL   https://github.com/dukeNashor/bili-atelier/issues
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @connect      backblazeb2.com
// @connect      backblaze.com
// @connect      api.bilibili.com
// @grant        GM_xmlhttpRequest
// @grant        GM_addValueChangeListener
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_getResourceURL
// @grant        GM_getResourceText
// @license      MIT
// @resource     atelier_atelier_icon_png https://dukenashor.github.io/bili-atelier/resources/atelier-icon.ccd5f55ad48331ba0f53cdc3badba82c6b2b221127182f25bafa0a92e917e3ae.png#sha256=ccd5f55ad48331ba0f53cdc3badba82c6b2b221127182f25bafa0a92e917e3ae
// @resource     atelier_xp_text_bold_json https://dukenashor.github.io/bili-atelier/resources/xp-text-bold.ecec6c165471d55c7efea47106c91f47e5552af5104044feae5fbeffb09322f8.json#sha256=ecec6c165471d55c7efea47106c91f47e5552af5104044feae5fbeffb09322f8
// @resource     atelier_xp_text_bold_png https://dukenashor.github.io/bili-atelier/resources/xp-text-bold.f4f0c8c086eb4e5bda4e9f858ce7643e35ee98a4ad94387b3759fc38f7b72e13.png#sha256=f4f0c8c086eb4e5bda4e9f858ce7643e35ee98a4ad94387b3759fc38f7b72e13
// @resource     atelier_xp_text_regular_json https://dukenashor.github.io/bili-atelier/resources/xp-text-regular.9a8c561311395774f715c3872bbde2dd6a811864723af09f50d5806818f4e6e6.json#sha256=9a8c561311395774f715c3872bbde2dd6a811864723af09f50d5806818f4e6e6
// @resource     atelier_xp_text_regular_png https://dukenashor.github.io/bili-atelier/resources/xp-text-regular.068f6dd91cf7a45be26c26626023bfc6bef6e3af11489a9526977c45d8879ab4.png#sha256=068f6dd91cf7a45be26c26626023bfc6bef6e3af11489a9526977c45d8879ab4
// @resource     atelier_xpballn_wav https://dukenashor.github.io/bili-atelier/resources/xpballn.c9de87a87b68dd754fa29f2989c240949ad9b1f0423d019ca68afcd86e107639.wav#sha256=c9de87a87b68dd754fa29f2989c240949ad9b1f0423d019ca68afcd86e107639
// @resource     atelier_xpbatcrt_wav https://dukenashor.github.io/bili-atelier/resources/xpbatcrt.cb02dd9f8b4d18aab9a5c51a26faac12e861dd362800a12292f243432a982325.wav#sha256=cb02dd9f8b4d18aab9a5c51a26faac12e861dd362800a12292f243432a982325
// @resource     atelier_xpbatlow_wav https://dukenashor.github.io/bili-atelier/resources/xpbatlow.bd4a58b1e2b8e93bcf5b76df3e4a9f67ce0926107a5702ed6bac0e63466a22fd.wav#sha256=bd4a58b1e2b8e93bcf5b76df3e4a9f67ce0926107a5702ed6bac0e63466a22fd
// @resource     atelier_xpblkpop_wav https://dukenashor.github.io/bili-atelier/resources/xpblkpop.df7cad111688dadb00469203dd7228df99e49e86ae7ba937e308d947cd9790f2.wav#sha256=df7cad111688dadb00469203dd7228df99e49e86ae7ba937e308d947cd9790f2
// @resource     atelier_xpcrtstp_wav https://dukenashor.github.io/bili-atelier/resources/xpcrtstp.1b86a1b8b7b5925f9346b64115b0b92744a142b06b09f44263a57419bc2bb6e6.wav#sha256=1b86a1b8b7b5925f9346b64115b0b92744a142b06b09f44263a57419bc2bb6e6
// @resource     atelier_xpdef_wav https://dukenashor.github.io/bili-atelier/resources/xpdef.d0426433cb153f860f02320408a1922558742bc3d170eb47715192ff86a66a16.wav#sha256=d0426433cb153f860f02320408a1922558742bc3d170eb47715192ff86a66a16
// @resource     atelier_xpding_wav https://dukenashor.github.io/bili-atelier/resources/xpding.20fc59d9f846bc32b899880fae0878208856718b75e6158526308b900af8a9bd.wav#sha256=20fc59d9f846bc32b899880fae0878208856718b75e6158526308b900af8a9bd
// @resource     atelier_xperror_wav https://dukenashor.github.io/bili-atelier/resources/xperror.4b51ec1b1b14889bc2c2cdad8c80dafc974d78b9292c3ccb344e44e93383cac4.wav#sha256=4b51ec1b1b14889bc2c2cdad8c80dafc974d78b9292c3ccb344e44e93383cac4
// @resource     atelier_xpexcl_wav https://dukenashor.github.io/bili-atelier/resources/xpexcl.b57b8e8818c424452ca4fb8abb219ae01c0e31db2f955e1f85d9fcb5a0dabfbe.wav#sha256=b57b8e8818c424452ca4fb8abb219ae01c0e31db2f955e1f85d9fcb5a0dabfbe
// @resource     atelier_xphdfail_wav https://dukenashor.github.io/bili-atelier/resources/xphdfail.fe6e852ff646c0a896995632f76a3e390bea6163b40639c87bf45c1d8a7475c2.wav#sha256=fe6e852ff646c0a896995632f76a3e390bea6163b40639c87bf45c1d8a7475c2
// @resource     atelier_xphdinst_wav https://dukenashor.github.io/bili-atelier/resources/xphdinst.a3e44db9179591a705baed6daa00efb988197c0698a9747980126d5939e9d506.wav#sha256=a3e44db9179591a705baed6daa00efb988197c0698a9747980126d5939e9d506
// @resource     atelier_xphdrem_wav https://dukenashor.github.io/bili-atelier/resources/xphdrem.c4d09c6ad6a9090c4e611330a7501f7a84abc7c777c6e3d1915179f8d1ed45f3.wav#sha256=c4d09c6ad6a9090c4e611330a7501f7a84abc7c777c6e3d1915179f8d1ed45f3
// @resource     atelier_xpinfbar_wav https://dukenashor.github.io/bili-atelier/resources/xpinfbar.b4dfbdfd8d6a102123a7966da358781bd32bb6d78e833514705cb7de76efa410.wav#sha256=b4dfbdfd8d6a102123a7966da358781bd32bb6d78e833514705cb7de76efa410
// @resource     atelier_xplogoff_wav https://dukenashor.github.io/bili-atelier/resources/xplogoff.e0c0e5dea2550c8f235c0bb1584d9011a35ca23bc18597bf7ac6581efcd7b7aa.wav#sha256=e0c0e5dea2550c8f235c0bb1584d9011a35ca23bc18597bf7ac6581efcd7b7aa
// @resource     atelier_xplogon_wav https://dukenashor.github.io/bili-atelier/resources/xplogon.8d71fba4267fb3454030c7289079421a08fc3e773caa47107d832f855ae85396.wav#sha256=8d71fba4267fb3454030c7289079421a08fc3e773caa47107d832f855ae85396
// @resource     atelier_xpmenu_wav https://dukenashor.github.io/bili-atelier/resources/xpmenu.da4fc6f8917b97725e6de85bb45b574c7895ec46672e6eb439a462cfd9940ac7.wav#sha256=da4fc6f8917b97725e6de85bb45b574c7895ec46672e6eb439a462cfd9940ac7
// @resource     atelier_xpmin_wav https://dukenashor.github.io/bili-atelier/resources/xpmin.974da6baee4187c37e514186b99691132988140cca95402589c6fdc1417e5926.wav#sha256=974da6baee4187c37e514186b99691132988140cca95402589c6fdc1417e5926
// @resource     atelier_xpnotify_wav https://dukenashor.github.io/bili-atelier/resources/xpnotify.760cdd5685008255d6e188a8c528ebcb74daf806bb24a81c2a36086df6a95c76.wav#sha256=760cdd5685008255d6e188a8c528ebcb74daf806bb24a81c2a36086df6a95c76
// @resource     atelier_xpprint_wav https://dukenashor.github.io/bili-atelier/resources/xpprint.e411c02471876c4d1075ec8fcd406e99ac7c9a5e0c6322ed579de50c8ca3b844.wav#sha256=e411c02471876c4d1075ec8fcd406e99ac7c9a5e0c6322ed579de50c8ca3b844
// @resource     atelier_xprecycl_wav https://dukenashor.github.io/bili-atelier/resources/xprecycl.a8a7028f9fe989cdde61bf22b73f0ff23ae291dbf8e056bb09682a7487c49ad7.wav#sha256=a8a7028f9fe989cdde61bf22b73f0ff23ae291dbf8e056bb09682a7487c49ad7
// @resource     atelier_xprestor_wav https://dukenashor.github.io/bili-atelier/resources/xprestor.480dea5b1808dd67c5a5946e7a47e8e582d5cb1c7fdce4b037140157da0ecadf.wav#sha256=480dea5b1808dd67c5a5946e7a47e8e582d5cb1c7fdce4b037140157da0ecadf
// @resource     atelier_xpringin_wav https://dukenashor.github.io/bili-atelier/resources/xpringin.b2cd4e4a977606abb8c35b7d446d6c322ee4bda4c0c722ef240f0c51d7ddc713.wav#sha256=b2cd4e4a977606abb8c35b7d446d6c322ee4bda4c0c722ef240f0c51d7ddc713
// @resource     atelier_xprngout_wav https://dukenashor.github.io/bili-atelier/resources/xprngout.d994081372c2794642da68212d49c6a64263f88a9fde5cc96583b43574c26bb0.wav#sha256=d994081372c2794642da68212d49c6a64263f88a9fde5cc96583b43574c26bb0
// @resource     atelier_xpshutdn_wav https://dukenashor.github.io/bili-atelier/resources/xpshutdn.3d937337075a647950f6aa557bca23dea6e17cf6d14814ca7dbc55b827678a0b.wav#sha256=3d937337075a647950f6aa557bca23dea6e17cf6d14814ca7dbc55b827678a0b
// @resource     atelier_xpstart_wav https://dukenashor.github.io/bili-atelier/resources/xpstart.d5712a8963eb3e1e181b25649ecff3080ede89c96350eb07e7d7cad429e959ea.wav#sha256=d5712a8963eb3e1e181b25649ecff3080ede89c96350eb07e7d7cad429e959ea
// @resource     atelier_xpstartu_wav https://dukenashor.github.io/bili-atelier/resources/xpstartu.8f859ebb90247036ced11db854848abe1434dc3ffdfa5795f7c5f06db9a423d5.wav#sha256=8f859ebb90247036ced11db854848abe1434dc3ffdfa5795f7c5f06db9a423d5
// @downloadURL  https://dukenashor.github.io/bili-atelier/bili-toolkit.user.js
// @updateURL    https://dukenashor.github.io/bili-atelier/bili-toolkit.meta.js
// ==/UserScript==

(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key2 of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key2) && key2 !== except)
          __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/qrcode/lib/can-promise.js
  var require_can_promise = __commonJS({
    "node_modules/qrcode/lib/can-promise.js"(exports, module) {
      module.exports = function() {
        return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
      };
    }
  });

  // node_modules/qrcode/lib/core/utils.js
  var require_utils = __commonJS({
    "node_modules/qrcode/lib/core/utils.js"(exports) {
      var toSJISFunction;
      var CODEWORDS_COUNT = [
        0,
        // Not used
        26,
        44,
        70,
        100,
        134,
        172,
        196,
        242,
        292,
        346,
        404,
        466,
        532,
        581,
        655,
        733,
        815,
        901,
        991,
        1085,
        1156,
        1258,
        1364,
        1474,
        1588,
        1706,
        1828,
        1921,
        2051,
        2185,
        2323,
        2465,
        2611,
        2761,
        2876,
        3034,
        3196,
        3362,
        3532,
        3706
      ];
      exports.getSymbolSize = function getSymbolSize(version) {
        if (!version) throw new Error('"version" cannot be null or undefined');
        if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
        return version * 4 + 17;
      };
      exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
        return CODEWORDS_COUNT[version];
      };
      exports.getBCHDigit = function(data) {
        let digit = 0;
        while (data !== 0) {
          digit++;
          data >>>= 1;
        }
        return digit;
      };
      exports.setToSJISFunction = function setToSJISFunction(f) {
        if (typeof f !== "function") {
          throw new Error('"toSJISFunc" is not a valid function.');
        }
        toSJISFunction = f;
      };
      exports.isKanjiModeEnabled = function() {
        return typeof toSJISFunction !== "undefined";
      };
      exports.toSJIS = function toSJIS(kanji) {
        return toSJISFunction(kanji);
      };
    }
  });

  // node_modules/qrcode/lib/core/error-correction-level.js
  var require_error_correction_level = __commonJS({
    "node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
      exports.L = { bit: 1 };
      exports.M = { bit: 0 };
      exports.Q = { bit: 3 };
      exports.H = { bit: 2 };
      function fromString(string) {
        if (typeof string !== "string") {
          throw new Error("Param is not a string");
        }
        const lcStr = string.toLowerCase();
        switch (lcStr) {
          case "l":
          case "low":
            return exports.L;
          case "m":
          case "medium":
            return exports.M;
          case "q":
          case "quartile":
            return exports.Q;
          case "h":
          case "high":
            return exports.H;
          default:
            throw new Error("Unknown EC Level: " + string);
        }
      }
      exports.isValid = function isValid(level) {
        return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
      };
      exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
          return value;
        }
        try {
          return fromString(value);
        } catch (e) {
          return defaultValue;
        }
      };
    }
  });

  // node_modules/qrcode/lib/core/bit-buffer.js
  var require_bit_buffer = __commonJS({
    "node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
      function BitBuffer() {
        this.buffer = [];
        this.length = 0;
      }
      BitBuffer.prototype = {
        get: function(index) {
          const bufIndex = Math.floor(index / 8);
          return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
        },
        put: function(num, length) {
          for (let i = 0; i < length; i++) {
            this.putBit((num >>> length - i - 1 & 1) === 1);
          }
        },
        getLengthInBits: function() {
          return this.length;
        },
        putBit: function(bit) {
          const bufIndex = Math.floor(this.length / 8);
          if (this.buffer.length <= bufIndex) {
            this.buffer.push(0);
          }
          if (bit) {
            this.buffer[bufIndex] |= 128 >>> this.length % 8;
          }
          this.length++;
        }
      };
      module.exports = BitBuffer;
    }
  });

  // node_modules/qrcode/lib/core/bit-matrix.js
  var require_bit_matrix = __commonJS({
    "node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
      function BitMatrix(size) {
        if (!size || size < 1) {
          throw new Error("BitMatrix size must be defined and greater than 0");
        }
        this.size = size;
        this.data = new Uint8Array(size * size);
        this.reservedBit = new Uint8Array(size * size);
      }
      BitMatrix.prototype.set = function(row, col, value, reserved) {
        const index = row * this.size + col;
        this.data[index] = value;
        if (reserved) this.reservedBit[index] = true;
      };
      BitMatrix.prototype.get = function(row, col) {
        return this.data[row * this.size + col];
      };
      BitMatrix.prototype.xor = function(row, col, value) {
        this.data[row * this.size + col] ^= value;
      };
      BitMatrix.prototype.isReserved = function(row, col) {
        return this.reservedBit[row * this.size + col];
      };
      module.exports = BitMatrix;
    }
  });

  // node_modules/qrcode/lib/core/alignment-pattern.js
  var require_alignment_pattern = __commonJS({
    "node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
      var getSymbolSize = require_utils().getSymbolSize;
      exports.getRowColCoords = function getRowColCoords(version) {
        if (version === 1) return [];
        const posCount = Math.floor(version / 7) + 2;
        const size = getSymbolSize(version);
        const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
        const positions = [size - 7];
        for (let i = 1; i < posCount - 1; i++) {
          positions[i] = positions[i - 1] - intervals;
        }
        positions.push(6);
        return positions.reverse();
      };
      exports.getPositions = function getPositions(version) {
        const coords = [];
        const pos = exports.getRowColCoords(version);
        const posLength = pos.length;
        for (let i = 0; i < posLength; i++) {
          for (let j = 0; j < posLength; j++) {
            if (i === 0 && j === 0 || // top-left
            i === 0 && j === posLength - 1 || // bottom-left
            i === posLength - 1 && j === 0) {
              continue;
            }
            coords.push([pos[i], pos[j]]);
          }
        }
        return coords;
      };
    }
  });

  // node_modules/qrcode/lib/core/finder-pattern.js
  var require_finder_pattern = __commonJS({
    "node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
      var getSymbolSize = require_utils().getSymbolSize;
      var FINDER_PATTERN_SIZE = 7;
      exports.getPositions = function getPositions(version) {
        const size = getSymbolSize(version);
        return [
          // top-left
          [0, 0],
          // top-right
          [size - FINDER_PATTERN_SIZE, 0],
          // bottom-left
          [0, size - FINDER_PATTERN_SIZE]
        ];
      };
    }
  });

  // node_modules/qrcode/lib/core/mask-pattern.js
  var require_mask_pattern = __commonJS({
    "node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
      exports.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
      };
      var PenaltyScores = {
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10
      };
      exports.isValid = function isValid(mask) {
        return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
      };
      exports.from = function from(value) {
        return exports.isValid(value) ? parseInt(value, 10) : void 0;
      };
      exports.getPenaltyN1 = function getPenaltyN1(data) {
        const size = data.size;
        let points = 0;
        let sameCountCol = 0;
        let sameCountRow = 0;
        let lastCol = null;
        let lastRow = null;
        for (let row = 0; row < size; row++) {
          sameCountCol = sameCountRow = 0;
          lastCol = lastRow = null;
          for (let col = 0; col < size; col++) {
            let module2 = data.get(row, col);
            if (module2 === lastCol) {
              sameCountCol++;
            } else {
              if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
              lastCol = module2;
              sameCountCol = 1;
            }
            module2 = data.get(col, row);
            if (module2 === lastRow) {
              sameCountRow++;
            } else {
              if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
              lastRow = module2;
              sameCountRow = 1;
            }
          }
          if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
          if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
        }
        return points;
      };
      exports.getPenaltyN2 = function getPenaltyN2(data) {
        const size = data.size;
        let points = 0;
        for (let row = 0; row < size - 1; row++) {
          for (let col = 0; col < size - 1; col++) {
            const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
            if (last === 4 || last === 0) points++;
          }
        }
        return points * PenaltyScores.N2;
      };
      exports.getPenaltyN3 = function getPenaltyN3(data) {
        const size = data.size;
        let points = 0;
        let bitsCol = 0;
        let bitsRow = 0;
        for (let row = 0; row < size; row++) {
          bitsCol = bitsRow = 0;
          for (let col = 0; col < size; col++) {
            bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
            if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
            bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
            if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
          }
        }
        return points * PenaltyScores.N3;
      };
      exports.getPenaltyN4 = function getPenaltyN4(data) {
        let darkCount = 0;
        const modulesCount = data.data.length;
        for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
        const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
        return k * PenaltyScores.N4;
      };
      function getMaskAt(maskPattern, i, j) {
        switch (maskPattern) {
          case exports.Patterns.PATTERN000:
            return (i + j) % 2 === 0;
          case exports.Patterns.PATTERN001:
            return i % 2 === 0;
          case exports.Patterns.PATTERN010:
            return j % 3 === 0;
          case exports.Patterns.PATTERN011:
            return (i + j) % 3 === 0;
          case exports.Patterns.PATTERN100:
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
          case exports.Patterns.PATTERN101:
            return i * j % 2 + i * j % 3 === 0;
          case exports.Patterns.PATTERN110:
            return (i * j % 2 + i * j % 3) % 2 === 0;
          case exports.Patterns.PATTERN111:
            return (i * j % 3 + (i + j) % 2) % 2 === 0;
          default:
            throw new Error("bad maskPattern:" + maskPattern);
        }
      }
      exports.applyMask = function applyMask(pattern, data) {
        const size = data.size;
        for (let col = 0; col < size; col++) {
          for (let row = 0; row < size; row++) {
            if (data.isReserved(row, col)) continue;
            data.xor(row, col, getMaskAt(pattern, row, col));
          }
        }
      };
      exports.getBestMask = function getBestMask(data, setupFormatFunc) {
        const numPatterns = Object.keys(exports.Patterns).length;
        let bestPattern = 0;
        let lowerPenalty = Infinity;
        for (let p = 0; p < numPatterns; p++) {
          setupFormatFunc(p);
          exports.applyMask(p, data);
          const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
          exports.applyMask(p, data);
          if (penalty < lowerPenalty) {
            lowerPenalty = penalty;
            bestPattern = p;
          }
        }
        return bestPattern;
      };
    }
  });

  // node_modules/qrcode/lib/core/error-correction-code.js
  var require_error_correction_code = __commonJS({
    "node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
      var ECLevel = require_error_correction_level();
      var EC_BLOCKS_TABLE = [
        // L  M  Q  H
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        1,
        2,
        2,
        4,
        1,
        2,
        4,
        4,
        2,
        4,
        4,
        4,
        2,
        4,
        6,
        5,
        2,
        4,
        6,
        6,
        2,
        5,
        8,
        8,
        4,
        5,
        8,
        8,
        4,
        5,
        8,
        11,
        4,
        8,
        10,
        11,
        4,
        9,
        12,
        16,
        4,
        9,
        16,
        16,
        6,
        10,
        12,
        18,
        6,
        10,
        17,
        16,
        6,
        11,
        16,
        19,
        6,
        13,
        18,
        21,
        7,
        14,
        21,
        25,
        8,
        16,
        20,
        25,
        8,
        17,
        23,
        25,
        9,
        17,
        23,
        34,
        9,
        18,
        25,
        30,
        10,
        20,
        27,
        32,
        12,
        21,
        29,
        35,
        12,
        23,
        34,
        37,
        12,
        25,
        34,
        40,
        13,
        26,
        35,
        42,
        14,
        28,
        38,
        45,
        15,
        29,
        40,
        48,
        16,
        31,
        43,
        51,
        17,
        33,
        45,
        54,
        18,
        35,
        48,
        57,
        19,
        37,
        51,
        60,
        19,
        38,
        53,
        63,
        20,
        40,
        56,
        66,
        21,
        43,
        59,
        70,
        22,
        45,
        62,
        74,
        24,
        47,
        65,
        77,
        25,
        49,
        68,
        81
      ];
      var EC_CODEWORDS_TABLE = [
        // L  M  Q  H
        7,
        10,
        13,
        17,
        10,
        16,
        22,
        28,
        15,
        26,
        36,
        44,
        20,
        36,
        52,
        64,
        26,
        48,
        72,
        88,
        36,
        64,
        96,
        112,
        40,
        72,
        108,
        130,
        48,
        88,
        132,
        156,
        60,
        110,
        160,
        192,
        72,
        130,
        192,
        224,
        80,
        150,
        224,
        264,
        96,
        176,
        260,
        308,
        104,
        198,
        288,
        352,
        120,
        216,
        320,
        384,
        132,
        240,
        360,
        432,
        144,
        280,
        408,
        480,
        168,
        308,
        448,
        532,
        180,
        338,
        504,
        588,
        196,
        364,
        546,
        650,
        224,
        416,
        600,
        700,
        224,
        442,
        644,
        750,
        252,
        476,
        690,
        816,
        270,
        504,
        750,
        900,
        300,
        560,
        810,
        960,
        312,
        588,
        870,
        1050,
        336,
        644,
        952,
        1110,
        360,
        700,
        1020,
        1200,
        390,
        728,
        1050,
        1260,
        420,
        784,
        1140,
        1350,
        450,
        812,
        1200,
        1440,
        480,
        868,
        1290,
        1530,
        510,
        924,
        1350,
        1620,
        540,
        980,
        1440,
        1710,
        570,
        1036,
        1530,
        1800,
        570,
        1064,
        1590,
        1890,
        600,
        1120,
        1680,
        1980,
        630,
        1204,
        1770,
        2100,
        660,
        1260,
        1860,
        2220,
        720,
        1316,
        1950,
        2310,
        750,
        1372,
        2040,
        2430
      ];
      exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
        switch (errorCorrectionLevel) {
          case ECLevel.L:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
          case ECLevel.M:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
          case ECLevel.Q:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
          case ECLevel.H:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
          default:
            return void 0;
        }
      };
      exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
        switch (errorCorrectionLevel) {
          case ECLevel.L:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
          case ECLevel.M:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
          case ECLevel.Q:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
          case ECLevel.H:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
          default:
            return void 0;
        }
      };
    }
  });

  // node_modules/qrcode/lib/core/galois-field.js
  var require_galois_field = __commonJS({
    "node_modules/qrcode/lib/core/galois-field.js"(exports) {
      var EXP_TABLE = new Uint8Array(512);
      var LOG_TABLE = new Uint8Array(256);
      (function initTables() {
        let x = 1;
        for (let i = 0; i < 255; i++) {
          EXP_TABLE[i] = x;
          LOG_TABLE[x] = i;
          x <<= 1;
          if (x & 256) {
            x ^= 285;
          }
        }
        for (let i = 255; i < 512; i++) {
          EXP_TABLE[i] = EXP_TABLE[i - 255];
        }
      })();
      exports.log = function log(n) {
        if (n < 1) throw new Error("log(" + n + ")");
        return LOG_TABLE[n];
      };
      exports.exp = function exp(n) {
        return EXP_TABLE[n];
      };
      exports.mul = function mul(x, y) {
        if (x === 0 || y === 0) return 0;
        return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
      };
    }
  });

  // node_modules/qrcode/lib/core/polynomial.js
  var require_polynomial = __commonJS({
    "node_modules/qrcode/lib/core/polynomial.js"(exports) {
      var GF = require_galois_field();
      exports.mul = function mul(p1, p2) {
        const coeff = new Uint8Array(p1.length + p2.length - 1);
        for (let i = 0; i < p1.length; i++) {
          for (let j = 0; j < p2.length; j++) {
            coeff[i + j] ^= GF.mul(p1[i], p2[j]);
          }
        }
        return coeff;
      };
      exports.mod = function mod(divident, divisor) {
        let result = new Uint8Array(divident);
        while (result.length - divisor.length >= 0) {
          const coeff = result[0];
          for (let i = 0; i < divisor.length; i++) {
            result[i] ^= GF.mul(divisor[i], coeff);
          }
          let offset = 0;
          while (offset < result.length && result[offset] === 0) offset++;
          result = result.slice(offset);
        }
        return result;
      };
      exports.generateECPolynomial = function generateECPolynomial(degree) {
        let poly = new Uint8Array([1]);
        for (let i = 0; i < degree; i++) {
          poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
        }
        return poly;
      };
    }
  });

  // node_modules/qrcode/lib/core/reed-solomon-encoder.js
  var require_reed_solomon_encoder = __commonJS({
    "node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
      var Polynomial = require_polynomial();
      function ReedSolomonEncoder(degree) {
        this.genPoly = void 0;
        this.degree = degree;
        if (this.degree) this.initialize(this.degree);
      }
      ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
        this.degree = degree;
        this.genPoly = Polynomial.generateECPolynomial(this.degree);
      };
      ReedSolomonEncoder.prototype.encode = function encode(data) {
        if (!this.genPoly) {
          throw new Error("Encoder not initialized");
        }
        const paddedData = new Uint8Array(data.length + this.degree);
        paddedData.set(data);
        const remainder = Polynomial.mod(paddedData, this.genPoly);
        const start = this.degree - remainder.length;
        if (start > 0) {
          const buff = new Uint8Array(this.degree);
          buff.set(remainder, start);
          return buff;
        }
        return remainder;
      };
      module.exports = ReedSolomonEncoder;
    }
  });

  // node_modules/qrcode/lib/core/version-check.js
  var require_version_check = __commonJS({
    "node_modules/qrcode/lib/core/version-check.js"(exports) {
      exports.isValid = function isValid(version) {
        return !isNaN(version) && version >= 1 && version <= 40;
      };
    }
  });

  // node_modules/qrcode/lib/core/regex.js
  var require_regex = __commonJS({
    "node_modules/qrcode/lib/core/regex.js"(exports) {
      var numeric = "[0-9]+";
      var alphanumeric = "[A-Z $%*+\\-./:]+";
      var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      kanji = kanji.replace(/u/g, "\\u");
      var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
      exports.KANJI = new RegExp(kanji, "g");
      exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
      exports.BYTE = new RegExp(byte, "g");
      exports.NUMERIC = new RegExp(numeric, "g");
      exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
      var TEST_KANJI = new RegExp("^" + kanji + "$");
      var TEST_NUMERIC = new RegExp("^" + numeric + "$");
      var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      exports.testKanji = function testKanji(str) {
        return TEST_KANJI.test(str);
      };
      exports.testNumeric = function testNumeric(str) {
        return TEST_NUMERIC.test(str);
      };
      exports.testAlphanumeric = function testAlphanumeric(str) {
        return TEST_ALPHANUMERIC.test(str);
      };
    }
  });

  // node_modules/qrcode/lib/core/mode.js
  var require_mode = __commonJS({
    "node_modules/qrcode/lib/core/mode.js"(exports) {
      var VersionCheck = require_version_check();
      var Regex = require_regex();
      exports.NUMERIC = {
        id: "Numeric",
        bit: 1 << 0,
        ccBits: [10, 12, 14]
      };
      exports.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 1 << 1,
        ccBits: [9, 11, 13]
      };
      exports.BYTE = {
        id: "Byte",
        bit: 1 << 2,
        ccBits: [8, 16, 16]
      };
      exports.KANJI = {
        id: "Kanji",
        bit: 1 << 3,
        ccBits: [8, 10, 12]
      };
      exports.MIXED = {
        bit: -1
      };
      exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
        if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
        if (!VersionCheck.isValid(version)) {
          throw new Error("Invalid version: " + version);
        }
        if (version >= 1 && version < 10) return mode.ccBits[0];
        else if (version < 27) return mode.ccBits[1];
        return mode.ccBits[2];
      };
      exports.getBestModeForData = function getBestModeForData(dataStr) {
        if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
        else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
        else if (Regex.testKanji(dataStr)) return exports.KANJI;
        else return exports.BYTE;
      };
      exports.toString = function toString(mode) {
        if (mode && mode.id) return mode.id;
        throw new Error("Invalid mode");
      };
      exports.isValid = function isValid(mode) {
        return mode && mode.bit && mode.ccBits;
      };
      function fromString(string) {
        if (typeof string !== "string") {
          throw new Error("Param is not a string");
        }
        const lcStr = string.toLowerCase();
        switch (lcStr) {
          case "numeric":
            return exports.NUMERIC;
          case "alphanumeric":
            return exports.ALPHANUMERIC;
          case "kanji":
            return exports.KANJI;
          case "byte":
            return exports.BYTE;
          default:
            throw new Error("Unknown mode: " + string);
        }
      }
      exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
          return value;
        }
        try {
          return fromString(value);
        } catch (e) {
          return defaultValue;
        }
      };
    }
  });

  // node_modules/qrcode/lib/core/version.js
  var require_version = __commonJS({
    "node_modules/qrcode/lib/core/version.js"(exports) {
      var Utils = require_utils();
      var ECCode = require_error_correction_code();
      var ECLevel = require_error_correction_level();
      var Mode = require_mode();
      var VersionCheck = require_version_check();
      var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
      var G18_BCH = Utils.getBCHDigit(G18);
      function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
        for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
          if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
            return currentVersion;
          }
        }
        return void 0;
      }
      function getReservedBitsCount(mode, version) {
        return Mode.getCharCountIndicator(mode, version) + 4;
      }
      function getTotalBitsFromDataArray(segments, version) {
        let totalBits = 0;
        segments.forEach(function(data) {
          const reservedBits = getReservedBitsCount(data.mode, version);
          totalBits += reservedBits + data.getBitsLength();
        });
        return totalBits;
      }
      function getBestVersionForMixedData(segments, errorCorrectionLevel) {
        for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
          const length = getTotalBitsFromDataArray(segments, currentVersion);
          if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
            return currentVersion;
          }
        }
        return void 0;
      }
      exports.from = function from(value, defaultValue) {
        if (VersionCheck.isValid(value)) {
          return parseInt(value, 10);
        }
        return defaultValue;
      };
      exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
        if (!VersionCheck.isValid(version)) {
          throw new Error("Invalid QR Code version");
        }
        if (typeof mode === "undefined") mode = Mode.BYTE;
        const totalCodewords = Utils.getSymbolTotalCodewords(version);
        const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
        if (mode === Mode.MIXED) return dataTotalCodewordsBits;
        const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
        switch (mode) {
          case Mode.NUMERIC:
            return Math.floor(usableBits / 10 * 3);
          case Mode.ALPHANUMERIC:
            return Math.floor(usableBits / 11 * 2);
          case Mode.KANJI:
            return Math.floor(usableBits / 13);
          case Mode.BYTE:
          default:
            return Math.floor(usableBits / 8);
        }
      };
      exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
        let seg;
        const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
        if (Array.isArray(data)) {
          if (data.length > 1) {
            return getBestVersionForMixedData(data, ecl);
          }
          if (data.length === 0) {
            return 1;
          }
          seg = data[0];
        } else {
          seg = data;
        }
        return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
      };
      exports.getEncodedBits = function getEncodedBits(version) {
        if (!VersionCheck.isValid(version) || version < 7) {
          throw new Error("Invalid QR Code version");
        }
        let d = version << 12;
        while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
          d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
        }
        return version << 12 | d;
      };
    }
  });

  // node_modules/qrcode/lib/core/format-info.js
  var require_format_info = __commonJS({
    "node_modules/qrcode/lib/core/format-info.js"(exports) {
      var Utils = require_utils();
      var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
      var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
      var G15_BCH = Utils.getBCHDigit(G15);
      exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
        const data = errorCorrectionLevel.bit << 3 | mask;
        let d = data << 10;
        while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
          d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
        }
        return (data << 10 | d) ^ G15_MASK;
      };
    }
  });

  // node_modules/qrcode/lib/core/numeric-data.js
  var require_numeric_data = __commonJS({
    "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
      var Mode = require_mode();
      function NumericData(data) {
        this.mode = Mode.NUMERIC;
        this.data = data.toString();
      }
      NumericData.getBitsLength = function getBitsLength(length) {
        return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
      };
      NumericData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      NumericData.prototype.getBitsLength = function getBitsLength() {
        return NumericData.getBitsLength(this.data.length);
      };
      NumericData.prototype.write = function write(bitBuffer) {
        let i, group, value;
        for (i = 0; i + 3 <= this.data.length; i += 3) {
          group = this.data.substr(i, 3);
          value = parseInt(group, 10);
          bitBuffer.put(value, 10);
        }
        const remainingNum = this.data.length - i;
        if (remainingNum > 0) {
          group = this.data.substr(i);
          value = parseInt(group, 10);
          bitBuffer.put(value, remainingNum * 3 + 1);
        }
      };
      module.exports = NumericData;
    }
  });

  // node_modules/qrcode/lib/core/alphanumeric-data.js
  var require_alphanumeric_data = __commonJS({
    "node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
      var Mode = require_mode();
      var ALPHA_NUM_CHARS = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        " ",
        "$",
        "%",
        "*",
        "+",
        "-",
        ".",
        "/",
        ":"
      ];
      function AlphanumericData(data) {
        this.mode = Mode.ALPHANUMERIC;
        this.data = data;
      }
      AlphanumericData.getBitsLength = function getBitsLength(length) {
        return 11 * Math.floor(length / 2) + 6 * (length % 2);
      };
      AlphanumericData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      AlphanumericData.prototype.getBitsLength = function getBitsLength() {
        return AlphanumericData.getBitsLength(this.data.length);
      };
      AlphanumericData.prototype.write = function write(bitBuffer) {
        let i;
        for (i = 0; i + 2 <= this.data.length; i += 2) {
          let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
          value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
          bitBuffer.put(value, 11);
        }
        if (this.data.length % 2) {
          bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
        }
      };
      module.exports = AlphanumericData;
    }
  });

  // node_modules/qrcode/lib/core/byte-data.js
  var require_byte_data = __commonJS({
    "node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
      var Mode = require_mode();
      function ByteData(data) {
        this.mode = Mode.BYTE;
        if (typeof data === "string") {
          this.data = new TextEncoder().encode(data);
        } else {
          this.data = new Uint8Array(data);
        }
      }
      ByteData.getBitsLength = function getBitsLength(length) {
        return length * 8;
      };
      ByteData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      ByteData.prototype.getBitsLength = function getBitsLength() {
        return ByteData.getBitsLength(this.data.length);
      };
      ByteData.prototype.write = function(bitBuffer) {
        for (let i = 0, l = this.data.length; i < l; i++) {
          bitBuffer.put(this.data[i], 8);
        }
      };
      module.exports = ByteData;
    }
  });

  // node_modules/qrcode/lib/core/kanji-data.js
  var require_kanji_data = __commonJS({
    "node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
      var Mode = require_mode();
      var Utils = require_utils();
      function KanjiData(data) {
        this.mode = Mode.KANJI;
        this.data = data;
      }
      KanjiData.getBitsLength = function getBitsLength(length) {
        return length * 13;
      };
      KanjiData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      KanjiData.prototype.getBitsLength = function getBitsLength() {
        return KanjiData.getBitsLength(this.data.length);
      };
      KanjiData.prototype.write = function(bitBuffer) {
        let i;
        for (i = 0; i < this.data.length; i++) {
          let value = Utils.toSJIS(this.data[i]);
          if (value >= 33088 && value <= 40956) {
            value -= 33088;
          } else if (value >= 57408 && value <= 60351) {
            value -= 49472;
          } else {
            throw new Error(
              "Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8"
            );
          }
          value = (value >>> 8 & 255) * 192 + (value & 255);
          bitBuffer.put(value, 13);
        }
      };
      module.exports = KanjiData;
    }
  });

  // node_modules/dijkstrajs/dijkstra.js
  var require_dijkstra = __commonJS({
    "node_modules/dijkstrajs/dijkstra.js"(exports, module) {
      "use strict";
      var dijkstra = {
        single_source_shortest_paths: function(graph, s, d) {
          var predecessors = {};
          var costs = {};
          costs[s] = 0;
          var open = dijkstra.PriorityQueue.make();
          open.push(s, 0);
          var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
          while (!open.empty()) {
            closest = open.pop();
            u = closest.value;
            cost_of_s_to_u = closest.cost;
            adjacent_nodes = graph[u] || {};
            for (v in adjacent_nodes) {
              if (adjacent_nodes.hasOwnProperty(v)) {
                cost_of_e = adjacent_nodes[v];
                cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
                cost_of_s_to_v = costs[v];
                first_visit = typeof costs[v] === "undefined";
                if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                  costs[v] = cost_of_s_to_u_plus_cost_of_e;
                  open.push(v, cost_of_s_to_u_plus_cost_of_e);
                  predecessors[v] = u;
                }
              }
            }
          }
          if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
            var msg = ["Could not find a path from ", s, " to ", d, "."].join("");
            throw new Error(msg);
          }
          return predecessors;
        },
        extract_shortest_path_from_predecessor_list: function(predecessors, d) {
          var nodes = [];
          var u = d;
          var predecessor;
          while (u) {
            nodes.push(u);
            predecessor = predecessors[u];
            u = predecessors[u];
          }
          nodes.reverse();
          return nodes;
        },
        find_path: function(graph, s, d) {
          var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
          return dijkstra.extract_shortest_path_from_predecessor_list(
            predecessors,
            d
          );
        },
        /**
         * A very naive priority queue implementation.
         */
        PriorityQueue: {
          make: function(opts) {
            var T = dijkstra.PriorityQueue, t = {}, key2;
            opts = opts || {};
            for (key2 in T) {
              if (T.hasOwnProperty(key2)) {
                t[key2] = T[key2];
              }
            }
            t.queue = [];
            t.sorter = opts.sorter || T.default_sorter;
            return t;
          },
          default_sorter: function(a, b) {
            return a.cost - b.cost;
          },
          /**
           * Add a new item to the queue and ensure the highest priority element
           * is at the front of the queue.
           */
          push: function(value, cost) {
            var item = { value, cost };
            this.queue.push(item);
            this.queue.sort(this.sorter);
          },
          /**
           * Return the highest priority element in the queue.
           */
          pop: function() {
            return this.queue.shift();
          },
          empty: function() {
            return this.queue.length === 0;
          }
        }
      };
      if (typeof module !== "undefined") {
        module.exports = dijkstra;
      }
    }
  });

  // node_modules/qrcode/lib/core/segments.js
  var require_segments = __commonJS({
    "node_modules/qrcode/lib/core/segments.js"(exports) {
      var Mode = require_mode();
      var NumericData = require_numeric_data();
      var AlphanumericData = require_alphanumeric_data();
      var ByteData = require_byte_data();
      var KanjiData = require_kanji_data();
      var Regex = require_regex();
      var Utils = require_utils();
      var dijkstra = require_dijkstra();
      function getStringByteLength(str) {
        return unescape(encodeURIComponent(str)).length;
      }
      function getSegments(regex, mode, str) {
        const segments = [];
        let result;
        while ((result = regex.exec(str)) !== null) {
          segments.push({
            data: result[0],
            index: result.index,
            mode,
            length: result[0].length
          });
        }
        return segments;
      }
      function getSegmentsFromString(dataStr) {
        const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
        const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
        let byteSegs;
        let kanjiSegs;
        if (Utils.isKanjiModeEnabled()) {
          byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
          kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
        } else {
          byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
          kanjiSegs = [];
        }
        const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
        return segs.sort(function(s1, s2) {
          return s1.index - s2.index;
        }).map(function(obj) {
          return {
            data: obj.data,
            mode: obj.mode,
            length: obj.length
          };
        });
      }
      function getSegmentBitsLength(length, mode) {
        switch (mode) {
          case Mode.NUMERIC:
            return NumericData.getBitsLength(length);
          case Mode.ALPHANUMERIC:
            return AlphanumericData.getBitsLength(length);
          case Mode.KANJI:
            return KanjiData.getBitsLength(length);
          case Mode.BYTE:
            return ByteData.getBitsLength(length);
        }
      }
      function mergeSegments(segs) {
        return segs.reduce(function(acc, curr) {
          const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
          if (prevSeg && prevSeg.mode === curr.mode) {
            acc[acc.length - 1].data += curr.data;
            return acc;
          }
          acc.push(curr);
          return acc;
        }, []);
      }
      function buildNodes(segs) {
        const nodes = [];
        for (let i = 0; i < segs.length; i++) {
          const seg = segs[i];
          switch (seg.mode) {
            case Mode.NUMERIC:
              nodes.push([
                seg,
                { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
                { data: seg.data, mode: Mode.BYTE, length: seg.length }
              ]);
              break;
            case Mode.ALPHANUMERIC:
              nodes.push([
                seg,
                { data: seg.data, mode: Mode.BYTE, length: seg.length }
              ]);
              break;
            case Mode.KANJI:
              nodes.push([
                seg,
                { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
              ]);
              break;
            case Mode.BYTE:
              nodes.push([
                { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
              ]);
          }
        }
        return nodes;
      }
      function buildGraph(nodes, version) {
        const table = {};
        const graph = { start: {} };
        let prevNodeIds = ["start"];
        for (let i = 0; i < nodes.length; i++) {
          const nodeGroup = nodes[i];
          const currentNodeIds = [];
          for (let j = 0; j < nodeGroup.length; j++) {
            const node = nodeGroup[j];
            const key2 = "" + i + j;
            currentNodeIds.push(key2);
            table[key2] = { node, lastCount: 0 };
            graph[key2] = {};
            for (let n = 0; n < prevNodeIds.length; n++) {
              const prevNodeId = prevNodeIds[n];
              if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                graph[prevNodeId][key2] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                table[prevNodeId].lastCount += node.length;
              } else {
                if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
                graph[prevNodeId][key2] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
              }
            }
          }
          prevNodeIds = currentNodeIds;
        }
        for (let n = 0; n < prevNodeIds.length; n++) {
          graph[prevNodeIds[n]].end = 0;
        }
        return { map: graph, table };
      }
      function buildSingleSegment(data, modesHint) {
        let mode;
        const bestMode = Mode.getBestModeForData(data);
        mode = Mode.from(modesHint, bestMode);
        if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
          throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
        }
        if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
          mode = Mode.BYTE;
        }
        switch (mode) {
          case Mode.NUMERIC:
            return new NumericData(data);
          case Mode.ALPHANUMERIC:
            return new AlphanumericData(data);
          case Mode.KANJI:
            return new KanjiData(data);
          case Mode.BYTE:
            return new ByteData(data);
        }
      }
      exports.fromArray = function fromArray(array) {
        return array.reduce(function(acc, seg) {
          if (typeof seg === "string") {
            acc.push(buildSingleSegment(seg, null));
          } else if (seg.data) {
            acc.push(buildSingleSegment(seg.data, seg.mode));
          }
          return acc;
        }, []);
      };
      exports.fromString = function fromString(data, version) {
        const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
        const nodes = buildNodes(segs);
        const graph = buildGraph(nodes, version);
        const path = dijkstra.find_path(graph.map, "start", "end");
        const optimizedSegs = [];
        for (let i = 1; i < path.length - 1; i++) {
          optimizedSegs.push(graph.table[path[i]].node);
        }
        return exports.fromArray(mergeSegments(optimizedSegs));
      };
      exports.rawSplit = function rawSplit(data) {
        return exports.fromArray(
          getSegmentsFromString(data, Utils.isKanjiModeEnabled())
        );
      };
    }
  });

  // node_modules/qrcode/lib/core/qrcode.js
  var require_qrcode = __commonJS({
    "node_modules/qrcode/lib/core/qrcode.js"(exports) {
      var Utils = require_utils();
      var ECLevel = require_error_correction_level();
      var BitBuffer = require_bit_buffer();
      var BitMatrix = require_bit_matrix();
      var AlignmentPattern = require_alignment_pattern();
      var FinderPattern = require_finder_pattern();
      var MaskPattern = require_mask_pattern();
      var ECCode = require_error_correction_code();
      var ReedSolomonEncoder = require_reed_solomon_encoder();
      var Version = require_version();
      var FormatInfo = require_format_info();
      var Mode = require_mode();
      var Segments = require_segments();
      function setupFinderPattern(matrix, version) {
        const size = matrix.size;
        const pos = FinderPattern.getPositions(version);
        for (let i = 0; i < pos.length; i++) {
          const row = pos[i][0];
          const col = pos[i][1];
          for (let r = -1; r <= 7; r++) {
            if (row + r <= -1 || size <= row + r) continue;
            for (let c = -1; c <= 7; c++) {
              if (col + c <= -1 || size <= col + c) continue;
              if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
                matrix.set(row + r, col + c, true, true);
              } else {
                matrix.set(row + r, col + c, false, true);
              }
            }
          }
        }
      }
      function setupTimingPattern(matrix) {
        const size = matrix.size;
        for (let r = 8; r < size - 8; r++) {
          const value = r % 2 === 0;
          matrix.set(r, 6, value, true);
          matrix.set(6, r, value, true);
        }
      }
      function setupAlignmentPattern(matrix, version) {
        const pos = AlignmentPattern.getPositions(version);
        for (let i = 0; i < pos.length; i++) {
          const row = pos[i][0];
          const col = pos[i][1];
          for (let r = -2; r <= 2; r++) {
            for (let c = -2; c <= 2; c++) {
              if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
                matrix.set(row + r, col + c, true, true);
              } else {
                matrix.set(row + r, col + c, false, true);
              }
            }
          }
        }
      }
      function setupVersionInfo(matrix, version) {
        const size = matrix.size;
        const bits = Version.getEncodedBits(version);
        let row, col, mod;
        for (let i = 0; i < 18; i++) {
          row = Math.floor(i / 3);
          col = i % 3 + size - 8 - 3;
          mod = (bits >> i & 1) === 1;
          matrix.set(row, col, mod, true);
          matrix.set(col, row, mod, true);
        }
      }
      function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
        const size = matrix.size;
        const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
        let i, mod;
        for (i = 0; i < 15; i++) {
          mod = (bits >> i & 1) === 1;
          if (i < 6) {
            matrix.set(i, 8, mod, true);
          } else if (i < 8) {
            matrix.set(i + 1, 8, mod, true);
          } else {
            matrix.set(size - 15 + i, 8, mod, true);
          }
          if (i < 8) {
            matrix.set(8, size - i - 1, mod, true);
          } else if (i < 9) {
            matrix.set(8, 15 - i - 1 + 1, mod, true);
          } else {
            matrix.set(8, 15 - i - 1, mod, true);
          }
        }
        matrix.set(size - 8, 8, 1, true);
      }
      function setupData(matrix, data) {
        const size = matrix.size;
        let inc = -1;
        let row = size - 1;
        let bitIndex = 7;
        let byteIndex = 0;
        for (let col = size - 1; col > 0; col -= 2) {
          if (col === 6) col--;
          while (true) {
            for (let c = 0; c < 2; c++) {
              if (!matrix.isReserved(row, col - c)) {
                let dark = false;
                if (byteIndex < data.length) {
                  dark = (data[byteIndex] >>> bitIndex & 1) === 1;
                }
                matrix.set(row, col - c, dark);
                bitIndex--;
                if (bitIndex === -1) {
                  byteIndex++;
                  bitIndex = 7;
                }
              }
            }
            row += inc;
            if (row < 0 || size <= row) {
              row -= inc;
              inc = -inc;
              break;
            }
          }
        }
      }
      function createData(version, errorCorrectionLevel, segments) {
        const buffer = new BitBuffer();
        segments.forEach(function(data) {
          buffer.put(data.mode.bit, 4);
          buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
          data.write(buffer);
        });
        const totalCodewords = Utils.getSymbolTotalCodewords(version);
        const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
        if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
          buffer.put(0, 4);
        }
        while (buffer.getLengthInBits() % 8 !== 0) {
          buffer.putBit(0);
        }
        const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
        for (let i = 0; i < remainingByte; i++) {
          buffer.put(i % 2 ? 17 : 236, 8);
        }
        return createCodewords(buffer, version, errorCorrectionLevel);
      }
      function createCodewords(bitBuffer, version, errorCorrectionLevel) {
        const totalCodewords = Utils.getSymbolTotalCodewords(version);
        const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        const dataTotalCodewords = totalCodewords - ecTotalCodewords;
        const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
        const blocksInGroup2 = totalCodewords % ecTotalBlocks;
        const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
        const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
        const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
        const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
        const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
        const rs = new ReedSolomonEncoder(ecCount);
        let offset = 0;
        const dcData = new Array(ecTotalBlocks);
        const ecData = new Array(ecTotalBlocks);
        let maxDataSize = 0;
        const buffer = new Uint8Array(bitBuffer.buffer);
        for (let b = 0; b < ecTotalBlocks; b++) {
          const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
          dcData[b] = buffer.slice(offset, offset + dataSize);
          ecData[b] = rs.encode(dcData[b]);
          offset += dataSize;
          maxDataSize = Math.max(maxDataSize, dataSize);
        }
        const data = new Uint8Array(totalCodewords);
        let index = 0;
        let i, r;
        for (i = 0; i < maxDataSize; i++) {
          for (r = 0; r < ecTotalBlocks; r++) {
            if (i < dcData[r].length) {
              data[index++] = dcData[r][i];
            }
          }
        }
        for (i = 0; i < ecCount; i++) {
          for (r = 0; r < ecTotalBlocks; r++) {
            data[index++] = ecData[r][i];
          }
        }
        return data;
      }
      function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
        let segments;
        if (Array.isArray(data)) {
          segments = Segments.fromArray(data);
        } else if (typeof data === "string") {
          let estimatedVersion = version;
          if (!estimatedVersion) {
            const rawSegments = Segments.rawSplit(data);
            estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
          }
          segments = Segments.fromString(data, estimatedVersion || 40);
        } else {
          throw new Error("Invalid data");
        }
        const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
        if (!bestVersion) {
          throw new Error("The amount of data is too big to be stored in a QR Code");
        }
        if (!version) {
          version = bestVersion;
        } else if (version < bestVersion) {
          throw new Error(
            "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
          );
        }
        const dataBits = createData(version, errorCorrectionLevel, segments);
        const moduleCount = Utils.getSymbolSize(version);
        const modules = new BitMatrix(moduleCount);
        setupFinderPattern(modules, version);
        setupTimingPattern(modules);
        setupAlignmentPattern(modules, version);
        setupFormatInfo(modules, errorCorrectionLevel, 0);
        if (version >= 7) {
          setupVersionInfo(modules, version);
        }
        setupData(modules, dataBits);
        if (isNaN(maskPattern)) {
          maskPattern = MaskPattern.getBestMask(
            modules,
            setupFormatInfo.bind(null, modules, errorCorrectionLevel)
          );
        }
        MaskPattern.applyMask(maskPattern, modules);
        setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
        return {
          modules,
          version,
          errorCorrectionLevel,
          maskPattern,
          segments
        };
      }
      exports.create = function create(data, options) {
        if (typeof data === "undefined" || data === "") {
          throw new Error("No input text");
        }
        let errorCorrectionLevel = ECLevel.M;
        let version;
        let mask;
        if (typeof options !== "undefined") {
          errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
          version = Version.from(options.version);
          mask = MaskPattern.from(options.maskPattern);
          if (options.toSJISFunc) {
            Utils.setToSJISFunction(options.toSJISFunc);
          }
        }
        return createSymbol(data, version, errorCorrectionLevel, mask);
      };
    }
  });

  // node_modules/qrcode/lib/renderer/utils.js
  var require_utils2 = __commonJS({
    "node_modules/qrcode/lib/renderer/utils.js"(exports) {
      function hex2rgba(hex) {
        if (typeof hex === "number") {
          hex = hex.toString();
        }
        if (typeof hex !== "string") {
          throw new Error("Color should be defined as hex string");
        }
        let hexCode = hex.slice().replace("#", "").split("");
        if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
          throw new Error("Invalid hex color: " + hex);
        }
        if (hexCode.length === 3 || hexCode.length === 4) {
          hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
            return [c, c];
          }));
        }
        if (hexCode.length === 6) hexCode.push("F", "F");
        const hexValue = parseInt(hexCode.join(""), 16);
        return {
          r: hexValue >> 24 & 255,
          g: hexValue >> 16 & 255,
          b: hexValue >> 8 & 255,
          a: hexValue & 255,
          hex: "#" + hexCode.slice(0, 6).join("")
        };
      }
      exports.getOptions = function getOptions(options) {
        if (!options) options = {};
        if (!options.color) options.color = {};
        const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
        const width = options.width && options.width >= 21 ? options.width : void 0;
        const scale = options.scale || 4;
        return {
          width,
          scale: width ? 4 : scale,
          margin,
          color: {
            dark: hex2rgba(options.color.dark || "#000000ff"),
            light: hex2rgba(options.color.light || "#ffffffff")
          },
          type: options.type,
          rendererOpts: options.rendererOpts || {}
        };
      };
      exports.getScale = function getScale(qrSize, opts) {
        return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
      };
      exports.getImageWidth = function getImageWidth(qrSize, opts) {
        const scale = exports.getScale(qrSize, opts);
        return Math.floor((qrSize + opts.margin * 2) * scale);
      };
      exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
        const size = qr.modules.size;
        const data = qr.modules.data;
        const scale = exports.getScale(size, opts);
        const symbolSize = Math.floor((size + opts.margin * 2) * scale);
        const scaledMargin = opts.margin * scale;
        const palette = [opts.color.light, opts.color.dark];
        for (let i = 0; i < symbolSize; i++) {
          for (let j = 0; j < symbolSize; j++) {
            let posDst = (i * symbolSize + j) * 4;
            let pxColor = opts.color.light;
            if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
              const iSrc = Math.floor((i - scaledMargin) / scale);
              const jSrc = Math.floor((j - scaledMargin) / scale);
              pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
            }
            imgData[posDst++] = pxColor.r;
            imgData[posDst++] = pxColor.g;
            imgData[posDst++] = pxColor.b;
            imgData[posDst] = pxColor.a;
          }
        }
      };
    }
  });

  // node_modules/qrcode/lib/renderer/canvas.js
  var require_canvas = __commonJS({
    "node_modules/qrcode/lib/renderer/canvas.js"(exports) {
      var Utils = require_utils2();
      function clearCanvas(ctx, canvas, size) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (!canvas.style) canvas.style = {};
        canvas.height = size;
        canvas.width = size;
        canvas.style.height = size + "px";
        canvas.style.width = size + "px";
      }
      function getCanvasElement() {
        try {
          return document.createElement("canvas");
        } catch (e) {
          throw new Error("You need to specify a canvas element");
        }
      }
      exports.render = function render(qrData, canvas, options) {
        let opts = options;
        let canvasEl = canvas;
        if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
          opts = canvas;
          canvas = void 0;
        }
        if (!canvas) {
          canvasEl = getCanvasElement();
        }
        opts = Utils.getOptions(opts);
        const size = Utils.getImageWidth(qrData.modules.size, opts);
        const ctx = canvasEl.getContext("2d");
        const image = ctx.createImageData(size, size);
        Utils.qrToImageData(image.data, qrData, opts);
        clearCanvas(ctx, canvasEl, size);
        ctx.putImageData(image, 0, 0);
        return canvasEl;
      };
      exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
        let opts = options;
        if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
          opts = canvas;
          canvas = void 0;
        }
        if (!opts) opts = {};
        const canvasEl = exports.render(qrData, canvas, opts);
        const type = opts.type || "image/png";
        const rendererOpts = opts.rendererOpts || {};
        return canvasEl.toDataURL(type, rendererOpts.quality);
      };
    }
  });

  // node_modules/qrcode/lib/renderer/svg-tag.js
  var require_svg_tag = __commonJS({
    "node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
      var Utils = require_utils2();
      function getColorAttrib(color, attrib) {
        const alpha = color.a / 255;
        const str = attrib + '="' + color.hex + '"';
        return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
      }
      function svgCmd(cmd, x, y) {
        let str = cmd + x;
        if (typeof y !== "undefined") str += " " + y;
        return str;
      }
      function qrToPath(data, size, margin) {
        let path = "";
        let moveBy = 0;
        let newRow = false;
        let lineLength = 0;
        for (let i = 0; i < data.length; i++) {
          const col = Math.floor(i % size);
          const row = Math.floor(i / size);
          if (!col && !newRow) newRow = true;
          if (data[i]) {
            lineLength++;
            if (!(i > 0 && col > 0 && data[i - 1])) {
              path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
              moveBy = 0;
              newRow = false;
            }
            if (!(col + 1 < size && data[i + 1])) {
              path += svgCmd("h", lineLength);
              lineLength = 0;
            }
          } else {
            moveBy++;
          }
        }
        return path;
      }
      exports.render = function render(qrData, options, cb) {
        const opts = Utils.getOptions(options);
        const size = qrData.modules.size;
        const data = qrData.modules.data;
        const qrcodesize = size + opts.margin * 2;
        const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
        const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
        const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
        const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
        const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
        if (typeof cb === "function") {
          cb(null, svgTag);
        }
        return svgTag;
      };
    }
  });

  // node_modules/qrcode/lib/browser.js
  var require_browser = __commonJS({
    "node_modules/qrcode/lib/browser.js"(exports) {
      var canPromise = require_can_promise();
      var QRCode2 = require_qrcode();
      var CanvasRenderer = require_canvas();
      var SvgRenderer = require_svg_tag();
      function renderCanvas(renderFunc, canvas, text2, opts, cb) {
        const args = [].slice.call(arguments, 1);
        const argsNum = args.length;
        const isLastArgCb = typeof args[argsNum - 1] === "function";
        if (!isLastArgCb && !canPromise()) {
          throw new Error("Callback required as last argument");
        }
        if (isLastArgCb) {
          if (argsNum < 2) {
            throw new Error("Too few arguments provided");
          }
          if (argsNum === 2) {
            cb = text2;
            text2 = canvas;
            canvas = opts = void 0;
          } else if (argsNum === 3) {
            if (canvas.getContext && typeof cb === "undefined") {
              cb = opts;
              opts = void 0;
            } else {
              cb = opts;
              opts = text2;
              text2 = canvas;
              canvas = void 0;
            }
          }
        } else {
          if (argsNum < 1) {
            throw new Error("Too few arguments provided");
          }
          if (argsNum === 1) {
            text2 = canvas;
            canvas = opts = void 0;
          } else if (argsNum === 2 && !canvas.getContext) {
            opts = text2;
            text2 = canvas;
            canvas = void 0;
          }
          return new Promise(function(resolve, reject) {
            try {
              const data = QRCode2.create(text2, opts);
              resolve(renderFunc(data, canvas, opts));
            } catch (e) {
              reject(e);
            }
          });
        }
        try {
          const data = QRCode2.create(text2, opts);
          cb(null, renderFunc(data, canvas, opts));
        } catch (e) {
          cb(e);
        }
      }
      exports.create = QRCode2.create;
      exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
      exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
      exports.toString = renderCanvas.bind(null, function(data, _, opts) {
        return SvgRenderer.render(data, opts);
      });
    }
  });

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js"(exports, module) {
      (function(global, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
          };
        } else {
          factory(global);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        };
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction2(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document2 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i in preservedScriptAttributes) {
              val = node[i] || node.getAttribute && node.getAttribute(i);
              if (val) {
                script.setAttribute(i, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery = function(selector, context) {
          return new jQuery.fn.init(selector, context);
        };
        jQuery.fn = jQuery.prototype = {
          // The current version of jQuery being used
          jquery: version,
          constructor: jQuery,
          // The default length of a jQuery object is 0
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          // Get the Nth element in the matched element set OR
          // Get the whole matched element set as a clean array
          get: function(num) {
            if (num == null) {
              return slice.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          // Take an array of elements and push it onto the stack
          // (returning the new matched element set)
          pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          // Execute a callback for every element in the matched set.
          each: function(callback) {
            return jQuery.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
              return callback.call(elem, i, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return (i + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return i % 2;
            }));
          },
          eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          // For internal use only.
          // Behaves like an Array's method, not like a jQuery method.
          push,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
          }
          if (typeof target !== "object" && !isFunction(target)) {
            target = {};
          }
          if (i === length) {
            target = this;
            i--;
          }
          for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery.extend({
          // Unique for each copy of jQuery on the page
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          // Assume jQuery is ready without the ready module
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          // Evaluates a script in a provided context; falls back to the global one
          // if not specified.
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i < length; i++) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            } else {
              for (i in obj) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          // Retrieve the text value of an array of DOM nodes
          text: function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i++]) {
                ret += jQuery.text(node);
              }
            }
            if (nodeType === 1 || nodeType === 11) {
              return elem.textContent;
            }
            if (nodeType === 9) {
              return elem.documentElement.textContent;
            }
            if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          },
          // results is for internal usage only
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike(Object(arr2))) {
                jQuery.merge(
                  ret,
                  typeof arr2 === "string" ? [arr2] : arr2
                );
              } else {
                push.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
          },
          isXMLDoc: function(elem) {
            var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
          },
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          merge: function(first2, second) {
            var len = +second.length, j = 0, i = first2.length;
            for (; j < len; j++) {
              first2[i++] = second[j];
            }
            first2.length = i;
            return first2;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (; i < length; i++) {
              callbackInverse = !callback(elems[i], i);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i]);
              }
            }
            return matches;
          },
          // arg is for internal usage only
          map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i < length; i++) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i in elems) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          // A global GUID counter for objects
          guid: 1,
          // jQuery.support is not used in Core but other projects attach their
          // properties to it so it needs to exist.
          support
        });
        if (typeof Symbol === "function") {
          jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
          function(_i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
          }
        );
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var pop = arr.pop;
        var sort = arr.sort;
        var splice = arr.splice;
        var whitespace = "[\\x20\\t\\r\\n\\f]";
        var rtrimCSS = new RegExp(
          "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
          "g"
        );
        jQuery.contains = function(a, b) {
          var bup = b && b.parentNode;
          return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
          // IE doesn't have `contains` on SVG.
          (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
        };
        var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function fcssescape(ch, asCodePoint) {
          if (asCodePoint) {
            if (ch === "\0") {
              return "\uFFFD";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
          return "\\" + ch;
        }
        jQuery.escapeSelector = function(sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        };
        var preferredDoc = document2, pushNative = push;
        (function() {
          var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
            }
            return 0;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
          "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + identifier + ")"),
            CLASS: new RegExp("^\\.(" + identifier + ")"),
            TAG: new RegExp("^(" + identifier + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
          }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            if (nonHex) {
              return nonHex;
            }
            return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(
            function(elem) {
              return elem.disabled === true && nodeName(elem, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
          );
          function safeActiveElement() {
            try {
              return document3.activeElement;
            } catch (err) {
            }
          }
          try {
            push2.apply(
              arr = slice.call(preferredDoc.childNodes),
              preferredDoc.childNodes
            );
            arr[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push2 = {
              apply: function(target, els) {
                pushNative.apply(target, slice.call(els));
              },
              call: function(target) {
                pushNative.apply(target, slice.call(arguments, 1));
              }
            };
          }
          function find(selector, context, results, seed) {
            var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m) {
                          push2.call(results, elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                        push2.call(results, elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m = match[3]) && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }
                if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    if (newContext != context || !support.scope) {
                      if (nid = context.getAttribute("id")) {
                        nid = jQuery.escapeSelector(nid);
                      } else {
                        context.setAttribute("id", nid = expando);
                      }
                    }
                    groups = tokenize(selector);
                    i2 = groups.length;
                    while (i2--) {
                      groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    push2.apply(
                      results,
                      newContext.querySelectorAll(newSelector)
                    );
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache(key2, value) {
              if (keys.push(key2 + " ") > Expr.cacheLength) {
                delete cache[keys.shift()];
              }
              return cache[key2 + " "] = value;
            }
            return cache;
          }
          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }
          function assert(fn) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn(el);
            } catch (e) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function createInputPseudo(type) {
            return function(elem) {
              return nodeName(elem, "input") && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                  elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
                while (i2--) {
                  if (seed[j = matchIndexes[i2]]) {
                    seed[j] = !(matches2[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          function setDocument(node) {
            var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            documentElement2 = document3.documentElement;
            documentIsHTML = !jQuery.isXMLDoc(document3);
            matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
            if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
              subWindow.addEventListener("unload", unloadHandler);
            }
            support.getById = assert(function(el) {
              documentElement2.appendChild(el).id = jQuery.expando;
              return !document3.getElementsByName || !document3.getElementsByName(jQuery.expando).length;
            });
            support.disconnectedMatch = assert(function(el) {
              return matches.call(el, "*");
            });
            support.scope = assert(function() {
              return document3.querySelectorAll(":scope");
            });
            support.cssHas = assert(function() {
              try {
                document3.querySelector(":has(*,:jqfake)");
                return false;
              } catch (e) {
                return true;
              }
            });
            if (support.getById) {
              Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find.ID = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find.ID = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i2, elems, elem = context.getElementById(id);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id);
                    i2 = 0;
                    while (elem = elems[i2++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find.TAG = function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else {
                return context.querySelectorAll(tag);
              }
            };
            Expr.find.CLASS = function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyQSA = [];
            assert(function(el) {
              var input;
              documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
              if (!el.querySelectorAll("[selected]").length) {
                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
              }
              if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                rbuggyQSA.push("~=");
              }
              if (!el.querySelectorAll("a#" + expando + "+*").length) {
                rbuggyQSA.push(".#.+[+~]");
              }
              if (!el.querySelectorAll(":checked").length) {
                rbuggyQSA.push(":checked");
              }
              input = document3.createElement("input");
              input.setAttribute("type", "hidden");
              el.appendChild(input).setAttribute("name", "D");
              documentElement2.appendChild(el).disabled = true;
              if (el.querySelectorAll(":disabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              input = document3.createElement("input");
              input.setAttribute("name", "");
              el.appendChild(input);
              if (!el.querySelectorAll("[name='']").length) {
                rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
              }
            });
            if (!support.cssHas) {
              rbuggyQSA.push(":has");
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            sortOrder = function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
                // Otherwise we know they are disconnected
                1
              );
              if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                  return -1;
                }
                if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                  return 1;
                }
                return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
              }
              return compare & 4 ? -1 : 1;
            };
            return document3;
          }
          find.matches = function(expr, elements) {
            return find(expr, null, null, elements);
          };
          find.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return find(expr, document3, null, [elem]).length > 0;
          };
          find.contains = function(context, elem) {
            if ((context.ownerDocument || context) != document3) {
              setDocument(context);
            }
            return jQuery.contains(context, elem);
          };
          find.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document3) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            if (val !== void 0) {
              return val;
            }
            return elem.getAttribute(name);
          };
          find.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          jQuery.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i2 = 0;
            hasDuplicate = !support.sortStable;
            sortInput = !support.sortStable && slice.call(results, 0);
            sort.call(results, sortOrder);
            if (hasDuplicate) {
              while (elem = results[i2++]) {
                if (elem === results[i2]) {
                  j = duplicates.push(i2);
                }
              }
              while (j--) {
                splice.call(results, duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          jQuery.fn.uniqueSort = function() {
            return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
          };
          Expr = jQuery.expr = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              CHILD: function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    find.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  find.error(match[0]);
                }
                return match;
              },
              PSEUDO: function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr.CHILD.test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              TAG: function(nodeNameSelector) {
                var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return nodeName(elem, expectedNodeName);
                };
              },
              CLASS: function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                  return pattern.test(
                    typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                  );
                });
              },
              ATTR: function(name, operator, check) {
                return function(elem) {
                  var result = find.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  if (operator === "=") {
                    return result === check;
                  }
                  if (operator === "!=") {
                    return result !== check;
                  }
                  if (operator === "^=") {
                    return check && result.indexOf(check) === 0;
                  }
                  if (operator === "*=") {
                    return check && result.indexOf(check) > -1;
                  }
                  if (operator === "$=") {
                    return check && result.slice(-check.length) === check;
                  }
                  if (operator === "~=") {
                    return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                  }
                  if (operator === "|=") {
                    return result === check || result.slice(0, check.length + 1) === check + "-";
                  }
                  return false;
                };
              },
              CHILD: function(type, what, _argument, first2, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first2 === 1 && last === 0 ? (
                  // Shortcut for :nth-*(n)
                  function(elem) {
                    return !!elem.parentNode;
                  }
                ) : function(elem, _context, xml) {
                  var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start = dir2 = type === "only" && !start && "nextSibling";
                      }
                      return true;
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      outerCache = parent[expando] || (parent[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                      (diff = nodeIndex = 0) || start.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          outerCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        cache = outerCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                          if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              outerCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first2 || diff % first2 === 0 && diff / first2 >= 0;
                  }
                };
              },
              PSEUDO: function(pseudo, argument) {
                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                if (fn[expando]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn(seed, argument), i2 = matched.length;
                    while (i2--) {
                      idx = indexOf.call(seed, matched[i2]);
                      seed[idx] = !(matches2[idx] = matched[i2]);
                    }
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  };
                }
                return fn;
              }
            },
            pseudos: {
              // Potentially complex pseudos
              not: markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                  while (i2--) {
                    if (elem = unmatched[i2]) {
                      seed[i2] = !(matches2[i2] = elem);
                    }
                  }
                }) : function(elem, _context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              has: markFunction(function(selector) {
                return function(elem) {
                  return find(selector, elem).length > 0;
                };
              }),
              contains: markFunction(function(text2) {
                text2 = text2.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || jQuery.text(elem)).indexOf(text2) > -1;
                };
              }),
              // "Whether an element is represented by a :lang() selector
              // is based solely on the element's language value
              // being equal to the identifier C,
              // or beginning with the identifier C immediately followed by "-".
              // The matching of C against the element's language value is performed case-insensitively.
              // The identifier C does not have to be a valid language name."
              // https://www.w3.org/TR/selectors/#lang-pseudo
              lang: markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  find.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              // Miscellaneous
              target: function(elem) {
                var hash = window2.location && window2.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              root: function(elem) {
                return elem === documentElement2;
              },
              focus: function(elem) {
                return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              // Boolean properties
              enabled: createDisabledPseudo(false),
              disabled: createDisabledPseudo(true),
              checked: function(elem) {
                return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
              },
              selected: function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              // Contents
              empty: function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              parent: function(elem) {
                return !Expr.pseudos.empty(elem);
              },
              // Element/input types
              header: function(elem) {
                return rheader.test(elem.nodeName);
              },
              input: function(elem) {
                return rinputs.test(elem.nodeName);
              },
              button: function(elem) {
                return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
              },
              text: function(elem) {
                var attr2;
                return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
                // New HTML5 attribute values (e.g., "search") appear
                // with elem.type === "text"
                ((attr2 = elem.getAttribute("type")) == null || attr2.toLowerCase() === "text");
              },
              // Position-in-collection
              first: createPositionalPseudo(function() {
                return [0];
              }),
              last: createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              even: createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 0;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              odd: createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 1;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2;
                if (argument < 0) {
                  i2 = argument + length;
                } else if (argument > length) {
                  i2 = length;
                } else {
                  i2 = argument;
                }
                for (; --i2 >= 0; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument;
                for (; ++i2 < length; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos.nth = Expr.pseudos.eq;
          for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i] = createInputPseudo(i);
          }
          for (i in { submit: true, reset: true }) {
            Expr.pseudos[i] = createButtonPseudo(i);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          function tokenize(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rleadingCombinator.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  // Cast descendant combinators to space
                  type: match[0].replace(rtrimCSS, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            if (parseOnly) {
              return soFar.length;
            }
            return soFar ? find.error(selector) : (
              // Cache the tokens
              tokenCache(selector, groups).slice(0)
            );
          }
          function toSelector(tokens) {
            var i2 = 0, len = tokens.length, selector = "";
            for (; i2 < len; i2++) {
              selector += tokens[i2].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key2 = skip || dir2, checkNonElements = base && key2 === "parentNode", doneName = done++;
            return combinator.first ? (
              // Check against closest ancestor/preceding element
              function(elem, context, xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    return matcher(elem, context, xml);
                  }
                }
                return false;
              }
            ) : (
              // Check against all ancestor/preceding elements
              function(elem, context, xml) {
                var oldCache, outerCache, newCache = [dirruns, doneName];
                if (xml) {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      if (matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                } else {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      if (skip && nodeName(elem, skip)) {
                        elem = elem[dir2] || elem;
                      } else if ((oldCache = outerCache[key2]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                        return newCache[2] = oldCache[2];
                      } else {
                        outerCache[key2] = newCache;
                        if (newCache[2] = matcher(elem, context, xml)) {
                          return true;
                        }
                      }
                    }
                  }
                }
                return false;
              }
            );
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i2 = matchers.length;
              while (i2--) {
                if (!matchers[i2](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i2 = 0, len = contexts.length;
            for (; i2 < len; i2++) {
              find(selector, contexts[i2], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
            for (; i2 < len; i2++) {
              if (elem = unmatched[i2]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i2);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                selector || "*",
                context.nodeType ? [context] : context,
                []
              ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
              if (matcher) {
                matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                  // ...intermediate processing is necessary
                  []
                ) : (
                  // ...otherwise use results directly
                  results
                );
                matcher(matcherIn, matcherOut, context, xml);
              } else {
                matcherOut = matcherIn;
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i2 = temp.length;
                while (i2--) {
                  if (elem = temp[i2]) {
                    matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i2 = matcherOut.length;
                    while (i2--) {
                      if (elem = matcherOut[i2]) {
                        temp.push(matcherIn[i2] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i2 = matcherOut.length;
                  while (i2--) {
                    if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(
                  matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                );
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i2 < len; i2++) {
              if (matcher = Expr.relative[tokens[i2].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
                if (matcher[expando]) {
                  j = ++i2;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(
                    i2 > 1 && elementMatcher(matchers),
                    i2 > 1 && toSelector(
                      // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                      tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                    ).replace(rtrimCSS, "$1"),
                    matcher,
                    i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                    j < len && matcherFromTokens(tokens = tokens.slice(j)),
                    j < len && toSelector(tokens)
                  );
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context == document3 || context || outermost;
              }
              for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context || document3, xml)) {
                      push2.call(results, elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i2;
              if (bySet && i2 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i2--) {
                      if (!(unmatched[i2] || setMatched[i2])) {
                        setMatched[i2] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  jQuery.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          function compile(selector, match) {
            var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i2 = match.length;
              while (i2--) {
                cached = matcherFromTokens(match[i2]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(
                selector,
                matcherFromGroupMatchers(elementMatchers, setMatchers)
              );
              cached.selector = selector;
            }
            return cached;
          }
          function select(selector, context, results, seed) {
            var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find.ID(
                  token.matches[0].replace(runescape, funescape),
                  context
                ) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
              while (i2--) {
                token = tokens[i2];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find2 = Expr.find[type]) {
                  if (seed = find2(
                    token.matches[0].replace(runescape, funescape),
                    rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                  )) {
                    tokens.splice(i2, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(
              seed,
              context,
              !documentIsHTML,
              results,
              !context || rsibling.test(selector) && testContext(context.parentNode) || context
            );
            return results;
          }
          support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          setDocument();
          support.sortDetached = assert(function(el) {
            return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
          });
          jQuery.find = find;
          jQuery.expr[":"] = jQuery.expr.pseudos;
          jQuery.unique = jQuery.uniqueSort;
          find.compile = compile;
          find.select = select;
          find.setDocument = setDocument;
          find.tokenize = tokenize;
          find.escape = jQuery.escapeSelector;
          find.getText = jQuery.text;
          find.isXML = jQuery.isXMLDoc;
          find.selectors = jQuery.expr;
          find.support = jQuery.support;
          find.uniqueSort = jQuery.uniqueSort;
        })();
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n, elem) {
          var matched = [];
          for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
              matched.push(n);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery.expr.match.needsContext;
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
              return !!qualifier.call(elem, i, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery.grep(elements, function(elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery.filter(qualifier, elements, not);
        }
        jQuery.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery.fn.extend({
          find: function(selector) {
            var i, ret, len = this.length, self = this;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery(selector).filter(function() {
                for (i = 0; i < len; i++) {
                  if (jQuery.contains(self[i], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i = 0; i < len; i++) {
              jQuery.find(selector, self[i], ret);
            }
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(
              this,
              // If this is a positional/relative selector, check membership in the returned set
              // so $("p:first").is("p:last") won't return true for a doc with two "p".
              typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [],
              false
            ).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery ? context[0] : context;
                jQuery.merge(this, jQuery.parseHTML(
                  match[1],
                  context && context.nodeType ? context.ownerDocument || context : document2,
                  true
                ));
                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                  for (match in context) {
                    if (isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
          } else if (isFunction(selector)) {
            return root.ready !== void 0 ? root.ready(selector) : (
              // Execute immediately if ready is not present
              selector(jQuery)
            );
          }
          return jQuery.makeArray(selector, this);
        };
        init.prototype = jQuery.fn;
        rootjQuery = jQuery(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery.fn.extend({
          has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
              var i = 0;
              for (; i < l; i++) {
                if (jQuery.contains(this, targets[i])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                    // Don't pass non-elements to jQuery#find
                    cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors)
                  ))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
          },
          // Determine the position of an element within the set
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf.call(jQuery(elem), this[0]);
            }
            return indexOf.call(
              this,
              // If it receives a jQuery object, the first element is used
              elem.jquery ? elem[0] : elem
            );
          },
          add: function(selector, context) {
            return this.pushStack(
              jQuery.uniqueSort(
                jQuery.merge(this.get(), jQuery(selector, context))
              )
            );
          },
          addBack: function(selector) {
            return this.add(
              selector == null ? this.prevObject : this.prevObject.filter(selector)
            );
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              matched = jQuery.filter(selector, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery.each(args, function(_, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && toType(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            // Remove a callback from the list
            remove: function() {
              jQuery.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
              return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
              self.fireWith(this, arguments);
              return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
              return !!fired;
            }
          };
          return self;
        };
        function Identity(v) {
          return v;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery.extend({
          Deferred: function(func) {
            var tuples = [
              // action, add listener, callbacks,
              // ... .then handlers, argument index, [final state]
              [
                "notify",
                "progress",
                jQuery.Callbacks("memory"),
                jQuery.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn) {
                return promise.then(null, fn);
              },
              // Keep pipe for back-compat
              pipe: function() {
                var fns = arguments;
                return jQuery.Deferred(function(newDefer) {
                  jQuery.each(tuples, function(_i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](
                          this,
                          fn ? [returned] : arguments
                        );
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction(then)) {
                        if (special) {
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special)
                          );
                        } else {
                          maxDepth++;
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special),
                            resolve(
                              maxDepth,
                              deferred2,
                              Identity,
                              deferred2.notifyWith
                            )
                          );
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e) {
                        if (jQuery.Deferred.exceptionHook) {
                          jQuery.Deferred.exceptionHook(
                            e,
                            process.error
                          );
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process();
                    } else {
                      if (jQuery.Deferred.getErrorHook) {
                        process.error = jQuery.Deferred.getErrorHook();
                      } else if (jQuery.Deferred.getStackHook) {
                        process.error = jQuery.Deferred.getStackHook();
                      }
                      window2.setTimeout(process);
                    }
                  };
                }
                return jQuery.Deferred(function(newDefer) {
                  tuples[0][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onProgress) ? onProgress : Identity,
                      newDefer.notifyWith
                    )
                  );
                  tuples[1][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onFulfilled) ? onFulfilled : Identity
                    )
                  );
                  tuples[2][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onRejected) ? onRejected : Thrower
                    )
                  );
                }).promise();
              },
              // Get a promise for this deferred
              // If obj is provided, the promise aspect is added to the object
              promise: function(obj) {
                return obj != null ? jQuery.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery.each(tuples, function(i, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(
                  function() {
                    state = stateString;
                  },
                  // rejected_callbacks.disable
                  // fulfilled_callbacks.disable
                  tuples[3 - i][2].disable,
                  // rejected_handlers.disable
                  // fulfilled_handlers.disable
                  tuples[3 - i][3].disable,
                  // progress_callbacks.lock
                  tuples[0][2].lock,
                  // progress_handlers.lock
                  tuples[0][3].lock
                );
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          // Deferred helper
          when: function(singleValue) {
            var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i2) {
              return function(value) {
                resolveContexts[i2] = this;
                resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!--remaining) {
                  primary.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(
                singleValue,
                primary.done(updateFunc(i)).resolve,
                primary.reject,
                !remaining
              );
              if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
                return primary.then();
              }
            }
            while (i--) {
              adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            }
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery.Deferred.exceptionHook = function(error, asyncError) {
          if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
            window2.console.warn(
              "jQuery.Deferred exception: " + error.message,
              error.stack,
              asyncError
            );
          }
        };
        jQuery.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery.Deferred();
        jQuery.fn.ready = function(fn) {
          readyList.then(fn).catch(function(error) {
            jQuery.readyException(error);
          });
          return this;
        };
        jQuery.extend({
          // Is the DOM ready to be used? Set to true once it occurs.
          isReady: false,
          // A counter to track how many items to wait for before
          // the ready event fires. See trac-6781
          readyWait: 1,
          // Handle when the DOM is ready
          ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
              return;
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery]);
          }
        });
        jQuery.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery.ready();
        }
        if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
          window2.setTimeout(jQuery.ready);
        } else {
          document2.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn, key2, value, chainable, emptyGet, raw) {
          var i = 0, len = elems.length, bulk = key2 == null;
          if (toType(key2) === "object") {
            chainable = true;
            for (i in key2) {
              access(elems, fn, i, key2[i], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, _key, value2) {
                  return bulk.call(jQuery(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i < len; i++) {
                fn(
                  elems[i],
                  key2,
                  raw ? value : value.call(elems[i], i, fn(elems[i], key2))
                );
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn.call(elems);
          }
          return len ? fn(elems[0], key2) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
          this.expando = jQuery.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
              cache[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache[camelCase(prop)] = data[prop];
              }
            }
            return cache;
          },
          get: function(owner, key2) {
            return key2 === void 0 ? this.cache(owner) : (
              // Always use camelCase key (gh-2257)
              owner[this.expando] && owner[this.expando][camelCase(key2)]
            );
          },
          access: function(owner, key2, value) {
            if (key2 === void 0 || key2 && typeof key2 === "string" && value === void 0) {
              return this.get(owner, key2);
            }
            this.set(owner, key2, value);
            return value !== void 0 ? value : key2;
          },
          remove: function(owner, key2) {
            var i, cache = owner[this.expando];
            if (cache === void 0) {
              return;
            }
            if (key2 !== void 0) {
              if (Array.isArray(key2)) {
                key2 = key2.map(camelCase);
              } else {
                key2 = camelCase(key2);
                key2 = key2 in cache ? [key2] : key2.match(rnothtmlwhite) || [];
              }
              i = key2.length;
              while (i--) {
                delete cache[key2[i]];
              }
            }
            if (key2 === void 0 || jQuery.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== void 0 && !jQuery.isEmptyObject(cache);
          }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key2, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key2.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e) {
              }
              dataUser.set(elem, key2, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          // TODO: Now that all calls to _data and _removeData have been replaced
          // with direct calls to dataPriv methods, these can be deprecated.
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery.fn.extend({
          data: function(key2, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key2 === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i = attrs.length;
                  while (i--) {
                    if (attrs[i]) {
                      name = attrs[i].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key2 === "object") {
              return this.each(function() {
                dataUser.set(this, key2);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key2);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key2);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key2, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key2) {
            return this.each(function() {
              dataUser.remove(this, key2);
            });
          }
        });
        jQuery.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
              jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          // Not public - generate a queueHooks object, or return the current one
          _queueHooks: function(elem, type) {
            var key2 = type + "queueHooks";
            return dataPriv.get(elem, key2) || dataPriv.access(elem, key2, {
              empty: jQuery.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key2]);
              })
            });
          }
        });
        jQuery.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery.queue(this, type, data);
              jQuery._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          // Get a promise resolved when queues of a certain type
          // are emptied (fx is the type by default)
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i--) {
              tmp = dataPriv.get(elements[i], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document2.documentElement;
        var isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
          // Support: Firefox <=43 - 45
          // Disconnected elements can have computed display: none, so first confirm that elem is
          // in the document.
          isAttached(elem) && jQuery.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          if (display) {
            return display;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName2));
          display = jQuery.css(temp, "display");
          temp.parentNode.removeChild(temp);
          if (display === "none") {
            display = "block";
          }
          defaultDisplayMap[nodeName2] = display;
          return display;
        }
        function showHide(elements, show) {
          var display, elem, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show) {
              if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== "none") {
                values[index] = "none";
                dataPriv.set(elem, "display", display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }
        jQuery.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery(this).show();
              } else {
                jQuery(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          // XHTML parsers do not magically insert elements in the
          // same way that tag soup parsers do. So we cannot shorten
          // this by omitting <tbody> or other required elements.
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
          } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context, tag)) {
            return jQuery.merge([context], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i = 0, l = elems.length;
          for (; i < l; i++) {
            dataPriv.set(
              elems[i],
              "globalEval",
              !refElements || dataPriv.get(refElements[i], "globalEval")
            );
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
          for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
              if (toType(elem) === "object") {
                jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                jQuery.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i = 0;
          while (elem = nodes[i++]) {
            if (selection && jQuery.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while (elem = tmp[j++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = void 0;
          } else if (fn == null) {
            if (typeof selector === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event) {
              jQuery().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
          }
          return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
          });
        }
        jQuery.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = /* @__PURE__ */ Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e) {
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery.event.special[type] || {};
              handleObj = jQuery.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery.event.global[type] = true;
            }
          },
          // Detach an event or set of events from an element
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery.event.remove(elem, type + types[t], handler, selector, true);
                }
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            for (i = 1; i < arguments.length; i++) {
              args[i] = arguments[i];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j = 0;
              while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i = 0; i < delegateCount; i++) {
                    handleObj = handlers[i];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
          },
          special: {
            load: {
              // Prevent triggered image.load events from bubbling to window.load
              noBubble: true
            },
            click: {
              // Utilize native event to ensure correct state for checkable inputs
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", true);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              // For cross-browser consistency, suppress native .click() on links
              // Also prevent it if we're currently inside a leveraged native-event stack
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, isSetup) {
          if (!isSetup) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
              var result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved) {
                  saved = slice.call(arguments);
                  dataPriv.set(this, type, saved);
                  this[type]();
                  result = dataPriv.get(this, type);
                  dataPriv.set(this, type, false);
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result;
                  }
                } else if ((jQuery.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved) {
                dataPriv.set(this, type, jQuery.event.trigger(
                  saved[0],
                  saved.slice(1),
                  this
                ));
                event.stopPropagation();
                event.isImmediatePropagationStopped = returnTrue;
              }
            }
          });
        }
        jQuery.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery.Event = function(src, props) {
          if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery.expando] = true;
        };
        jQuery.Event.prototype = {
          constructor: jQuery.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
              e.preventDefault();
            }
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: true
        }, jQuery.event.addProp);
        jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          function focusMappedHandler(nativeEvent) {
            if (document2.documentMode) {
              var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
              event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
              event.isSimulated = true;
              handle(nativeEvent);
              if (event.target === event.currentTarget) {
                handle(event);
              }
            } else {
              jQuery.event.simulate(
                delegateType,
                nativeEvent.target,
                jQuery.event.fix(nativeEvent)
              );
            }
          }
          jQuery.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
              var attaches;
              leverageNative(this, type, true);
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType);
                if (!attaches) {
                  this.addEventListener(delegateType, focusMappedHandler);
                }
                dataPriv.set(this, delegateType, (attaches || 0) + 1);
              } else {
                return false;
              }
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            teardown: function() {
              var attaches;
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType) - 1;
                if (!attaches) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                  dataPriv.remove(this, delegateType);
                } else {
                  dataPriv.set(this, delegateType, attaches);
                }
              } else {
                return false;
              }
            },
            // Suppress native focus or blur if we're currently inside
            // a leveraged native-event stack
            _default: function(event) {
              return dataPriv.get(event.target, type);
            },
            delegateType
          };
          jQuery.event.special[delegateType] = {
            setup: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
              if (!attaches) {
                if (document2.documentMode) {
                  this.addEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.addEventListener(type, focusMappedHandler, true);
                }
              }
              dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
              if (!attaches) {
                if (document2.documentMode) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.removeEventListener(type, focusMappedHandler, true);
                }
                dataPriv.remove(dataHolder, delegateType);
              } else {
                dataPriv.set(dataHolder, delegateType, attaches);
              }
            }
          };
        });
        jQuery.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery(types.delegateTarget).off(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                handleObj.selector,
                handleObj.handler
              );
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn = selector;
              selector = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery.event.remove(this, types, fn, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i, l, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                  jQuery.event.add(dest, type, events[type][i]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first2, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self.html());
              }
              domManip(self, args, callback, ignored);
            });
          }
          if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first2 = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first2;
            }
            if (first2 || ignored) {
              scripts = jQuery.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i < l; i++) {
                node = fragment;
                if (i !== iNoClone) {
                  node = jQuery.clone(node, true, true);
                  if (hasScripts) {
                    jQuery.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i], node, i);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery.map(scripts, restoreScript);
                for (i = 0; i < hasScripts; i++) {
                  node = scripts[i];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery._evalUrl && !node.noModule) {
                        jQuery._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
          for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
              jQuery.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i = 0, l = srcElements.length; i < l; i++) {
                fixInput(srcElements[i], destElements[i]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i = 0, l = srcElements.length; i < l; i++) {
                  cloneCopyEvent(srcElements[i], destElements[i]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for (; (elem = elems[i]) !== void 0; i++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery.event.remove(elem, type);
                      } else {
                        jQuery.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery.fn.extend({
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i = 0;
            for (; (elem = this[i]) != null; i++) {
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i = 0, l = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery.htmlPrefilter(value2);
                try {
                  for (; i < l; i++) {
                    elem = this[i] || {};
                    if (elem.nodeType === 1) {
                      jQuery.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery.inArray(this, ignored) < 0) {
                jQuery.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for (; i <= last; i++) {
              elems = i === last ? this : this.clone(true);
              jQuery(insert[i])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var rcustomProp = /^--/;
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document2.createElement("table");
                tr = document2.createElement("tr");
                trChild = document2.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr.style.cssText = "box-sizing:content-box;border:1px solid";
                tr.style.height = "1px";
                trChild.style.height = "9px";
                trChild.style.display = "block";
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr);
                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp && ret) {
              ret = ret.replace(rtrimCSS, "$1") || void 0;
            }
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? (
            // Support: IE <=9 - 11 only
            // IE returns zIndex value as an integer.
            ret + ""
          ) : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
          while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? (
            // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
          ) : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i < 4; i += 2) {
            if (box === "margin") {
              marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              if (box !== "padding") {
                delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              } else {
                extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(
              elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
              // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
              // Use an explicit zero to avoid NaN (gh-3964)
            )) || 0;
          }
          return delta + marginDelta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Interestingly, in some cases IE 9 doesn't suffer from this issue.
          !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
          // This happens for inline elements with no explicit setting (gh-3571)
          val === "auto" || // Support: Android <=4.1 - 4.3 only
          // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
          !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
          elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(
            elem,
            dimension,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles,
            // Provide the current computed size to request scroll gutter calculation (gh-3589)
            val
          ) + "px";
        }
        jQuery.extend({
          // Add in style property hooks for overriding the default
          // behavior of getting and setting a style property
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          // Don't automatically add "px" to these possibly-unitless properties
          cssNumber: {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageSlice: true,
            columnCount: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            scale: true,
            widows: true,
            zIndex: true,
            zoom: true,
            // SVG-related
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeMiterlimit: true,
            strokeOpacity: true
          },
          // Add in properties whose names you wish to fix before
          // setting or getting the value
          cssProps: {},
          // Get and set the style property on a DOM Node
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery.each(["height", "width"], function(_i, dimension) {
          jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
                elem,
                dimension,
                extra,
                isBorderBox,
                styles
              ) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(
                  elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
                );
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(
          support.reliableMarginLeft,
          function(elem, computed) {
            if (computed) {
              return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
                return elem.getBoundingClientRect().left;
              })) + "px";
            }
          }
        );
        jQuery.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix3, suffix) {
          jQuery.cssHooks[prefix3 + suffix] = {
            expand: function(value) {
              var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i < 4; i++) {
                expanded[prefix3 + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix3 !== "margin") {
            jQuery.cssHooks[prefix3 + suffix].set = setPositiveNumber;
          }
        });
        jQuery.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i < len; i++) {
                  map[name2[i]] = jQuery.css(elem, name2[i], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery.easing[this.easing](
                percent,
                this.options.duration * percent,
                0,
                1,
                this.options.duration
              );
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery.fx.step[tween.prop]) {
                jQuery.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery.easing = {
          linear: function(p) {
            return p;
          },
          swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule2() {
          if (inProgress) {
            if (document2.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule2);
            } else {
              window2.setTimeout(schedule2, jQuery.fx.interval);
            }
            jQuery.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
          }
          propTween = !jQuery.isEmptyObject(props);
          if (!propTween && jQuery.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery.css(elem, "display");
            if (display === "none") {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
              if (jQuery.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === "none" ? "" : display;
                  }
                }
                style.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
              specialEasing: {},
              easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery.Tween(
                elem,
                animation.opts,
                prop,
                end,
                animation.opts.specialEasing[prop] || animation.opts.easing
              );
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery.fx.timer(
            jQuery.extend(tick, {
              elem,
              anim: animation,
              queue: animation.opts.queue
            })
          );
          return animation;
        }
        jQuery.Animation = jQuery.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery.speed = function(speed, easing, fn) {
          var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
          };
          if (jQuery.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== "number") {
              if (opt.duration in jQuery.fx.speeds) {
                opt.duration = jQuery.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery.each(["toggle", "show", "hide"], function(_i, name) {
          var cssFn = jQuery.fn[name];
          jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
          var timer2, i = 0, timers = jQuery.timers;
          fxNow = Date.now();
          for (; i < timers.length; i++) {
            timer2 = timers[i];
            if (!timer2() && timers[i] === timer2) {
              timers.splice(i--, 1);
            }
          }
          if (!timers.length) {
            jQuery.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery.fx.timer = function(timer2) {
          jQuery.timers.push(timer2);
          jQuery.fx.start();
        };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule2();
        };
        jQuery.fx.stop = function() {
          inProgress = null;
        };
        jQuery.fx.speeds = {
          slow: 600,
          fast: 200,
          // Default speed
          _default: 400
        };
        jQuery.fn.delay = function(time, type) {
          time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt.selected;
          input = document2.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery.removeAttr(this, name);
            });
          }
        });
        jQuery.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
          var getter = attrHandle[name] || jQuery.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery.propFix[name] || name];
            });
          }
        });
        jQuery.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              name = jQuery.propFix[name] || name;
              hooks = jQuery.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery.fn.extend({
          addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
              });
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    if (cur.indexOf(" " + className + " ") < 0) {
                      cur += className + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    while (cur.indexOf(" " + className + " ") > -1) {
                      cur = cur.replace(" " + className + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) {
              return this.each(function(i2) {
                jQuery(this).toggleClass(
                  value.call(this, i2, getClass(this), stateVal),
                  stateVal
                );
              });
            }
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            classNames = classesToArray(value);
            return this.each(function() {
              if (isValidValue) {
                self = jQuery(this);
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (self.hasClass(className)) {
                    self.removeClass(className);
                  } else {
                    self.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute(
                    "class",
                    className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                  );
                }
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while (elem = this[i++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i, jQuery(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery.find.attr(elem, "value");
                return val != null ? val : (
                  // Support: IE <=10 - 11 only
                  // option.text throws exceptions (trac-14686, trac-14858)
                  // Strip and collapse whitespace
                  // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                  stripAndCollapse(jQuery.text(elem))
                );
              }
            },
            select: {
              get: function(elem) {
                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                if (index < 0) {
                  i = max;
                } else {
                  i = one ? index : 0;
                }
                for (; i < max; i++) {
                  option = options[i];
                  if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                  !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                while (i--) {
                  option = options[i];
                  if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              }
            }
          }
        });
        jQuery.each(["radio", "checkbox"], function() {
          jQuery.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        var location2 = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e) {
          }
          parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
          if (!xml || parserErrorElem) {
            jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
              return el.textContent;
            }).join("\n") : data));
          }
          return xml;
        };
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
          e.stopPropagation();
        };
        jQuery.extend(jQuery.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery.makeArray(data, [event]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          // Piggyback on a donor event to simulate a different one
          // Used only for `focus(in | out)` events
          simulate: function(type, elem, event) {
            var e = jQuery.extend(
              new jQuery.Event(),
              event,
              {
                type,
                isSimulated: true
              }
            );
            jQuery.event.trigger(e, null, elem);
          }
        });
        jQuery.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery.event.trigger(type, data, elem, true);
            }
          }
        });
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix3, obj, traditional, add) {
          var name;
          if (Array.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
              if (traditional || rbracket.test(prefix3)) {
                add(prefix3, v);
              } else {
                buildParams(
                  prefix3 + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                  v,
                  traditional,
                  add
                );
              }
            });
          } else if (!traditional && toType(obj) === "object") {
            for (name in obj) {
              buildParams(prefix3 + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix3, obj);
          }
        }
        jQuery.param = function(a, traditional) {
          var prefix3, s = [], add = function(key2, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key2) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a == null) {
            return "";
          }
          if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix3 in a) {
              buildParams(prefix3, a[prefix3], traditional, add);
            }
          }
          return s.join("&");
        };
        jQuery.fn.extend({
          serialize: function() {
            return jQuery.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery.prop(this, "elements");
              return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
              var val = jQuery(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location2.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while (dataType = dataTypes[i++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key2, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
          for (key2 in src) {
            if (src[key2] !== void 0) {
              (flatOptions[key2] ? target : deep || (deep = {}))[key2] = src[key2];
            }
          }
          if (deep) {
            jQuery.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
          var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s.converters) {
              converters[conv.toLowerCase()] = s.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s.responseFields[current]) {
              jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
              response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery.extend({
          // Counter for holding the number of active queries
          active: 0,
          // Last-Modified header cache for next request
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location2.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location2.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
            timeout: 0,
            data: null,
            dataType: null,
            username: null,
            password: null,
            cache: null,
            throws: false,
            traditional: false,
            headers: {},
            */
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
              // Convert anything to text
              "* text": String,
              // Text to html (true = no transformation)
              "text html": true,
              // Evaluate text as a json expression
              "text json": JSON.parse,
              // Parse text as xml
              "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
              url: true,
              context: true
            }
          },
          // Creates a full fledged settings object into target
          // with both ajaxSettings and settings fields.
          // If target is omitted, writes into ajaxSettings.
          ajaxSetup: function(target, settings) {
            return settings ? (
              // Building a settings object
              ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
            ) : (
              // Extending ajaxSettings
              ajaxExtend(jQuery.ajaxSettings, target)
            );
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          // Main method
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var transport2, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              // Builds headers hashtable if needed
              getResponseHeader: function(key2) {
                var match;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                    }
                  }
                  match = responseHeaders[key2.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              // Raw string
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              // Caches the header
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              // Overrides response content-type header
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s.mimeType = type;
                }
                return this;
              },
              // Status-dependent callbacks
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed2) {
                    jqXHR.always(map[jqXHR.status]);
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },
              // Cancel the request
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport2) {
                  transport2.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s.url;
                urlAnchor.href = urlAnchor.href;
                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e) {
                s.crossDomain = true;
              }
            }
            if (s.data && s.processData && typeof s.data !== "string") {
              s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery.event && s.global;
            if (fireGlobals && jQuery.active++ === 0) {
              jQuery.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url.replace(rhash, "");
            if (!s.hasContent) {
              uncached = s.url.slice(cacheURL.length);
              if (s.data && (s.processData || typeof s.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                delete s.data;
              }
              if (s.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s.url = cacheURL + uncached;
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s.data = s.data.replace(r20, "+");
            }
            if (s.ifModified) {
              if (jQuery.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
              }
              if (jQuery.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
              }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader(
              "Accept",
              s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
            );
            for (i in s.headers) {
              jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            transport2 = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport2) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s.async && s.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s.timeout);
              }
              try {
                completed2 = false;
                transport2.send(requestHeaders, done);
              } catch (e) {
                if (completed2) {
                  throw e;
                }
                done(-1, e);
              }
            }
            function done(status2, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport2 = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status2 > 0 ? 4 : 0;
              isSuccess = status2 >= 200 && status2 < 300 || status2 === 304;
              if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
              }
              if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
                s.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery.etag[cacheURL] = modified;
                  }
                }
                if (status2 === 204 || s.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status2 === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status2 || !statusText) {
                  statusText = "error";
                  if (status2 < 0) {
                    status2 = 0;
                  }
                }
              }
              jqXHR.status = status2;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(
                  isSuccess ? "ajaxSuccess" : "ajaxError",
                  [jqXHR, s, isSuccess ? success : error]
                );
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                if (!--jQuery.active) {
                  jQuery.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery.get(url, void 0, callback, "script");
          }
        });
        jQuery.each(["get", "post"], function(_i, method) {
          jQuery[method] = function(url, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery.ajax(jQuery.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery.isPlainObject(url) && url));
          };
        });
        jQuery.ajaxPrefilter(function(s) {
          var i;
          for (i in s.headers) {
            if (i.toLowerCase() === "content-type") {
              s.contentType = s.headers[i] || "";
            }
          }
        });
        jQuery._evalUrl = function(url, options, doc) {
          return jQuery.ajax({
            url,
            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery.globalEval(response, options, doc);
            }
          });
        };
        jQuery.fn.extend({
          wrapAll: function(html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction(html)) {
              return this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
              });
            }
            return this.each(function() {
              var self = jQuery(this), contents = self.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
              jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
          },
          unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
              jQuery(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery.expr.pseudos.hidden = function(elem) {
          return !jQuery.expr.pseudos.visible(elem);
        };
        jQuery.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e) {
          }
        };
        var xhrSuccessStatus = {
          // File protocol always yields status code 0, assume 200
          0: 200,
          // Support: IE <=9 only
          // trac-1450: sometimes IE returns 1223 when it should be 204
          1223: 204
        }, xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(
                  options.type,
                  options.url,
                  options.async,
                  options.username,
                  options.password
                );
                if (options.xhrFields) {
                  for (i in options.xhrFields) {
                    xhr[i] = options.xhrFields[i];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i in headers) {
                  xhr.setRequestHeader(i, headers[i]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                      if (type === "abort") {
                        xhr.abort();
                      } else if (type === "error") {
                        if (typeof xhr.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(
                            // File: protocol always yields status 0; see trac-8605, trac-14207
                            xhr.status,
                            xhr.statusText
                          );
                        }
                      } else {
                        complete(
                          xhrSuccessStatus[xhr.status] || xhr.status,
                          xhr.statusText,
                          // Support: IE <=9 only
                          // IE9 has no XHR2 but throws on binary (trac-11426)
                          // For XHR2 non-text, let the caller handle it (gh-2498)
                          (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                          xhr.getAllResponseHeaders()
                        );
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                if (xhr.onabort !== void 0) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                  if (callback) {
                    throw e;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery.ajaxPrefilter(function(s) {
          if (s.crossDomain) {
            s.contents.script = false;
          }
        });
        jQuery.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text2) {
              jQuery.globalEval(text2);
              return text2;
            }
          }
        });
        jQuery.ajaxPrefilter("script", function(s) {
          if (s.cache === void 0) {
            s.cache = false;
          }
          if (s.crossDomain) {
            s.type = "GET";
          }
        });
        jQuery.ajaxTransport("script", function(s) {
          if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
              send: function(_, complete) {
                script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document2.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
          if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
              s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
              s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s[callbackName]) {
                s.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = (function() {
          var body = document2.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        })();
        jQuery.parseHTML = function(data, context, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document2.implementation.createHTMLDocument("");
              base = context.createElement("base");
              base.href = document2.location.href;
              context.head.appendChild(base);
            } else {
              context = document2;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery(scripts).remove();
          }
          return jQuery.merge([], parsed.childNodes);
        };
        jQuery.fn.load = function(url, params, callback) {
          var selector, type, response, self = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self.length > 0) {
            jQuery.ajax({
              url,
              // If "type" variable is undefined, then "GET" method will be used.
              // Make value of this field explicit since
              // user can override it through ajaxSetup method
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self.html(selector ? (
                // If a selector was specified, locate the right elements in a dummy div
                // Exclude scripts to avoid IE 'Permission Denied' errors
                jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector)
              ) : (
                // Otherwise use the full result
                responseText
              ));
            }).always(callback && function(jqXHR, status2) {
              self.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status2, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery.expr.pseudos.animated = function(elem) {
          return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        jQuery.offset = {
          setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i, jQuery.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery.fn.extend({
          // offset() relates an element's border box to the document origin
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
              });
            }
            var rect, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
            };
          },
          // position() relates an element's margin box to its offset parent's padding box
          // This corresponds to the behavior of CSS absolute positioning
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery.css(elem, "position") === "fixed") {
              offset = elem.getBoundingClientRect();
            } else {
              offset = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery(offsetParent).offset();
                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
              left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
          },
          // This method will return documentElement in the following cases:
          // 1) For the element inside the iframe without offsetParent, this method will return
          //    documentElement of the parent window
          // 2) For the hidden or detached element
          // 3) For body or html element, i.e. in case of the html node - it will return itself
          //
          // but those exceptions were never presented as a real life use-cases
          // and might be considered as more preferable results.
          //
          // This logic, however, is not guaranteed and can change at any point in the future
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = "pageYOffset" === prop;
          jQuery.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(
                  !top ? val2 : win.pageXOffset,
                  top ? val2 : win.pageYOffset
                );
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery.each(["top", "left"], function(_i, prop) {
          jQuery.cssHooks[prop] = addGetHookIf(
            support.pixelPosition,
            function(elem, computed) {
              if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
              }
            }
          );
        });
        jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(
                    elem.body["scroll" + name],
                    doc["scroll" + name],
                    elem.body["offset" + name],
                    doc["offset" + name],
                    doc["client" + name]
                  );
                }
                return value2 === void 0 ? (
                  // Get width or height on the element, requesting but not forcing parseFloat
                  jQuery.css(elem, type2, extra)
                ) : (
                  // Set width or height on the element
                  jQuery.style(elem, type2, value2, extra)
                );
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        });
        jQuery.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i, type) {
          jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          },
          hover: function(fnOver, fnOut) {
            return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
          }
        });
        jQuery.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
          function(_i, name) {
            jQuery.fn[name] = function(data, fn) {
              return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
          }
        );
        var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        jQuery.proxy = function(fn, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }
          if (!isFunction(fn)) {
            return void 0;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery.guid++;
          return proxy;
        };
        jQuery.holdReady = function(hold) {
          if (hold) {
            jQuery.readyWait++;
          } else {
            jQuery.ready(true);
          }
        };
        jQuery.isArray = Array.isArray;
        jQuery.parseJSON = JSON.parse;
        jQuery.nodeName = nodeName;
        jQuery.isFunction = isFunction;
        jQuery.isWindow = isWindow;
        jQuery.camelCase = camelCase;
        jQuery.type = toType;
        jQuery.now = Date.now;
        jQuery.isNumeric = function(obj) {
          var type = jQuery.type(obj);
          return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
          // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
          // subtraction forces infinities to NaN
          !isNaN(obj - parseFloat(obj));
        };
        jQuery.trim = function(text2) {
          return text2 == null ? "" : (text2 + "").replace(rtrim, "$1");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery.noConflict = function(deep) {
          if (window2.$ === jQuery) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery) {
            window2.jQuery = _jQuery;
          }
          return jQuery;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery;
        }
        return jQuery;
      });
    }
  });

  // src/modules/sync/change-bus.ts
  var listener;
  var applying = false;
  function onSyncMutation(callback) {
    listener = callback;
  }
  function syncMutation(before, after) {
    if (!applying) listener?.(before, after);
  }
  function applyFromSync(callback) {
    const previous = applying;
    applying = true;
    try {
      callback();
    } finally {
      applying = previous;
    }
  }

  // src/modules/viewed/storage.ts
  function getViewedGroupId(value) {
    const id = String(value || "").trim();
    if (/^(ep|ss)[1-9][0-9]*$/.test(id)) return `${id.slice(0, 2)}${id.slice(-1)}`;
    if (id.length < 5) {
      return "";
    }
    if (id.startsWith("ep")) {
      return `ep${id.slice(-1)}`;
    }
    if (id.startsWith("ss")) {
      return `ss${id.slice(-1)}`;
    }
    if (id.length === 10) {
      return id.charAt(1);
    }
    if (id.length > 10 && id.indexOf("-") === 10) {
      return id.charAt(1);
    }
    return "";
  }
  function getLegacyViewedGroupId(value) {
    const id = String(value);
    if (/^(ep|ss)[1-9][0-9]*$/.test(id)) return `${id.slice(0, 2)}${id.slice(-1)}`;
    if (id.length < 5) {
      return "";
    }
    if (id.startsWith("ep")) {
      return `ep${id.slice(-1)}`;
    }
    if (id.startsWith("ss")) {
      return `ss${id.slice(-1)}`;
    }
    if (id.length === 10) {
      return id.charAt(1);
    }
    if (id.length > 10 && id.indexOf("-") === 10) {
      return id.charAt(1);
    }
    return "";
  }
  function normalizeViewedId(value) {
    let id = String(value || "").trim();
    if (!id) {
      return null;
    }
    id = id.replace(/^BV/i, "");
    return getViewedGroupId(id) ? id : null;
  }
  function groupViewedItems(values) {
    const groups = {};
    const seen = /* @__PURE__ */ new Set();
    for (const value of values) {
      const id = normalizeViewedId(value);
      if (!id || seen.has(id)) {
        continue;
      }
      seen.add(id);
      const groupId = getViewedGroupId(id);
      if (!groups[groupId]) {
        groups[groupId] = [];
      }
      groups[groupId].push(id);
    }
    return groups;
  }
  function groupLegacyViewedItems(values) {
    const groups = {};
    for (const value of values) {
      const id = String(value);
      if (id.length < 6) {
        continue;
      }
      const groupId = getLegacyViewedGroupId(id);
      if (!groupId) {
        continue;
      }
      if (!groups[groupId]) {
        groups[groupId] = [];
      }
      groups[groupId].unshift(id);
    }
    return groups;
  }
  function flattenViewedGroups(groups) {
    const items = [];
    const seen = /* @__PURE__ */ new Set();
    for (const value of Object.values(groups)) {
      if (!Array.isArray(value)) {
        continue;
      }
      for (const item of value) {
        const id = normalizeViewedId(item);
        if (!id || seen.has(id)) {
          continue;
        }
        seen.add(id);
        items.push(id);
      }
    }
    return items;
  }
  function viewedGroupStorageKey(groupId) {
    return `BiliViewed_${groupId}`;
  }
  function listViewedGroupKeys() {
    if (typeof GM_listValues !== "function") {
      return [];
    }
    return GM_listValues().filter((key2) => String(key2).startsWith("BiliViewed_"));
  }
  function readViewedGroup(groupId, fallback = null) {
    return GM_getValue(viewedGroupStorageKey(groupId), fallback);
  }
  function writeViewedGroup(groupId, values) {
    const before = new Set(readViewedGroup(groupId, []).map((v) => `v:${v}`));
    syncMutation(before, new Set(values.map((v) => `v:${v}`)));
    GM_setValue(viewedGroupStorageKey(groupId), values);
  }
  function deleteViewedGroup(groupId) {
    const before = new Set(readViewedGroup(groupId, []).map((v) => `v:${v}`));
    syncMutation(before, /* @__PURE__ */ new Set());
    GM_deleteValue(viewedGroupStorageKey(groupId));
  }
  function readViewedStorage() {
    const groups = {};
    for (const key2 of listViewedGroupKeys()) {
      const groupId = String(key2).slice("BiliViewed_".length);
      groups[groupId] = flattenViewedGroups({ [groupId]: readViewedGroup(groupId, []) });
    }
    return { items: flattenViewedGroups(groups), groups };
  }
  function clearViewedStorage() {
    for (const key2 of listViewedGroupKeys()) {
      deleteViewedGroup(String(key2).slice("BiliViewed_".length));
    }
  }
  function writeViewedStorage(snapshot, mode) {
    const incomingItems = snapshot.items?.length ? snapshot.items : snapshot.groups ? flattenViewedGroups(snapshot.groups) : [];
    const currentItems = mode === "append" ? readViewedStorage().items : [];
    const groups = groupViewedItems(currentItems.concat(incomingItems));
    syncMutation(new Set(readViewedStorage().items.map((v) => "v:" + v)), new Set(flattenViewedGroups(groups).map((v) => "v:" + v)));
    applyFromSync(() => {
      if (mode === "overwrite") clearViewedStorage();
      for (const [groupId, values] of Object.entries(groups)) writeViewedGroup(groupId, values);
    });
    return { items: flattenViewedGroups(groups), groups };
  }
  function isLegacyViewedExport(value) {
    return !!value && typeof value === "object" && Object.keys(value).some((key2) => key2.startsWith("BiliViewed_"));
  }
  function normalizeLegacyViewedExport(value) {
    const groups = {};
    for (const [key2, items] of Object.entries(value)) {
      if (!key2.startsWith("BiliViewed_") || !Array.isArray(items)) {
        continue;
      }
      const groupId = key2.slice("BiliViewed_".length);
      groups[groupId] = flattenViewedGroups({ [groupId]: items });
    }
    return { items: flattenViewedGroups(groups), groups };
  }

  // src/modules/blocker/matching.ts
  var defaultMatchOptions = {
    caseInsensitive: false,
    collapseWhitespace: true
  };
  function resolveOptions(options = {}) {
    return { ...defaultMatchOptions, ...options };
  }
  function normalizeText(value, options = {}) {
    if (value === null || value === void 0) {
      return null;
    }
    const resolvedOptions = resolveOptions(options);
    let text2 = String(value).trim();
    if (text2.length === 0) {
      return null;
    }
    if (resolvedOptions.collapseWhitespace) {
      text2 = text2.replace(/[\t\r\f\n\s]+/g, "");
    }
    if (resolvedOptions.caseInsensitive) {
      text2 = text2.toLowerCase();
    }
    return text2.length > 0 ? text2 : null;
  }
  function normalizeRuleValue(value, options = {}) {
    if (typeof value === "number") {
      return Number.isFinite(value) ? value : null;
    }
    return normalizeText(value, options);
  }
  function validateRuleInput(value, integerRule = false) {
    if (value === null || value === void 0) {
      return { status: false, res: "\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A" };
    }
    const trimmed = String(value).trim();
    if (trimmed.length === 0) {
      return { status: false, res: "\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A" };
    }
    if (!integerRule) {
      return { status: true, res: trimmed };
    }
    const parsed = Number.parseInt(trimmed, 10);
    if (!Number.isFinite(parsed)) {
      return { status: false, res: "\u8BF7\u8F93\u5165\u6570\u5B57\uFF01" };
    }
    return { status: true, res: parsed };
  }
  function exactMatch(ruleList, value, options = {}) {
    if (!Array.isArray(ruleList)) {
      return null;
    }
    const normalizedValue = normalizeRuleValue(value, options);
    if (normalizedValue === null) {
      return null;
    }
    for (const rule of ruleList) {
      const normalizedRule = normalizeRuleValue(rule, options);
      if (normalizedRule === null) {
        continue;
      }
      if (normalizedRule === normalizedValue) {
        return { kind: "exact", matching: rule };
      }
    }
    return null;
  }
  function fuzzyMatch(ruleList, value, options = {}) {
    if (!Array.isArray(ruleList)) {
      return null;
    }
    const normalizedValue = normalizeText(value, options);
    if (normalizedValue === null) {
      return null;
    }
    for (const rule of ruleList) {
      const normalizedRule = normalizeText(rule, options);
      if (normalizedRule === null) {
        continue;
      }
      if (normalizedValue.includes(normalizedRule)) {
        return { kind: "fuzzy", matching: rule };
      }
    }
    return null;
  }
  function regexMatch(ruleList, value, options = {}) {
    if (!Array.isArray(ruleList)) {
      return null;
    }
    const normalizedValue = normalizeText(value, options);
    if (normalizedValue === null) {
      return null;
    }
    for (const rule of ruleList) {
      const normalizedRule = normalizeText(rule, { ...options, collapseWhitespace: false });
      if (normalizedRule === null) {
        continue;
      }
      try {
        const regexp = new RegExp(normalizedRule, options.caseInsensitive ? "i" : "");
        if (regexp.test(normalizedValue)) {
          return { kind: "regex", matching: rule };
        }
      } catch (error) {
        options.onInvalidRule?.({ rule: String(rule), error });
      }
    }
    return null;
  }
  function blockExactFuzzyRegex(value, config2) {
    const exact = exactMatch(config2.exactRules, value, config2.options);
    if (exact) {
      return exact;
    }
    const fuzzy = fuzzyMatch(config2.fuzzyRules, value, config2.options);
    if (fuzzy) {
      return fuzzy;
    }
    return regexMatch(config2.regexRules, value, {
      ...config2.options,
      onInvalidRule: config2.onInvalidRegexRule
    });
  }

  // src/modules/blocker/rules.ts
  var ruleDefinitions = [
    { key: "precise_uid", label: "\u7528\u6237 UID\uFF08\u7CBE\u786E\uFF09", integer: true },
    { key: "precise_uid_white", label: "\u7528\u6237 UID \u767D\u540D\u5355\uFF08\u7CBE\u786E\uFF09", integer: true },
    { key: "name", label: "\u7528\u6237\u540D\uFF08\u6A21\u7CCA\uFF09" },
    { key: "precise_name", label: "\u7528\u6237\u540D\uFF08\u7CBE\u786E\uFF09" },
    { key: "nameCanonical", label: "\u7528\u6237\u540D\uFF08\u6B63\u5219\uFF09" },
    { key: "title", label: "\u89C6\u9891\u6807\u9898\uFF08\u6A21\u7CCA\uFF09" },
    { key: "titleCanonical", label: "\u89C6\u9891\u6807\u9898\uFF08\u6B63\u5219\uFF09" },
    { key: "commentOn", label: "\u8BC4\u8BBA\u5173\u952E\u8BCD\uFF08\u6A21\u7CCA\uFF09", textarea: true },
    { key: "commentOnCanonical", label: "\u8BC4\u8BBA\u5173\u952E\u8BCD\uFF08\u6B63\u5219\uFF09", textarea: true },
    { key: "dynamic", label: "\u52A8\u6001\u5173\u952E\u8BCD\uFF08\u6A21\u7CCA\uFF09", textarea: true },
    { key: "dynamicCanonical", label: "\u52A8\u6001\u5173\u952E\u8BCD\uFF08\u6B63\u5219\uFF09", textarea: true },
    { key: "liveTitle", label: "\u76F4\u64AD\u6807\u9898\uFF08\u6A21\u7CCA\uFF09" },
    { key: "liveTitleCanonical", label: "\u76F4\u64AD\u6807\u9898\uFF08\u6B63\u5219\uFF09" },
    { key: "precise_liveRoomId", label: "\u76F4\u64AD\u95F4 ID\uFF08\u7CBE\u786E\uFF09" },
    { key: "precise_partition", label: "\u76F4\u64AD\u5206\u533A\uFF08\u7CBE\u786E\uFF09" }
  ];
  var integerRuleKeys = new Set(ruleDefinitions.filter((rule) => rule.integer).map((rule) => rule.key));
  function emptySnapshot() {
    return Object.fromEntries(ruleDefinitions.map((rule) => [rule.key, []]));
  }
  function normalizeStoredRules(value, integer = false) {
    if (!Array.isArray(value)) {
      return [];
    }
    const normalized = [];
    for (const item of value) {
      const validation = validateRuleInput(item, integer);
      if (!validation.status || normalized.includes(validation.res)) {
        continue;
      }
      normalized.push(validation.res);
    }
    return normalized;
  }
  function readRuleList(key2) {
    const integer = integerRuleKeys.has(key2);
    return normalizeStoredRules(GM_getValue(key2, []), integer);
  }
  function writeRuleList(key2, values) {
    const integer = integerRuleKeys.has(key2);
    const normalized = normalizeStoredRules(values, integer);
    const before = readRuleList(key2);
    const prefix3 = key2 === "precise_uid" ? "u:" : key2 === "precise_name" ? "n:" : "";
    if (prefix3) syncMutation(new Set(before.map((v) => prefix3 + String(v).trim().toLowerCase())), new Set(normalized.map((v) => prefix3 + String(v).trim().toLowerCase())));
    GM_setValue(key2, normalized);
    return normalized;
  }
  function readRuleSnapshot() {
    const snapshot = emptySnapshot();
    for (const rule of ruleDefinitions) {
      snapshot[rule.key] = readRuleList(rule.key);
    }
    return snapshot;
  }
  function addRuleItem(key2, value) {
    const validation = validateRuleInput(value, integerRuleKeys.has(key2));
    if (!validation.status) {
      return validation;
    }
    const current = readRuleList(key2);
    if (current.includes(validation.res)) {
      return { status: false, res: "\u5DF2\u5B58\u5728\u6B64\u5185\u5BB9" };
    }
    current.push(validation.res);
    writeRuleList(key2, current);
    return { status: true, res: "\u6DFB\u52A0\u6210\u529F", value: validation.res };
  }
  function removeRuleItem(key2, value) {
    const validation = validateRuleInput(value, integerRuleKeys.has(key2));
    if (!validation.status) {
      return validation;
    }
    const current = readRuleList(key2);
    const index = current.findIndex((item) => item === validation.res);
    if (index < 0) {
      return { status: false, res: "\u89C4\u5219\u4E0D\u5B58\u5728" };
    }
    current.splice(index, 1);
    writeRuleList(key2, current);
    return { status: true, res: "\u5DF2\u89E3\u9664\u5C4F\u853D", value: validation.res };
  }
  function importRuleSnapshot(data, mode) {
    if (!data || typeof data !== "object") {
      return { status: false, res: "\u89C4\u5219\u5185\u5BB9\u5FC5\u987B\u662F\u5BF9\u8C61" };
    }
    let changed = 0;
    for (const rule of ruleDefinitions) {
      const incoming = data[rule.key];
      if (!Array.isArray(incoming)) {
        continue;
      }
      if (mode === "overwrite") {
        const written = writeRuleList(rule.key, incoming);
        changed += written.length;
        continue;
      }
      const current = readRuleList(rule.key);
      const merged = writeRuleList(rule.key, current.concat(incoming));
      changed += Math.max(0, merged.length - current.length);
    }
    return { status: true, res: `\u5BFC\u5165\u5B8C\u6210\uFF0C\u53D8\u66F4 ${changed} \u6761` };
  }
  function exportNonEmptyRuleSnapshot() {
    const snapshot = readRuleSnapshot();
    const result = {};
    for (const rule of ruleDefinitions) {
      if (snapshot[rule.key].length > 0) {
        result[rule.key] = snapshot[rule.key];
      }
    }
    return result;
  }
  function parseRuleText(value, integer = false) {
    const lines = value.split(/\r?\n/g);
    return normalizeStoredRules(lines, integer);
  }
  function formatRuleText(values) {
    return values.join("\n");
  }

  // src/core/data-package.ts
  var atelierDataSchema = "bili-atelier-data";
  var atelierDataVersion = 1;
  var ruleKeySet = new Set(ruleDefinitions.map((rule) => rule.key));
  function splitLegacyBlockerExport(value) {
    const rules = {};
    const legacySettings = {};
    for (const [key2, data] of Object.entries(value)) {
      if (ruleKeySet.has(key2) && Array.isArray(data)) {
        rules[key2] = data;
      } else if (!key2.startsWith("BiliViewed_")) {
        legacySettings[key2] = data;
      }
    }
    return { rules, legacySettings };
  }
  function createAtelierDataPackage(input = {}) {
    return {
      schema: atelierDataSchema,
      version: atelierDataVersion,
      exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
      viewed: input.viewed || readViewedStorage(),
      blocker: {
        rules: input.blockerRules || exportNonEmptyRuleSnapshot(),
        legacySettings: input.legacySettings
      }
    };
  }
  function exportAtelierDataPackage() {
    return createAtelierDataPackage({
      viewed: readViewedStorage(),
      blockerRules: exportNonEmptyRuleSnapshot()
    });
  }
  function exportViewedDataPackage() {
    return createAtelierDataPackage({
      viewed: readViewedStorage(),
      blockerRules: {}
    });
  }
  function normalizeAtelierDataInput(value) {
    if (!value || typeof value !== "object") {
      throw new Error("\u5BFC\u5165\u5185\u5BB9\u5FC5\u987B\u662F JSON \u5BF9\u8C61");
    }
    const data = value;
    if (data.schema === atelierDataSchema) {
      return createAtelierDataPackage({
        viewed: data.viewed || { items: [], groups: {} },
        blockerRules: data.blocker?.rules || {},
        legacySettings: data.blocker?.legacySettings
      });
    }
    if (isLegacyViewedExport(data)) {
      return createAtelierDataPackage({
        viewed: normalizeLegacyViewedExport(data),
        blockerRules: {},
        legacySettings: {}
      });
    }
    const blocker = splitLegacyBlockerExport(data);
    return createAtelierDataPackage({
      viewed: { items: [], groups: {} },
      blockerRules: blocker.rules,
      legacySettings: blocker.legacySettings
    });
  }
  function importAtelierDataInput(value, mode) {
    const normalized = normalizeAtelierDataInput(value);
    const viewed = writeViewedStorage(normalized.viewed, mode);
    const rulesResult = importRuleSnapshot(normalized.blocker.rules, mode);
    return {
      status: true,
      res: `\u5BFC\u5165\u5B8C\u6210\uFF1A\u5DF2\u770B ${viewed.items.length} \u6761\uFF1B${rulesResult.res}`,
      viewed,
      rules: readRuleSnapshot()
    };
  }

  // src/modules/sync/protocol.ts
  var seedId = (key2) => `seed:${key2}`;
  function validKey(key2) {
    const value = key2.slice(2);
    if (key2.startsWith("v:")) return /^(1[0-9A-Za-z]{9}(?:-[1-9][0-9]*)?|(ep|ss)[1-9][0-9]*)$/.test(value);
    if (key2.startsWith("u:")) return /^[1-9][0-9]*$/.test(value) && Number.isSafeInteger(Number(value));
    return key2.startsWith("n:") && value.length > 0 && value === value.trim().toLowerCase();
  }
  function batch(operations) {
    return { schema: "bili-atelier-sync", version: 1, operations };
  }
  function parseBatch(value) {
    const b = value;
    if (!b || b.schema !== "bili-atelier-sync" || b.version !== 1 || !Array.isArray(b.operations) || b.operations.length > 1e4) throw new Error("\u4E0D\u652F\u6301\u7684\u540C\u6B65\u6570\u636E\u683C\u5F0F\u6216\u7248\u672C");
    const ids = /* @__PURE__ */ new Set();
    for (const o of b.operations) {
      if (!o || typeof o.key !== "string" || !validKey(o.key) || typeof o.id !== "string" || !(o.id === seedId(o.key) || /^[0-9a-f-]{36}$/.test(o.id)) || typeof o.present !== "boolean" || !Array.isArray(o.parents) || o.parents.some((p) => typeof p !== "string" || p === o.id) || ids.has(o.id) || o.id === seedId(o.key) && (!o.present || o.parents.length !== 0)) throw new Error("\u540C\u6B65\u8BB0\u5F55\u635F\u574F\uFF0C\u672A\u5E94\u7528");
      ids.add(o.id);
    }
    return b;
  }
  function mergeOperations(...groups) {
    const map = /* @__PURE__ */ new Map();
    for (const o of groups.flat()) {
      const previous = map.get(o.id);
      if (previous && (previous.key !== o.key || previous.present !== o.present || [...previous.parents].sort().join() !== [...o.parents].sort().join())) throw new Error("\u540C\u6B65\u64CD\u4F5C ID \u51B2\u7A81");
      map.set(o.id, o);
    }
    const degrees = /* @__PURE__ */ new Map(), children = /* @__PURE__ */ new Map();
    for (const o of map.values()) {
      degrees.set(o.id, 0);
      for (const p of o.parents) {
        if (!map.has(p)) {
          if (p !== seedId(o.key)) throw new Error("\u540C\u6B65\u5386\u53F2\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u6062\u590D\u88AB\u5220\u9664\u7684\u4E91\u7AEF\u6587\u4EF6");
          continue;
        }
        if (map.get(p).key !== o.key) throw new Error("\u540C\u6B65\u64CD\u4F5C\u5F15\u7528\u4E86\u5176\u4ED6\u6761\u76EE");
        degrees.set(o.id, degrees.get(o.id) + 1);
        children.set(p, [...children.get(p) || [], o.id]);
      }
    }
    const queue = [...degrees].filter(([, n]) => n === 0).map(([id]) => id);
    for (let i = 0; i < queue.length; i++) for (const id of children.get(queue[i]) || []) {
      degrees.set(id, degrees.get(id) - 1);
      if (degrees.get(id) === 0) queue.push(id);
    }
    if (queue.length !== map.size) throw new Error("\u540C\u6B65\u5386\u53F2\u5B58\u5728\u5FAA\u73AF\u5F15\u7528\uFF0C\u672A\u5E94\u7528");
    return [...map.values()];
  }
  function frontier(operations) {
    const removed = new Set(operations.flatMap((o) => o.parents));
    const result = /* @__PURE__ */ new Map();
    for (const o of operations) if (!removed.has(o.id)) result.set(o.key, [...result.get(o.key) || [], o]);
    return result;
  }
  function materialize(operations) {
    return new Set([...frontier(operations)].filter(([, ops]) => ops.every((o) => o.present)).map(([key2]) => key2));
  }
  function changes(before, after, known2, uuid2) {
    const heads = frontier(known2);
    return [.../* @__PURE__ */ new Set([...before, ...after])].filter((k) => validKey(k) && before.has(k) !== after.has(k)).map((key2) => ({
      id: uuid2(),
      key: key2,
      present: after.has(key2),
      parents: [.../* @__PURE__ */ new Set([seedId(key2), ...(heads.get(key2) || []).map((o) => o.id)])]
    }));
  }

  // src/modules/sync/b2.ts
  function parseConfig(input) {
    const c = input;
    if (!c || c.schema !== "bili-atelier-b2-config" || c.version !== 1 || ![c.keyId, c.applicationKey, c.bucketId].every((v) => typeof v === "string" && /^[A-Za-z0-9]+$/.test(v)) || typeof c.prefix !== "string" || !/^[A-Za-z0-9_-]+\/$/.test(c.prefix)) throw new Error("\u8BF7\u586B\u5199\u6709\u6548\u7684 Key ID\u3001\u5E94\u7528\u5BC6\u94A5\u3001Bucket ID \u548C\u76EE\u5F55\uFF08\u4F8B\u5982 atelier/\uFF09");
    return { schema: c.schema, version: c.version, keyId: c.keyId, applicationKey: c.applicationKey, bucketId: c.bucketId, prefix: c.prefix };
  }
  function b2Url(value) {
    const u = new URL(value);
    if (u.protocol !== "https:" || !["backblazeb2.com", "backblaze.com"].some((domain) => u.hostname.endsWith(`.${domain}`)) || u.port || u.username || u.password) throw new Error("B2 \u8FD4\u56DE\u4E86\u4E0D\u5B89\u5168\u7684\u670D\u52A1\u5730\u5740");
    return value;
  }
  var gmRequest = (url, method, headers, data) => new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      url: b2Url(url),
      method,
      headers,
      data,
      anonymous: true,
      timeout: 2e4,
      onload: (r) => {
        if (r.responseText?.length > 32 * 1024 * 1024) {
          reject(new Error("\u540C\u6B65\u6587\u4EF6\u8D85\u8FC7 32 MB\uFF0C\u672A\u5E94\u7528"));
          return;
        }
        if (r.finalUrl) {
          try {
            b2Url(r.finalUrl);
          } catch (e) {
            reject(e);
            return;
          }
        }
        if (r.status < 200 || r.status >= 300) {
          reject(new Error(`B2 HTTP ${r.status}\uFF1A${r.status === 401 ? "\u5BC6\u94A5\u65E0\u6548\u6216\u5DF2\u8FC7\u671F" : r.status === 403 ? "\u6743\u9650\u4E0D\u8DB3\u6216\u8FBE\u5230\u7528\u91CF\u4E0A\u9650" : "\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"}`));
          return;
        }
        try {
          resolve(JSON.parse(r.responseText));
        } catch {
          reject(new Error("B2 \u8FD4\u56DE\u4E86\u65E0\u6548 JSON"));
        }
      },
      onerror: () => reject(new Error("B2 \u7F51\u7EDC\u8FDE\u63A5\u5931\u8D25")),
      ontimeout: () => reject(new Error("B2 \u8FDE\u63A5\u8D85\u65F6"))
    });
  });
  var B2 = class {
    constructor(config2, request2 = gmRequest) {
      this.config = config2;
      this.request = request2;
    }
    async authorize() {
      this.auth = await this.request("https://api.backblazeb2.com/b2api/v4/b2_authorize_account", "GET", { Authorization: `Basic ${btoa(`${this.config.keyId}:${this.config.applicationKey}`)}` });
      const api = this.auth.apiInfo.storageApi;
      b2Url(api.apiUrl);
      b2Url(api.downloadUrl);
      const allowed = api.allowed;
      if (!["listFiles", "readFiles", "writeFiles"].every((p) => allowed.capabilities.includes(p)) || allowed.buckets && !allowed.buckets.some((b) => b.id === this.config.bucketId) || allowed.namePrefix && !this.config.prefix.startsWith(allowed.namePrefix)) throw new Error("\u5E94\u7528\u5BC6\u94A5\u9700\u8981\u76EE\u6807\u76EE\u5F55\u7684 listFiles\u3001readFiles\u3001writeFiles \u6743\u9650");
    }
    call(name, body) {
      return this.request(`${this.auth.apiInfo.storageApi.apiUrl}/b2api/v3/${name}`, "POST", { Authorization: this.auth.authorizationToken, "Content-Type": "application/json" }, JSON.stringify(body));
    }
    list() {
      return this.listDirectory("ops");
    }
    listLocalFollowing() {
      return this.listDirectory("local-following-ops");
    }
    async listDirectory(directory) {
      const files = [];
      let startFileName;
      do {
        const r = await this.call("b2_list_file_names", { bucketId: this.config.bucketId, prefix: `${this.config.prefix}${directory}/`, maxFileCount: 1e3, startFileName });
        files.push(...r.files);
        if (r.nextFileName && r.nextFileName === startFileName) throw new Error("B2 \u5206\u9875\u672A\u524D\u8FDB");
        startFileName = r.nextFileName || void 0;
      } while (startFileName);
      return files;
    }
    download(fileId) {
      return this.request(`${this.auth.apiInfo.storageApi.downloadUrl}/b2api/v3/b2_download_file_by_id?fileId=${encodeURIComponent(fileId)}`, "GET", { Authorization: this.auth.authorizationToken });
    }
    async upload(name, value) {
      const upload = await this.call("b2_get_upload_url", { bucketId: this.config.bucketId });
      const bytes = new TextEncoder().encode(JSON.stringify(value));
      const hash = [...new Uint8Array(await crypto.subtle.digest("SHA-1", bytes))].map((b) => b.toString(16).padStart(2, "0")).join("");
      return this.request(b2Url(upload.uploadUrl), "POST", {
        Authorization: upload.authorizationToken,
        "X-Bz-File-Name": encodeURIComponent(name),
        "Content-Type": "application/json",
        "X-Bz-Content-Sha1": hash
      }, bytes.buffer);
    }
  };

  // src/modules/local-following/protocol.ts
  var uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
  var lexical = (a, b) => a < b ? -1 : a > b ? 1 : 0;
  var validUuid = (value) => typeof value === "string" && value.length === 36 && uuidPattern.test(value);
  var validUid = (value) => /^[1-9][0-9]*$/.exec(value)?.[0] === value && Number.isSafeInteger(Number(value));
  function fields(value, names2) {
    return value !== null && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === names2.length && names2.every((name) => Object.prototype.hasOwnProperty.call(value, name));
  }
  function validFace(value) {
    if (typeof value !== "string") return false;
    if (value === "") return true;
    if (!/^https?:\/\//.test(value) || /\s/.test(value)) return false;
    try {
      const url = new URL(value);
      return Boolean(url.hostname) && !url.username && !url.password;
    } catch {
      return false;
    }
  }
  function readKey(key2) {
    if (typeof key2 !== "string") throw new Error("\u672C\u5730\u5173\u6CE8\u6761\u76EE\u952E\u635F\u574F");
    const parts = key2.split(":");
    if (parts.length === 2 && parts[0] === "follow" && validUid(parts[1])) return { kind: "follow", uid: parts[1] };
    if (parts.length === 2 && parts[0] === "group" && validUuid(parts[1])) return { kind: "group", group: parts[1] };
    if (parts.length === 4 && parts[0] === "member" && validUid(parts[1]) && validUuid(parts[2]) && validUuid(parts[3]))
      return { kind: "member", uid: parts[1], generation: parts[2], group: parts[3] };
    if (key2 === "group-order") return { kind: "order" };
    throw new Error("\u672C\u5730\u5173\u6CE8\u6761\u76EE\u952E\u635F\u574F");
  }
  function readValue(key2, value) {
    switch (key2.kind) {
      case "follow":
        if (value === null) return null;
        if (fields(value, ["name", "face", "addedAt"]) && typeof value.name === "string" && validFace(value.face) && typeof value.addedAt === "number" && Number.isSafeInteger(value.addedAt) && value.addedAt >= 0)
          return { name: value.name, face: value.face, addedAt: value.addedAt };
        break;
      case "group":
        if (value === null) return null;
        if (typeof value === "string" && value.length > 0 && value === value.trim()) return value;
        break;
      case "member":
        if (typeof value === "boolean") return value;
        break;
      case "order":
        if (Array.isArray(value) && value.every(validUuid) && new Set(value).size === value.length) return [...value];
    }
    throw new Error("\u672C\u5730\u5173\u6CE8\u6761\u76EE\u503C\u635F\u574F");
  }
  function readOperation(input) {
    if (!fields(input, ["id", "key", "value", "parents"]) || !validUuid(input.id) || !Array.isArray(input.parents) || !input.parents.every(validUuid) || new Set(input.parents).size !== input.parents.length || input.parents.includes(input.id))
      throw new Error("\u672C\u5730\u5173\u6CE8\u64CD\u4F5C\u635F\u574F");
    const key2 = readKey(input.key);
    return { id: input.id, key: input.key, value: readValue(key2, input.value), parents: [...input.parents].sort(lexical) };
  }
  function parseLocalFollowBatch(input) {
    if (!fields(input, ["schema", "version", "operations"]) || input.schema !== "bili-atelier-local-following" || input.version !== 1 || !Array.isArray(input.operations) || input.operations.length > 1e4)
      throw new Error("\u4E0D\u652F\u6301\u7684\u672C\u5730\u5173\u6CE8\u540C\u6B65\u683C\u5F0F\u6216\u7248\u672C");
    const operations = input.operations.map(readOperation);
    if (new Set(operations.map((o) => o.id)).size !== operations.length) throw new Error("\u672C\u5730\u5173\u6CE8\u6279\u6B21\u5305\u542B\u91CD\u590D\u64CD\u4F5C ID");
    return { schema: "bili-atelier-local-following", version: 1, operations };
  }
  function localFollowBatch(operations) {
    return parseLocalFollowBatch({ schema: "bili-atelier-local-following", version: 1, operations });
  }
  function mergeLocalFollowOperations(...arrays) {
    const map = /* @__PURE__ */ new Map();
    for (const array of arrays) for (const input of array) {
      const op = readOperation(input), previous = map.get(op.id);
      if (previous && JSON.stringify(previous) !== JSON.stringify(op)) throw new Error("\u672C\u5730\u5173\u6CE8\u64CD\u4F5C ID \u51B2\u7A81");
      map.set(op.id, op);
    }
    const groupKeys = new Set([...map.values()].filter((o) => o.key.startsWith("group:")).map((o) => o.key));
    const degrees = /* @__PURE__ */ new Map(), children = /* @__PURE__ */ new Map();
    for (const op of map.values()) {
      degrees.set(op.id, op.parents.length);
      for (const parentId of op.parents) {
        const parent = map.get(parentId);
        if (!parent) throw new Error("\u672C\u5730\u5173\u6CE8\u5386\u53F2\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u6062\u590D\u7F3A\u5931\u6587\u4EF6");
        if (parent.key !== op.key) throw new Error("\u672C\u5730\u5173\u6CE8\u64CD\u4F5C\u8DE8\u6761\u76EE\u5F15\u7528\u7236\u8BB0\u5F55");
        if (!children.has(parentId)) children.set(parentId, []);
        children.get(parentId).push(op.id);
      }
      const key2 = readKey(op.key);
      if (key2.kind === "member") {
        const generation = map.get(key2.generation);
        if (!generation || generation.key !== `follow:${key2.uid}` || generation.value === null || !groupKeys.has(`group:${key2.group}`))
          throw new Error("\u672C\u5730\u5173\u6CE8\u6210\u5458\u5F15\u7528\u4E0D\u5B58\u5728\u7684\u8D26\u53F7\u4EE3\u6216\u5206\u7EC4");
      }
      if (key2.kind === "order" && op.value.some((id) => !groupKeys.has(`group:${id}`)))
        throw new Error("\u672C\u5730\u5173\u6CE8\u6392\u5E8F\u5F15\u7528\u4E0D\u5B58\u5728\u7684\u5206\u7EC4");
    }
    const queue = [...degrees].filter(([, n]) => n === 0).map(([id]) => id);
    for (let i = 0; i < queue.length; i++) for (const id of children.get(queue[i]) || []) {
      degrees.set(id, degrees.get(id) - 1);
      if (degrees.get(id) === 0) queue.push(id);
    }
    if (queue.length !== map.size) throw new Error("\u672C\u5730\u5173\u6CE8\u5386\u53F2\u5B58\u5728\u5FAA\u73AF\u5F15\u7528");
    return [...map.values()].sort((a, b) => lexical(a.id, b.id));
  }
  function headsOf(operations) {
    const covered = new Set(operations.flatMap((o) => o.parents));
    const heads = /* @__PURE__ */ new Map();
    for (const op of operations) if (!covered.has(op.id)) {
      if (!heads.has(op.key)) heads.set(op.key, []);
      heads.get(op.key).push(op);
    }
    return heads;
  }
  function localFollowFrontier(operations) {
    return headsOf(mergeLocalFollowOperations(operations));
  }
  function winner(heads) {
    return heads.find((o) => o.value === null || o.value === false) || heads[heads.length - 1];
  }
  function materializeLocalFollow(operations) {
    const heads = localFollowFrontier(operations), groupMap = /* @__PURE__ */ new Map();
    for (const [key2, ops] of heads) if (key2.startsWith("group:")) {
      const value = winner(ops).value;
      if (value !== null) groupMap.set(key2.slice(6), { id: key2.slice(6), name: value });
    }
    const orderHeads = heads.get("group-order");
    const order = orderHeads ? winner(orderHeads).value.filter((id) => groupMap.has(id)) : [];
    const ordered = new Set(order);
    order.push(...[...groupMap.keys()].filter((id) => !ordered.has(id)).sort(lexical));
    const groups = order.map((id) => groupMap.get(id));
    const accounts = [];
    for (const [key2, ops] of heads) if (key2.startsWith("follow:")) {
      const chosen = winner(ops);
      if (chosen.value === null) continue;
      const uid = key2.slice(7), generations = ops.map((o) => o.id);
      const groupIds = order.filter((group) => {
        const memberships = generations.flatMap((generation) => heads.get(`member:${uid}:${generation}:${group}`) || []);
        return memberships.some((o) => o.value === true) && !memberships.some((o) => o.value === false);
      });
      accounts.push({ uid, ...chosen.value, generations, groupIds });
    }
    accounts.sort((a, b) => a.uid.length - b.uid.length || lexical(a.uid, b.uid));
    return { accounts, groups };
  }

  // src/modules/local-following/store.ts
  var prefix = "AtelierLocalFollow_";
  var localFollowChangedEvent = "atelier-local-following-changed";
  var listeners = /* @__PURE__ */ new Set();
  var uuid = () => crypto.randomUUID();
  function localFollowRecords() {
    const result = /* @__PURE__ */ new Map();
    const add = (id, raw) => {
      if (!/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/.test(id)) throw new Error("\u672C\u5730\u5173\u6CE8\u65E5\u5FD7\u6587\u4EF6\u540D\u635F\u574F");
      const batch2 = parseLocalFollowBatch(raw);
      const old = result.get(id);
      if (old && canonicalBatch(old) !== canonicalBatch(batch2)) {
        throw new Error("\u672C\u5730\u5173\u6CE8\u6279\u6B21 ID \u51B2\u7A81");
      }
      result.set(id, batch2);
    };
    for (const key2 of GM_listValues()) {
      if (key2.startsWith(prefix + "record_")) add(key2.slice((prefix + "record_").length), GM_getValue(key2));
      else if (key2.startsWith(prefix + "pull_")) {
        const value = GM_getValue(key2);
        if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("\u672C\u5730\u5173\u6CE8\u62C9\u53D6\u65E5\u5FD7\u635F\u574F");
        for (const [id, raw] of Object.entries(value)) add(id, raw);
      }
    }
    return [...result].sort(([a], [b]) => a.localeCompare(b));
  }
  var localFollowKnown = () => mergeLocalFollowOperations(...localFollowRecords().map(([, batch2]) => batch2.operations));
  var localFollowSnapshot = () => materializeLocalFollow(localFollowKnown());
  var localFollowIsSent = (id) => GM_getValue(prefix + "sent_" + id, false) === true;
  var markLocalFollowSent = (id) => {
    GM_setValue(prefix + "sent_" + id, true);
  };
  var localFollowPending = () => localFollowRecords().filter(([id]) => !localFollowIsSent(id)).reduce((n, [, batch2]) => n + batch2.operations.length, 0);
  var localFollowHasMerged = () => GM_getValue(prefix + "merged", false) === true;
  var localFollowBackup = () => GM_getValue(prefix + "backup", null);
  function onLocalFollowMutation(listener2) {
    listeners.add(listener2);
    return () => {
      listeners.delete(listener2);
    };
  }
  function notify(local) {
    window.dispatchEvent(new Event(localFollowChangedEvent));
    if (local) for (const listener2 of listeners) listener2();
  }
  function pulse() {
    GM_setValue(prefix + "pulse", uuid());
  }
  var started = false;
  function startLocalFollowingStore() {
    if (started) return;
    started = true;
    if (typeof GM_addValueChangeListener === "function") GM_addValueChangeListener(prefix + "pulse", (_, __, ___, remote) => {
      if (remote) notify(false);
    });
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) notify(false);
    });
  }
  function mergeRemoteLocalFollow(remote) {
    const parsed = remote.map(([id, raw]) => {
      if (!/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/.test(id)) throw new Error("\u8FDC\u7AEF\u672C\u5730\u5173\u6CE8\u6279\u6B21\u540D\u79F0\u65E0\u6548");
      return [id, parseLocalFollowBatch(raw)];
    });
    const current = localFollowRecords();
    const all = new Map(current);
    for (const [id, incoming] of parsed) {
      const existing = all.get(id);
      if (existing && canonicalBatch(existing) !== canonicalBatch(incoming)) throw new Error("\u672C\u5730\u5173\u6CE8\u6279\u6B21 ID \u51B2\u7A81");
      all.set(id, incoming);
    }
    mergeLocalFollowOperations(...[...all.values()].map((batch2) => batch2.operations));
    if (!localFollowHasMerged()) {
      if (localFollowBackup() === null) GM_setValue(prefix + "backup", {
        schema: "bili-atelier-local-following-backup",
        version: 1,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        snapshot: localFollowSnapshot(),
        batches: Object.fromEntries(current)
      });
    }
    if (parsed.length) GM_setValue(prefix + "pull_" + uuid(), Object.fromEntries(parsed));
    for (const [id] of parsed) markLocalFollowSent(id);
    GM_setValue(prefix + "merged", true);
    pulse();
    notify(false);
  }
  function canonicalBatch(batch2) {
    return JSON.stringify(batch2.operations.map((op) => ({ id: op.id, key: op.key, value: op.value, parents: [...op.parents].sort() })).sort((a, b) => a.id.localeCompare(b.id)));
  }
  function edit(intent) {
    const known2 = localFollowKnown();
    const changes2 = intent(materializeLocalFollow(known2));
    if (!changes2.length) return;
    const heads = localFollowFrontier(known2);
    const operations = [];
    for (const [key2, value] of changes2) {
      const operation = { id: uuid(), key: key2, value, parents: (heads.get(key2) ?? []).map((head) => head.id).sort() };
      operations.push(operation);
      heads.set(key2, [operation]);
    }
    mergeLocalFollowOperations(known2, operations);
    if (operations.length <= 1e4) GM_setValue(prefix + "record_" + uuid(), localFollowBatch(operations));
    else {
      const transaction = {};
      for (let index = 0; index < operations.length; index += 1e4) transaction[uuid()] = localFollowBatch(operations.slice(index, index + 1e4));
      GM_setValue(prefix + "pull_" + uuid(), transaction);
    }
    pulse();
    notify(true);
  }
  function normalizeLocalUid(value) {
    const text2 = String(value ?? "").trim();
    return /^[1-9]\d*$/.test(text2) && Number.isSafeInteger(Number(text2)) ? text2 : null;
  }
  function parseLocalFollowInput(value) {
    const direct = normalizeLocalUid(value);
    if (direct) return direct;
    try {
      const url = new URL(value.trim().replace(/^\/\//, "https://"));
      if (url.hostname !== "space.bilibili.com" || !/^https?:$/.test(url.protocol) || url.username || url.password || url.port) return null;
      return normalizeLocalUid(url.pathname.match(/^\/(\d+)(?:\/|$)/)?.[1]);
    } catch {
      return null;
    }
  }
  function safeLocalFace(value) {
    if (typeof value !== "string" || !value) return "";
    try {
      const url = new URL(value.startsWith("//") ? "https:" + value : value);
      return /^https?:$/.test(url.protocol) && !url.username && !url.password ? url.href : "";
    } catch {
      return "";
    }
  }
  function addLocalFollow(profile, now = Date.now()) {
    const uid = normalizeLocalUid(profile.uid);
    if (!uid) throw new Error("\u65E0\u6548\u7684\u8D26\u53F7 UID");
    edit((snapshot) => snapshot.accounts.some((account) => account.uid === uid) ? [] : [
      [`follow:${uid}`, { name: String(profile.name).trim(), face: safeLocalFace(profile.face), addedAt: now }]
    ]);
  }
  function removeLocalFollow(uid) {
    removeLocalFollows([uid]);
  }
  function removeLocalFollows(uids) {
    const selected = new Set(uids);
    edit((snapshot) => snapshot.accounts.filter((account) => selected.has(account.uid)).map((account) => [`follow:${account.uid}`, null]));
  }
  function createLocalFollowGroup(name) {
    const id = uuid();
    edit((snapshot) => [[`group:${id}`, name.trim()], ["group-order", [...snapshot.groups.map((group) => group.id), id]]]);
    return id;
  }
  function renameLocalFollowGroup(id, name) {
    edit((snapshot) => {
      if (!snapshot.groups.some((group) => group.id === id)) throw new Error("\u8BE5\u5206\u7EC4\u5DF2\u88AB\u5220\u9664");
      return [[`group:${id}`, name.trim()]];
    });
  }
  function deleteLocalFollowGroup(id) {
    edit((snapshot) => snapshot.groups.some((group) => group.id === id) ? [[`group:${id}`, null]] : []);
  }
  function moveLocalFollowGroup(id, direction) {
    edit((snapshot) => {
      const order = snapshot.groups.map((group) => group.id), index = order.indexOf(id);
      if (index < 0 || index + direction < 0 || index + direction >= order.length) return [];
      [order[index], order[index + direction]] = [order[index + direction], order[index]];
      return [["group-order", order]];
    });
  }
  function setLocalFollowMembership(uids, groupId, member) {
    const chosen = new Set(uids);
    edit((snapshot) => {
      if (!snapshot.groups.some((group) => group.id === groupId)) throw new Error("\u8BE5\u5206\u7EC4\u5DF2\u88AB\u5220\u9664");
      return snapshot.accounts.filter((account) => chosen.has(account.uid)).flatMap((account) => account.generations.map((generation) => [`member:${account.uid}:${generation}:${groupId}`, member]));
    });
  }
  function readLocalFollowCache(uid) {
    return GM_getValue(prefix + "cache_" + uid, {}) || {};
  }
  function writeLocalFollowCache(uid, patch) {
    if (!normalizeLocalUid(uid)) return;
    const current = readLocalFollowCache(uid), updates = { ...current.updates };
    for (const [kind, value] of Object.entries(patch.updates ?? {})) if (Number.isSafeInteger(value) && value > (updates[kind] ?? 0)) updates[kind] = value;
    GM_setValue(prefix + "cache_" + uid, { ...current, ...patch, updates });
    pulse();
    notify(false);
  }
  function recordLocalFollowVisit(uid, now = Date.now()) {
    if (localFollowSnapshot().accounts.some((account) => account.uid === uid)) writeLocalFollowCache(uid, { viewedAt: now });
  }
  var readLocalFollowPreferences = () => GM_getValue(prefix + "preferences", null);
  var writeLocalFollowPreferences = (value) => GM_setValue(prefix + "preferences", value);

  // src/modules/sync/service.ts
  var prefix2 = "AtelierSync_";
  var recordsPrefix = `${prefix2}record_`;
  var getConfig = () => GM_getValue(`${prefix2}config`, null);
  var paused = () => GM_getValue(`${prefix2}paused`, true);
  function setPaused(value) {
    GM_setValue(`${prefix2}paused`, value);
    notify2();
    if (!value) schedule();
  }
  function saveConfig(value) {
    if (busy) throw new Error("\u540C\u6B65\u6B63\u5728\u8FDB\u884C\uFF0C\u8BF7\u5B8C\u6210\u540E\u518D\u4FEE\u6539\u8FDE\u63A5\u914D\u7F6E");
    const c = parseConfig(value), old = getConfig();
    if (old && GM_getValue(prefix2 + "merged", false) && (old.bucketId !== c.bucketId || old.prefix !== c.prefix)) throw new Error("\u5DF2\u6709\u540C\u6B65\u5386\u53F2\uFF0C\u4E0D\u80FD\u76F4\u63A5\u5207\u6362\u5B58\u50A8\u6876\u6216\u76EE\u5F55\uFF1B\u8BF7\u7EE7\u7EED\u4F7F\u7528\u539F\u540C\u6B65\u7A7A\u95F4");
    GM_setValue(`${prefix2}config`, c);
    retryAfter = 0;
    notify2();
  }
  function records() {
    const local = GM_listValues().filter((k) => k.startsWith(recordsPrefix)).map((k) => [k.slice(recordsPrefix.length), parseBatch(GM_getValue(k))]);
    const pulls = GM_listValues().filter((k) => k.startsWith(prefix2 + "pull_")).flatMap((k) => Object.entries(GM_getValue(k)).map(([id, b]) => [id, parseBatch(b)]));
    return [...new Map([...local, ...pulls]).entries()];
  }
  function known() {
    return mergeOperations(...records().map(([, b]) => b.operations));
  }
  function saveOperations(ops) {
    for (let i = 0; i < ops.length; i += 1e3) GM_setValue(recordsPrefix + crypto.randomUUID(), batch(ops.slice(i, i + 1e3)));
  }
  function localKeys() {
    return new Set([
      ...readViewedStorage().items.map((v) => `v:${v}`),
      ...readRuleList("precise_uid").map((v) => `u:${v}`),
      ...readRuleList("precise_name").map((v) => `n:${String(v).trim().toLowerCase()}`)
    ].filter(validKey));
  }
  function apply() {
    const desired = materialize(known()), current = localKeys();
    if (desired.size === current.size && [...desired].every((k) => current.has(k))) return;
    applyFromSync(() => {
      const viewed = readViewedStorage().items.filter((v) => !validKey(`v:${v}`));
      writeViewedStorage({ items: [...viewed, ...[...desired].filter((k) => k.startsWith("v:")).map((k) => k.slice(2))] }, "overwrite");
      for (const [type, key2] of [["u:", "precise_uid"], ["n:", "precise_name"]]) {
        const unsupported = readRuleList(key2).filter((v) => !validKey(`${type}${String(v).trim().toLowerCase()}`));
        writeRuleList(key2, [...unsupported, ...[...desired].filter((k) => k.startsWith(type)).map((k) => k.slice(2))]);
      }
    });
    window.dispatchEvent(new Event("atelier-sync-applied"));
  }
  function notify2() {
    window.dispatchEvent(new Event("atelier-sync-status"));
  }
  function status() {
    const viewedAndBlockedPending = records().filter(([id]) => !GM_getValue(`${prefix2}sent_${id}`, false)).reduce((n, [, b]) => n + b.operations.length, 0);
    const followingPending = localFollowPending();
    return { pending: viewedAndBlockedPending + followingPending, followingPending, busy, lastSuccess: GM_getValue(`${prefix2}success`, ""), error: GM_getValue(`${prefix2}error`, "") };
  }
  var timer = 0;
  var busy = false;
  var failures = 0;
  var retryAfter = 0;
  function schedule() {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (!document.hidden) void synchronize();
    }, 3e3);
  }
  async function testConnection(config2) {
    const b2 = new B2(parseConfig(config2));
    await b2.authorize();
    await b2.list();
    await b2.listLocalFollowing();
  }
  async function synchronize(manual = false) {
    const config2 = getConfig();
    if (!config2 || paused() || busy || !manual && Date.now() < retryAfter) return "skipped";
    busy = true;
    notify2();
    try {
      const b2 = new B2(parseConfig(config2));
      await b2.authorize();
      const files = await b2.list();
      const remote = [];
      const cached = new Set(records().map(([id]) => id));
      for (const file of files) {
        if (paused()) return "cancelled";
        if (!file.fileName.startsWith(`${config2.prefix}ops/`)) throw new Error("\u540C\u6B65\u6587\u4EF6\u76EE\u5F55\u4E0D\u5339\u914D");
        const match = file.fileName.slice(`${config2.prefix}ops/`.length).match(/^([0-9a-f-]{36})\.json$/);
        if (!match) throw new Error("\u540C\u6B65\u76EE\u5F55\u542B\u672A\u77E5\u6587\u4EF6\uFF0C\u8BF7\u4F7F\u7528\u72EC\u7ACB\u7684 atelier/ \u76EE\u5F55");
        const id = match[1];
        if (!cached.has(id)) remote.push([id, parseBatch(await b2.download(file.fileId))]);
      }
      const followingRemote = [];
      const followingCached = new Set(localFollowRecords().map(([id]) => id));
      for (const file of await b2.listLocalFollowing()) {
        if (paused()) return "cancelled";
        const base = `${config2.prefix}local-following-ops/`;
        if (!file.fileName.startsWith(base)) throw new Error("\u672C\u5730\u5173\u6CE8\u540C\u6B65\u6587\u4EF6\u76EE\u5F55\u4E0D\u5339\u914D");
        const match = file.fileName.slice(base.length).match(/^([0-9a-f-]{36})\.json$/);
        if (!match) throw new Error("\u672C\u5730\u5173\u6CE8\u540C\u6B65\u76EE\u5F55\u542B\u672A\u77E5\u6587\u4EF6\uFF0C\u672A\u5E94\u7528");
        if (!followingCached.has(match[1])) followingRemote.push([match[1], parseLocalFollowBatch(await b2.download(file.fileId))]);
      }
      if (paused()) return "cancelled";
      mergeOperations(known(), ...remote.map(([, b]) => b.operations));
      mergeLocalFollowOperations(localFollowKnown(), ...followingRemote.map(([, b]) => b.operations));
      if (!GM_getValue(prefix2 + "merged", false)) {
        GM_setValue(prefix2 + "backup", exportAtelierDataPackage());
        GM_setValue(prefix2 + "merged", true);
      }
      mergeRemoteLocalFollow(followingRemote);
      if (remote.length) GM_setValue(prefix2 + "pull_" + crypto.randomUUID(), Object.fromEntries(remote));
      for (const [id] of remote) GM_setValue(prefix2 + "sent_" + id, true);
      apply();
      for (const [id, b] of records()) {
        if (paused()) break;
        if (GM_getValue(`${prefix2}sent_${id}`, false)) continue;
        await b2.upload(`${config2.prefix}ops/${id}.json`, b);
        GM_setValue(`${prefix2}sent_${id}`, true);
      }
      for (const [id, b] of localFollowRecords()) {
        if (paused()) break;
        if (localFollowIsSent(id)) continue;
        await b2.upload(`${config2.prefix}local-following-ops/${id}.json`, b);
        markLocalFollowSent(id);
      }
      if (paused()) return "cancelled";
      GM_setValue(`${prefix2}success`, (/* @__PURE__ */ new Date()).toISOString());
      GM_setValue(`${prefix2}error`, "");
      failures = 0;
      retryAfter = 0;
      GM_setValue(`${prefix2}pulse`, crypto.randomUUID());
      return "success";
    } catch (e) {
      GM_setValue(`${prefix2}error`, e instanceof Error ? e.message : "\u540C\u6B65\u5931\u8D25");
      retryAfter = Date.now() + Math.min(15 * 6e4, 3e4 * 2 ** Math.min(failures++, 5));
      return "error";
    } finally {
      busy = false;
      notify2();
    }
  }
  function downloadBackup() {
    const value = GM_getValue(`${prefix2}backup`, null);
    const url = URL.createObjectURL(new Blob([JSON.stringify(value, null, 2)], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "atelier-before-sync.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  function downloadLocalFollowBackup() {
    const value = localFollowBackup();
    if (value == null) throw new Error("\u672C\u5730\u5173\u6CE8\u5C1A\u672A\u9996\u6B21\u5408\u5E76\uFF0C\u5907\u4EFD\u5C06\u5728\u9996\u6B21\u5408\u5E76\u524D\u4FDD\u5B58");
    const url = URL.createObjectURL(new Blob([JSON.stringify(value, null, 2)], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "atelier-local-following-before-sync.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  function startSync() {
    if (!GM_getValue(`${prefix2}initialized`, false)) {
      if (!GM_getValue(`${prefix2}backup`, null)) GM_setValue(`${prefix2}backup`, exportAtelierDataPackage());
      saveOperations([...localKeys()].map((key2) => ({ id: seedId(key2), key: key2, present: true, parents: [] })));
      GM_setValue(`${prefix2}initialized`, true);
    }
    apply();
    onSyncMutation((before, after) => {
      saveOperations(changes(before, after, known(), () => crypto.randomUUID()));
      GM_setValue(`${prefix2}pulse`, crypto.randomUUID());
      notify2();
      schedule();
    });
    onLocalFollowMutation(() => {
      notify2();
      schedule();
    });
    if (typeof GM_addValueChangeListener === "function") GM_addValueChangeListener(`${prefix2}pulse`, (_, __, ___, remote) => {
      if (remote) {
        apply();
        notify2();
      }
    });
    window.addEventListener("online", schedule);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        apply();
        schedule();
      }
    });
    window.setInterval(() => {
      if (!document.hidden) void synchronize();
    }, 6e4);
    schedule();
  }

  // src/ui/assets/xp-sounds/catalog.json
  var catalog_default = {
    schema: "bili-atelier-xp-sounds",
    version: 1,
    defaultVolume: 0.55,
    source: {
      imageName: "xp sp3 official.iso",
      bytes: 630237184,
      volume: "GRTMPVOL_CN"
    },
    categories: [
      {
        id: "navigation",
        name: "\u5BFC\u822A\u4E0E\u7A97\u53E3",
        sample: "xpstart",
        defaultVolume: 1,
        defaultEnabled: true
      },
      {
        id: "controls",
        name: "\u6309\u94AE\u4E0E\u9009\u62E9",
        sample: "xpmenu",
        defaultVolume: 1,
        defaultEnabled: true
      }
    ],
    cues: {
      control: {
        sound: "xpmenu",
        category: "controls",
        priority: 10
      },
      navigate: {
        sound: "xpstart",
        category: "navigation",
        priority: 40
      },
      open: {
        sound: "xprestor",
        category: "navigation",
        priority: 40
      },
      close: {
        sound: "xpmin",
        category: "navigation",
        priority: 40
      },
      expand: {
        sound: "xprestor",
        category: "navigation",
        priority: 40
      },
      collapse: {
        sound: "xpmin",
        category: "navigation",
        priority: 40
      }
    },
    sounds: [
      {
        id: "xpballn",
        file: "xpballn.wav",
        name: "Windows XP \u6C14\u7403",
        previewOnly: true,
        durationMs: 144,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -18.24,
        rmsDbFS: -33.71,
        gain: 0.81655,
        bytes: 6400,
        sha256: "c9de87a87b68dd754fa29f2989c240949ad9b1f0423d019ca68afcd86e107639",
        source: "I386/XPBALLN.WA_",
        compressedSha256: "1c8d7665108ad4af42bec4ef940d3dad949d4053d9418e63616284a2d1ad5ffb"
      },
      {
        id: "xpbatcrt",
        file: "xpbatcrt.wav",
        name: "Windows XP \u7535\u6C60\u7535\u529B\u4E25\u91CD\u77ED\u7F3A",
        previewOnly: true,
        durationMs: 836,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -0.17,
        rmsDbFS: -12.84,
        gain: 0.10194,
        bytes: 36910,
        sha256: "cb02dd9f8b4d18aab9a5c51a26faac12e861dd362800a12292f243432a982325",
        source: "I386/XPBATCRT.WA_",
        compressedSha256: "aa2b39585f31ae73645fe7a5e3b986a2e44e0c4722712da9ee00daf32c6ffc3f"
      },
      {
        id: "xpbatlow",
        file: "xpbatlow.wav",
        name: "Windows XP \u7535\u6C60\u4E0D\u8DB3",
        previewOnly: true,
        durationMs: 1220,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -1.31,
        rmsDbFS: -16.43,
        gain: 0.11624,
        bytes: 53864,
        sha256: "bd4a58b1e2b8e93bcf5b76df3e4a9f67ce0926107a5702ed6bac0e63466a22fd",
        source: "I386/XPBATLOW.WA_",
        compressedSha256: "f002dee050cb80f908c08eb7b713aa1c75096419537342533571781e4c1c4fdc"
      },
      {
        id: "xpblkpop",
        file: "xpblkpop.wav",
        name: "Windows XP \u5F39\u51FA\u7A97\u53E3\u5DF2\u963B\u6B62",
        previewOnly: true,
        durationMs: 167,
        channels: 2,
        sampleRate: 44100,
        bits: 16,
        peakDbFS: -13.98,
        rmsDbFS: -34.22,
        gain: 0.50005,
        bytes: 29444,
        sha256: "df7cad111688dadb00469203dd7228df99e49e86ae7ba937e308d947cd9790f2",
        source: "I386/XPBLKPOP.WA_",
        compressedSha256: "baae17740810abd3d43d5c703ff801df8be3ebf63726a02d2c29f424ba55a0b0"
      },
      {
        id: "xpcrtstp",
        file: "xpcrtstp.wav",
        name: "Windows XP \u5173\u952E\u6027\u7EC8\u6B62",
        previewOnly: true,
        durationMs: 892,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -3.2,
        rmsDbFS: -16.48,
        gain: 0.14448,
        bytes: 39382,
        sha256: "1b86a1b8b7b5925f9346b64115b0b92744a142b06b09f44263a57419bc2bb6e6",
        source: "I386/XPCRTSTP.WA_",
        compressedSha256: "8dff0499e501012337f14551e4350d017a2a88fa5f36b7ee84c7c6442cd62b8e"
      },
      {
        id: "xpdef",
        file: "xpdef.wav",
        name: "Windows XP \u9ED8\u8BA4\u503C",
        previewOnly: true,
        durationMs: 555,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -9.77,
        rmsDbFS: -27.31,
        gain: 0.30791,
        bytes: 24530,
        sha256: "d0426433cb153f860f02320408a1922558742bc3d170eb47715192ff86a66a16",
        source: "I386/XPDEF.WA_",
        compressedSha256: "1d3258f9f2b9070370d49a069d3cf79ca5a89163063b84f479af7a0d641d3fa7"
      },
      {
        id: "xpding",
        file: "xpding.wav",
        name: "Windows XP \u53EE\u5F53\u58F0",
        previewOnly: true,
        durationMs: 387,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -11.74,
        rmsDbFS: -21.34,
        gain: 0.38651,
        bytes: 17132,
        sha256: "20fc59d9f846bc32b899880fae0878208856718b75e6158526308b900af8a9bd",
        source: "I386/XPDING.WA_",
        compressedSha256: "3fa29e9bcb7f38b6dfc1aec0865270840ae69c9261ecc48eea4c5e81d0fdecd7"
      },
      {
        id: "xperror",
        file: "xperror.wav",
        name: "Windows XP \u9519\u8BEF",
        previewOnly: true,
        durationMs: 1e3,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -6.98,
        rmsDbFS: -23.56,
        gain: 0.22343,
        bytes: 44136,
        sha256: "4b51ec1b1b14889bc2c2cdad8c80dafc974d78b9292c3ccb344e44e93383cac4",
        source: "I386/XPERROR.WA_",
        compressedSha256: "cb1b985cab19466befd27b5d9628165dda8a1cabbc880dc3c9bfec68a26ae8d1"
      },
      {
        id: "xpexcl",
        file: "xpexcl.wav",
        name: "Windows XP \u60CA\u53F9\u53F7",
        previewOnly: true,
        durationMs: 964,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -16.42,
        rmsDbFS: -32.09,
        gain: 0.66185,
        bytes: 42576,
        sha256: "b57b8e8818c424452ca4fb8abb219ae01c0e31db2f955e1f85d9fcb5a0dabfbe",
        source: "I386/XPEXCL.WA_",
        compressedSha256: "0bc7bb68966af22cac6444392a3ea9956cb98177ef2648dbc8d025051118eea6"
      },
      {
        id: "xphdfail",
        file: "xphdfail.wav",
        name: "Windows XP \u786C\u4EF6\u6545\u969C",
        previewOnly: true,
        durationMs: 829,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -12.98,
        rmsDbFS: -25.32,
        gain: 0.44558,
        bytes: 36614,
        sha256: "fe6e852ff646c0a896995632f76a3e390bea6163b40639c87bf45c1d8a7475c2",
        source: "I386/XPHDFAIL.WA_",
        compressedSha256: "7daa31c4f966dd10d85f992b6f601f9ec107a2f4d6c44539474ee3a6e6a97678"
      },
      {
        id: "xphdinst",
        file: "xphdinst.wav",
        name: "Windows XP \u786C\u4EF6\u63D2\u5165",
        previewOnly: true,
        durationMs: 830,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -14.91,
        rmsDbFS: -28.67,
        gain: 0.55624,
        bytes: 36636,
        sha256: "a3e44db9179591a705baed6daa00efb988197c0698a9747980126d5939e9d506",
        source: "I386/XPHDINST.WA_",
        compressedSha256: "59692e7ac46240e9cf8b9ad16007bc837b4f05a9a81787cf79120ae855ab9d79"
      },
      {
        id: "xphdrem",
        file: "xphdrem.wav",
        name: "Windows XP \u786C\u4EF6\u5220\u9664",
        previewOnly: true,
        durationMs: 828,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -15.55,
        rmsDbFS: -28.3,
        gain: 0.59938,
        bytes: 36538,
        sha256: "c4d09c6ad6a9090c4e611330a7501f7a84abc7c777c6e3d1915179f8d1ed45f3",
        source: "I386/XPHDREM.WA_",
        compressedSha256: "1af16d0041acfdc07c2268ed2186a6dd16c1e602c11e39e4ef17b27d9e7e57fb"
      },
      {
        id: "xpinfbar",
        file: "xpinfbar.wav",
        name: "Windows XP \u4FE1\u606F\u680F",
        previewOnly: true,
        durationMs: 109,
        channels: 2,
        sampleRate: 44100,
        bits: 16,
        peakDbFS: -4.2,
        rmsDbFS: -11.08,
        gain: 0.16218,
        bytes: 20336,
        sha256: "b4dfbdfd8d6a102123a7966da358781bd32bb6d78e833514705cb7de76efa410",
        source: "I386/XPINFBAR.WA_",
        compressedSha256: "17ec22ddf2a76dd9b77a42271491228a905accbf0cd1028691fbc89d248b071e"
      },
      {
        id: "xplogoff",
        file: "xplogoff.wav",
        name: "Windows XP \u6CE8\u9500\u97F3",
        previewOnly: true,
        durationMs: 2037,
        channels: 2,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -10.39,
        rmsDbFS: -27.7,
        gain: 0.33066,
        bytes: 179704,
        sha256: "e0c0e5dea2550c8f235c0bb1584d9011a35ca23bc18597bf7ac6581efcd7b7aa",
        source: "I386/XPLOGOFF.WA_",
        compressedSha256: "47fbfa45e605ca3c84a13243267b02972c33f0ef879b31133412c2b528555f53"
      },
      {
        id: "xplogon",
        file: "xplogon.wav",
        name: "Windows XP \u767B\u5F55\u97F3",
        previewOnly: true,
        durationMs: 2156,
        channels: 2,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -10.04,
        rmsDbFS: -27.67,
        gain: 0.31758,
        bytes: 190208,
        sha256: "8d71fba4267fb3454030c7289079421a08fc3e773caa47107d832f855ae85396",
        source: "I386/XPLOGON.WA_",
        compressedSha256: "3e48b114a7a3956ced53f0a469a7d85717bd00b77522c335d85b77b3726e5f03"
      },
      {
        id: "xpmenu",
        file: "xpmenu.wav",
        name: "Windows XP \u83DC\u5355\u547D\u4EE4",
        previewOnly: false,
        durationMs: 31,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -20.6,
        rmsDbFS: -36.23,
        gain: 1,
        bytes: 1404,
        sha256: "da4fc6f8917b97725e6de85bb45b574c7895ec46672e6eb439a462cfd9940ac7",
        source: "I386/XPMENU.WA_",
        compressedSha256: "2c73d31fdd47a2f456b64682f568ab6362a7ce8f6a6b6d38cc0ee8132b59d8f5"
      },
      {
        id: "xpmin",
        file: "xpmin.wav",
        name: "Windows XP \u6700\u5C0F\u5316",
        previewOnly: false,
        durationMs: 511,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -24.38,
        rmsDbFS: -37.4,
        gain: 1,
        bytes: 22580,
        sha256: "974da6baee4187c37e514186b99691132988140cca95402589c6fdc1417e5926",
        source: "I386/XPMIN.WA_",
        compressedSha256: "37a5861aa70198e03c83ecdd5252e51d8a6be4cf13e241dda491e46bd4201de2"
      },
      {
        id: "xpnotify",
        file: "xpnotify.wav",
        name: "Windows XP \u901A\u77E5",
        previewOnly: true,
        durationMs: 1110,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -18.71,
        rmsDbFS: -36.89,
        gain: 0.86164,
        bytes: 48988,
        sha256: "760cdd5685008255d6e188a8c528ebcb74daf806bb24a81c2a36086df6a95c76",
        source: "I386/XPNOTIFY.WA_",
        compressedSha256: "2f9684cd2952a85245a86b9d06973b13e7149ff6cf3ffafe82bcdce16a2dc1f3"
      },
      {
        id: "xpprint",
        file: "xpprint.wav",
        name: "Windows XP \u6253\u5370\u7ED3\u675F",
        previewOnly: true,
        durationMs: 991,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -18.3,
        rmsDbFS: -34.52,
        gain: 0.82249,
        bytes: 43762,
        sha256: "e411c02471876c4d1075ec8fcd406e99ac7c9a5e0c6322ed579de50c8ca3b844",
        source: "I386/XPPRINT.WA_",
        compressedSha256: "324d91096b47c0f0fc35e65ab37e067ba403793b7eb211feb9a56288b119c763"
      },
      {
        id: "xprecycl",
        file: "xprecycl.wav",
        name: "Windows XP \u56DE\u6536",
        previewOnly: true,
        durationMs: 516,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -17.06,
        rmsDbFS: -38.1,
        gain: 0.71312,
        bytes: 22816,
        sha256: "a8a7028f9fe989cdde61bf22b73f0ff23ae291dbf8e056bb09682a7487c49ad7",
        source: "I386/XPRECYCL.WA_",
        compressedSha256: "a2b79e1e62ec0b453982b30a38ad861838e7e09bc1498717466ca480abfe78e6"
      },
      {
        id: "xprestor",
        file: "xprestor.wav",
        name: "Windows XP \u8FD8\u539F",
        previewOnly: false,
        durationMs: 440,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -24.36,
        rmsDbFS: -37.68,
        gain: 1,
        bytes: 19458,
        sha256: "480dea5b1808dd67c5a5946e7a47e8e582d5cb1c7fdce4b037140157da0ecadf",
        source: "I386/XPRESTOR.WA_",
        compressedSha256: "bf362bfb0c53d25d64075f046d9406da9b071c688f066c1c9edfc38174dd231e"
      },
      {
        id: "xpringin",
        file: "xpringin.wav",
        name: "Windows XP \u7535\u8BDD\u62E8\u5165\u58F0",
        previewOnly: true,
        durationMs: 882,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -22.82,
        rmsDbFS: -34.27,
        gain: 1,
        bytes: 38930,
        sha256: "b2cd4e4a977606abb8c35b7d446d6c322ee4bda4c0c722ef240f0c51d7ddc713",
        source: "I386/XPRINGIN.WA_",
        compressedSha256: "4061db3507f25e2cefdd4b7bbf9f73042c45525c01f4bdb017e354bd43c552da"
      },
      {
        id: "xprngout",
        file: "xprngout.wav",
        name: "Windows XP \u7535\u8BDD\u62E8\u51FA\u58F0",
        previewOnly: true,
        durationMs: 499,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -20.25,
        rmsDbFS: -26.76,
        gain: 1,
        bytes: 22070,
        sha256: "d994081372c2794642da68212d49c6a64263f88a9fde5cc96583b43574c26bb0",
        source: "I386/XPRNGOUT.WA_",
        compressedSha256: "32da90bd18459eb03356f9e977df35e9440e52b5baf3df727e343c666c75e8a8"
      },
      {
        id: "xpshutdn",
        file: "xpshutdn.wav",
        name: "Windows XP \u5173\u673A",
        previewOnly: true,
        durationMs: 3204,
        channels: 2,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -5.08,
        rmsDbFS: -21.12,
        gain: 0.17957,
        bytes: 282608,
        sha256: "3d937337075a647950f6aa557bca23dea6e17cf6d14814ca7dbc55b827678a0b",
        source: "I386/XPSHUTDN.WA_",
        compressedSha256: "dbd8c3522091971481245e330803b9dca3ad96f17ef289ef781e84fc4770d8c2"
      },
      {
        id: "xpstart",
        file: "xpstart.wav",
        name: "Windows XP \u5F00\u59CB",
        previewOnly: false,
        durationMs: 49,
        channels: 1,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -19.66,
        rmsDbFS: -36.72,
        gain: 0.96122,
        bytes: 2202,
        sha256: "d5712a8963eb3e1e181b25649ecff3080ede89c96350eb07e7d7cad429e959ea",
        source: "I386/XPSTART.WA_",
        compressedSha256: "501e2d3dd60d27514d2cf4e0349a360e5b09ce149427e8c9642dd665dc9add18"
      },
      {
        id: "xpstartu",
        file: "xpstartu.wav",
        name: "Windows XP \u542F\u52A8",
        previewOnly: true,
        durationMs: 4814,
        channels: 2,
        sampleRate: 22050,
        bits: 16,
        peakDbFS: -5.32,
        rmsDbFS: -20.9,
        gain: 0.18453,
        bytes: 424644,
        sha256: "8f859ebb90247036ced11db854848abe1434dc3ffdfa5795f7c5f06db9a423d5",
        source: "I386/XPSTARTU.WA_",
        compressedSha256: "2e19628930cbe38457bd186747793f5cb29c6e360206303c219bdce514032559"
      }
    ]
  };

  // src/ui/resource-cache.ts
  var warned = false;
  function unavailable() {
    if (warned) return;
    warned = true;
    console.warn("[Bili Atelier] \u90E8\u5206\u754C\u9762\u8D44\u6E90\u4E0D\u53EF\u7528\uFF0C\u8BF7\u68C0\u67E5 Tampermonkey \u7684\u811A\u672C\u66F4\u65B0\u3002\u6587\u5B57\u63A7\u4EF6\u548C\u6570\u636E\u529F\u80FD\u4ECD\u53EF\u4F7F\u7528\u3002");
  }
  function readCachedResourceUrl(name) {
    try {
      const url = GM_getResourceURL(name);
      if (typeof url === "string" && /^(?:data:|blob:)/.test(url)) return url;
    } catch {
    }
    unavailable();
    return "";
  }
  function readCachedResourceJson(name) {
    try {
      return JSON.parse(GM_getResourceText(name));
    } catch {
      unavailable();
      return null;
    }
  }

  // src/ui/assets/xp-sounds/xpballn.wav
  var xpballn_default = readCachedResourceUrl("atelier_xpballn_wav");

  // src/ui/assets/xp-sounds/xpbatcrt.wav
  var xpbatcrt_default = readCachedResourceUrl("atelier_xpbatcrt_wav");

  // src/ui/assets/xp-sounds/xpbatlow.wav
  var xpbatlow_default = readCachedResourceUrl("atelier_xpbatlow_wav");

  // src/ui/assets/xp-sounds/xpblkpop.wav
  var xpblkpop_default = readCachedResourceUrl("atelier_xpblkpop_wav");

  // src/ui/assets/xp-sounds/xpcrtstp.wav
  var xpcrtstp_default = readCachedResourceUrl("atelier_xpcrtstp_wav");

  // src/ui/assets/xp-sounds/xpdef.wav
  var xpdef_default = readCachedResourceUrl("atelier_xpdef_wav");

  // src/ui/assets/xp-sounds/xpding.wav
  var xpding_default = readCachedResourceUrl("atelier_xpding_wav");

  // src/ui/assets/xp-sounds/xperror.wav
  var xperror_default = readCachedResourceUrl("atelier_xperror_wav");

  // src/ui/assets/xp-sounds/xpexcl.wav
  var xpexcl_default = readCachedResourceUrl("atelier_xpexcl_wav");

  // src/ui/assets/xp-sounds/xphdfail.wav
  var xphdfail_default = readCachedResourceUrl("atelier_xphdfail_wav");

  // src/ui/assets/xp-sounds/xphdinst.wav
  var xphdinst_default = readCachedResourceUrl("atelier_xphdinst_wav");

  // src/ui/assets/xp-sounds/xphdrem.wav
  var xphdrem_default = readCachedResourceUrl("atelier_xphdrem_wav");

  // src/ui/assets/xp-sounds/xpinfbar.wav
  var xpinfbar_default = readCachedResourceUrl("atelier_xpinfbar_wav");

  // src/ui/assets/xp-sounds/xplogoff.wav
  var xplogoff_default = readCachedResourceUrl("atelier_xplogoff_wav");

  // src/ui/assets/xp-sounds/xplogon.wav
  var xplogon_default = readCachedResourceUrl("atelier_xplogon_wav");

  // src/ui/assets/xp-sounds/xpmenu.wav
  var xpmenu_default = readCachedResourceUrl("atelier_xpmenu_wav");

  // src/ui/assets/xp-sounds/xpmin.wav
  var xpmin_default = readCachedResourceUrl("atelier_xpmin_wav");

  // src/ui/assets/xp-sounds/xpnotify.wav
  var xpnotify_default = readCachedResourceUrl("atelier_xpnotify_wav");

  // src/ui/assets/xp-sounds/xpprint.wav
  var xpprint_default = readCachedResourceUrl("atelier_xpprint_wav");

  // src/ui/assets/xp-sounds/xprecycl.wav
  var xprecycl_default = readCachedResourceUrl("atelier_xprecycl_wav");

  // src/ui/assets/xp-sounds/xprestor.wav
  var xprestor_default = readCachedResourceUrl("atelier_xprestor_wav");

  // src/ui/assets/xp-sounds/xpringin.wav
  var xpringin_default = readCachedResourceUrl("atelier_xpringin_wav");

  // src/ui/assets/xp-sounds/xprngout.wav
  var xprngout_default = readCachedResourceUrl("atelier_xprngout_wav");

  // src/ui/assets/xp-sounds/xpshutdn.wav
  var xpshutdn_default = readCachedResourceUrl("atelier_xpshutdn_wav");

  // src/ui/assets/xp-sounds/xpstart.wav
  var xpstart_default = readCachedResourceUrl("atelier_xpstart_wav");

  // src/ui/assets/xp-sounds/xpstartu.wav
  var xpstartu_default = readCachedResourceUrl("atelier_xpstartu_wav");

  // src/modules/sounds/assets.ts
  var soundSources = { xpballn: xpballn_default, xpbatcrt: xpbatcrt_default, xpbatlow: xpbatlow_default, xpblkpop: xpblkpop_default, xpcrtstp: xpcrtstp_default, xpdef: xpdef_default, xpding: xpding_default, xperror: xperror_default, xpexcl: xpexcl_default, xphdfail: xphdfail_default, xphdinst: xphdinst_default, xphdrem: xphdrem_default, xpinfbar: xpinfbar_default, xplogoff: xplogoff_default, xplogon: xplogon_default, xpmenu: xpmenu_default, xpmin: xpmin_default, xpnotify: xpnotify_default, xpprint: xpprint_default, xprecycl: xprecycl_default, xprestor: xprestor_default, xpringin: xpringin_default, xprngout: xprngout_default, xpshutdn: xpshutdn_default, xpstart: xpstart_default, xpstartu: xpstartu_default };

  // src/modules/sounds/engine.ts
  var soundCategories = ["navigation", "controls"];
  var volume = (value, fallback) => typeof value === "number" && Number.isFinite(value) ? Math.max(0, Math.min(1, value)) : fallback;
  function normalizeSoundPreferences(raw) {
    const value = raw;
    return {
      enabled: typeof value?.enabled === "boolean" ? value.enabled : true,
      volume: volume(value?.volume, 0.55),
      categories: Object.fromEntries(soundCategories.map((category) => [category, {
        enabled: typeof value?.categories?.[category]?.enabled === "boolean" ? value.categories[category].enabled : true,
        volume: volume(value?.categories?.[category]?.volume, 1)
      }]))
    };
  }
  var SoundEngine = class {
    constructor(transport2, preferences, allowed, now, defer) {
      this.transport = transport2;
      this.preferences = preferences;
      this.allowed = allowed;
      this.now = now;
      this.defer = defer;
      this.scheduled = false;
      this.lastId = "";
      this.lastAt = -Infinity;
      this.playingPriority = 0;
    }
    request(request2, action, valid = () => true) {
      if (!soundCategories.includes(request2.category)) return;
      if (!valid() || !this.allowed() || request2.asset.previewOnly && !request2.preview) return;
      if (!this.pending || this.pending.action !== action || request2.priority >= this.pending.request.priority) this.pending = { request: request2, action, valid };
      if (!this.scheduled) {
        this.scheduled = true;
        this.defer(() => this.flush());
      }
    }
    stop() {
      this.pending = void 0;
      this.transport.stop();
    }
    flush() {
      this.scheduled = false;
      const pending2 = this.pending;
      this.pending = void 0;
      if (!pending2 || !pending2.valid() || !this.allowed()) return;
      const { request: request2 } = pending2, prefs = this.preferences(), category = prefs.categories[request2.category];
      if (!prefs.enabled || !category.enabled) return;
      const gain = prefs.volume * category.volume * request2.asset.gain;
      if (!(gain > 0) || !this.transport.ready(request2.asset.id)) return;
      const now = this.now();
      if (!request2.preview && now - this.lastAt < (this.lastId === request2.asset.id ? 180 : 55)) return;
      if (this.transport.playing()) {
        if (!request2.preview && request2.priority <= this.playingPriority) return;
        this.transport.stop();
      }
      if (this.transport.play(request2.asset.id, gain)) {
        this.lastAt = now;
        this.lastId = request2.asset.id;
        this.playingPriority = request2.priority;
      }
    }
  };
  var soundMediaPrefix = "AtelierSounds_media_";
  var soundMediaLeaseMs = 15e4;
  function activeMediaHeartbeat(raw, now) {
    const value = raw;
    return value?.version === 1 && value.playing === true && typeof value.at === "number" && Number.isFinite(value.at) && value.at <= now + 5e3 && now - value.at <= soundMediaLeaseMs;
  }

  // src/modules/sounds/media.ts
  var pulseKey = "AtelierSounds_mediaPulse";
  function startSoundMediaMonitor(changed) {
    const key2 = soundMediaPrefix + crypto.randomUUID();
    const media = /* @__PURE__ */ new Set(), roots2 = /* @__PURE__ */ new WeakSet(), frames = /* @__PURE__ */ new WeakSet();
    let suspended = false, playing = false, published = false;
    const events = new AbortController();
    const observer = new MutationObserver((records2) => {
      for (const record of records2) for (const node of record.addedNodes) if (node.nodeType === 1) discover(node);
      update();
    });
    function signal() {
      GM_setValue(pulseKey, crypto.randomUUID());
    }
    function publish(force = false) {
      if (playing && !suspended) {
        if (force || !published) {
          GM_setValue(key2, { version: 1, at: Date.now(), playing: true });
          signal();
        }
        published = true;
      } else if (published) {
        GM_deleteValue(key2);
        published = false;
        signal();
      }
    }
    function track(node) {
      if (media.has(node)) return;
      media.add(node);
      for (const name of ["play", "playing", "pause", "ended", "emptied", "abort"]) node.addEventListener(name, update, { signal: events.signal });
    }
    function discover(root) {
      if (root instanceof HTMLMediaElement) track(root);
      if (root.shadowRoot) watch(root.shadowRoot);
      for (const node of root.querySelectorAll("video,audio")) track(node);
      for (const node of root.querySelectorAll("*")) if (node.shadowRoot) watch(node.shadowRoot);
      const foundFrames = [...root.querySelectorAll("iframe")];
      if (root.tagName === "IFRAME") foundFrames.unshift(root);
      for (const frame of foundFrames) {
        const read = () => {
          try {
            if (frame.contentDocument) watch(frame.contentDocument);
          } catch {
          }
        };
        if (!frames.has(frame)) {
          frames.add(frame);
          frame.addEventListener("load", read, { signal: events.signal });
        }
        read();
      }
    }
    function watch(root) {
      if (roots2.has(root)) return;
      roots2.add(root);
      observer.observe(root, { childList: true, subtree: true });
      root.addEventListener("play", (event) => {
        const target = event.target;
        if (target && (target.tagName === "VIDEO" || target.tagName === "AUDIO" || target instanceof HTMLMediaElement)) track(target);
        update();
      }, { capture: true, signal: events.signal });
      discover(root);
    }
    function update() {
      let next = false;
      for (const node of media) {
        let connected = node.isConnected;
        try {
          const frame = node.ownerDocument.defaultView?.frameElement;
          if (frame && !frame.isConnected) connected = false;
        } catch {
        }
        if (!connected) {
          media.delete(node);
          continue;
        }
        if (!node.paused && !node.ended) next = true;
      }
      const was = playing;
      playing = next;
      publish();
      if (was !== next) changed();
    }
    function blocked() {
      if (!suspended) update();
      if (playing && !suspended) return true;
      const now = Date.now();
      for (const other of GM_listValues()) {
        if (!other.startsWith(soundMediaPrefix) || other === key2) continue;
        if (activeMediaHeartbeat(GM_getValue(other), now)) return true;
      }
      return false;
    }
    watch(document);
    update();
    const heartbeat = window.setInterval(() => {
      if (!suspended) {
        discover(document);
        update();
        publish(true);
      }
    }, 1e4);
    if (typeof GM_addValueChangeListener === "function") GM_addValueChangeListener(pulseKey, (_, __, ___, remote) => {
      if (remote) changed();
    });
    window.addEventListener("pagehide", () => {
      suspended = true;
      publish();
      changed();
    }, { signal: events.signal });
    window.addEventListener("pageshow", () => {
      suspended = false;
      discover(document);
      update();
      publish(true);
    }, { signal: events.signal });
    for (const old of GM_listValues()) if (old.startsWith(soundMediaPrefix) && !activeMediaHeartbeat(GM_getValue(old), Date.now())) GM_deleteValue(old);
    return { blocked, dispose() {
      suspended = true;
      publish();
      events.abort();
      observer.disconnect();
      window.clearInterval(heartbeat);
    } };
  }

  // src/modules/sounds/service.ts
  var aliases = { folder: "navigate", open: "open", close: "close", minimize: "collapse", maximize: "expand", restore: "expand", menu: "control", select: "control", click: "control", start: "control", cancel: "control" };
  var preferenceKey = "AtelierSounds_preferences";
  var soundPreferencesChanged = "atelier-sound-preferences-changed";
  var clips = new Map(catalog_default.sounds.map((asset) => [asset.id, asset]));
  var WebAudioTransport = class {
    constructor() {
      this.buffers = /* @__PURE__ */ new Map();
      this.decoding = false;
      this.supported = typeof window.AudioContext === "function";
    }
    prepare(decoder) {
      if (this.decoding) return;
      this.decoding = true;
      for (const [id, source] of Object.entries(soundSources)) {
        try {
          if (source.startsWith("blob:")) {
            void fetch(source).then((response) => {
              if (!response.ok) throw new Error("Cached sound unavailable");
              return response.arrayBuffer();
            }).then((bytes2) => decoder.decodeAudioData(bytes2)).then((buffer) => this.buffers.set(id, buffer)).catch(() => {
            });
            continue;
          }
          if (!source.startsWith("data:")) continue;
          const encoded = source.slice(source.indexOf(",") + 1), binary = atob(encoded);
          const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
          void decoder.decodeAudioData(bytes.buffer).then((buffer) => this.buffers.set(id, buffer)).catch(() => {
          });
        } catch {
        }
      }
    }
    preload() {
      try {
        if (typeof window.OfflineAudioContext === "function") this.prepare(new OfflineAudioContext(1, 1, 44100));
      } catch {
      }
    }
    unlock() {
      if (!this.supported) return;
      try {
        this.context ??= new AudioContext();
        this.prepare(this.context);
        if (this.context.state !== "running") void this.context.resume().catch(() => {
        });
      } catch {
        this.supported = false;
      }
    }
    available() {
      return this.supported;
    }
    unlocked() {
      return this.context?.state === "running";
    }
    ready(id) {
      return this.unlocked() && this.buffers.has(id);
    }
    playing() {
      return !!this.source;
    }
    play(id, gain) {
      if (!this.ready(id)) return false;
      try {
        const source = this.context.createBufferSource(), volume2 = this.context.createGain();
        source.buffer = this.buffers.get(id);
        volume2.gain.value = gain;
        source.connect(volume2);
        volume2.connect(this.context.destination);
        this.source = source;
        source.onended = () => {
          source.disconnect();
          volume2.disconnect();
          if (this.source === source) this.source = void 0;
        };
        source.start();
        return true;
      } catch {
        this.source = void 0;
        return false;
      }
    }
    stop() {
      const source = this.source;
      this.source = void 0;
      if (source) try {
        source.stop();
      } catch {
      }
    }
  };
  var engine;
  var transport;
  var monitor;
  var gesture = 0;
  var sequence = 0;
  var foregroundEpoch = 0;
  var started2 = false;
  var previewPlaying = false;
  var foreground = () => window.top === window.self && !document.hidden && document.hasFocus();
  var readSoundPreferences = () => normalizeSoundPreferences(typeof GM_getValue === "function" ? GM_getValue(preferenceKey, null) : null);
  function writeSoundPreferences(value) {
    GM_setValue(preferenceKey, normalizeSoundPreferences(value));
    engine?.stop();
    window.dispatchEvent(new Event(soundPreferencesChanged));
  }
  function request(cue) {
    const alias = aliases[cue];
    if (!alias) return;
    const value = catalog_default.cues[alias];
    return { asset: clips.get(value.sound), category: value.category, priority: value.priority };
  }
  function enqueue(cue, action, valid) {
    if (!action) return;
    try {
      const mapped = request(cue);
      if (!mapped) return;
      if (previewPlaying) {
        engine?.stop();
        previewPlaying = false;
      }
      engine?.request(mapped, action, valid);
    } catch {
    }
  }
  function sound(cue) {
    try {
      enqueue(cue, gesture);
    } catch {
    }
  }
  function soundTask(startCue, owner) {
    const action = gesture, epoch = foregroundEpoch;
    let finished = false;
    const valid = () => epoch === foregroundEpoch && (!owner || (typeof owner === "function" ? owner() : owner.isConnected && !owner.hidden));
    if (startCue) enqueue(startCue, action, valid);
    return {
      finish(cue) {
        if (finished) return;
        finished = true;
        if (["folder", "open", "close", "minimize", "maximize", "restore", "cancel"].includes(cue)) enqueue(cue, action, valid);
      },
      cancel() {
        finished = true;
      }
    };
  }
  function previewSound(id, category) {
    const asset = clips.get(id);
    if (!asset || !gesture) return;
    previewPlaying = true;
    engine?.request({ asset, category, priority: 100, preview: true }, gesture);
  }
  function stopSoundPreview() {
    if (previewPlaying) {
      engine?.stop();
      previewPlaying = false;
    }
  }
  function soundPlaybackStatus() {
    const prefs = readSoundPreferences();
    if (!prefs.enabled) return "\u97F3\u6548\u5DF2\u5173\u95ED";
    if (prefs.volume === 0) return "\u603B\u97F3\u91CF\u4E3A\u96F6";
    if (transport && !transport.available()) return "\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u4F7F\u7528 Web Audio";
    if (monitor?.blocked()) return "\u68C0\u6D4B\u5230\u5A92\u4F53\u64AD\u653E\uFF0C\u97F3\u6548\u6682\u65F6\u5B89\u9759";
    if (!foreground()) return "\u53EA\u5728\u5F53\u524D\u524D\u53F0\u7A97\u53E3\u64AD\u653E";
    if (!transport?.unlocked()) return "\u9996\u6B21\u70B9\u51FB\u540E\u53EF\u64AD\u653E\uFF1B\u6D4F\u89C8\u5668\u963B\u6B62\u7684\u58F0\u97F3\u4E0D\u4F1A\u8865\u64AD";
    return "\u5DF2\u5C31\u7EEA \xB7 \u8BD5\u542C\u4E5F\u9075\u5B88\u97F3\u91CF\u3001\u5206\u7C7B\u5F00\u5173\u548C\u5A92\u4F53\u907F\u8BA9";
  }
  function startSounds() {
    if (started2) return;
    started2 = true;
    try {
      transport = new WebAudioTransport();
      transport.preload();
      monitor = startSoundMediaMonitor(() => {
        if (monitor?.blocked()) engine?.stop();
      });
      engine = new SoundEngine(transport, readSoundPreferences, () => foreground() && !monitor.blocked(), Date.now, (run) => {
        window.setTimeout(() => {
          try {
            run();
          } catch {
            transport?.stop();
          }
        }, 0);
      });
      const activate = (event) => {
        if (!event.isTrusted || !foreground()) return;
        transport.unlock();
        const current = gesture = ++sequence;
        window.setTimeout(() => {
          if (gesture === current) gesture = 0;
        }, 0);
      };
      for (const name of ["pointerdown", "click", "keydown", "change", "submit"]) document.addEventListener(name, activate, true);
      const leave = () => {
        foregroundEpoch++;
        gesture = 0;
        engine?.stop();
      };
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) leave();
      });
      window.addEventListener("pagehide", leave);
      window.addEventListener("blur", () => {
        window.setTimeout(() => {
          if (!document.hasFocus()) leave();
        }, 0);
      });
      if (typeof GM_addValueChangeListener === "function") GM_addValueChangeListener(preferenceKey, (_, __, ___, remote) => {
        if (remote) {
          engine?.stop();
          window.dispatchEvent(new Event(soundPreferencesChanged));
        }
      });
    } catch {
      transport?.stop();
    }
  }

  // src/core/inject-page-script.ts
  function injectPageScript(source) {
    const script = document.createElement("script");
    script.textContent = source;
    script.setAttribute("data-bili-toolkit", "comment-location");
    (document.documentElement || document.head || document.body).appendChild(script);
    script.remove();
  }

  // src/ui/assets/luna-olive/caption.png
  var caption_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAdCAYAAAAejLrKAAAG/0lEQVR4nN1Z3Y7dNBCe+CfnnN3+gSpBJbgoD8YDVOIO8Q5IvUZC3FXimUBIcAFCQgi1W3a35yTxD5qxx5k4zu6puIJPPU3iOPbMN+OZsbeLMUKNb7//Kl77G/i/4svPv+nqtk4S8fLVi/jB7gk8f/4M9r2Ffv8QeqvonTUXYLUCszvQ82H/IA3AA+nU7y5EH0pfed/qF/PY8nofjqe28Y7vbul6e7yB4XQNP/z0K1ydrhaEFCJevnoRP3v2KTx5/AAmN8Gjiwuw+4f0jskwqs/PPVjTL4XXutx33p8hNsDkxnLP43HblImid1rBOM19yzzKQAxu0ebCut84zWMhEYg3tzfw48+/FDKIiJevXsRPnn4EbvDw5MPL1UDWWtCqA2MM7IyF03gCkwU3StHzvt/TM7/jdgS+Y4v6kITywYNWmq4xePrGCWIQaCPsjTKGECF0ACEE6JSCmMdRKhkJ26ObDYBv8U1nNAzDSPfUPxvs+O4E19dD8QxDgnaX8PbNLTx+dAE3fx/LYP3egFLJeyYkJEQYxikrMiSGc9/b0/ydHwdq9yHS9zfiHSo0Y5qt5k4rC5K3RgcuGz0AkrayE4QwE8ArPfh047NnucW8AN55OA4T/PlH0qD7+rsvouodPNQP4PIiWRVhjFqRgR4hYcy8HGgyYZEWWIfAmjUELAqFWckt5RZzb4yDCjNQcYnjkEj4/bfXYP76+y08ffQYph1a28GuXyp7F7YUd86Ry6K71oJKi0pLKqUXbbQsfFwp3VLYy5jU4KMmwPlAcfB4HGE8pnd3at2ZVZbZVDwpk5Sn9Rx88YAWAXXWlgTQc0XCyrVbAflMEhhKGzhN7+DqdJNiiOodjbHl2DIgsdL8zFaXHoD/B0GAdHPpBawwE1AvgfdBpzUFxhqHnYV+Z8uzyenamLmN5JcP1uoSH9AbrNElPjAZpHCclUZe6mVg8jc10P15CZQ23e6LVChRY+CYLEuLhHLfIAPRC0KYjMPFbk3EIXdSmQQtSJBKihnLLZIRgro3cJVJlQat0289LsowK8xksAQoU0RSbJofr53qoOvSj8mQPxnUJSGIvc16SxkMTqCR+flDqWBNAN6bLBD3XfW/B4UQ1OG8kFTAZCzEy2TUQDLqLIc4TSmGFKlVzhY8Dru3UiEtCyRAknCXgKDpe/zZMwPuv8J7hBQmwx52C49YaaaENyhjhMtg/Z/e6VxyI9zoyStalvAu5WkkY3LnS1svRFwewQfQeZms6gi5Genw31KWemNJcWRaBu0FEbbPbDWsaKxdCUjtvSYyWkAiA6a5GMuYoUXYFKjcTh9RjgMw3Zx5XKQAx+r0mZBREiKHraZgI0URu3psOuygP1Qesd9pEoatjTW5ygTw2OwrVqQeLEygT31LWy6RO9CA+hEZTE7D4tLD6FkrIgdyqtV7A5PzC/2CiytC2JASE6dij3uUNIIOEXz2is2CSgkS0IVinr2LKWLXQFJsJoT5tlkxTwWEXi3hdoLL8mbSkBymF0eRWR9JkZlln9d9q/ywnJ5FhiJyJg+dgrVH1EASMEiiWxnhzhjh6zWIlSQSMlZbYhWTO9t+3i0y4sa+oE6pSAwZpbeFJPaE1Ti5imRC+t2GegPKOZcHiEVPbRV5A9YQCJuLKCZgCzzgTpkirIsx5fYcrHDrLIVv5hKz3ijJeVG2VpzCOYnwXB8sa8aEIAImETQ4GERoK0TYPAiTwJWkFMYoDS54sNUuVKKcKMi9QNdBPCPHTRxpMFOL+REub/+bVcqGkeSMuiKOveVwyOcq89tQqjheEiuLKAV9JWANJIuvUz5VwgMV8g0pGT5mK+FceG/ZVfHApjq/sH0yVKyI4XeenzdK7NrL8Cig39uy5yhEdFotanaMC5KEPn/QylIL5pUqp1B8GmSr/QVicOOi9qjrEM2uXAVoSQyfVpG8FVErmCUpqkvpmUdvFFRqJRQHx61U3SKElGkQwNiJM08kpQbLYKqCCI8MSZmq+GOCpFy1gei7EMryx7RO6X9rycUYKdgxOCbct8q7atJzIUlpjtsownQjYNfpXW5f7pNt5REh5L2FyOlj9gok5JxCmZfGuWh5BKP1dxeaY6O/JGN5Pno3muF/HKe0OcGKI6dCtABGfllDyOwxZhdrTpJdGDMOKVEdztyl9JbCUkkZK1ZjyrH4BN351QnXgojjuxOpiWtvhIkqRK4ysSSVkyPzvL5oIPSWjb9nDKh4/pTIzFkCwff4ZTriSx45n4WkxFv/oWcRo5SiLMJH+Bg4Y6V4DcocQt4FEd5FeH11Cz1Wj6J645Mr+kC4Hu4JqNQ9xwOrZe4celc6F8V9wxYWGyuJrapMMFZ7GKqt89VYDZeX/fbS6JEpfbUcYNvr/3NgHzD240X7P8QvXLhZ4L/pAAAAAElFTkSuQmCC";

  // src/ui/assets/luna-olive/radio-normal.png
  var radio_normal_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAABAUlEQVR4nGP8//8/AwzIBjUiOGjg8bp6RhibEaRJFkmxh6kig7OhAoOxqiTDxXtvGPaef8Cw5cQtFM0sMI6lphRDoLUqg5W2DAMTEzMDMzMLg62ePIOjkTKDl4U6w8oDVxgOXrgPVssCsyUQTQMzMzMDCwuEtjdQAtMgTSD1TDAnWeHQABJjYmJicDBUYQiy0wHbBNbkbKiAVwOM9rbURGgyVpUkqAGELXUUEJou3ntDUAMIn7r+GKFp7/kHBDWA8JZj1xGaQPFw7OoTvBr2n7/LsObARYgmWEyD4uHI5Yc4NSzZeRYzckFxAMKgYAWFEsjTp64/ADsJZgNKMiI17QEAZEFjecNMQigAAAAASUVORK5CYII=";

  // src/ui/assets/luna-olive/radio-checked.png
  var radio_checked_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAABfElEQVR4nGP8//8/AwzIBjUiOGjg8bp6RhibEaRJFkmxl5kyg6uxEoOJuhTD+bsvGXafvc+w+dhNFM0sMI61tgxDkK06g42OHAMTExMDMzMzg52eIoOjoQqDl4UGw8p9lxkOXLgHVssCsyUITQMTEzOcdjBQYmBmYgZrAqlngjnJBqrhN+Nvhv2fDjAkXk5k2Ph4E8P3v9/B4o5GKgxB9rpgm8CaXI2V4DYc/3KCYc3P1QzfWL4ydF7rYNh0bxPYNpC8j6UmQpOJuhTcKUseL2F4++4dw9dv3xh+/PzN0HOqG6yBkZGRwVJHAaHp/N2XcD8EC4cwvHj6guHVy9cMnz6+ZygyKgFrAGk8ee0xQtPus/fhNnnIeDAUqBQyMH1hYWg1b2cI0w6D2sTEsOXYNUg8yQQ2gENvepE/OJRACmB+gNkA0rD//B2GhNblEJtgMQ2Kh8OXHuLUsGTnWczIBcUBCIOCFRRKIE+fvPYA7KQ1By6iJClwMiI17QEAxE2SfAwrA7MAAAAASUVORK5CYII=";

  // src/ui/assets/luna-olive/scroll-up.png
  var scroll_up_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAIAAAC0D9CtAAABOElEQVR4nJXQP0/CQBgG8PdqK6QJBkMY/ACkAwNJE2UwODCy+D34Tn4IJ+MqMJhOHTQxJkzyJylXAVvotXc9cxwpNJYK7/Q09/7Sew65eFTQynpJhyMmiqLxcKICgFbU+q/Plj3IB9eN26bZXgRYGACw7EHrrpVvei+9ptn+SYwcB08OgWrlSoYlcVJm9j371/hkkTJnKsq/HgAEdLUzznzKGQWQjG8C32QRnPlUrrGYpv4TUZot9nd4uDO+t05uJsP+p++tk00FTp04Pt0ApPuw1eE+lQzj+TgMCUJUGK4iRDkXpzJ4Ps4wAREt5d7fIE/FKMr2wKjVPz7fAIo5NYxaHQAuCpfIxaP3sXVjdI5p/2Q/NEodYUjE+sNHd/nl0WVICIOQxwiAiTLK9mE19bysV+/NbuDALyMzkKTN3TqoAAAAAElFTkSuQmCC";

  // src/ui/assets/luna-olive/scroll-down.png
  var scroll_down_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAIAAAC0D9CtAAABOElEQVR4nJXQP0/CQBgG8PdqK6QJBkMY/ACkAwNJE2UwODCy+D34Tn4IJ+MqMJhOHTQxJkzyJylXAVvotXc9cxwpNJYK7/Q09/7Sew65eFTQynpJhyMmiqLxcKICgFbU+q/Plj3IB9eN26bZXgRYGACw7EHrrpVvei+9ptn+SYwcB08OgWrlSoYlcVJm9j371/hkkTJnKsq/HgAEdLUzznzKGQWQjG8C32QRnPlUrrGYpv4TUZot9nd4uDO+t05uJsP+p++tk00FTp04Pt0ApPuw1eE+lQzj+TgMCUJUGK4iRDkXpzJ4Ps4wAREt5d7fIE/FKMr2wKjVPz7fAIo5NYxaHQAuCpfIxaP3sXVjdI5p/2Q/NEodYUjE+sNHd/nl0WVICIOQxwiAiTLK9mE19bysV+/NbuDALyMzkKTN3TqoAAAAAElFTkSuQmCC";

  // src/ui/assets/luna-olive/scroll-up-glyph.png
  var scroll_up_glyph_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAMUlEQVR4nGNgIAf8////P7oYEzYF6ArhitAlkPlgRcgCjIyMjOgKGQkpwOtYfOLkAwBpDSvkYA0nRAAAAABJRU5ErkJggg==";

  // src/ui/assets/luna-olive/scroll-down-glyph.png
  var scroll_down_glyph_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAL0lEQVR4nGNgoCr4////f3zijMgKGBkZGbFpZMImga4Rq050k5mwWYWNT5QnCAIANU0f/9ByL2IAAAAASUVORK5CYII=";

  // src/ui/assets/luna-olive/scroll-thumb.png
  var scroll_thumb_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAIAAACQbVFOAAABIklEQVR4nNWTMUsDQRCF346XGBIwoCBYWaWysLKxS5s/ELDyT9iKla2dYCFWtlYi2NtIesVKDVyacIeQeHe7Nzsjdx4YqwSr+Bh2t/jgfVMs4ij03ukCiaMwAEBUe3i8H0+GaZok2VShzNZ778HM1jm72+n2un3rpKABjCfDdmuzWc9ardRAWLxAxdskm2Y2fX4d9Lr927ubin4fvWysTwJaBaDk1HPOzD5xzgIwJfORjOibFiNkBD8xpoSMYQBei7Nwri4l0epdRhUoRovyFVMpzBLzQ3+hZWm8ZWlM/qu3LGZSVXS29p7eBgH9rqKcWbxmO9v7ABq1NuIoPLs4mvspz69O4ig0cRRqsHZ5fezyTwGX680IERkEjXrz8OCU8vgLWpH/6q959vQAAAAASUVORK5CYII=";

  // src/ui/assets/luna-olive/scroll-track.png
  var scroll_track_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAADAFBMVEXX1cLj3tPl3tPl49fo5drq6Nzs7OPu7eXv7+zx7+Xx8ezz8ez08ez08+719O/29fD29u/29vH39/P5+PT5+ff6+vP7+/j7+/n9/fb9/fr+/vsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABTzL2NAAAAIElEQVR4nGNg5+bh5eMXEhYRExeXlJKSYmcYFRHCFxoAGtIUZJAaxE8AAAAASUVORK5CYII=";

  // src/ui/assets/luna-olive/button-normal.png
  var button_normal_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAACD0lEQVR4nK2Vz2oUQRDGv9qdZHbVGCOoOFGSGAW9SA5RT6J48OQxjyAIggg5eVIEiSi5iBCCB/Ud1DdQELwIOSiKSkx0FSVhdWV3509/Up3pYTUbnVlSQ9NNdfdvqr6a7pEkjvrbreZQEkcVkiVsYGG7OejG/X617sYiYrSVyl7oV6qrnsI+vfzw5d6z23j1+Tm+/VxCERvwd+JIcALTZ2cwPDE+II36yv7r85c+tuQHrkxdQDB2phBw9fsCrj24gSq24+b0Qx8KPHd5nMvvHpP81UNr2L3KILnNU900zeEDpwAY+1aCuSMkDfYEk06qUU8FtRMmsahiRpgwRBS2nKPquZHpAUgCJolh4si5Sh3AtXRd2nlMNEImMCbOfBnQgURYLES49hfQguxcgYIYgrqepkuEKUgX5Q+Qdh8p64EOZBcVAFJbRxAdGjpnkUoz1b5Lyi6ywhGaVMf1wD/7fECkdZTNTJmbl7J+LkwrvQGw4Fm2Z0+j02NrTTJgEoXZLbOmiPybpU8SI2m3EIfZ0fM9iBi9dZffvMauvbthSIsSkf9XODGIowi1xa/25gYQeOWy1z4cHMfskzs4f2wK+0ZG82Wr2ZCoLa5g/sV9HB05qe6DEkdhpf6+1px9dBULS097+qdMjJ3GzMU59G0duisktygZwCSAQwB2AOjrIqLOOXub9mXVTX+EABoAbv0GowJZNLTZ/JkAAAAASUVORK5CYII=";

  // src/ui/assets/luna-olive/button-hover.png
  var button_hover_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAACEUlEQVR4nJ2Vv4vUQBTHv5OMya56pxds3MoDFS2UBUVRELSxE6wsBMHOP+CwsBBrC6tr1OoK5VAQLGwsFUXBRrSwEKsFFVw43dPbncnMPHn5sclCTjP3IMyQzPvk+74zeRHWpJGajBesSTtEFGCT0Gq8q5xHcfdXORdCOL6CUOq4012TDPvwfvj9yeub+PT1LX6sD+ATc3GCw72TuHp+GUf60Zx01kQM2xMu4uml09hK3HnzDY9e3ED/2IqWfIOVMWxtfQNBtMML5vQfLJ3ai4uPVxGEMpLsG5c5krsBbCA5dwUAtQYOn9/DKEpKq/ZJNjR7Yk02kLMe+igfUl3e6MpKe5oPHkAimskFEEyBpPO3OJcrbUlEPZejAhYl+/hXrnUmbQKqmbe2wrlirW1SqNXsojZAIrhUQdRSapuiMnFTo1sCYRQgGoBOK1DmiZ+HzmiImoiq5HTCX7q/Qj0GCbH5Lnvwcovs7DGrgOxFUYYHEllec8mKe5tXySCX5TUrtKbQ5lczccnkpv22Ojb8gQeA0bo4BeLfLBQwq4EpD7GEEI67ru4sIJoMMXp4PfektnP/i0mcZJ0bQE+GoVSHeidw912Cy/Mv25dbiwc/L+DowTM83S9MqjuDL6Px/WdL+Dh4taV/Sn/xLG5dW8HO+XhZENF2JgM4DuAAAG7d2xpM5GdlfC7GkH3jHyGA3wBu/wUx7QrXEzwIYQAAAABJRU5ErkJggg==";

  // src/ui/assets/luna-olive/button-pressed.png
  var button_pressed_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAACHElEQVR4nL1Vv2sUURD+5u3svjtDNBELOfFyR3JwEZQUQRuFVPbWFlqLNldZBSyM+KPRgL8abfIPJKmtFMRKsBAVFBJOJafGw8B5P3afzMve7R5n3L0r/GB2h/d2v5n55jGP/E7ba/5uTPqddsYYo7AHWs3Gga7v6Wy96xNRIKYcbulMdpuFrPr609fHL27h7eeXqP3axDAY1wcxmzuFytklHJmbHqed+o+j1x5e2ajVq7h4/BzypaJEldipCLeqP/Ho1RMc2n8YNypPNcuiZHZ1oYKp4gyIPSh2QtJ/wxiDfHkCl8fOY3H1OpTDHotuUmahdAysPWvKcQFSCWxBzy3MzqO2YqUqsAgqHrkM5bpQrAFHyJIydGI+dZ0sRxFjkX2KLSSA+gKrHqERoiCwuhD8dGQIZaEoeIJQw4Mj19gid59pYQaUjggDI3WH3UubeDDQvJiGkaUHWaNYVX0lRxYMSYr/0RQzeslILjkt/IEio6bQaAeHKICJkfY8mS5pJkw/GSxF7D/qZajYhcMMpVz7YVKWclgskYqpBmiWnGXqbte+I1eaBtvRFUbcq0PhPpECQWFr472d3ABy7DjcLOdO4t6zB6joC8iXT0MlzcLdFO3jW/Udbq/fxYmpM7IwQ512K1P/+KVxZ20Rbzafj3SnzBUXsHTpPtyxyWUyxuwTZgDzAEoAJgC4f5mwstfFh/AtU1bLRQhgB8DNP2aTrPBALGgzAAAAAElFTkSuQmCC";

  // src/ui/assets/luna-olive/button-disabled.png
  var button_disabled_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAAhUlEQVR4nGNgoDJghDFOHdnxnxKDzGw8wGYxwgzj5xdkEBIRYeDm5iHJoJ8/fzC8evGC4ePH92BDmWAS5BgGAuzsHGC9MAA3kBzDsOllYqAyYBo1kGLARLkRqGDUQMoBExXMQAEj2cCfP3+QbchPJL1wA0Gl7tevX8gyDKQXBqhep1AdAAAd0ycoG7ackgAAAABJRU5ErkJggg==";

  // src/ui/assets/luna-olive/button-default.png
  var button_default_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAACBElEQVR4nJ2Vv2sUURDHv7P7cnsXOTSWZ6ESBW0kEImVaJXWWtEmpbFKYSFiJSf+6AQVAyFg/oCgYB8wIJJCucJC0CKoAYsQDJy3+96MzNvbu1xyyr6bZdnHe28/b+Y7M7vkbFbp/GlPOJtVRSTCPyzttA8X40pS2ynGRMR6R7FJk2pt2yjs+8dvWy/XH+Hzj/f49XsTIVZPjuJs4wIWZps4NjVZN+xsRWGftjZwd+4WRrH7yy/wfK2JB9PLqdEJ9Wz++g1sp71Igmz+2lUsrrxCFJuKUd3yMB2EgCvTtyGQ0rDXG48BQiHVCaOC6oiFQUIQtgG+ib+lf37Nh6zmFKhgduVxArjB/VEfiNyzECBBYGG9I4X1gCzOa0FUXj91kfW9PZr3gAJd4DyOsjzW9A1GtEdDCxLxm8o7KOCuVAeB3QXdFAK0cMjrZD/QOUS+kwM01ID3lVk/KcjAXsLAkDkbDnT+CspJXofCw4GZrkp4yJmvjCFAEQvR1gtykf172rIHgNrLxalhhc2I+zPUAxYgm6XdVqL/s/RymuGB0k4MiFi/uoUtte5gFKvnjIaJY9M505jB29UW5mYujQRb+rCGc8cv6vAU2Syt7nz92X7y5h5am+9G+qdMnbyM5s1nGDs08ZREZFzJAM4DOA3gCICxISLqWmFfuk/NR6I/QgC7AB7+BUWiAaEU7TbEAAAAAElFTkSuQmCC";

  // src/ui/assets/luna-olive/close-normal.png
  var close_normal_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAADb0lEQVR4nK1VPYhdRRT+Zu59bkxhYYQVtLDRTdyNZSCFBBtBMI2InUgiihJQLKIGEUJMQJsIIpooYVGChYWNQRSxWBRsbMwSd6OCIqIuWuy+/bnvzsw5R75z99330md4jxnm55vvO+c7c3Fl6ZKxbTdiN6NdWbpkgYPmz9+w9vkiZLgOabZhqYXmBC0ZIUZAMthUpOtz6z1ygeQWJY3Q7L0d86fewb575+Ggf1w8g8G+WYSqhuwMUbaG0NQCJcNUYVK8hylsPFcSNCVo26A0W1jf2MBauBWPLi4h8sKyuY4wM4NwywAIlYOHqgJiDYQAxMoZB+9rhMBjsdtTdXMx1tj85y/s3RNRE1SaLcjmEHEwgKWR3245wXKehKEUqAk0Z8DMmbqCXeaoImJdeVQclACUrbHymN5z4qwv/nz6WQ8BQbW0folJAkSx8P6XvufqMw9ByZtKqoHPuXwji2YHMtr2C8btvtMfTAGSWXJmY0BvJgATaJOpOM4mZVqi5IJfz53oN+x/8zJMBMGU6cfBC1/3a1ePHe7WYDDyNZuAOnBqIW0LFUoU/PL68f7w/NufQVWw8N5X/dyPTx1yhdACM15qiGEK1BOzayEU6SwTDKuvPdmDLLz7RT9efvowDYEQBCEoIsTBwYRNx9Ry22VSCmdgan77yitPTIIF4NpzDyJEQ4AiBO4pHtfA2E6DMp5CliowU0RTuBUDcOCtT28Anb/wLWIMHSCBGUvl2S4UE1B6jqXpwAVK+WaYO3cZ47Z68mg/vv/i9wgxIDpjsixeys4W40QxOSw7hsDZCube+GgC+OpjntnVlx6eAH/4g2cdZMqQlQQwcT1T1jD/rKCUMXf24/7wysuPI+jEhNdfONKPDywuI/CxoX9J7Ab59Gk78mT1LxABT5KhQGkb6RRQyerzh/o9Psc1rzaZKlNKLiNIiqjM8NOLRz1JTJpLpPEtIygPdnFfOXYQlkcwUZfdhc0moJmV1DSo6Dg1xMxXKnQ3B/5YhgXRGSeXTPsRTHNBKYJSFLl0lqp3RorRbbPQ9f+AVlDvmfHnz5883bWW+1BRBb6tGUG6kHTgBFUMk6GevdtB/ZH+9/oyvjl1HBtrf2NQd28ohbMIKoL7RkHcBY8wCFVo5+nMRN5xFx45/wnu3P8AcO33727Kt2n8jSPe/2AtIEm9PvOnAAAAAElFTkSuQmCC";

  // src/ui/assets/luna-olive/close-hover.png
  var close_hover_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAADZElEQVR4nK2VTYscVRSGn3OrqrtnzDRIwFmKe3+AIIo73WfhwmwCwQQZhEERRELAQSMGjKIIDgREGCYIWQhZKCKShQtx5cY/IEgUkUxPf9X9OnJu1XS3bvVAw53quk+/97zvPcO9+7fVarZI+l/qbP+9+7dVbPHg5x/Z+v4IQkDaOfgFognxHkWQHLDSnJGcyntWorG8E4Ln4XBMvnTAE089h9gv+M/2yY89jroa/By3mEH0SPBIjpAiGFATxAA9WFILywV5MeP0dMpvssWThz9Qb48cwRRVQ7SqEBLqI1KUFUGmFex5vyIJpAS5RlwD9QDqGv/H7xivLpvCEtopMhhAu+wUeI+Li6JMUuiOnCKSfPdrIXaniP3frkLqqogoUPwSWc67o3nPo1cOyuPJ+y9DaMHaYDAfILZIzpy79W15Z7r3LKgCDnEd1BWlOSKhRWKvsq/xG4cQe0WmLBk8roBdazLOZVuU9qygpIDzc2S5LPCTD/Y4q/H1o+54oqgo5z78bvXd7NWnQQQtKg0oG9Csndt2NOtdDEzeu7TavHNwt2zeufnNGrj/DFQOrV0xSWqxVzagZo7ve5dDF52sTA4ursHvfrVan157Ht0alg9bDdp0JtX1hlKxeJhZse0yacHPlidl8s5LK1gB3rgAoxFsj2DUwLBBBpWZbx3aNMpMsshYfCISE2qOOhi/dcRm7bx5F90eoiNTOoBhDQOHVEJV6cbxLSrBlyxqDKgZk+M/gJNPLq/W4/0v0e1BB27qAkQyFflfxzeTLDJ9fMbXj9fAjy6Dc5wcXl2DXzmGpioqcRnXC1lB1WB2l73d88D47Tuc1eTGxT5SQAUnn2+Arx6bItCIU2tdWkOtnyX0Fv5+AlmdXrtQhof1mWQTyoZKZvLFuhUFZAPGhPXDorumZpBFyrkiavraC+AEqW1qgdqNISEm1YSRmHz6Yiek3EQPZm5JTA8NIYLdJhVybXFqjIRWrmzUOECGFerNZS3ZEaz3LeKX6GxBmHmCGW7Q+TLz1yPnGc4ekpNNGxtlFjozAJhXfQ4F1zgqC6M9z2ZOBN8SZ0um0wXLnV2MV+apu3KTXz9+Hf/nA7BB7Vy5guaoE0fV2Loz21RWFeSQaKqMJsW3nvnOLrt7t8o85adfvv5f/0cZ7283DIaZ7LHd7gAAAABJRU5ErkJggg==";

  // src/ui/assets/luna-olive/close-pressed.png
  var close_pressed_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAADGUlEQVR4nKWVy2udRRTAf2e+G1uFqKApWisujNLqRty5k6JEsNWl4KuiC/8FcSe470ahiImv4sKND6IGxEdXLtxJiaXEhfhCFARpc3PvzDlHzsx3v9yE7HpgvjuZc+Z3HnNmwvqFVQ+5Ola/FpntX7+w6hKTv7d+4qNzZyn/bNF1git0yUjSMUqCOLgWxJ2kBc0Fy1MsK1hhMsksHjnG6dfeZGn5BBIe1l59mesnf7J4+DoWUkJQOhcSRpcSHWBukAteCj7NWJ6gkwmuSgkHRRndfBsrb33N6IbDifFfl1k6chOLh0YsOIhB8gB2CF6hGPhIMAMTQzEsOaaOiWBJsH//IHijam8KxUhF8ZIRL4g57uEBFCG51mjCjjxFSoEYqogpHU6SoNGgak2hO2M8Z+558JGq3Pp+HcFILnikb4ab1pSXTz5VbS598V5dx/sggFQ/EVUuEDWajJs7YPmhU+T/rpCvXqFsb1N2xujOZADWLFX3AAco4T1H8Qs2mXJx40NmcnzlaXQyxaYxMveuPDPoLq2v9QAQkX1QbbWMWkWreJ7y4yerg9GJU2dqyscfPzOsXf58jSRCSjECugtO8YkN5IxPp0iO+lrtzYsfv70LfuLFYb715Tt0SWpPBzDAB0RaavqicZolSlRPPew2P92NOOTnjXf7CFP9reD6d7MfoF3UtLZHuzVxwtGf4f2+J19iXu5+7AW6LlVYN+qBXYt0DzRFs+Nxbdpin848MCKcyV2PPo/UWgYwzUUqc5FKg7bomvL+OWDUMMx/+er9Ye3Ok88N0clBNZWIsu+1mM8D45Tb5gb49ZsPBt0dDz87wOK7J33xfsx5m/VhM98rv393fpi3zOaI9NfU1IbNUdXNz1ZbZL3H6IZYr13RkuK3b8/XOlbdoJyDuituzWWcPgfEN9tX39Zq4rMrX8s2mxPpb+8YNy4dAx2sG6SvcX3q+hdLzVF1tBhm1p69WCuOuXNo6SjBS/H+nX79HAu33o7WMuyXln6FqVHUyMXI2ZhmJWetawu3HOWBV96o7yk/bG5c0/+m/RK8/wFtCXiH875fIAAAAABJRU5ErkJggg==";

  // src/ui/assets/luna-olive/minimize-normal.png
  var minimize_normal_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAACxElEQVR4nK2VvY4kNRSFP9tV3VqQYF+GmGQzkiUl5A0AiQheAIkcQpCQCInJNtmXWE1MOOxopruqfH/Qve6Z7hmxkKwll1Uu+9Q55x5XFQB3d95TK6WUKQCvrq5489drluWGw3rETOldET1S24Rs/bRBc5RNcuxmuC2svdN8x+cvvkqCJS5/vv6Nj+pz3Gc6dyx+oGtHdc3NJhbXAdQ73QQzw7qw6pHD4cDbm2tu/1Z++P4XaizctltgTykzlUYro091ptCoUywbfZ5n5joNra1QS9zXHMt8l9P59PZ45Pn+QKUgrGzaERFUgqmxiiXrYNe70IIxHVPBbVgzlbOvU3okGysH8MpmKyILGnMJtiAJtjyAHMNaVShOV6eUsKY+BgVnkSUlB0M3SUB3SUDt6wOgbJoFonTwGOsY5idM1xMLw3G2lJmA0qNKBIapo5GIBFxxHSksbRTQuz1lSvpXa03AYJlVx1FVzDuljBh56Qn4EG2NnBfkIul15K5nVALwvplJPjzPQNSinGZKKXi81kOdntlxYhoAq2woYfqU0s38/NbSMAbTQqWGZLWED+AkRn8M6uFbFyzydi7ixRKhtEZrjgzs0DwScFKjegatcem2jNyZZnGC+b3gdrkQmJnShpybSh7d6O76mKnI8LUyM8+NLz77lne1n379OmGDl+t4uW6XRDiB2pZZlBbMnr0T8Cwv/B6eaxfUFI34nXSlKu8dcc1wxwfiv5uwXd4Wy8Og+iSngubZPi6F3Qw///4dbYrAK5xCHvLcNvKIiKKhToRNw8+OuVFOZifosixMTMz7MN4oNUwepyjWxabIY/FI5AAPH0N2V0FU6SLsdvsz6L59zPXba+ZpYbczdvMH/+6ln2OzSGc5Log4agH44WP5Lz75kj9e/UiXjS5wx83/Fut+e2kwtfE1efnpN8PmLNR7/kf9A1rQGBuSVynYAAAAAElFTkSuQmCC";

  // src/ui/assets/luna-olive/minimize-hover.png
  var minimize_hover_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAACwUlEQVR4nK2VPY4cNxCFX5HsmZUBCwZ0BB1CoU6gwJEzZ4YBX8EnMKDMgBMdQgeQEwGOnOkEgi6gXck7092sP6OK7d3ehYVNxMGwe5rNj4+vqjgEAO7u+EqNiKgFUCD4cPkXzqdLzOsZZgJhgdgCKg3MfUyA5lU6j6sZ3BaszCg+4cXzX1MgRff+6i2+rU/gmCB+jcWu0ZWhMudk05hsAyQdrAI3hTCDbcHpdI1Pny/xz0fBzz+8RIkX1/UziC5Q6AhCRaGGVhqmdsz7UguojG9rB0y1DeUtpse7BYQJ5XDO5zl6ms/47tE1KgjiC9gYwh0icyrsqlBZUx0zg0IxQq3AdFhTUx5uocIrVj+BvKD7CuEzuK8bbIYGmJcbCKsDqmEyRA1EEWe6C3U4Fplzy6FQhRMIlwTyHtgjgAbQ8JWowg1o0z3oGpOUwWowX2ExKXKCO8wZ8TMUaR+LOFYg1IagosMOtrvQaNwXlFISmCoj6nCoxL2gQDKhnCSBZgMaVpoT9JaJtDfyMFIlFW5NdQRkXxX528eCpRAsPub5rO7ea9HF1juvqQzUcuu+KRngSJnhWaUKLYr/pAV4XPku1LZEplJR90vmVhoMAqoxZlDZBqKyN5t829kdKOuceVdti2gZqkId7XwKREMLp1NfbZQlPda4FyjV4WuNKVPDs6c/4kvtzd+/Rc3BArwBZWWo3VMq1qF9gUQ58sUXgbeWhKrhubJkgOMA2uKOcjPgNpLblgeQsgtJtEhBg+5yqo3HAtYFwTtMjj/f/Y5Ww5ZdlE3h1iGuMFGo9xQTOe1RIG43adWim89LRvl4pKxjyoNjHHkjNyXOSUQ9igvgPX3MbatCVMAiqPVwC71oj/Hp6gqtrZgmw+H46P+93AVjYcEyz5AoMBNcHL+5GctDOm5evf7lwQA91H76/o8Bje5r/0f9C0gwIeVNDw3PAAAAAElFTkSuQmCC";

  // src/ui/assets/luna-olive/minimize-pressed.png
  var minimize_pressed_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAB90lEQVR4nK1Vy27UQBCs7nGkTXa1ux/GDfEJXHJDkSIQB44gIhROfACftj+AUEgQYceNqtszHjsmCCm9sudhT01VdY9XAMDMDE8UIiIdAQ+HA15dnOP27rs/UAUEitQJX/JxzHeQ5AuhwyT7Iobtdo+3lx+doPD2/MUz/D7+QDpJSCKAClJKviAlQJNAOV9BCDpuVmK93uPz1Vd0HNzefcPpeoXV6gQpKUSJ2y5WB/YxwWXZrV/3N946KCg1lWsEYx+D1CITMAg9eCS0MXgC6MzIUBUmhhAfYZYfBe14S5Q7GFQAfazkZeEzQvISSyowkymoaMh2mc6OycIA1i4OwLDBnWn5V+CuslNBxxLSsIC/wq4FVF1OUmxgIyhrgxnnk1IyI5uRXWVGNUO3L6h9X5937qmYl8o0y1PPyoI0K87icOZ837fygzCzTDsfejgCctOlSGbIk0QNR69NzNzDlqHXbxM5T5V1ARCJKmAXb17jb/Hl+qrZWHjWfZPclK4Gm3jhfyK8n02WWi/Y84/Dv0FH8AlD1LM/jU/vP0yzzsNRbYq2763Kx6y8dL7byORhkRNgqJo6Lq3325La7XbI+ecMoCQuXmYdki0Xt0mpoAA26/3IlF/szWa36F1VR+DhOuaMI1mbecu5s9Mtzl++CyLDTk/6H/UHzBqlFEtog+8AAAAASUVORK5CYII=";

  // src/ui/assets/luna-olive/maximize-normal.png
  var maximize_normal_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAACp0lEQVR4nK2VvY4kNRSFP9tV3QIk2JchQyLZhAh4AAj2DVYbAi+AhBAJEuEGSBuSIZGR7EugiQmHHc10V9X9W11XTffMiGBWWku21fb18bnnHlcXgIgI3lMrpZQhAS8uLvjn39dM0xWH+Yi7IWKoHaltQBfZDlifddE+izvhE7MILXZ8/fR5J1hy+Ov173xcnxAxItwwxQExwWzuh109xxVIBHHF3XFRZjtyOBx4c3XJ9X/Gjz+8pGbgslwDe0oZqTRaWftQRwqNOmTY2sdxZKzDmmsr1JK/a5/LeNOX++718ciT/YFKQZlZTFBVTJOpM6t31slORGnJGMFNCV+lGcpZ16FrpAszB4jK4jNffPbNowvzy8sXlJLS1PugEEw69ZST4buVWwiHMj5gOsvUU3GCYHk30K2AIf6QKV2/WmvXLdurP39m0QWTGbVkI+hiSMyEWVqH589+JSyIKOgdp9cc0odplVvAfr9r3zyvQNaibCulrJVJ8MDO7NiYJsCcrAhKWbfd43xraTir1oVKbQ62pb1dosh90Egzi+Lpt3MR74QopTVaC051vH3ZZh3W7AxacxCfVt+5oXreTF7tbiAwMnQZThHFeo+wB5rqra65cat49EuS5Sl4u+E+LNiShPSB+X2rcktmH2yaKmZluySwrPiJybrWAUUxN6xn2O5oKoLujMGF9RMC3375HY9qxfvXyrJw5Q6oYv1tH6fCboTfXn1PG8DNwOLEPHyhPxE1zGdMlaV7VvBwNpfRQadpYmBg3Jf+jktNkRM0unp5KP1YIh25gqeOmbaYomaIKrvd/gy6b59w+eaScZjY7Zzd+OH/Zlrj7IxJhek4oRqYJ+BH9wv19NNn/PH3T4guiMINV4/TM33QYGjr1+Srz1+sMvdCvef/qLerEs03NpLvWQAAAABJRU5ErkJggg==";

  // src/ui/assets/luna-olive/maximize-hover.png
  var maximize_hover_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAACpUlEQVR4nK1VO44UMRB9/vTMLBIIxBUQl9gALgASERcAIXEFElIkMiQSLkBGREaCREJAwAmAC7AfZqbdXT9Uds9vRbArUdLY3W3Xq1dVz54AAGZm+E8WQgjZARmMXydfsF6doB/WUGUwMVgLQswgGpsDpM48UptVYVowECFahwf3XlSCwYcfp59xPd2GoQPbEkWXGIUg3FdnFXfWBsQjSBimAiYCacFqtcTZ+Qn+/GY8e/wa0TcOwzlCWCCGOQISYsjIMaPL8/ocU0SI7ZfzDF3KjXl2d98bEdAhztb1e11d9WvcPFoiIYCtgJTANIK5rwxHEQgPlR0RIThjOFuGSitNqvSwA2UaMNgKwSJGG3Dn1n1c1j5+fYUQvM/hENRgKNzXlJ3hlSw4YyB3F0AHKjAhkCjUhithmkkrB+khqBuNBTFG6NTlbz/fY6QBRKVKzGtHI4NthAlD1fDw+CWgBrUA2WGiltd16FLZALqJtIbsn4r6bk2rMbZ0Hdy/pb192QdP3VmpQ4RG3rTBNWCXTANJIUGiYENNsZnpkKlOQhYRwHgvpm/wIBEhJaS0x2dzskVgLjnZgeaavvRVd0nbSdmlu+HXovtKRoZBJn5AcNY1hh4yFZnqSlzlVTe5a63fjnlMUwma29Z4IIheYMo6QsYC9uNIi5aVEYzDFEJraTZNi5VnexNyJWglNHFE3i7MtMlmcjy++wSXMz/GHlTr3bAFVTBICrQAs87w6fsb5ORl2euyCkxHsAmUBWJDJeP3ghlBTbeyyj7061K7PJ+Heo5DvTjalde0yX5Pus7Arg4bax1r2iJgYRAzUprtQBf5Bs5OT5HzgK5TzOZHU8xDi3vNKMQofQ9mT4axmF/brtVL2h/efXj+T6Cr2NNHbxuoD//7P+ovEJHgiQDDyfwAAAAASUVORK5CYII=";

  // src/ui/assets/luna-olive/maximize-pressed.png
  var maximize_pressed_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAB5klEQVR4nK2V3W4TMRCFz8xspZRESR6MO8QjcNO7qhJQIQQX/IkKiWfg0fICCEGLgOwanbFn7Ww3/EgdKbu2Z/35zHjsCACklBLuyEREOgJ3ux3OL85wffPFHaqAQGGd8CPv5/EOYj4RWgbZFklYr7d49vi9CxQ+Hjy8j1/7b7ATg4kAKjAzn2AGqAmU4yOE0LpY2HK5xcerT+jYub75jNPlAovFCcwUouS2k9XB3idc5rP14+dXfzsUDNXiV2Fso4QaYQIJwhz8wbomwSPw+auX/7wxH96+uzWmfBjDLQmiwv+1HMFEqWgO28OcZv8vphrAhJSkQvNmCDqWUFF69frNgYLIY4UA508uG38G15y6wuxhTmkBDBj7xeXfj/FEZMMw+pUPk+SlErs8tRZoTBXHio9tX7ZJW5f7WXByeAsLlRU4XTT6lhL6EO+OcvT8NB3JIYFh3FSv4dKemsZqUUqzhd2c8zlI1PcBVHmBHMnl+NEtnxxdvAv2tDwvLp/OoObhcXPq9JjOHb1x12PHyzVYy64CaUMIPhbK9OjRCBiGw368vV2crnSz2aDvv08AzSEYBvRFLSf3UTsNnPjVcluV8sZerTazORujI7j89n2PPVWn5G+O3Ttd4+zRiyykrHSn/1G/AZm3k3vQdCYVAAAAAElFTkSuQmCC";

  // src/ui/assets/luna-olive/restore-normal.png
  var restore_normal_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAACz0lEQVR4nK1VPYsUQRSs7p7ZRQX1zxibXGAiaGQiBoKRX4iCkYGBCAcGopgZeGgqipmZiX9CLjY8Pe52e+Z9yXu9537oYWLDTLPT3TX1qurNJgAwM8N/Giml1Dng7u4uvn3/ilr3MRvmUBUQCVjmyKUDj7Q4IDHzyDGTKkwrBiIUm+Dy1r0gmPz2+es7nM5nYdaDcIhqM5AQRIY4rKx+b0BEIGWoKpQYg8wxm83wc38PBz8E24/eIPvGcTwAMEVKPTIKSmpXl3skFOTOt7Wr73v0uWu1loSc/HeOOfWH8ThWD+ZznJ3OkJHAGDAKgZkh7EwVA2uwdnZEjOKMQVBhmDZpurTUtQuNeMSAGWAZow5grhB/xoorF24fa8qrtw9AYkjJpcnroIChco2SnaEpB6BZM+S4QVqBlGEKpH6D6UA1SlEYDGOU6YDMhJ2PT1oSeITQAPa1NODutZcwZ1magUa6yRShX845AC9t3TyW3fOdOwEWQB5v8TmBV5KeQ9ORIioO+K+RFtFqonlFXp0s2WHBVEPDEQIXvS2//bQdx4ia6yoDblx5ioSMXNaBgxhoHdQ8zMRQz9vSxJUtjFQ8SG3cufZyoVnrMIcV2QAlrZG7rGVDAo9+O3T0rh4dXuzcgrEgdwkmDI+omWxoyke6+sKR4hbfAGf5J/eWdAcMwqP7wRvh10VcijM7EQtXLz7806XfTOz3y4UYogJhL7+saEoEngg6JXhjvn7/uJ1WZ6TRvK0lG/Nx9Q1J42sl4h1QVphCorfnNWHSA1kMpQPUjVhk0sszHR0+9BSvjhmjCMwIaoq06P8ArbWiQ4d+mqKPU3aRHdQWJlDkMZknsoG7jl42CYNFQMyYTKZL0Gk5g72fe+i7islEMelP/l1LW8amMqHOK5gNog54at2orXPX8eHLMxCPIAYOsX+sSeujCxm70r4ml87fbzKHUf/5P+oXhKb2o5U3XFYAAAAASUVORK5CYII=";

  // src/ui/assets/luna-olive/restore-hover.png
  var restore_hover_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAC1UlEQVR4nK1VPY8URxB9/TG7B5IRklNLjgiRAwcmQ85NgITk0BFCcuTckgMkIogtWTjiDzgCiRDJDrAcO4AA+Q/47uB2Z6brC1X17e3ewWEH1GhnRtvdr16/etWTAMDMDB8pUkqpOiCD8c/+71iv9jHOa6gymBisE1KuIGp9ASSe3Kg/VWE6YSZCtgE3rv8YBJPfXh08wyflUxgGsB1h0iM0IQiPsVjFF2sH4gYShqmAiUA6YbU6wuHrfbz5l3Hn2wfIPnGeXyOlPeS0REJBThU1Vwx1Ge+5ZKTcf7UuMJTamVdf7nMzEgbkxTr+j9HVuMblC0coSGCbQEpgamAeg2ETgfAc7IgIyRnD2TJUujQl6GELyjRjthWSZTSbwbQGtTnAvvz8Fs6Lp3/dB4siJa9zOg1qMEw8xpadoTAFIIzxoSAZkVKBKVCHM6AzTTAhkCjUZqgXxT1BDX+8+BXUBCwN0iaIKhQzvvnqJ0ANlqXLQXoa1IPahJxzAF797CbOi8d/3gOk21rVotJqCbLFRMjrPnSrBMP/CLPu1QD1y9maoOzMqTFRCI1mKMx9EgPPXz4KrRtNkcxkxtdf/ICSCiSfBu5POg2qx0ZOuaDspoytVCgYaWcg9PTwYkah/fUMKMkYvivaO2UTKa4dnbrV8eT5XSgLSk3R0l2WrXR5kzB0JY4t9+wGCf3etVU5TrEB5JkgeoYpa7cLezvSXgxcu/Ldu1U6YeKsenIhDs2d0GY/9WRgodFynu/Z3790trEjRQZDjg8RZ77l1MebKMQ7K++AeiFIJugELAZDKopaXBaBG1COi2nawCahp1gLMt55ZgQ1PbFV9du4nqLKy2WKPk5xcPQjzwvlJ26c46Zgb11roWNsW7zbGMSMUhZb0L16CYcHB6h1xjAoFssL79dypxgTMaZxBLNvhrG3vLh1zeZT8vC3788tzP+N2zd/7qBRkI/8jXoLKAcEAGGhB1kAAAAASUVORK5CYII=";

  // src/ui/assets/luna-olive/restore-pressed.png
  var restore_pressed_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAACBElEQVR4nK1VwW7TQBB9M+NKKYmSfBg3xCdwqcShFLWNAHGCAgWVEx/Ap+UHEIIWAbEXvVmPvXESc+lIjnfHO2/fm5ndCACklBLuyUREKgKu12ucnp3g9u67f1AFBAqrhIt8nv0VxDwQ2jo5FkmYz5d4cf7BCQp/Hj1+iL+bn7Ajg4kAKjAzDzAD1ARKfwdC0H6zsOl0ic/XX1Fxcnv3DcfTCSaTI5gpRIlbBqsD+5zgsj9bv//88LeDglItnh6MY7RSQyaQIMzBiFVFgrcAnZkqLl69PBj86erdXr/yxyi3TVAA+nyQs0OWFQyYimbZLpP5UxYLXrSPb98UwdaBPLtcQbUES0hJetBcDEHFFlIZlXzz/uoA2wzc59QZ5i/M6X+tS5WiCV/TtMDIoCbJWyWqTAvZlEy5dJ9erGBFc3Jl9EFNf9OU8jPh5ODYk8PSJ3j6/Lwbh1lKqNtxLlR79Pw0DQCjGCXDLzfX2cc+Jst6u/oaO3rFC7B9OSyBSqbR32FVxAwLdLa6xJjlE8YbbnfzKgiXl0OclJDuBSxOXQbtwePmDAgdYxMsurbJd2/2NWz2fl6u09htV97uTUSAtmu2NuDbx2VLLRYL1PWvAUDIzIvZhywhg+vonQKc8LPpsmfKG3s2W4ymwIHbZ1PX2JB1Sv6m78HxHCdPXmci7U73+h/1DziIrGXszzabAAAAAElFTkSuQmCC";

  // src/ui/assets/luna-olive/folder.png
  var folder_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAHcElEQVR4nLWXe2xbVx3HP37FeTlx6mRp0pe7du2qLl0oYq06sQ0YYpOK1nYwsQIqQwhRYBLsDx4DihADpoFgLYyNIbWjoAEb6xBZ10VTu7B23dJnsjRNm6RJHMdxYsfx4/p57XsPOtd26qTpOlj5Sb97fK7vPb/v7/t7nHtM/A/ydGd2t65pH9Z1zVK8Fw6MvbBr2+p9QBzI8f+Sp95KPXIhqIufv62LL7ULQw9d0kW3XxdfePQPjwFNwAyw6yq7j0S2XZjUhJSxmC4+8qIuvv3v/FxK+7lY+s77d34LaADM19X4r171rz/cl4zMWBNCBBVNpLO6mEoIQ6W80DmVXrKqdQtQC5iui/FfHBiqe/542JPThZirSVWIfWeFODYqRCAuRCKji9+/0jdx4y0b7wYqrwXC/H4ANDirOu5trV2qalCqcRUODkBjFXgiMBSGrDBx/x03NW5/+PE9wGrA/kEAmPa0efZ/7Ja6dSazaZZxqSd8YDVDRoNaO4xGoTcAZouFh7ZuWvOd3QefAZa/Fwhr6eT471iu5liRzeGy22jtqXii7ra19V90VNkMg6VyaRom4+Ash4QKwgIWM3hjoOlwc4ON++6547aBr/7suy8/+4OfAN75ytNaOqlesPKN5vXfX1bmcOOL2FmYWEttbaXhYalIw31BWFwDY7H8GEpBhQ10AT4FyqywtKmand/4+o5cJjXV9qfHfi1fBbR5Q9D5NI+4P/rbZa5Va3E0x3GvHGbUN8lRD8TSl2mfTkL3BCypheFIfpReF5mQIZFMNFTln1+x1Mlntn/5mxvv3v4AsGBu2M3y0vEkdc5Fd+5yNLaAqRuYoLwsyYO3d5LwDdE1AclsXs8FoLE6H+9FNZfHcQVqyyGWgeV1s3Nl0U3L7fc99OjjzcvW3C6JLq0Ms7yUWdnW1PJwLeZ3Z1HdWBfns+teZ+ziMN3+PPU2C0RSUFcBU8n86IvBwmqYiOfnkqGi8UAchoIa3sHz8XFP3xqgvhSAVV6CUfwImR+JORliZaErwSeXvUGHrwrb0htYUAGBBKSzUG7N0y7v+ePgkqMCN9eDmoqgR7tIjHdxQ9jLp2oP27buvedrU8OvrXjwp3wPiMikNACYTQh0FVQTmDNXgPjQ8glE+iU6RrZici80Sk4mnWz4VbEOytQRFqc9VOZGcDvdOJUR7A43Fa5bsTS04miS3ZkaTY3UtD1R93FgA/AOMG0AsJgRWmYaVBme9NxKAZuN9YtHGT9zkCH/NhY111FniVB/fiurWncgq6bStQVhc5IQkJEqE9sL66pVHKSMZcZP/4i24wSApcCZWWWYmu7F6VoHIv/wFVJezua1vfzjrJWYvorVmWe59RO/IWhvZTAMY/2wZAlYCvtgIAAN5gxNjqQx19Qo/Sf+nN57iItGlmOgEgaAU/10t27SQJO1Mz5jU8umScYDxMOjZFJR7DXr2ODuwl4dxun+MUGbm5N+iESguRlyubwmEmAOe9nUKnNczwPq2cOBjuhwoSH1F74bMADs2kvwKzuyMnMgmUesRMcIpaw4b/wcrpWtBs0QBZKQ83J6soqhDNjt4HKBroOq5gEo4QxbnX+lzLJtxhlvz4u5vx/hPBg6UeyK1qKz6Bpk05DJJ2EoEsF976vAOeCCjOjlcJgytFR2MjL9APFsowFCviYEhMOwuekAjlig6CSh/jbaj475QjE8hcWU4lLm4o9kdBChqeg5lXRyGouzBRgBzgK+wmIFtWQpc1j5dP1+ssk0qVTe+2gUNjraaaoNFCpdOpMh0PMX9rcbnkvjfiB7BQAtq6BjIptNEIl4cK3aAfolmT3zqwnKqkxsdvwRLZUyIrfCepqWmhNgL8vTQRzF/xavHekfH/QxVKBf1r+4AkAmV3FCTrPZFGndTOWCNaAOQDZ7dS0rw+VU2Fz+FI0MsqniFXA48v8ZAJL4Tz/H84cNz2X2e+bWuXUmrCZdCC1DJqNgqd8AuYE8r9cSCcIRZXP4SagtlIIUXUdVRjn5Tk/41EUuAb2y8ZR6PwuApipCaGkUxYerZRdkPJcXu5ZUVRkdE7P58jtCMH76b7z0JoNg0D8yX5ezFn/EoxKkRjqr4mi6CwK/BDGTK9cWaVxSX3TIauLiyWPpl48acZfeh2aawnwAsjm8NmvFxvKFd0GqDzIx/ltJKpPEp0dRQiOEgpO5Z/5l1LBsPgNX7nRzAKg5vJGpHpzuz0P83DXp13Jpkkq+SyphL719nvjIJNHuQSaP9+IdGDN6viy5t0sbz1UBWMzoiuJniXsLDPwQY3csETUdM7pjMh4kHvFy5nwgfG6YqYExgh1deEMxg2Kp0vB4wWiwoDON56oAzCaEVr4Y0j5QFZKJIPGoDyXmIxQK5rr7Y9PvDhG86CXw+imjnGKFbzx/YQwUajxZULnZqHOz/qoApGhahpE3d3K2s20+OqMFr4oGg4V7qYKmS2h+T6PzApgMc6z9uX+KfYdwBCLGAnPplDUsE6noneyzxax+3wbnSumxSR6j5CFCHixlzApb3yw6P5Cx+eQ/bh39EDg8PIAAAAAASUVORK5CYII=";

  // src/ui/assets/luna-olive/data.png
  var data_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAJBElEQVR4nKWXaWwc5RmAn7l2d9b22t7Y68R2HBsncS4SQkjiIFct0EApVZuCqv5ALYhwpglHVVBVqdePtvQiHA1tRdMjNBSFUlTSFhGKK0q4chGbXMSxk6zvc727M7tzTzX2OjJgEiiv9Gm+b+abmWfeewQ+oux893RELk1cnMq5V+mmX5fNu246o/cM93a/+s6/dh1r2/lwFvAAn48hwoU27M0bn02mzRuT2cy6jDXWiNgm5+1Rjgy2oMrthMQBO6ct7Xb0pldSPQN/2//NK1oBowDz/wPsy+VqNJ8ft4+c+trJ0XYhYyZoKDtKNNSNbvUxbvQzrPcwlBtlSIvR27uLRPEyW0od33H2ye/9JPf2C92AfSGNCDOdPGAYC3pzqR1v9v+huU+TmaUupTYmUqz4aHYEx3+JjHmUQa2PAW2M/myUQyefwUtXUFrioSrakeHfbdroHnnxCJA/H4T4/hP7Ne2Szuyp1kfeera5azxNoqiMxnIHVVlGdaySmlg5cfVbhKU1KKKALFr4VIIyG8Ih0qM6QwMsE776+NOs2NAMRM+naXH6YndHR3jQ1v646/jdtZWxJ6gsSlMW6adcTXJR2RHikXpU+RjzSkPEwtW4fhbfT2C5zcihTgRJA7kEzx7A8Tc3sP7OrSjRRUD4IwGUVlfduePovSsGtHZCkkdU6UAWT5Mxq9HsBZjWcerkhcyLqFREFyCJ6/H8Z/H8ayhRdyJIFogaxB4C+wWIPrWcq797D1ANyOcF2JvPz9uXdH+4910LQZTRLZuMqTFuDDOaVzCci+jKHuJ4Zi9pexRVaaE88ii+X0/W+jSj2YfwfBGUfRB6Hqxm0P8Mc/yrEaTlQPFMAPLUZDznXb+z1Szt6/45pcV3EZWPIeclfN/Ddh/Ddltx/WFyTh/d+RgR+RbG8jBugG4FQaeDeiPYC8GeC2IneB5EDyVYdduXOfCbo0CQK9wZAToHzNVtp8ZAqaS7/1ZixXcDORzPI2/bjBuvTqwVqQlduYHeDPRkYDAHGcMHOwx+M4R+Men3gXgg2m2CP3vLWh8agYECxAcAhK4Bc5GXt0CycWyHlJHD9cBwPHQlhyLaCMIqQtIDjORKSRmTAD1psPMO2Dnw0+A0gpkHexBcl4inYSniLEeU6/Gcw4A2PSzlqcnImF1J3oRIFiPVwuDwdViz/kLUrkAWE8iigeltxPPWYXmQtWBc97ECaMMFywDxIFgyGI2QXg9WH6oyAnJOdeRIAktTP9QHdN2RMAywDTAjZAY240qdqOpR0tmfEQ71Egq9hWa2YDtxPDd4qQ22OflyHgO/HXwHpA4IHUP1yykSajEtRUKQAidUCjnhgxpwPd/DNJmAEMbxqUY7s5Nc7GVEdQ85f5C8dh0ef8dzWsCuB1cH1wGSIP8WAlPowGkP2clSWldF2KhCsAUP15ZmSnzyuXiUGcUxa8gFtvQnGT0Vz7oeT9kA6r8h8izIB8FZD/m7wZ0HqTNw6j+gh2EkDH1AJkz0Mwmi/mxiUgU9OcvEs8yZCpQ8NVGicpfg2sv9ACAIn0DFEQeUwCwqmKsg/h1wk+BtB/F1sDdBMgQvPwxinOqGS6lprmfxZWuJN5TRduIVUoMl5MeGNTxHn6k4yec0EKatsiq2YSg5NqmBKQhFAcUFyYFwbNKKE1X/OPhPwOhXaFpzLVseuBc5VokQLqKoKIydM1gwdym797zjh1Pbek0YK5Tp94hYOPo9xw7trlvdaGLkmTBDMDQNslnIjkPahYFNoCtBOpgcg5dDSmfJ6iupqJ3HiqZyiiWTsZEUlm1QU5dgy6b1wp33bW5YdNnnyqZCfjqAMG0evuzXbduO/7Nzo94/ArGSya+X5ckhhEDphcTtCKKNn7kBhm4k1N/GbTddQ+WcSmpqSljUEMN1PdTiCHJIwhPAsKHt4Fl91+NbH/jvc488HSTeKX8QpwFYPa1Pba1oWTYUi5Ugn/v6qZFDts9S6pUTzbQg9H8BbJHypc0UFxchS5DOWpzszuMpEcIRCdNwSSZ1TpwYxyZaNDZwejXQUAjH9/oA4A8889NT8aqmb4evuurx2GuHIno6jW7bOJaF59lEowbl1hq6uz6PnxdgURxzYR1DXo5SAWRJDMKZwXGHwSGdjhMDmLaAoqqkR/vzJw7uCaqGOl3z4vt8whr71S3Ppbpe/FF25ZLsnJoa5sfj1MZKSRRFmaPGKDIupVSIkyiPEqtKIGou+9t1hvtzSKKAJIlIAvT1a2RyHs0r4qxfW46nj5ie62QL6g+SxwcdYhpUBetu/mJo1U3310qJhbWpcQTHJRIaRcAia1QhSiIhWSIqSYTkELYoEKow+MyV9VTNKaenO01Wd1k8V2HdyooJmN9vf6Hr6W0/uL2n48DrhYjwP6xVCrJWGUpkMZ/acnNRYuUVFUXVc+JyTC0TbPDliQ1eoVKOjPUYyc43RpzhN89csnw+X9p43woxHC/ubD8wdmL/S72VVQlh45Y7mmrnVYf+tP35fY/ev+FW4CRgnq8tFwr2mg00Ea1YyvxrLxdi9Y0CchTLFPx82vJHjgwzvP8sTi7IgUmgv37xujolrC7pONyaK5Tg/uZrb139y+3bvjE8bnsblhTfFXSAQSDP2CYVJMhYucJDR8iNvEP7k3t8qPEJutAJuKk9Q0wm4dGgCz5z/I0QkAAiTCagrBKJnc1mzDtCETUw8Xyg5EIAUxI4TKbQSARfc7rwYGna9cCexh0PvqyGI+GLRdwlvueUI4hVRbGiWeWz4nWNDfGVREuUw/s7tEIYTtwvfwSA6RpxCiDBOGe+zVtfn1c7d9aDTQviLWpxSY3jSfiI+EKwRUAQIaPZ7P3Ha4O7n/h+OzBc+F/g4wDMBMQ9j7259pIV9bvqGqvq0lmHAwdPDPcnz2Zz2bRlmaYbHMdH+vSh5LuZU4dbe8y8FmjwDSAVPOOTAExIVaL06w3zK6tO9phG664dyb8+smWfY5u9BX8ITGMVhlbwh+6CKbWP9HN6AQnuLwXWAGsLvtEFvD3huJMmCzQVdMJBKQ56ggAmWE9o8JMCBBI4VDkQK6ynsl3wouky4//h/wDeiUTZsUu9qwAAAABJRU5ErkJggg==";

  // src/ui/assets/luna-olive/viewed.png
  var viewed_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAH3ElEQVR4nJ2Xa2wU5xWGn529eL3rtRcb22uby8aXxZc4obgUA0a5yKCYhIigqhVR2x8VKFTqjwSq/qhUQdofaZtGVVElKtSWUKuNFdQ0whY0qjBuoKEELzjL1YsdGxvfd42ve5udmeqbHRMTCLZzpM/fzO56znvOeb/3nDEduZDQPBkaajKJKssoskxSTqAkZJKJhP6ZuFflJEpSRlNU5pvD6WTvd79RCgwDsyzRTALAvlorqqreX4qiPHA9tzRNu//d3D4wEuFS70x0/+7aeqADiCwJwZELCW0ppqialkhqWkzWtJmEpgWCIe3jWU3bf/hCFKgVSVmKf0n8EZEtxlQNRAXEnpx3PR4G7cla+w/e+vgs8NRSQEiLBfBVzhVFZWIS+qMwXLnF/uLPzywJhKSp6oIAvtK52FWNlj44OyjzSdc9zpp99k0/fG/RICyaTi7z13OugTPTwc7p89TbNGayLMxmWIlE8+yfwGZgFPj8sQDUx2RgIeeyCpnuDDbXf4u4AlHFzMSEmY7IgPj3IiBjwQyoySSaZvtazgXspNglGyYg3QyyBdLS9EeYjLVwCVQ1JS5H/SzeJnpJhrrIs0XIzc4ikUjo2jAyMkIkotDQ8MrmQODTjwYGBm4BCcH1RwJQlOT9mx2+1K+Uueg0QTJxSlJRizUdHmIw6KdiTRneui3IsszQ0BDRaJR4PE5paSmxWIzq6hXr/f71HwQCgT82NTX9CrgHyA+XQE4pnLDm4AJRh4NUu8LsfPkl+vr6OPOf8/SOxZAyliMCMUkQv3kdczSEZ5mLurq6dI/H84bVal3X2Ni4F+gD4g8CUAQHND26htJHRy4I5r8aZLMXvN4a2traCM648FVs4ZVNNnLSwdb4HIl1e+kqfZX+CNy57Kfr4jmq15SwdevWZ2Kx2LsnTpzYY5yK+yAsegNSVD3tl0U70YUptc+RbXJsiGpnWHfe3NwMedXs3ubDNZ+76/Zi86yj0AGzdkjbWENuWQUd//gTxQU51NbWbgqHw79pbW09APQavEDSu6CRgXwn5Dkg1wnLxe4AqwSuiavU1NTQ3t6uO9+x6UvOhT31KtG8cv3JIoD2f7VwpvEIVbv28Nmt22RmZlJVVbXN4/FsB3LmToikt1k1lfbhGRiZhZEZGJ2FgWkIjQyxrmI1w8PDXBtPY9sGH7Z5uqUa7e8u0C8IDFw81ULTrw8xPjaD1eKgavt36OrqorS0zLZ69ervAcWAXQcgeryqpUowP3JRV6sZkiPXKSgoIBgM4quofiDyKWMICBsghPMLLS0cf/MQvo072Pn6QSo9kF9SSUSTcLvz8XqLywEf4DYyIDiQKoE6JzYG+SIJURIFSZLoGYvhzbE9FLnYY8ZnbS0tvHso5XzXGwdxpEM0Dllm8NZsYGpqhuLiSqfb7X4aWCbKYFH1DGi6oo0Zo4Rm1DGaBEdihqmpKRRHLpnjfqLmQtJdBUwAUeNgt7e18e/jx+nu7iZnpY/1L7zESJefPK+PhN3FE4MdhCbuEIw7cLmWYbfbVxoZsEpiBFNUTXeYnQ7L7OA2ljBBnlAopJ9z15V3SO9svg9SNvaeYJCGhgZycnII9wf528HXOPaz1+jsCOo/yD3+JoXv/45QaJTly1eKY28zOqXFoshJvaWK4xaOPngEhU1OTuL1ejFJ03y67e9kOVLQpwwAou5Vzz7Le+8cxe2rY+cvDuBypcoZT0CGFYZ/+U9uBK5QcPEWExMhIf3iBAgqSykd0DQkDYrdqZrObzhTMQ2TyUQ8dIdEcrOuICNGzQVYRYGcFT72vPVbIhGjA5kgEgVJgqIMmJRh6PNOCrMLuH37GpFIZNrArurdUGRAcODS4MPqey9m0TngIsLkeIy0NDsJXUK+sGQSkjKYpRQo4VxkoDIH0qXUEe0L3GDj9nqamv4Qm52dHTM4nNRJKDggMrDWYzQdAU0oYBwi+Wvo6blJfn4+PZfOkVG/FYvQfBlU5QvJngMSi6fuV7mgOgfiIrCAH7c5m+npaW7c0PV2XPRTUcWUEhocyEwDl1g2yLCllNG1opJgfxi324053MNI713dqVNU0JgP5GQq6mgMLCYoXwYbC1KzwmeT0/zv/Q+pr/8+p0//VQjadaMpie6oSWpS0Tkw//zrymjwIM8J6b7n8fv9rCjI5/oHRxnu7WMmDiVuqMqGVU6o+Oj3PBPp4OVSeDoXZmS4PDnN4Z8c4PmNuxka6uXkyb90R6PRTuC2kQFSOiA8PcK5uM62w+SKUu5O1dLf305V+RpunTyO84kK5OcacKU7cZthTdMhph0H6fWtRbVCe4ef1j838u0XX0eSLLz99r6xvr6+88bLS/ecfpn2/fiY9s21a8nOzmYxFggco6ioiHA4zNBoCLunEFfOcjTEm5RCZGqS0eAdqso2UFe3i2vXLnD48P7BQOBKq1BqoNVoyTqVTT/6afPi3krm2czQhxQXr6Sk5EnMZivj41NIkhWLJY3CwjKysvLp7Q1y6tSx5Llzp7sGBgb+C1wCRAa65s8DJqAEeAEQL5iLtvLy8uqCgsKylSu9BUVFxVaLxa7PFWNjQ3R2Xr3X3X1zcHR09JosyyLdAeDyoyYiE+AEPIsZob9k6UAhsArINe7npmCRXtEk7xj1nmP9QzPhgmPzY8xigM4yghD3c88TKieEZlJU7HFT8f8BywihyGx+7CwAAAAASUVORK5CYII=";

  // src/ui/assets/luna-olive/history.png
  var history_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAF1ElEQVR4nL2XSWwb1xnHfzMckuIuiVpiS7ZiS96yWA5TG3FUJ2jRoqce21MPbYCeW/sW9JRTgDZBcjAQIAngJHZgGHFQtwmaVEiZuo6VmIogu7ZiLZQXiVqozaSGmzgznOBxnmJZiB3Kgf0BH0gOOfP7f8v73qPCj7QjR47HKhX7sGEYz5umtSUabWTTps1omoauZxJLS3OfJhKfvBOPvz8FGIC99n7lfsEvvniqQVW1dz1B36/bntpOuK2ZQHMjpgmVClhli+JcFn0yzcLItXwqNfrGm28e+StwCzB/lICXXvpnTFFc8a5nOiOxQ7tQbah4oKyAZYOqOCJKBUjNQXZeJ31hgBvfXDz71luHXwBSQPm+BLz88qdV+E9/tSfSs6+tem3JgrkyWCoMzzjwQABCIQjVwXwark8YzJ7vY2zw/JcnTvzlD8B1IULdqACvt+7Y1p7dkf0SXo3CglQGZpbAJQptwPIyzMzA9DyEm+CJXW62/OxZtu7ed7Cn57d/AjYB2oYEvPba2RdCmxr3tu9tr4JWTXRV2YDFHDQ0gN/vuM8HlgULi6AFoW2zm46ep9mz59DvgG4guCEBLpfrz83dWwl6YN6CK1lI6jA4D8Uy1PnEjxxwMOiUQXhdHeTy0NIErV2tPNLVFTp48DeiFzZrtcKPHu3b5g7WPelvjuDyQNaEaR30kpMBjw/CYVAUiESEWHDJ8KwK1dVRtiEagrbuTlq/2h4DdtQswDTLnYFAPW4FiiYkp6AlBL4gFAzwB8DtBrcGmgLamg63VTA9ztrz1kF0SxSfT8jl0ZoFqKrr556mMH4PWEC+CDdXnHSLetu2A/cq4BHdJe6R91bkBBLrTghp6WgkHG6OANFaBSiWZbjsChgmqF4n1Zp224UQkR0v4Ja+VoAqM2IrTk9Ii9TchEtL6fOlhWXyJSfFXq9TZwEXqRf1FlARkciAEFIn3SuvueT3y7NLZLPpXDWzNfLtYjGXLGfy3MqDR3XSLrKgqrLh5MPUNSL80lfhtnzNpBYpFLIFIFtzBl555Y/JYk4fLS9mWViA+noHvNZWm05dJyYANMjPQsTYhXEmJ4fE5rS4kTlgzM9Pvq2PTlSnm18uN9F8wkWdKxJgSheN55LukSJmkmmSl4ZLg4OfXAZubESAPT7+ccLKzLF8LUXyJjQGnOar7oC2szpW4aLji+v23pWSQd8/BkgkzgwJuEhGTQIyr++rZrCzs7Pc1aWRuzrE3NgUo9ch4IJwwBEgIha+IuHLwLx8v1gyOH28j6+/iE8PDZ0dBAaA6R9chvk39sd8LdH48Gd/Gx7J74wUCgvo+gjmRROrkENx7aIhBOEg1QkpdkQRvXDx8IwINa3T9/cB+uL/nj5z5tU40A9cAnL33I7zxw7FfA3huBJtjIjOu2g+x0dXDVpbWw2Xy1MaHMwaTZt3NrY8uZ3oo83VAVOdB4JctshOZZkdSTN6YcQ8d+7DZDx+4itA+H9Xt2OlVnhuKsPlmwESxQ6+mM0mT58+/aVI4Y4d+6Pd3b98LhxubXe7ff61R7Jr167c6u/vnRgY6B3R9SVRc5H6xNoDibYR+FR5C9HobtrKy6Kp/y8iGRvr18fG+k8Cu4B2ICQbHwmZBZLAODC1/kimbQReqn+MlWg3o4mTc7K8k8CCfL0q5876KSx6MCseLcF3HEq1e8H1VIYrE7fhpaan+eCjY1d6e49fkNGUxG4LFCTobnYH9HsF5NfBb01kGU59L/w88D/gsozqByH3MvXucP/d4GIZ9cnaflfL+zWlfPz5p7RQ8PO18G8m/cwYDx5ezcCZG00/KYZuw4cmAkw/hMhXTRsyn4gmP5vh9y15xlMBZox2VhoeDrwqoFKpqGpkO0eTBo+rUGl8eHBhyoEDB7bGYrFTtm13VCyrqavjF+Z/zv1rrLf3PQH9/EHCqwLkVr0NeBYQf3eCcnmJSfc1kH5Q8FUBwsWxrV4e4cQkE0Ax6fQHCRcCvgUHNL+vRHiGZAAAAABJRU5ErkJggg==";

  // src/ui/assets/luna-olive/app.png
  var app_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADMUlEQVR4nLWVS0hUURjHf+c+us2jx2gWGZGz0FWFsylMTEqj2vQk2lUEEUWvXUQUFQRSmww3ta2IQKJd0CYopHRRiW0KJXupWKHNTcfJmXPjzD13vJhBqf2Hc8/c75zzPf7f950rmBnqgDmTZD+BpzPUSw3QBHh/GE16TxEngQb9PzpJmQ04QAI4DWwBBpQiC7yEnrHwSOjZN6L2pIyQojxwBrig3yuBJHAL2AH067VFwJIUcBvoBmqDmNTLHaW2cH4JsDjsaSnQB2wATgEPgcvam4NAB3BER+C1gefpsUntacAr/p4Vo2goRCDhRA+swx+Pgc3AOeBrBC6WwRPgAJADFqozYyHPCkrCXIQWA7FIwncJ2yRcAbZK6H8Kj0agshFWAm3A9eDgfM2Z8uYL+vFYC9XiZEgoldAnYYOEYxIeSrikKEhNQdE+8NZMVUEpPPZPUCS0/hPL4d0H6BLQq5RriuoysGA13O7x613l0wXu+scsYF5BZFk55sXBHfZ51GgsUvQRvgvYBlwxYKsB/XXwKAaVPVNQ5JfKRB3V1EB3D9y5Bym/in6DYu4DsB44BDwAzurE7gtR1OiH3xYUkQcbvfp6PM/zx/PnExRZOgPHly799LWsrGFPZ+fbl/F4/GpJScll13UVJdeSyeQr27YP9Pb21gkhVqTTaeBHqFxsHCdCLmcxPj7GyMh40WudA3m4peXz+Z07R/PptIxlMploIpH4NjQ0VBqLxVzTNPOGYcjBwcFyx3Ey2Ww24nOvmlzBxbbHyeVGaG4+yt69b9i+3c+BjsC4UVvbvru8fM0mwxggkVC3AssikYia5wbeVFRUqKkgBOWl1CtxhLBpb++ko8NlLNQH2gCHXrx4vbaqahVdXV0IERTX38NxHFx3gNFRg/v3fzegNBb02rY9LQOWZWEYJqYpMsBHoEpd5UGZ3qyurn7GLMAwjCFgF3AReBNEQD6fN2fDgJRSXffvg1s5fEXNFrzwV64YgYJpmirEaeXA+MO5ooFoNFpoQ7VJbf5XCCEKBaKcnNJAa2vrQtWhw8PD0zYghCCbzaomKoYSjmm//kTOFKrNmgFVrv8fvwAWxReLASdSmAAAAABJRU5ErkJggg==";

  // src/ui/luna-assets.ts
  var luna = { caption: caption_default, radio_normal: radio_normal_default, radio_checked: radio_checked_default, scroll_up: scroll_up_default, scroll_down: scroll_down_default, scroll_up_glyph: scroll_up_glyph_default, scroll_down_glyph: scroll_down_glyph_default, scroll_thumb: scroll_thumb_default, scroll_track: scroll_track_default, button_normal: button_normal_default, button_hover: button_hover_default, button_pressed: button_pressed_default, button_disabled: button_disabled_default, button_default: button_default_default, close_normal: close_normal_default, close_hover: close_hover_default, close_pressed: close_pressed_default, minimize_normal: minimize_normal_default, minimize_hover: minimize_hover_default, minimize_pressed: minimize_pressed_default, maximize_normal: maximize_normal_default, maximize_hover: maximize_hover_default, maximize_pressed: maximize_pressed_default, restore_normal: restore_normal_default, restore_hover: restore_hover_default, restore_pressed: restore_pressed_default, folder: folder_default, data: data_default, viewed: viewed_default, history: history_default, app: app_default };

  // src/ui/assets/luna-olive/xp-text-regular.png
  var xp_text_regular_default = readCachedResourceUrl("atelier_xp_text_regular_png");

  // src/ui/assets/luna-olive/xp-text-bold.png
  var xp_text_bold_default = readCachedResourceUrl("atelier_xp_text_bold_png");

  // src/ui/assets/luna-olive/xp-text-regular.json
  var xp_text_regular_default2 = readCachedResourceJson("atelier_xp_text_regular_json");

  // src/ui/assets/luna-olive/xp-text-bold.json
  var xp_text_bold_default2 = readCachedResourceJson("atelier_xp_text_bold_json");

  // src/ui/pixel-text.ts
  var fonts;
  function loadFonts() {
    return fonts ??= Promise.all([[xp_text_regular_default, xp_text_regular_default2], [xp_text_bold_default, xp_text_bold_default2]].map(([url, data]) => new Promise((resolve, reject) => {
      if (!url || !data || !data.glyphs || typeof data.glyphs !== "object") {
        reject(new Error("Pixel font resource unavailable"));
        return;
      }
      const image = new Image();
      image.onload = () => resolve({ image, glyphs: data.glyphs });
      image.onerror = reject;
      image.src = url;
    })));
  }
  function observePixelLabels(root, selector = "button,h1,h2,h3,summary,.luna-breadcrumb,.lf-check") {
    let disposed = false, queued = false, loaded;
    const render = () => {
      queued = false;
      if (disposed || !loaded) return;
      const targets = [...root.querySelectorAll(selector)];
      if (root instanceof HTMLElement && root.matches(selector)) targets.unshift(root);
      for (const target of targets) {
        if (target.closest("[data-atelier-plain]")) continue;
        const style = getComputedStyle(target), font = loaded[Number.parseInt(style.fontWeight) >= 600 ? 1 : 0];
        const dpr = window.devicePixelRatio || 1;
        const scale = Math.max(1, Math.round(12 * dpr / 12)), unit = scale / dpr;
        for (const child of [...target.childNodes]) {
          const existing = child instanceof HTMLElement && child.classList.contains("atelier-pixel-label") ? child : null;
          if (child.nodeType !== Node.TEXT_NODE && !existing) continue;
          const text2 = child.textContent || "";
          if (!text2.trim() || text2.length > 80 || /[\r\n]/.test(text2)) continue;
          const glyphs = [...text2].map((char) => font.glyphs[char.codePointAt(0)]);
          if (glyphs.some((glyph) => !glyph)) continue;
          const key2 = `${text2}|${scale}|${dpr}|${font === loaded[1]}`;
          if (existing?.dataset.pixelKey === key2) continue;
          const width = glyphs.reduce((sum, glyph) => sum + glyph[2], 0);
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = 12;
          const context = canvas.getContext("2d");
          if (!context) return;
          let x = 0;
          for (const [left, top, advance] of glyphs) {
            context.drawImage(font.image, left, top, advance, 12, x, 0, advance, 12);
            x += advance;
          }
          const label = existing || document.createElement("span");
          label.className = "atelier-pixel-label";
          label.textContent = text2;
          label.dataset.pixelKey = key2;
          label.style.cssText = `display:inline-block;position:relative;vertical-align:middle;font-size:0;line-height:0;flex-shrink:0;width:${width * unit}px;height:${12 * unit}px;--atelier-mask:url("${canvas.toDataURL()}")`;
          if (!existing) child.replaceWith(label);
        }
      }
    };
    const schedule2 = () => {
      if (!queued && !disposed) {
        queued = true;
        window.requestAnimationFrame(render);
      }
    };
    const observer = new MutationObserver((records2) => {
      if (records2.some((record) => {
        const target = record.target instanceof Element ? record.target : record.target.parentElement;
        return target?.closest(selector) || [...record.addedNodes].some((node) => node instanceof Element && (node.matches(selector) || node.querySelector(selector)));
      })) schedule2();
    });
    observer.observe(root, { childList: true, subtree: true, characterData: true });
    window.addEventListener("resize", schedule2);
    void loadFonts().then((value) => {
      loaded = value;
      schedule2();
    }).catch(() => {
    });
    return () => {
      disposed = true;
      observer.disconnect();
      window.removeEventListener("resize", schedule2);
    };
  }
  var pixelLabelCss = `.atelier-pixel-label::after{content:"";position:absolute;inset:0;background:currentColor;mask:var(--atelier-mask) 0 0/100% 100% no-repeat;-webkit-mask:var(--atelier-mask) 0 0/100% 100% no-repeat;image-rendering:pixelated;pointer-events:none}`;

  // src/ui/appearance.ts
  var key = "BiliAtelier_UI";
  var appearanceChanged = "atelier-appearance-changed";
  function readUiPreferences() {
    const stored = typeof GM_getValue === "function" ? GM_getValue(key, {}) : {};
    return {
      theme: ["page", "light", "dark"].includes(stored?.theme) ? stored.theme : "page",
      edge: stored?.edge === "left" ? "left" : "right",
      y: Number.isFinite(stored?.y) ? Math.max(0, Math.min(1, stored.y)) : 0.72
    };
  }
  function saveUiPreferences(change) {
    if (typeof GM_setValue === "function") GM_setValue(key, { ...readUiPreferences(), ...change });
    window.dispatchEvent(new Event(appearanceChanged));
  }
  function pageIsDark() {
    for (const node of [document.documentElement, document.body]) {
      if (!node) continue;
      const theme = `${node.className} ${node.getAttribute("data-theme") || ""} ${node.getAttribute("theme") || ""}`;
      if (/(?:^|[\s_-])(?:dark|night)(?:$|[\s_-])/i.test(theme)) return true;
      if (/(?:^|[\s_-])light(?:$|[\s_-])/i.test(theme)) return false;
    }
    for (const node of [document.body, document.documentElement]) {
      if (!node) continue;
      const components = getComputedStyle(node).backgroundColor.match(/[\d.]+/g)?.map(Number);
      if (components?.length >= 3 && (components.length < 4 || components[3] > 0.5))
        return components[0] * 0.2126 + components[1] * 0.7152 + components[2] * 0.0722 < 128;
    }
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  }
  var sharedControlCss = `${pixelLabelCss}
.atelier-control{font:12px/1.4 Tahoma,SimSun,sans-serif!important;color:var(--atelier-ink)!important;box-sizing:border-box!important;cursor:pointer;border:1px solid var(--atelier-edge)!important;border-image:none!important;border-radius:2px!important;background:var(--atelier-button)!important;box-shadow:inset 1px 1px var(--atelier-highlight),inset -1px -1px var(--atelier-shadow)!important;padding:3px 7px!important;min-height:24px;vertical-align:middle;white-space:nowrap;text-decoration:none!important}
.atelier-control:hover{background:var(--atelier-hover)!important;border-color:var(--atelier-accent)!important}
.atelier-control:active,.atelier-control[aria-pressed=true],.atelier-control[data-view="1"]{background:var(--atelier-selected)!important;box-shadow:inset 1px 1px var(--atelier-shadow)!important}
.atelier-control:focus-visible{outline:1px dotted var(--atelier-ink)!important;outline-offset:-4px}
.atelier-control:disabled{opacity:.55;cursor:default}
.atelier-control[data-confirm-block=true]{color:var(--atelier-danger)!important;border-color:var(--atelier-danger)!important}
.btnView.atelier-control{width:auto!important;min-width:40px;height:auto!important;min-height:22px;padding:2px 5px!important;display:inline-flex;align-items:center;justify-content:center;line-height:1.2!important}
`;
  var started3 = false;
  function ensureAppearance() {
    if (started3) return;
    started3 = true;
    const theme = document.createElement("style");
    theme.id = "atelier-appearance";
    const controls = document.createElement("style");
    controls.textContent = sharedControlCss;
    (document.head || document.documentElement).append(theme, controls);
    const update = () => {
      const mode = readUiPreferences().theme, dark = mode === "dark" || mode === "page" && pageIsDark();
      const colors = dark ? {
        surface: "#202319",
        panel: "#303426",
        field: "#191d15",
        ink: "#f1f0e6",
        muted: "#bec5ac",
        edge: "#758060",
        highlight: "#66734c",
        shadow: "#11170c",
        accent: "#c0cf8b",
        selected: "#455226",
        hover: "#424b30",
        button: "linear-gradient(#424c32,#303725)",
        danger: "#ffb1a5",
        caption: "#394425"
      } : {
        surface: "#f4f3e9",
        panel: "#ece9d8",
        field: "#ffffff",
        ink: "#202016",
        muted: "#62664e",
        edge: "#9ca486",
        highlight: "#ffffff",
        shadow: "#a5ad90",
        accent: "#637231",
        selected: "#dce3c1",
        hover: "#f7f8dc",
        button: `#ece9d8 url("${luna.button_normal}") center/100% 100%`,
        danger: "#a33024",
        caption: "#637231"
      };
      theme.textContent = `:root{${Object.entries(colors).map(([name, value]) => `--atelier-${name}:${value}`).join(";")};--atelier-dark:${Number(dark)}}`;
    };
    const observer = new MutationObserver(update);
    for (const root of [document.documentElement, document.body]) if (root) observer.observe(root, { attributes: true, attributeFilter: ["class", "style", "data-theme", "theme"] });
    document.addEventListener("DOMContentLoaded", () => {
      if (document.body) observer.observe(document.body, { attributes: true, attributeFilter: ["class", "style", "data-theme", "theme"] });
      update();
    }, { once: true });
    window.addEventListener(appearanceChanged, update);
    window.matchMedia?.("(prefers-color-scheme: dark)").addEventListener("change", update);
    update();
  }

  // src/ui/luna-theme.ts
  var atelierPanelId = "bili-atelier-blocker-panel";
  function ensureLunaTheme() {
    ensureAppearance();
    if (document.getElementById("bili-atelier-luna-style")) return;
    const style = document.createElement("style");
    style.id = "bili-atelier-luna-style";
    const id = `#${atelierPanelId}`;
    style.textContent = `
${id}{all:initial;position:fixed;z-index:2147483600;inset:32px 0 auto;margin:auto;width:min(1000px,calc(100vw - 48px));height:min(720px,calc(100vh - 64px));display:flex;flex-direction:column;color:var(--atelier-ink);background:var(--atelier-panel);border:2px solid var(--atelier-accent);border-radius:3px;box-shadow:1px 2px 8px #0005;font:13px/1.5 Tahoma,"Microsoft YaHei",sans-serif;isolation:isolate}
${id},${id} *{box-sizing:border-box}${id} [hidden]{display:none!important}
${id} :is(h1,h2,h3,p){margin:0;padding:0;color:inherit;font:inherit}${id} h2,${id} h3{font-weight:bold}
${id} :is(button,input,textarea,select){font:inherit;color:inherit;letter-spacing:normal}${id} button{cursor:pointer}
${id} img{display:block;object-fit:contain;image-rendering:pixelated;flex-shrink:0}
${id} .luna-caption{flex-shrink:0;min-height:34px;padding:3px 5px 3px 8px;display:flex;align-items:center;gap:8px;background:linear-gradient(#0003,#0003),url("${luna.caption}") center/100% 100%;color:#fff;user-select:none}
${id} .luna-caption h1{font:bold 12px Tahoma,SimSun,serif;flex:1}
${id} .luna-caption-actions{display:flex;gap:3px}
${id} .luna-caption-button{width:24px;height:24px;padding:0;border:0;border-radius:0;background:var(--normal) center/100% 100% no-repeat;image-rendering:pixelated}
${id} .luna-caption-button:hover{background-image:var(--hover)}${id} .luna-caption-button:active{background-image:var(--pressed)}
${id} .luna-layout{display:grid;grid-template-columns:150px minmax(0,1fr);flex:1;min-height:0;padding:5px;gap:5px}
${id} .luna-sidebar{display:flex;flex-direction:column;min-height:0;background:var(--atelier-field);border:1px solid var(--atelier-edge)}
${id} .luna-sidebar-title{font-weight:bold;padding:8px 10px;background:var(--atelier-panel);border-bottom:1px solid var(--atelier-edge)}
${id} .luna-nav{padding:5px;overflow:auto;flex:1}
${id} .luna-nav-button{width:100%;display:flex;align-items:center;gap:7px;min-height:38px;padding:6px;margin:2px 0;border:1px solid transparent;border-radius:2px;background:transparent;text-align:left;white-space:normal}
${id} .luna-nav-button:hover{background:var(--atelier-hover);border-color:var(--atelier-edge)}
${id} .luna-nav-button[aria-current=page]{background:var(--atelier-selected);border-color:var(--atelier-accent);font-weight:bold}
${id} .luna-main{min-width:0;min-height:0;display:flex;flex-direction:column;border:1px solid var(--atelier-edge);background:var(--atelier-surface)}
${id} .luna-breadcrumb{display:flex;align-items:center;gap:7px;padding:7px 10px;min-height:34px;flex-shrink:0;background:var(--atelier-panel);font-weight:bold}
${id} .luna-section-tabs{display:flex;gap:2px;padding:0 7px;border-bottom:1px solid var(--atelier-edge);background:var(--atelier-panel);flex-shrink:0;overflow-x:auto}
${id} .luna-section-tab{border:1px solid var(--atelier-edge);border-bottom:0;border-radius:2px 2px 0 0;padding:6px 9px;background:var(--atelier-panel);white-space:nowrap}
${id} .luna-section-tab[aria-current=page]{background:var(--atelier-surface);box-shadow:inset 0 2px var(--atelier-accent);font-weight:bold}
${id} .luna-content{padding:12px;overflow:auto;flex:1;min-height:0}
${id} .luna-content h2{font-size:14px;margin-bottom:6px}${id} .luna-description{color:var(--atelier-muted);margin-bottom:12px}
${id} .luna-rule-tabs{display:flex;flex-wrap:wrap;gap:2px;padding-top:6px}
${id} .luna-rule-tab{border:1px solid var(--atelier-edge);border-bottom:0;border-radius:2px 2px 0 0;background:var(--atelier-panel);padding:5px 9px;display:flex;align-items:center;gap:5px}
${id} .luna-rule-tab[aria-selected=true]{background:var(--atelier-field);box-shadow:inset 0 2px var(--atelier-accent);font-weight:bold}
${id} .luna-editor{width:100%;display:block;padding:8px;margin:0;resize:vertical;min-height:140px;height:clamp(170px,36vh,380px);border:1px solid var(--atelier-edge);border-radius:0;background:var(--atelier-field);color:var(--atelier-ink);line-height:1.65;box-shadow:inset 1px 1px var(--atelier-shadow);overflow-y:scroll}
${id} :is(textarea,input,select):focus{outline:1px solid var(--atelier-accent);outline-offset:-2px}
${id} *{scrollbar-width:thin;scrollbar-color:var(--atelier-edge) var(--atelier-panel)}
${id} .luna-hint{color:var(--atelier-muted);font-size:12px;margin:6px 0}
${id} .luna-footer{flex-shrink:0;display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:6px;padding:6px 9px;border-top:1px solid var(--atelier-edge);background:var(--atelier-panel)}
${id} .luna-status{margin-right:auto;font-size:12px;color:var(--atelier-muted)}${id} .luna-status[data-dirty=true]{color:var(--atelier-danger)}
${id} :is(.luna-button,.luna-history button){display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:28px;min-width:64px;padding:4px 10px;background:var(--atelier-button);border:1px solid var(--atelier-edge);border-radius:2px;box-shadow:inset 1px 1px var(--atelier-highlight),inset -1px -1px var(--atelier-shadow)}
${id} .luna-button-primary{border-color:var(--atelier-accent);font-weight:bold}
${id} :is(.luna-button,.luna-history button):hover{background:var(--atelier-hover)}
${id} :is(.luna-button,.luna-history button):active{background:var(--atelier-selected);box-shadow:inset 1px 1px var(--atelier-shadow)}
${id} :is(button,a):focus-visible{outline:1px dotted var(--atelier-ink);outline-offset:-4px}${id} button:disabled{cursor:default;opacity:.5}
${id} .luna-data-group{border-top:1px solid var(--atelier-edge);padding:12px 0}${id} .luna-data-group h3{font-weight:bold;margin-bottom:4px}
${id} .luna-button-row{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}
${id} .luna-viewed-list{white-space:pre-wrap;overflow-wrap:anywhere;font:13px/1.65 Tahoma,SimSun,serif;padding:10px;margin:10px 0;max-height:35vh;overflow:auto;background:var(--atelier-field);border:1px solid var(--atelier-edge)}
${id} .luna-history .bili-blocker-history-header{display:flex;justify-content:flex-end;gap:7px;margin-bottom:8px}
${id} .luna-history .bili-blocker-history-header>div:first-child{margin-right:auto}${id} .luna-history .bili-blocker-history-actions{display:flex;gap:5px}
${id} .luna-history .bili-blocker-history-item{padding:10px 0;border-top:1px solid var(--atelier-edge);overflow-wrap:anywhere}
${id} .luna-history .bili-blocker-history-type-badge{display:inline-block;color:var(--atelier-accent);font-weight:bold;margin-bottom:3px}
${id} .luna-history .bili-blocker-history-meta{color:var(--atelier-muted);font-size:12px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px}
${id} .luna-history .bili-blocker-history-summary{margin:4px 0;font-weight:bold}${id} .luna-history .bili-blocker-history-detail{font-size:12px;color:var(--atelier-muted)}
${id} .luna-history .bili-blocker-history-footer{margin-top:6px;text-align:right}
${id} .atelier-appearance-options{display:flex;gap:7px;flex-wrap:wrap;margin:12px 0}${id} .atelier-appearance-options label{display:flex;gap:5px;align-items:center;padding:7px;border:1px solid var(--atelier-edge)}
${id} input[type=radio],${id} input[type=checkbox]{accent-color:var(--atelier-accent)}
${id}[data-maximized=true]{inset:0;width:auto;height:auto;border-radius:0}${id}[data-minimized=true]{inset:auto 12px 12px auto;width:min(300px,calc(100vw - 24px));height:auto;margin:0}${id}[data-minimized=true] .luna-layout{display:none}
#atelier-launcher{position:fixed;z-index:2147483500;width:44px;height:44px;isolation:isolate;color:var(--atelier-ink);font:12px/1.5 Tahoma,SimSun,sans-serif}
#atelier-launcher [hidden]{display:none!important}#atelier-launcher .atelier-launcher-button{width:44px;height:44px;padding:4px;border:1px solid var(--atelier-edge);border-radius:3px;background:var(--atelier-button);box-shadow:inset 1px 1px var(--atelier-highlight),1px 2px 4px #0004;cursor:pointer;touch-action:none}
#atelier-launcher img{width:24px;height:24px;image-rendering:pixelated;object-fit:contain}#atelier-launcher .atelier-launcher-button img{width:32px;height:32px}
#atelier-launcher button:focus-visible{outline:2px dotted var(--atelier-accent);outline-offset:-4px}
.atelier-quick-menu{position:absolute;bottom:0;right:50px;width:184px;padding:3px;background:var(--atelier-panel);border:2px solid var(--atelier-edge);box-shadow:2px 3px 6px #0005}
#atelier-launcher[data-edge=left] .atelier-quick-menu{right:auto;left:50px}#atelier-launcher .atelier-quick-menu h2{font:bold 12px Tahoma,SimSun,serif;color:#fff;background:var(--atelier-caption);margin:0 0 3px;padding:7px}
#atelier-launcher .atelier-quick-menu button{display:flex;align-items:center;gap:8px;width:100%;min-height:36px;padding:6px;border:1px solid transparent;background:transparent;color:inherit;text-align:left;cursor:pointer}
#atelier-launcher .atelier-quick-menu button:hover,#atelier-launcher .atelier-quick-menu button:focus{background:var(--atelier-selected);border-color:var(--atelier-edge)}
.atelier-dialog{z-index:2147483647;position:fixed;inset:0;margin:auto;width:min(510px,calc(100vw - 32px));max-height:calc(100vh - 40px);padding:0;border:2px solid var(--atelier-accent);border-radius:3px;background:var(--atelier-surface);color:var(--atelier-ink);box-shadow:2px 4px 12px #0006;font:13px/1.5 Tahoma,"Microsoft YaHei",sans-serif;box-sizing:border-box;overflow:auto}
.atelier-dialog::backdrop{background:#0005}.atelier-dialog h2{font:bold 12px Tahoma,SimSun,serif;background:var(--atelier-caption);color:white;padding:9px;margin:0}
.atelier-dialog-body{padding:14px}.atelier-dialog p{white-space:pre-wrap;margin:0 0 10px;overflow-wrap:anywhere}.atelier-dialog :is(input,textarea){width:100%;box-sizing:border-box;padding:8px;border:1px solid var(--atelier-edge);background:var(--atelier-field);color:var(--atelier-ink);font:13px/1.5 Tahoma,"Microsoft YaHei",sans-serif}
.atelier-dialog textarea{height:220px;resize:vertical}.atelier-dialog-actions{display:flex;justify-content:flex-end;gap:6px;padding:8px;border-top:1px solid var(--atelier-edge);background:var(--atelier-panel)}.atelier-dialog-choices{display:flex;flex-direction:column;gap:6px}.atelier-dialog-choices button{text-align:left;white-space:normal}
@media(max-width:640px){${id}{inset:6px;width:calc(100vw - 12px);height:calc(100vh - 12px)}${id} .luna-layout{grid-template-columns:minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}${id} .luna-sidebar-title{display:none}${id} .luna-nav{display:flex;gap:3px;padding:3px}${id} .luna-nav-button{width:auto;min-width:110px;flex-shrink:0;min-height:32px;margin:0}${id} .luna-nav-button img{width:20px;height:20px}${id} .luna-content{padding:9px}${id} .luna-status{width:100%}}
`;
    (document.head || document.documentElement).appendChild(style);
  }

  // src/ui/page-controls.ts
  var roots = /* @__PURE__ */ new WeakSet();
  function ensurePageControls(root = document) {
    ensureLunaTheme();
    if (roots.has(root)) return;
    roots.add(root);
    if (root instanceof ShadowRoot) {
      const style = document.createElement("style");
      style.textContent = sharedControlCss;
      root.append(style);
    }
    observePixelLabels(root instanceof Document ? root.documentElement : root, ".atelier-control");
  }
  function styleAtelierAction(button3) {
    button3.classList.add("atelier-control");
    const root = button3.getRootNode();
    ensurePageControls(root instanceof ShadowRoot ? root : document);
  }

  // src/modules/local-following/api.ts
  var LocalFollowReadError = class extends Error {
    constructor(message, status2 = 0) {
      super(message);
      this.status = status2;
    }
    get stopsBatch() {
      return this.status === 412 || this.status === 429;
    }
  };
  var paths = /* @__PURE__ */ new Set(["/x/web-interface/card", "/x/web-interface/nav", "/x/polymer/web-dynamic/v1/feed/space"]);
  function localFollowApiUrl(value) {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.hostname !== "api.bilibili.com" || url.port || url.username || url.password || !paths.has(url.pathname)) throw new Error("\u65E0\u6548\u7684\u672C\u5730\u5173\u6CE8\u53EA\u8BFB\u63A5\u53E3");
    return url.href;
  }
  var localFollowGmRequest = (value, signal) => new Promise((resolve, reject) => {
    const url = localFollowApiUrl(value);
    let done = false, request2;
    const finish = (error, data) => {
      if (done) return;
      done = true;
      signal.removeEventListener("abort", cancel);
      if (error) reject(error);
      else resolve(data);
    };
    const cancel = () => {
      if (done) return;
      finish(new DOMException("\u68C0\u67E5\u5DF2\u53D6\u6D88", "AbortError"));
      request2?.abort?.();
    };
    if (signal.aborted) {
      cancel();
      return;
    }
    signal.addEventListener("abort", cancel, { once: true });
    try {
      request2 = GM_xmlhttpRequest({
        method: "GET",
        url,
        anonymous: false,
        timeout: 2e4,
        headers: { Accept: "application/json" },
        onload: (response) => {
          try {
            if (response.finalUrl) localFollowApiUrl(response.finalUrl);
            if (response.status < 200 || response.status >= 300) throw new LocalFollowReadError(`\u8BFB\u53D6\u5931\u8D25\uFF1AHTTP ${response.status}`, response.status);
            const raw = JSON.parse(response.responseText);
            finish(void 0, raw);
          } catch (error) {
            finish(error);
          }
        },
        onerror: () => finish(new LocalFollowReadError("\u7F51\u7EDC\u8BFB\u53D6\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u91CD\u8BD5")),
        ontimeout: () => finish(new LocalFollowReadError("\u8BFB\u53D6\u8D85\u65F6\uFF0C\u8BF7\u624B\u52A8\u91CD\u8BD5")),
        onabort: cancel
      });
    } catch (error) {
      finish(error);
    }
  });
  function localFollowMd5(text2) {
    const bytes = new TextEncoder().encode(text2), length = Math.ceil((bytes.length + 9) / 64) * 64;
    const data = new Uint8Array(length);
    data.set(bytes);
    data[bytes.length] = 128;
    const view = new DataView(data.buffer);
    view.setUint32(length - 8, bytes.length * 8, true);
    view.setUint32(length - 4, Math.floor(bytes.length / 536870912), true);
    const shifts = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];
    let a0 = 1732584193, b0 = 4023233417, c0 = 2562383102, d0 = 271733878;
    for (let offset = 0; offset < length; offset += 64) {
      let a = a0, b = b0, c = c0, d = d0;
      for (let i = 0; i < 64; i++) {
        const round = i >>> 4;
        const f = round === 0 ? b & c | ~b & d : round === 1 ? d & b | ~d & c : round === 2 ? b ^ c ^ d : c ^ (b | ~d);
        const g = round === 0 ? i : round === 1 ? (5 * i + 1) % 16 : round === 2 ? (3 * i + 5) % 16 : 7 * i % 16;
        const n = a + f + Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296) + view.getInt32(offset + g * 4, true) | 0;
        const shift = shifts[round * 4 + i % 4], next = b + (n << shift | n >>> 32 - shift) | 0;
        a = d;
        d = c;
        c = b;
        b = next;
      }
      a0 = a0 + a | 0;
      b0 = b0 + b | 0;
      c0 = c0 + c | 0;
      d0 = d0 + d | 0;
    }
    return [a0, b0, c0, d0].flatMap((n) => [0, 8, 16, 24].map((shift) => (n >>> shift & 255).toString(16).padStart(2, "0"))).join("");
  }
  var mixin = [46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13];
  function localFollowWbiQuery(params, key2, now = Date.now()) {
    const values = { ...params, wts: String(Math.floor(now / 1e3)) };
    const query = Object.keys(values).sort().map((name) => `${encodeURIComponent(name)}=${encodeURIComponent(values[name].replace(/[!'()*]/g, ""))}`).join("&");
    return `${query}&w_rid=${localFollowMd5(query + key2)}`;
  }
  function successful(raw) {
    if (!raw || raw.code !== 0 || !raw.data || typeof raw.data !== "object") {
      const code = Number(raw?.code);
      throw new LocalFollowReadError(typeof raw?.message === "string" ? raw.message : "\u63A5\u53E3\u8FD4\u56DE\u65E0\u6548\u8D44\u6599", [412, 429].includes(Math.abs(code)) ? Math.abs(code) : 0);
    }
    return raw.data;
  }
  var LocalFollowApi = class {
    constructor(request2 = localFollowGmRequest) {
      this.request = request2;
      this.key = "";
      this.keyDay = "";
    }
    async profile(uid, signal) {
      if (!normalizeLocalUid(uid)) throw new Error("\u8BF7\u8F93\u5165\u6709\u6548\u7684 UID \u6216\u4E2A\u4EBA\u4E3B\u9875\u94FE\u63A5");
      const card = successful(await this.request(`https://api.bilibili.com/x/web-interface/card?mid=${uid}`, signal)).card;
      if (normalizeLocalUid(card?.mid) !== uid || typeof card?.name !== "string" || !card.name.trim()) throw new Error("\u672A\u53D6\u5F97\u8BE5\u8D26\u53F7\u7684\u6709\u6548\u8D44\u6599");
      return { uid, name: card.name.trim(), face: safeLocalFace(card.face) };
    }
    async dynamic(uid, signal) {
      if (!normalizeLocalUid(uid)) throw new Error("\u65E0\u6548\u8D26\u53F7");
      const day = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      if (!this.key || this.keyDay !== day) {
        const raw = await this.request("https://api.bilibili.com/x/web-interface/nav", signal);
        const images = raw?.data?.wbi_img;
        const pieces = [images?.img_url, images?.sub_url].map((value) => {
          try {
            return new URL(value).pathname.split("/").pop()?.split(".")[0] ?? "";
          } catch {
            return "";
          }
        }).join("");
        if (!/^[0-9a-f]{64}$/i.test(pieces)) throw new LocalFollowReadError("\u672A\u53D6\u5F97\u516C\u5F00\u7B7E\u540D\u4FE1\u606F", [412, 429].includes(Math.abs(Number(raw?.code))) ? Math.abs(Number(raw.code)) : 0);
        this.key = mixin.map((index) => pieces[index]).join("");
        this.keyDay = day;
      }
      if (signal.aborted) throw new DOMException("\u68C0\u67E5\u5DF2\u53D6\u6D88", "AbortError");
      const query = localFollowWbiQuery({ host_mid: uid, offset: "", timezone_offset: String((/* @__PURE__ */ new Date()).getTimezoneOffset()), platform: "web", web_location: "333.1387" }, this.key);
      const data = successful(await this.request(`https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space?${query}`, signal));
      if (!Array.isArray(data.items)) throw new LocalFollowReadError("\u52A8\u6001\u9875\u683C\u5F0F\u65E0\u6548\uFF0C\u4FDD\u7559\u5DF2\u6709\u8BB0\u5F55");
      return data;
    }
  };

  // src/modules/local-following/index.ts
  var localFollowUpdateTypes = { video: "\u6295\u7A3F", post: "\u6587\u5B57\uFF0F\u56FE\u6587", article: "\u4E13\u680F", repost: "\u8F6C\u53D1", live: "\u76F4\u64AD", audio: "\u97F3\u9891" };
  var kinds = {
    DYNAMIC_TYPE_AV: "video",
    DYNAMIC_TYPE_UGC_SEASON: "video",
    DYNAMIC_TYPE_WORD: "post",
    DYNAMIC_TYPE_DRAW: "post",
    DYNAMIC_TYPE_ARTICLE: "article",
    DYNAMIC_TYPE_FORWARD: "repost",
    DYNAMIC_TYPE_LIVE: "live",
    DYNAMIC_TYPE_LIVE_RCMD: "live",
    DYNAMIC_TYPE_LIVE_H5: "live",
    DYNAMIC_TYPE_MUSIC: "audio"
  };
  function observeLocalFollowDynamics(raw, onlyUid) {
    const data = raw;
    if (!data || !Array.isArray(data.items)) return;
    const followed = new Set(localFollowSnapshot().accounts.map((account) => account.uid));
    const updates = /* @__PURE__ */ new Map();
    for (const item of data.items) {
      const kind = kinds[item?.type], author = item?.modules?.module_author;
      const uid = normalizeLocalUid(author?.mid), seconds = Number(author?.pub_ts);
      if (!kind || !uid || onlyUid && uid !== onlyUid || !followed.has(uid) || !Number.isSafeInteger(seconds) || seconds <= 0 || !Number.isSafeInteger(seconds * 1e3)) continue;
      const record = updates.get(uid) ?? {};
      record[kind] = Math.max(record[kind] ?? 0, seconds * 1e3);
      updates.set(uid, record);
    }
    for (const [uid, record] of updates) writeLocalFollowCache(uid, { updates: record });
  }
  function latestLocalFollowUpdate(cache, types) {
    const times = types.map((kind) => cache.updates?.[kind]).filter((value) => Number.isSafeInteger(value) && value > 0);
    return times.length ? Math.max(...times) : void 0;
  }
  var names = new Intl.Collator("zh-CN-u-co-pinyin", { sensitivity: "base", numeric: true });
  function sortLocalFollows(accounts, sort, ascending, types, query = "") {
    const caches = new Map(accounts.map((account) => [account.uid, readLocalFollowCache(account.uid)]));
    const term = query.trim().toLocaleLowerCase();
    const name = (account) => caches.get(account.uid)?.name || account.name;
    const value = (account) => sort === "added" ? account.addedAt : sort === "viewed" ? caches.get(account.uid)?.viewedAt : latestLocalFollowUpdate(caches.get(account.uid), types);
    return accounts.filter((account) => !term || account.uid.includes(term) || name(account).toLocaleLowerCase().includes(term)).sort((a, b) => {
      let result;
      if (sort === "name") result = names.compare(name(a), name(b)) * (ascending ? 1 : -1);
      else {
        const left = value(a), right = value(b);
        result = left == null ? right == null ? 0 : 1 : right == null ? -1 : (left - right) * (ascending ? 1 : -1);
      }
      return result || a.uid.length - b.uid.length || a.uid.localeCompare(b.uid);
    });
  }
  var LocalFollowChecker = class {
    constructor(api = new LocalFollowApi(), changed = () => {
    }) {
      this.api = api;
      this.changed = changed;
      this.state = { running: false, total: 0, completed: 0, failed: 0, message: "\u4EC5\u663E\u793A\u672C\u673A\u5DF2\u83B7\u53D6\u7684\u53D1\u5E03\u8BB0\u5F55" };
    }
    cancel() {
      this.abort?.abort();
    }
    async check(uids) {
      if (this.state.running) return "skipped";
      const abort = this.abort = new AbortController();
      const queue = [...new Set(uids)].filter((uid) => normalizeLocalUid(uid));
      this.state = { running: true, total: queue.length, completed: 0, failed: 0, message: "\u6B63\u5728\u8BFB\u53D6\u539F\u59CB\u52A8\u6001\u7B2C\u4E00\u9875" };
      this.changed(this.state);
      try {
        for (const uid of queue) {
          if (abort.signal.aborted) break;
          if (!localFollowSnapshot().accounts.some((account) => account.uid === uid)) continue;
          this.state.currentUid = uid;
          this.changed(this.state);
          try {
            const raw = await this.api.dynamic(uid, abort.signal);
            if (abort.signal.aborted) break;
            observeLocalFollowDynamics(raw, uid);
            writeLocalFollowCache(uid, { checkedAt: Date.now(), checkError: "" });
            this.state.completed++;
          } catch (error) {
            if (abort.signal.aborted) break;
            this.state.failed++;
            const message = error instanceof Error ? error.message : "\u8BFB\u53D6\u5931\u8D25";
            writeLocalFollowCache(uid, { checkError: message });
            if (error instanceof LocalFollowReadError && error.stopsBatch) {
              this.state.message = `${message}\uFF1B\u5DF2\u505C\u6B62\u6574\u6279\uFF0C\u8BF7\u7A0D\u540E\u624B\u52A8\u68C0\u67E5`;
              break;
            }
          }
          this.changed(this.state);
        }
        if (abort.signal.aborted) this.state.message = "\u68C0\u67E5\u5DF2\u53D6\u6D88\uFF0C\u672A\u53D1\u9001\u5269\u4F59\u8BF7\u6C42";
        else if (!this.state.message.includes("\u505C\u6B62\u6574\u6279")) this.state.message = `\u672C\u8F6E\u6210\u529F ${this.state.completed}\uFF0C\u5931\u8D25 ${this.state.failed}\uFF1B\u65F6\u95F4\u4EC5\u4EE3\u8868\u5DF2\u83B7\u53D6\u8BB0\u5F55`;
      } finally {
        this.state.running = false;
        this.state.currentUid = void 0;
        this.abort = void 0;
        this.changed(this.state);
      }
      return abort.signal.aborted ? "cancelled" : this.state.failed ? this.state.completed ? "partial" : "error" : this.state.completed ? "success" : "skipped";
    }
  };

  // src/ui/navigation.ts
  var atelierAreas = [
    { id: "following", label: "\u672C\u5730\u5173\u6CE8" },
    { id: "viewed", label: "\u5DF2\u770B\u7BA1\u7406" },
    { id: "video", label: "\u5C4F\u853D\u7BA1\u7406" },
    { id: "data", label: "\u6570\u636E\u4E0E\u540C\u6B65" },
    { id: "settings", label: "\u8BBE\u7F6E" }
  ];
  function areaFor(section) {
    if (["user", "video", "comment", "dynamic", "live", "history"].includes(section)) return "video";
    if (section === "sync") return "data";
    if (section === "sounds") return "settings";
    return section;
  }
  var openPanel;
  function registerAtelierNavigation(open) {
    openPanel = open;
  }
  function openAtelier(section = "following") {
    openPanel?.(section);
  }

  // src/modules/local-following/panel.ts
  var panelId = "atelier-local-following-panel";
  function localFollowElement(tag, className = "", text2 = "") {
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = text2;
    return node;
  }
  function button(label, action, className = "lf-button") {
    const node = localFollowElement("button", className, label);
    node.type = "button";
    node.addEventListener("click", () => {
      try {
        sound("click");
        action();
      } catch (error) {
        reportLocalFollowError(error);
      }
    });
    return node;
  }
  function reportLocalFollowError(error) {
    const status2 = document.querySelector(`#${panelId} .lf-footer`);
    if (status2) status2.textContent = error instanceof Error ? error.message : "\u672C\u5730\u5173\u6CE8\u64CD\u4F5C\u5931\u8D25";
    sound("error");
  }
  function checkbox(label, checked, action) {
    const wrapper = localFollowElement("label", "lf-check");
    const input = localFollowElement("input");
    input.type = "checkbox";
    input.checked = checked;
    input.addEventListener("change", () => {
      try {
        action(input.checked);
        sound("select");
      } catch (error) {
        input.checked = !input.checked;
        reportLocalFollowError(error);
      }
    });
    wrapper.append(input, document.createTextNode(label));
    return { wrapper, input };
  }
  function ensureLocalFollowTheme() {
    ensureLunaTheme();
    if (document.getElementById("atelier-local-following-style")) return;
    const style = document.createElement("style");
    style.id = "atelier-local-following-style";
    const id = "#" + panelId;
    style.textContent = `
#bili-atelier-blocker-panel .luna-following-content{display:flex;padding:8px;overflow:hidden}
${id}{display:flex;flex-direction:column;width:100%;height:100%;min-height:0;min-width:0;color:var(--atelier-ink);font:13px/1.5 Tahoma,"Microsoft YaHei",sans-serif}
${id} *{box-sizing:border-box}${id} [hidden]{display:none!important}
${id} .lf-layout{display:flex;flex-direction:column;gap:6px;flex:1;min-height:0}
${id} .lf-sidebar{flex-shrink:0;max-height:160px;overflow:auto}
${id} .lf-nav{display:flex;gap:3px;overflow:auto;padding-bottom:3px}
${id} .lf-group-button{flex-shrink:0;white-space:nowrap}
${id} .lf-group-button[aria-current=page]{background:var(--atelier-selected);border-color:var(--atelier-accent);font-weight:bold}
${id} .lf-main{display:flex;flex-direction:column;min-width:0;min-height:0;flex:1;overflow:auto}
${id} .lf-main>:not(.lf-directory){flex-shrink:0}
${id} .lf-row{display:flex;gap:5px;align-items:center;flex-wrap:wrap;margin-bottom:6px}
${id} :is(input:not([type=checkbox]),select){font:inherit;min-height:28px;padding:4px 6px;border:1px solid var(--atelier-edge);background:var(--atelier-field);color:var(--atelier-ink);min-width:0}
${id} .lf-row input[type=search],${id} .lf-add input{flex:1;min-width:120px}
${id} .lf-button{font:12px Tahoma,SimSun,sans-serif;color:var(--atelier-ink);border:1px solid var(--atelier-edge);border-radius:2px;background:var(--atelier-button);box-shadow:inset 1px 1px var(--atelier-highlight),inset -1px -1px var(--atelier-shadow);padding:5px 8px;min-height:28px;cursor:pointer}
${id} .lf-button:hover{background:var(--atelier-hover)}${id} .lf-button:active{background:var(--atelier-selected);box-shadow:inset 1px 1px var(--atelier-shadow)}${id} .lf-button:disabled{opacity:.5;cursor:default}
${id} .lf-groups-editor{margin:3px 0;border-top:1px solid var(--atelier-edge);padding-top:3px}
${id} .lf-group-editor{display:flex;gap:5px;flex-wrap:wrap;padding:5px 0}${id} .lf-group-editor input{flex:1;min-width:100px}
${id} .lf-directory{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));align-content:start;gap:5px;background:var(--atelier-field);border:1px solid var(--atelier-edge);padding:5px;overflow:auto;min-height:100px;flex:1 0 100px}
${id} .lf-tile{position:relative;border:1px solid var(--atelier-edge);padding:6px;min-width:0;background:var(--atelier-surface)}
${id} .lf-tile[data-selected=true]{background:var(--atelier-selected);border-color:var(--atelier-accent)}
${id} .lf-account{display:flex;gap:7px;color:var(--atelier-ink);text-decoration:none;min-width:0;align-items:center;min-height:40px}
${id} .lf-face{height:32px;width:32px;object-fit:cover;flex:none;border:1px solid var(--atelier-edge);image-rendering:auto}
${id} .lf-name{min-width:0;overflow-wrap:anywhere;padding-right:18px;font-weight:bold}
${id} .lf-select{position:absolute;right:4px;top:4px}
${id} .lf-meta{display:block;color:var(--atelier-muted);font-size:12px;overflow-wrap:anywhere;margin-top:3px}
${id} .lf-check{display:inline-flex;gap:5px;align-items:center;min-height:26px}
${id} .lf-options{display:flex;gap:5px 12px;flex-wrap:wrap;padding:4px 0}
${id} .lf-footer{padding:6px;border-top:1px solid var(--atelier-edge);color:var(--atelier-muted);flex-shrink:0;overflow-wrap:anywhere}
${id} .lf-empty{grid-column:1/-1;padding:16px 8px;color:var(--atelier-muted)}
${id} details{margin-bottom:5px}${id} summary{cursor:pointer;padding:3px}
${id} .lf-membership{max-height:120px;overflow:auto;border:1px solid var(--atelier-edge);padding:4px}
@media(max-width:420px){${id} .lf-directory{grid-template-columns:minmax(0,1fr)}}
`;
    (document.head || document.documentElement).appendChild(style);
  }
  function openLocalFollowingPanel() {
    openAtelier("following");
  }
  function mountLocalFollowingPanel() {
    ensureLocalFollowTheme();
    const events = new AbortController(), reads = new AbortController();
    const panel = localFollowElement("section");
    panel.id = panelId;
    panel.setAttribute("data-bili-blocker-ui", "");
    panel.setAttribute("aria-label", "\u672C\u5730\u5173\u6CE8");
    const prefs = readLocalFollowPreferences();
    let groupId = "all", sort = ["name", "added", "viewed", "updated"].includes(prefs?.sort) ? prefs.sort : "name";
    let ascending = typeof prefs?.ascending === "boolean" ? prefs.ascending : sort === "name";
    const storedTypes = Array.isArray(prefs?.types) ? prefs.types.filter((kind) => Object.prototype.hasOwnProperty.call(localFollowUpdateTypes, kind)) : [];
    let types = storedTypes.length ? [...new Set(storedTypes)] : ["video"];
    const selected = /* @__PURE__ */ new Set();
    const footer = localFollowElement("div", "lf-footer", "\u672C\u5730\u76EE\u5F55\u4E0E\u5E73\u53F0\u5173\u6CE8\u5206\u522B\u7BA1\u7406");
    footer.setAttribute("role", "status");
    const close = () => {
      checker.cancel();
      reads.abort();
      events.abort();
      panel.remove();
    };
    const layout = localFollowElement("div", "lf-layout"), sidebar = localFollowElement("aside", "lf-sidebar"), nav = localFollowElement("nav", "lf-nav");
    nav.setAttribute("aria-label", "\u672C\u5730\u5206\u7EC4");
    const groupEditor = localFollowElement("details", "lf-groups-editor");
    groupEditor.append(localFollowElement("summary", "", "\u7F16\u8F91\u5206\u7EC4"));
    const groupRows = localFollowElement("div");
    groupEditor.append(groupRows);
    sidebar.append(nav, groupEditor);
    const main = localFollowElement("div", "lf-main"), addRow = localFollowElement("form", "lf-row lf-add");
    const input = localFollowElement("input");
    input.placeholder = "\u7C98\u8D34 UID \u6216\u4E2A\u4EBA\u4E3B\u9875\u94FE\u63A5";
    input.setAttribute("aria-label", "\u6DFB\u52A0\u8D26\u53F7 UID \u6216\u94FE\u63A5");
    const add = button("\u6DFB\u52A0\u672C\u5730\u5173\u6CE8", () => {
      void addProfile();
    });
    async function addProfile() {
      const feedback = soundTask(void 0, panel);
      const uid = parseLocalFollowInput(input.value);
      if (!uid) {
        footer.textContent = "\u8BF7\u8F93\u5165\u6709\u6548\u7684 UID \u6216 space.bilibili.com \u4E3B\u9875\u94FE\u63A5";
        feedback.finish("warning");
        return;
      }
      add.disabled = true;
      footer.textContent = "\u6B63\u5728\u9A8C\u8BC1\u8D26\u53F7\u8D44\u6599\u2026";
      try {
        const profile = await new LocalFollowApi().profile(uid, reads.signal);
        if (reads.signal.aborted) return;
        const was = JSON.stringify(localFollowSnapshot());
        addLocalFollow(profile);
        writeLocalFollowCache(uid, profile);
        input.value = "";
        footer.textContent = `\u5DF2\u4FDD\u5B58 ${profile.name}`;
        if (was !== JSON.stringify(localFollowSnapshot())) feedback.finish("success");
      } catch (error) {
        if (!reads.signal.aborted) {
          footer.textContent = error instanceof Error ? error.message : "\u6DFB\u52A0\u5931\u8D25";
          feedback.finish("error");
        }
      } finally {
        add.disabled = false;
      }
    }
    addRow.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!add.disabled) void addProfile();
    });
    addRow.append(input, add);
    const toolbar = localFollowElement("div", "lf-row"), search = localFollowElement("input");
    search.type = "search";
    search.placeholder = "\u641C\u7D22\u6635\u79F0\u6216 UID";
    search.setAttribute("aria-label", "\u641C\u7D22\u672C\u5730\u5173\u6CE8");
    const sortSelect = localFollowElement("select");
    sortSelect.setAttribute("aria-label", "\u6392\u5E8F\u65B9\u5F0F");
    for (const [value, text2] of [["name", "\u6309\u540D\u5B57\uFF0F\u62FC\u97F3"], ["added", "\u6309\u6DFB\u52A0\u65F6\u95F4"], ["viewed", "\u6309\u6700\u8FD1\u67E5\u770B"], ["updated", "\u6309\u5DF2\u83B7\u53D6\u66F4\u65B0\u65F6\u95F4"]]) {
      const option = localFollowElement("option", "", text2);
      option.value = value;
      sortSelect.append(option);
    }
    sortSelect.value = sort;
    const direction = button(ascending ? "\u5347\u5E8F" : "\u964D\u5E8F", () => {
      ascending = !ascending;
      direction.textContent = ascending ? "\u5347\u5E8F" : "\u964D\u5E8F";
      savePrefs();
      render();
    });
    sortSelect.addEventListener("change", () => {
      sort = sortSelect.value;
      ascending = sort === "name";
      direction.textContent = ascending ? "\u5347\u5E8F" : "\u964D\u5E8F";
      savePrefs();
      render();
      sound("select");
    });
    search.addEventListener("input", render);
    toolbar.append(search, sortSelect, direction);
    const typeDetails = localFollowElement("details"), typeList = localFollowElement("div", "lf-options");
    typeDetails.append(localFollowElement("summary", "", "\u54EA\u4E9B\u5185\u5BB9\u7B97\u66F4\u65B0"), typeList);
    for (const [kind, label] of Object.entries(localFollowUpdateTypes)) {
      const control = checkbox(label, types.includes(kind), (checked) => {
        if (!checked && types.length === 1) {
          control.input.checked = true;
          footer.textContent = "\u81F3\u5C11\u4FDD\u7559\u4E00\u79CD\u66F4\u65B0\u7C7B\u578B";
          sound("warning");
          return;
        }
        types = checked ? [...types, kind] : types.filter((value) => value !== kind);
        savePrefs();
        renderDirectory();
      });
      typeList.append(control.wrapper);
    }
    async function check(uids) {
      const feedback = soundTask("start", panel);
      try {
        const result = await checker.check(uids);
        if (result === "success") feedback.finish("complete");
        else if (result === "partial") feedback.finish("warning");
        else if (result === "error") feedback.finish("error");
        else feedback.cancel();
      } catch (error) {
        footer.textContent = error instanceof Error ? error.message : "\u68C0\u67E5\u5931\u8D25";
        feedback.finish("error");
      }
    }
    const actions = localFollowElement("div", "lf-row"), checkChosen = button("\u68C0\u67E5\u9009\u4E2D", () => void check([...selected]));
    const checkGroup = button("\u68C0\u67E5\u6574\u7EC4", () => void check(inGroup().map((account) => account.uid)));
    const cancel = button("\u53D6\u6D88\u68C0\u67E5", () => {
      checker.cancel();
      sound("cancel");
    });
    const all = button("\u9009\u62E9\u5F53\u524D\u7ED3\u679C", () => {
      for (const account of visible()) selected.add(account.uid);
      renderDirectory();
    });
    const none = button("\u53D6\u6D88\u9009\u62E9", () => {
      selected.clear();
      renderDirectory();
    });
    const remove = button("\u79FB\u9664\u9009\u4E2D\u672C\u5730\u5173\u6CE8", () => {
      mutate(() => removeLocalFollows([...selected]), "delete");
      selected.clear();
      render();
    });
    actions.append(all, none, checkChosen, checkGroup, cancel, remove);
    const membership = localFollowElement("details");
    membership.append(localFollowElement("summary", "", "\u8BBE\u7F6E\u9009\u4E2D\u8D26\u53F7\u7684\u5206\u7EC4\uFF08\u53EF\u591A\u9009\uFF09"));
    const membershipRows = localFollowElement("div", "lf-options lf-membership");
    membership.append(membershipRows);
    const directory = localFollowElement("div", "lf-directory");
    directory.setAttribute("aria-label", "\u672C\u5730\u5173\u6CE8\u76EE\u5F55");
    const checker = new LocalFollowChecker(void 0, (state) => {
      checkChosen.disabled = state.running || !selected.size;
      checkGroup.disabled = state.running || !inGroup().length;
      cancel.disabled = !state.running;
      footer.textContent = state.running ? `\u6B63\u5728\u68C0\u67E5 ${state.completed + state.failed + 1}/${state.total}\uFF1B\u6210\u529F ${state.completed}\uFF0C\u5931\u8D25 ${state.failed}` : state.message;
    });
    function savePrefs() {
      writeLocalFollowPreferences({ sort, ascending, types });
    }
    function mutate(action, cue) {
      const before = JSON.stringify(localFollowSnapshot());
      action();
      if (before !== JSON.stringify(localFollowSnapshot())) sound(cue);
    }
    function inGroup() {
      return localFollowSnapshot().accounts.filter((account) => groupId === "all" || (groupId === "ungrouped" ? account.groupIds.length === 0 : account.groupIds.includes(groupId)));
    }
    function visible() {
      return sortLocalFollows(inGroup(), sort, ascending, types, search.value);
    }
    function date(value) {
      return value ? new Date(value).toLocaleString() : "\u65F6\u95F4\u672A\u77E5";
    }
    function groupLabel(group) {
      const peers = localFollowSnapshot().groups.filter((other) => other.name === group.name && other.id !== group.id);
      if (!peers.length) return group.name;
      let length = 8;
      while (peers.some((other) => other.id.slice(0, length) === group.id.slice(0, length))) length++;
      return `${group.name} \xB7 ${group.id.slice(0, length)}`;
    }
    function renderDirectory() {
      const focusId = panel.contains(document.activeElement) ? document.activeElement?.id : "";
      const snapshot = localFollowSnapshot();
      for (const uid of selected) if (!snapshot.accounts.some((account) => account.uid === uid)) selected.delete(uid);
      directory.replaceChildren();
      const accounts = visible();
      for (const account of accounts) {
        const cache = readLocalFollowCache(account.uid), name = cache.name || account.name || "\u672A\u547D\u540D\u8D26\u53F7";
        const tile = localFollowElement("div", "lf-tile");
        tile.dataset.selected = String(selected.has(account.uid));
        const link = localFollowElement("a", "lf-account");
        link.href = `https://space.bilibili.com/${account.uid}`;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.id = "lf-account-" + account.uid;
        link.addEventListener("click", () => {
          recordLocalFollowVisit(account.uid);
          sound("folder");
        });
        const face = localFollowElement("img", "lf-face");
        face.alt = "";
        face.loading = "lazy";
        face.referrerPolicy = "no-referrer";
        face.src = cache.face || account.face || luna.app;
        face.addEventListener("error", () => {
          face.src = luna.app;
        }, { once: true });
        link.append(face, localFollowElement("span", "lf-name", name));
        const select = checkbox(`\u9009\u62E9 ${name}`, selected.has(account.uid), (checked) => {
          if (checked) selected.add(account.uid);
          else selected.delete(account.uid);
          renderDirectory();
        });
        select.input.className = "lf-select";
        select.input.setAttribute("aria-label", `\u9009\u62E9 ${name}`);
        select.input.id = "lf-select-" + account.uid;
        tile.append(link, select.input);
        const time = sort === "viewed" ? `\u6700\u8FD1\u67E5\u770B\uFF1A${date(cache.viewedAt)}` : sort === "added" ? `\u6DFB\u52A0\u4E8E\uFF1A${date(account.addedAt)}` : `\u5DF2\u83B7\u53D6\u66F4\u65B0\uFF1A${date(latestLocalFollowUpdate(cache, types))}`;
        tile.append(localFollowElement("span", "lf-meta", time));
        if (account.groupIds.length) tile.append(localFollowElement("span", "lf-meta", account.groupIds.map((id) => snapshot.groups.find((group) => group.id === id)).filter(Boolean).map(groupLabel).join("\u3001")));
        if (cache.checkError) tile.append(localFollowElement("span", "lf-meta", `\u4E0A\u6B21\u68C0\u67E5\u5931\u8D25\uFF1A${cache.checkError}`));
        else if (cache.checkedAt) tile.append(localFollowElement("span", "lf-meta", `\u68C0\u67E5\u4E8E ${date(cache.checkedAt)}`));
        directory.append(tile);
      }
      if (!accounts.length) directory.append(localFollowElement("p", "lf-empty", "\u6CA1\u6709\u5339\u914D\u7684\u672C\u5730\u5173\u6CE8\u3002\u53EF\u4ECE\u4E3B\u9875\u6DFB\u52A0\uFF0C\u6216\u5728\u4E0A\u65B9\u7C98\u8D34\u8D26\u53F7\u94FE\u63A5\u3002"));
      membershipRows.replaceChildren();
      const chosen = snapshot.accounts.filter((account) => selected.has(account.uid));
      for (const group of snapshot.groups) {
        const count = chosen.filter((account) => account.groupIds.includes(group.id)).length;
        const control = checkbox(groupLabel(group), !!chosen.length && count === chosen.length, (value) => setLocalFollowMembership([...selected], group.id, value));
        control.input.id = "lf-member-" + group.id;
        control.input.indeterminate = count > 0 && count < chosen.length;
        control.input.disabled = !chosen.length;
        membershipRows.append(control.wrapper);
      }
      if (!snapshot.groups.length) membershipRows.append(localFollowElement("span", "", "\u5148\u5728\u5DE6\u4FA7\u65B0\u5EFA\u5206\u7EC4"));
      remove.disabled = none.disabled = !selected.size;
      checkChosen.disabled = checker.state.running || !selected.size;
      checkGroup.disabled = checker.state.running || !inGroup().length;
      cancel.disabled = !checker.state.running;
      if (focusId) document.getElementById(focusId)?.focus();
    }
    function render() {
      const focusId = panel.contains(document.activeElement) ? document.activeElement?.id : "";
      const snapshot = localFollowSnapshot();
      if (groupId !== "all" && groupId !== "ungrouped" && !snapshot.groups.some((group) => group.id === groupId)) groupId = "ungrouped";
      nav.replaceChildren();
      for (const [id, label] of [["all", "\u5168\u90E8\u672C\u5730\u5173\u6CE8"], ["ungrouped", "\u672A\u5206\u7EC4"], ...snapshot.groups.map((group) => [group.id, groupLabel(group)])]) {
        const node = button(label, () => {
          if (groupId !== id) sound("folder");
          groupId = id;
          render();
        }, "lf-button lf-group-button");
        node.setAttribute("aria-current", id === groupId ? "page" : "false");
        nav.append(node);
        node.id = "lf-group-" + id;
      }
      if (!groupRows.contains(document.activeElement) || document.activeElement?.tagName !== "INPUT") {
        groupRows.replaceChildren();
        const newRow = localFollowElement("form", "lf-row");
        const newName = localFollowElement("input");
        newName.placeholder = "\u65B0\u5206\u7EC4\u540D\u79F0";
        newName.setAttribute("aria-label", "\u65B0\u5206\u7EC4\u540D\u79F0");
        const create = () => {
          if (newName.value.trim()) mutate(() => createLocalFollowGroup(newName.value), "save");
        };
        newRow.addEventListener("submit", (event) => {
          event.preventDefault();
          create();
        });
        newRow.append(newName, button("\u65B0\u5EFA", create));
        groupRows.append(newRow);
        for (const [index, group] of snapshot.groups.entries()) {
          const row = localFollowElement("div", "lf-group-editor"), name = localFollowElement("input");
          name.value = group.name;
          name.setAttribute("aria-label", `\u91CD\u547D\u540D ${groupLabel(group)}`);
          const actions2 = localFollowElement("div", "lf-row");
          const rename = button("\u6539\u540D", () => {
            if (name.value.trim()) {
              name.blur();
              mutate(() => renameLocalFollowGroup(group.id, name.value), "save");
            }
          });
          const up = button("\u4E0A\u79FB", () => moveLocalFollowGroup(group.id, -1)), down = button("\u4E0B\u79FB", () => moveLocalFollowGroup(group.id, 1));
          up.disabled = index === 0;
          down.disabled = index === snapshot.groups.length - 1;
          actions2.append(rename, up, down, button("\u5220\u9664\u7EC4", () => {
            mutate(() => deleteLocalFollowGroup(group.id), "delete");
            footer.textContent = "\u5206\u7EC4\u5DF2\u5220\u9664\uFF0C\u8D26\u53F7\u4FDD\u7559";
          }));
          row.append(name, actions2);
          groupRows.append(row);
        }
      }
      renderDirectory();
      if (focusId) document.getElementById(focusId)?.focus();
    }
    main.append(addRow, toolbar, typeDetails, actions, membership, directory);
    layout.append(sidebar, main);
    panel.append(layout, footer);
    window.addEventListener(localFollowChangedEvent, render, { signal: events.signal });
    for (const summary of panel.querySelectorAll("summary")) summary.addEventListener("click", () => sound("menu"));
    window.addEventListener("pagehide", () => close(), { signal: events.signal, once: true });
    render();
    return { host: panel, dispose: close };
  }

  // src/modules/local-following/runtime.ts
  var actionClass = "atelier-local-follow-action";
  var cleanName = (value) => typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
  function localProfileFromCard(container) {
    const root = container.shadowRoot || container;
    const data = container.__data?.card ?? root.querySelector(".user-card-m-exp.card-loaded")?.__vue__?.userData;
    const links = [...root.querySelectorAll('a[href*="space.bilibili.com/"]')];
    const link = links.find((link2) => parseLocalFollowInput(link2.href));
    const uid = normalizeLocalUid(data?.mid) || parseLocalFollowInput(link?.href ?? "") || normalizeLocalUid(container.getAttribute("data-user-id") || container.getAttribute("data-usercard-mid"));
    if (!uid) return null;
    const name = cleanName(data?.name) || cleanName(root.querySelector(".name,.nickname,.username,.user-name")?.textContent) || cleanName(link?.textContent);
    const face = safeLocalFace(data?.face || root.querySelector(".avatar img,.face img,img")?.src);
    return { uid, name, face };
  }
  function localProfileFromSpace() {
    if (location.hostname !== "space.bilibili.com") return null;
    const uid = normalizeLocalUid(location.pathname.match(/^\/(\d+)(?:\/|$)/)?.[1]);
    if (!uid) return null;
    const target = document.querySelector("#h-name,.h-name,.n-name,.space-header .name,.h-basic .name,.upinfo-detail__top .nickname,.upinfo-detail__top .name");
    if (!target || target.closest("[data-bili-blocker-ui]")) return null;
    const name = cleanName(target.textContent);
    const face = safeLocalFace(document.querySelector("#h-avatar,.h-avatar img,.h-avatar,.space-header .avatar img,.upinfo-avatar img,.upinfo-avatar")?.src);
    return { profile: { uid, name, face }, target };
  }
  function observePageDynamics(channel) {
    const observed = (value) => {
      try {
        const url = new URL(String(value), location.href);
        return url.hostname === "api.bilibili.com" && /^\/x\/polymer\/web-dynamic\/v1\/feed\/(?:space|all)$/.test(url.pathname);
      } catch {
        return false;
      }
    };
    const emit = (body) => {
      if (body?.code !== 0 || !Array.isArray(body?.data?.items)) return;
      const items = body.data.items.map((item) => ({ type: item?.type, modules: { module_author: { mid: item?.modules?.module_author?.mid, pub_ts: item?.modules?.module_author?.pub_ts } } }));
      window.postMessage({ channel, items }, location.origin);
    };
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
      const response = originalFetch.apply(this, args);
      if (observed(args[0] instanceof Request ? args[0].url : args[0])) void response.then((value) => {
        if (value.ok) void value.clone().json().then(emit).catch(() => {
        });
      }).catch(() => {
      });
      return response;
    };
    const urls = /* @__PURE__ */ new WeakMap(), open = XMLHttpRequest.prototype.open, send = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function(...args) {
      urls.set(this, String(args[1]));
      return open.apply(this, args);
    };
    XMLHttpRequest.prototype.send = function(...args) {
      if (observed(urls.get(this))) this.addEventListener("load", () => {
        if (this.status < 200 || this.status >= 300) return;
        try {
          emit(this.responseType === "json" ? this.response : JSON.parse(this.responseText));
        } catch {
        }
      }, { once: true });
      return send.apply(this, args);
    };
  }
  var started4 = false;
  function startLocalFollowing() {
    if (started4) return;
    started4 = true;
    startLocalFollowingStore();
    const channel = "atelier-local-dynamics-" + crypto.randomUUID();
    window.addEventListener("message", (event) => {
      if (event.source !== window || event.origin !== location.origin || event.data?.channel !== channel) return;
      observeLocalFollowDynamics({ items: event.data.items });
    });
    try {
      injectPageScript(`(${observePageDynamics.toString()})(${JSON.stringify(channel)});`);
    } catch {
    }
    if (typeof GM_registerMenuCommand === "function") GM_registerMenuCommand("Bili Atelier \u672C\u5730\u5173\u6CE8", openLocalFollowingPanel);
    let queued = false, lastVisited = "";
    const roots2 = /* @__PURE__ */ new WeakSet();
    const observer = new MutationObserver((records2) => {
      if (records2.every((record) => record.target instanceof Element && record.target.closest("[data-atelier-local-ui]"))) return;
      schedule2();
    });
    function schedule2() {
      if (!queued) {
        queued = true;
        window.setTimeout(() => {
          queued = false;
          scan();
        }, 100);
      }
    }
    function attach(target, getProfile, root) {
      const profile = getProfile();
      if (!profile) return;
      let node = root.querySelector(`.${actionClass}:not(.atelier-local-follow-launcher)`);
      if (!node) {
        node = document.createElement("button");
        node.type = "button";
        node.className = actionClass;
        node.setAttribute("data-atelier-local-ui", "");
        node.style.cssText = "display:inline-flex;align-items:center;margin:3px 6px";
        node.addEventListener("click", async (event) => {
          const feedback = soundTask(void 0, () => !!node?.isConnected);
          event.preventDefault();
          event.stopPropagation();
          const current = getProfile();
          if (!current) return;
          if (localFollowSnapshot().accounts.some((account) => account.uid === current.uid)) {
            removeLocalFollow(current.uid);
            scan();
            feedback.finish("delete");
            return;
          }
          node.disabled = true;
          try {
            const profile2 = current.name ? current : await new LocalFollowApi().profile(current.uid, new AbortController().signal);
            const before = JSON.stringify(localFollowSnapshot());
            addLocalFollow(profile2);
            writeLocalFollowCache(profile2.uid, profile2);
            if (before !== JSON.stringify(localFollowSnapshot())) feedback.finish("success");
          } catch (error) {
            node.title = error instanceof Error ? error.message : "\u6DFB\u52A0\u5931\u8D25";
            node.textContent = "\u91CD\u8BD5\u6DFB\u52A0\u672C\u5730\u5173\u6CE8";
            feedback.finish("error");
          } finally {
            node.disabled = false;
            schedule2();
          }
        });
        if (target.matches("#action,.user") || target === root) target.appendChild(node);
        else target.insertAdjacentElement("afterend", node);
        styleAtelierAction(node);
      }
      const followed = localFollowSnapshot().accounts.some((account) => account.uid === profile.uid);
      const label = followed ? "\u79FB\u9664\u672C\u5730\u5173\u6CE8" : "\u6DFB\u52A0\u672C\u5730\u5173\u6CE8";
      if (node.textContent !== label) node.textContent = label;
      node.setAttribute("aria-pressed", String(followed));
      if (followed) {
        const cache = readLocalFollowCache(profile.uid);
        if (profile.name && profile.name !== cache.name || profile.face && profile.face !== cache.face) writeLocalFollowCache(profile.uid, { name: profile.name || cache.name, face: profile.face || cache.face });
      }
    }
    function scan() {
      if (!document.body) return;
      ensureLocalFollowTheme();
      const space = localProfileFromSpace();
      if (space) {
        const parent = space.target.parentElement;
        if (parent) attach(space.target, () => localProfileFromSpace()?.profile ?? null, parent);
        const followed = localFollowSnapshot().accounts.some((account) => account.uid === space.profile.uid);
        if (followed && lastVisited !== space.profile.uid) {
          lastVisited = space.profile.uid;
          recordLocalFollowVisit(lastVisited);
        }
        if (!followed) lastVisited = "";
      } else lastVisited = "";
      for (const container of document.querySelectorAll(".usercard-wrap,.up-panel-container,bili-user-profile,.bili-user-profile,.user-card-m-exp.card-loaded")) {
        if (container.closest("[data-bili-blocker-ui]")) continue;
        const root = container.shadowRoot || container;
        if (container.shadowRoot && !roots2.has(container.shadowRoot)) {
          roots2.add(container.shadowRoot);
          observer.observe(container.shadowRoot, { childList: true, subtree: true });
        }
        const target = root.querySelector("#action,.user,.name,.nickname,.username,.user-name") || container;
        attach(target, () => localProfileFromCard(container), root);
      }
    }
    observer.observe(document.documentElement || document, { childList: true, subtree: true });
    document.addEventListener("DOMContentLoaded", schedule2, { once: true });
    window.addEventListener(localFollowChangedEvent, schedule2);
    window.addEventListener("popstate", schedule2);
    window.addEventListener("pagehide", () => observer.disconnect(), { once: true });
    window.addEventListener("pageshow", () => {
      observer.observe(document.documentElement || document, { childList: true, subtree: true });
      schedule2();
    });
    schedule2();
  }

  // src/modules/sync/panel.ts
  var import_qrcode = __toESM(require_browser(), 1);
  function mountSyncPanel() {
    const host = document.createElement("div");
    host.className = "luna-sync";
    const root = host.attachShadow({ mode: "closed" });
    root.innerHTML = `<style>
    ${sharedControlCss}
    :host { display:block; color:var(--atelier-ink); font:inherit; }
    * { box-sizing:border-box; }
    h2 { font-size:14px; line-height:1.3; margin:0 0 12px; }
    h3 { font-size:1em; margin:0 0 12px; }
    p { margin:0 0 16px; }
    .hint { color:var(--atelier-muted); font-size:.85em; }
    section { border-top:1px solid var(--atelier-edge); padding:12px 0; }
    .fields { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px 18px; }
    label { display:block; min-width:0; font-size:.85em; }
    input { display:block; width:100%; margin:6px 0 0; padding:8px 10px; border:2px solid; border-color:var(--atelier-edge) var(--atelier-highlight) var(--atelier-highlight) var(--atelier-edge); border-radius:0; background:var(--atelier-field); color:var(--atelier-ink); font:inherit; }
    input:focus { outline:1px solid var(--atelier-accent); outline-offset:-3px; }
    [role=status] { white-space:pre-wrap; overflow-wrap:anywhere; background:var(--atelier-panel); border:1px solid var(--atelier-edge); padding:12px; margin:18px 0; font-size:.85em; }
    .actions { display:flex; gap:8px; flex-wrap:wrap; }
    button { font:inherit; font-size:.85em; color:inherit; cursor:pointer; padding:5px 12px; min-height:38px; border:8px solid transparent; border-radius:0; background:transparent; border-image:url("${luna.button_normal}") 9 8 9 8 fill / 8px stretch; }
    button.primary { border-image-source:url("${luna.button_default}"); font-weight:bold; }
    button:hover { border-image-source:url("${luna.button_hover}"); }
    button:active { border-image-source:url("${luna.button_pressed}"); }
    button:disabled { border-image-source:url("${luna.button_disabled}"); color:#858575; cursor:default; }
    button:focus-visible { outline:1px dotted #25300f; outline-offset:-5px; }
    .qr:not(:empty) { border:1px solid var(--atelier-edge); padding:14px; margin-top:16px; background:var(--atelier-field); }
    canvas { display:block; max-width:100%; height:auto!important; margin-bottom:12px; }
    @media(max-width:850px) { .fields { grid-template-columns:minmax(0,1fr); } h2 { font-size:1.4em; } }
  </style>
  <h2>PC / Android \u540C\u6B65</h2>
  <p class="hint">\u901A\u8FC7 Backblaze B2 \u540C\u6B65\u5DF2\u770B\u6807\u8BB0\u3001UID\uFF0F\u7CBE\u786E\u7528\u6237\u540D\u9ED1\u540D\u5355\uFF0C\u4EE5\u53CA\u672C\u5730\u5173\u6CE8\u548C\u5206\u7EC4\uFF0C\u5305\u62EC\u65B0\u589E\u4E0E\u79FB\u9664\u3002</p>
  <section><h3>\u8FDE\u63A5\u8BBE\u7F6E</h3><div class="fields"></div>
  <p class="hint" style="margin-top:12px">\u4E24\u7AEF\u4F7F\u7528\u540C\u4E00 Bucket \u548C\u540C\u6B65\u76EE\u5F55\u3002\u9996\u6B21\u5408\u5E76\u540E\u4E0D\u80FD\u66F4\u6362\u8FD9\u4E24\u9879\uFF1B\u540C\u4E00\u7A7A\u95F4\u5185\u53EF\u66F4\u65B0\u5BC6\u94A5\u3002\u5176\u4ED6\u5C4F\u853D\u89C4\u5219\u548C\u5386\u53F2\u8BB0\u5F55\u4E0D\u53C2\u4E0E\u4E91\u540C\u6B65\u3002</p>
  <div class="actions settings"></div></section>
  <section><h3>\u540C\u6B65\u72B6\u6001</h3><p role="status" aria-live="polite"></p><div class="actions controls"></div>
  <p class="hint" style="margin-top:12px">\u542F\u7528\u540E\u81EA\u52A8\u540C\u6B65\uFF1B\u6682\u505C\u671F\u95F4\u4ECD\u4FDD\u7559\u672C\u5730\u6539\u52A8\uFF0C\u91CD\u65B0\u542F\u7528\u540E\u7EE7\u7EED\u4E0A\u4F20\u3002\u9996\u6B21\u4E91\u7AEF\u5408\u5E76\u524D\u4F1A\u4FDD\u7559\u672C\u5730\u5907\u4EFD\u3002</p></section>
  <section><h3>\u624B\u673A\u914D\u7F6E\u4E0E\u5907\u4EFD</h3><div class="actions transfer"></div><div class="qr"></div></section>`;
    const fields2 = /* @__PURE__ */ new Map();
    const cleanupPixels = observePixelLabels(root);
    const c = getConfig();
    for (const [key2, label, value] of [["keyId", "Key ID", c?.keyId || ""], ["applicationKey", "\u5E94\u7528\u5BC6\u94A5", c?.applicationKey || ""], ["bucketId", "Bucket ID", c?.bucketId || ""], ["prefix", "\u540C\u6B65\u76EE\u5F55", c?.prefix || "atelier/"]]) {
      const row = document.createElement("label");
      row.textContent = label;
      const input = document.createElement("input");
      input.name = key2;
      input.type = key2 === "applicationKey" ? "password" : "text";
      input.autocomplete = "off";
      input.spellcheck = false;
      input.value = value;
      input.addEventListener("input", () => hideSecrets());
      fields2.set(key2, input);
      row.append(input);
      root.querySelector(".fields").append(row);
    }
    const fieldValues = () => Object.fromEntries([...fields2].map(([k, v]) => [k, v.value.trim()]));
    let saved = JSON.stringify(fieldValues());
    let message = "";
    let disposed = false;
    let qrGeneration = 0;
    function hideSecrets() {
      qrGeneration++;
      root.querySelector(".qr").replaceChildren();
    }
    const render = () => {
      if (disposed) return;
      const s = status();
      root.querySelector('[role="status"]').textContent = `${paused() ? "\u5DF2\u6682\u505C" : "\u5DF2\u542F\u7528"} \xB7 ${s.busy ? "\u540C\u6B65\u4E2D" : `\u5F85\u4E0A\u4F20 ${s.pending} \u6761\u64CD\u4F5C`}
\u6700\u8FD1\u6210\u529F\uFF1A${s.lastSuccess ? new Date(s.lastSuccess).toLocaleString() : "\u5C1A\u672A\u540C\u6B65"}${s.error ? `
${s.error}` : ""}${message ? `
${message}` : ""}`;
    };
    const config2 = () => parseConfig({ schema: "bili-atelier-b2-config", version: 1, ...fieldValues() });
    const action = (group, label, run, primary = false, done = "success", long = false) => {
      const button3 = document.createElement("button");
      button3.type = "button";
      button3.textContent = label;
      button3.className = "atelier-control";
      if (primary) button3.classList.add("primary");
      button3.onclick = async () => {
        const feedback = soundTask(long ? "start" : void 0, () => !disposed && host.isConnected && !host.closest('[data-minimized="true"]'));
        button3.disabled = true;
        message = "";
        try {
          const result = await run();
          if (result === "skipped") {
            message = "\u672C\u6B21\u6CA1\u6709\u5F00\u59CB\u65B0\u7684\u540C\u6B65\uFF0C\u8BF7\u68C0\u67E5\u8FDE\u63A5\u8BBE\u7F6E\u548C\u5F53\u524D\u72B6\u6001\u3002";
            feedback.finish("warning");
          } else feedback.finish(result === "error" ? "error" : result === "cancelled" ? "cancel" : done);
        } catch (e) {
          message = e instanceof Error ? e.message : "\u64CD\u4F5C\u5931\u8D25";
          feedback.finish("error");
        } finally {
          button3.disabled = false;
          render();
        }
      };
      root.querySelector("." + group).append(button3);
    };
    action("settings", "\u6D4B\u8BD5\u8FDE\u63A5", async () => {
      await testConnection(config2());
      message = "\u8BA4\u8BC1\u3001\u76EE\u5F55\u8BFB\u53D6\u53CA\u6743\u9650\u68C0\u67E5\u901A\u8FC7\uFF1B\u9996\u6B21\u540C\u6B65\u5C06\u9A8C\u8BC1\u4E0A\u4F20\u3002";
    }, false, "success", true);
    action("settings", "\u4FDD\u5B58\u5E76\u542F\u7528", () => {
      saveConfig(config2());
      saved = JSON.stringify(fieldValues());
      setPaused(false);
    }, true);
    action("controls", "\u6682\u505C\u540C\u6B65", () => setPaused(true), false, "select");
    action("controls", "\u7ACB\u5373\u540C\u6B65", () => {
      if (paused()) throw new Error("\u8BF7\u5148\u4FDD\u5B58\u5E76\u542F\u7528\u540C\u6B65");
      return synchronize(true);
    }, false, "complete", true);
    action("transfer", "\u4E0B\u8F7D\u9996\u6B21\u5907\u4EFD", downloadBackup);
    action("transfer", "\u4E0B\u8F7D\u672C\u5730\u5173\u6CE8\u9996\u6B21\u5907\u4EFD", downloadLocalFollowBackup);
    action("transfer", "\u663E\u793A\u914D\u7F6E\u4E8C\u7EF4\u7801", async () => {
      const qr = root.querySelector(".qr");
      if (qr.childNodes.length) {
        hideSecrets();
        return;
      }
      const generation = ++qrGeneration;
      const text2 = JSON.stringify(config2());
      const hint = document.createElement("p");
      hint.className = "hint";
      hint.textContent = "\u4E8C\u7EF4\u7801\u5305\u542B\u8BBF\u95EE\u5BC6\u94A5\uFF0C\u8BF7\u52FF\u5206\u4EAB\u3002\u518D\u6B21\u70B9\u51FB\u53EF\u9690\u85CF\u3002\u624B\u673A\u53EF\u626B\u7801\u590D\u5236\u6587\u672C\uFF0C\u5728\u4E91\u540C\u6B65\u8BBE\u7F6E\u4E2D\u7C98\u8D34\u5BFC\u5165\u3002";
      const canvas = document.createElement("canvas");
      await import_qrcode.default.toCanvas(canvas, text2, { width: 320, errorCorrectionLevel: "M" });
      if (disposed || generation !== qrGeneration) return;
      const copy = document.createElement("button");
      copy.type = "button";
      copy.className = "atelier-control";
      copy.textContent = "\u590D\u5236\u914D\u7F6E\u6587\u672C";
      copy.onclick = async () => {
        const feedback = soundTask(void 0, () => !disposed && copy.isConnected && host.isConnected);
        try {
          await navigator.clipboard.writeText(text2);
          message = "\u914D\u7F6E\u6587\u672C\u5DF2\u590D\u5236";
          feedback.finish("success");
        } catch {
          message = "\u65E0\u6CD5\u8BBF\u95EE\u526A\u8D34\u677F\uFF0C\u8BF7\u4F7F\u7528\u4E8C\u7EF4\u7801";
          feedback.finish("warning");
        }
        render();
      };
      qr.append(hint, canvas, copy);
    }, false, "menu");
    render();
    window.addEventListener("atelier-sync-status", render);
    return {
      host,
      isDirty: () => saved !== JSON.stringify(fieldValues()),
      hideSecrets,
      dispose() {
        disposed = true;
        cleanupPixels();
        hideSecrets();
        window.removeEventListener("atelier-sync-status", render);
        host.remove();
      }
    };
  }
  function registerSyncPanel(open) {
    if (typeof GM_registerMenuCommand === "function") GM_registerMenuCommand("Bili Atelier \u4E91\u540C\u6B65", open);
  }

  // src/core/config.ts
  var config = {
    viewedMarker: {
      enabled: true,
      fastVideoMainMark: true,
      fullVideoPageScan: false
    },
    commentLocation: {
      enabled: true,
      patchSourceScripts: true,
      domFallback: true,
      videoPageHeaderGate: true,
      videoPageHeaderGateTimeoutMs: 3e3
    },
    blocker: {
      enabled: true
    },
    debug: false
  };

  // src/core/logger.ts
  function debugLog(...args) {
    if (config.debug) {
      console.debug("[BiliToolkit]", ...args);
    }
  }
  function warnLog(...args) {
    console.warn("[BiliToolkit]", ...args);
  }

  // src/core/video-page-ready.ts
  function runAfterVideoPageReady(callback) {
    if (location.hostname !== "www.bilibili.com" || !/^\/video\//i.test(location.pathname)) {
      callback();
      return;
    }
    const isReady = () => {
      const app = document.getElementById("app");
      return document.readyState !== "loading" && app !== null && app.childElementCount > 0 && !app.hasAttribute("data-server-rendered");
    };
    if (isReady()) {
      callback();
      return;
    }
    const observer = new MutationObserver(check);
    function check() {
      if (!isReady()) return;
      observer.disconnect();
      document.removeEventListener("DOMContentLoaded", check);
      callback();
    }
    observer.observe(document.documentElement || document, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-server-rendered"]
    });
    document.addEventListener("DOMContentLoaded", check);
  }

  // src/modules/comment-location/page-world-source.generated.ts
  var commentLocationPageWorldSource = `(() => {
  if (window.__BILI_TOOLKIT_COMMENT_LOCATION__) {
    return;
  }
  window.__BILI_TOOLKIT_COMMENT_LOCATION__ = true;

  function _typeof(value) {
    return typeof value;
  }

  function waitForElement(selector, timeoutMs = 15000) {
    const existing = document.querySelector(selector);
    if (existing) {
      return Promise.resolve(existing);
    }
    return new Promise((resolve) => {
      const startedAt = Date.now();
      const observer = new MutationObserver(() => {
        const node = document.querySelector(selector);
        if (node) {
          observer.disconnect();
          resolve(node);
          return;
        }
        if (Date.now() - startedAt > timeoutMs) {
          observer.disconnect();
          resolve(null);
        }
      });
      observer.observe(document.documentElement || document, { childList: true, subtree: true });
    });
  }

var utils = {
  uncurryThis: function uncurryThis(f) {
    return function () {
      return f.call.apply(f, arguments);
    };
  },
  curryThis: function curryThis(f) {
    return function () {
      var a = Array.prototype.slice.call(arguments);
      a.unshift(this);
      return f.apply(null, a);
    };
  },
  bindFn: function bindFn(fn, context) {
    var _args = Array.prototype.slice.call(arguments, 2);

    return function () {
      return fn.apply(context, _args.concat(Array.prototype.slice.call(arguments)));
    };
  },
  extend: function extend(child, parent) {
    for (var key in parent) {
      if (parent.hasOwnProperty(key)) child[key] = parent[key];
    }

    function ctor() {}

    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.prototype.constructor = child;
    child.__super__ = parent.prototype;
    return child;
  },
  mixin: function mixin(dest) {
    var sources = Array.prototype.slice.call(arguments, 1);

    for (var i = 0; i < sources.length; i++) {
      var src = sources[i];

      for (var key in src) {
        if (!dest[key]) {
          dest[key] = src[key];
        }
      }
    }
  },
  distinctArray: function distinctArray(arr) {
    var newArray = [],
        dict = {},
        i = 0,
        item;

    for (; i < arr.length; i++) {
      item = arr[i];

      var key = item + ':' + _typeof(item);

      if (!dict[key]) {
        newArray.push(item);
        dict[key] = true;
      }
    }

    return newArray;
  },

  /*
   * \u8BBF\u95EE\u7EC8\u7AEF\u4FE1\u606F\u5224\u65AD
   */
  browser: {
    version: function () {
      var u = navigator.userAgent,
          app = navigator.appVersion;
      return {
        //\u79FB\u52A8\u7EC8\u7AEF\u6D4F\u89C8\u5668\u7248\u672C\u4FE1\u606F
        trident: /Trident/i.test(u),
        //IE\u5185\u6838
        presto: /Presto/i.test(u),
        //opera\u5185\u6838
        webKit: /AppleWebKit/i.test(u),
        //\u82F9\u679C\u3001\u8C37\u6B4C\u5185\u6838
        gecko: /Gecko/i.test(u) && !/KHTML/i.test(u),
        //\u706B\u72D0\u5185\u6838
        mobile: /AppleWebKit.*Mobile.*/i.test(u),
        //\u662F\u5426\u4E3A\u79FB\u52A8\u7EC8\u7AEF
        ios: /\\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(u),
        //ios\u7EC8\u7AEF
        android: /Android/i.test(u) || /Linux/i.test(u),
        //android\u7EC8\u7AEF\u6216\u8005uc\u6D4F\u89C8\u5668
        windowsphone: /Windows Phone/i.test(u),
        //Windows Phone
        iPhone: /iPhone/i.test(u),
        //\u662F\u5426\u4E3AiPhone\u6216\u8005QQHD\u6D4F\u89C8\u5668
        iPad: /iPad/i.test(u),
        //\u662F\u5426iPad
        MicroMessenger: /MicroMessenger/i.test(u),
        //\u662F\u5426\u4E3A\u5FAE\u4FE1
        webApp: !/Safari/i.test(u),
        //\u662F\u5426web\u5E94\u8BE5\u7A0B\u5E8F\uFF0C\u6CA1\u6709\u5934\u90E8\u4E0E\u5E95\u90E8
        edge: /edge/i.test(u),
        weibo: /Weibo/i.test(u),
        uc: /UCBrowser/i.test(u),
        qq: /MQQBrowser/i.test(u),
        baidu: /Baidu/i.test(u),
        comicApp: /BiliComic|ComicWebView/i.test(u) //\u662F\u5426\u5728\u6F2B\u753B\u7684app\uFF0C\u6216\u8005\u6F2B\u753B\u81EA\u5DF1\u5C01\u88C5\u7684webview

      };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase(),
    lteIE: function lteIE(ver) {
      return $.browser.msie && parseInt($.browser.version) <= ver;
    }
  },
  cookie: {
    get: function get(cookieName) {
      var theCookie = "" + document.cookie;
      var ind = theCookie.indexOf(cookieName + "=");
      if (ind == -1 || cookieName == "") return "";
      var ind1 = theCookie.indexOf(';', ind);
      if (ind1 == -1) ind1 = theCookie.length;
      return unescape(theCookie.substring(ind + cookieName.length + 1, ind1));
    },
    set: function set(name, value, days) {
      days = days !== undefined ? days : 365;
      var exp = new Date();
      exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=/; domain=.bilibili.com";
    },
    'delete': function _delete(name) {
      this.set(name, '', -1);
    }
  },
  readFromLocal: function readFromLocal(key) {
    if (this.localStorage._support) {
      return localStorage.getItem(key);
    } else {
      return this.cookie.get(key);
    }
  },
  saveToLocal: function saveToLocal(key, val, days) {
    if (this.localStorage._support) {
      return localStorage.setItem(key, val);
    } else {
      return this.cookie.set(key, val, days);
    }
  },
  localStorage: {
    _support: window.localStorage && typeof (window.localStorage) == 'object' ? true : false,
    getItem: function getItem(key) {
      if (this._support) {
        return window.localStorage.getItem(key);
      } else {
        return null;
      }
    },
    setItem: function setItem(key, value) {
      if (this._support) {
        window.localStorage.setItem(key, value);
      }
    },
    removeItem: function removeItem(key) {
      if (this.getItem(key)) {
        window.localStorage.removeItem(key);
      }
    }
  },
  unhtml: function unhtml(str, reg) {
    return str ? str.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\\d+);)?/g, function (a, b) {
      if (b) {
        return a;
      } else {
        return {
          '<': '&lt;',
          '&': '&amp;',
          '"': '&quot;',
          '>': '&gt;',
          "'": '&apos;'
        }[a];
      }
    }) : '';
  },
  html: function html(str) {
    return str ? str.replace(/&((g|l|quo)t|amp|#39|nbsp);/g, function (m) {
      return {
        '&lt;': '<',
        '&amp;': '&',
        '&quot;': '"',
        '&gt;': '>',
        '&#39;': "'",
        '&nbsp;': ' '
      }[m];
    }) : '';
  },
  hashManage: {
    prependHash: '!',
    _change: function _change(key, value) {
      var hash = location.hash,
          hashArray,
          hashMap = {},
          hashString = '',
          index = 0;

      if (hash) {
        hash = hash.substring(1);

        if (this.prependHash) {
          hash = hash.replace(new RegExp('^' + this.prependHash.replace(/[\\-\\[\\]{}()*+?.,\\\\\\^$|#\\s]/g, "\\\\$&")), '');
        }
      }

      hashArray = hash.split('&');

      for (var i = 0; i < hashArray.length; i++) {
        var _k = hashArray[i].split('=')[0],
            _v = hashArray[i].split('=')[1];

        if (_k) {
          hashMap[_k] = decodeURIComponent(_v);
        }
      }

      if (_typeof(key) == 'object') {
        for (var j in key) {
          var _val = key[j];

          if (_val) {
            hashMap[j] = encodeURIComponent(_val);
          } else if (_val === false) {
            delete hashMap[j];
          }
        }
      } else {
        if (value) {
          hashMap[key] = encodeURIComponent(value);
        } else if (value === false) {
          delete hashMap[key];
        } else if (typeof key == 'undefined') {
          return hashMap;
        } else {
          return hashMap[key] || null;
        }
      }

      for (var k in hashMap) {
        if (index != 0) {
          hashString += '&';
        } else {
          hashString += this.prependHash;
        }

        hashString += k + '=' + hashMap[k];
        index++;
      }

      location.hash = hashString;
      return hashMap;
    },
    get: function get(key) {
      return this._change(key, null);
    },
    set: function set(key, value) {
      return this._change(key, value);
    },
    clear: function clear() {
      location.hash = '';
    }
  },
  getColor16: function getColor16(rgb) {
    function _to16(d) {
      var color = parseInt(d).toString(16);
      return color.length == 1 ? "0" + color : color;
    }

    function _parse(array) {
      var value = "#";

      for (var i = 0; i < 3; i++) {
        value += _to16(array[i]);
      }

      return value;
    }

    var result = "";
    var rgbArray = [];

    if (rgb.match(/\\((.*)\\)/) != null) {
      rgbArray = rgb.match(/\\((.*)\\)/)[1].split(",");
      result = _parse(rgbArray);
    } else if (rgb.match(/,+/g) != null) {
      rgbArray = rgb.split(",");
      result = _parse(rgbArray);
    } else {
      result = _to16(rgb);
    }

    return result;
  },
  serializeParam: function serializeParam(json) {
    var strArr = [];

    for (var i in json) {
      if (!(_typeof(json[i]).toLowerCase() == "function" || _typeof(json[i]).toLowerCase() == "object")) {
        strArr.push(encodeURIComponent(i) + "=" + encodeURIComponent(json[i]));
      } else if ($.isArray(json[i])) {
        //\u652F\u6301\u4F20\u6570\u7EC4\u5185\u5BB9
        for (var j = 0; j < json[i].length; j++) {
          strArr.push(encodeURIComponent(i) + "[]=" + encodeURIComponent(json[i][j]));
        }
      }
    }

    return strArr.join("&");
  },
  query2json: function query2json(query) {
    if ($.isPlainObject(query)) {
      return query;
    }

    if (query === undefined) {
      return {};
    }

    var q = query.split("&"),
        j = {};

    for (var i = 0; i < q.length; i++) {
      var arr = q[i].split('=');
      j[arr[0]] = arr[1];
    }

    return j;
  },
  hash2json: function hash2json() {
    if (window.location.href.split('#').length > 1) {
      return this.query2json(window.location.href.split('#')[1].split('?')[0].replace(/#/, ""));
    } else {
      return {};
    }
  },
  query: {
    get: function get(key) {
      var queryJson = utils.query2json(this._getQuery());

      if (key) {
        return queryJson[key];
      } else {
        return queryJson;
      }
    },
    set: function set(key, value) {
      var queryJson = utils.query2json(this._getQuery());
      var hashJson = utils.hash2json();

      if (_typeof(key) == 'object') {
        for (var k in key) {
          this._set(queryJson, k, key[k]);
        }
      } else {
        this._set(queryJson, key, value);
      }

      return utils.makeUrl('', queryJson, hashJson);
    },
    _set: function _set(json, key, value) {
      if (value === null) {
        delete json[key];
      } else {
        json[key] = value;
      }

      return json;
    },
    _getQuery: function _getQuery() {
      if (window.location.search !== undefined) {
        return window.location.search.substring(1);
      } else {
        return window.location.href.split('?')[1] ? window.location.href.split('?')[1].split('#')[0] : '';
      }
    }
  },
  makeUrl: function makeUrl(url, queryJson, hashJson) {
    var query = this.serializeParam(queryJson),
        hash = this.serializeParam(hashJson),
        _url;

    if (query) {
      _url = (url || location.pathname) + '?' + query;
    } else {
      _url = url || location.pathname;
    }

    if (hash) {
      _url = _url + '#' + hash;
    }

    return _url;
  },
  formatNum: function formatNum(num, unit) {
    if (num === undefined || typeof num == 'string' && isNaN(parseInt(num))) return '--';
    var unitMap = {
      '\u4E07': 10000
    },
        defaultUnit = '\u4E07';
    unit = typeof unit == 'string' ? unit : defaultUnit;
    var factor = unitMap[unit] || unitMap[defaultUnit];
    if (typeof num == 'string' && num.indexOf(unit) >= 0) return;

    if (typeof num == 'string' && num.indexOf(",") >= 0) {
      var nums = num.split(",");
      var total = "";

      for (var i = 0; i < nums.length; i++) {
        total += nums[i];
      }

      num = total;
    }

    num = parseInt(num);

    if (num >= factor) {
      num = (num / factor).toFixed(1) + unit;
    }

    return num;
  },
  parseCardProps: function parseCardProps(dataItem, type) {
    var props = {
      'data-gk': dataItem.play,
      'data-sc': dataItem.favorites,
      'data-pl': dataItem.review,
      'data-dm': dataItem.video_review,
      'data-up': dataItem.author,
      'data-subtitle': dataItem.subtitle,
      'data-lm': dataItem.typename || '',
      'data-tg': dataItem.created ? new Date(dataItem.created * 1000).format('yyyy-MM-dd hh:mm') : dataItem.create || dataItem.created_at,
      'data-txt': dataItem.description,
      'data-yb': dataItem.coins
    },
        str = "";

    if (type == 'string') {
      for (var k in props) {
        if (str != "") {
          str += " ";
        }

        str += k + '="' + props[k] + '"';
      }

      return str;
    } else {
      return props;
    }
  },
  newParseCardProps: function newParseCardProps(dataItem, type) {
    var props = {
      'data-gk': dataItem.stat.view,
      'data-sc': dataItem.stat.favorite,
      'data-pl': dataItem.stat.reply,
      'data-dm': dataItem.stat.danmaku,
      'data-up': dataItem.owner.name,
      'data-lm': dataItem.tname || '',
      'data-tg': new Date(dataItem.pubdate * 1000).format('yyyy-MM-dd hh:mm'),
      'data-txt': dataItem.desc,
      'data-yb': dataItem.stat.coin
    };
    return props;
  },
  // protocol-relative \u4E3A\u4E86\u517C\u5BB9ie8\u4EE5\u4E0B
  protocolRelative: function protocolRelative(url) {
    if (/http:|https:/.test(url)) {
      return url.replace(/http:|https:/, window.location.protocol);
    } else if ($.browser.msie && parseInt($.browser.version) <= 8) {
      return window.location.protocol + url;
    } else {
      return url;
    }
  },
  formatDuration: function formatDuration(duration, isToHour, minHeadBits) {
    if (typeof duration !== 'number') {
      return duration;
    }

    minHeadBits = minHeadBits || -1;
    var second = this.toFixed(duration % 60, 2);
    var minute = isToHour ? this.toFixed(Math.floor(duration % 3600 / 60), 2) : this.toFixed(Math.floor(duration / 60), minHeadBits);
    var hour = isToHour ? this.toFixed(Math.floor(duration / 3600), minHeadBits) : null;
    return hour === null ? [minute, second].join(':') : [hour, minute, second].join(':');
  },
  isObject: function isObject(obj) {
    return _typeof(obj) === 'object' && obj !== null;
  },
  isNothing: function isNothing(obj) {
    return obj == null; // Only deal with null/undefined values
  },
  isUndefined: function isUndefined(obj) {
    return typeof obj === 'undefined';
  },
  join: function join() {
    return Array.prototype.join.call(arguments, '');
  },
  random: function random(start, end) {
    if (this.isNothing(end)) {
      end = start;
      start = 0;
    }

    return Math.floor(Math.random() * (end - start + 1)) + start;
  },
  debounce: function debounce(func, delay, isImmediate) {
    var timeout;

    function debounced() {
      clearTimeout(timeout);

      if (isImmediate && utils.isNothing(timeout)) {
        func();
      }

      timeout = setTimeout(func, delay || 100);
    }

    debounced.clearNext = function () {
      clearTimeout(timeout);
    };

    return debounced;
  },
  throttle: function throttle(func, delay, options) {
    var timeout,
        prev = 0;
    delay = delay || 200;
    options = options || {};

    function later() {
      prev = options.head ? 0 : new Date().getTime();
      timeout = null;
      func();
    }

    function throttled() {
      var remain,
          now = new Date().getTime();

      if (!prev && options.head) {
        prev = now;
      }

      remain = delay - (now - prev);

      if (remain <= 0 || remain > delay) {
        clearTimeout(timeout);
        timeout = null;
        prev = now;
        func();
      } else if (!timeout && !options.tail) {
        timeout = setTimeout(later, remain);
      }
    }

    throttled.clearNext = function () {
      clearTimeout(timeout);
      timeout = null;
      prev = 0;
    };

    return throttled;
  },
  toFixed: function toFixed(data, bits) {
    if (typeof data !== 'number' && typeof data !== 'string') {
      return data;
    }

    data = String(data);
    bits = Number(bits) || 2;

    while (data.length < bits) {
      data = '0' + data;
    }

    return data.length > bits ? data : data.slice(-bits);
  },
  thumbnail: function thumbnail(src, width, height) {
    if (typeof src !== 'string') {
      return src;
    }

    if (typeof width === 'undefined') {
      return src;
    }

    var urls = src.split('?');
    var sizes, rules, feature, matches;
    height = height || width;
    sizes = {
      midfix: '/' + width + '_' + height,
      suffix: '_' + width + 'x' + height
    };
    rules = {
      cdn: /^http.+i[0-2]\\.hdslb\\.com\\//,
      bfs: /^http.+i\\d\\.hdslb\\.com\\/bfs\\//,
      group1: /^http.+i\\d\\.hdslb\\.com\\/group1\\//,
      other: /(^http.+i\\d\\.hdslb\\.com)(\\/.+)/
    };
    feature = {
      bfs: /_\\d+x\\d+\\./,
      other: /\\/\\d+_\\d+\\//
    };

    if (!rules.cdn.test(urls[0])) {
      return src;
    }

    if (feature.bfs.test(urls[0]) || feature.other.test(urls[0])) {
      return src;
    }

    if (rules.bfs.test(urls[0]) || rules.group1.test(urls[0])) {
      urls[0] += sizes.suffix + urls[0].slice(urls[0].lastIndexOf('.'));
      src = urls.join('?');
    } else {
      matches = rules.other.exec(urls[0]);

      if (matches) {
        urls[0] = matches[1] + sizes.midfix + matches[2];
        src = urls.join('?');
      }
    }

    return src;
  },
  //\u68C0\u67E5\u662F\u5426\u652F\u6301webp
  isWebp: function () {
    try {
      return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
    } catch (err) {
      return false;
    }
  }(),
  webp: function webp(url, args) {
    if (!url) {
      return url;
    }

    var suffix = url.match(/(.*\\.(jpg|jpeg|gif|png|bmp))(\\?.*)?/); //\u8DEF\u5F84\u662F\u5426\u5305\u542B/bfs/

    var isBfs = url.indexOf('/bfs/') != -1 ? true : false; //\u662F\u5426\u662FGIF\u56FE\u7247

    if (!suffix || suffix[2] === 'bmp' || !isBfs) {
      return url;
    }

    var w = args.w,
        h = args.h; //\u88C1\u526A\u89C4\u5219

    var filter = [];

    if (w && h) {
      filter.push(w + 'w');
      filter.push(h + 'h');
    }

    if (args.freeze) {
      filter.push('1s');
    } // var cut = (w && h) ? '@' + w + 'w_' + h + 'h' : '@'
    //\u56FE\u7247\u540E\u53C2\u6570 \u6BD4\u5982\u89C6\u9891\u52A8\u6001\u56FE


    var args = suffix[3] ? suffix[3] : '';

    if (this.isWebp) {
      return suffix[1] + '@' + filter.join('_') + '.webp' + args;
    } else {
      return suffix[1] + '@' + filter.join('_') + '.' + suffix[2] + args;
    }
  },
  isAlpha: function isAlpha(items, rate) {
    var machineDna;

    if (localStorage.getItem('machineDna')) {
      machineDna = localStorage.getItem('machineDna');
    } else {
      machineDna = parseInt(Math.random() * 10 + 1);
      localStorage.setItem('machineDna', machineDna);
    }

    if (this.isBeta(items) || rate < machineDna) {
      return true;
    } else {
      return false;
    }
  },
  isBeta: function isBeta(items) {
    var isOpen = false;
    var mantissa = utils.cookie.get('DedeUserID').slice(-1);

    if (mantissa && $.isArray(items)) {
      isOpen = $.inArray(+mantissa, items) > -1;
    }

    return isOpen;
  },
  trimHttp: function trimHttp(url) {
    return url ? url.replace(/^http:/, '') : '';
  },
  getByteLen: function getByteLen(val) {
    var len = 0;

    for (var i = 0; i < val.length; i++) {
      var a = val.charAt(i);

      if (a.match(/[^\\x00-\\xff]/ig) != null) {
        len += 1;
      } else {
        len += .5;
      }
    }

    return len;
  },
  // to do mreporter
  //\u8BC4\u8BBA\u5728\u64AD\u653E\u9875\u65E5\u5FD7\u4E0A\u62A5
  videoReport: function videoReport(name) {
    // MReporter logic
    if (window.MReporter) {
      window.MReporter.click && window.MReporter.click({
        evt: "selfDef.".concat(name),
        msg: {
          event: name,
          value: name
        }
      });
      return;
    } // log-reporter logic


    if (window.spmReportData) {
      window.spmReportData[name] = name;
    }
  },
  //\u57CB\u70B9\u4E0A\u62A5
  customReport: function customReport(name, ops) {
    if (window.MReporter) {
      window.MReporter.click && window.MReporter.click({
        evt: "selfDef.".concat(name),
        msg: {
          event: name,
          value: ops || name
        }
      });
    }

    if (window.reportConfig && window[reportConfig['msgObjects']]) {
      var reportObj = window[reportConfig['msgObjects']];
      var obj = ops ? ops : name;
      reportObj[name] = obj;
    }
  },
  formatLotteryTime: function formatLotteryTime(time) {
    time = time * 1000;
    var date = new Date(time);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return year + '\u5E74' + month + '\u6708' + day + '\u65E5 ' + hour + ':' + minute;
  },
  hexToRgbA: function hexToRgbA(hex) {
    var localHex = hex.toString();

    if (hex.length === 6) {
      localHex = 'ff' + localHex;
    }

    var r = parseInt(localHex.slice(2, 4), 16),
        g = parseInt(localHex.slice(4, 6), 16),
        b = parseInt(localHex.slice(6, 8), 16),
        alpha = parseInt(localHex.slice(0, 2), 16);
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha / 255 + ")";
  },
  asyncScript: function asyncScript(url) {
    return new Promise(function (resolve) {
      var script = document.createElement('script');
      script.setAttribute('src', url);
      document.body.appendChild(script);
      script.onload = resolve;
    });
  },
  cmGetUrl: function cmGetUrl(cmData, id) {
    if (!window.BiliCm) return '';
    return window.BiliCm.Base.getSyncUrl(cmData, Number(id));
  },
  cmSendData: function cmSendData(cmData, id) {
    if (!window.BiliCm) return;
    window.BiliCm.Base.sendShowData(cmData, Number(id));
  },
  cmSendStrictData: function cmSendStrictData(cmData, id) {
    if (!window.BiliCm) return;
    window.BiliCm.Base.sendStrictShowData(cmData, Number(id));
  },
  cmSendCloseData: function cmSendCloseData(cmData, id) {
    if (!window.BiliCm) return;
    window.BiliCm.Base.sendCloseData(cmData, Number(id));
  },
  checkInView: function checkInView(el, padding) {
    if (!el) return;
    var rect = el.getBoundingClientRect();
    var p = padding || 0; // \u53EA\u5224\u65AD\u4E86\u7EB5\u5411

    return rect.top < window.innerHeight + p && rect.bottom >= 0;
  },
  // to do mreporter

  /**
   * \u5B8C\u5168\u81EA\u5B9A\u4E49\u4E0A\u62A5 \u53EF\u81EA\u5B9A\u4E49\u4E0A\u62A5\u901A\u9053\u548C\u516C\u5171\u53C2\u6570
   * @param {*} options
   *  spm_id : spmid \u975E\u5FC5\u4F20 \u53D6meta\u4E2Dspmid
   *  c : C\u6BB5  \u975E\u5FC5\u4F20 \u9ED8\u8BA4 0
   *  d : D\u6BB5 \u975E\u5FC5\u4F20  \u9ED8\u8BA4 0
   *  e : E\u6BB5 \u975E\u5FC5\u4F20  \u9ED8\u8BA4 0
   *  type : pv, click, appear \u4E0A\u62A5\u7C7B\u578B\u901A\u9053
   * @param {*} info
   */
  allCustomReport: function allCustomReport() {
    var _document$getElements;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var info = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var spm_idAB = options.spm_id || ((_document$getElements = document.getElementsByTagName('meta').spm_prefix) === null || _document$getElements === void 0 ? void 0 : _document$getElements.content) || '0.0';
    var spmidC = options.c || '0';
    var spmidD = options.d || '0';
    var spmidE = options.e || '0';
    var spm_id = spmidE ? "".concat(spm_idAB, ".").concat(spmidC, ".").concat(spmidD, ".").concat(spmidE) : "".concat(spm_idAB, ".").concat(spmidC, ".").concat(spmidD);

    if (!options.type) {
      throw new Error('report need type');
    }

    info.spm_id = spm_id; // MReporter logic

    if (window.MReporter) {
      var input = {
        msg: info,
        spm: {
          id: options.spm_id,
          mol: spmidC,
          pos: spmidD,
          ext: spmidE
        }
      };
      window.MReporter[options.type] && window.MReporter[options.type](input);
      return;
    } // log-reporter logic


    if (window.reportObserver && window.reportObserver.reportCustomData) {
      window.reportObserver.reportCustomData(options.type, info);
    }
  },
  getImgSrc: function getImgSrc(file) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return utils.trimHttp(utils.webp(file, option));
  },
  // MReporter mr-show attribute \u7EC4\u88C5
  mrShowAttr: function mrShowAttr(msg, evtName, index) {
    var payload = {
      msg: msg,
      evt: "".concat(evtName, ".show.").concat(index)
    };
    return JSON.stringify(payload);
  }
};



(function() {
    'use strict';

    function getLocationSpanByReply(reply, attrs=""){
        if(reply && reply.reply_control && reply.reply_control.location){
            return \`<span class="btk-comment-location reply-location" \${attrs}>\${reply.reply_control.location || ''}</span>\`;
        }else{
            return "";
        }

    }

    hackEle(HTMLBodyElement.prototype, "insertBefore", hack);
    hackEle(HTMLHeadElement.prototype, "insertBefore", hack);

    hackEle(HTMLBodyElement.prototype, "appendChild", hack);
    hackEle(HTMLHeadElement.prototype, "appendChild", hack);

    StartObserveNewPage(); // \u5BF9\u65B0\u7248\u89C6\u9891\u9875\u7684\u8FDB\u884Cinject \uFF0Cjust Test

    async function StartObserveNewPage(){
        await waitForElement(".browser-pc")
        // \u672C\u6765\u76F8\u5BF9 Vue-next \u7684 render \u505A\u6CE8\u5165\u7684\uFF0C\u60F3\u4E86\u60F3\u611F\u89C9\u592A\u9EBB\u70E6\u4E86\uFF0C\u8FD8\u662F\u7B80\u5355\u70B9\uFF0C\u505A\u6210 MutationObserver \u7B97\u4E86
        const targetNode = document.querySelector("body");
        function setCode(){
            const nodes = [
                ...document.querySelectorAll(".browser-pc .reply-item .reply-time"),
                ...document.querySelectorAll(".browser-pc .sub-reply-item .sub-reply-time")
                          ];
            nodes.forEach(node=>{
                if(!node.__vueParentComponent){
                    return;
                }
                if(node.settled){
                    return;
                }
                node.settled = true;
                const item = node.__vueParentComponent.props.reply || node.__vueParentComponent.props.subReply
                let locationSpan = getLocationSpanByReply(item,\`style="margin-right:20px;"\`);

                node.outerHTML = node.outerHTML + locationSpan ;
                //console.log(node)
            })
        }
        const config = { childList: true, subtree: true };
        const callback = function(mutationsList, observer) {
            setCode()
        };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
        setCode()
    }


    function hackEle(ele, func, callback){
        const ori = ele[func];
        ele[func] = function(...args){
            // console.log(this, ...args)
            return callback(ori.bind(this), ...args)
        }
    };


    function injectbbComment(){
        const bbComment = window.bbComment;
        if( !bbComment.prototype._createSubReplyUserFace ){
            //console.log("inject Old ")
            injectOldbbComment();
        }else{
            //console.log("inject New ")
            injectNewbbComment();
        }
    };

    // \u65E7\u7248\u8BC4\u8BBA\uFF0C\u4E3A\u5565\u4F1A\u6709\u65E7\u7248\u8BC4\u8BBA\u5462\uFF0C\u56E0\u4E3A\u6709\u4EBA\u5728\u7528 403348 \uFF5E
    function injectOldbbComment(){
        const g = window.bbComment;
        const f = utils;
        g.prototype._createListCon = function(e, n, t) {
            var locationSpan = getLocationSpanByReply(e);
            var r = this._parentBlacklistDom(e, n, t)
            , i = ['<div class="con ' + (t == n ? "no-border" : "") + '">', '<div class="user">' + this._identity(e.mid, e.assist, e.member.fans_detail), '<a data-usercard-mid="' + e.mid + '" href="//space.bilibili.com/' + e.mid + '" target="_blank" class="name ' + this._createVipClass(e.member.vip.vipType, e.member.vip.vipStatus, e.member.vip.themeType) + '">' + f.unhtml(e.member.uname) + '</a><a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l' + e.member.level_info.current_level + '"></i></a>' + this._createNameplate(e.member.nameplate) + this._createUserSailing(e.member && e.member.user_sailing || {}) + "</div>", this._createMsgContent(e), '<div class="info">', e.floor ? '<span class="floor">#' + e.floor + "</span>" : "", this._createPlatformDom(e.content.plat), '<span class="time">' + this._formateTime(e.ctime) + "</span>",locationSpan, e.lottery_id ? "" : '<span class="like ' + (1 == e.action ? "liked" : "") + '"><i></i><span>' + (e.like || "") + "</span></span>", e.lottery_id ? "" : '<span class="hate ' + (2 == e.action ? "hated" : "") + '"><i></i></span>', e.lottery_id ? "" : this._createReplyBtn(e.rcount), e.lottery_id && e.mid !== this.userStatus.mid ? "" : '<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>' + (this._canSetTop(e) ? '<li class="set-top">' + (e.isUpTop ? "\u53D6\u6D88\u7F6E\u9876" : "\u8BBE\u4E3A\u7F6E\u9876") + "</li>" : "") + (this._canBlackList(e.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : "") + (this._canReport(e.mid) ? '<li class="report">\u4E3E\u62A5</li>' : "") + (this._canDel(e.mid) && !e.isTop ? '<li class="del" data-mid="' + e.mid + '">\u5220\u9664</li>' : "") + "</ul></div></div>", this._createLotteryContent(e.content), this._createVoteContent(e.content), this._createTags(e), "</div>", '<div class="reply-box">', this._createSubReplyList(e.replies, e.rcount, !1, e.rpid, e.folder && e.folder.has_folded), "</div>", '<div class="paging-box">', "</div>", "</div>"].join("");
            return f.browser.version.mobile && (i = ['<div class="con ' + (t == n ? "no-border" : "") + '">', '<div class="user">' + this._identity(e.mid, e.assist, e.member.fans_detail), '<a data-usercard-mid="' + e.mid + '" href="//space.bilibili.com/' + e.mid + '" target="_blank" class="name ' + this._createVipClass(e.member.vip.vipType, e.member.vip.vipStatus, e.member.vip.themeType) + '">' + f.unhtml(e.member.uname) + '</a><a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l' + e.member.level_info.current_level + '"></i></a>' + this._createNameplate(e.member.nameplate) + '<div class="right">', e.floor ? '<span class="floor">#' + e.floor + "</span>" : "", '<span class="time">' + this._formateMobileTime(e.ctime) + "</span></div>", "</div>", this._createMsgContent(e), this._createVoteContent(e.content), '<div class="info">', this._createPlatformDom(e.content.plat), '<span class="like ' + (1 == e.action ? "liked" : "") + '"><i></i><span>' + (e.like || "") + "</span></span>", '<span class="hate ' + (2 == e.action ? "hated" : "") + '"><i></i></span>', this._createReplyBtn(e.rcount), '<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>' + (this._canSetTop(e) ? '<li class="set-top">' + (e.isUpTop ? "\u53D6\u6D88\u7F6E\u9876" : "\u8BBE\u4E3A\u7F6E\u9876") + "</li>" : "") + (this._canBlackList(e.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : "") + (this._canReport(e.mid) ? '<li class="report">\u4E3E\u62A5</li>' : "") + (this._canDel(e.mid) && !e.isTop ? '<li class="del" data-mid="' + e.mid + '">\u5220\u9664</li>' : "") + "</ul></div></div>", "</div>", this._createTags(e), '<div class="reply-box">', this._createSubReplyList(e.replies, e.rcount, !1, e.rpid, e.folder && e.folder.has_folded), "</div>", '<div class="paging-box">', "</div>", "</div>"].join("")),
                e.state === this.blacklistCode ? r : i
        }
        g.prototype._createSubFoldedListCon = function(e) {
            var locationSpan = getLocationSpanByReply(e);
            var n = this._parentBlacklistDom(e, 0)
            , t = ['<div class="con">', '<div class="user">' + this._identity(e.mid, e.assist, e.member.fans_detail), '<a data-usercard-mid="' + e.mid + '" href="//space.bilibili.com/' + e.mid + '" target="_blank" class="name ' + this._createVipClass(e.member.vip.vipType, e.member.vip.vipStatus, e.member.vip.themeType) + '">' + f.unhtml(e.member.uname) + '</a><a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l' + e.member.level_info.current_level + '"></i></a>' + this._createNameplate(e.member.nameplate), "</div>", this._createMsgContent(e), '<div class="info">', '<span class="time">' + this._formateTime(e.ctime) + "</span>",locationSpan, '<span class="like ' + (1 == e.action ? "liked" : "") + '"><i></i><span>' + (e.like || "") + "</span></span>", this._createReplyBtn(e.rcount), '<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>' + (this._canSetTop(e) ? '<li class="set-top">' + (e.isUpTop ? "\u53D6\u6D88\u7F6E\u9876" : "\u8BBE\u4E3A\u7F6E\u9876") + "</li>" : "") + (this._canBlackList(e.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : "") + (this._canReport(e.mid) ? '<li class="report">\u4E3E\u62A5</li>' : "") + (this._canDel(e.mid) && !e.isTop ? '<li class="del" data-mid="' + e.mid + '">\u5220\u9664</li>' : "") + "</ul></div></div>", "</div>", "</div>"].join("");
            return f.browser.version.mobile && (t = ['<div class="con">', '<div class="user">' + this._identity(e.mid, e.assist, e.member.fans_detail), '<a data-usercard-mid="' + e.mid + '" href="//space.bilibili.com/' + e.mid + '" target="_blank" class="name ' + this._createVipClass(e.member.vip.vipType, e.member.vip.vipStatus, e.member.vip.themeType) + '">' + f.unhtml(e.member.uname) + '</a><a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l' + e.member.level_info.current_level + '"></i></a>' + this._createNameplate(e.member.nameplate), '<div class="right">', '<span class="time">' + this._formateMobileTime(e.ctime) + "</span></div>", "</div>", this._createMsgContent(e), '<div class="info">', this._createPlatformDom(e.content.plat), '<span class="like ' + (1 == e.action ? "liked" : "") + '"><i></i><span>' + (e.like || "") + "</span></span>", this._createReplyBtn(e.rcount), '<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>' + (this._canSetTop(e) ? '<li class="set-top">' + (e.isUpTop ? "\u53D6\u6D88\u7F6E\u9876" : "\u8BBE\u4E3A\u7F6E\u9876") + "</li>" : "") + (this._canBlackList(e.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : "") + (this._canReport(e.mid) ? '<li class="report">\u4E3E\u62A5</li>' : "") + (this._canDel(e.mid) && !e.isTop ? '<li class="del" data-mid="' + e.mid + '">\u5220\u9664</li>' : "") + "</ul></div></div>", "</div>", "</div>"].join("")),
                e.state === this.blacklistCode ? n : t
        }
        g.prototype._createTopFoldedListCon = function(e) {
            var locationSpan = getLocationSpanByReply(e);
            var n = this._parentBlacklistDom(e, 0)
            , t = ['<div class="con">', '<div class="user">' + this._identity(e.mid, e.assist, e.member.fans_detail), '<a data-usercard-mid="' + e.mid + '" href="//space.bilibili.com/' + e.mid + '" target="_blank" class="name ' + this._createVipClass(e.member.vip.vipType, e.member.vip.vipStatus, e.member.vip.themeType) + '">' + f.unhtml(e.member.uname) + '</a><a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l' + e.member.level_info.current_level + '"></i></a>' + this._createNameplate(e.member.nameplate), "</div>", this._createMsgContent(e), '<div class="info">', e.floor ? '<span class="floor">#' + e.floor + "</span>" : "", this._createPlatformDom(e.content.plat), '<span class="time">' + this._formateTime(e.ctime) + "</span>",locationSpan, '<span class="like ' + (1 == e.action ? "liked" : "") + '"><i></i><span>' + (e.like || "") + "</span></span>", '<span class="hate ' + (2 == e.action ? "hated" : "") + '"><i></i></span>', this._createReplyBtn(e.rcount), '<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>' + (this._canSetTop(e) ? '<li class="set-top">' + (e.isUpTop ? "\u53D6\u6D88\u7F6E\u9876" : "\u8BBE\u4E3A\u7F6E\u9876") + "</li>" : "") + (this._canBlackList(e.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : "") + (this._canReport(e.mid) ? '<li class="report">\u4E3E\u62A5</li>' : "") + (this._canDel(e.mid) && !e.isTop ? '<li class="del" data-mid="' + e.mid + '">\u5220\u9664</li>' : "") + "</ul></div></div>", "</div>", "</div>"].join("");
            return f.browser.version.mobile && (t = ['<div class="con">', '<div class="user">' + this._identity(e.mid, e.assist, e.member.fans_detail), '<a data-usercard-mid="' + e.mid + '" href="//space.bilibili.com/' + e.mid + '" target="_blank" class="name ' + this._createVipClass(e.member.vip.vipType, e.member.vip.vipStatus, e.member.vip.themeType) + '">' + f.unhtml(e.member.uname) + '</a><a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l' + e.member.level_info.current_level + '"></i></a>' + this._createNameplate(e.member.nameplate), '<div class="right">', e.floor ? '<span class="floor">#' + e.floor + "</span>" : "", '<span class="time">' + this._formateMobileTime(e.ctime) + "</span></div>", "</div>", this._createMsgContent(e), '<div class="info">', this._createPlatformDom(e.content.plat), '<span class="like ' + (1 == e.action ? "liked" : "") + '"><i></i><span>' + (e.like || "") + "</span></span>", '<span class="hate ' + (2 == e.action ? "hated" : "") + '"><i></i></span>', this._createReplyBtn(e.rcount), '<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>' + (this._canSetTop(e) ? '<li class="set-top">' + (e.isUpTop ? "\u53D6\u6D88\u7F6E\u9876" : "\u8BBE\u4E3A\u7F6E\u9876") + "</li>" : "") + (this._canBlackList(e.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : "") + (this._canReport(e.mid) ? '<li class="report">\u4E3E\u62A5</li>' : "") + (this._canDel(e.mid) && !e.isTop ? '<li class="del" data-mid="' + e.mid + '">\u5220\u9664</li>' : "") + "</ul></div></div>", "</div>", "</div>"].join("")),
                e.state === this.blacklistCode ? n : t
        }

        g.prototype._parentBlacklistDom = function(e, n, t) {
            var locationSpan = getLocationSpanByReply(e);
            return ['<div class="con ' + (t == n ? "no-border" : "") + '">', '<div class="user blacklist-font-color">\u9ED1\u540D\u5355\u7528\u6237</div>', '<p class="text">\u7531\u4E8E\u9ED1\u540D\u5355\u8BBE\u7F6E\uFF0C\u8BE5\u8BC4\u8BBA\u5DF2\u88AB\u9690\u85CF\u3002</p>', '<div class="info">', e.floor ? '<span class="floor">#' + e.floor + "</span>" : "", this._createPlatformDom(e.content.plat), '<span class="time">' + this._formateTime(e.ctime) + "</span>", locationSpan, this._canDel(e.mid) ? '<div class="operation btn-hover"><div class="spot"></div><div class="opera-list"><ul><li class="del" data-mid="' + e.mid + '">\u5220\u9664</li></ul></div></div>' : "", "</div>", "</div>"].join("")
        }
        g.prototype._subBlacklistDom = function(e) {
            var locationSpan = getLocationSpanByReply(e);
            return ['<div class="reply-item reply-wrap" data-id="' + e.rpid + '">', '<a class="reply-face"><img src="' + this.noface + '"></a>', '<div class="reply-con">', '<div class="user">', '<span class="blacklist-font-color name">\u9ED1\u540D\u5355\u7528\u6237 </span> <span class="text-con">\u7531\u4E8E\u9ED1\u540D\u5355\u8BBE\u7F6E\uFF0C\u8BE5\u56DE\u590D\u5DF2\u88AB\u9690\u85CF\u3002</span>', "</div>", "</div>", '<div class="info">', '<span class="time">' + this._formateTime(e.ctime) + "</span>", locationSpan, this._canDel(e.mid) ? '<div class="operation btn-hover btn-hide-re"><div class="spot"></div><div class="opera-list"><ul><li class="del" data-mid="' + e.mid + '">\u5220\u9664</li></ul></div></div>' : "", "</div>", "</div>"].join("")
        }
        g.prototype._createSubReplyItem = function(e, n) {
            var locationSpan = getLocationSpanByReply(e);
            var t = ['<div class="reply-item reply-wrap" data-id="' + e.rpid + '" data-index="' + n + '">', '<a href="//space.bilibili.com/' + e.mid + '" data-usercard-mid="' + e.mid + '" target="_blank" class="reply-face">', '<img src="' + f.trimHttp(f.webp(e.member.avatar, {
                w: 52,
                h: 52
            })) + '" alt="">', "</a>", '<div class="reply-con">', '<div class="user">', '<a href="//space.bilibili.com/' + e.mid + '" target="_blank" data-usercard-mid="' + e.mid + '" class="name ' + this._createVipClass(e.member.vip.vipType, e.member.vip.vipStatus, e.member.vip.themeType) + '">' + f.unhtml(e.member.uname) + "</a>", '<a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l' + e.member.level_info.current_level + '"></i></a>', this._createSubMsgContent(e), "</div>", "</div>", '<div class="info">', '<span class="time">' + this._formateTime(e.ctime) + "</span>", locationSpan, '<span class="like ' + (1 == e.action ? "liked" : "") + '"><i></i><span>' + (e.like || "") + "</span></span>", '<span class="hate ' + (2 == e.action ? "hated" : "") + '"><i></i></span>', '<span class="reply btn-hover">\u56DE\u590D</span>', '<div class="operation btn-hover btn-hide-re"><div class="spot"></div><div class="opera-list"><ul>' + (this._canBlackList(e.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : "") + (this._canReport(e.mid) ? '<li class="report">\u4E3E\u62A5</li>' : "") + (this._canDel(e.mid) ? '<li class="del" data-mid="' + e.mid + '">\u5220\u9664</li>' : "") + "</ul></div></div>", "</div>", "</div>"].join("");
            return f.browser.version.mobile && (t = ['<div class="reply-item reply-wrap" data-id="' + e.rpid + '" data-index="' + n + '">', '<div class="reply-con">', '<div class="user">', '<a href="//space.bilibili.com/' + e.mid + '" target="_blank" data-usercard-mid="' + e.mid + '" class="name ' + this._createVipClass(e.member.vip.vipType, e.member.vip.vipStatus, e.member.vip.themeType) + '">' + f.unhtml(e.member.uname) + "</a>", '<a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l' + e.member.level_info.current_level + '"></i>', '<div class="right"><span class="time">' + this._formateMobileTime(e.ctime) + "</span></div>", "</a>", this._createSubMsgContent(e), "</div>", '<div class="info">', '<span class="like ' + (1 == e.action ? "liked" : "") + '"><i></i><span>' + (e.like || "") + "</span></span>", '<span class="reply btn-hover">\u56DE\u590D</span>', '<div class="operation btn-hover btn-hide-re"><div class="spot"></div><div class="opera-list"><ul>' + (this._canBlackList(e.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : "") + (this._canReport(e.mid) ? '<li class="report">\u4E3E\u62A5</li>' : "") + (this._canDel(e.mid) ? '<li class="del" data-mid="' + e.mid + '">\u5220\u9664</li>' : "") + "</ul></div></div>", "</div>", "</div>", "</div>"].join("")),
                t
        }
    }

    function injectNewbbComment(){
        const bbComment = window.bbComment;
        // console.log("inject New ")
        bbComment.prototype._createListCon = function (item, i, pos) {
            //\u9ED1\u540D\u5355\u7ED3\u6784
            var blCon = this._parentBlacklistDom(item, i, pos); //\u6B63\u5E38\u7ED3\u6784


            var con = ['<div class="con ' + (pos == i ? 'no-border' : '') + '">', '<div class="user">' + this._createNickNameDom(item), this._createLevelLink(item), this._identity(item.mid, item.assist, item.member.fans_detail), this._createNameplate(item.member.nameplate) + this._createUserSailing(item) + '</div>', this._createMsgContent(item), this._createPerfectReply(item), '<div class="info">', this._createPlatformDom(item.content.plat), "<span class=\\"time-location\\">", "<span class=\\"reply-time\\">".concat(this._formateTime(item.ctime), "</span>"), getLocationSpanByReply(item),
                       "</span>", item.lottery_id ? '' : '<span class="like ' + (item.action == 1 ? 'liked' : '') + '"><i></i><span>' + (item.like ? item.like : '') + '</span></span>', item.lottery_id ? '' : '<span class="hate ' + (item.action == 2 ? 'hated' : '') + '"><i></i></span>', item.lottery_id ? '' : this._createReplyBtn(item.rcount), item.lottery_id && item.mid !== this.userStatus.mid ? '' : '<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>' + (this._canSetTop(item) ? '<li class="set-top">' + (item.isUpTop ? '\u53D6\u6D88\u7F6E\u9876' : '\u8BBE\u4E3A\u7F6E\u9876') + '</li>' : '') + (this._canBlackList(item.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : '') + (this._canReport(item.mid) ? '<li class="report">\u4E3E\u62A5</li>' : '') + (this._canDel(item.mid) && !item.isTop ? '<li class="del" data-mid="' + item.mid + '">\u5220\u9664</li>' : '') + '</ul></div></div>', this._createLotteryContent(item.content), this._createVoteContent(item.content), this._createTags(item), '</div>', '<div class="reply-box">', this._createSubReplyList(item.replies, item.rcount, false, item.rpid, item.folder && item.folder.has_folded, item.reply_control), '</div>', '<div class="paging-box">', '</div>', '</div>'].join('');

            if (utils.browser.version.mobile) {
                con = ['<div class="con ' + (pos == i ? 'no-border' : '') + '">', '<div class="user">' + this._identity(item.mid, item.assist, item.member.fans_detail), this._createNickNameDom(item), this._createLevelLink(item), this._createNameplate(item.member.nameplate) + '<div class="right">', '<span class="time">' + this._formateMobileTime(item.ctime) + '</span></div>', '</div>', this._createMsgContent(item), this._createVoteContent(item.content), '<div class="info">', this._createPlatformDom(item.content.plat), '<span class="like ' + (item.action == 1 ? 'liked' : '') + '"><i></i><span>' + (item.like ? item.like : '') + '</span></span>', '<span class="hate ' + (item.action == 2 ? 'hated' : '') + '"><i></i></span>', this._createReplyBtn(item.rcount), '<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>' + (this._canSetTop(item) ? '<li class="set-top">' + (item.isUpTop ? '\u53D6\u6D88\u7F6E\u9876' : '\u8BBE\u4E3A\u7F6E\u9876') + '</li>' : '') + (this._canBlackList(item.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : '') + (this._canReport(item.mid) ? '<li class="report">\u4E3E\u62A5</li>' : '') + (this._canDel(item.mid) && !item.isTop ? '<li class="del" data-mid="' + item.mid + '">\u5220\u9664</li>' : '') + '</ul></div></div>', '</div>', this._createTags(item), '<div class="reply-box">', this._createSubReplyList(item.replies, item.rcount, false, item.rpid, item.folder && item.folder.has_folded, item.reply_control), '</div>', '<div class="paging-box">', '</div>', '</div>'].join('');
            }

            return item.state === this.blacklistCode ? blCon : con;
        };
        bbComment.prototype._createSubReplyItem = function (item, i) {
            if (item.invisible) {
                return '';
            }

            var dom = ['<div class="reply-item reply-wrap" data-id="' + item.rpid + '" data-index="' + i + '">', this._createSubReplyUserFace(item), // '<a href="//space.bilibili.com/' + item.mid + '" data-usercard-mid="' + item.mid + '" target="_blank" class="reply-face">',
                       // '<img src="' + utils.trimHttp(utils.webp(item.member.avatar, { w: 52, h: 52, freeze: true })) + '" alt="">',
                       // '</a>',
                       '<div class="reply-con">', '<div class="user">', this._createNickNameDom(item), this._createLevelLink(item), this._identity(item.mid), this._createSubMsgContent(item), '</div>', '</div>', '<div class="info">', "<span class=\\"time-location\\">", "<span class=\\"reply-time\\">".concat(this._formateTime(item.ctime), "</span>"), getLocationSpanByReply(item),
                       "</span>", '<span class="like ' + (item.action == 1 ? 'liked' : '') + '"><i></i><span>' + (item.like ? item.like : '') + '</span></span>', '<span class="hate ' + (item.action == 2 ? 'hated' : '') + '"><i></i></span>', '<span class="reply btn-hover">\u56DE\u590D</span>', '<div class="operation btn-hover btn-hide-re"><div class="spot"></div><div class="opera-list"><ul>' + (this._canBlackList(item.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : '') + (this._canReport(item.mid) ? '<li class="report">\u4E3E\u62A5</li>' : '') + (this._canDel(item.mid) ? '<li class="del" data-mid="' + item.mid + '">\u5220\u9664</li>' : '') + '</ul></div></div>', '</div>', '</div>'].join('');

            if (utils.browser.version.mobile) {
                dom = ['<div class="reply-item reply-wrap" data-id="' + item.rpid + '" data-index="' + i + '">', // '<a href="//space.bilibili.com/' + item.mid + '" data-usercard-mid="' + item.mid + '" target="_blank" class="reply-face">',
                           // '<img src="' + utils.trimHttp(utils.webp(item.member.avatar, {w: 52, h: 52})) +'" alt="">',
                           // '</a>',
                           '<div class="reply-con">', '<div class="user">', this._createNickNameDom(item), this._createLevelLink(item), this._identity(item.mid), '<div class="right"><span class="time">' + this._formateMobileTime(item.ctime) + '</span></div>', '</a>', this._createSubMsgContent(item), '</div>', '<div class="info">', '<span class="like ' + (item.action == 1 ? 'liked' : '') + '"><i></i><span>' + (item.like ? item.like : '') + '</span></span>', '<span class="reply btn-hover">\u56DE\u590D</span>', '<div class="operation btn-hover btn-hide-re"><div class="spot"></div><div class="opera-list"><ul>' + (this._canBlackList(item.mid) ? '<li class="blacklist">\u52A0\u5165\u9ED1\u540D\u5355</li>' : '') + (this._canReport(item.mid) ? '<li class="report">\u4E3E\u62A5</li>' : '') + (this._canDel(item.mid) ? '<li class="del" data-mid="' + item.mid + '">\u5220\u9664</li>' : '') + '</ul></div></div>', '</div>', '</div>', '</div>'].join('');
            }

            return dom;
    }




    }




    // \u4F7F\u7528 setter \u76D1\u542C comment \u811A\u672C\u7684\u6CE8\u518C
    let f = undefined;
    Object.defineProperty(window,'bbComment',{
        get: function(){
            return f;
        },

        set: function(val){
            f = val;
            injectbbComment();
        },
        configurable: true,
    });



    function hack(origin, ...args){
        const [ele, target] = [...args];
        if( ele.src && ~ele.src.indexOf("/x/v2/reply")){
            // \u786E\u5B9A\u662F\u8BC4\u8BBA\u7C7B\u578B\uFF0C\u6267\u884C\u989D\u5916\u6D41\u7A0B
            injectbbComment()
        }

        // \u76D1\u542C comment \u7EC4\u4EF6\u7684\u6CE8\u5165
        if(ele.src && ele.src.endsWith("comment.min.js")){
            const ori = ele.onload;
            ele.onload = function(...args){
                injectbbComment();
                ori && ori(...args);
            }
        };


        // \u76D1\u542C comment_vue_next \u7EC4\u4EF6\u7684\u6CE8\u5165\uFF0C\u76F4\u63A5\u5728dynamic import \u65F6\u4FEE\u6539\u6E90\u7801\uFF0C\u4E5F\u662F\u4E00\u79CD\u6743\u5B9C\u4E4B\u8BA1\uFF0C\u8BE5\u7248\u672C\u9488\u5BF9Vue3\u67B6\u6784
        if(ele.src && ele.src.endsWith("comment-pc-vue.next.js")){

            // console.log("\u65B0\u7248\u8BC4\u8BBA\uFF0C\u542F\u7528\u6E90\u7801\u6CE8\u5165");
            !(async function(){
                let code = await (await fetch(ele.src)).text();

                const Ref1Index = code.indexOf("getReplyFloorInfo=");
                const Ref2Index = code.indexOf("getReplyBoxStatus=");
                if( Ref2Index > Ref1Index && Ref1Index > -1){

                    code = code.replace(\`getReplyFloorInfo=\`,\`_RAWgetReplyFloorInfo=\`);
                    code = code.replace(\`getReplyBoxStatus=\`,\`getReplyFloorInfo=Q=>{return {
                        ..._RAWgetReplyFloorInfo(Q),
                        replyLocation: computed(()=>{ return Q.value.reply_control.location || ""})
                      }
                    },getReplyBoxStatus=\`);
                }else{
                    console.error("\u3010BiliToolkit \u8BC4\u8BBA\u533A\u5C5E\u5730\u3011Patch \u5931\u8D25\u3010Vue3 \u7248\u672C\u3011\uFF0C\u65E0\u6CD5\u627E\u5230\u6B63\u786E\u7684 Patch \u4F4D\u7F6E\uFF0C\u8BF7\u53CD\u9988\u540E\u7B49\u5F85\u5F00\u53D1\u8005\u4FEE\u590D");
                }

                eval(code);

                ele.dispatchEvent(new Event("load",{
                    bubbles:true,
                }));
                ele.onload && ele.onload();

            })();

            return;
        };
        // \u9488\u5BF9 lit \u67B6\u6784\u7684
        if(ele.src && (ele.src.endsWith("comment-pc-elements.next.js") || (ele.src.indexOf("commentpc/bili-comments.") > -1))){

            //console.log("\u65B0\u7248\u8BC4\u8BBA\uFF0C\u542F\u7528\u6E90\u7801\u6CE8\u5165");
            !(async function(){
                let code = await (await fetch(ele.src)).text();

                const Ref1Index = code.indexOf(\`<div id="pubdate">','</div>\`);

                const Ref2Index = code.indexOf("this.pubDate,this.handleLike,");
                if( Ref2Index > Ref1Index  && Ref1Index >-1){

                    //ref 1
                    code = code.replace(\`<div id="pubdate">','</div>\`, \`<div id="pubdate">','</div><div id="location" class="btk-comment-location" style="margin-left:var(--kaihe-ml, 20px)">','</div>\`);

                    //ref 2
                    code = code.replace(\`this.pubDate,this.handleLike,\`,\`this.pubDate,(this.data && this.data.reply_control)? this.data.reply_control.location : null,this.handleLike,\`);
                }else{
                    console.error("\u3010BiliToolkit \u8BC4\u8BBA\u533A\u5C5E\u5730\u3011Patch \u5931\u8D25\u3010Elements-lit\u7248\u672C\u3011\uFF0C\u65E0\u6CD5\u627E\u5230\u6B63\u786E\u7684 Patch \u4F4D\u7F6E\uFF0C\u8BF7\u53CD\u9988\u540E\u7B49\u5F85\u5F00\u53D1\u8005\u4FEE\u590D");
                }

                eval(code);

                ele.dispatchEvent(new Event("load",{
                    bubbles:true,
                }));
                ele.onload && ele.onload();

            })();

            return;
        };


        //console.log(ele,ele.src,origin)
        let res = origin(...args);
        //console.log(res)
        return res;
        //return ele;
    }


})();
})();
`;

  // src/modules/viewed/legacy-viewed.ts
  var import_jquery = __toESM(require_jquery(), 1);

  // src/core/info-log.ts
  var rootId = "bili-atelier-info-log";
  var styleId = "bili-atelier-info-log-style";
  var maxItems = 6;
  function ensureInfoLogStyle() {
    ensureAppearance();
    if (document.getElementById(styleId)) {
      return;
    }
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
#${rootId} {
  position: fixed;
  top: 84px;
  right: 24px;
  z-index: 2147483640;
  width: min(360px, calc(100vw - 32px));
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  pointer-events: none;
  font: 13px/1.45 Tahoma, "Microsoft YaHei", sans-serif;
}
#${rootId} .bili-atelier-info-log-item {
  box-sizing: border-box;
  max-width: 100%;
  min-width: 180px;
  padding: 9px 12px;
  border: 1px solid var(--atelier-edge);
  border-left: 4px solid var(--atelier-accent);
  border-radius: 2px;
  background: var(--atelier-panel);
  color: var(--atelier-ink);
  box-shadow: inset 1px 1px var(--atelier-highlight), 2px 3px 6px #0003;
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity .24s ease, transform .24s ease, max-height .28s ease, padding .28s ease, margin .28s ease;
  overflow: hidden;
  overflow-wrap: anywhere;
}
#${rootId} .bili-atelier-info-log-item.is-visible {
  opacity: .96;
  transform: translateY(0);
}
#${rootId} .bili-atelier-info-log-item.is-leaving {
  max-height: 0 !important;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  opacity: 0;
  transform: translateY(-6px);
}
#${rootId} .bili-atelier-info-log-success { border-left-color: var(--atelier-accent); }
#${rootId} .bili-atelier-info-log-warning { border-left-color: #f7b500; }
#${rootId} .bili-atelier-info-log-error { border-left-color: var(--atelier-danger); }
`;
    (document.head || document.documentElement).appendChild(style);
  }
  function ensureInfoLogRoot() {
    if (!document.body) {
      return null;
    }
    ensureInfoLogStyle();
    let root = document.getElementById(rootId);
    if (!root) {
      root = document.createElement("div");
      root.id = rootId;
      root.setAttribute("data-bili-blocker-ui", "true");
      root.setAttribute("data-bili-atelier-ui", "info-log");
      root.setAttribute("role", "status");
      root.setAttribute("aria-live", "polite");
      document.body.appendChild(root);
    }
    return root;
  }
  function showInfoLog(message, tone = "info", durationMs = 3600) {
    const text2 = String(message || "").replace(/\s+/g, " ").trim();
    if (!text2) {
      return;
    }
    const root = ensureInfoLogRoot();
    if (!root) {
      document.addEventListener("DOMContentLoaded", () => showInfoLog(text2, tone, durationMs), { once: true });
      return;
    }
    const item = document.createElement("div");
    item.className = `bili-atelier-info-log-item bili-atelier-info-log-${tone}`;
    item.textContent = text2;
    root.prepend(item);
    item.style.maxHeight = `${Math.max(48, item.scrollHeight + 20)}px`;
    window.requestAnimationFrame(() => item.classList.add("is-visible"));
    while (root.children.length > maxItems) {
      root.lastElementChild?.remove();
    }
    window.setTimeout(() => {
      item.classList.add("is-leaving");
      window.setTimeout(() => item.remove(), 320);
    }, durationMs);
  }

  // src/ui/dialogs.ts
  var pending = Promise.resolve();
  function atelierDialog(options) {
    const run = () => new Promise((resolve) => {
      ensureLunaTheme();
      const before = document.activeElement;
      const dialog = document.createElement("dialog");
      dialog.className = "atelier-dialog";
      dialog.setAttribute("data-bili-blocker-ui", "");
      const heading = document.createElement("h2");
      heading.id = "atelier-dialog-title";
      heading.textContent = options.title;
      dialog.setAttribute("aria-labelledby", heading.id);
      const message = document.createElement("p");
      message.textContent = options.message;
      const body = document.createElement("div");
      body.className = "atelier-dialog-body";
      body.append(message);
      let input;
      if (options.input !== void 0) {
        input = document.createElement(options.multiline ? "textarea" : "input");
        input.value = options.input;
        input.readOnly = !!options.readOnly;
        input.setAttribute("aria-label", options.title);
        body.append(input);
      }
      const actions = document.createElement("div");
      actions.className = "atelier-dialog-actions";
      let settled = false;
      const cleanupPixels = observePixelLabels(dialog);
      const finish = (result2) => {
        if (settled) return;
        settled = true;
        cleanupPixels();
        dialog.remove();
        if (before?.isConnected) before.focus();
        resolve(result2);
      };
      const add = (label, value, parent = actions) => {
        const button3 = document.createElement("button");
        button3.type = "button";
        button3.className = "atelier-control";
        button3.textContent = label;
        button3.addEventListener("click", () => {
          sound("click");
          finish(value());
        });
        parent.append(button3);
        return button3;
      };
      if (options.choices) {
        const choices = document.createElement("div");
        choices.className = "atelier-dialog-choices";
        for (const choice of options.choices) add(choice.label, () => choice.value, choices);
        body.append(choices);
      } else add(options.confirmLabel || (options.readOnly || options.alert ? "\u5173\u95ED" : "\u786E\u5B9A"), () => input?.value ?? "ok");
      if (!options.alert && !options.readOnly) add("\u53D6\u6D88", () => null);
      dialog.append(heading, body, actions);
      dialog.addEventListener("cancel", (event) => {
        event.preventDefault();
        finish(null);
      });
      dialog.addEventListener("keydown", (event) => {
        event.stopPropagation();
        if (event.key === "Escape") {
          event.preventDefault();
          finish(null);
        }
        if (event.key === "Enter" && event.target === input && !options.multiline) {
          event.preventDefault();
          finish(input.value);
        }
      });
      document.body.append(dialog);
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
      (input || dialog.querySelector("button"))?.focus();
      if (options.readOnly) input?.select();
    });
    const result = pending.then(run, run);
    pending = result;
    return result;
  }
  async function atelierConfirm(message, title = "\u786E\u8BA4\u64CD\u4F5C") {
    return await atelierDialog({ title, message }) !== null;
  }
  function atelierAlert(message, title = "\u64CD\u4F5C\u63D0\u793A") {
    return atelierDialog({ title, message, alert: true });
  }
  function atelierPrompt(message, value = "", readOnly = false) {
    return atelierDialog({ title: readOnly ? "\u5BFC\u51FA\u6570\u636E" : "\u5BFC\u5165\u6570\u636E", message, input: value, multiline: true, readOnly });
  }

  // src/modules/viewed/legacy-viewed.ts
  function startViewedMarker() {
    const jq = import_jquery.default;
    if (jq.fn && !jq.fn.size) {
      jq.fn.size = function() {
        return this.length;
      };
    }
    var opacityIsViewCover = 0.45;
    var opacitybtnView = 0.8;
    var opacitybtnIsView = 0.8;
    var GM_addStyle = function(css) {
      var style = document.createElement("style");
      style.type = "text/css";
      style.appendChild(document.createTextNode(css));
      document.getElementsByTagName("head")[0].appendChild(style);
    };
    let staticStyle = `
.btnView{opacity:` + opacitybtnView + `;position:absolute;left:0;top:0;z-index:2;}
.btnIsView{opacity:` + opacitybtnIsView + `;}
.btnView:hover,.btnIsView:hover{opacity:1;}
.btnSetAllViewed,.btnRefresh{display:inline-block;word-break:keep-all;}`;
    var searchStyle = `
/*\u641C\u7D22\u7ED3\u679C\u9875*/
/*\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u64CD\u4F5C\u6309\u94AE\uFF1A\u9ED8\u8BA4\u6837\u5F0F*/
.btnList{display:inline-block;}
.btnListSave{display:none;}
.viewList{box-sizing:border-box;width:100%;height:120px;margin:10px 0;display:none;color:var(--atelier-ink);background:var(--atelier-field);border:1px solid var(--atelier-edge);padding:6px;font:13px/1.5 Tahoma,"Microsoft YaHei",sans-serif;}
/*202501\u7248\u672C\uFF1A\u6309\u94AE\u4F4D\u7F6E\u5FAE\u8C03*/
.btnList{position:absolute;top:11px;right:0;}
.btnListSave{position:absolute;top:11px;right:83px;}
/*202504\u7248\u672C\uFF1A\u6309\u94AE\u4F4D\u7F6E\u5FAE\u8C03*/
.search-input .search-input-container .search-input-wrap{margin:0 10px 0 0;}
/*202501\u7248\u672C\uFF1A\u756A\u5267\u641C\u7D22\u7ED3\u679C*/
.media-card-content-footer-btns{height:45px!important;}
.p_relativeSpan{position:relative;padding:0 0 22px;display:inline-block;}
.p_relativeSpan .btnView{left:-1px;top:unset;bottom:0;position:absolute;border:none;}
.media-footerClone{position:absolute;}
.media-footerClone a{margin-right:8px;}
.media-footerClone .media-footer-badge{top:-14px;}
.bangumi-pgc-list .media-item{overflow-y:auto;}
.media-card>.btnView{left:8px;}
.media-card-image-follow[data-v-402c7b9e]{top:22px;}
/*202501\u7248\u672C\uFF1A\u7EFC\u827A\u641C\u7D22\u7ED3\u679C*/
.selConSpan{position:relative;}
.selConSpan .btnView{top:8px;left:4px;}
.media-footer-select-content-item{padding:0 6px 0 48px!important;}
`;
    const spaceStyle = `
/*\u522B\u4EBA\u7684\u7A7A\u95F4\u9875\uFF1Aspace.bili*/
.btnRefresh{margin:0 0 0 16px;line-height:20px;}
.n-inner .btnRefresh{top:5px;position:relative;}
/*202503\u9009\u65E7\u7248\uFF1A\u3010\u4E3B\u9875\u3011TA\u7684\u89C6\u9891\u3001\u5408\u96C6\xB7XXXX*/
.small-item .cover{background:none!important;}
.small-item .btnView{top:10px;left:10px;}
/*202503\u9009\u65E7\u7248\uFF1A\u3010\u4E3B\u9875\u3011TA\u7684\u89C6\u9891*/
#page-index .video .small-item:nth-child(4n+1) .btnView{left:0;}
/*202503\u9009\u65E7\u7248\uFF1A\u3010\u4E3B\u9875\u3011\u5408\u96C6\xB7XXXX*/
.channel-video .small-item:nth-child(4n+1) .btnView{left:0;}
/*202503\u9009\u65B0\u7248or\u9009\u65E7\u7248\uFF1A\u3010\u52A8\u6001\u3011*/
.bili-dyn-content__orig__major{position:relative;}
/*202503\u9009\u65E7\u7248\uFF1A\u3010\u6295\u7A3F\u3011list\u6A21\u5F0F*/
#submit-video-list .list-list .btnView{top:20px;left:0;}
/*202503\u9009\u65E7\u7248\uFF1A\u3010\u5408\u96C6\u548C\u5217\u8868\u3011list\u6A21\u5F0F*/
.series-item .btnView{top:10px;left:10px;}
/*202503\u9009\u65E7\u7248\uFF1A\u3010\u5408\u96C6\u548C\u5217\u8868\u3011\u67D0\u4E2A\u5408\u96C6\u70B9\u201C\u66F4\u591A\u201D*/
.channel-detail .btnView{top:20px;}
  /*202503\u9009\u65E7\u7248\uFF1A\u3010\u6536\u85CF\u3011*/
  .fav-video-list .btnView{top:0;left:0;z-index:9;}
  /*202606\u65B0\u7248\u4E2A\u4EBA\u9875\u89C6\u9891\u5361\u7247*/
  .bili-video-card,.bili-video-card__wrap,.upload-video-card,.space-video-card,.video-card{position:relative;}
  `;
    const historyStyle = `
/*\u5386\u53F2\u9875*/
/*202501\u7248\u672C*/
.btnView{left:unset;right:0;}
.btnSetAllViewed,.btnRefresh{line-height:22px;margin-right:16px;}
`;
    var videoStyle = `
/*\u89C6\u9891\u89C2\u770B\u9875*/
/*202501\u7248\u672C\uFF1A\u4E3B\u89C6\u9891-\u4FE1\u606F\u680F*/
.video-info-detail-list .pubdate-ip .btnView{position:unset;margin:0 0 0 10px;border:none;width:35px;}
/*202501\u7248\u672C\uFF1A\u64AD\u653E\u7ED3\u675F\u540E\u51FA\u73B0\u7684\u63A8\u8350\u89C6\u9891*/
.bpx-player-ending-related-itemDiv{position:relative;float:left}
.bpx-player-ending-related-itemDiv .btnView{opacity:0.9;}
.bpx-player-ending-related-itemDiv .btnIsView{opacity:0.7;}
/*202501\u7248\u672C\uFF1A\u4E3B\u89C6\u9891\u4E0B\u65B9\u5DE5\u5177\u680F\uFF08\u201C\u5237\u65B0\u201D\u6309\u94AE\u8BBE\u7F6E\uFF09*/
.video-toolbar-right .btnRefresh{line-height:22px;}
/*202501\u7248\u672C\uFF1A\u8BA2\u9605\u5408\u96C6or\u89C6\u9891\u9009\u96C6\uFF08\u5206P\u89C6\u9891\u5217\u8868\uFF09\uFF1B\u5E26\u5C01\u9762or\u7EAF\u6807\u9898*/
.normal-base-item .cover,.simple-base-item{position:relative;}
.simple-base-item .btnView{top:4px;left:4px;}
.simple-base-item.normal,.simple-base-item.head{padding:0 10px 0 48px;}
.page-list .page-item{padding:0 10px 0 65px;}
.page-list .page-item .btnView{left:20px;}
/*202501\u7248\u672C\uFF1A\u89C6\u9891\u9009\u96C6\uFF08\u5206P\u89C6\u9891\u5217\u8868\uFF09grid\u6A21\u5F0F\uFF1A\u6570\u5B57\u6807\u9898*/
.rcmd-tab .video-pod .video-pod__body .video-pod__list.multip.grid>.page{padding-bottom:25px;height:50px;position:relative;}
.rcmd-tab .video-pod .video-pod__body .video-pod__list.multip.grid>.page .btnView{position:absolute;bottom:0;top:unset;left:6px;width:32px;}
`;
    var videoMainOnlyStyle = `
/*\u89C6\u9891\u89C2\u770B\u9875\uFF1A\u4EC5\u8BBE\u7F6E\u4E3B\u89C6\u9891\u548C\u63A8\u8350\u5C01\u9762\u7684\u6807\u8BB0\u6837\u5F0F*/
.video-info-detail-list .pubdate-ip .btnView,.video-info-meta .pubdate-ip .btnView{position:unset;margin:0 0 0 10px;border:none;width:35px;}
.card-box .pic{position:relative;}
`;
    var festivalVideoStyle = `
/*202303\u6D3B\u52A8\u89C6\u9891\u64AD\u653E\u9875*/
.video-section-title{z-index:3!important;}
.video-episode-card__cover .btnView{line-height:12px;width:25px;} /*\u8DDF\u89C6\u9891\u9875\u91CD\u590D\u7684*/
.recommend-video-card{position:relative;}
.recommend-video-card .btnView{right:unset;top:6px;line-height:12px;width:25px;}
.video-toolbar-content_right .btnRefresh{position:relative;top:0;right:15px;line-height:21px;border-radius:2px;}
.video-toolbar-content_left .btnView{position:relative;line-height:16px;height:16px;top:9px;}`;
    var watchlaterStyle = `
/*\u7A0D\u540E\u518D\u770B-\u5217\u8868\u9875*/
/*202501\u7248\u672C*/
.btnView{left:unset;right:0;z-index:201;}
.btnSetAllViewed,.btnRefresh{font-size:14px;line-height:22px;}
`;
    var listPlayStyle = `
/*\u7A0D\u540E\u518D\u770B-\u89C6\u9891\u89C2\u770B\u9875*/
.tip-info .btnRefresh{font-size:12px;position:absolute;right:0;}
.player-auxiliary-playlist-item{position:relative;}
.player-auxiliary-playlist-item .btnView{position:absolute;top:6px;left:65px;}
.player-auxiliary-playlist-item:first-child .btnView{top:0;}
/*\u7A0D\u540E\u518D\u770B-\u89C6\u9891\u89C2\u770B\u9875at202303*/
.main .btnView{left:0;width:25px;line-height:12px;}
.multip-list-item .left-part{position:relative;padding:0 0 0 40px;}
.multip-list .multip-list-item-active[data-v-079b367a]{padding:0 10px;}
.multip-list-item .btnView{left:0;width:25px;line-height:12px;}
.video-info-detail-list .btnView{position:unset;margin:0;border:none;width:35px;}
.video-toolbar-right .btnRefresh{right:0;top:0;position:relative;}
/*202501\u7248\u672C*/
.video-info-detail-list .pubdate-ip .btnView{position:unset;margin:0 0 0 10px;border:none;width:35px;}
`;
    var popularStyle = `
/*\u7EFC\u5408\u70ED\u95E8\u3001\u6BCF\u5468\u5FC5\u770B\u3001\u5165\u7AD9\u5FC5\u5237*/
.popular-video-container .btnView{width:40px}
.weekly-list .weekly-header .panel{z-index:2;}
/*\u6392\u884C\u699C*/
.popular-container .rank-container .rank-list .rank-item .btnView{font-size:14px;width:45px;height:24px;}
/*\u5168\u7AD9\u97F3\u4E50\u699C*/
._card_1kuml_6 .btnView{top:unset;left:12px;bottom:72px;border:1px solid #999;font-size:12px;}
/*\u77ED\u5267\u699C*/
.drama-board-listClone{justify-content:space-between;flex-wrap:wrap;display:flex;height:0;}
.board-item-wrapDiv{margin-bottom:30px;position:relative;float:left;}
.board-item-wrapDiv .btnView{right:unset;top:16px;left:182px;}`;
    var indexStyle = `
/*\u4E3B\u7AD9\u9996\u9875*/
/*202501\u7248\u672C*/
`;
    var channelStyle = `
/*\u9891\u9053*/
.card-list .btnView{left:unset;top:0;right:0;width:40px;}`;
    var bangumiStyle = `
/*bangumi\u89C6\u9891\u89C2\u770B\u9875*/
.toolbar_toolbar__NJCNy .btnRefresh{right:0;cursor:pointer;}
/*202403\u7248\u672C*/
.toolbar .btnRefresh{right:0;top:14px;cursor:pointer;}

/*\u4E3B\u89C6\u9891*/
.toolbar_toolbar__NJCNy .btnView{right:unset;width:36px;top:20px;border:none;}
/*202403\u7248\u672C*/
.toolbar .btnView{right:60px;width:36px;top:19px;border:none;}

/*\u53F3\u4FA7\u4E0A \u6B63\u7247\u5217\u8868 list\u6A21\u5F0F*/
.longListItem_wrap__9OsZi .btnView{right:unset;position:relative;width:36px;margin:0 7px 0 0;}
/*\u53F3\u4FA7\u4E0A \u6B63\u7247\u5217\u8868 cube\u6A21\u5F0F*/
.numberListItem_number_list_item__wszA4 a{height:18px;}
.numberListItem_number_list_item__wszA4 .btnView{width:32px;padding:0;border-radius:1px;right:unset;left:0;border:none;}
/*\u53F3\u4FA7\u4E2D PV&\u5176\u4ED6*/
.epitem_ep_item__CPdZy .btnView{width:36px;height:24px;position:relative;float:left;margin:3px 5px 0 0;text-align:center;color:#aaa;}
.epitem_ep_item__CPdZy .btnView:hover{color:#fff;background:#aaa;}
/*\u53F3\u4FA7\u4E0B \u7CFB\u5217*/
.seasonlist_ss_info__Yc7YV{width:130px;}
.seasonlist_ss_item__czhHy .btnView{height:24px;width:40px;position:relative;right:280px;}
/*\u53F3\u4FA7\u4E0B \u76F8\u5173\u63A8\u8350*/
.RecommendItem_wrap__pJmXL{position:relative;}
.RecommendItem_wrap__pJmXL .btnView{height:22px;width:40px;position:absolute;right:unset;}
.RecommendItem_wrap__pJmXL .RecommendItem_cover__Rc3y2{background:none;}`;
    var cheeseStyle = `
/*\u8BFE\u5802\u5206\u533A\u9996\u9875*/
.block-list-item{position:relative;}
.rank dd{position:relative;}
.rank dd .btnView{right:unset;left:28px;line-height:12px;width:25px;}
.common-lazy-img{background:none;}
/*\u8BFE\u7A0B\u5206\u7C7B\u67E5\u627E\u9875*/
.big-card .btnView{right:unset;left:0;}`;
    var cheesePlayStyle = `
/*\u8BFE\u7A0B\u89C6\u9891\u89C2\u770B\u9875*/
.section-item .btnView{line-height:12px;width:25px;left:2px;bottom:7px;top:unset;border:none;}
.layout-r .btnRefresh{position:relative;top:0;right:0;cursor:pointer;line-height:24px;margin:0 0 0 10px;}
.layout-l .btnView{position:relative;border:none;}
/*\u53F3\u4FA7\u4E0B \u76F8\u5173\u63A8\u8350*/
.season-recommend-card{position:relative;}
.season-recommend-card .btnView{right:unset;line-height:12px;width:25px;}`;
    var areaStyle = `
/*\u5404\u5206\u533A\u9996\u9875or\u9996\u9875\u53F3\u4FA7\u7684\u6392\u884C\u699C*/
.bili-rank-list-video__item--wrap{position:relative;}
.bili-rank-list-video__item--wrap .btnView{right:-8px;color:#aaa;border:1px solid #aaa;}
.bili-rank-list-cheese__item--wrap .btnView{color:#aaa;border:1px solid #aaa;}
.bili-rank-list-ogv__item--wrap .btnView{color:#aaa;border:1px solid #aaa;}`;
    var varietyStyle = `
/*\u7EFC\u827A\u5206\u533A\u9996\u9875*/
.side-item{position:relative;}
.side-item .btnView{width:25px;line-height:12px;}
.hot-item{position:relative;}
.column-itemDiv{-webkit-box-flex:1;flex:1;margin:0 16px 0 0;border-radius:8px;overflow:hidden;position:relative;}
.column-itemDiv .btnView{right:unset;left:0;}
.hover-item .btnView{right:unset;z-index:3;}
.web_rank_v2 .hover-item .btnView{right:0;}
/*\u7EFC\u827A\u7D22\u5F15*/
.bangumi-item{position:relative;}
.bangumi-item .btnView{right:unset;left:0;}`;
    var guochangStyle = `
/*\u56FD\u521B*/
.progress-bar-content .btnView{top:4px;right:4px;border-radius:7px;}
.timeline-weekday-hover-item .btnView{z-index:10;right:unset;}
.ranking-ratio-item-container .btnView{z-index:10;right:unset;}
/*\u56FD\u521B\uFF1A\u4E8C\u7EA7\u5206\u533A*/
.spread-module .lazy-img{background:none;}
.spread-module .btnView{width:25px;line-height:12px;}
.sec-rank .rank-item .btnView{width:25px;line-height:12px;right:unset;}
.rank-list .rank-item.show-detail .ri-detail{padding:0 0 0 40px;}
.rank-list .rank-item.show-detail.highlight .ri-detail{padding:0;}
.rank-list .rank-item.show-detail a:hover .ri-detail{padding:0;}
/*\u56FD\u521B\uFF1A\u7D22\u5F15*/
.bangumi-item{position:relative;}
.bangumi-item .btnView{right:unset;}
.bangumi-item .common-lazy-img{background:none;}
.rank-item .lazy-img{background:none;}`;
    let setMethod = null;
    let currentPageKind = "";
    let mainVideoEarlyTimers = [];
    let viewVideoList = null;
    const btnRefresh = (0, import_jquery.default)("<a class='btnRefresh' title='\u5982\u679C\u5217\u8868\u6CA1\u51FA\u73B0\u5DF2\u770B/\u672A\u770B\u6807\u8BC6\uFF0C\u8BF7\u624B\u52A8\u70B9\u51FB\u8FD9\u4E2A\u6309\u94AE\u8FDB\u884C\u5237\u65B0'>\u5237\u65B0</a>");
    let btnSetAllViewed = null;
    var clearMainVideoEarlyTimers = function() {
      for (var i = 0; i < mainVideoEarlyTimers.length; i++) {
        clearTimeout(mainVideoEarlyTimers[i]);
      }
      mainVideoEarlyTimers = [];
    };
    var setMainVideoViewedEarly = function() {
      if (currentPageKind != "video" && currentPageKind != "listPlay") {
        return false;
      }
      if ((0, import_jquery.default)(".video-info-meta .btnView,.video-info-detail-list .pubdate-ip .btnView").length > 0) {
        clearMainVideoEarlyTimers();
        return true;
      }
      var infoObj = (0, import_jquery.default)(".video-info-meta");
      var pubdateObj = infoObj.find(".pubdate-ip:first");
      if (infoObj.length == 0 || pubdateObj.length == 0 || !infoObj.is(":visible") || !pubdateObj.is(":visible")) {
        return false;
      }
      var bvid2 = getCurrentPageBvid();
      if (!bvid2) {
        return false;
      }
      setVideoIsViewed(infoObj, ".pubdate-ip", 0, bvid2, true);
      setBtnView();
      clearMainVideoEarlyTimers();
      return (0, import_jquery.default)(".video-info-meta .btnView,.video-info-detail-list .pubdate-ip .btnView").length > 0;
    };
    var scheduleMainVideoEarlyViewed = function() {
      clearMainVideoEarlyTimers();
      var delays = [300, 600, 900, 1200, 1800, 2400];
      for (var i = 0; i < delays.length; i++) {
        mainVideoEarlyTimers.push(setTimeout(function() {
          setMainVideoViewedEarly();
        }, delays[i]));
      }
    };
    const recommendationHrefs = /* @__PURE__ */ new WeakMap();
    function setVideoRecommendationViewed(pic) {
      var target = (0, import_jquery.default)(pic);
      var href = target.is("a[href]") ? target.attr("href") : target.find("a[href]:first").attr("href");
      if (recommendationHrefs.has(pic) && recommendationHrefs.get(pic) !== href) {
        target.children(".btnView").remove();
        target.find("img:first").css("opacity", "1");
      }
      recommendationHrefs.set(pic, href);
      if (href) {
        setVideoIsViewed(target, coverItemClass, 2, href);
        setBtnView();
      }
    }
    let videoRecommendationsObserver = null;
    function observeVideoRecommendations() {
      if (videoRecommendationsObserver) {
        return;
      }
      const selector = ".card-box .pic";
      const pending2 = /* @__PURE__ */ new Set();
      let timer2 = null;
      const enqueue2 = (node) => {
        if (!(node instanceof Element)) {
          return;
        }
        const pic = node.closest(selector);
        if (pic) {
          pending2.add(pic);
        }
        for (const child of node.querySelectorAll(selector)) {
          pending2.add(child);
        }
        if (pending2.size && timer2 === null) {
          timer2 = setTimeout(() => {
            timer2 = null;
            const cards = [...pending2];
            pending2.clear();
            if (currentPageKind !== "video") {
              return;
            }
            for (const card of cards) {
              if (card.isConnected) {
                setVideoRecommendationViewed(card);
              }
            }
          }, 80);
        }
      };
      videoRecommendationsObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.target instanceof Element && mutation.target.closest(".btnView")) {
            continue;
          }
          if (mutation.type === "attributes" || mutation.removedNodes.length) {
            const pic = mutation.target instanceof Element && mutation.target.closest(selector);
            if (pic) enqueue2(pic);
          }
          for (const node of mutation.addedNodes) {
            if (node instanceof Element && !node.matches(".btnView")) enqueue2(node);
          }
        }
      });
      videoRecommendationsObserver.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ["href"] });
      enqueue2(document.documentElement);
    }
    function scheduleHistoryPageScans() {
      var delays = [250, 750, 1500, 3e3];
      for (var i = 0; i < delays.length; i++) {
        (function(delayMs) {
          setTimeout(function() {
            if (setMethod == setHistoryPage) {
              setMethod();
            }
          }, delayMs);
        })(delays[i]);
      }
    }
    let spaceStartupObserver = null;
    let spaceObservedRefreshTimer = null;
    function scheduleSpacePageScans() {
      var delays = [80, 180, 350, 700, 1200, 2e3];
      for (var i = 0; i < delays.length; i++) {
        (function(delayMs) {
          setTimeout(function() {
            if (setMethod == setSpacePage) {
              setMethod();
            }
          }, delayMs);
        })(delays[i]);
      }
    }
    function scheduleSpaceObservedRefresh() {
      if (setMethod != setSpacePage || spaceObservedRefreshTimer != null) {
        return;
      }
      spaceObservedRefreshTimer = setTimeout(function() {
        spaceObservedRefreshTimer = null;
        if (setMethod == setSpacePage) {
          setMethod();
        }
      }, 80);
    }
    function isSpaceRenderNode(node) {
      if (!node || node.nodeType != 1) {
        return false;
      }
      var el = node;
      var lateSelectors = ".nav-bar__main-left,.n-inner,.upload-video-card,.bili-video-card,.bili-video-card__wrap,.small-item,.space-video-card,.video-card";
      if (el.matches && el.matches(lateSelectors)) {
        return true;
      }
      return !!(el.querySelector && el.querySelector(lateSelectors));
    }
    function observeSpacePageRender() {
      if (spaceStartupObserver != null || typeof MutationObserver == "undefined") {
        return;
      }
      var root = document.documentElement || document.body;
      if (!root) {
        return;
      }
      spaceStartupObserver = new MutationObserver(function(mutations) {
        if (setMethod != setSpacePage) {
          return;
        }
        for (var i = 0; i < mutations.length; i++) {
          var nodes = mutations[i].addedNodes;
          for (var j = 0; j < nodes.length; j++) {
            if (isSpaceRenderNode(nodes[j])) {
              scheduleSpaceObservedRefresh();
              return;
            }
          }
        }
      });
      spaceStartupObserver.observe(root, { childList: true, subtree: true });
      setTimeout(function() {
        if (spaceStartupObserver != null) {
          spaceStartupObserver.disconnect();
          spaceStartupObserver = null;
        }
      }, 6e3);
    }
    var getCurrentPageBvid = function() {
      var initState = unsafeWindow.__INITIAL_STATE__;
      if (initState && initState.bvid) {
        var bvid2 = initState.bvid;
        if (initState.videoData && initState.videoData.videos > 1) {
          bvid2 = bvid2 + "-" + initState.p;
        }
        return bvid2;
      }
      var match = location.pathname.match(/\/video\/(BV[^\/?#]+)/i);
      if (match && match[1]) {
        return match[1];
      }
      return null;
    };
    GM_addStyle(staticStyle);
    (0, import_jquery.default)(document).ready(function() {
      var oldList = GM_getValue("BiliViewed", null);
      if (oldList != null) {
        groupGMVideoList(oldList);
      }
      pageHeight = (0, import_jquery.default)(window).height() * 0.66;
      var domain = location.href;
      var askIndex = domain.indexOf("?");
      if (askIndex > -1) {
        domain = domain.substring(0, askIndex);
      }
      domain = domain.toLowerCase();
      if (domain.indexOf("search.") > -1) {
        GM_addStyle(searchStyle);
        setMethod = setSearchPage;
      } else if (domain.indexOf("space.") > -1) {
        GM_addStyle(spaceStyle);
        setMethod = setSpacePage;
        scheduleSpacePageScans();
        observeSpacePageRender();
      } else if (domain.indexOf("t.") > -1) {
        GM_addStyle(spaceStyle);
        setMethod = setSpacePage;
        setPageScrollMethod();
        if ((0, import_jquery.default)(".bili-dyn-up-list__item").length == 0) {
          setTimeout(function() {
            (0, import_jquery.default)(".bili-dyn-up-list__item").unbind("click").click(function() {
              prePageScrollTop = 0;
              setTimeout(setPageRefreshMethod, 2e3);
            });
          }, 2e3);
        }
      } else if (domain.indexOf("www.") > -1) {
        var href = location.href;
        href = href.toLowerCase();
        if (href.indexOf("/bangumi/play/") > -1) {
          GM_addStyle(bangumiStyle);
          setMethod = setBangumiPage;
        } else if (href.indexOf("/cheese/play/") > -1) {
          GM_addStyle(cheesePlayStyle);
          setMethod = setCheesePlayPage;
        } else if (href.indexOf("/cheese/") > -1) {
          GM_addStyle(cheeseStyle);
          setMethod = setCheesePage;
        } else if (href.indexOf("/guochuang") > -1 || href.indexOf("/anime") > -1) {
          GM_addStyle(guochangStyle);
          setMethod = setGuochuangPage;
          setPageScrollMethod();
        } else if (href.indexOf("/v/musicplus") > -1) {
          GM_addStyle(indexStyle);
          setMethod = setMusicplusPage;
        } else if (href.indexOf("/play/watchlater") > -1) {
          return;
        } else if (href.indexOf("/list/") > -1) {
          GM_addStyle(videoMainOnlyStyle);
          setMethod = setListPlayPage;
          currentPageKind = "listPlay";
          scheduleMainVideoEarlyViewed();
          (0, import_jquery.default)("#playlist-video-action-list").scroll(function() {
            var curScrollTop = (0, import_jquery.default)("#playlist-video-action-list").scrollTop();
            if (Math.abs(curScrollTop - preScrollTop) > 300) {
              preScrollTop = curScrollTop;
              setTimeout(function() {
                setMethod();
              }, 1e3);
            }
          });
          setPageScrollMethod();
          (0, import_jquery.default)(".rec-footer").click(function() {
            setTimeout(function() {
              setMethod();
            }, 1e3);
          });
        } else if (href.indexOf("/watchlater") > -1) {
          GM_addStyle(watchlaterStyle);
          setAllViewedMethod();
          setMethod = setWatchlaterPage;
          setPageScrollMethod();
        } else if (href.indexOf("/video/") > -1) {
          GM_addStyle(videoMainOnlyStyle);
          setMethod = setVideoPage;
          currentPageKind = "video";
          scheduleMainVideoEarlyViewed();
          observeVideoRecommendations();
          setPageScrollMethod();
        } else if (href.indexOf("/festival/") > -1) {
          GM_addStyle(festivalVideoStyle);
          setMethod = setFestivalVideoPage;
          setPageScrollMethod();
        } else if (href.indexOf("/popular/") > -1) {
          GM_addStyle(popularStyle);
          setMethod = setPopularPage;
          (0, import_jquery.default)(".nav-tabs__item").click(function(e) {
            setTimeout(function() {
              setMethod();
            }, 3e3);
          });
          setPageScrollMethod();
        } else if (href.indexOf("/history") > -1) {
          GM_addStyle(historyStyle);
          setAllViewedMethod();
          setMethod = setHistoryPage;
          setPageScrollMethod();
          scheduleHistoryPageScans();
        } else if (href.indexOf("/v/channel/") > -1) {
          GM_addStyle(channelStyle);
          setMethod = setChannelPage;
          setTimeout(function(e) {
            (0, import_jquery.default)(".discovery-panel__title").click(function(e2) {
              setTimeout(setMethod, 2e3);
            });
            (0, import_jquery.default)(".content-item").click(function(e2) {
              setTimeout(setMethod, 4e3);
            });
            (0, import_jquery.default)(".subscribe-item").click(function(e2) {
              setTimeout(setMethod, 4e3);
            });
          }, 2e3);
        } else if (href.indexOf("/variety/") > -1 || href.indexOf("/movie/") > -1 || href.indexOf("/tv/") > -1 || href.indexOf("/documentary/") > -1) {
          GM_addStyle(varietyStyle);
          setMethod = setVarietyPage;
          setPageScrollMethod();
        } else if (href.endsWith(".com/") || href.indexOf(".com/?") > -1 || href.indexOf(".com/index.html") > -1) {
          GM_addStyle(indexStyle);
          setMethod = setIndexPage;
          setPageScrollMethod();
          setTimeout(function() {
            (0, import_jquery.default)(".feed-roll-btn").click(function(e) {
              setTimeout(setMethod, 2e3);
            });
            (0, import_jquery.default)(".flexible-roll-btn").unbind("click").click(function() {
              setTimeout(setMethod, 2e3);
            });
          }, 2e3);
        } else {
          GM_addStyle(areaStyle);
          setMethod = setAreaPage;
          setPageScrollMethod();
          (0, import_jquery.default)(".channel-nav-sub-item").click(function(e) {
            setTimeout(function() {
              setMethod();
            }, 1e3);
          });
        }
      }
      btnRefresh.click(function() {
        sound("click");
        setPageRefreshMethod();
      });
      if (setMethod != null) {
        if (setMethod != setVideoPage && setMethod != setListPlayPage) {
          setMethod();
        }
      }
    });
    var preScrollTop = 0;
    var pageHeight = 600;
    var curPageScrollTop = 0;
    var prePageScrollTop = 0;
    var setPageScrollMethod = function() {
      (0, import_jquery.default)(window).scroll(function() {
        var curPageScrollTop2 = (0, import_jquery.default)(document).scrollTop();
        if (Math.abs(curPageScrollTop2 - prePageScrollTop) > pageHeight) {
          prePageScrollTop = curPageScrollTop2;
          setTimeout(setMethod, 1e3);
        }
      });
    };
    var setPageRefreshMethod = function() {
      (0, import_jquery.default)(".btnView").remove();
      viewVideoJson = {};
      viewVideoSetJson = {};
      setMethod();
      setTimeout(function(e) {
        setMethod();
      }, 3e3);
    };
    const setAllViewedMethod = function() {
      btnSetAllViewed = (0, import_jquery.default)("<a class='btnSetAllViewed' title='\u4E00\u952E\u8BBE\u7F6E\u672A\u770B\u89C6\u9891\u4E3A\u5DF2\u770B\u3002\u53EA\u9488\u5BF9\u5F53\u524D\u9875\u9762\u5DF2\u52A0\u8F7D\u51FA\u6765\u7684\u89C6\u9891\uFF08\u5E26\u672A\u770B\u6309\u94AE\u7684\uFF09\u3002\u53EF\u4EE5\u62C9\u5230\u9875\u9762\u5E95\u90E8\u52A0\u8F7D\u51FA\u66F4\u591A\u7684\u89C6\u9891\u518D\u70B9\u8FD9\u4E2A\u3002\u6267\u884C\u8BE5\u64CD\u4F5C\u540E\u4E0D\u53EF\u8FDB\u884C\u64A4\u9500\uFF0C\u53EF\u6839\u636E\u4E2A\u4EBA\u60C5\u51B5\u8FDB\u884C\u4F7F\u7528\u3002'>\u4E00\u952E\u5DF2\u770B</a>");
      btnSetAllViewed.click(async function() {
        const feedback = soundTask();
        if (!await atelierConfirm((0, import_jquery.default)(this).attr("title"))) {
          feedback.finish("cancel");
          return;
        }
        var changedCount = 0;
        var hasChanges = false;
        (0, import_jquery.default)(".btnNotView").each(function(idx) {
          if (saveGMVideoList((0, import_jquery.default)(this).data("av"), true) === true) hasChanges = true;
          changedCount++;
        });
        showInfoLog("\u4E00\u952E\u5DF2\u770B\uFF1A" + changedCount + " \u4E2A\u89C6\u9891", "success");
        setPageRefreshMethod();
        feedback.finish(hasChanges ? "success" : "click");
      });
    };
    var setCheesePlayPage = function() {
      var refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        (0, import_jquery.default)(".layout-r").append("<a class='btnRefresh' title='\u5982\u679C\u5217\u8868\u6CA1\u51FA\u73B0\u5DF2\u770B/\u672A\u770B\u6807\u8BC6\uFF0C\u8BF7\u624B\u52A8\u70B9\u51FB\u8FD9\u4E2A\u6309\u94AE\u8FDB\u884C\u5237\u65B0'>\u5237\u65B0\u2197</a>");
        (0, import_jquery.default)(".btnRefresh").click(function() {
          sound("click");
          setPageRefreshMethod();
        });
      }
      var indexJson = document.getElementById("app")._vnode.appContext.config.globalProperties.$pinia.state._rawValue.index;
      if (indexJson == null) {
        return;
      }
      setVideoIsViewed((0, import_jquery.default)(".archive-tool-box"), ".layout-l", 0, "ep" + indexJson.currentEp.id, true);
      var epoArr = indexJson.epList;
      (0, import_jquery.default)(".section-item").each(function(idx) {
        setVideoIsViewed((0, import_jquery.default)(this), ".season-info", 0, "ep" + epoArr[idx].id, true, true);
      });
      var rEpoArr = indexJson.viewInfo.recommend_seasons;
      (0, import_jquery.default)(".season-recommend-card").each(function(idx) {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass, 0, "ss" + rEpoArr[idx].id);
      });
      (0, import_jquery.default)(".section-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 5e3);
      });
      setBtnView();
    };
    var setCheesePage = function() {
      (0, import_jquery.default)(".block-list-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".rank dd").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".big-card").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".small-card").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".radio-button-box .item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".mode-trigger span").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".page-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(document).unbind("keyup").keyup(function(event) {
        if (event.keyCode == 13) {
          setTimeout(setPageRefreshMethod, 2e3);
        }
      });
      setBtnView();
    };
    var setGuochuangPage = function() {
      (0, import_jquery.default)(".progress-bar-content").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".horizontal-ratio-item-inner").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".timeline-weekday-hover-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".ranking-ratio-item-container").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".item-wrap").each(function(idx) {
        var epid = (0, import_jquery.default)(this).children("a")[0].__vue__.$parent.item.episode_id;
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass, 0, "ep" + epid, false, false);
      });
      (0, import_jquery.default)(".spread-module").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".rank-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".tabs-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 3e3);
      });
      (0, import_jquery.default)(".week-day-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 1e3);
      });
      (0, import_jquery.default)(".next-page").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 1e3);
      });
      (0, import_jquery.default)(".prev-page").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 1e3);
      });
      (0, import_jquery.default)(".bangumi-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".sort-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".filter-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".tag-item").unbind("click").click(function(e) {
        setTimeout(setMethod, 1e3);
      });
      (0, import_jquery.default)(".read-push").unbind("click").click(function(e) {
        setTimeout(setMethod, 1e3);
      });
      (0, import_jquery.default)(".tab-list li").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".dropdown-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".page-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(document).unbind("keyup").keyup(function(event) {
        if (event.keyCode == 13) {
          setTimeout(setPageRefreshMethod, 1e3);
        }
      });
      setBtnView();
    };
    var setMusicplusPage = function() {
      (0, import_jquery.default)(".video-card-reco").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".card-pic").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".tabs a").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 1e3);
      });
      (0, import_jquery.default)(".more").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 1e3);
      });
      (0, import_jquery.default)(".type-group li").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 1e3);
      });
      (0, import_jquery.default)(".main-menu a").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 1e3);
      });
      (0, import_jquery.default)(".pager a").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 1e3);
      });
      (0, import_jquery.default)(document).unbind("keyup").keyup(function(event) {
        if (event.keyCode == 13) {
          setTimeout(setPageRefreshMethod, 1e3);
        }
      });
      setBtnView();
    };
    var setBangumiPage = function() {
      var linkArr = (0, import_jquery.default)("link");
      var linkRel = "";
      var linkHref = "";
      for (var i = 0; i < linkArr.length; i++) {
        linkRel = (0, import_jquery.default)(linkArr[i]).attr("rel");
        if (linkRel != "canonical") {
          continue;
        }
        linkHref = (0, import_jquery.default)(linkArr[i]).attr("href");
        if ((0, import_jquery.default)(".toolbar").length > 0) {
          setVideoIsViewed((0, import_jquery.default)(".player-left-components"), ".toolbar", 2, linkHref, true);
        } else {
          setVideoIsViewed((0, import_jquery.default)(".player-left-components"), ".toolbar_toolbar__NJCNy", 2, linkHref, true);
        }
        break;
      }
      var refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        if ((0, import_jquery.default)(".toolbar").length > 0) {
          (0, import_jquery.default)(".toolbar").append("<a class='btnRefresh' title='\u5982\u679C\u5217\u8868\u6CA1\u51FA\u73B0\u5DF2\u770B/\u672A\u770B\u6807\u8BC6\uFF0C\u8BF7\u624B\u52A8\u70B9\u51FB\u8FD9\u4E2A\u6309\u94AE\u8FDB\u884C\u5237\u65B0'>\u5237\u65B0\u2192</a>");
        } else {
          (0, import_jquery.default)(".toolbar_toolbar__NJCNy").append("<a class='btnRefresh' title='\u5982\u679C\u5217\u8868\u6CA1\u51FA\u73B0\u5DF2\u770B/\u672A\u770B\u6807\u8BC6\uFF0C\u8BF7\u624B\u52A8\u70B9\u51FB\u8FD9\u4E2A\u6309\u94AE\u8FDB\u884C\u5237\u65B0'>\u5237\u65B0\u2192</a>");
        }
        (0, import_jquery.default)(".btnRefresh").click(function() {
          sound("click");
          setPageRefreshMethod();
        });
      }
      if ((0, import_jquery.default)(".toolbar").length > 0) {
      } else {
        (0, import_jquery.default)(".longListItem_wrap__9OsZi").each(function() {
          var pArr = Object.getOwnPropertyNames(this);
          if (pArr.length == 0) {
            return;
          }
          var internalNode = this[pArr[0]];
          var epId = internalNode && internalNode["return"] && internalNode["return"].key;
          if (!epId) {
            return;
          }
          setVideoIsViewed((0, import_jquery.default)(this), ".longListItem_title__Xziqq", 0, "ep" + epId, true, true);
          (0, import_jquery.default)(this).children("a:eq(1)").unbind("click").click(function(e) {
            setTimeout(setPageRefreshMethod, 2e3);
          });
        });
        (0, import_jquery.default)(".numberListItem_number_list_item__wszA4").each(function() {
          setVideoIsViewed((0, import_jquery.default)(this), "a", 0, null, true, true);
          (0, import_jquery.default)(this).children("a:eq(1)").unbind("click").click(function(e) {
            setTimeout(setPageRefreshMethod, 2e3);
          });
        });
        (0, import_jquery.default)(".modeChangeBtn_wrap__NOGS3").unbind("click").click(function(e) {
          setTimeout(setPageRefreshMethod, 1e3);
        });
        (0, import_jquery.default)(".seasonlist_ss_item__czhHy").each(function() {
          setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
        });
        (0, import_jquery.default)(".seasonlist_expand_more__VcTha").unbind("click").click(function(e) {
          setTimeout(setPageRefreshMethod, 2e3);
        });
        (0, import_jquery.default)(".epitem_ep_item__CPdZy").each(function() {
          setVideoIsViewed((0, import_jquery.default)(this), "a", 0, null, true, true);
          (0, import_jquery.default)(this).children("a:eq(1)").unbind("click").click(function(e) {
            setTimeout(setPageRefreshMethod, 2e3);
          });
        });
        (0, import_jquery.default)(".RecommendItem_wrap__pJmXL").each(function() {
          setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
          (0, import_jquery.default)(this).children("a:first").unbind("click").click(function(e) {
            setTimeout(setPageRefreshMethod, 3e3);
          });
        });
      }
      setBtnView();
    };
    var setChannelPage = function() {
      (0, import_jquery.default)(".video-card__content").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass, 0, null, false, false, false, true);
      });
      (0, import_jquery.default)(".go-channel-btn").unbind("click").click(function(e) {
        setTimeout(setMethod, 2e3);
      });
      (0, import_jquery.default)("#container").unbind("scroll").scroll(function() {
        var curScrollTop = (0, import_jquery.default)("#container").scrollTop();
        if (Math.abs(curScrollTop - preScrollTop) > pageHeight) {
          preScrollTop = curScrollTop;
          setTimeout(setMethod, 2e3);
        }
      });
      (0, import_jquery.default)(".van-tabs-tab").unbind("click").click(function(e) {
        setTimeout(setMethod, 2e3);
      });
      (0, import_jquery.default)(".year-selector__item").unbind("click").click(function(e) {
        setTimeout(setMethod, 2e3);
      });
      (0, import_jquery.default)(".play-selector__item").unbind("click").click(function(e) {
        setTimeout(setMethod, 2e3);
      });
      (0, import_jquery.default)(".relative-tags div a").unbind("click").click(function(e) {
        setTimeout(setMethod, 2e3);
      });
      setBtnView();
    };
    var setVarietyPage = function() {
      (0, import_jquery.default)(".side-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), ".title", 0, null, false, false);
      });
      (0, import_jquery.default)(".hot-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".hover-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      var itemDivArr = (0, import_jquery.default)(".column-itemDiv");
      if (itemDivArr.length == 0) {
        var itemArr = (0, import_jquery.default)(".column-item");
        for (var i = 0; i < itemArr.length; i++) {
          var divObj = (0, import_jquery.default)("<div class='column-itemDiv'></div>");
          divObj.append(itemArr[i]);
          (0, import_jquery.default)(".module-column").append(divObj);
        }
      }
      (0, import_jquery.default)(".column-itemDiv").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".bangumi-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".sort-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".filter-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      setBtnView();
    };
    var setAreaPage = function() {
      (0, import_jquery.default)(".bili-video-card__wrap").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".bili-rank-list-video__item--wrap").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), ".rank-video-card");
      });
      (0, import_jquery.default)(".roll-btn").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 3e3);
      });
      (0, import_jquery.default)(".tags-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 3e3);
      });
      (0, import_jquery.default)(".channel-select-content-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 3e3);
      });
      setBtnView();
    };
    var setPopularPage = function() {
      (0, import_jquery.default)(".video-card__content").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".img").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)("._card_1kuml_6").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass, 0, null, false, false, true, true);
      });
      var itemListArr = (0, import_jquery.default)(".drama-board-listClone");
      if (itemListArr.length == 0) {
        (0, import_jquery.default)(".drama-board-list").each(function(idx) {
          var objOffset = (0, import_jquery.default)(this).offset();
          var cloneObj = (0, import_jquery.default)(this).clone();
          (0, import_jquery.default)(cloneObj).addClass("drama-board-listClone");
          (0, import_jquery.default)(cloneObj).addClass("drama-board-listClone_" + idx);
          (0, import_jquery.default)(cloneObj).removeClass("drama-board-list");
          (0, import_jquery.default)(this).parent().append(cloneObj);
          var itemArr = (0, import_jquery.default)(".drama-board-listClone_" + idx + " .board-item-wrap");
          for (var i = 0; i < itemArr.length; i++) {
            var divObj = (0, import_jquery.default)("<div class='board-item-wrapDiv'></div>");
            divObj.append(itemArr[i]);
            (0, import_jquery.default)(".drama-board-listClone_" + idx).append(divObj);
          }
          (0, import_jquery.default)(cloneObj).offset(objOffset);
          (0, import_jquery.default)(this).attr("style", "opacity:0;");
        });
      }
      (0, import_jquery.default)(".board-item-wrapDiv").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".panel .select-item").click(function(e) {
        setTimeout(setPageRefreshMethod, 5e3);
      });
      (0, import_jquery.default)(".rank-tab li").click(function(e) {
        (0, import_jquery.default)(".btnView").remove();
        setTimeout(setMethod, 3e3);
      });
      (0, import_jquery.default)(".periodShow").unbind("click").click(function(e) {
        setTimeout(function() {
          (0, import_jquery.default)(".periodList .periodItem").unbind("click").click(function(e2) {
            (0, import_jquery.default)(".btnView").remove();
            setTimeout(setMethod, 3e3);
          });
        }, 500);
      });
      (0, import_jquery.default)(".dropdown-item").unbind("click").click(function(e) {
        (0, import_jquery.default)(".drama-board-listClone").remove();
        (0, import_jquery.default)(".drama-board-list").removeAttr("style");
        setTimeout(setMethod, 2e3);
      });
      (0, import_jquery.default)(".switch-tabs .tab").unbind("click").click(function(e) {
        var tabIndex = (0, import_jquery.default)(this).index();
        var objOffset = (0, import_jquery.default)(".drama-board-list:eq(" + tabIndex + ")").offset();
        (0, import_jquery.default)(".drama-board-listClone_" + tabIndex).offset(objOffset);
      });
      setBtnView();
    };
    var setIndexPage = function() {
      (0, import_jquery.default)(".bili-video-card").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      setBtnView();
    };
    var setVideoPage = function() {
      (0, import_jquery.default)(".card-box .pic").each(function() {
        setVideoRecommendationViewed(this);
      });
      var refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        (0, import_jquery.default)(".video-toolbar-right").append(btnRefresh);
        btnRefresh.text("\u5237\u65B0\u2197");
      }
      var initState = unsafeWindow.__INITIAL_STATE__;
      if (!initState) {
        var fallbackBvid = getCurrentPageBvid();
        if (fallbackBvid) {
          setVideoIsViewed((0, import_jquery.default)(".video-info-meta"), ".pubdate-ip", 0, fallbackBvid, true);
          setVideoIsViewed((0, import_jquery.default)(".overflow-panel"), ".pubdate-ip", 0, fallbackBvid, true);
        }
        setBtnView();
        return;
      }
      var bvid2 = initState.bvid;
      var videos = initState.videoData.videos;
      if (videos > 1) {
        bvid2 = bvid2 + "-" + initState.p;
      }
      setVideoIsViewed((0, import_jquery.default)(".video-info-meta"), ".pubdate-ip", 0, bvid2, true);
      setVideoIsViewed((0, import_jquery.default)(".overflow-panel"), ".pubdate-ip", 0, bvid2, true);
      (0, import_jquery.default)(".pod-item").each(function() {
        var targetObj = (0, import_jquery.default)(this).find(".cover:first");
        var bvNum = (0, import_jquery.default)(this).data("key");
        if (targetObj.length > 0) {
          setVideoIsViewed(targetObj, coverItemClass, 0, bvNum);
        } else {
          setVideoIsViewed((0, import_jquery.default)(this), ".title", 0, bvNum, true, true);
        }
        var multiPObj = (0, import_jquery.default)(this).children(".multi-p");
        if (multiPObj.length > 0) {
          multiPObj.children(".page-list").children(".page-item").each(function(idx) {
            setVideoIsViewed((0, import_jquery.default)(this), ".title", 0, bvNum + "-" + (idx + 1), true, true);
          });
        }
      });
      (0, import_jquery.default)(".multip .video-pod__item").each(function(idx) {
        setVideoIsViewed((0, import_jquery.default)(this), ".title", 0, initState.bvid + "-" + (idx + 1), true, true);
      });
      (0, import_jquery.default)(".multip.grid .page").each(function(idx) {
        if ((0, import_jquery.default)(this).children("span").length == 0) {
          (0, import_jquery.default)(this).append("<span></span>");
        }
        setVideoIsViewed((0, import_jquery.default)(this), "span", 0, initState.bvid + "-" + (idx + 1), true, true);
      });
      var relatedArr = initState.related;
      if (relatedArr && relatedArr.length > 0) {
        (0, import_jquery.default)(".bpx-player-ending-related-itemDiv").each(function(idx) {
          setVideoIsViewed((0, import_jquery.default)(this), ".bpx-player-ending-related-item", 0, relatedArr[idx].bvid, true, true);
          (0, import_jquery.default)(".bpx-player-ending-related-item").unbind("click").click(function(e) {
            setTimeout(setPageRefreshMethod, 3e3);
          });
        });
        (0, import_jquery.default)(".bpx-player-video-wrap video").unbind("ended").bind("ended", function(e) {
          setTimeout(function() {
            var itemDivArr = (0, import_jquery.default)(".bpx-player-ending-related-itemDiv");
            if (itemDivArr.length == 0) {
              var itemArr = (0, import_jquery.default)(".bpx-player-ending-related-item");
              for (var i = 0; i < itemArr.length; i++) {
                var divObj = (0, import_jquery.default)("<div class='bpx-player-ending-related-itemDiv'></div>");
                divObj.append(itemArr[i]);
                (0, import_jquery.default)(".bpx-player-ending-related").append(divObj);
              }
            }
            (0, import_jquery.default)(".bpx-player-ending-related-itemDiv").each(function(idx) {
              setVideoIsViewed((0, import_jquery.default)(this), ".bpx-player-ending-related-item", 0, relatedArr[idx].bvid, true, true);
              (0, import_jquery.default)(".bpx-player-ending-related-item").unbind("click").click(function(e2) {
                setTimeout(setPageRefreshMethod, 3e3);
              });
            });
          }, 2e3);
        });
      }
      setBtnView();
      (0, import_jquery.default)(".video-pod__item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 3e3);
      });
      (0, import_jquery.default)(".slide-item").unbind("click").click(function(e) {
        setTimeout(setPageRefreshMethod, 3e3);
      });
      (0, import_jquery.default)(".view-mode").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".card-box").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".rec-footer").unbind("click").click(function() {
        setTimeout(setMethod, 2e3);
      });
    };
    var setFestivalVideoPage = function() {
      var refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        (0, import_jquery.default)(".video-toolbar-content_right").append("<a class='btnRefresh' title='\u5982\u679C\u5217\u8868\u6CA1\u51FA\u73B0\u5DF2\u770B/\u672A\u770B\u6807\u8BC6\uFF0C\u8BF7\u624B\u52A8\u70B9\u51FB\u8FD9\u4E2A\u6309\u94AE\u8FDB\u884C\u5237\u65B0'>\u5237\u65B0\u2197</a>");
        (0, import_jquery.default)(".btnRefresh").click(function() {
          sound("click");
          setPageRefreshMethod();
        });
      }
      var initState = unsafeWindow.__INITIAL_STATE__;
      if (!initState) {
        return;
      }
      var videoInfo = initState.videoInfo;
      if (videoInfo) {
        var bvid2 = initState.videoInfo.bvid;
        setVideoIsViewed((0, import_jquery.default)(".video-toolbar-content"), ".video-toolbar-content_left", 0, bvid2, true);
      }
      var sectionArr = initState.videoSections;
      if (sectionArr && sectionArr.length > 0) {
        var epoArr = sectionArr[0].episodes;
        for (var i = 1; i < sectionArr.length; i++) {
          epoArr = epoArr.concat(sectionArr[i].episodes);
        }
        (0, import_jquery.default)(".video-episode-card").each(function(idx) {
          var targetObj = (0, import_jquery.default)(this).find(".video-episode-card__cover:first");
          if (targetObj.length > 0) {
            setVideoIsViewed(targetObj, ".activity-image-card__image", 0, epoArr[idx].bvid);
          } else {
            setVideoIsViewed((0, import_jquery.default)(this), ".video-episode-card__info-title", 0, epoArr[idx].bvid, true, true);
          }
        });
        (0, import_jquery.default)(".video-episode-card").unbind("click").click(function(e) {
          setTimeout(setPageRefreshMethod, 3e3);
        });
      }
      var recommendArr = initState.recommendList.relate_video;
      if (recommendArr) {
        (0, import_jquery.default)(".recommend-video-card").each(function(idx) {
          setVideoIsViewed((0, import_jquery.default)(this), ".activity-image-card__image", 0, recommendArr[idx].bvid);
        });
      }
      setBtnView();
    };
    var setHistoryPage = function() {
      var refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        (0, import_jquery.default)(".breadcrumbs__top .right").prepend(btnRefresh);
        (0, import_jquery.default)(".breadcrumbs__top .right").prepend(btnSetAllViewed);
      }
      (0, import_jquery.default)(".bili-video-card__cover").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      setBtnView();
      (0, import_jquery.default)(document).unbind("keyup").keyup(function(event) {
        if (event.keyCode == 13) {
          setTimeout(setPageRefreshMethod, 2e3);
        }
      });
      (0, import_jquery.default)(".radio-filter__item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".lists-view-mode").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".search-btn").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".batch-manage-btn").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
    };
    var setListPlayPage = function() {
      var refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        (0, import_jquery.default)(".video-toolbar-right").append(btnRefresh);
        btnRefresh.text("\u5237\u65B0\u2197");
      }
      var initState = unsafeWindow.__INITIAL_STATE__;
      if (!initState) {
        return;
      }
      var bvid2 = initState.bvid;
      var videos = initState.videoData.videos;
      if (videos > 1) {
        bvid2 = bvid2 + "-" + initState.p;
      }
      setVideoIsViewed((0, import_jquery.default)(".video-info-meta"), ".pubdate-ip", 0, bvid2, true);
      setVideoIsViewed((0, import_jquery.default)(".overflow-panel"), ".pubdate-ip", 0, bvid2, true);
      var epoArr = initState.resourceList;
      let eachBvid = null;
      (0, import_jquery.default)(".actionlist-item-inner .main").each(function(idx) {
        if (typeof epoArr[idx].bv_id == "undefined") {
          eachBvid = epoArr[idx].bvid;
        } else {
          eachBvid = epoArr[idx].bv_id;
        }
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass, 0, eachBvid);
        var multipObj = (0, import_jquery.default)(this).parent().children(".multip-list:first");
        if (multipObj.length > 0) {
          (0, import_jquery.default)(multipObj[0]).children(".multip-list-item").each(function(idx2) {
            if (epoArr[idx].pages[idx2].p) {
              setVideoIsViewed((0, import_jquery.default)(this), ".left-part", 0, eachBvid + "-" + epoArr[idx].pages[idx2].p, true);
            } else {
              setVideoIsViewed((0, import_jquery.default)(this), ".left-part", 0, eachBvid + "-" + epoArr[idx].pages[idx2].page, true);
            }
            (0, import_jquery.default)(this).unbind("click").click(function() {
              setTimeout(setPageRefreshMethod, 2e3);
            });
          });
        }
        (0, import_jquery.default)(this).unbind("click").click(function() {
          setTimeout(setPageRefreshMethod, 2e3);
        });
      });
      (0, import_jquery.default)(".pic-box").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".del-btn").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      setBtnView();
    };
    const setWatchlaterPage = function() {
      let refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        (0, import_jquery.default)(".list-header-options").prepend(btnRefresh);
        (0, import_jquery.default)(".list-header-options").prepend(btnSetAllViewed);
      }
      (0, import_jquery.default)(".bili-video-card__cover").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass, 3);
      });
      setBtnView();
      (0, import_jquery.default)(document).unbind("keyup").keyup(function(event) {
        if (event.keyCode == 13) {
          setTimeout(setPageRefreshMethod, 2e3);
        }
      });
      (0, import_jquery.default)(".list-header-filter__btn").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".watchlater-list-title-sort").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".search-btn").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".menu-popover__panel-item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".action-btn").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
    };
    const spaceVideoCardSelectors = ".small-item,.bili-video-card,.bili-video-card__wrap,.upload-video-card,.space-video-card,.video-card";
    const spaceVideoCardRootSelectors = ".upload-video-card,.small-item,.space-video-card,.video-card,.bili-video-card";
    function getSpaceVideoCardRoot(el) {
      var root = (0, import_jquery.default)(el).closest(spaceVideoCardRootSelectors)[0];
      return root || el;
    }
    const setSpaceVideoCardsViewed = function() {
      const handledCards = [];
      (0, import_jquery.default)(spaceVideoCardSelectors).each(function() {
        var cardRoot = getSpaceVideoCardRoot(this);
        if (handledCards.indexOf(cardRoot) > -1) {
          return;
        }
        handledCards.push(cardRoot);
        setVideoIsViewed((0, import_jquery.default)(cardRoot), coverItemClass);
      });
      (0, import_jquery.default)(".bili-video-card__cover").each(function() {
        if ((0, import_jquery.default)(this).closest(spaceVideoCardRootSelectors).length > 0) {
          return;
        }
        const href = (0, import_jquery.default)(this).attr("href") || (0, import_jquery.default)(this).find("a:first").attr("href");
        const match = href && href.match(/(?:\/video\/|[?&]bvid=)(BV[^/?&#]+)/i);
        if (match && match[1]) {
          setVideoIsViewed((0, import_jquery.default)(this), coverItemClass, 0, match[1]);
        }
      });
    };
    const setSpacePage = function() {
      let refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        (0, import_jquery.default)(".nav-bar__main-left").append(btnRefresh);
        (0, import_jquery.default)(".n-inner").append(btnRefresh);
      }
      (0, import_jquery.default)(".i-pin-part .i-pin-has-content").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      setSpaceVideoCardsViewed();
      (0, import_jquery.default)(".bili-dyn-content__orig__major").each(function() {
        var coverObj = (0, import_jquery.default)(this).find(".bili-awesome-img:first");
        if (coverObj.length > 0) {
          setVideoIsViewed((0, import_jquery.default)(this), ".bili-awesome-img");
        } else {
          setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
        }
      });
      (0, import_jquery.default)(".list-item").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      (0, import_jquery.default)(".video-card").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      setBtnView();
      (0, import_jquery.default)(".bili-dyn-up-list__item").unbind("click").click(function() {
        prePageScrollTop = 0;
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".be-pager li").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".search-btn").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(document).unbind("keyup").keyup(function(event) {
        if (event.keyCode == 13) {
          setTimeout(setPageRefreshMethod, 2e3);
        }
      });
      (0, import_jquery.default)(".n-tab-links a").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".contribution-item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".be-tab-item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)("#submit-video-type-filter a").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".fav-item a").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".more").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".more-btn").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".list-style span").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".nav-tab__item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".radio-filter__item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".vui_button").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".side-nav__item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".lists-view-mode").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".back").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".menu-popover__panel-item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".fav-sidebar-item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
    };
    var coverItemClass = "img";
    var btnViewDelegateBound = false;
    var updateBtnViewVisual = function(btnObj, setIsViewed) {
      var coverObjs = btnObj.parent().find(coverItemClass + ":not(.block-list-item-info-player--img):not(.cover):first");
      if (setIsViewed) {
        btnObj.text("\u5DF2\u770B");
        btnObj.removeClass("btnNotView");
        btnObj.addClass("btnIsView");
        btnObj.data("view", "1");
        coverObjs.css("opacity", opacityIsViewCover);
      } else {
        btnObj.text("\u672A\u770B");
        btnObj.removeClass("btnIsView");
        btnObj.addClass("btnNotView");
        btnObj.data("view", "0");
        coverObjs.css("opacity", "1");
      }
    };
    var setBtnView = function() {
      (0, import_jquery.default)(".btnView,.btnRefresh,.btnSetAllViewed,.btnList,.btnListSave").each(function() {
        styleAtelierAction(this);
      });
      if (btnViewDelegateBound) {
        return;
      }
      btnViewDelegateBound = true;
      (0, import_jquery.default)(document).off("click.BiliViewedBtnView", ".btnView").on("click.BiliViewedBtnView", ".btnView", function(e) {
        var avId = (0, import_jquery.default)(this).data("av");
        var view = (0, import_jquery.default)(this).data("view");
        var setIsViewed = false;
        if (view == 0) {
          setIsViewed = true;
        }
        const changed = saveGMVideoList(avId, setIsViewed);
        showInfoLog((setIsViewed ? "\u5DF2\u6807\u8BB0\u5DF2\u770B\uFF1A" : "\u5DF2\u6807\u8BB0\u672A\u770B\uFF1A") + avId, "success");
        sound(changed === true ? "success" : changed === false ? "error" : "click");
        (0, import_jquery.default)(".btnView").filter(function() {
          return (0, import_jquery.default)(this).data("av") == avId;
        }).each(function() {
          updateBtnViewVisual((0, import_jquery.default)(this), setIsViewed);
        });
        return false;
      });
    };
    var isView = 0;
    var videoArr = null;
    var isTextAreaHidden = true;
    var setSearchPage = function() {
      var refreshObj = (0, import_jquery.default)(".btnRefresh");
      if (refreshObj.size() == 0) {
        (0, import_jquery.default)(".vui_tabs--navbar").append("<a class='btnList' title='\u663E\u793A/\u9690\u85CF\u5DF2\u770BID\u7684\u6570\u636E\u5217\u8868\uFF0C\u5EFA\u8BAE\u5B9A\u671F\u590D\u5236\u5230\u5176\u4ED6\u5730\u65B9\u8FDB\u884C\u4FDD\u5B58\uFF0C\u907F\u514D\u56E0\u4E8B\u6545\u9020\u6210\u4E22\u5931'>\u663E\u793A/\u9690\u85CF</a>");
        (0, import_jquery.default)(".vui_tabs--navbar").append("<a class='btnListSave' title='\u5982\u679C\u6587\u672C\u6846\u5185\u5BB9\u6709\u4FEE\u6539\uFF0C\u8BF7\u70B9\u51FB\u8FD9\u4E2A\u6309\u94AE\u8FDB\u884C\u4FDD\u5B58\u3002'>\u4FDD\u5B58\u5217\u8868</a>");
        (0, import_jquery.default)(".vui_tabs--navbar").append("<textarea class='viewList'></textarea>");
        (0, import_jquery.default)(".search-input-container .flex_center").append(btnRefresh);
        (0, import_jquery.default)(".btnList").click(function() {
          if (isTextAreaHidden) {
            var keyList = GM_listValues();
            var key2 = "";
            var str = "";
            for (var i2 = 0; i2 < keyList.length; i2++) {
              key2 = keyList[i2];
              if (key2.indexOf("BiliViewed_") == 0) {
                str += GM_getValue(key2, "") + ",";
              }
            }
            (0, import_jquery.default)(".viewList").val(str);
          }
          isTextAreaHidden = !isTextAreaHidden;
          (0, import_jquery.default)(".viewList").toggle();
          (0, import_jquery.default)(".btnListSave").toggle();
          sound(isTextAreaHidden ? "close" : "open");
        });
        (0, import_jquery.default)(".btnRefresh").click(function() {
          sound("click");
          setPageRefreshMethod();
        });
        (0, import_jquery.default)(".btnListSave").click(function() {
          viewVideoList = (0, import_jquery.default)(".viewList").val();
          saveTextAreaVideoList(viewVideoList);
          isTextAreaHidden = !isTextAreaHidden;
          (0, import_jquery.default)(".viewList").toggle();
          (0, import_jquery.default)(".btnListSave").toggle();
          sound("save");
        });
      }
      (0, import_jquery.default)(".media-card").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      var itemSpanArr = (0, import_jquery.default)(".media-footerClone .p_relativeSpan");
      if (itemSpanArr.length == 0) {
        (0, import_jquery.default)(".media-card-content-footer").each(function(idx) {
          var mFooter = (0, import_jquery.default)(this).find(".media-footer:first");
          if (mFooter.length == 0) {
            return;
          }
          var objOffset = mFooter.offset();
          var cloneObj = (0, import_jquery.default)(mFooter).clone();
          (0, import_jquery.default)(cloneObj).addClass("media-footerClone");
          (0, import_jquery.default)(cloneObj).addClass("media-footerClone_" + idx);
          (0, import_jquery.default)(cloneObj).removeClass("media-footer");
          (0, import_jquery.default)(this).append(cloneObj);
          var itemArr2 = (0, import_jquery.default)(".media-footerClone_" + idx + " .p_relative");
          for (var i2 = 0; i2 < itemArr2.length; i2++) {
            var spanObj2 = (0, import_jquery.default)("<span class='p_relativeSpan'></span>");
            spanObj2.append(itemArr2[i2]);
            (0, import_jquery.default)(".media-footerClone_" + idx).append(spanObj2);
          }
          (0, import_jquery.default)(".media-footerClone_" + idx).offset(objOffset);
        });
        (0, import_jquery.default)(".media-footer").attr("style", "opacity:0");
        (0, import_jquery.default)(window).unbind("resize").resize(function() {
          (0, import_jquery.default)(".media-footer").removeAttr("style");
          (0, import_jquery.default)(".media-footerClone").remove();
          setTimeout(setMethod, 2e3);
        });
      }
      (0, import_jquery.default)(".p_relativeSpan").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), ".vui_button");
      });
      (0, import_jquery.default)(".seleced-ep").unbind("mouseenter").bind("mouseenter", function() {
        setTimeout(setMethod, 500);
      });
      var itemArr = (0, import_jquery.default)(".media-footer-select-content-item");
      itemSpanArr = (0, import_jquery.default)(".selConSpan");
      var newLength = itemArr.length - itemSpanArr.length;
      if (itemSpanArr.length == 0 || newLength > 0) {
        for (var i = itemSpanArr.length; i < itemArr.length; i++) {
          var spanObj = (0, import_jquery.default)("<div class='selConSpan'></div>");
          spanObj.append(itemArr[i]);
          (0, import_jquery.default)(".media-footer-select-content").append(spanObj);
        }
      }
      (0, import_jquery.default)(".selConSpan").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), ".media-footer-select-content-item", 0, null, true, true);
      });
      (0, import_jquery.default)(".media-footer-select-content-more").each(function() {
        (0, import_jquery.default)(this).appendTo((0, import_jquery.default)(this).parent());
      });
      (0, import_jquery.default)(".bili-video-card__wrap").each(function() {
        setVideoIsViewed((0, import_jquery.default)(this), coverItemClass);
      });
      setBtnView();
      (0, import_jquery.default)(document).unbind("keyup").keyup(function(event) {
        if (event.keyCode == 13) {
          setTimeout(setPageRefreshMethod, 2e3);
        }
      });
      (0, import_jquery.default)(".vui_tabs--nav-item").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
      (0, import_jquery.default)(".vui_button").unbind("click").click(function() {
        setTimeout(setPageRefreshMethod, 2e3);
      });
    };
    var bvid = null;
    var setVideoIsViewed = function(targetAppend, coverClass, playType, videoid, noAppendTarget, isBefore, findALast, findCoverClassLast) {
      var coverObj = null;
      if (findCoverClassLast) {
        coverObj = targetAppend.find(coverClass + ":last");
      } else {
        coverObj = targetAppend.find(coverClass + ":first");
      }
      if (coverObj.length == 0) {
        return null;
      }
      var btnView = null;
      if (noAppendTarget) {
        if (isBefore) {
          btnView = coverObj.parent().children(".btnView:first");
        } else {
          btnView = coverObj.children(".btnView:first");
        }
      } else {
        btnView = targetAppend.children(".btnView:first");
      }
      if (btnView.length > 0) {
        return null;
      }
      if (videoid != null && playType != 2) {
        bvid = videoid;
      } else {
        if (playType == 2) {
          bvid = videoid;
          playType = 0;
        } else {
          var aObj = null;
          if (findALast) {
            aObj = targetAppend.find("a:last");
          } else {
            aObj = targetAppend.find("a:first");
          }
          if (aObj.length == 0) {
            return null;
          }
          bvid = aObj.attr("href");
        }
        if (bvid == null) {
          return null;
        }
        if (playType == 1) {
          bvid = bvid.replace("//www.bilibili.com/medialist/play/watchlater/", "");
        } else if (playType == 3) {
          bvid = getBvidFromUrl(bvid);
          if (!bvid) {
            return;
          }
        } else {
          bvid = bvid.replace("//b23.tv/", "");
          bvid = bvid.replace("//m.bilibili.com/cheese/play/", "");
          bvid = bvid.replace("//www.bilibili.com/video/", "").replace("/video/", "");
          bvid = bvid.replace("//www.bilibili.com/bangumi/play/", "").replace("/bangumi/play/", "");
          bvid = bvid.replace("//www.bilibili.com/cheese/play/", "").replace("/cheese/play/", "");
        }
        bvid = bvid.replace("https:", "");
        var slashIndex = bvid.indexOf("/");
        if (slashIndex > -1) {
          bvid = bvid.substring(0, slashIndex);
        }
        if (bvid.length == 0) {
          return null;
        }
        slashIndex = bvid.indexOf("?");
        if (slashIndex > -1) {
          bvid = bvid.substring(0, slashIndex);
        }
        bvid = bvid.replace("/", "");
      }
      if (bvid.startsWith("av")) {
        bvid = bvid.substr(2);
        bvid = avToBv.encode(bvid);
        bvid = bvid.substr(2);
      } else if (bvid.startsWith("BV") || bvid.startsWith("bv")) {
        bvid = bvid.substr(2);
      } else if (bvid.startsWith("ep") || bvid.startsWith("ss")) {
      } else {
        return null;
      }
      if (noAppendTarget) {
        targetAppend = coverObj;
      }
      if (getBvIsViewed(bvid)) {
        if (isBefore) {
          targetAppend.before("<a class='btnView btnIsView' data-view='1' data-av='" + bvid + "'>\u5DF2\u770B</a>");
        } else {
          targetAppend.append("<a class='btnView btnIsView' data-view='1' data-av='" + bvid + "'>\u5DF2\u770B</a>");
        }
        if (!noAppendTarget) {
          coverObj.css("opacity", opacityIsViewCover);
        }
      } else {
        if (isBefore) {
          targetAppend.before("<a class='btnView btnNotView' data-view='0' data-av='" + bvid + "'>\u672A\u770B</a>");
        } else {
          targetAppend.append("<a class='btnView btnNotView' data-view='0' data-av='" + bvid + "'>\u672A\u770B</a>");
        }
        if (!noAppendTarget) {
          coverObj.css("opacity", "1");
        }
      }
      return bvid;
    };
    var getBvidFromUrl = function(url) {
      const regex = /bvid=([^&]+)/;
      const match = url.match(regex);
      return match ? match[1] : null;
    };
    var viewVideoJson = {};
    var viewVideoSetJson = {};
    var viewGroupArr = null;
    var getBvGroupId = getLegacyViewedGroupId;
    window.addEventListener("atelier-sync-applied", () => {
      viewVideoJson = {};
      viewVideoSetJson = {};
      if (typeof setMethod === "function") setPageRefreshMethod();
    });
    var setViewGroupCache = function(groupId, viewGroupArr2) {
      viewVideoJson[groupId] = viewGroupArr2;
      viewVideoSetJson[groupId] = new Set(viewGroupArr2);
    };
    var getBvIsViewed = function(bvid2) {
      bvid2 = bvid2 + "";
      var groupId = getBvGroupId(bvid2);
      if (groupId.length == 0) {
        return false;
      }
      viewGroupArr = null;
      if (!viewGroupArr) {
        viewGroupArr = readViewedGroup(groupId, null);
        if (viewGroupArr == null) {
          setViewGroupCache(groupId, []);
          return false;
        }
        setViewGroupCache(groupId, viewGroupArr);
      }
      if (viewVideoSetJson[groupId]) {
        return viewVideoSetJson[groupId].has(bvid2);
      }
      return false;
    };
    var saveGMVideoList = function(bvid2, isViewed) {
      bvid2 = bvid2 + "";
      var groupId = getBvGroupId(bvid2);
      if (groupId.length == 0) {
        return false;
      }
      viewGroupArr = null;
      if (!viewGroupArr) {
        viewGroupArr = readViewedGroup(groupId, null);
        if (viewGroupArr == null) {
          if (!isViewed) {
            return;
          }
          viewGroupArr = [];
        }
        setViewGroupCache(groupId, viewGroupArr);
      }
      var viewGroupSet = viewVideoSetJson[groupId];
      if (isViewed) {
        if (viewGroupSet.has(bvid2)) {
          return;
        }
        viewVideoJson[groupId].unshift(bvid2);
        viewGroupSet.add(bvid2);
      } else {
        if (!viewGroupSet.has(bvid2)) {
          return;
        }
        viewGroupSet.delete(bvid2);
        for (var i = 0; i < viewVideoJson[groupId].length; i++) {
          if (viewVideoJson[groupId][i] == bvid2) {
            viewVideoJson[groupId].splice(i, 1);
          }
        }
      }
      writeViewedGroup(groupId, viewVideoJson[groupId]);
      return true;
    };
    var groupGMVideoList = function(viewVideoList2) {
      if (viewVideoList2.length == 0) {
        GM_deleteValue("BiliViewed");
        viewVideoJson = {};
        viewVideoSetJson = {};
        return;
      }
      var videoArr2 = viewVideoList2.split("\n");
      var groupJson = groupLegacyViewedItems(videoArr2);
      for (var key2 in groupJson) {
        writeViewedGroup(key2, groupJson[key2]);
      }
      GM_deleteValue("BiliViewed");
      viewVideoJson = {};
      viewVideoSetJson = {};
    };
    var saveTextAreaVideoList = function(viewVideoList2) {
      viewVideoList2 = viewVideoList2.replaceAll("\n", ",");
      var videoArr2 = viewVideoList2.split(",");
      var groupJson = groupLegacyViewedItems(videoArr2);
      clearViewedStorage();
      for (var key2 in groupJson) {
        writeViewedGroup(key2, groupJson[key2]);
      }
      viewVideoJson = {};
      viewVideoSetJson = {};
    };
    var avToBv = (function() {
      var table = "fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF";
      var tr = {};
      for (var i = 0; i < 58; i++) {
        tr[table[i]] = i;
      }
      var s = [11, 10, 3, 8, 4, 6];
      var r = ["B", "V", "1", "", "", "4", "", "1", "", "7", "", ""];
      var xor = 177451812;
      var add = 8728348608;
      function encode(x) {
        if (x <= 0 || x >= 1e9) {
          return null;
        }
        x = (x ^ xor) + add;
        var result = r.slice();
        for (var i2 = 0; i2 < 6; i2++) {
          result[s[i2]] = table[Math.floor(x / 58 ** i2) % 58];
        }
        return result.join("");
      }
      return { encode };
    })();
  }

  // src/modules/blocker/history.ts
  var historyChangedEvent = "bili-atelier-block-history-changed";
  var historyStorageKey = "BiliAtelier_BlockHistory";
  var historyLimit = 200;
  function summarizeBlockedItem(item) {
    return item.title || item.content || item.liveTitle || item.name || item.bv || item.roomId || item.partition || "\u672A\u77E5\u5185\u5BB9";
  }
  function detailBlockedItem(item) {
    const parts = [];
    if (item.name) {
      parts.push(`\u7528\u6237\uFF1A${item.name}`);
    }
    if (item.uid !== void 0) {
      parts.push(`UID\uFF1A${item.uid}`);
    }
    if (item.bv) {
      parts.push(`BV\uFF1A${item.bv}`);
    }
    if (item.roomId) {
      parts.push(`\u76F4\u64AD\u95F4\uFF1A${item.roomId}`);
    }
    return parts.join(" / ");
  }
  function readBlockHistory() {
    const value = GM_getValue(historyStorageKey, []);
    if (!Array.isArray(value)) {
      return [];
    }
    return value.filter((entry) => entry && typeof entry === "object" && typeof entry.id === "string").slice(0, historyLimit);
  }
  function writeBlockHistory(history) {
    GM_setValue(historyStorageKey, history.slice(0, historyLimit));
  }
  function notifyBlockHistoryChanged() {
    document.dispatchEvent(new CustomEvent(historyChangedEvent));
  }
  function decisionRuleReferences(decision) {
    if (decision.linkedRules?.length) {
      return decision.linkedRules;
    }
    if (decision.ruleKey && decision.ruleValue !== void 0) {
      return [{ key: decision.ruleKey, value: decision.ruleValue }];
    }
    return [];
  }
  function ruleIdentity(rules) {
    return rules.map((rule) => `${rule.key}=${String(rule.value)}`).sort().join("&");
  }
  function createHistoryId(item, decision) {
    const identity = ruleIdentity(decisionRuleReferences(decision));
    if (identity) {
      return [item.kind, identity].join("|");
    }
    return [
      item.kind,
      decision.ruleKey || decision.type,
      String(decision.ruleValue ?? decision.matching)
    ].join("|");
  }
  function entryRuleReferences(entry) {
    if (entry.linkedRules?.length) {
      return entry.linkedRules;
    }
    if (entry.ruleKey && entry.ruleValue !== void 0) {
      return [{ key: entry.ruleKey, value: entry.ruleValue }];
    }
    return [];
  }
  function entryMatchesRule(entry, ruleKey, normalizedValue) {
    return entryRuleReferences(entry).some((rule) => {
      return rule.key === ruleKey && String(rule.value) === normalizedValue;
    });
  }
  function isDuplicateHistoryEntry(entry, kind, id, rules) {
    if (entry.id === id) {
      return true;
    }
    if (entry.kind !== kind || rules.length === 0) {
      return false;
    }
    const existingRules = entryRuleReferences(entry);
    return existingRules.some((existingRule) => {
      return rules.some((rule) => existingRule.key === rule.key && String(existingRule.value) === String(rule.value));
    });
  }
  function recordBlockHistory(item, decision) {
    const id = createHistoryId(item, decision);
    const history = readBlockHistory();
    const rules = decisionRuleReferences(decision);
    if (history.some((entry2) => isDuplicateHistoryEntry(entry2, item.kind, id, rules))) {
      return;
    }
    const entry = {
      id,
      timestamp: Date.now(),
      kind: item.kind,
      type: decision.type,
      matching: decision.matching,
      ruleKey: decision.ruleKey,
      ruleValue: decision.ruleValue,
      linkedRules: decision.linkedRules,
      uid: item.uid,
      name: item.name,
      title: item.title?.slice(0, 160),
      content: item.content?.slice(0, 220),
      bv: item.bv,
      liveTitle: item.liveTitle?.slice(0, 160),
      roomId: item.roomId,
      partition: item.partition,
      summary: summarizeBlockedItem(item).slice(0, 140),
      detail: detailBlockedItem(item),
      url: location.href
    };
    writeBlockHistory([entry, ...history]);
    notifyBlockHistoryChanged();
  }
  function removeHistoryByRules(rules) {
    writeBlockHistory(readBlockHistory().filter((entry) => {
      return !rules.some((rule) => entryMatchesRule(entry, rule.key, String(rule.value)));
    }));
  }

  // src/modules/blocker/decision.ts
  function isWhiteUid(uid, rules) {
    return uid !== void 0 && exactMatch(rules.precise_uid_white, uid) !== null;
  }
  function readRuleSnapshotWithHistoryAliases() {
    const rules = readRuleSnapshot();
    const preciseNameAliases = new Set(rules.precise_name.map((item) => String(item)));
    for (const entry of readBlockHistory()) {
      if (entry.kind !== "comment" || entry.uid === void 0 || !entry.name || exactMatch(rules.precise_uid, entry.uid) === null) {
        continue;
      }
      preciseNameAliases.add(entry.name);
    }
    return {
      ...rules,
      precise_name: Array.from(preciseNameAliases)
    };
  }
  function blockUser(uid, name, rules) {
    if (uid !== void 0) {
      const uidMatch = exactMatch(rules.precise_uid, uid);
      if (uidMatch) {
        return { type: "\u7CBE\u786E UID", matching: uidMatch.matching, ruleKey: "precise_uid", ruleValue: uidMatch.matching };
      }
    }
    const nameMatch = blockExactFuzzyRegex(name, {
      exactRules: rules.precise_name,
      fuzzyRules: rules.name,
      regexRules: rules.nameCanonical,
      options: { caseInsensitive: true },
      onInvalidRegexRule: ({ rule, error }) => warnLog(`\u7528\u6237\u540D\u6B63\u5219\u65E0\u6548\uFF1A${rule}`, error)
    });
    if (nameMatch) {
      const ruleKey = nameMatch.kind === "exact" ? "precise_name" : nameMatch.kind === "regex" ? "nameCanonical" : "name";
      return { type: `\u7528\u6237\u540D${nameMatch.kind}`, matching: nameMatch.matching, ruleKey, ruleValue: nameMatch.matching };
    }
    return null;
  }
  function decideVideo(item, rules) {
    if (isWhiteUid(item.uid, rules)) {
      return null;
    }
    const userDecision = blockUser(item.uid, item.name, rules);
    if (userDecision) {
      return userDecision;
    }
    const titleMatch = blockExactFuzzyRegex(item.title, {
      fuzzyRules: rules.title,
      regexRules: rules.titleCanonical,
      options: { caseInsensitive: true },
      onInvalidRegexRule: ({ rule, error }) => warnLog(`\u6807\u9898\u6B63\u5219\u65E0\u6548\uFF1A${rule}`, error)
    });
    if (titleMatch) {
      const ruleKey = titleMatch.kind === "regex" ? "titleCanonical" : "title";
      return { type: `\u6807\u9898${titleMatch.kind}`, matching: titleMatch.matching, ruleKey, ruleValue: titleMatch.matching };
    }
    return null;
  }
  function decideComment(item, rules) {
    if (isWhiteUid(item.uid, rules)) {
      return null;
    }
    const userDecision = blockUser(item.uid, item.name, rules);
    if (userDecision) {
      return userDecision;
    }
    const commentMatch = blockExactFuzzyRegex(item.content, {
      fuzzyRules: rules.commentOn,
      regexRules: rules.commentOnCanonical,
      options: { caseInsensitive: true },
      onInvalidRegexRule: ({ rule, error }) => warnLog(`\u8BC4\u8BBA\u6B63\u5219\u65E0\u6548\uFF1A${rule}`, error)
    });
    if (commentMatch) {
      const ruleKey = commentMatch.kind === "regex" ? "commentOnCanonical" : "commentOn";
      return { type: `\u8BC4\u8BBA${commentMatch.kind}`, matching: commentMatch.matching, ruleKey, ruleValue: commentMatch.matching };
    }
    return null;
  }
  function decideLive(item, rules) {
    if (isWhiteUid(item.uid, rules)) {
      return null;
    }
    const userDecision = blockUser(item.uid, item.name, rules);
    if (userDecision) {
      return userDecision;
    }
    if (item.roomId) {
      const roomMatch = exactMatch(rules.precise_liveRoomId, item.roomId);
      if (roomMatch) {
        return {
          type: "\u7CBE\u786E\u76F4\u64AD\u95F4 ID",
          matching: roomMatch.matching,
          ruleKey: "precise_liveRoomId",
          ruleValue: roomMatch.matching
        };
      }
    }
    if (item.partition) {
      const partitionMatch = exactMatch(rules.precise_partition, item.partition);
      if (partitionMatch) {
        return {
          type: "\u7CBE\u786E\u76F4\u64AD\u5206\u533A",
          matching: partitionMatch.matching,
          ruleKey: "precise_partition",
          ruleValue: partitionMatch.matching
        };
      }
    }
    const titleMatch = blockExactFuzzyRegex(item.liveTitle, {
      fuzzyRules: rules.liveTitle,
      regexRules: rules.liveTitleCanonical,
      options: { caseInsensitive: true },
      onInvalidRegexRule: ({ rule, error }) => warnLog(`\u76F4\u64AD\u6807\u9898\u6B63\u5219\u65E0\u6548\uFF1A${rule}`, error)
    });
    if (titleMatch) {
      const ruleKey = titleMatch.kind === "regex" ? "liveTitleCanonical" : "liveTitle";
      return { type: `\u76F4\u64AD\u6807\u9898${titleMatch.kind}`, matching: titleMatch.matching, ruleKey, ruleValue: titleMatch.matching };
    }
    return null;
  }
  function decideBlockableItem(item, rules) {
    if (item.kind === "video") {
      return decideVideo(item, rules);
    }
    if (item.kind === "comment") {
      return decideComment(item, rules);
    }
    return decideLive(item, rules);
  }
  function getManualChoices(item) {
    const choices = [];
    if (item.uid !== void 0) {
      choices.push({ label: `\u5C4F\u853D UID ${item.uid}`, key: "precise_uid", value: item.uid });
    }
    if (item.name) {
      choices.push({ label: `\u5C4F\u853D\u7528\u6237\u540D ${item.name}`, key: "precise_name", value: item.name });
    }
    if (item.title) {
      choices.push({ label: `\u5C4F\u853D\u6807\u9898\u5173\u952E\u8BCD ${item.title.slice(0, 30)}`, key: "title", value: item.title });
    }
    if (item.content) {
      choices.push({ label: `\u5C4F\u853D\u8BC4\u8BBA\u5173\u952E\u8BCD ${item.content.slice(0, 30)}`, key: "commentOn", value: item.content });
    }
    if (item.liveTitle) {
      choices.push({ label: `\u5C4F\u853D\u76F4\u64AD\u6807\u9898 ${item.liveTitle.slice(0, 30)}`, key: "liveTitle", value: item.liveTitle });
    }
    if (item.roomId) {
      choices.push({ label: `\u5C4F\u853D\u76F4\u64AD\u95F4 ${item.roomId}`, key: "precise_liveRoomId", value: item.roomId });
    }
    if (item.partition) {
      choices.push({ label: `\u5C4F\u853D\u76F4\u64AD\u5206\u533A ${item.partition}`, key: "precise_partition", value: item.partition });
    }
    return choices;
  }
  function getCommentUserBlockChoices(item) {
    const choices = [];
    if (item.uid !== void 0) {
      choices.push({ key: "precise_uid", value: item.uid });
    }
    if (item.name) {
      choices.push({ key: "precise_name", value: item.name });
    }
    return choices;
  }
  function getVideoOwnerBlockChoices(item) {
    const choices = [];
    if (item.uid !== void 0) {
      choices.push({ key: "precise_uid", value: item.uid });
    }
    if (item.name) {
      choices.push({ key: "precise_name", value: item.name });
    }
    return choices;
  }
  function getLiveOwnerBlockChoices(item) {
    const choices = [];
    if (item.uid !== void 0) {
      choices.push({ key: "precise_uid", value: item.uid });
    }
    if (item.name) {
      choices.push({ key: "precise_name", value: item.name });
    }
    if (choices.length === 0 && item.roomId) {
      choices.push({ key: "precise_liveRoomId", value: item.roomId });
    }
    return choices;
  }

  // src/modules/blocker/page-context.ts
  function currentLocation() {
    return typeof location !== "undefined" ? location : null;
  }
  function isHomePageLocation(value = currentLocation()) {
    return value?.hostname === "www.bilibili.com" && /^\/?$/.test(value.pathname || "");
  }
  function isSpacePageLocation(value = currentLocation()) {
    return value?.hostname === "space.bilibili.com" && /^\/\d+/.test(value.pathname || "");
  }
  function parseUid(value) {
    const match = value?.match(/space\.bilibili\.com\/(\d+)|data-user-id=["']?(\d+)|data-usercard-mid=["']?(\d+)|^(\d+)$/i);
    const raw = match?.[1] || match?.[2] || match?.[3] || match?.[4];
    if (!raw) {
      return void 0;
    }
    const uid = Number.parseInt(raw, 10);
    return Number.isFinite(uid) ? uid : void 0;
  }
  function parseSpaceProfileUid(pathname = currentLocation()?.pathname) {
    return parseUid(pathname?.match(/^\/(\d+)/)?.[1]);
  }

  // src/modules/blocker/extract.ts
  var videoCardSelectors = [
    ".bili-video-card",
    ".bili-feed-card",
    ".feed-card",
    ".video-card",
    ".video-page-card-small",
    ".video-page-operator-card-small",
    ".small-item",
    ".history-record",
    ".rank-item",
    ".rank-list>li",
    ".video-list-item",
    ".card-box",
    "li",
    "div"
  ];
  var commentSelectors = [
    "bili-comment-thread-renderer",
    "bili-comment-reply-renderer",
    ".reply-item",
    ".sub-reply-item",
    ".list-item",
    ".comment-item"
  ];
  var liveCardSelectors = [
    ".bili-live-card",
    ".live-card",
    ".room-card",
    ".bili-feed-card",
    ".feed-card",
    ".bili-video-card",
    ".recommend-card",
    ".floor-single-card",
    ".video-list-item",
    ".index_item_JSGkw",
    "li",
    "div"
  ];
  var ignoredTextTags = /* @__PURE__ */ new Set(["STYLE", "SCRIPT", "TEMPLATE", "NOSCRIPT"]);
  function normalizeVisibleText(value) {
    return value.replace(/\s+/g, " ").trim();
  }
  function readVisibleText(node) {
    if (!node) {
      return "";
    }
    if (node.nodeType === 3) {
      return node.textContent || "";
    }
    const tagName = String(node.tagName || node.localName || "").toUpperCase();
    if (ignoredTextTags.has(tagName) || node.getAttribute?.("data-bili-blocker-ui") === "true") {
      return "";
    }
    if (tagName === "BR") {
      return "\n";
    }
    if (tagName === "IMG") {
      return node.getAttribute?.("alt") || node.getAttribute?.("title") || "";
    }
    const childNodes = node.childNodes && node.childNodes.length > 0 ? node.childNodes : node.children;
    const parts = Array.from(childNodes || []).map(readVisibleText);
    if (parts.length === 0 && typeof node.localText === "string") {
      parts.push(node.localText);
    }
    if (node.shadowRoot) {
      parts.push(readVisibleText(node.shadowRoot));
    }
    return parts.filter(Boolean).join(" ");
  }
  function text(el) {
    return normalizeVisibleText(readVisibleText(el));
  }
  function attr(el, name) {
    return el?.getAttribute(name)?.trim() || "";
  }
  function first(root, selectors) {
    for (const selector of selectors) {
      const found = root.querySelector(selector);
      if (found) {
        return found;
      }
    }
    return null;
  }
  function queryAllDeep(root, selector) {
    const results = [];
    const visit = (node) => {
      if (typeof Element !== "undefined" && node instanceof Element && node.matches(selector)) {
        results.push(node);
      }
      results.push(...Array.from(node.querySelectorAll(selector)));
      for (const el of Array.from(node.querySelectorAll("*"))) {
        if (el.shadowRoot) {
          visit(el.shadowRoot);
        }
      }
    };
    visit(root);
    return results;
  }
  function queryOneDeep(root, selectors) {
    for (const selector of selectors) {
      const local = root.querySelector(selector);
      if (local) {
        return local;
      }
    }
    for (const el of Array.from(root.querySelectorAll("*"))) {
      const shadowRoot = el.shadowRoot;
      if (!shadowRoot) {
        continue;
      }
      const nested = queryOneDeep(shadowRoot, selectors);
      if (nested) {
        return nested;
      }
    }
    return null;
  }
  function parseBv(url) {
    return url?.match(/\/video\/(BV[^/?#]+)/i)?.[1] || null;
  }
  function parseRoomId(url) {
    return url?.match(/live\.bilibili\.com\/(?:blanc\/)?(\d+)/i)?.[1] || void 0;
  }
  function getSpaceOwner(root) {
    if (!isSpacePageLocation()) {
      return { uid: void 0, name: void 0 };
    }
    const uid = parseSpaceProfileUid();
    const name = text(first(root, [
      "#h-name",
      ".h-name",
      ".n-name",
      ".space-header .name",
      ".user-info .name",
      ".user-name",
      ".nickname"
    ])) || void 0;
    return { uid, name };
  }
  function fillOwnerFromSpacePage(owner, root) {
    if (owner.uid !== void 0 || owner.name) {
      return owner;
    }
    return getSpaceOwner(root);
  }
  function closestAny(el, selectors) {
    for (const selector of selectors) {
      const found = el.closest(selector);
      if (found instanceof HTMLElement) {
        return found;
      }
    }
    return el instanceof HTMLElement ? el : null;
  }
  function getOwner(root) {
    const ownerLink = first(root, [
      'a[href*="//space.bilibili.com/"]',
      'a[href*="space.bilibili.com/"]',
      ".bili-video-card__info--owner",
      ".bili-live-card__info--uname",
      ".bili-live-card__info--owner",
      ".live-card__info--uname",
      ".upname a",
      ".channel-name",
      ".anchor-name",
      ".room-anchor",
      ".up-name"
    ]);
    const href = attr(ownerLink, "href");
    const name = text(ownerLink?.querySelector?.(".bili-video-card__info--author")) || text(ownerLink?.querySelector?.(".bili-live-card__info--uname")) || text(ownerLink?.querySelector?.(".name")) || text(ownerLink);
    const uid = parseUid(href) ?? parseUid(attr(ownerLink, "data-usercard-mid")) ?? parseUid(attr(ownerLink, "data-user-id"));
    return { uid, name: name || void 0 };
  }
  function collectVideoItems(root = document) {
    const anchors = Array.from(root.querySelectorAll('a[href*="/video/BV"]'));
    const seen = /* @__PURE__ */ new Set();
    const items = [];
    for (const anchor of anchors) {
      const card = closestAny(anchor, videoCardSelectors);
      if (!card || seen.has(card)) {
        continue;
      }
      seen.add(card);
      const owner = fillOwnerFromSpacePage(getOwner(card), root);
      const title = attr(anchor, "title") || text(first(card, [".bili-video-card__info--tit", ".title", "h3", ".video-name"])) || text(anchor);
      const bv = parseBv(anchor.href);
      const insertionEl = first(card, [
        ".bili-video-card__info--bottom",
        ".bili-video-card__info--owner",
        ".bili-video-card__info",
        ".video-card-info",
        ".info",
        ".meta",
        ".playinfo"
      ]) || card;
      items.push({
        kind: "video",
        el: card,
        insertionEl,
        title: title || void 0,
        bv: bv || void 0,
        uid: owner.uid,
        name: owner.name
      });
    }
    return items;
  }
  function collectCommentItems(root = document) {
    const selector = commentSelectors.join(",");
    const candidates = queryAllDeep(root, selector);
    const seen = /* @__PURE__ */ new Set();
    const items = [];
    for (const candidate of candidates) {
      if (!(candidate instanceof HTMLElement) || seen.has(candidate)) {
        continue;
      }
      seen.add(candidate);
      const searchRoot = candidate.shadowRoot || candidate;
      const userLink = queryOneDeep(searchRoot, [
        '#user-name a[href*="space.bilibili.com/"]',
        'a[href*="space.bilibili.com/"]',
        ".user-name",
        ".sub-user-name",
        ".name"
      ]);
      const contentEl = queryOneDeep(searchRoot, [
        "#contents",
        ".reply-content",
        ".text-con",
        ".text",
        "bili-rich-text"
      ]);
      const content = text(contentEl);
      const href = attr(userLink, "href") || attr(userLink, "data-usercard-mid") || attr(userLink, "data-user-id") || candidate.outerHTML.slice(0, 500);
      const uid = parseUid(href);
      const name = text(userLink) || void 0;
      if (!content && uid === void 0 && !name) {
        continue;
      }
      items.push({
        kind: "comment",
        el: candidate,
        insertionEl: userLink || candidate,
        name,
        uid,
        content: content || void 0
      });
    }
    return items;
  }
  function collectLiveItems(root = document) {
    const anchors = Array.from(root.querySelectorAll('a[href*="live.bilibili.com/"]'));
    const seen = /* @__PURE__ */ new Set();
    const items = [];
    for (const anchor of anchors) {
      const roomId = parseRoomId(anchor.href);
      if (!roomId) {
        continue;
      }
      const card = closestAny(anchor, liveCardSelectors);
      if (!card || seen.has(card)) {
        continue;
      }
      seen.add(card);
      const owner = fillOwnerFromSpacePage(getOwner(card), root);
      const liveTitle = attr(anchor, "title") || text(first(card, [".room-title", ".bili-live-card__info--tit", "h3", ".title"])) || text(anchor);
      const partition = text(first(card, [".area-name", ".video-card-meta__chip", ".partition"]));
      items.push({
        kind: "live",
        el: card,
        insertionEl: first(card, [
          ".bili-live-card__info--bottom",
          ".bili-live-card__info",
          ".bili-video-card__info--bottom",
          ".bili-video-card__info--owner",
          ".live-card__info",
          ".room-card-info",
          ".video-card-info",
          ".info",
          ".meta"
        ]) || card,
        name: owner.name,
        uid: owner.uid,
        liveTitle: liveTitle || void 0,
        roomId,
        partition: partition || void 0
      });
    }
    return items;
  }

  // src/modules/sounds/panel.ts
  function mountSoundPanel() {
    const host = document.createElement("section");
    host.className = "luna-sounds";
    host.innerHTML = `<style>
    .luna-sounds{display:flex;flex-direction:column;gap:10px;min-width:0}
    .luna-sounds h2{font-size:14px!important}.luna-sounds p{line-height:1.5!important}
    .luna-sound-group{padding:14px;border:2px solid;border-color:var(--atelier-edge) var(--atelier-highlight) var(--atelier-highlight) var(--atelier-edge);background:var(--atelier-surface);min-width:0}
    .luna-sound-row{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:8px 0}
    .luna-sound-row label{display:flex;align-items:center;gap:8px;min-width:0}
    .luna-sound-row input[type=range]{width:clamp(100px,25vw,240px);max-width:100%;accent-color:var(--atelier-accent)}
    .luna-sound-row input[type=checkbox]{width:18px;height:18px;accent-color:var(--atelier-accent)}
    .luna-sound-row output{min-width:4ch;font-variant-numeric:tabular-nums}
    .luna-sounds select{max-width:100%;min-width:0;padding:5px;background:var(--atelier-field);border:2px inset var(--atelier-edge)}
    .luna-sounds summary{cursor:pointer;padding:7px 0}.luna-sounds [role=status]{border:1px solid var(--atelier-edge);padding:10px;background:var(--atelier-panel)}
  </style><h2>\u8BBE\u7F6E \u203A \u97F3\u6548</h2><p>\u8F7B\u67D4\u7684 Windows XP \u4EA4\u4E92\u58F0\u97F3\u3002\u901A\u77E5\u548C\u64CD\u4F5C\u7ED3\u679C\u59CB\u7EC8\u9759\u97F3\uFF1B\u97F3\u91CF\u53EA\u5F71\u54CD\u6309\u94AE\u3001\u5BFC\u822A\u548C\u7A97\u53E3\uFF0C\u504F\u597D\u4FDD\u5B58\u5728\u672C\u673A\u3002</p>`;
    let prefs = readSoundPreferences();
    const events = new AbortController();
    const controls = [];
    const status2 = document.createElement("p");
    status2.setAttribute("role", "status");
    status2.setAttribute("aria-live", "polite");
    const refresh = () => {
      prefs = readSoundPreferences();
      controls.forEach((update) => update());
      status2.textContent = soundPlaybackStatus();
    };
    const save = () => writeSoundPreferences(prefs);
    const button3 = (label, run) => {
      const node = document.createElement("button");
      node.type = "button";
      node.className = "luna-button";
      node.textContent = label;
      node.addEventListener("click", () => {
        run();
        status2.textContent = soundPlaybackStatus();
      });
      return node;
    };
    function row(name, category) {
      const section = document.createElement("section");
      section.className = "luna-sound-group";
      const values = () => category ? prefs.categories[category] : prefs;
      const line2 = document.createElement("div");
      line2.className = "luna-sound-row";
      const label = document.createElement("label"), enabled = document.createElement("input");
      enabled.type = "checkbox";
      enabled.setAttribute("aria-label", name + "\u5F00\u5173");
      label.append(enabled, document.createTextNode(name));
      line2.append(label);
      enabled.addEventListener("change", () => {
        values().enabled = enabled.checked;
        save();
        sound("select");
      });
      const volumeLabel = document.createElement("label");
      volumeLabel.textContent = "\u97F3\u91CF";
      const volume2 = document.createElement("input");
      volume2.type = "range";
      volume2.min = "0";
      volume2.max = "100";
      volume2.step = "1";
      volume2.setAttribute("aria-label", name + "\u97F3\u91CF");
      const output = document.createElement("output");
      volume2.addEventListener("input", () => {
        values().volume = Number(volume2.value) / 100;
        output.value = volume2.value + "%";
        save();
      });
      volume2.addEventListener("change", () => sound("select"));
      volumeLabel.append(volume2, output);
      line2.append(volumeLabel);
      if (category) line2.append(button3("\u8BD5\u542C" + name, () => previewSound(catalog_default.categories.find((item) => item.id === category).sample, category)));
      controls.push(() => {
        enabled.checked = values().enabled;
        volume2.value = String(Math.round(values().volume * 100));
        output.value = volume2.value + "%";
      });
      section.append(line2);
      host.append(section);
    }
    row("\u603B\u97F3\u6548");
    for (const category of catalog_default.categories) row(category.name, category.id);
    const details = document.createElement("details"), summary = document.createElement("summary");
    summary.textContent = "\u5168\u90E8 26 \u79CD\u539F\u7248\u58F0\u97F3\u8BD5\u542C";
    details.append(summary);
    summary.addEventListener("click", () => sound("menu"));
    const line = document.createElement("div");
    line.className = "luna-sound-row";
    const select = document.createElement("select");
    select.setAttribute("aria-label", "\u8BD5\u542C\u58F0\u97F3");
    for (const clip of catalog_default.sounds) {
      const option = document.createElement("option");
      option.value = clip.id;
      option.textContent = clip.name + (clip.previewOnly ? "\uFF08\u4EC5\u8BD5\u542C\uFF09" : "") + ` \xB7 ${(clip.durationMs / 1e3).toFixed(2)} \u79D2`;
      select.append(option);
    }
    select.addEventListener("change", () => {
      stopSoundPreview();
      sound("select");
    });
    line.append(select, button3("\u8BD5\u542C\u6240\u9009\u58F0\u97F3", () => {
      const cue = Object.values(catalog_default.cues).find((cue2) => cue2.sound === select.value);
      previewSound(select.value, cue?.category || "navigation");
    }), button3("\u505C\u6B62\u8BD5\u542C", () => {
      stopSoundPreview();
      sound("cancel");
    }));
    const hint = document.createElement("p");
    hint.textContent = "\u901A\u77E5\u3001\u64CD\u4F5C\u7ED3\u679C\u4EE5\u53CA\u957F\u5F00\u673A\u3001\u5173\u673A\u3001\u767B\u5F55\u548C\u786C\u4EF6\u63D0\u793A\u6837\u672C\u4EC5\u4F9B\u624B\u52A8\u8BD5\u542C\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u54CD\u8D77\u3002\u672A\u5206\u914D\u7ED9\u65E5\u5E38\u52A8\u4F5C\u7684\u6837\u672C\u4F7F\u7528\u201C\u5BFC\u822A\u4E0E\u7A97\u53E3\u201D\u97F3\u91CF\u3002";
    details.append(line, hint);
    host.append(details);
    const quiet = document.createElement("p");
    quiet.textContent = "\u5F53\u524D\u9875\u6216\u811A\u672C\u8986\u76D6\u7684 B \u7AD9\u6807\u7B7E\u64AD\u653E\u5A92\u4F53\u65F6\uFF08\u5305\u62EC\u9759\u97F3\u89C6\u9891\uFF09\uFF0C\u754C\u9762\u97F3\u6548\u6682\u65F6\u5B89\u9759\uFF1B\u5207\u5230\u540E\u53F0\u3001\u5173\u95ED\u7A97\u53E3\u6216\u53D7\u6D4F\u89C8\u5668\u9650\u5236\u7684\u58F0\u97F3\u4E0D\u4F1A\u8865\u64AD\u3002\u8BD5\u542C\u4E5F\u9075\u5B88\u5F00\u5173\u4E0E\u97F3\u91CF\u3002";
    host.append(quiet, status2);
    window.addEventListener(soundPreferencesChanged, refresh, { signal: events.signal });
    refresh();
    return { host, dispose() {
      events.abort();
      stopSoundPreview();
      host.remove();
    } };
  }

  // src/ui/assets/luna-olive/atelier-icon.png
  var atelier_icon_default = readCachedResourceUrl("atelier_atelier_icon_png");

  // src/ui/assets/luna-olive/nav-users.png
  var nav_users_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAh1SURBVFhH7VZbbFxXFV3zHs94ZjwTOx6/YydOnTRxE2Pixk3btG6TWi2QRwnQqOXRSKiqwhcfCImPUoR4fEBVQPCBCg0qEWoa0ZQ0jxKalLyITZImsRPjOI7tmfGMPe/XvXPv3Ms617Fxqn4ghAQf3dKaM3Nn77vX3mfvfQ4+kf+1mO6s/xX5+R68XB1csa2h/f41ZTmLXGIqe/Pm8HtnrhV+tP8MPqRKkdAN5TvycQT8xPNLly7dVltba1FV1TQxMTGVz+dP8/lrRI5QibvkF3vw+rqeJ59tXdsPi9OHspSGko8hN3MD1y7/tbDveOiFtwfwDlVThGYYUSx31nl5tKGh4eyuXbs+s2PHjuYNGzY0tre3N65cuXK13+/fmkgkviBJ0m3qTRGChBGNiLzjns699Y3t4id0pQCbawngqEI+E6OTkm2pK91/6VbpQrqAaarIhiJlMYGvtba2Hujr63PSGaxWq4G6ujo0NzfD6XTCbDb7w+HwFkVRBqg/Q8g//Qr8FXbr74N1zQ6TrpBWAWabExaHByaTBbHoFCRVg5ybtapyrurybfyddgmiTCwQaG1qajrY1dXl1DSNhib4fD4EAgE4HA4MDAzg4sWLiEQi8Hq9FcXMTGupjPO0iz/ZhS+2NdV/fjoaoZ2Z4WsITQwhdeMEpNETqMiMwyonUTTZIRUSnpNDuEA7kUFRD7CKD5vN9tvly5f7SqUSmGLY7XZw33H+/HmMXvkQXflpbPXb4a+04kK5jLdslu6cXO6kaZhF9MiW3l6U+DwcjXEtoWNVEzxObgcDAZ+DQbWlM0gl4wEg2UQ7HxEXvgWBVhbbg7quQxAQEYto1xZuYXuLG90bHHAHGuEJuuGpdmK3qmDjudv2Vz9I9F0IYXBZXV0bDWG32bCsvm7OqRC+bwEkEahwoqHKaeM/JIEKQ4fCnOF5phWyLBvIZrNYVzGNX7+4Ars/V4+1jwfRdn8tahqdcNrKsNhNCLptaHJhFW2DqqpZobIemTlB5C7wfVBYFwL8PRrmXsz5XBAz090loi8Wi0b6Q6EQvrTWg2yhzHQyK5IKNS9BLpSQySisA24RbGAiRDRLipJs/ljn844FiZIgoGB0OpOnTYagwpyYWel+4VigUCgYGWissCCdVhCLyYbDcLjIVcbsbAm5nIpUqgRNNWaIfSiUughZOBXOuAqHC7hDht8j8TiGp1TRgqIDjAIUYqbj7DwBkYUacxH5vGoQEEilFCSTc9+TybksJLgmqEb7ciqPq+OxGB3RochEcRGM6ElAKeHKRFg9M4IR2kQJMcwMMbPtjiwmMJ7V7jguGatwmMvd/TsUySOcB72i8Oq7OHhpMhyd2wbhcBHkORKhRAK/ORu/zSEkhtiksBPOhYg5EGH1P8Ped4sHoh6cagn1ds6vksZt1PhuzfheLGpIksjViZz05zROUn2QGAsG5FzAo/dXsn0VVnyJRSlQZA2Mp1LYNzCe/NlR/Th1zxGXCVEHhggCBTod48x/jNkw2uPqrAwHe9dnNqFMx5JUvgMN18fSOJXUhiJiED2AvHe795vl3u4XhtMOhy9+C2XaZRh1nNkc4b6/NTODV/6mXSnNQpwlHxBiCBlTUIggIA6GEEkMkkQVx6xH0VE5wX3ucJphYxuL6AWBick8Ligd0mlJOYWHJGfPcz0/3PnUzs7ezl7HTL4Fn9ryK8TyWST5gnjVemRWfx1/sEpoe6KlIWKOWNUh9RB9iVZcIDB/Gore9Jq8nZ2mpt3fbqy/d+v60V+iYfJPqGBHaJoOyeSFbfM3cKZ6p5i2iJgP4Yk90wgGPBwyAdw8O4XvbfsJW5cRCdJc9+5/Bu3dQeh2HeORcRx+/fDp0hulPfR1i2CR/Oss0C3db1QsXfH0m/0PPdW7/r4OXLbdi84XvwtPTz9cjz6H6q9+HzV9/bg9kcSn71mFemsPjh1won0jZ71NQ2J2Fk/f91l47YDHAbzy3kswNSjw+r3IlXLQrTo0j9YcjUbNCOEqfWYJbWEqVbpq3n94de8ar8MLi27FIz1rcPjcOIKPbUawbzMCbX5U8qZg5fjhEOIMt6G7fiNOHqxFXsljJDlilLZ465nJSzgSOoLq2mrDuVyWUeARXdVYBd8m37NUWUt4iLmxaNnw5str6lZ3mlROOLatcGChg1XNbTh69AZcLiwgNqUYOmxtOOCCnmhBWk7DwdCPjbxvEPjO4W9h0wObkCwmDQIGlBw7RIG7xe1BKx6nWq3wbxBwOzxftvLsVmTdcF7kW6SsjprKAMKjOsbGZuecx9I8Eb2QOEZkjiGlLFqtaDiqaajBoUt/xA/eeQnuBjtSUordkDHIJSUex9TLyTTk9jB9DfysIWwGgQq7qynNO1yWEDoKy6PATi2kgc5lK7F/303OBwWnTk3C71hiEFBLOjISbQpZxJIxFLQCBqN/wbv/+B1sPhsnZcJAvBA30p/mFU1kIjXLGxn50C2rBRajC7wPHtfrfLWotLuxxB1gEXm41ybwYgMzyzRFNhWtU7hxqYT2ynVQOGRmc3Fcj1xW46Efj+rVJyRr0Oq1Vlk9lTWVbm+T11XW5jpNY8vIqoz8VF6SIlKmfLU8hmEc419vE1cMAvaeA8M+V3WH31UFl90FHwm4HW7YrXZYzcadBYMsLJvFBgt3LRQdzOViZyN67MiQXhi/zr9FW4moKglRXGIVQ22+y4QIRqJOxVVumBC35Jn5OdBiqtu+1+RqfpjHnNil+ecLosvRPORoWs9ei6CUEMNklpggRgkx3URfi7QKe7GK43rxezgdjGNYkODmGoeZOq8g2DYSy4hqQrzgoyIiEFGKQhdX63mI3zx17r7v/7uymKFIlyDy0dTNixjZ4iouIhUQhP4jp5/I/5EA/wThuHXkPk14XgAAAABJRU5ErkJggg==";

  // src/ui/assets/luna-olive/nav-control-panel.png
  var nav_control_panel_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAkaSURBVFhHpVd5bBzVGf/N7M6uvWt7fV+J48THmhBMCCFtAiFRoVJbCOWQSNUDQQDRVkVtpVatekD5g6ZFCIEa0SZqVVWioUqVFqEUmtDSAOEIR0oiwDg+EuNr78s7u3PP9Pve2g6l2GnaT/o8OzPvvd/vO97vjSX8byatHYg2eK7XaVtWc6i2pr2+qSFaG6mNFgvFuZHh0Ufi8fg0jTPJPTFjCVuOgHi3eetVbaVstl8JKP2Au6ZlxYrepvbOjrqW1uaGto7Otu7uRtMfQc4OI6lXY+aVp71TB/fcH0skn6DpM+Q2r7OULRK4dPCSaLi+sd+xzL7a+shgbV2ku6mteV3ziq6aUGtXUIm0BULNK+EP12E66yE+5+Fs0sZM1kW+aELTbWiWjPaJ/bbx2i8PZnL5PbTs2+SaAFjCBIHLN1y+c/MNN+9bt3lzfXVDO+YomrIvgqwewHRSQyxTRjytIZHVkc8ZgOMCMk3l2Xxl8yjTsoL2xF887809zydSmZ/T0+PkJfF+CROzb7ntzmNfenDv1n1H0nh/NAvVtFEumzA1KqE5D+ZjlwE/OZtBmdX5PV1lFyGfA8NXjTrrPYRef/DVmVhiN416ibwoxi9hvJokSZ7/ndNZ/O2Fs5iezSGfUSvgTC9IQxRyxwHmVKpqEkgk0KOouH5Awde21eHhnZ3Y/81BbFhVDY2IeZ7H6wbJfeTLmp//6CXNUlVKrZ8QObKyJaj5FQ9hyUG94mLDmjDW97ZgfV8jVreFUV8XRH0khFBYFjxVHfjVS1nYNhG9ABMEXBeTtk3L6AaitRY2rQujv6MKG6NN6O2qw9o1DWLwgnFbc+YNKnu+TPMJ07Rc2NQb0rKb7j+NUwU1l5aCvKxm4dpoGL+/70r85O7LsWNb9yK4RSD0GpyoIvV1me7V+D+hpU7AoQYkfCLCBC4sA4KAZRpGgKtFC5nOv4fAdwxuEwA3v00POAOWqSH3xj3Iv343zaEn1KABSqLrBeD3+7n+vDZXZ1kTBFx4MU4htSMk7vR5Y/AFYAE+7y5XK/4qzOQJKL33wpIUVBFkYy3nMQKfX66iqQHyc4t9yO6uNKcgxwM8xzJMo6xCCQcxlaSi8p4mE+AcPd0yP6pAhYTpoTS2F3LNKvhW7YI9Lw1iFpfAFb8WdoEA6tnxPf9tu27f9kC0/zefag4M/UyWHuwE2gRDvZj1bMdCbUhBJqfRfO8cOAPOk+B7rpBZmoXxwdPw930bjiyLMUzQoW7mjpY8LtJ8+r94JIw73vxqU+eqv2+LDry4sUW+6zN3dUXXr6394aXAXYIA4U2b82B+xV8BZGACE1cas1gGmlEe/zUNDEBq3VF5xuOYIEduFDBXd7GEru2t+PJfv39RX8fIj7/Qv/f6Af/2nXfuQmNHL6ZPpXnb8En1CbENSYnscj6FqkATUpQBi8MkIAFOcdjEQJCisbZhwpo6ALn5ari1veIdDRPpD7NoVXfAWrmz67NXffq+HRubQ5t66qHRGseSA3jmhaMoRzcgvu+4edKrmn7Fb83OE5AdXc0iXNWK6XS5oq70xqINzsLiyoFKlLS+mXoDjjoGafW9RE6GQ4vz1nzytRhGdD/uuH07bvlkR7itzi+26stnLZw4m8fx0XbXfveYGpk8MjFbVEczpjlO0KfmhchN2K6kO45bRWQEGMt/YegX0GafQ82WJ+EqDZVaJ4+KOrvtt4heDdp5PHzwBJrbe/HoV6IIVfswUwCOjho4NpzFW+9P2YmhlxOYeGESo4feI7gPyE+TM4GFDEglU81bBErbx4NBJSD1hRTugTFzGM5LNyG49Vk4CMONH4LXcg3ccAdikzGcffobkO2LsGbLtUiQQL01rOHou2nvneFRQz11aBLjh0eRGR6bBxwlP0OeIudT0loogWyWMnIw4qOjwMOZ6SIGehqgdN2I8NVPofTyrfCO74S8djfczJtwNu6HogB/+PMh2G+cwOdu8PDYU8/Aroli/MwUakaeyKlv/+kYzCJHylGPkPPHSZ6c9jnFMm9iF1CdY7bjqRbnmDpZoyOYt5zJB+LKm6Bs+SPcxLOwX7sRHvWJE9kKg5bpu24X9NtfRP3gd/Gt6/uxvkmGPz6JxtQrOoEP0dKHyA+TnyTnTzQ+mhfB2QQBD27R1vImCWHF6IcQHnKbSGDFzcDah4j/B3AjG2AFOogksLFVwXjVajwjX4XOniguWVFDGkDkfVU0Exlyrjenm87Kik591AQBn88vuXpeaIBHG3syroruZl0RYkQSaPV+B0437fuay6hwiiBHVcCmCDCWBZ6n+NIaDZZ8kJSaKjoP+PXHgn7YBIFkOp1zPLlsilPHQXbOEB0uup6uIhOuD/rFv4XevgsORc/POGHriEAriS5PTVGcjiPD9VUrsiyF6DWfBwt5/VgTBNLprO1oc4bNSkbSKrYicxHArHDkpA2W0gIzNACLfgtZpuf0bYLuOqpSDdDAQsQxV+JmcM7C+QmweVrO5xEwC0C+aIhO4ehZFBfJMChzpCMmWE0loqs2p8PLkND8YwyHnxui7GhQJFNy+UD5L2yRAIuRxSFReLFUpQf4VhxsNIpKy/IvSAzTh+tTz57Go3tfxU8feR6P7T6AI/t/B/X9A+hWD2ql9Ni4bds5mskH6LJEhA6wea6TsA3WBom+rn0IEliQapstuMhRlMMkp6+fnMXQ6SRymRTUuSwUYwYt8hm7z5ktm6VkqpBLT+Z1I2YYJgvOO+S875clsFAfaf2mLQemL/7BrZnRAj6/vRvXXdOHt95N4eRQEu+NZaDlkiSTaYSkJGqtcc2nT+aMciFdKBQn1VKJtxt9Lou9PkU+Sx4nJ1EWZ9iStkhg8IrNj09c9KOvFydKCDh0ulD2zFwGNUoMjb4pJ2jPlPRCLFFSczOaZsY1XZ+kQTFyVjh2JjBHzmnkBbiNztsHiwQuueyK+6fX3POAnSggpI2g2jhTUqypolYqJnP5/ES5rHF0HNVChAzIYsOALK8sWQx4XtAP2+IWGRgYuNKranjIKKSqi4V0sazpcV03OLUMuhBlgpzllAE5Sk7vBQF+1BYJkPGHZJR8kJx3B4OxczfTv0QiUo6S7f8CPWfAvwBilK5kL6r0dQAAAABJRU5ErkJggg==";

  // src/ui/assets/luna-olive/nav-recent-documents.png
  var nav_recent_documents_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAheSURBVFhHnVdrbJPXGX5sJyGJ48S52k4ISXMnJpQBK0mBlraMAV2nCE2bWm2TOoFgG5M6mDZtUke6aWItQ9v404kfYyxqQWXqOhLBOokmgw5KgyGYy4gbmlsTx4kdcnFsx7dvz3uSMFgJCXulx+fz53Pe++VY9+aFsGZN0xCPRhGPRBAjopEwYmGu4bB6J9/jkShi0Qi0WBz3UqrRiB3f+EIZHweJSfXyEUgpsKs2EfF4/C5isdh9z7PQNO3ub7NrvyeAtm5/cM+LtRvJr50IKM4LJVHgUSgW17RwVNNCEU3z86jT5dXOTmrankMXgmRXS6QqxgskvXyQr/oyH8W5TSIga/Se5xEfeSyrTf72/rMt3LacWLASC1ZgLuExPoyOAX20f7B6ffLzr555JCX0GuM4nwJzCpeVD829QMtABOc776DFUJH85HeOLVgJvTaTXHPRQ4VzNaanon7iQ/wq6SM0ZNzCT2yDWJ+bl8yjawmrYvIQ0ksmz6XAfMIjXNPNaVi78Qls2LwGz219Ak+tXw2rtVKOFxBp8vAw0kv9P0iBhQjngqis+iToDElISTLAmAAsWqRY6GbwUNL97n2vtvMpI5KTk3HYMfN2ITTajai3E3lJAeRmZSDMpiW9wePxwOuN4cyZ5jan8+Of9/f3Sz6ECdH3c6Q7eGpQ+94zGUoB98T0LrFSWccPRogemrZaMOFzY8DlwNLKchQXFyPCTul2uxEMBjE1NYXMzEyEQiEMDAzA4XAEnU7nH44fP/5rsrtDRIj7SHfgb/3a97+UiZSUlPk94HOhxuRDXV0dent7cf3WJ+geDkGflkPro9CxqKfGvTAEvbBmmmCz2dDZ2YmWlpZ/NjY27iAH1gumFK8Z0r3+bo+2+8s5SE5JRf/4gy2figGOay6sXQJl9fnz5+Hym1CxtAaVliRkpwBJjc8gvHIHOsteQh+bcc9lB7zOc6ipLMXo6CiamprOnzhxYjvZf0rcVcLw3LbdDatLjTAkJOEs9Rv0Ax5iiGPFQwzw+XaPG/YUN6qrq4URgqYy1D9N4bkGmJLIRNoZE9FgXYlEcw6CLMJ0Sz7SipfDee4DZKUbJTSF0Wi0qKur6yJ3M9igWTNVwPauLLUYgTy2jlyuObISiWRuGr2GVatW4dKlS9xQgxeerFCC76PlLyGYV4VuPornLv29GWca34R923ZcZajS09Nht9s3Wa3WrdySTagK0asxS3eL25X1YvmMB/qpp9fjxsqlRRgcHMT1kUXYtKYCrLa7xKNq/H1G9BFi1sVTzTj+egNGhv1ITEiFfevXVS6UlZUnFRUVfZNbSghpVtDLjI9rHK/kdK/lEtdECop6bqhkcrlcKub3Ws6UUZcAziKlhAi/0NyMo681oKLuBdS/sg/V7IWW0moEND3MZgtzqKSK2yoIMyEe4CUkNh0CSTxZ+VWtAVZvXmoMer0eXcz24uz/Sp+1XNaQvCC1UvifGqaFb/vhPqTSiCDTLYOGFK9ag/FxP0pKqo1ms/lxbs8kdMwB8YCmOtowOXoJHyebIBjljrCfB8cRS81F+ogDwQm3EjZKyAVAlGhrbcX+l1/GsTfeQHZhBb64+SvwdHKvfwK8WOGxgXaUj/awT8RhMmVKzynkMfFAol6uYLxkqMTJosaZjIx5BkKSPF6vV9W56cpBpHQ0qffcrrqKrF0Mz5YtW5CdnQ1fnwtv7duJIz/biY52l9qQe/Q15L/zW/IZQk5OobR+cSUDjYSEGJNQRqr0drFaFBGSEAiNjY2p2tfpJ/DxpreRwWOiusRfFJC42zdswLGDh2GuWIf6X+yllTxPflMMYVoi8+SXf8VN5xXYLt5iT/Dyt7hUgKSyfjoHZsqwhJwfY2SWZEzDSD3HQxp0Oh2mvD0IMyTSQTyEuD/CM9Qf2YsrsH3/b1D/g72sd/qVQiWpmToo4DyUDun+tANZWTb4/QEEAoHZPhCf7gOULjnQNsCOR7QztZ2UMkkLhkMJKgdMjPbYSIhxZBfhcYGf5coRoN4xlVRDoq4I8J14oJrVnsJ3Iq3XeRNFRcs4H1pDk5OTw3wl6RNVSTibAytYMsstwDKiOpfap3O0WirB7gWLxYLetnPUXvSeFhrk8ySVCFEgByFoCyb5ToQvYRhqqADzDm1OB8yGLCo9gZs3L0vljhCSx5G7HlCXC85xk4CuTyOkM5oWV8PV52MNm2HwdcHT/ZkSYJQIUmlxtYRBrA6yHhPogSqGoc5Ghfjb1bEJfPTOe9i48Vs4ffrP0tBu8KQMJZmOGhXgnX8mB2brX3VGQp7zqERKxbMyWrHYZsGNdw9jsLsXfnqglDljz6K13LP0/d/j6UA7vsq/KI/Te36G5DKFH/rRXjxb9yJHdjdOnvzjbY7tDgr+hBAPyCxgH6CkBwmX5yyWY87iMoSstejr64O9qhK3Th7F1X/8BR3Dk+hjy5bYVx5vwKL2VnQzBC4KP9nuwOGfvoqvPf8KkzEBBw7sGuYI/5Ay5c/LbUL1L92u3Ue01StWMENpygLI6TyCgoIC+Hw+uIe8SLbmw5Sdw2jIP6kYAuNjGHL1wF6+BuvWbcP16xdw6NCeAafzygc8foGQVUay3JKg++6Pm2jro5Hf/R5baiFKS5fBYEjEyMg4rUxkV1mE/PxyZGRY0N3twqlTR6Lnzp3u5LXsXzzWRogHOgmpZkXSEEqJzYT8wVwwVVVV1dhs+eWFhcW2goKSxISEZFZCHMPDbnR0XLtz+/a/B4aGhq7zyibudhKXic/fiAimkLq/z3uF/h9i40Y+wXsSmHbqu/ATEvfKkOwhRIHZrJfmeR/NHvh/iBdwpTR7pjJCvs/yky4nHYN/2sBOMdetGPgPuh2r2SQDvJ0AAAAASUVORK5CYII=";

  // src/ui/assets/luna-olive/nav-computer.png
  var nav_computer_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAj3SURBVFhHxVdrbFPnGX7O8bGPj+0Q2yF2uOQGgYJoRMaEgGmlA61oUtVNqnbRNGnqj/2vpv3aj02T9oOpEl3FpDI0taBNE1WZNgGdtEspKYw4I0sgBJyg3BPHcXy/28c+l73fFx/XKe3Gfu2V3pzjc77zvc/7vLcv+H+L0Lg+s7zxxntDWk3fa8A2FAx2vqgort5EItfzeDL81dDldz5+jMdaY+kzyecCOH/+8lBNNfZCEIeCgeBhWXb2ORXXoNvtgcvlRrVaRzZbQrFYxcpKEtMPHt29+adrr/u1/OT/AkK4ePGiV9eFU4ZuHlFcrsMd/s4+T1vb4LZtPjidCmRZQS5XwsZGCul0EaVSlQyXYZoC7H4fRJ8XarYKbT1VkiSsmKbxFwL2pFqpPrh14dz4fwMjXLlyJXPs2HGvz+dHJlNAPJ5GPl9CMplFLJYiQyIMQ4C70w9Pp4+uXjg6vJCCnSjWgAJpYnQWtrkohoa6G9uCg65UVOia9jiRyC7HYsmpXDo/rOv6/Lu//eMCMKyzdcK1azfM48eP4+rVG9wrwxAhtneQd364t/vRHvQh2BeATeT7QjeAch0okpbIONP07AbsE3M4dWpgc9HnSK2mcSeTyRySiUzo56//9GUxnyuNCIKEyvZeFI9+DcY3vg/5zMtoO3ECnkPPQe4KoEIkVhvK7lXCXifVCAxTw26njVUEAu7/qG63QjmjYHnZg/C0fEKSpB+K8Y3sHVG0Ebw6qr4u1GlDtjkzojYMMo+Zp4zyEt1XSNk7tqZG6xHwU1IaWFpKYX09T3miQiTGtm93QVWB27cTuHRpERcuzOHWrQ1EoyXYbCYjZVCsVvThjY00ujxu1NiGpFXLOBnidFvGG8qecSYayr5hoUskysREGfPzKYyPr+Httx/irbceIRTaoNxiRg0CVqdQp+jKATjE1HpuIhqNw+ewgULUpLrMtMU4izlXBoKuHAQpX08ATGKhXuebNoUZkSSDq2GkoeurVMIx0gIHw9e8eaGWyKQLYY9nG4RkfDPOjc2ZIabMaIGoZNpkgp5bTFBLgCbZiXpC0iIMgKZl6G4VXV0SDh7sRV9fHwFwWSEARepnZjKZv+N2uyHksnzDVuMW7U0mmDaeWyywb2rb2p4C4PFQbkEl40F0dHRQPqhIpVL8nSg2GGB/konsA4AWl8pN42Uy0GqY1TtT67cF0AKh2iQCsLmpJZIkcBZqtRqmp6cRiUTIcxuxorUyAGTTpeF0Og+/oTU3tbxvGm8JAQfAtLGOr/d4ngIgCCYBINfIaCAQgMPhoEpZ4oC2AHjz/B9ms9liocPUnjJuAWDPmbJ76x27Mqb4c4dMFG8dLQL9ZAzE43FOfVtbG3XLIZ4DW0LA2mIqVbjrsUswCuUtxi1Drb+tZ1wbgHN2mWbFZzFgYseOHdi/fz/PA0u2MMAklSxOKoqTdqs0N7bKjqmVA58FLljM4djqPO3yNAOyzBLxEykUCjQjSpQfnwJQyJWHWUd0Z9KbxhsGmFF+bckB9kyq1/ElNY5XVqcxcH8OQZqQp0+3NXbblFYALATLy/MU/yza25182DFpAnj/3G8+yuWq8Oha0zjTVo916tODYgnfqa/h68sz0O4uUelWKcGA3btNGt9Ph4DyjoxFoChVUpEmbAarqwnY7ZtsNfnJYkk/c+a1b5VMe+CBI8CnHhs0bDZ0yzq+21nGi/kohHAUT/6ZwOxsjuKr4tVXu+Hz2SkBDfKyyodSnT4SyH1Jou5ay1MHNOnQkqExX+Xzob/fT8BsCN0cmW0ywCSbKT/sqRd57NmLb+7S8Ms9WbxWmEf0gzDu3oxhbq5GdSyRBwr1dBf/TlEkajYK9u1rRzCoUNs1aS5UyHMVk5PrVP85dHYqOHy4E93dHkg/+Csl4SZbWwDoOgxZlvCLfQX8vieKvY+mMXYtTNMrQxksUvnQ9HDoRLVJ9xIBsPMh0yput51ComDXLjZ+7di5U8GRIx3o6XFTPrDsN2C//mViidonCQ/EuXPDQwMDvsv9/b7Dw8MxSpYSBgf9OHCAzXEbRkYS9KFMxqoUvxKffEzZaenYMReVX4kSy0Hl5iXqRWLI4LSzay43ww1ZkstpGB95Ehn5MDSVT2cSwtmzf/MeONCxePJkn1cmiJFIhdMoCBrv3dVqlWjP0plQ5zFllLIj2iYAAUePdtI6HU/CC/mHY+MrJ8+80D+wv8dtp57CABSLYW5YVU1Mjq+lPrp+52Eiuj4nmOYEfT5mO336e2dfeqn/K06ng+Jqp1hRjKiH09mNK+vbLGNnZlIYGNhODKwTGwyMzun0+13ca9npklcXl+feu/jur5aXNko1zexoa2/3GEYGU/djqauXbk6M/P1OqFwshKg4rtt08faa4ViWfD7pi8yAZcw0Ta6GwWjU+b0kiZwRRnMwyDpeoclAjU5SduqCTERRbCPP1qbu/evHj0fHevd9YfDbDqfz4NTovQWqirBgCCHDbjzx1wsp67QsUnnky2VWOnVOuaVsYDBAmkaZSVnt8zmJzgrPdlmukaoEjE69HCSVKyUVraWyFuxy3R41dfXOzKPJn0yG7v3IEI13qCX/zqE7RmPV0Y3Wo7qYTaZ+ff9+lBtkhiuVCo/7Jog6bWqSEQZAodLKweu1ccOspgsFgSrCyQGsR2P18MQEHbfpAEASxbjKjCm6/MCoKWMRNRRdwjC1s61iS04Ul6j5SIrH80JXl6fhtUYesZBsZjK7yrIdCwspTE2tEzAPldku7NnTzZvOdHiu/ucr74+kYjE6Vwi3IoYtBizxZs8aXBlLTY8/LTa2ID2dHVtYTMZXIuVBxe3a5nKxmLJyYgA+Ua+XGQ5QHvjovUCHzyhuf/iPyPD1D0bTG/EJUxRuiHV1qoAQtbJnk+b42o0TbYYNz/t3dr2ys6/31MDB/u7u3h0+X0e7i+UA5STPhcW5tXw6mS5HFlcTkfmF5Xw6HaWsvq8LQsimqTOM+saWzyRNAEwO4ZCUVTxerW7bRdn0PNXDczDRQ6v89NqaG4xOothcpwPXLJ0CHxlafSUBd976d+vZBfg3Vhy0DMDv+cAAAAAASUVORK5CYII=";

  // src/ui/atelier-assets.ts
  var atelierIcons = { tv: atelier_icon_default || luna.app, following: nav_users_default, settings: nav_control_panel_default, viewed: nav_recent_documents_default, data: nav_computer_default, video: luna.history };

  // src/modules/blocker/panel.ts
  var categories = [
    { id: "user", label: "\u7528\u6237", description: "\u6309\u7528\u6237\u8EAB\u4EFD\u8FC7\u6EE4\u5185\u5BB9\uFF0C\u767D\u540D\u5355\u4F18\u5148\u4FDD\u7559\u3002", keys: ["precise_uid", "precise_uid_white", "name", "precise_name", "nameCanonical"] },
    { id: "video", label: "\u89C6\u9891", description: "\u6309\u6807\u9898\u8FC7\u6EE4\u4E0D\u60F3\u770B\u5230\u7684\u89C6\u9891", keys: ["title", "titleCanonical"] },
    { id: "comment", label: "\u8BC4\u8BBA", description: "\u6309\u8BC4\u8BBA\u6B63\u6587\u4E2D\u7684\u5173\u952E\u8BCD\u8FC7\u6EE4\u5185\u5BB9\u3002", keys: ["commentOn", "commentOnCanonical"] },
    { id: "dynamic", label: "\u52A8\u6001", description: "\u6309\u52A8\u6001\u6B63\u6587\u4E2D\u7684\u5173\u952E\u8BCD\u8FC7\u6EE4\u5185\u5BB9\u3002", keys: ["dynamic", "dynamicCanonical"] },
    { id: "live", label: "\u76F4\u64AD", description: "\u6309\u76F4\u64AD\u6807\u9898\u3001\u76F4\u64AD\u95F4\u6216\u5206\u533A\u8FC7\u6EE4\u5185\u5BB9\u3002", keys: ["liveTitle", "liveTitleCanonical", "precise_liveRoomId", "precise_partition"] }
  ];
  var modeLabels = {
    precise_uid: "\u7528\u6237 UID",
    precise_uid_white: "UID \u767D\u540D\u5355",
    name: "\u6A21\u7CCA\u7528\u6237\u540D",
    precise_name: "\u7CBE\u786E\u7528\u6237\u540D",
    nameCanonical: "\u6B63\u5219\u7528\u6237\u540D",
    title: "\u6A21\u7CCA\u5339\u914D",
    titleCanonical: "\u6B63\u5219\u5339\u914D",
    commentOn: "\u6A21\u7CCA\u5339\u914D",
    commentOnCanonical: "\u6B63\u5219\u5339\u914D",
    dynamic: "\u6A21\u7CCA\u5339\u914D",
    dynamicCanonical: "\u6B63\u5219\u5339\u914D",
    liveTitle: "\u6A21\u7CCA\u6807\u9898",
    liveTitleCanonical: "\u6B63\u5219\u6807\u9898",
    precise_liveRoomId: "\u76F4\u64AD\u95F4 ID",
    precise_partition: "\u76F4\u64AD\u5206\u533A"
  };
  var activePanel;
  function toggleBlockerHistory(onRulesChanged, renderHistory) {
    if (!activePanel?.toggleHistory()) openBlockerPanel(onRulesChanged, renderHistory, "history");
  }
  function element(tag, className = "", text2 = "") {
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = text2;
    return node;
  }
  function icon(src, size = 28) {
    const image = element("img");
    image.src = src;
    image.alt = "";
    image.width = image.height = size;
    return image;
  }
  function button2(text2, action, className = "luna-button") {
    const node = element("button", className, text2);
    node.type = "button";
    node.addEventListener("click", () => {
      sound("click");
      action();
    });
    return node;
  }
  function download(data, stem) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = element("a");
    link.href = url;
    link.download = stem + "-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) + ".json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  function openBlockerPanel(onRulesChanged, renderHistory, initialSection = "video") {
    if (activePanel && document.getElementById(atelierPanelId)) {
      activePanel.show(initialSection);
      return;
    }
    ensureLunaTheme();
    const previousFocus = document.activeElement;
    const events = new AbortController();
    const panel = element("section");
    panel.id = atelierPanelId;
    panel.setAttribute("data-bili-blocker-ui", "");
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-labelledby", "bili-atelier-title");
    const snapshot = readRuleSnapshot();
    const fields2 = /* @__PURE__ */ new Map();
    const saved = /* @__PURE__ */ new Map();
    let section = initialSection;
    let selectedKey = "title";
    let syncPanel;
    let soundPanel;
    let followingPanel;
    const cleanupPixels = observePixelLabels(panel);
    const navButtons = /* @__PURE__ */ new Map();
    const isDirty = () => [...fields2].some(([key2, field]) => field.value !== saved.get(key2));
    const status2 = element("span", "luna-status");
    status2.setAttribute("role", "status");
    status2.setAttribute("aria-live", "polite");
    function updateStatus(message) {
      const count = [...fields2].reduce((sum, [key2, field]) => sum + parseRuleText(field.value, ruleDefinitions.find((rule) => rule.key === key2)?.integer).length, 0);
      status2.textContent = message || count + " \u6761\u89C4\u5219 \xB7 " + (isDirty() ? "\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539" : "\u5DF2\u4FDD\u5B58");
      status2.dataset.dirty = String(isDirty());
      status2.hidden = !isDirty() && !categories.some((category) => category.id === section);
    }
    for (const rule of ruleDefinitions) {
      const field = element("textarea", "luna-editor");
      field.id = "bili-rule-" + rule.key;
      field.value = formatRuleText(snapshot[rule.key]);
      field.spellcheck = false;
      field.setAttribute("aria-label", rule.label);
      field.addEventListener("input", () => updateStatus());
      fields2.set(rule.key, field);
      saved.set(rule.key, field.value);
    }
    let closing = false;
    async function close() {
      if (closing) return;
      closing = true;
      const feedback = soundTask();
      if ((isDirty() || syncPanel?.isDirty()) && !await atelierConfirm("\u89C4\u5219\u6216\u540C\u6B65\u8BBE\u7F6E\u5C1A\u672A\u4FDD\u5B58\uFF0C\u786E\u5B9A\u653E\u5F03\u4FEE\u6539\u5E76\u5173\u95ED\u5417\uFF1F")) {
        closing = false;
        feedback.finish("cancel");
        return;
      }
      events.abort();
      syncPanel?.dispose();
      soundPanel?.dispose();
      followingPanel?.dispose();
      cleanupPixels();
      panel.remove();
      activePanel = void 0;
      if (previousFocus?.isConnected) previousFocus.focus();
      feedback.finish("close");
    }
    function syncSavedRules(discardDrafts = false) {
      const current = readRuleSnapshot();
      for (const rule of ruleDefinitions) {
        const field = fields2.get(rule.key);
        if (discardDrafts || field.value === saved.get(rule.key)) {
          field.value = formatRuleText(current[rule.key]);
          saved.set(rule.key, field.value);
        }
      }
      updateStatus();
    }
    function save() {
      const changed = isDirty();
      const latest = readRuleSnapshot();
      for (const rule of ruleDefinitions) {
        const field = fields2.get(rule.key);
        if (field.value === saved.get(rule.key)) continue;
        let next = parseRuleText(field.value, rule.integer);
        if (rule.key === "precise_uid" || rule.key === "precise_name") {
          const identity = (value) => String(value).trim().toLowerCase();
          const baseline = new Set(parseRuleText(saved.get(rule.key), rule.integer).map(identity));
          const draft = new Set(next.map(identity));
          const current = latest[rule.key].filter((value) => !baseline.has(identity(value)) || draft.has(identity(value)));
          const present = new Set(current.map(identity));
          next = current.concat(next.filter((value) => !baseline.has(identity(value)) && !present.has(identity(value))));
        }
        writeRuleList(rule.key, next);
      }
      syncSavedRules(true);
      onRulesChanged();
      showInfoLog("\u5DF2\u4FDD\u5B58\u5C4F\u853D\u89C4\u5219", "success");
      if (changed) sound("save");
    }
    const caption = element("header", "luna-caption");
    const title = element("h1", "", "Bili Atelier");
    title.id = "bili-atelier-title";
    const captionActions = element("div", "luna-caption-actions");
    function setCaptionImages(node, name) {
      for (const state of ["normal", "hover", "pressed"])
        node.style.setProperty("--" + state, 'url("' + luna[name + "_" + state] + '")');
    }
    function captionButton(name, label, action) {
      const node = button2("", action, "luna-caption-button");
      node.title = label;
      node.setAttribute("aria-label", label);
      setCaptionImages(node, name);
      captionActions.appendChild(node);
      return node;
    }
    const minimize = captionButton("minimize", "\u6700\u5C0F\u5316", () => {
      const minimized = panel.dataset.minimized !== "true";
      if (minimized) syncPanel?.hideSecrets();
      panel.dataset.minimized = String(minimized);
      minimize.title = minimized ? "\u5C55\u5F00\u7A97\u53E3" : "\u6700\u5C0F\u5316";
      minimize.setAttribute("aria-label", minimize.title);
      sound(minimized ? "minimize" : "restore");
    });
    const maximize = captionButton("maximize", "\u6700\u5927\u5316", () => {
      panel.dataset.minimized = "false";
      minimize.title = "\u6700\u5C0F\u5316";
      minimize.setAttribute("aria-label", minimize.title);
      const maximized = panel.dataset.maximized !== "true";
      panel.dataset.maximized = String(maximized);
      maximize.title = maximized ? "\u8FD8\u539F\u7A97\u53E3" : "\u6700\u5927\u5316";
      maximize.setAttribute("aria-label", maximize.title);
      setCaptionImages(maximize, maximized ? "restore" : "maximize");
      sound(maximized ? "maximize" : "restore");
    });
    captionButton("close", "\u5173\u95ED\u7A97\u53E3", close);
    caption.append(icon(atelierIcons.tv, 24), title, captionActions);
    const layout = element("div", "luna-layout");
    const sidebar = element("aside", "luna-sidebar");
    const nav = element("nav", "luna-nav");
    nav.setAttribute("aria-label", "Atelier \u529F\u80FD\u76EE\u5F55");
    function addNav(parent, id, label) {
      const node = button2("", () => show(id, true), "luna-nav-button");
      node.append(icon(atelierIcons[areaFor(id)], 24), document.createTextNode(label));
      navButtons.set(id, node);
      parent.appendChild(node);
    }
    atelierAreas.forEach((area) => addNav(nav, area.id, area.label));
    sidebar.append(element("div", "luna-sidebar-title", "\u5DE5\u4F5C\u53F0"), nav);
    const main = element("div", "luna-main");
    const breadcrumb = element("div", "luna-breadcrumb");
    const sectionTabs = element("nav", "luna-section-tabs");
    sectionTabs.setAttribute("aria-label", "\u5F53\u524D\u680F\u76EE\u5B50\u9875\u9762");
    const content = element("main", "luna-content");
    const footer = element("footer", "luna-footer");
    const saveRules = button2("\u4FDD\u5B58\u89C4\u5219", save, "luna-button luna-button-primary");
    footer.append(status2, saveRules, button2("\u5173\u95ED", close));
    main.append(breadcrumb, sectionTabs, content, footer);
    layout.append(sidebar, main);
    panel.append(caption, layout);
    function showRules() {
      const category = categories.find((item) => item.id === section);
      if (!category.keys.includes(selectedKey)) selectedKey = category.keys[0];
      content.append(element("h2", "", category.label + "\u5C4F\u853D\u89C4\u5219"), element("p", "luna-description", category.description));
      const tabs = element("div", "luna-rule-tabs");
      tabs.setAttribute("role", "tablist");
      tabs.setAttribute("aria-label", category.label + "\u5339\u914D\u65B9\u5F0F");
      const editorHost = element("div");
      editorHost.setAttribute("role", "tabpanel");
      editorHost.id = "bili-atelier-rule-editor";
      const modeButtons = /* @__PURE__ */ new Map();
      function selectMode(key2, user = false) {
        if (user && selectedKey !== key2) sound("select");
        selectedKey = key2;
        for (const [mode, node] of modeButtons) {
          node.setAttribute("aria-selected", String(mode === key2));
          node.querySelector("img").src = mode === key2 ? luna.radio_checked : luna.radio_normal;
          node.tabIndex = mode === key2 ? 0 : -1;
        }
        editorHost.setAttribute("aria-labelledby", "bili-atelier-mode-" + key2);
        editorHost.replaceChildren(fields2.get(key2));
      }
      for (const key2 of category.keys) {
        const tab = button2(modeLabels[key2], () => selectMode(key2, true), "luna-rule-tab");
        tab.prepend(icon(luna.radio_normal, 20));
        tab.id = "bili-atelier-mode-" + key2;
        tab.setAttribute("role", "tab");
        tab.setAttribute("aria-controls", editorHost.id);
        tab.addEventListener("keydown", (event) => {
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          const index = category.keys.indexOf(key2);
          const next = event.key === "Home" ? 0 : event.key === "End" ? category.keys.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + category.keys.length) % category.keys.length;
          selectMode(category.keys[next], true);
          modeButtons.get(category.keys[next]).focus();
        });
        modeButtons.set(key2, tab);
        tabs.appendChild(tab);
      }
      selectMode(selectedKey);
      content.append(tabs, editorHost, element("p", "luna-hint", "\u6BCF\u884C\u4E00\u6761\u89C4\u5219"));
    }
    function dataGroup(title2, hint, actions) {
      const group = element("section", "luna-data-group");
      const row = element("div", "luna-button-row");
      row.append(...actions);
      group.append(element("h3", "", title2), element("p", "luna-hint", hint), row);
      return group;
    }
    function downloadViewed() {
      const data = exportViewedDataPackage();
      download(data, "bili-atelier-viewed");
      showInfoLog("\u5DF2\u751F\u6210 " + data.viewed.items.length + " \u6761\u5DF2\u770B\u8BB0\u5F55\u7684\u4E0B\u8F7D\u6587\u4EF6", "success");
      sound("success");
    }
    async function importText(text2, mode) {
      if (isDirty() && !await atelierConfirm("\u5BFC\u5165\u4F1A\u91CD\u65B0\u8F7D\u5165\u89C4\u5219\u5E76\u653E\u5F03\u5C1A\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\u3002\u7EE7\u7EED\u5417\uFF1F")) return false;
      if (mode === "overwrite" && !await atelierConfirm("\u8986\u76D6\u5BFC\u5165\u4F1A\u66FF\u6362\u5DF2\u770B\u8BB0\u5F55\u548C\u5BF9\u5E94\u5C4F\u853D\u89C4\u5219\u3002\u786E\u5B9A\u7EE7\u7EED\u5417\uFF1F")) return false;
      if (!panel.isConnected) return false;
      const result = importAtelierDataInput(JSON.parse(text2), mode);
      syncSavedRules(true);
      onRulesChanged();
      updateStatus(result.res);
      showInfoLog(result.res + "\uFF1B\u5DF2\u770B\u72B6\u6001\u53EF\u80FD\u9700\u8981\u5237\u65B0\u9875\u9762\u540E\u5B8C\u5168\u751F\u6548\u3002", "success", 5200);
      return true;
    }
    async function pasteImport(mode) {
      const feedback = soundTask(void 0, panel);
      const text2 = await atelierPrompt("\u7C98\u8D34\u7EDF\u4E00\u6570\u636E JSON\uFF0C\u4E5F\u517C\u5BB9\u65E7\u5C4F\u853D/\u5DF2\u770B JSON");
      if (!text2) {
        feedback.finish("cancel");
        return;
      }
      try {
        feedback.finish(await importText(text2, mode) ? "success" : "cancel");
      } catch (error) {
        void atelierAlert("\u5BFC\u5165\u5931\u8D25\uFF1A" + String(error));
        feedback.finish("error");
      }
    }
    function fileImport(label, mode) {
      const input = element("input");
      input.type = "file";
      input.accept = ".txt,.json,application/json,text/plain";
      input.hidden = true;
      input.addEventListener("change", async () => {
        const feedback = soundTask("start", panel);
        const file = input.files?.[0];
        input.value = "";
        if (!file) return;
        try {
          const text2 = await file.text();
          if (panel.isConnected) feedback.finish(await importText(text2, mode) ? "success" : "cancel");
        } catch (error) {
          void atelierAlert("\u5BFC\u5165\u5931\u8D25\uFF1A" + String(error));
          feedback.finish("error");
        }
      });
      const wrapper = element("span");
      wrapper.append(button2(label, () => input.click()), input);
      return wrapper;
    }
    function showData() {
      content.append(element("h2", "", "\u6570\u636E\u7BA1\u7406"), element("p", "luna-description", "\u5907\u4EFD\u4F60\u7684\u5DF2\u770B\u8BB0\u5F55\u548C\u5C4F\u853D\u89C4\u5219\uFF0C\u4E5F\u53EF\u5BFC\u5165\u5230\u624B\u673A\u3002"));
      content.append(dataGroup("\u5BFC\u51FA\u4E0E\u624B\u673A\u5BFC\u5165", "\u5BFC\u51FA\u5F53\u524D\u5DF2\u4FDD\u5B58\u7684\u6570\u636E\uFF1B\u4FEE\u6539\u89C4\u5219\u540E\u8BF7\u5148\u4FDD\u5B58\u3002", [
        button2("\u4E0B\u8F7D\u5DF2\u770B JSON\uFF08\u624B\u673A\u5BFC\u5165\uFF09", downloadViewed),
        button2("\u4E0B\u8F7D\u7EDF\u4E00 JSON\uFF08\u624B\u673A\u5BFC\u5165\uFF09", () => {
          download(exportAtelierDataPackage(), "bili-atelier-data");
          showInfoLog("\u5DF2\u4E0B\u8F7D\u7EDF\u4E00 JSON\uFF08\u542B\u5DF2\u770B\u548C\u5C4F\u853D\u89C4\u5219\uFF09", "success");
          sound("success");
        }),
        button2("\u5BFC\u51FA\u7EDF\u4E00 JSON", async () => {
          const feedback = soundTask(void 0, panel);
          const json = JSON.stringify(exportAtelierDataPackage(), null, 2);
          let copied = false;
          try {
            if (navigator.clipboard?.writeText) {
              await navigator.clipboard.writeText(json);
              copied = true;
            }
          } catch {
          }
          await atelierPrompt(copied ? "\u7EDF\u4E00\u6570\u636E JSON\uFF08\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F\uFF09" : "\u7EDF\u4E00\u6570\u636E JSON\uFF08\u8BF7\u624B\u52A8\u590D\u5236\uFF09", json, true);
          showInfoLog("\u5DF2\u5BFC\u51FA\u7EDF\u4E00 JSON", "success");
          feedback.finish("success");
        })
      ]));
      content.append(dataGroup("\u8FFD\u52A0\u5BFC\u5165", "\u5408\u5E76\u5E76\u53BB\u91CD\uFF0C\u4FDD\u7559\u5DF2\u6709\u8BB0\u5F55\u3002\u517C\u5BB9\u65E7\u5C4F\u853D / \u5DF2\u770B JSON\u3002", [
        button2("\u8FFD\u52A0\u5BFC\u5165\u7EDF\u4E00 JSON", () => pasteImport("append")),
        fileImport("\u4ECE\u6587\u4EF6\u8FFD\u52A0\u5BFC\u5165", "append")
      ]));
      content.append(dataGroup("\u8986\u76D6\u5BFC\u5165", "\u66FF\u6362\u5DF2\u770B\u8BB0\u5F55\u53CA\u5BFC\u5165\u6587\u4EF6\u4E2D\u7684\u89C4\u5219\u3002\u64CD\u4F5C\u524D\u4F1A\u518D\u6B21\u786E\u8BA4\u3002", [
        button2("\u8986\u76D6\u5BFC\u5165\u7EDF\u4E00 JSON", () => pasteImport("overwrite")),
        fileImport("\u4ECE\u6587\u4EF6\u8986\u76D6\u5BFC\u5165", "overwrite")
      ]));
    }
    function showViewed() {
      const snapshot2 = readViewedStorage();
      content.append(
        element("h2", "", "\u5DF2\u770B\u6807\u8BB0"),
        element("p", "luna-description", "\u7EE7\u7EED\u4F7F\u7528\u89C6\u9891\u5361\u7247\u4E0A\u7684\u5DF2\u770B\u6309\u94AE\u7BA1\u7406\u89C2\u770B\u72B6\u6001\u3002"),
        element("p", "", "\u5DF2\u4FDD\u5B58 " + snapshot2.items.length + " \u6761\u5DF2\u770B\u8BB0\u5F55")
      );
      const list = element("pre", "luna-viewed-list", snapshot2.items.length ? snapshot2.items.slice(0, 100).join("\n") : "\u8FD8\u6CA1\u6709\u5DF2\u770B\u8BB0\u5F55\u3002\u6807\u8BB0\u89C6\u9891\u540E\uFF0C\u8BB0\u5F55\u4F1A\u663E\u793A\u5728\u8FD9\u91CC\u3002");
      list.setAttribute("aria-label", "\u5DF2\u770B\u89C6\u9891 ID");
      content.append(list);
      if (snapshot2.items.length > 100) content.append(element("p", "luna-hint", "\u6B64\u5904\u9884\u89C8\u524D 100 \u6761\uFF1B\u5BFC\u51FA\u6587\u4EF6\u5305\u542B\u5168\u90E8\u8BB0\u5F55\u3002"));
      content.append(dataGroup("\u6570\u636E\u5907\u4EFD", "\u53EF\u5C06\u5DF2\u770B\u8BB0\u5F55\u4E0B\u8F7D\u5230\u624B\u673A\uFF0C\u6216\u8FDB\u5165\u6570\u636E\u7BA1\u7406\u5BFC\u5165\u5DF2\u6709\u8BB0\u5F55\u3002", [
        button2("\u4E0B\u8F7D\u5DF2\u770B JSON\uFF08\u624B\u673A\u5BFC\u5165\uFF09", downloadViewed),
        button2("\u5BFC\u5165\u5DF2\u770B\u8BB0\u5F55\u2026", () => show("data", true)),
        button2("\u5237\u65B0\u8BB0\u5F55", () => show("viewed", true))
      ]));
    }
    function refreshHistory() {
      const container = content.querySelector(".luna-history");
      if (container) renderHistory(container, () => {
        syncSavedRules();
        onRulesChanged();
      });
    }
    function show(next, user = false) {
      if (user && next !== section) sound("folder");
      else if (user && panel.dataset.minimized === "true") sound("restore");
      if (section === "sounds" && next !== "sounds") stopSoundPreview();
      syncPanel?.hideSecrets();
      section = next;
      saveRules.hidden = !categories.some((category2) => category2.id === section);
      panel.dataset.minimized = "false";
      minimize.title = "\u6700\u5C0F\u5316";
      minimize.setAttribute("aria-label", minimize.title);
      syncSavedRules();
      for (const [id, node] of navButtons) {
        if (id === areaFor(section)) node.setAttribute("aria-current", "page");
        else node.removeAttribute("aria-current");
      }
      const category = categories.find((item) => item.id === section);
      const area = areaFor(section);
      const label = atelierAreas.find((item) => item.id === area).label;
      breadcrumb.replaceChildren(icon(atelierIcons[area], 20), document.createTextNode(label));
      sectionTabs.replaceChildren();
      const tabs = area === "video" ? [...categories.map((item) => [item.id, item.label]), ["history", "\u5C4F\u853D\u5386\u53F2"]] : area === "data" ? [["data", "\u5BFC\u5165\u4E0E\u5BFC\u51FA"], ["sync", "PC / Android \u540C\u6B65"]] : area === "settings" ? [["settings", "\u5916\u89C2"], ["sounds", "\u97F3\u6548"]] : [];
      sectionTabs.hidden = !tabs.length;
      for (const [id, label2] of tabs) {
        const tab = button2(label2, () => show(id, true), "luna-section-tab");
        if (id === section) tab.setAttribute("aria-current", "page");
        sectionTabs.append(tab);
      }
      content.replaceChildren();
      content.classList.toggle("luna-following-content", section === "following");
      if (section === "following") {
        followingPanel ??= mountLocalFollowingPanel();
        content.append(followingPanel.host);
      } else if (category) showRules();
      else if (section === "viewed") showViewed();
      else if (section === "data") showData();
      else if (section === "settings") {
        content.append(element("h2", "", "\u754C\u9762\u4E3B\u9898"));
        const options = element("div", "atelier-appearance-options");
        for (const [value, text2] of [["page", "\u8DDF\u968F\u7F51\u9875"], ["light", "\u6D45\u8272\u6A44\u6984\u7EFF"], ["dark", "\u6DF1\u8272\u6A44\u6984\u7EFF"]]) {
          const label2 = element("label"), radio = element("input");
          radio.type = "radio";
          radio.name = "atelier-theme";
          radio.value = value;
          radio.checked = readUiPreferences().theme === value;
          radio.addEventListener("change", () => {
            if (radio.checked) saveUiPreferences({ theme: value });
            sound("select");
          });
          label2.append(radio, document.createTextNode(text2));
          options.append(label2);
        }
        content.append(options, element("p", "luna-hint", "\u83DC\u5355\u4E0E\u6309\u94AE\u4F7F\u7528\u50CF\u7D20\u6587\u5B57\uFF0C\u957F\u5185\u5BB9\u4FDD\u7559\u666E\u901A\u5B57\u4F53\u3002"), button2("\u91CD\u7F6E\u7535\u89C6\u5165\u53E3\u4F4D\u7F6E", () => {
          saveUiPreferences({ edge: "right", y: 0.72 });
          window.dispatchEvent(new Event("atelier-reset-launcher"));
        }));
      } else if (section === "sounds") {
        soundPanel ??= mountSoundPanel();
        content.append(soundPanel.host);
      } else if (section === "sync") {
        syncPanel ??= mountSyncPanel();
        content.append(syncPanel.host);
      } else {
        content.append(element("h2", "", "\u5C4F\u853D\u5386\u53F2"), element("p", "luna-description", "\u67E5\u770B\u5DF2\u9690\u85CF\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u89E3\u9664\u5BF9\u5E94\u7684\u5C4F\u853D\u89C4\u5219\u3002"), element("div", "luna-history"));
        refreshHistory();
      }
      content.scrollTop = 0;
    }
    panel.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        close();
      }
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
        event.preventDefault();
        event.stopPropagation();
        if (!saveRules.hidden) save();
      }
    });
    window.addEventListener("atelier-sync-applied", () => {
      syncSavedRules();
      if (section === "viewed") show("viewed");
    }, { signal: events.signal });
    document.addEventListener(historyChangedEvent, () => {
      if (section === "history") refreshHistory();
    }, { signal: events.signal });
    window.addEventListener("beforeunload", (event) => {
      if (isDirty() || syncPanel?.isDirty()) {
        event.preventDefault();
        event.returnValue = "";
      }
    }, { signal: events.signal });
    activePanel = { show: (next) => show(next, true), toggleHistory: () => {
      if (section !== "history" || !panel.isConnected) return false;
      minimize.click();
      return true;
    } };
    document.body.appendChild(panel);
    show(initialSection);
    navButtons.get(areaFor(initialSection))?.focus();
    sound("open");
  }

  // src/modules/blocker/runtime.ts
  var actionClass2 = "bili-blocker-action";
  var inlineActionClass = "bili-blocker-inline-action";
  var homeVideoActionClass = "bili-blocker-home-video-action";
  var homeLiveActionClass = "bili-blocker-home-live-action";
  var profileActionClass = "bili-blocker-profile-action";
  var spaceProfileActionClass = "bili-blocker-space-profile-action";
  var hiddenAttribute = "data-bili-blocker-hidden";
  var previousDisplayAttribute = "data-bili-blocker-previous-display";
  var previousDisplayPriorityAttribute = "data-bili-blocker-previous-display-priority";
  var historyShortcutInstalled = false;
  var commentExpandFastScanInstalled = false;
  var userRuleKeys = /* @__PURE__ */ new Set(["precise_uid", "precise_name", "name", "nameCanonical"]);
  var homeFeedCardSelectors = [
    ".bili-feed-card",
    ".feed-card",
    ".bili-video-card",
    ".bili-video-card__wrap",
    ".floor-single-card",
    ".recommend-card",
    '[class*="feed-card"]',
    '[class*="bili-video-card"]'
  ];
  var commentFastScanContainerSelectors = [
    "bili-comments",
    "#commentapp",
    ".comment-container",
    ".comment-list",
    ".reply-list"
  ];
  var commentFastScanItemSelectors = [
    "bili-comment-thread-renderer",
    "bili-comment-reply-renderer",
    ".reply-item",
    ".sub-reply-item",
    ".comment-item",
    ".list-item"
  ];
  var commentFastScanRootSelectors = [...commentFastScanContainerSelectors, ...commentFastScanItemSelectors];
  var commentExpandTextPattern = /展开|更多回复|查看(?:全部)?回复|加载更多|共\s*\d+\s*条?回复|还有\s*\d+/;
  function ensureRuntimeStyle() {
    if (document.getElementById("bili-atelier-blocker-style")) {
      return;
    }
    const style = document.createElement("style");
    style.id = "bili-atelier-blocker-style";
    style.textContent = `
.${actionClass2}{position:absolute;top:4px;right:4px;z-index:20}
.${inlineActionClass},.${homeVideoActionClass},.${homeLiveActionClass},.${profileActionClass},.${spaceProfileActionClass}{margin-left:8px;vertical-align:middle}
.${homeVideoActionClass},.${homeLiveActionClass}{float:right;flex:0 0 auto;margin-left:auto}
[${hiddenAttribute}="true"]{display:none!important}
`;
    document.head.appendChild(style);
  }
  function styleCompactButton(button3) {
    button3.style.marginLeft = "8px";
    styleAtelierAction(button3);
  }
  function decide(item, rules) {
    if (item.el.closest("[data-bili-blocker-ui]")) {
      return null;
    }
    return decideBlockableItem(item, rules);
  }
  function hideRawElement(el, decision) {
    const newlyHidden = el.getAttribute(hiddenAttribute) !== "true";
    if (newlyHidden) {
      el.setAttribute(previousDisplayAttribute, el.style.getPropertyValue("display") || "");
      el.setAttribute(previousDisplayPriorityAttribute, el.style.getPropertyPriority("display") || "");
    }
    el.setAttribute(hiddenAttribute, "true");
    el.style.setProperty("display", "none", "important");
    el.title = `Bili Atelier \u5DF2\u5C4F\u853D\uFF1A${decision.type} ${decision.matching}`;
    return newlyHidden;
  }
  function hideElement(item, decision) {
    const newlyHidden = hideRawElement(item.el, decision);
    if (newlyHidden && decision.ruleKey) {
      recordBlockHistory(item, decision);
    }
    debugLog("blocked", item.kind, decision, item);
  }
  function restoreElement(item) {
    const el = item.el;
    if (el.getAttribute(hiddenAttribute) !== "true") {
      return;
    }
    const previousDisplay = el.getAttribute(previousDisplayAttribute) || "";
    const previousDisplayPriority = el.getAttribute(previousDisplayPriorityAttribute) || "";
    el.removeAttribute(hiddenAttribute);
    el.removeAttribute(previousDisplayAttribute);
    el.removeAttribute(previousDisplayPriorityAttribute);
    el.style.removeProperty("display");
    if (previousDisplay) {
      el.style.setProperty("display", previousDisplay, previousDisplayPriority);
    }
  }
  function isAdBlockPlaceholderText(value) {
    const compactText2 = String(value || "").replace(/\s+/g, "");
    return /该内容被.*(?:AdGuard|AdBlock).*插件屏蔽/i.test(compactText2) || /插件屏蔽.*恢复正常内容展示/.test(compactText2);
  }
  function removeHomeAdBlockPlaceholders() {
    if (!isHomePageLocation()) {
      return;
    }
    const candidates = Array.from(document.querySelectorAll(homeFeedCardSelectors.join(",")));
    const cards = /* @__PURE__ */ new Set();
    for (const candidate of candidates) {
      const card = candidate.closest(
        ".bili-feed-card,.feed-card,.bili-video-card,.floor-single-card,.recommend-card"
      ) || candidate;
      if (!isAdBlockPlaceholderText(card.textContent)) {
        continue;
      }
      cards.add(card);
    }
    for (const card of cards) {
      hideRawElement(card, { type: "\u9996\u9875\u5E7F\u544A\u5C4F\u853D\u5360\u4F4D", matching: "AdGuard/AdBlock" });
    }
  }
  function formatHistoryTime(timestamp) {
    return new Date(timestamp).toLocaleString();
  }
  function kindLabel(kind) {
    if (kind === "comment") {
      return "\u8BC4\u8BBA";
    }
    if (kind === "live") {
      return "\u76F4\u64AD";
    }
    return "\u89C6\u9891";
  }
  function isUserRuleKey(ruleKey) {
    return Boolean(ruleKey && userRuleKeys.has(ruleKey));
  }
  function compactText(value) {
    return String(value ?? "").replace(/\s+/g, " ").trim();
  }
  function shortText(value, maxLength) {
    const textValue = compactText(value);
    if (!textValue) {
      return "\u672A\u77E5\u5185\u5BB9";
    }
    return textValue.length > maxLength ? `${textValue.slice(0, maxLength)}...` : textValue;
  }
  function isLeakedStyleText(value) {
    return /:host\s*\{|--bili-rich-text-|^\s*\.[\w-]+\s*\{/.test(value);
  }
  function shortReadableText(value, maxLength, fallback = "\u672A\u77E5\u5185\u5BB9") {
    const textValue = compactText(value);
    const readable = !textValue || isLeakedStyleText(textValue) ? fallback : textValue;
    return readable.length > maxLength ? `${readable.slice(0, maxLength)}...` : readable;
  }
  function historyUserId(entry) {
    if (entry.uid !== void 0) {
      return String(entry.uid);
    }
    if (entry.ruleKey === "precise_uid" && entry.ruleValue !== void 0) {
      return String(entry.ruleValue);
    }
    if (entry.ruleKey === "precise_uid" && entry.matching !== void 0) {
      return String(entry.matching);
    }
    return "\u672A\u77E5";
  }
  function historyTypeLabel(entry) {
    if (entry.kind === "comment" && isUserRuleKey(entry.ruleKey)) {
      return "\u8BC4\u8BBA\u533A\u7528\u6237";
    }
    if (entry.kind === "video" && isUserRuleKey(entry.ruleKey)) {
      return "UP";
    }
    if (entry.kind === "live" && isUserRuleKey(entry.ruleKey)) {
      return "\u76F4\u64ADUP";
    }
    if (entry.ruleKey === "commentOn" || entry.ruleKey === "commentOnCanonical") {
      return "\u8BC4\u8BBA\u5173\u952E\u8BCD";
    }
    if (entry.ruleKey === "title" || entry.ruleKey === "titleCanonical") {
      return "\u89C6\u9891\u6807\u9898";
    }
    if (entry.ruleKey === "liveTitle" || entry.ruleKey === "liveTitleCanonical") {
      return "\u76F4\u64AD\u6807\u9898";
    }
    if (entry.ruleKey === "precise_liveRoomId") {
      return "\u76F4\u64AD\u95F4";
    }
    if (entry.ruleKey === "precise_partition") {
      return "\u76F4\u64AD\u5206\u533A";
    }
    return kindLabel(entry.kind);
  }
  function historyEntrySummary(entry) {
    const typeLabel = historyTypeLabel(entry);
    if (typeLabel === "UP") {
      const name = entry.name ? ` / ${entry.name}` : "";
      return `UP ID\uFF1A${historyUserId(entry)}${name}`;
    }
    if (typeLabel === "\u8BC4\u8BBA\u533A\u7528\u6237") {
      return `\u7528\u6237 ID\uFF1A${historyUserId(entry)} / \u8BC4\u8BBA\uFF1A${shortReadableText(entry.content || entry.summary, 28, "\u65E7\u8BB0\u5F55\u672A\u4FDD\u5B58\u8BC4\u8BBA\u6B63\u6587")}`;
    }
    if (typeLabel === "\u76F4\u64ADUP") {
      const name = entry.name ? ` / ${entry.name}` : "";
      return `\u76F4\u64AD UP ID\uFF1A${historyUserId(entry)}${name}`;
    }
    if (typeLabel === "\u8BC4\u8BBA\u5173\u952E\u8BCD") {
      return shortReadableText(entry.content || entry.summary, 52, "\u65E7\u8BB0\u5F55\u672A\u4FDD\u5B58\u8BC4\u8BBA\u6B63\u6587");
    }
    if (typeLabel === "\u89C6\u9891\u6807\u9898") {
      return shortText(entry.title || entry.summary, 52);
    }
    if (typeLabel === "\u76F4\u64AD\u6807\u9898") {
      return shortText(entry.liveTitle || entry.summary, 52);
    }
    return shortText(entry.summary, 52);
  }
  function historyEntryDetail(entry) {
    const typeLabel = historyTypeLabel(entry);
    const parts = [];
    if (typeLabel === "UP" || typeLabel === "\u8BC4\u8BBA\u533A\u7528\u6237" || typeLabel === "\u76F4\u64ADUP") {
      if (entry.name) {
        parts.push(`\u7528\u6237\u540D\uFF1A${entry.name}`);
      }
    } else if (entry.detail) {
      parts.push(entry.detail);
    }
    if (entry.bv) {
      parts.push(`BV\uFF1A${entry.bv}`);
    }
    if (entry.roomId) {
      parts.push(`\u76F4\u64AD\u95F4\uFF1A${entry.roomId}`);
    }
    parts.push(`\u547D\u4E2D\uFF1A${entry.matching}`);
    return parts.join(" / ");
  }
  function isEditableTarget(target) {
    if (!(target instanceof HTMLElement)) {
      return false;
    }
    const tagName = target.tagName;
    return tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT" || target.isContentEditable || target.closest("[contenteditable=true]") !== null;
  }
  function appendText(parent, tagName, className, text2) {
    const el = document.createElement(tagName);
    el.className = className;
    el.textContent = text2;
    parent.appendChild(el);
    return el;
  }
  function renderHistoryPanel(panel, rescan, embedded = false) {
    panel.textContent = "";
    panel.setAttribute("data-bili-blocker-ui", "true");
    const header = document.createElement("div");
    header.className = "bili-blocker-history-header";
    appendText(header, "div", "", "\u5C4F\u853D\u5386\u53F2");
    const headerActions = document.createElement("div");
    headerActions.className = "bili-blocker-history-actions";
    const refreshButton = document.createElement("button");
    refreshButton.type = "button";
    refreshButton.textContent = "\u5237\u65B0";
    refreshButton.addEventListener("click", () => {
      renderHistoryPanel(panel, rescan, embedded);
      sound("click");
    });
    headerActions.appendChild(refreshButton);
    const clearButton = document.createElement("button");
    clearButton.type = "button";
    clearButton.textContent = "\u6E05\u7A7A";
    clearButton.addEventListener("click", () => {
      const changed = readBlockHistory().length > 0;
      writeBlockHistory([]);
      renderHistoryPanel(panel, rescan, embedded);
      sound(changed ? "delete" : "click");
    });
    headerActions.appendChild(clearButton);
    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.textContent = "\u5173\u95ED";
    closeButton.addEventListener("click", () => {
      panel.hidden = true;
      sound("close");
    });
    if (!embedded) headerActions.appendChild(closeButton);
    header.appendChild(headerActions);
    panel.appendChild(header);
    const body = document.createElement("div");
    body.className = "bili-blocker-history-body";
    const history = readBlockHistory();
    if (history.length === 0) {
      appendText(body, "div", "bili-blocker-history-empty", "\u8FD8\u6CA1\u6709\u5C4F\u853D\u8BB0\u5F55");
      panel.appendChild(body);
      return;
    }
    for (const entry of history) {
      const item = document.createElement("div");
      item.className = "bili-blocker-history-item";
      appendText(item, "div", "bili-blocker-history-type-badge", historyTypeLabel(entry));
      const meta = document.createElement("div");
      meta.className = "bili-blocker-history-meta";
      appendText(meta, "span", "", `${kindLabel(entry.kind)} \xB7 ${entry.type}`);
      appendText(meta, "span", "", formatHistoryTime(entry.timestamp));
      item.appendChild(meta);
      appendText(item, "div", "bili-blocker-history-summary", historyEntrySummary(entry));
      appendText(item, "div", "bili-blocker-history-detail", historyEntryDetail(entry));
      const footer = document.createElement("div");
      footer.className = "bili-blocker-history-footer";
      const unblockButton = document.createElement("button");
      unblockButton.type = "button";
      const removableRules = entryRuleReferences(entry);
      if (removableRules.length > 0) {
        unblockButton.textContent = "\u89E3\u9664";
        unblockButton.addEventListener("click", () => {
          const feedback = soundTask(void 0, () => panel.isConnected && !panel.hidden);
          const results = removableRules.map((rule) => removeRuleItem(rule.key, rule.value));
          const failures2 = results.filter((result) => !result.status && result.res !== "\u89C4\u5219\u4E0D\u5B58\u5728");
          if (failures2.length === 0) {
            removeHistoryByRules(removableRules);
            showInfoLog(`\u5DF2\u89E3\u9664\u5C4F\u853D\uFF1A${historyEntrySummary(entry)}`, "success");
            rescan();
            renderHistoryPanel(panel, rescan, embedded);
            feedback.finish(results.some((result) => result.status) ? "success" : "click");
            return;
          }
          void atelierAlert(String(failures2[0].res));
          feedback.finish("error");
        });
      } else {
        unblockButton.textContent = "\u4E0D\u53EF\u89E3\u9664";
        unblockButton.disabled = true;
      }
      footer.appendChild(unblockButton);
      item.appendChild(footer);
      body.appendChild(item);
    }
    panel.appendChild(body);
  }
  function toggleHistoryPanel(rescan) {
    toggleBlockerHistory(rescan, (container, scan) => renderHistoryPanel(container, scan, true));
  }
  function installHistoryShortcut(rescan) {
    if (historyShortcutInstalled) {
      return;
    }
    historyShortcutInstalled = true;
    document.addEventListener("keydown", (event) => {
      if (event.key !== "`" && event.code !== "Backquote" || event.ctrlKey || event.altKey || event.metaKey) {
        return;
      }
      if (isEditableTarget(event.target)) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      toggleHistoryPanel(rescan);
    }, true);
  }
  function eventPathElements(event) {
    const path = typeof event.composedPath === "function" ? event.composedPath() : [];
    const fallback = event.target ? [event.target] : [];
    return (path.length > 0 ? path : fallback).filter((node) => node instanceof Element);
  }
  function hasCommentContext(elements) {
    const selector = commentFastScanRootSelectors.join(",");
    return elements.some((element2) => Boolean(element2.closest(selector)));
  }
  function isCommentExpandClick(event) {
    if (isEditableTarget(event.target)) {
      return false;
    }
    const elements = eventPathElements(event);
    if (elements.some((element2) => Boolean(element2.closest("[data-bili-blocker-ui]")))) {
      return false;
    }
    if (!hasCommentContext(elements)) {
      return false;
    }
    return elements.some((element2) => {
      const textValue = compactText([
        element2.textContent,
        element2.getAttribute("aria-label"),
        element2.getAttribute("title")
      ].filter(Boolean).join(" "));
      return commentExpandTextPattern.test(textValue);
    });
  }
  function findCommentFastScanRoot(event) {
    const elements = eventPathElements(event);
    const containerSelector = commentFastScanContainerSelectors.join(",");
    for (const element2 of elements) {
      const root = element2.closest(containerSelector);
      if (root) {
        return root;
      }
    }
    const itemSelector = commentFastScanItemSelectors.join(",");
    for (const element2 of elements) {
      const root = element2.closest(itemSelector);
      if (root) {
        return root;
      }
    }
    return document;
  }
  function scheduleCommentFastScans(scanComments, root) {
    const run = () => scanComments(root);
    if (typeof window.requestAnimationFrame === "function") {
      window.requestAnimationFrame(run);
    } else {
      window.setTimeout(run, 0);
    }
    for (const delayMs of [80, 180, 420, 900, 1600]) {
      window.setTimeout(run, delayMs);
    }
  }
  function installCommentExpandFastScan(scanComments) {
    if (commentExpandFastScanInstalled) {
      return;
    }
    commentExpandFastScanInstalled = true;
    document.addEventListener("click", (event) => {
      if (!(event instanceof MouseEvent) || !isCommentExpandClick(event)) {
        return;
      }
      scheduleCommentFastScans(scanComments, findCommentFastScanRoot(event));
    }, true);
  }
  function applyManualBlockChoice(item, rescan, choice, type = "\u624B\u52A8\u5C4F\u853D", feedback) {
    applyManualBlockChoices(item, rescan, [choice], type, { feedback });
  }
  function applyManualBlockChoices(item, rescan, choices, type = "\u624B\u52A8\u5C4F\u853D", options = {}) {
    const feedback = options.feedback ?? soundTask();
    const hideCurrent = options.hideCurrent !== false;
    const linkedRules = [];
    let firstError = "";
    let added = 0;
    let primaryChoice;
    for (const choice of choices) {
      const result = addRuleItem(choice.key, choice.value);
      if (result.status) added++;
      if (result.status || result.res === "\u5DF2\u5B58\u5728\u6B64\u5185\u5BB9") {
        const value = result.status && "value" in result ? result.value : choice.value;
        const rule = { key: choice.key, value };
        linkedRules.push(rule);
        primaryChoice ||= rule;
        continue;
      }
      firstError ||= String(result.res);
    }
    if (linkedRules.length > 0 && primaryChoice) {
      const manualDecision = {
        type,
        matching: primaryChoice.value,
        ruleKey: primaryChoice.key,
        ruleValue: primaryChoice.value,
        linkedRules
      };
      if (hideCurrent) {
        hideElement(item, manualDecision);
      } else {
        recordBlockHistory(item, manualDecision);
      }
      showInfoLog(`${type}\uFF1A${shortReadableText(summarizeBlockedItem(item), 36)}`, "success");
      rescan();
      if (hideCurrent) {
        hideElement(item, manualDecision);
      }
      feedback.finish(added > 0 ? "success" : "click");
      return true;
    }
    void atelierAlert(firstError || "\u5F53\u524D\u5143\u7D20\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u5C4F\u853D\u5B57\u6BB5");
    feedback.finish("error");
    return false;
  }
  function alertManualFailure(message) {
    const feedback = soundTask();
    void atelierAlert(message);
    feedback.finish("error");
  }
  async function handleManualBlock(item, rescan) {
    const choices = getManualChoices(item);
    if (choices.length === 0) {
      alertManualFailure("\u5F53\u524D\u5143\u7D20\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u5C4F\u853D\u5B57\u6BB5");
      return;
    }
    const feedback = soundTask();
    const selected = await atelierDialog({ title: "\u9009\u62E9\u5C4F\u853D\u65B9\u5F0F", message: "\u9009\u62E9\u8981\u5C4F\u853D\u7684\u5B57\u6BB5", choices: choices.map((choice2, index) => ({ value: String(index), label: choice2.label })) });
    const choice = selected === null ? void 0 : choices[Number(selected)];
    if (!choice) {
      feedback.finish("cancel");
      return;
    }
    applyManualBlockChoice(item, rescan, choice, "\u624B\u52A8\u5C4F\u853D", feedback);
  }
  function handleCommentUserBlock(item, rescan) {
    const choices = getCommentUserBlockChoices(item);
    if (choices.length === 0) {
      alertManualFailure("\u5F53\u524D\u8BC4\u8BBA\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u7528\u6237\u5B57\u6BB5");
      return;
    }
    applyManualBlockChoices(item, rescan, choices, "\u624B\u52A8\u5C4F\u853D\u8BC4\u8BBA\u533A\u7528\u6237");
  }
  function handleHomeVideoOwnerBlock(item, rescan) {
    const choices = getVideoOwnerBlockChoices(item);
    if (choices.length === 0) {
      alertManualFailure("\u5F53\u524D\u89C6\u9891\u5361\u7247\u6CA1\u6709\u53EF\u63D0\u53D6\u7684 UP \u5B57\u6BB5");
      return;
    }
    applyManualBlockChoices(item, rescan, choices, "\u624B\u52A8\u5C4F\u853DUP");
  }
  function handleHomeLiveOwnerBlock(item, rescan) {
    const choices = getLiveOwnerBlockChoices(item);
    if (choices.length === 0) {
      alertManualFailure("\u5F53\u524D\u76F4\u64AD\u5361\u7247\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u4E3B\u64AD\u6216\u76F4\u64AD\u95F4\u5B57\u6BB5");
      return;
    }
    applyManualBlockChoices(item, rescan, choices, "\u624B\u52A8\u5C4F\u853D\u76F4\u64ADUP");
  }
  function hasManualActionButton(item) {
    const selector = `.${actionClass2},.${inlineActionClass},.${homeVideoActionClass},.${homeLiveActionClass}`;
    const insertionParent = item.insertionEl !== item.el ? item.insertionEl.parentElement : null;
    return Boolean(
      item.el.querySelector(selector) || item.el.shadowRoot?.querySelector(selector) || insertionParent?.querySelector(selector)
    );
  }
  function createManualActionButton(item, rescan, className = actionClass2) {
    const button3 = document.createElement("button");
    button3.type = "button";
    button3.className = className;
    button3.textContent = "\u5C4F\u853D";
    let confirmTimer;
    button3.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (item.kind === "comment") {
        if (button3.dataset.confirmBlock !== "true") {
          button3.dataset.confirmBlock = "true";
          button3.textContent = "\u786E\u8BA4\uFF1F";
          sound("select");
          if (confirmTimer !== void 0) {
            window.clearTimeout(confirmTimer);
          }
          confirmTimer = window.setTimeout(() => {
            if (button3.dataset.confirmBlock === "true") {
              button3.dataset.confirmBlock = "";
              button3.textContent = "\u5C4F\u853D";
            }
          }, 2500);
          return;
        }
        if (confirmTimer !== void 0) {
          window.clearTimeout(confirmTimer);
        }
        handleCommentUserBlock(item, rescan);
        return;
      }
      handleManualBlock(item, rescan);
    });
    styleAtelierAction(button3);
    return button3;
  }
  function createHomeVideoActionButton(item, rescan) {
    const button3 = document.createElement("button");
    button3.type = "button";
    button3.className = homeVideoActionClass;
    button3.textContent = "\u5C4F\u853D";
    button3.title = item.uid !== void 0 ? `\u5C4F\u853D UP ${item.uid}` : `\u5C4F\u853D UP ${item.name || ""}`;
    let confirmTimer;
    button3.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (button3.dataset.confirmBlock !== "true") {
        button3.dataset.confirmBlock = "true";
        button3.textContent = "\u786E\u8BA4\uFF1F";
        sound("select");
        if (confirmTimer !== void 0) {
          window.clearTimeout(confirmTimer);
        }
        confirmTimer = window.setTimeout(() => {
          if (button3.dataset.confirmBlock === "true") {
            button3.dataset.confirmBlock = "";
            button3.textContent = "\u5C4F\u853D";
          }
        }, 2500);
        return;
      }
      if (confirmTimer !== void 0) {
        window.clearTimeout(confirmTimer);
      }
      handleHomeVideoOwnerBlock(item, rescan);
    });
    styleAtelierAction(button3);
    return button3;
  }
  function createHomeLiveActionButton(item, rescan) {
    const button3 = document.createElement("button");
    button3.type = "button";
    button3.className = homeLiveActionClass;
    button3.textContent = "\u5C4F\u853D";
    button3.title = item.uid !== void 0 ? `\u5C4F\u853D\u76F4\u64AD\u4E3B\u64AD ${item.uid}` : item.name ? `\u5C4F\u853D\u76F4\u64AD\u4E3B\u64AD ${item.name}` : `\u5C4F\u853D\u76F4\u64AD\u95F4 ${item.roomId || ""}`;
    let confirmTimer;
    button3.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (button3.dataset.confirmBlock !== "true") {
        button3.dataset.confirmBlock = "true";
        button3.textContent = "\u786E\u8BA4\uFF1F";
        sound("select");
        if (confirmTimer !== void 0) {
          window.clearTimeout(confirmTimer);
        }
        confirmTimer = window.setTimeout(() => {
          if (button3.dataset.confirmBlock === "true") {
            button3.dataset.confirmBlock = "";
            button3.textContent = "\u5C4F\u853D";
          }
        }, 2500);
        return;
      }
      if (confirmTimer !== void 0) {
        window.clearTimeout(confirmTimer);
      }
      handleHomeLiveOwnerBlock(item, rescan);
    });
    styleAtelierAction(button3);
    return button3;
  }
  function findCommentActionTarget(item) {
    const root = item.el.shadowRoot || item.el;
    return (item.insertionEl !== item.el ? item.insertionEl : null) || root.querySelector("#user-name,.user-name,.sub-user-name,.name,.user,.reply-info,.info") || item.el;
  }
  function insertInlineActionButton(target, button3) {
    styleCompactButton(button3);
    if (target.tagName === "A" || target.matches("#user-name,.user-name,.sub-user-name,.name")) {
      target.insertAdjacentElement("afterend", button3);
      return;
    }
    target.appendChild(button3);
  }
  function isHomeVideoItem(item) {
    return item.kind === "video" && isHomePageLocation() && Boolean(item.el.closest(
      ".bili-feed-card,.feed-card,.bili-video-card,.recommend-card,.floor-single-card,.video-card,.video-list-item"
    ));
  }
  function isHomeLiveItem(item) {
    return item.kind === "live" && (isHomePageLocation() || isSpacePageLocation()) && Boolean(item.el.closest(
      ".bili-live-card,.live-card,.room-card,.bili-feed-card,.feed-card,.bili-video-card,.recommend-card,.floor-single-card,.video-list-item,.index_item_JSGkw"
    ));
  }
  function findHomeVideoActionTarget(item) {
    const root = item.el.shadowRoot || item.el;
    return root.querySelector(
      ".bili-video-card__info--bottom,.bili-video-card__info--owner,.video-card-info,.info,.meta"
    ) || item.insertionEl || item.el;
  }
  function findHomeLiveActionTarget(item) {
    const root = item.el.shadowRoot || item.el;
    return root.querySelector(
      ".bili-live-card__info--bottom,.bili-live-card__info,.bili-video-card__info--bottom,.bili-video-card__info--owner,.live-card__info,.room-card-info,.video-card-info,.info,.meta"
    ) || item.insertionEl || item.el;
  }
  function insertHomeVideoActionButton(target, button3) {
    if (target.tagName === "A") {
      target.insertAdjacentElement("afterend", button3);
      return;
    }
    target.appendChild(button3);
  }
  function insertHomeLiveActionButton(target, button3) {
    if (target.tagName === "A") {
      target.insertAdjacentElement("afterend", button3);
      return;
    }
    target.appendChild(button3);
  }
  function ensureHomeVideoActionButton(item, rescan) {
    if (!isHomeVideoItem(item) || item.uid === void 0 && !item.name) {
      return;
    }
    const button3 = createHomeVideoActionButton(item, rescan);
    insertHomeVideoActionButton(findHomeVideoActionTarget(item), button3);
  }
  function ensureHomeLiveActionButton(item, rescan) {
    if (!isHomeLiveItem(item) || item.uid === void 0 && !item.name && !item.roomId) {
      return;
    }
    const button3 = createHomeLiveActionButton(item, rescan);
    insertHomeLiveActionButton(findHomeLiveActionTarget(item), button3);
  }
  function ensureActionButton(item, rescan) {
    if (item.el.getAttribute(hiddenAttribute) === "true" || hasManualActionButton(item)) {
      return;
    }
    if (item.kind === "video") {
      ensureHomeVideoActionButton(item, rescan);
      return;
    }
    if (item.kind === "live") {
      ensureHomeLiveActionButton(item, rescan);
      return;
    }
    if (item.kind === "comment") {
      const button4 = createManualActionButton(item, rescan, inlineActionClass);
      insertInlineActionButton(findCommentActionTarget(item), button4);
      return;
    }
    const computedPosition = window.getComputedStyle(item.el).position;
    if (computedPosition === "static") {
      item.el.style.position = "relative";
    }
    const button3 = createManualActionButton(item, rescan);
    item.el.appendChild(button3);
  }
  function findSpaceProfileNameTarget() {
    for (const selector of [
      "#h-name",
      ".h-name",
      ".n-name",
      ".space-header .name",
      ".h-basic .name",
      ".user-info .name",
      ".username",
      ".nickname"
    ]) {
      const target = document.querySelector(selector);
      if (target && !target.closest("[data-bili-blocker-ui]") && target.textContent?.trim()) {
        return target;
      }
    }
    return null;
  }
  function readSpaceProfileUser() {
    if (!isSpacePageLocation()) {
      return null;
    }
    const target = findSpaceProfileNameTarget();
    if (!target) {
      return null;
    }
    const uid = parseSpaceProfileUid();
    const name = target.textContent?.replace(/\s+/g, " ").trim() || void 0;
    if (uid === void 0 && !name) {
      return null;
    }
    return { uid, name, target };
  }
  function handleSpaceProfileOwnerBlock(user, target, rescan) {
    const choices = getVideoOwnerBlockChoices(user);
    if (choices.length === 0) {
      alertManualFailure("\u5F53\u524D\u4E2A\u4EBA\u4E3B\u9875\u6CA1\u6709\u53EF\u63D0\u53D6\u7684 UP \u5B57\u6BB5");
      return false;
    }
    const item = {
      kind: "video",
      el: target,
      insertionEl: target,
      uid: user.uid,
      name: user.name,
      title: "UP \u4E2A\u4EBA\u4E3B\u9875"
    };
    return applyManualBlockChoices(item, rescan, choices, "\u624B\u52A8\u5C4F\u853DUP", { hideCurrent: false });
  }
  function spaceProfileUserKey(user) {
    return `${user.uid ?? ""}|${user.name ?? ""}`;
  }
  function getSpaceProfileBlockedRules(user) {
    const rules = readRuleSnapshot();
    const blockedRules = [];
    if (user.uid !== void 0) {
      const uidMatch = exactMatch(rules.precise_uid, user.uid);
      if (uidMatch) {
        blockedRules.push({ key: "precise_uid", value: uidMatch.matching });
      }
    }
    if (user.name) {
      const nameMatch = exactMatch(rules.precise_name, user.name);
      if (nameMatch) {
        blockedRules.push({ key: "precise_name", value: nameMatch.matching });
      }
    }
    return blockedRules;
  }
  function setSpaceProfileActionButtonState(button3, user) {
    const blocked = getSpaceProfileBlockedRules(user).length > 0;
    const label = user.uid !== void 0 ? `UP ${user.uid}` : `UP ${user.name || ""}`;
    button3.dataset.userKey = spaceProfileUserKey(user);
    button3.dataset.blocked = blocked ? "true" : "";
    button3.textContent = blocked ? "\u5DF2\u5C4F\u853D" : "\u5C4F\u853D";
    button3.title = blocked ? `\u89E3\u9664\u5C4F\u853D ${label}` : `\u5C4F\u853D ${label}`;
    button3.disabled = false;
  }
  function handleSpaceProfileOwnerUnblock(user, rescan) {
    const blockedRules = getSpaceProfileBlockedRules(user);
    if (blockedRules.length === 0) {
      return false;
    }
    const failures2 = blockedRules.map((rule) => removeRuleItem(rule.key, rule.value)).filter((result) => !result.status);
    if (failures2.length > 0) {
      alertManualFailure(String(failures2[0].res));
      return false;
    }
    removeHistoryByRules(blockedRules);
    notifyBlockHistoryChanged();
    showInfoLog(`\u5DF2\u89E3\u9664\u5C4F\u853D\uFF1A${user.name || user.uid || "\u5F53\u524DUP"}`, "success");
    rescan();
    sound("success");
    return true;
  }
  function createSpaceProfileActionButton(user, target, rescan) {
    const button3 = document.createElement("button");
    button3.type = "button";
    button3.className = spaceProfileActionClass;
    let confirmTimer;
    setSpaceProfileActionButtonState(button3, user);
    button3.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (button3.dataset.blocked === "true") {
        if (confirmTimer !== void 0) {
          window.clearTimeout(confirmTimer);
        }
        button3.dataset.confirmBlock = "";
        handleSpaceProfileOwnerUnblock(user, rescan);
        setSpaceProfileActionButtonState(button3, user);
        return;
      }
      if (button3.dataset.confirmBlock !== "true") {
        button3.dataset.confirmBlock = "true";
        button3.textContent = "\u786E\u8BA4\uFF1F";
        sound("select");
        if (confirmTimer !== void 0) {
          window.clearTimeout(confirmTimer);
        }
        confirmTimer = window.setTimeout(() => {
          if (button3.dataset.confirmBlock === "true") {
            button3.dataset.confirmBlock = "";
            setSpaceProfileActionButtonState(button3, user);
          }
        }, 2500);
        return;
      }
      if (confirmTimer !== void 0) {
        window.clearTimeout(confirmTimer);
      }
      if (handleSpaceProfileOwnerBlock(user, target, rescan)) {
        button3.dataset.confirmBlock = "";
        setSpaceProfileActionButtonState(button3, user);
      }
    });
    styleAtelierAction(button3);
    return button3;
  }
  function ensureSpaceProfileBlockButton(rescan) {
    const profileUser = readSpaceProfileUser();
    if (!profileUser) {
      return;
    }
    const { target } = profileUser;
    const existingButton = target.parentElement?.querySelector(`.${spaceProfileActionClass}`) || target.querySelector(`.${spaceProfileActionClass}`);
    if (existingButton?.dataset.userKey === spaceProfileUserKey(profileUser)) {
      setSpaceProfileActionButtonState(existingButton, profileUser);
      return;
    }
    existingButton?.remove();
    const button3 = createSpaceProfileActionButton(profileUser, target, rescan);
    styleCompactButton(button3);
    target.insertAdjacentElement("afterend", button3);
  }
  function extractProfileUser(container) {
    const profileData = container.__data?.card;
    const profileUid = Number.parseInt(String(profileData?.mid ?? ""), 10);
    const profileName = String(profileData?.name ?? "").trim();
    if (Number.isFinite(profileUid) || profileName) {
      return { uid: Number.isFinite(profileUid) ? profileUid : void 0, name: profileName || void 0 };
    }
    const vueUserData = container.querySelector(".user-card-m-exp.card-loaded")?.__vue__?.userData;
    const vueUid = Number.parseInt(String(vueUserData?.mid ?? ""), 10);
    const vueName = String(vueUserData?.name ?? "").trim();
    if (Number.isFinite(vueUid) || vueName) {
      return { uid: Number.isFinite(vueUid) ? vueUid : void 0, name: vueName || void 0 };
    }
    const searchRoot = container.shadowRoot || container;
    const link = searchRoot.querySelector('a[href*="space.bilibili.com/"]');
    const uid = parseUid(link?.href) ?? parseUid(container.outerHTML.slice(0, 700));
    const name = link?.textContent?.trim() || searchRoot.querySelector(".name,.nickname,.username,.user-name")?.textContent?.trim();
    return { uid, name: name || void 0 };
  }
  function ensureProfileBlockButtons(rescan) {
    const containers = Array.from(
      document.querySelectorAll(".usercard-wrap,.up-panel-container,bili-user-profile,.bili-user-profile")
    );
    for (const container of containers) {
      const searchRoot = container.shadowRoot || container;
      if (container.closest("[data-bili-blocker-ui]") || searchRoot.querySelector(`.${profileActionClass}`)) {
        continue;
      }
      const user = extractProfileUser(container);
      if (user.uid === void 0 && !user.name) {
        continue;
      }
      const target = searchRoot.querySelector("#action") || searchRoot.querySelector(".user,.name,.nickname,.username,.user-name") || searchRoot.querySelector('a[href*="space.bilibili.com/"]') || container;
      const button3 = document.createElement("button");
      button3.type = "button";
      button3.className = profileActionClass;
      button3.textContent = "\u5C4F\u853D";
      button3.title = user.uid !== void 0 ? `\u5C4F\u853D UID ${user.uid}` : `\u5C4F\u853D\u7528\u6237 ${user.name}`;
      styleCompactButton(button3);
      button3.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const feedback = soundTask();
        const result = user.uid !== void 0 ? addRuleItem("precise_uid", user.uid) : addRuleItem("precise_name", user.name);
        void atelierAlert(String(result.res));
        feedback.finish(result.status ? "success" : result.res === "\u5DF2\u5B58\u5728\u6B64\u5185\u5BB9" ? "click" : "error");
        if (result.status) {
          rescan();
        }
      });
      if (target.tagName === "A") {
        target.insertAdjacentElement("afterend", button3);
      } else {
        target.appendChild(button3);
      }
    }
  }
  function debounce(callback, waitMs) {
    let timer2;
    return () => {
      if (timer2 !== void 0) {
        window.clearTimeout(timer2);
      }
      timer2 = window.setTimeout(callback, waitMs);
    };
  }
  function observeElementShadowRoot(el, observer, observed) {
    const shadowRoot = el.shadowRoot;
    if (!shadowRoot || observed.has(shadowRoot)) {
      return;
    }
    observed.add(shadowRoot);
    ensurePageControls(shadowRoot);
    observer.observe(shadowRoot, { childList: true, subtree: true });
    observeOpenShadowRoots(shadowRoot, observer, observed);
  }
  function observeOpenShadowRoots(root, observer, observed) {
    if (root instanceof HTMLElement) {
      observeElementShadowRoot(root, observer, observed);
    }
    for (const el of Array.from(root.querySelectorAll("*"))) {
      observeElementShadowRoot(el, observer, observed);
    }
  }
  function scheduleStartupScans(scan) {
    for (const delayMs of [250, 750, 1500, 3e3]) {
      window.setTimeout(scan, delayMs);
    }
  }
  function startBlocker() {
    let observer = null;
    const observedShadowRoots = /* @__PURE__ */ new WeakSet();
    const scanComments = (root = document, rules = readRuleSnapshotWithHistoryAliases()) => {
      if (observer) {
        observeOpenShadowRoots(root, observer, observedShadowRoots);
      }
      for (const item of collectCommentItems(root)) {
        const decision = decideComment(item, rules);
        if (decision) {
          hideElement(item, decision);
        } else {
          restoreElement(item);
          ensureActionButton(item, scan);
        }
      }
    };
    const scan = () => {
      if (observer) {
        observeOpenShadowRoots(document, observer, observedShadowRoots);
      }
      const rules = readRuleSnapshotWithHistoryAliases();
      removeHomeAdBlockPlaceholders();
      const items = [
        ...collectVideoItems(document),
        ...collectLiveItems(document)
      ];
      for (const item of items) {
        const decision = decide(item, rules);
        if (decision) {
          hideElement(item, decision);
        } else {
          restoreElement(item);
          ensureActionButton(item, scan);
        }
      }
      scanComments(document, rules);
      ensureProfileBlockButtons(scan);
      ensureSpaceProfileBlockButton(scan);
    };
    const scheduleScan = debounce(scan, 300);
    window.addEventListener("atelier-sync-applied", scheduleScan);
    const start = () => {
      ensureRuntimeStyle();
      if (typeof GM_registerMenuCommand === "function") {
        GM_registerMenuCommand("Bili Atelier \u5C4F\u853D\u89C4\u5219", () => openBlockerPanel(scan, (container, rescan) => renderHistoryPanel(container, rescan, true)));
      }
      installHistoryShortcut(scan);
      installCommentExpandFastScan(scanComments);
      observer = new MutationObserver(scheduleScan);
      observer.observe(document.body, { childList: true, subtree: true });
      scan();
      scheduleStartupScans(scan);
      debugLog("blocker started");
    };
    if (document.body) {
      start();
      return;
    }
    const bodyObserver = new MutationObserver(() => {
      if (!document.body) {
        return;
      }
      bodyObserver.disconnect();
      start();
    });
    bodyObserver.observe(document.documentElement, { childList: true });
    window.addEventListener("pagehide", () => observer?.disconnect(), { once: true });
  }

  // src/ui/launcher.ts
  function startAtelierLauncher() {
    if (document.getElementById("atelier-launcher")) return;
    if (!document.body) {
      const observer = new MutationObserver(() => {
        if (document.body) {
          observer.disconnect();
          startAtelierLauncher();
        }
      });
      observer.observe(document.documentElement || document, { childList: true, subtree: true });
      return;
    }
    ensureLunaTheme();
    const host = document.createElement("div");
    host.id = "atelier-launcher";
    host.setAttribute("data-bili-blocker-ui", "");
    const button3 = document.createElement("button");
    button3.type = "button";
    button3.className = "atelier-launcher-button";
    button3.setAttribute("aria-label", "\u6253\u5F00 Atelier \u5FEB\u6377\u83DC\u5355");
    button3.setAttribute("aria-haspopup", "menu");
    button3.setAttribute("aria-expanded", "false");
    button3.title = "Atelier \xB7 \u62D6\u52A8\u53EF\u8C03\u6574\u4F4D\u7F6E";
    const image = document.createElement("img");
    image.src = atelierIcons.tv;
    image.alt = "";
    image.draggable = false;
    button3.append(image);
    const menu = document.createElement("nav");
    menu.className = "atelier-quick-menu";
    menu.hidden = true;
    menu.id = "atelier-quick-menu";
    menu.setAttribute("role", "menu");
    menu.setAttribute("aria-label", "Atelier \u5FEB\u6377\u83DC\u5355");
    button3.setAttribute("aria-controls", menu.id);
    const title = document.createElement("h2");
    title.textContent = "Bili Atelier";
    menu.append(title);
    const entries = [];
    const toggle = (open, focus = false) => {
      menu.hidden = !open;
      button3.setAttribute("aria-expanded", String(open));
      if (open) {
        const above = host.getBoundingClientRect().top + 44 >= menu.offsetHeight;
        menu.style.top = above ? "auto" : "0";
        menu.style.bottom = above ? "0" : "auto";
      }
      if (focus) (open ? entries[0] : button3)?.focus();
    };
    for (const area of atelierAreas) {
      const entry = document.createElement("button");
      entry.type = "button";
      entry.setAttribute("role", "menuitem");
      const icon2 = document.createElement("img");
      icon2.src = atelierIcons[area.id];
      icon2.alt = "";
      entry.append(icon2, document.createTextNode(area.label));
      entry.addEventListener("click", () => {
        toggle(false);
        openAtelier(area.id);
      });
      menu.append(entry);
      entries.push(entry);
    }
    let edge = readUiPreferences().edge, y = readUiPreferences().y;
    const position = () => {
      host.dataset.edge = edge;
      host.style.left = edge === "left" ? "6px" : "auto";
      host.style.right = edge === "right" ? "6px" : "auto";
      host.style.top = `${Math.max(6, Math.min(innerHeight - 54, y * (innerHeight - 48)))}px`;
    };
    let drag, suppressClick = false;
    button3.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) return;
      drag = { id: event.pointerId, x: event.clientX, y: event.clientY, top: host.getBoundingClientRect().top, moved: false };
      button3.setPointerCapture(event.pointerId);
    });
    button3.addEventListener("pointermove", (event) => {
      if (!drag || drag.id !== event.pointerId) return;
      if (Math.hypot(event.clientX - drag.x, event.clientY - drag.y) > 5) drag.moved = true;
      if (!drag.moved) return;
      toggle(false);
      host.style.right = "auto";
      host.style.left = `${Math.max(0, Math.min(innerWidth - 48, event.clientX - 24))}px`;
      host.style.top = `${Math.max(6, Math.min(innerHeight - 54, drag.top + event.clientY - drag.y))}px`;
    });
    const release = (event) => {
      if (!drag || drag.id !== event.pointerId) return;
      suppressClick = drag.moved;
      if (drag.moved && event.type !== "pointercancel") {
        edge = event.clientX < innerWidth / 2 ? "left" : "right";
        y = Math.max(0, Math.min(1, (drag.top + event.clientY - drag.y) / Math.max(1, innerHeight - 48)));
        saveUiPreferences({ edge, y });
      }
      drag = void 0;
      position();
      window.setTimeout(() => {
        suppressClick = false;
      }, 0);
    };
    button3.addEventListener("pointerup", release);
    button3.addEventListener("pointercancel", release);
    button3.addEventListener("click", () => {
      if (suppressClick) {
        suppressClick = false;
        return;
      }
      sound("menu");
      toggle(menu.hidden, true);
    });
    host.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        toggle(false, true);
      }
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        if (menu.hidden) toggle(true);
        const at = entries.indexOf(document.activeElement);
        const next = event.key === "Home" ? 0 : event.key === "End" ? entries.length - 1 : (at + (event.key === "ArrowUp" ? -1 : 1) + entries.length) % entries.length;
        entries[next]?.focus();
      }
    });
    document.addEventListener("pointerdown", (event) => {
      if (!event.composedPath().includes(host)) toggle(false);
    });
    document.addEventListener("focusin", (event) => {
      if (!host.contains(event.target)) toggle(false);
    });
    document.addEventListener("fullscreenchange", () => {
      host.hidden = !!document.fullscreenElement;
      toggle(false);
    });
    window.addEventListener("resize", position);
    window.addEventListener("atelier-reset-launcher", () => {
      ({ edge, y } = readUiPreferences());
      position();
    });
    host.append(menu, button3);
    document.body.append(host);
    observePixelLabels(menu);
    position();
  }

  // src/main.ts
  var videoHeaderReadySelector = "#biliMainHeader .bili-header, #biliMainHeader .mini-header, .bili-header";
  function hasGmStorage() {
    return typeof GM_getValue === "function" && typeof GM_setValue === "function" && typeof GM_deleteValue === "function" && typeof GM_listValues === "function";
  }
  function isBilibiliVideoPage() {
    return location.hostname === "www.bilibili.com" && /^\/video\//i.test(location.pathname);
  }
  function isVideoHeaderReady() {
    return Boolean(document.querySelector(videoHeaderReadySelector));
  }
  function waitForVideoHeaderBeforeCommentLocation(callback) {
    if (!config.commentLocation.videoPageHeaderGate || !isBilibiliVideoPage() || isVideoHeaderReady()) {
      callback();
      return;
    }
    let done = false;
    let timeoutId = 0;
    let observer = null;
    const finish = (reason) => {
      if (done) {
        return;
      }
      done = true;
      observer?.disconnect();
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      debugLog(`comment-location video header gate released: ${reason}`);
      callback();
    };
    const check = () => {
      if (isVideoHeaderReady()) {
        finish("header-ready");
      }
    };
    observer = new MutationObserver(check);
    observer.observe(document.documentElement || document, { childList: true, subtree: true });
    document.addEventListener("DOMContentLoaded", check, { once: true });
    timeoutId = window.setTimeout(() => finish("timeout"), config.commentLocation.videoPageHeaderGateTimeoutMs);
  }
  var commentLocationInjected = false;
  function injectCommentLocation() {
    if (commentLocationInjected) {
      return;
    }
    commentLocationInjected = true;
    try {
      injectPageScript(commentLocationPageWorldSource);
      debugLog("comment-location injected");
    } catch (error) {
      warnLog("\u8BC4\u8BBA\u533A\u5C5E\u5730\u6A21\u5757\u6CE8\u5165\u5931\u8D25", error);
    }
  }
  function startCommentLocation() {
    if (!config.commentLocation.enabled) {
      return;
    }
    waitForVideoHeaderBeforeCommentLocation(injectCommentLocation);
  }
  function startViewedMarkerModule() {
    if (!config.viewedMarker.enabled) {
      return;
    }
    if (!hasGmStorage()) {
      warnLog("\u5DF2\u770B\u6A21\u5757\u9700\u8981 GM_* \u5B58\u50A8\u6743\u9650\uFF0C\u5F53\u524D\u73AF\u5883\u4E0D\u53EF\u7528\u3002");
      return;
    }
    let started5 = false;
    const start = () => {
      if (started5) {
        return;
      }
      started5 = true;
      try {
        startViewedMarker();
        debugLog("viewed-marker started");
      } catch (error) {
        warnLog("\u5DF2\u770B\u6A21\u5757\u542F\u52A8\u5931\u8D25", error);
      }
    };
    if (document.head) {
      start();
      return;
    }
    const observer = new MutationObserver(() => {
      if (!document.head) {
        return;
      }
      observer.disconnect();
      start();
    });
    observer.observe(document.documentElement, { childList: true });
    document.addEventListener("DOMContentLoaded", () => {
      observer.disconnect();
      start();
    }, { once: true });
  }
  function startBlockerModule() {
    if (!config.blocker.enabled) {
      return;
    }
    if (!hasGmStorage()) {
      warnLog("\u5C4F\u853D\u6A21\u5757\u9700\u8981 GM_* \u5B58\u50A8\u6743\u9650\uFF0C\u5F53\u524D\u73AF\u5883\u4E0D\u53EF\u7528\u3002");
      return;
    }
    try {
      startBlocker();
      debugLog("blocker scheduled");
    } catch (error) {
      warnLog("\u5C4F\u853D\u6A21\u5757\u542F\u52A8\u5931\u8D25", error);
    }
  }
  if (hasGmStorage()) {
    registerAtelierNavigation((section) => openBlockerPanel(
      () => window.dispatchEvent(new Event("atelier-sync-applied")),
      (container, rescan) => renderHistoryPanel(container, rescan, true),
      section
    ));
    startSounds();
    const openSounds = () => openBlockerPanel(
      () => window.dispatchEvent(new Event("atelier-sync-applied")),
      (container, rescan) => renderHistoryPanel(container, rescan, true),
      "sounds"
    );
    window.addEventListener("atelier-open-sounds", openSounds);
    if (typeof GM_registerMenuCommand === "function") GM_registerMenuCommand("Bili Atelier \u97F3\u6548\u8BBE\u7F6E", openSounds);
    try {
      startLocalFollowingStore();
    } catch (error) {
      warnLog("\u672C\u5730\u5173\u6CE8\u5B58\u50A8\u521D\u59CB\u5316\u5931\u8D25", error);
    }
    try {
      startSync();
      registerSyncPanel(() => openBlockerPanel(
        () => window.dispatchEvent(new Event("atelier-sync-applied")),
        (container, rescan) => renderHistoryPanel(container, rescan, true),
        "sync"
      ));
    } catch (error) {
      warnLog("\u4E91\u540C\u6B65\u521D\u59CB\u5316\u5931\u8D25", error);
    }
  }
  startCommentLocation();
  runAfterVideoPageReady(() => {
    if (hasGmStorage()) {
      startAtelierLauncher();
      try {
        startLocalFollowing();
      } catch (error) {
        warnLog("\u672C\u5730\u5173\u6CE8\u521D\u59CB\u5316\u5931\u8D25", error);
      }
    }
    startViewedMarkerModule();
    startBlockerModule();
  });
})();
