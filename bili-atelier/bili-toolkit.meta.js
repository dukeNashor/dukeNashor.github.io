// ==UserScript==
// @name         Bili Atelier
// @name:zh-CN   Bili Atelier - B站精修工作台
// @namespace    https://github.com/dukeNashor/bili-atelier
// @version      0.3.1
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
// @resource     atelier_xp_simsun_12_bold_woff https://dukenashor.github.io/bili-atelier/resources/xp-simsun-12-bold.dc3fef4f30a1a0227505e99c4ccf77657fb19ac04e8bd319f2a1b598673fa6ce.woff#sha256=dc3fef4f30a1a0227505e99c4ccf77657fb19ac04e8bd319f2a1b598673fa6ce
// @resource     atelier_xp_simsun_12_woff https://dukenashor.github.io/bili-atelier/resources/xp-simsun-12.fc911e4307d83bd87b76bd8aff89fd490b22e96ebc2ba36d07c0ceacdd797d2f.woff#sha256=fc911e4307d83bd87b76bd8aff89fd490b22e96ebc2ba36d07c0ceacdd797d2f
// @resource     atelier_xp_simsun_15_bold_woff https://dukenashor.github.io/bili-atelier/resources/xp-simsun-15-bold.a7e6845efb689319b1560634465640e7ffb56f41190fb3e2f802f520d57d395a.woff#sha256=a7e6845efb689319b1560634465640e7ffb56f41190fb3e2f802f520d57d395a
// @resource     atelier_xp_simsun_15_woff https://dukenashor.github.io/bili-atelier/resources/xp-simsun-15.81258b3cb2894a7fb6d20e9a971285f5c14435cf651edde55f446d185dd760dd.woff#sha256=81258b3cb2894a7fb6d20e9a971285f5c14435cf651edde55f446d185dd760dd
// @resource     atelier_xp_simsun_18_bold_woff https://dukenashor.github.io/bili-atelier/resources/xp-simsun-18-bold.a85cebd488807914f31075269da1da93a6c63d48bacdfcedf7b2f0cb42d50ec7.woff#sha256=a85cebd488807914f31075269da1da93a6c63d48bacdfcedf7b2f0cb42d50ec7
// @resource     atelier_xp_simsun_18_woff https://dukenashor.github.io/bili-atelier/resources/xp-simsun-18.fd3d9b68af0e4c88a7102ed1ad3501447dbf91179bca72fd53727396ecfa88d3.woff#sha256=fd3d9b68af0e4c88a7102ed1ad3501447dbf91179bca72fd53727396ecfa88d3
// @resource     atelier_blue_png https://dukenashor.github.io/bili-atelier/resources/blue.c0acc29a2d8e4655d952713b5732a69aa8db50462f1ab43a90b3ae40f3667bd8.png#sha256=c0acc29a2d8e4655d952713b5732a69aa8db50462f1ab43a90b3ae40f3667bd8
// @resource     atelier_olive_png https://dukenashor.github.io/bili-atelier/resources/olive.c69dc259aad8740762850846a09a39b16ce5a29804150846031cdbc155c80f56.png#sha256=c69dc259aad8740762850846a09a39b16ce5a29804150846031cdbc155c80f56
// @resource     atelier_silver_png https://dukenashor.github.io/bili-atelier/resources/silver.ff5811615f16d9b326dd2aa3ad1f8ca7f8e62795428b38fd5dda47beb53fa739.png#sha256=ff5811615f16d9b326dd2aa3ad1f8ca7f8e62795428b38fd5dda47beb53fa739
// @resource     atelier_atelier_icon_png https://dukenashor.github.io/bili-atelier/resources/atelier-icon.ccd5f55ad48331ba0f53cdc3badba82c6b2b221127182f25bafa0a92e917e3ae.png#sha256=ccd5f55ad48331ba0f53cdc3badba82c6b2b221127182f25bafa0a92e917e3ae
// @resource     atelier_shell32_16_png https://dukenashor.github.io/bili-atelier/resources/shell32-16.0fc14f2323592711fd45f5e0e98cc446b48313c492a11900e78edca3b297156b.png#sha256=0fc14f2323592711fd45f5e0e98cc446b48313c492a11900e78edca3b297156b
// @resource     atelier_shell32_32_png https://dukenashor.github.io/bili-atelier/resources/shell32-32.c6045c34489aa85118f41bca46792a781fee04070c1308c3d3f8217e3268a92a.png#sha256=c6045c34489aa85118f41bca46792a781fee04070c1308c3d3f8217e3268a92a
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

