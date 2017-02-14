<!--
var cookieString = new String(document.cookie)
var cookieHeader = "mytype="
var beginPosition = cookieString.indexOf(cookieHeader)

if (beginPosition != -1){
		var mytype = cookieString.substring(beginPosition + cookieHeader.length).split(";");
		var n = mytype[0];
		document.write("<script language=\"JavaScript\" src=\"data/bglist"+ n +".js\"></script>");
}
else{
		document.write("<script language=\"JavaScript\" src=\"data/bglist.js\"></script>");
}

//-->