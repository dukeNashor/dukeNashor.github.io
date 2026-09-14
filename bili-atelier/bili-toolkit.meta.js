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

