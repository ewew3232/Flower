(function(){TYRANO.kag.ftag.master_tag.particle=object({vital:["storage"],pm:{target:"bg",index:"",x:0,y:0,width:TYRANO.kag.config.scWidth,height:TYRANO.kag.config.scHeight,mode:"normal",time:1000,wait:!1,opacity:255,tracking:!1,visible:!0,name:"",stop:!1},start:function(i){var n=this;if(""!=i.index){var e=i.index;"bg"!=i.target&&"chara"!=i.target&&"message"!=i.target&&(i.target="bg")}else{"bg"==i.target?e=5:"chara"==i.target?e=20:"message"==i.target?e=10000:(i.target="bg",e=5)}e="<div id='particle_outer_"+i.target+"' class='tyrano_particle particle_outer' style='pointer-events: none;position: absolute; opacity:"+Number(i.opacity)/255+"; width:"+TYRANO.kag.config.scWidth+"px; height:"+TYRANO.kag.config.scHeight+"px;z-index:"+e+";mix-blend-mode: "+i.mode+";'><canvas width="+TYRANO.kag.config.scWidth+" height="+TYRANO.kag.config.scHeight+" id='particle_"+i.target+"' class='tyrano_particle particle_inner' style='animation-name: fadeIn; animation-fill-mode: both; animation-duration:"+i.time+"ms;position: absolute;width:"+i.width+"px; height:"+i.height+"px; left: "+i.x+"px;top: "+i.y+"px ;pointer-events: none;";"true"!=String(i.visible)&&(e+="display: none;");e+="'></canvas><div>";$("#particle_outer_"+i.target).remove();null!==TYRANO.kag.tmp.__particle[i.target].particleSystem&&(TYRANO.kag.tmp.__particle[i.target].particleSystem.pause(),TYRANO.kag.tmp.__particle[i.target].particleSystem.dispose(),createjs.Ticker.off("tick",TYRANO.kag.tmp.__particle[i.target].ticker),TYRANO.kag.tmp.__particle[i.target].stage=null,TYRANO.kag.tmp.__particle[i.target].particleSystem=null,TYRANO.kag.tmp.__particle[i.target].tracking=null,TYRANO.kag.stat.f.__particle[i.target]=null);$("#root_layer_game").append(e);$.setName($("#particle_outer_"+i.target),i.name);var m=TYRANO.kag.tmp.__particle[i.target];m.stage=new createjs.Stage("particle_"+i.target);m.particleSystem=new particlejs.ParticleSystem;m.stage.addChild(m.particleSystem.container);m.tracking="true"===String(i.tracking);var l=parseInt(i.time),k=String(i.wait),j=String(i.stop);TYRANO.kag.stat.f.__particle[i.target]=i;TYRANO.kag.stat.f.__particle[i.target].time=0;TYRANO.kag.stat.f.__particle[i.target].wait="false";TYRANO.kag.stat.f.__particle[i.target].stop=!0;TYRANO.kag.stat.f.__particle_visible[i.target]=i.visible;$.getJSON("data/others/plugin/particle/json/"+i.storage).done(function(a){m.particleSystem.importFromJson(a);"bg"==i.target?m.ticker=createjs.Ticker.on("tick",handleTick_bg):"chara"==i.target?m.ticker=createjs.Ticker.on("tick",handleTick_chara):"message"==i.target&&(m.ticker=createjs.Ticker.on("tick",handleTick_message));"true"==k?setTimeout(function(){n.kag.ftag.nextOrder()},l):"false"==j&&n.kag.ftag.nextOrder()}).fail(function(a){n.kag.ftag.nextOrder()})}});TYRANO.kag.ftag.master_tag.particle.kag=TYRANO.kag})();(function(){TYRANO.kag.ftag.master_tag.particle_delete=object({pm:{target:"",time:1000,wait:!1},start:function(b){var d=this;""!=b.target&&"bg"!=b.target&&"chara"!=b.target&&"message"!=b.target&&(b.target="");""==b.target?(null!==TYRANO.kag.stat.f.__particle.bg&&(TYRANO.kag.stat.f.__particle.bg=null,$("#particle_bg").css({"animation-name":"fadeOut","animation-duration":b.time+"ms"}).fadeOut(parseInt(b.time),function(){$(this).parents("#particle_outer_bg").remove();null===TYRANO.kag.stat.f.__particle.bg&&(TYRANO.kag.tmp.__particle.bg.particleSystem.pause(),TYRANO.kag.tmp.__particle.bg.particleSystem.dispose(),createjs.Ticker.off("tick",TYRANO.kag.tmp.__particle.bg.ticker),TYRANO.kag.tmp.__particle.bg.stage=null,TYRANO.kag.tmp.__particle.bg.particleSystem=null,TYRANO.kag.tmp.__particle.bg.tracking=null)})),null!==TYRANO.kag.stat.f.__particle.chara&&(TYRANO.kag.stat.f.__particle.chara=null,$("#particle_chara").css({"animation-name":"fadeOut","animation-duration":b.time+"ms"}).fadeOut(parseInt(b.time),function(){$(this).parents("#particle_outer_chara").remove();null===TYRANO.kag.stat.f.__particle.chara&&(TYRANO.kag.tmp.__particle.chara.particleSystem.pause(),TYRANO.kag.tmp.__particle.chara.particleSystem.dispose(),createjs.Ticker.off("tick",TYRANO.kag.tmp.__particle.chara.ticker),TYRANO.kag.tmp.__particle.chara.stage=null,TYRANO.kag.tmp.__particle.chara.particleSystem=null,TYRANO.kag.tmp.__particle.chara.tracking=null)})),null!==TYRANO.kag.stat.f.__particle.message&&(TYRANO.kag.stat.f.__particle.message=null,$("#particle_message").css({"animation-name":"fadeOut","animation-duration":b.time+"ms"}).fadeOut(parseInt(b.time),function(){$(this).parents("#particle_outer_message").remove();null===TYRANO.kag.stat.f.__particle.message&&(TYRANO.kag.tmp.__particle.message.particleSystem.pause(),TYRANO.kag.tmp.__particle.message.particleSystem.dispose(),createjs.Ticker.off("tick",TYRANO.kag.tmp.__particle.message.ticker),TYRANO.kag.tmp.__particle.message.stage=null,TYRANO.kag.tmp.__particle.message.particleSystem=null,TYRANO.kag.tmp.__particle.message.tracking=null)}))):null!==TYRANO.kag.stat.f.__particle[b.target]&&(TYRANO.kag.stat.f.__particle[b.target]=null,$("#particle_"+b.target).css({"animation-name":"fadeOut","animation-duration":b.time+"ms"}).fadeOut(parseInt(b.time),function(){$(this).parents("#particle_outer_"+b.target).remove();null===TYRANO.kag.stat.f.__particle[b.target]&&(TYRANO.kag.tmp.__particle[b.target].particleSystem.pause(),TYRANO.kag.tmp.__particle[b.target].particleSystem.dispose(),createjs.Ticker.off("tick",TYRANO.kag.tmp.__particle[b.target].ticker),TYRANO.kag.tmp.__particle[b.target].stage=null,TYRANO.kag.tmp.__particle[b.target].particleSystem=null,TYRANO.kag.tmp.__particle[b.target].tracking=null)}));"true"==String(b.wait)?setTimeout(function(){d.kag.ftag.nextOrder()},parseInt(b.time)):d.kag.ftag.nextOrder()}});TYRANO.kag.ftag.master_tag.particle_delete.kag=TYRANO.kag})();(function(){TYRANO.kag.ftag.master_tag.particle_make=object({pm:{},start:function(b){b=TYRANO.kag.stat.f.__particle;particleReset();createjs.Ticker.framerate=TYRANO.kag.stat.f.__particle_rate;null!==b.bg&&TYRANO.kag.ftag.startTag("particle",b.bg);null!==b.chara&&TYRANO.kag.ftag.startTag("particle",b.chara);null!==b.message&&TYRANO.kag.ftag.startTag("particle",b.message);this.kag.ftag.nextOrder()}});TYRANO.kag.ftag.master_tag.particle_make.kag=TYRANO.kag})();(function(){TYRANO.kag.ftag.master_tag.particle_show=object({pm:{target:"",time:1000,wait:!1},start:function(e){var f=this,d=TYRANO.kag.stat.f;""!=e.target&&"bg"!=e.target&&"chara"!=e.target&&"message"!=e.target&&(e.target="");""==e.target?(d.__particle_visible.bg=!0,null!==d.__particle.bg&&(d.__particle.bg.visible=!0),$("#particle_bg").css({"animation-name":"fadeIn","animation-duration":e.time+"ms"}).fadeIn(parseInt(e.time)),d.__particle_visible.chara=!0,null!==d.__particle.chara&&(d.__particle.chara.visible=!0),$("#particle_chara").css({"animation-name":"fadeIn","animation-duration":e.time+"ms"}).fadeIn(parseInt(e.time)),d.__particle_visible.message=!0,null!==d.__particle.message&&(d.__particle.message.visible=!0),$("#particle_message").css({"animation-name":"fadeIn","animation-duration":e.time+"ms"}).fadeIn(parseInt(e.time))):(d.__particle_visible[e.target]=!0,null!==d.__particle[e.target]&&(d.__particle[e.target].visible=!0),$("#particle_"+e.target).css({"animation-name":"fadeIn","animation-duration":e.time+"ms"}).fadeIn(parseInt(e.time)));"true"==String(e.wait)?setTimeout(function(){f.kag.ftag.nextOrder()},parseInt(e.time)):f.kag.ftag.nextOrder()}});TYRANO.kag.ftag.master_tag.particle_show.kag=TYRANO.kag})();(function(){TYRANO.kag.ftag.master_tag.particle_hide=object({pm:{target:"",time:1000,wait:!1},start:function(e){var f=this,d=TYRANO.kag.stat.f;""!=e.target&&"bg"!=e.target&&"chara"!=e.target&&"message"!=e.target&&(e.target="");""==e.target?(d.__particle_visible.bg=!1,null!==d.__particle.bg&&(d.__particle.bg.visible=!1),$("#particle_bg").css({"animation-name":"fadeOut","animation-duration":e.time+"ms"}).fadeOut(parseInt(e.time)),d.__particle_visible.chara=!1,null!==d.__particle.chara&&(d.__particle.chara.visible=!1),$("#particle_chara").css({"animation-name":"fadeOut","animation-duration":e.time+"ms"}).fadeOut(parseInt(e.time)),d.__particle_visible.message=!1,null!==d.__particle.message&&(d.__particle.message.visible=!1),$("#particle_message").css({"animation-name":"fadeOut","animation-duration":e.time+"ms"}).fadeOut(parseInt(e.time))):(d.__particle_visible[e.target]=!1,null!==d.__particle[e.target]&&(d.__particle[e.target].visible=!1),$("#particle_"+e.target).css({"animation-name":"fadeOut","animation-duration":e.time+"ms"}).fadeOut(parseInt(e.time)));"true"==String(e.wait)?setTimeout(function(){f.kag.ftag.nextOrder()},parseInt(e.time)):f.kag.ftag.nextOrder()}});TYRANO.kag.ftag.master_tag.particle_hide.kag=TYRANO.kag})();(function(){TYRANO.kag.ftag.master_tag.particle_sleep=object({pm:{target:"",time:0,wait:!1},start:function(b){var d=this;""!=b.target&&"bg"!=b.target&&"chara"!=b.target&&"message"!=b.target&&(b.target="");""==b.target?($("#particle_bg").css({"animation-name":"fadeOut","animation-duration":b.time+"ms"}).fadeOut(parseInt(b.time)),$("#particle_chara").css({"animation-name":"fadeOut","animation-duration":b.time+"ms"}).fadeOut(parseInt(b.time)),$("#particle_message").css({"animation-name":"fadeOut","animation-duration":b.time+"ms"}).fadeOut(parseInt(b.time))):$("#particle_"+b.target).css({"animation-name":"fadeOut","animation-duration":b.time+"ms"}).fadeOut(parseInt(b.time));"true"==String(b.wait)?setTimeout(function(){d.kag.ftag.nextOrder()},parseInt(b.time)):d.kag.ftag.nextOrder()}});TYRANO.kag.ftag.master_tag.particle_sleep.kag=TYRANO.kag})();(function(){TYRANO.kag.ftag.master_tag.particle_mod=object({pm:{target:"",index:"",x:"",y:"",width:"",height:"",mode:"",opacity:"",tracking:""},start:function(e){""!=e.target&&"bg"!=e.target&&"chara"!=e.target&&"message"!=e.target&&(e.target="");var f={},d=TYRANO.kag.stat.f;""!=e.x&&(f.left=e.x+"px",""==e.target?(null!==d.__particle.bg&&(d.__particle.bg.x=e.x),null!==d.__particle.chara&&(d.__particle.chara.x=e.x),null!==d.__particle.message&&(d.__particle.message.x=e.x)):null!==d.__particle[e.target]&&(d.__particle[e.target].x=e.x));""!=e.y&&(f.top=e.y+"px",""==e.target?(null!==d.__particle.bg&&(d.__particle.bg.y=e.y),null!==d.__particle.chara&&(d.__particle.chara.y=e.y),null!==d.__particle.message&&(d.__particle.message.y=e.y)):null!==d.__particle[e.target]&&(d.__particle[e.target].y=e.y));""!=e.width&&(f.width=e.width+"px",""==e.target?(null!==d.__particle.bg&&(d.__particle.bg.width=e.width),null!==d.__particle.chara&&(d.__particle.chara.width=e.width),null!==d.__particle.message&&(d.__particle.message.width=e.width)):null!==d.__particle[e.target]&&(d.__particle[e.target].width=e.width));""!=e.height&&(f.height=e.height+"px",""==e.target?(null!==d.__particle.bg&&(d.__particle.bg.height=e.height),null!==d.__particle.chara&&(d.__particle.chara.height=e.height),null!==d.__particle.message&&(d.__particle.message.height=e.height)):null!==d.__particle[e.target]&&(d.__particle[e.target].height=e.height));0<Object.keys(f).length&&(""==e.target?($("#particle_bg").css(f),$("#particle_chara").css(f),$("#particle_message").css(f)):$("#particle_"+e.target).css(f));f={};""!=e.index&&(f["z-index"]=e.index,""==e.target?(null!==d.__particle.bg&&(d.__particle.bg.index=e.index),null!==d.__particle.chara&&(d.__particle.chara.index=e.index),null!==d.__particle.message&&(d.__particle.message.index=e.index)):null!==d.__particle[e.target]&&(d.__particle[e.target].index=e.index));""!=e.mode&&(f["mix-blend-mode"]=e.mode,""==e.target?(null!==d.__particle.bg&&(d.__particle.bg.mode=e.mode),null!==d.__particle.chara&&(d.__particle.chara.mode=e.mode),null!==d.__particle.message&&(d.__particle.message.mode=e.mode)):null!==d.__particle[e.target]&&(d.__particle[e.target].mode=e.mode));""!=e.opacity&&(f.opacity=Number(e.opacity)/255,""==e.target?(null!==d.__particle.bg&&(d.__particle.bg.opacity=e.opacity),null!==d.__particle.chara&&(d.__particle.chara.opacity=e.opacity),null!==d.__particle.message&&(d.__particle.message.opacity=e.opacity)):null!==d.__particle[e.target]&&(d.__particle[e.target].opacity=e.opacity));0<Object.keys(f).length&&(""==e.target?($("#particle_outer_bg").css(f),$("#particle_outer_chara").css(f),$("#particle_outer_message").css(f)):$("#particle_outer_"+e.target).css(f));""!=e.tracking&&(""==e.target?(null!==d.__particle.bg&&(d.__particle.bg.tracking=e.tracking,TYRANO.kag.tmp.__particle.bg.tracking="true"===String(e.tracking)),null!==d.__particle.chara&&(d.__particle.chara.tracking=e.tracking,TYRANO.kag.tmp.__particle.chara.tracking="true"===String(e.tracking)),null!==d.__particle.message&&(d.__particle.message.tracking=e.tracking,TYRANO.kag.tmp.__particle.message.tracking="true"===String(e.tracking))):null!==d.__particle[e.target]&&(d.__particle[e.target].tracking=e.tracking,TYRANO.kag.tmp.__particle[e.target].tracking="true"===String(e.tracking)));this.kag.ftag.nextOrder()}});TYRANO.kag.ftag.master_tag.particle_mod.kag=TYRANO.kag})();(function(){TYRANO.kag.ftag.master_tag.particle_rate=object({pm:{rate:60},start:function(b){TYRANO.kag.stat.f.__particle_rate=Number(b.rate);createjs.Ticker.framerate=Number(b.rate);this.kag.ftag.nextOrder()}});TYRANO.kag.ftag.master_tag.particle_rate.kag=TYRANO.kag})();function particleReset(){$(".tyrano_particle").remove();createjs.Ticker.reset();null!=TYRANO.kag.tmp.__particle.bg.particleSystem&&(TYRANO.kag.tmp.__particle.bg.particleSystem.pause(),TYRANO.kag.tmp.__particle.bg.particleSystem.dispose());null!=TYRANO.kag.tmp.__particle.chara.particleSystem&&(TYRANO.kag.tmp.__particle.chara.particleSystem.pause(),TYRANO.kag.tmp.__particle.chara.particleSystem.dispose());null!=TYRANO.kag.tmp.__particle.message.particleSystem&&(TYRANO.kag.tmp.__particle.message.particleSystem.pause(),TYRANO.kag.tmp.__particle.message.particleSystem.dispose());TYRANO.kag.tmp.__particle={bg:null,chara:null,message:null};TYRANO.kag.tmp.__particle.bg={stage:null,particleSystem:null,ticker:null,tracking:null};TYRANO.kag.tmp.__particle.chara={stage:null,particleSystem:null,ticker:null,tracking:null};TYRANO.kag.tmp.__particle.message={stage:null,particleSystem:null,ticker:null,tracking:null}}function handleTick_bg(){var b=TYRANO.kag.tmp.__particle.bg;b.tracking&&0!==b.stage.mouseX&&0!==b.stage.mouseY&&(b.particleSystem.startX=b.stage.mouseX,b.particleSystem.startY=b.stage.mouseY);b.particleSystem.update();b.stage.update()}function handleTick_chara(){var b=TYRANO.kag.tmp.__particle.chara;b.tracking&&0!==b.stage.mouseX&&0!==b.stage.mouseY&&(b.particleSystem.startX=b.stage.mouseX,b.particleSystem.startY=b.stage.mouseY);b.particleSystem.update();b.stage.update()}function handleTick_message(){var b=TYRANO.kag.tmp.__particle.message;b.tracking&&0!==b.stage.mouseX&&0!==b.stage.mouseY&&(b.particleSystem.startX=b.stage.mouseX,b.particleSystem.startY=b.stage.mouseY);b.particleSystem.update();b.stage.update()}(function(){$(".tyrano_particle").remove();createjs.Ticker.reset();TYRANO.kag.stat.f.__particle={bg:null,chara:null,message:null};TYRANO.kag.stat.f.__particle_visible={bg:!0,chara:!0,message:!0};TYRANO.kag.tmp.__particle={bg:null,chara:null,message:null};TYRANO.kag.tmp.__particle.bg={stage:null,particleSystem:null,ticker:null,tracking:null};TYRANO.kag.tmp.__particle.chara={stage:null,particleSystem:null,ticker:null,tracking:null};TYRANO.kag.tmp.__particle.message={stage:null,particleSystem:null,ticker:null,tracking:null}})();