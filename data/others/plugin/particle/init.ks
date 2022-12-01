[loadjs storage="plugin/particle/libs/createjs.min.js"]
[loadjs storage="plugin/particle/libs/particlejs.min.js"]
[loadjs storage="plugin/particle/particle.js"]
[iscript]
	//フレームレートの指定
	createjs.Ticker.timingMode = createjs.Ticker.TIMEOUT;
	createjs.Ticker.framerate = Number(mp.rate) || 60;
	f.__particle_rate = Number(mp.rate) || 60;
[endscript]
[return]
;==================================================================
;パーティクルプラグイン  Ver 1.20  2021/12/10
;
;   制作 （猫）milkcat
;     HP  https://milkcat.jp/
;Twitter  https://twitter.com/nekomilkcat
;==================================================================
