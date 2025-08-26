$(document).ready(function(){

$('.fancybox').fancybox();

var uid = "demostudent"
var firstname = "Demo"
var lastname = "Student"
var course = "RECORDERV2"
$("#result").html("<div id='flashContent'><object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' width='600' height='400' id='srecv2' align='middle'><param name='movie' value='srecv2.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#ebefe9' /><param name='play' value='true' /><param name='loop' value='true' /><param name='wmode' value='opaque' /><param name='scale' value='showall' /><param name='menu' value='true' /><param name='devicefont' value='false' /><param name='salign' value='' /><param name='allowScriptAccess' value='sameDomain' /><param name='FlashVars' value='firstName="+firstname+"&lastName="+lastname+"&ccid="+uid+"&course="+course+"' /><object type='application/x-shockwave-flash' data='srecv2.swf' width='600' height='400'><param name='movie' value='srecv2.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#ebefe9' /><param name='play' value='true' /><param name='loop' value='true' /><param name='wmode' value='opaque' /><param name='scale' value='showall' /><param name='menu' value='true' /><param name='devicefont' value='false' /><param name='salign' value='' /><param name='allowScriptAccess' value='sameDomain' /><param name='FlashVars' value='firstName="+firstname+"&lastName="+lastname+"&ccid="+uid+"&course="+course+"' /></object></object></div>");
/*
$("#profileinfo").load(function(){			
				var items = $("#profileinfo").contents().find("td.readonly");
				var uid = $(items[0]).text();
				var firstname = $(items[1]).text();
				var lastname = $(items[2]).text();
				var course = "FPA104_V2";
				$("#result").html("<div id='flashContent'><object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' width='600' height='400' id='srecv2' align='middle'><param name='movie' value='../CODE Online Audio Recorder/srecv2.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#ebefe9' /><param name='play' value='true' /><param name='loop' value='true' /><param name='wmode' value='opaque' /><param name='scale' value='showall' /><param name='menu' value='true' /><param name='devicefont' value='false' /><param name='salign' value='' /><param name='allowScriptAccess' value='sameDomain' /><param name='FlashVars' value='firstName="+firstname+"&lastName="+lastname+"&ccid="+uid+"&course="+course+"' /><object type='application/x-shockwave-flash' data='../CODE Online Audio Recorder/srecv2.swf' width='600' height='400'><param name='movie' value='../CODE Online Audio Recorder/srecv2.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#ebefe9' /><param name='play' value='true' /><param name='loop' value='true' /><param name='wmode' value='opaque' /><param name='scale' value='showall' /><param name='menu' value='true' /><param name='devicefont' value='false' /><param name='salign' value='' /><param name='allowScriptAccess' value='sameDomain' /><param name='FlashVars' value='firstName="+firstname+"&lastName="+lastname+"&ccid="+uid+"&course="+course+"' /></object></object></div>");
});
*/
});