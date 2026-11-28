// ==UserScript==
// @name         Bili Atelier
// @name:zh-CN   Bili Atelier - B站精修工作台
// @namespace    https://github.com/dukeNashor/bili-atelier
// @version      0.13.3
// @description  一体化 B 站工具箱：已看标记、屏蔽增强、评论区 IP 属地显示。
// @author       dukeNashor
// @match        https://www.bilibili.com/*
// @match        https://search.bilibili.com/*
// @match        https://space.bilibili.com/*
// @match        https://t.bilibili.com/*
// @exclude      https://member.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @homepageURL  https://dukenashor.github.io/bili-atelier/
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @connect      backblazeb2.com
// @connect      backblaze.com
// @connect      api.bilibili.com
// @connect      app.bilibili.com
// @connect      passport.bilibili.com
// @grant        GM_xmlhttpRequest
// @grant        GM_addValueChangeListener
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_getResourceURL
// @grant        GM_getResourceText
// @license      CC-BY-NC-SA-4.0
// @resource     atelier_aero_icons_png https://dukenashor.github.io/bili-atelier/resources/aero-icons.c5b5918888e47ad827650801839f83978668c0648518f57afcbab463c398c170.png#sha256=c5b5918888e47ad827650801839f83978668c0648518f57afcbab463c398c170
// @resource     atelier_aero_shell32_16_png https://dukenashor.github.io/bili-atelier/resources/aero-shell32-16.39bc97f3599ef7ba6212e4ec23d115560312abc8fae5bb9666cf0ba149767489.png#sha256=39bc97f3599ef7ba6212e4ec23d115560312abc8fae5bb9666cf0ba149767489
// @resource     atelier_aero_shell32_32_png https://dukenashor.github.io/bili-atelier/resources/aero-shell32-32.63f89ed252a5934690eb86291d15bc71eda031f4212249b107b7583d8cef0193.png#sha256=63f89ed252a5934690eb86291d15bc71eda031f4212249b107b7583d8cef0193
// @resource     atelier_aero_shell32_64_png https://dukenashor.github.io/bili-atelier/resources/aero-shell32-64.18e37fcf15e5337935b373535749a1deb583631fe4ddd931410330cc79243daf.png#sha256=18e37fcf15e5337935b373535749a1deb583631fe4ddd931410330cc79243daf
// @resource     atelier_win7nav_wav https://dukenashor.github.io/bili-atelier/resources/win7nav.682c8a7cf410de17c249775aee568ec1f9e3341bd4409e96ccbba4882f1d8670.wav#sha256=682c8a7cf410de17c249775aee568ec1f9e3341bd4409e96ccbba4882f1d8670
// @resource     atelier_harmony_night_jpg https://dukenashor.github.io/bili-atelier/resources/harmony-night.8e45a6469abfe5c4f44c2612c1a9d83bf9af1cc32decbf155dbd62f3bd38ec48.jpg#sha256=8e45a6469abfe5c4f44c2612c1a9d83bf9af1cc32decbf155dbd62f3bd38ec48
// @resource     atelier_harmony_jpg https://dukenashor.github.io/bili-atelier/resources/harmony.f880e9f8875e81928ecfd408e4a16174b3bbc89dfb66781278fdfa73923299db.jpg#sha256=f880e9f8875e81928ecfd408e4a16174b3bbc89dfb66781278fdfa73923299db
// @resource     atelier_aero_png https://dukenashor.github.io/bili-atelier/resources/aero.392a7b76aa8226408512c0389381be559414e0d5f05b60f6bba98c2b686b10ea.png#sha256=392a7b76aa8226408512c0389381be559414e0d5f05b60f6bba98c2b686b10ea
// @resource     atelier_xp_simsun_12_bold_woff https://dukenashor.github.io/bili-atelier/resources/xp-simsun-12-bold.dc3fef4f30a1a0227505e99c4ccf77657fb19ac04e8bd319f2a1b598673fa6ce.woff#sha256=dc3fef4f30a1a0227505e99c4ccf77657fb19ac04e8bd319f2a1b598673fa6ce
// @resource     atelier_xp_simsun_12_woff https://dukenashor.github.io/bili-atelier/resources/xp-simsun-12.fc911e4307d83bd87b76bd8aff89fd490b22e96ebc2ba36d07c0ceacdd797d2f.woff#sha256=fc911e4307d83bd87b76bd8aff89fd490b22e96ebc2ba36d07c0ceacdd797d2f
// @resource     atelier_xp_simsun_15_bold_woff https://dukenashor.github.io/bili-atelier/resources/xp-simsun-15-bold.a7e6845efb689319b1560634465640e7ffb56f41190fb3e2f802f520d57d395a.woff#sha256=a7e6845efb689319b1560634465640e7ffb56f41190fb3e2f802f520d57d395a
// @resource     atelier_xp_simsun_15_woff https://dukenashor.github.io/bili-atelier/resources/xp-simsun-15.81258b3cb2894a7fb6d20e9a971285f5c14435cf651edde55f446d185dd760dd.woff#sha256=81258b3cb2894a7fb6d20e9a971285f5c14435cf651edde55f446d185dd760dd
// @resource     atelier_xp_simsun_18_bold_woff https://dukenashor.github.io/bili-atelier/resources/xp-simsun-18-bold.a85cebd488807914f31075269da1da93a6c63d48bacdfcedf7b2f0cb42d50ec7.woff#sha256=a85cebd488807914f31075269da1da93a6c63d48bacdfcedf7b2f0cb42d50ec7
// @resource     atelier_xp_simsun_18_woff https://dukenashor.github.io/bili-atelier/resources/xp-simsun-18.fd3d9b68af0e4c88a7102ed1ad3501447dbf91179bca72fd53727396ecfa88d3.woff#sha256=fd3d9b68af0e4c88a7102ed1ad3501447dbf91179bca72fd53727396ecfa88d3
// @resource     atelier_blue_png https://dukenashor.github.io/bili-atelier/resources/blue.c0acc29a2d8e4655d952713b5732a69aa8db50462f1ab43a90b3ae40f3667bd8.png#sha256=c0acc29a2d8e4655d952713b5732a69aa8db50462f1ab43a90b3ae40f3667bd8
// @resource     atelier_olive_png https://dukenashor.github.io/bili-atelier/resources/olive.c69dc259aad8740762850846a09a39b16ce5a29804150846031cdbc155c80f56.png#sha256=c69dc259aad8740762850846a09a39b16ce5a29804150846031cdbc155c80f56
// @resource     atelier_silver_png https://dukenashor.github.io/bili-atelier/resources/silver.ff5811615f16d9b326dd2aa3ad1f8ca7f8e62795428b38fd5dda47beb53fa739.png#sha256=ff5811615f16d9b326dd2aa3ad1f8ca7f8e62795428b38fd5dda47beb53fa739
// @resource     atelier_wmp12_png https://dukenashor.github.io/bili-atelier/resources/wmp12.57454d8ca40c7a350df667f4140fafb6790f846c65b5b630485bd06341e032c7.png#sha256=57454d8ca40c7a350df667f4140fafb6790f846c65b5b630485bd06341e032c7
// @resource     atelier_atelier_icon_png https://dukenashor.github.io/bili-atelier/resources/atelier-icon.ccd5f55ad48331ba0f53cdc3badba82c6b2b221127182f25bafa0a92e917e3ae.png#sha256=ccd5f55ad48331ba0f53cdc3badba82c6b2b221127182f25bafa0a92e917e3ae
// @resource     atelier_shell32_16_png https://dukenashor.github.io/bili-atelier/resources/shell32-16.0fc14f2323592711fd45f5e0e98cc446b48313c492a11900e78edca3b297156b.png#sha256=0fc14f2323592711fd45f5e0e98cc446b48313c492a11900e78edca3b297156b
// @resource     atelier_shell32_32_png https://dukenashor.github.io/bili-atelier/resources/shell32-32.c6045c34489aa85118f41bca46792a781fee04070c1308c3d3f8217e3268a92a.png#sha256=c6045c34489aa85118f41bca46792a781fee04070c1308c3d3f8217e3268a92a
// @resource     atelier_xpmenu_wav https://dukenashor.github.io/bili-atelier/resources/xpmenu.da4fc6f8917b97725e6de85bb45b574c7895ec46672e6eb439a462cfd9940ac7.wav#sha256=da4fc6f8917b97725e6de85bb45b574c7895ec46672e6eb439a462cfd9940ac7
// @resource     atelier_xpmin_wav https://dukenashor.github.io/bili-atelier/resources/xpmin.974da6baee4187c37e514186b99691132988140cca95402589c6fdc1417e5926.wav#sha256=974da6baee4187c37e514186b99691132988140cca95402589c6fdc1417e5926
// @resource     atelier_xprestor_wav https://dukenashor.github.io/bili-atelier/resources/xprestor.480dea5b1808dd67c5a5946e7a47e8e582d5cb1c7fdce4b037140157da0ecadf.wav#sha256=480dea5b1808dd67c5a5946e7a47e8e582d5cb1c7fdce4b037140157da0ecadf
// @resource     atelier_xpstart_wav https://dukenashor.github.io/bili-atelier/resources/xpstart.d5712a8963eb3e1e181b25649ecff3080ede89c96350eb07e7d7cad429e959ea.wav#sha256=d5712a8963eb3e1e181b25649ecff3080ede89c96350eb07e7d7cad429e959ea
// @resource     atelier_bliss_night_jpg https://dukenashor.github.io/bili-atelier/resources/bliss-night.14889633de9fbdeb5d8e638edc8e96d4e6657507a5173d85d5edfdf108a8cca7.jpg#sha256=14889633de9fbdeb5d8e638edc8e96d4e6657507a5173d85d5edfdf108a8cca7
// @resource     atelier_bliss_jpg https://dukenashor.github.io/bili-atelier/resources/bliss.aecf72dc2cb3efd15575f081af8907ff5138d5c342d76b23d3bdb5e4db567720.jpg#sha256=aecf72dc2cb3efd15575f081af8907ff5138d5c342d76b23d3bdb5e4db567720
// @downloadURL  https://dukenashor.github.io/bili-atelier/bili-toolkit.user.js
// @updateURL    https://dukenashor.github.io/bili-atelier/bili-toolkit.meta.js
// ==/UserScript==

