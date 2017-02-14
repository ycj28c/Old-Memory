 toggleKey =new Object();
 toggleKey[0] = "_off";
 toggleKey[1] = "_on";
 toggleKey[2] = "_ovr";
 toggleKey[3] = "_out";
 toggleKey[4] = "_mdn";
 toggleKey[5] = "_mup";

function imgChange(id , act){
	if(document.images){ document.images[id].src = eval("img."+ id + toggleKey[act] + ".src");}
}


 if(document.images){
	img = new Object();
	// mute
	img.vmute_off = new Image();
	img.vmute_off.src = "./img/btn_mute_off.gif";
	img.vmute_on = new Image();
	img.vmute_on.src = "./img/btn_mute_on.gif";
	
	// pmode
	img.pmode_off = new Image();
	img.pmode_off.src = "./img/btn_rndmode_off.gif";
	img.pmode_on = new Image();
	img.pmode_on.src = "./img/btn_rndmode_on.gif";

	// loop
	img.rept_off = new Image();
	img.rept_off.src = "./img/btn_rept_off.gif";
	img.rept_on = new Image();
	img.rept_on.src = "./img/btn_rept_on.gif";

	// play
	img.playt_off = new Image();
	img.playt_off.src = "./img/btn_play.gif";
	img.playt_on = new Image();
	img.playt_on.src = "./img/btn_play_on.gif";
	img.playt_ovr = new Image();
	img.playt_ovr.src = "./img/btn_play_ovr.gif";


	// pause & play
	img.pauzt_off = new Image();
	img.pauzt_off.src = "./img/btn_pauz_off.gif";
	img.pauzt_on = new Image();
	img.pauzt_on.src = "./img/btn_pauz_on.gif";
	img.pauzt_ovr = new Image();
	img.pauzt_ovr.src = "./img/btn_pauz_ovr.gif";

	// stop
	img.stopt_off = new Image();
	img.stopt_off.src = "./img/btn_stop.gif";
	img.stopt_on = new Image();
	img.stopt_on.src = "./img/btn_stop_on.gif";
	img.stopt_ovr = new Image();
	img.stopt_ovr.src = "./img/btn_stop_ovr.gif";

	// scope
	img.scope_off=new Image();
	img.scope_off.src="./img/scope_off.gif";
	img.scope_on=new Image();
	img.scope_on.src="./img/scope_on.gif";

	// prev
	img.prevt_out = new Image();
	img.prevt_out.src = "./img/btn_prev.gif";
	img.prevt_ovr = new Image();
	img.prevt_ovr.src = "./img/btn_prev_ovr.gif";

	// next
	img.nextt_out = new Image();
	img.nextt_out.src = "./img/btn_next.gif";
	img.nextt_ovr = new Image();
	img.nextt_ovr.src = "./img/btn_next_ovr.gif";

	// up
	img.vup_out = new Image();
	img.vup_out.src = "./img/btn_vup.gif";
	img.vup_ovr = new Image();
	img.vup_ovr.src = "./img/btn_vup_ovr.gif";

	// down
	img.vdn_out = new Image();
	img.vdn_out.src = "./img/btn_vdn.gif";
	img.vdn_ovr = new Image();
	img.vdn_ovr.src = "./img/btn_vdn_ovr.gif";

	// list
	img.plist_out = new Image();
	img.plist_out.src = "./img/btn_plist.gif";
	img.plist_ovr = new Image();
	img.plist_ovr.src = "./img/btn_plist_ovr.gif";

	// search
	img.search_out = new Image();
	img.search_out.src = "./img/btn_search.gif";
	img.search_ovr = new Image();
	img.search_ovr.src = "./img/btn_search_ovr.gif";

	// ctrl
	img.ctrl_out = new Image();
	img.ctrl_out.src = "./img/btn_ctrl_on.gif";
	img.ctrl_ovr = new Image();
	img.ctrl_ovr.src = "./img/btn_ctrl_off.gif";

	// fullscreen
	img.fsc_out = new Image();
	img.fsc_out.src = "./img/btn_fullscreen.gif";
	img.fsc_ovr = new Image();
	img.fsc_ovr.src = "./img/btn_fullscreen_ovr.gif";
	
	// shoumenu
	img.min_out = new Image();
	img.min_out.src = "./img/btn_min.gif";
	img.min_ovr = new Image();
	img.min_ovr.src = "./img/btn_min_ovr.gif";
}

function imgtog(tg , act){
 if(tg=="vmute"){
	if(act=="2"){ imgChange("vmute", 1);}
	else{imgmute("vmute",0);}
 }

 if(tg=="vdn"){
	if(act=="2"){ imgChange("vdn", 2);}
	else{imgChange("vdn",3);}	
 }

 if(tg=="vup"){
	if(act=="2"){ imgChange("vup", 2);}
	else{imgChange("vup",3);}	
 }

 if(tg=="pmode"){
	if(act=="2"){ imgChange("pmode", 1);}
	else{imgrnd();}	
 }

 if(tg=="rept"){
	if(act=="2"){ imgChange("rept", 1);}
	else{imgrept();}	
 }

 if(tg=="nextt"){
	if(act=="2"){ imgChange("nextt", 2);}
	else{imgChange("nextt",3);}	
 }

 if(tg=="prevt"){
	if(act=="2"){ imgChange("prevt", 2);}
	else{imgChange("prevt",3);}	
 }

 if(tg=="pauzt"){
	if(act=="2"){ imgpauz(2);}
	else{imgpauz();}
}

 if(tg=="playt"){
	if(act=="2"){ imgplay(2);}
	else{imgplay();}
}

 if(tg=="stopt"){
	if(act=="2"){ imgstop(2);}
	else{imgstop();}
}

 if(tg=="plist"){
	if(act=="2"){ imgChange("plist", 2);}
	else{imgChange("plist",3);}	
 }
}


function imgmute(){
 var ps=Exobud.settings;
 if(ps.mute){ imgChange("vmute",1);}
 else{imgChange("vmute",0);}
}

function imgrnd(){
 if(blnRndPlay){imgChange("pmode", 1);}
 else{imgChange("pmode", 0);}
}

function imgrept(){
 if(blnRept){imgChange("rept", 1);}
 else{imgChange("rept", 0);}
}

function imgpauz(f){
 var wmps=Exobud.playState;
 if(f==2){imgChange("pauzt",2);}
 else{ if(wmps==2){imgChange("pauzt",1);}
	else{imgChange("pauzt",0);}
 }
}

function imgplay(f){
 var wmps=Exobud.playState;
 if(f==2){ imgChange("playt",2);}
 else{ if(wmps==3){imgChange("playt",1);}
	else{imgChange("playt",0);}
 }
}

function imgstop(f){
 var wmps=Exobud.playState;
 if(f==2){ imgChange("stopt",2);}
 else{ if(wmps==2 || wmps==3){imgChange("stopt",0);}
	else{imgChange("stopt",1);}
	
 }
}
