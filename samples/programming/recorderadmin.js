$(document).ready(function(){

$('.fancybox').fancybox();

var uid = "demoteacher"
var firstname = "Demo";
var lastname = "Teacher"
var course = "RECORDERV2"
$("#result").html("<div id='flashContent'><object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' width='800' height='600' id='srecadminv2' align='middle'><param name='movie' value='srecadminv2.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#ebefe9' /><param name='play' value='true' /><param name='loop' value='true' /><param name='wmode' value='opaque' /><param name='scale' value='showall' /><param name='menu' value='true' /><param name='devicefont' value='false' /><param name='salign' value='' /><param name='allowScriptAccess' value='sameDomain' /><param name='FlashVars' value='firstName="+firstname+"&lastName="+lastname+"&ccid="+uid+"&course="+course+"' /><object type='application/x-shockwave-flash' data='srecadminv2.swf' width='800' height='600'><param name='movie' value='srecadminv2.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#ebefe9' /><param name='play' value='true' /><param name='loop' value='true' /><param name='wmode' value='opaque' /><param name='scale' value='showall' /><param name='menu' value='true' /><param name='devicefont' value='false' /><param name='salign' value='' /><param name='allowScriptAccess' value='sameDomain' /><param name='FlashVars' value='firstName="+firstname+"&lastName="+lastname+"&ccid="+uid+"&course="+course+"' /></object></object></div>");
/*
$("#profileinfo").load(function(){			
			var items = $("#profileinfo").contents().find("td.readonly");
			var uid = $(items[0]).text();
			var firstname = $(items[1]).text();
			var lastname = $(items[2]).text();
			var course = "FPA104_V2";
			$("#result").html("<div id='flashContent'><object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' width='800' height='600' id='srecadminv2' align='middle'><param name='movie' value='srecadminv2.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#ebefe9' /><param name='play' value='true' /><param name='loop' value='true' /><param name='wmode' value='opaque' /><param name='scale' value='showall' /><param name='menu' value='true' /><param name='devicefont' value='false' /><param name='salign' value='' /><param name='allowScriptAccess' value='sameDomain' /><param name='FlashVars' value='firstName="+firstname+"&lastName="+lastname+"&ccid="+uid+"&course="+course+"' /><object type='application/x-shockwave-flash' data='srecadminv2.swf' width='800' height='600'><param name='movie' value='srecadminv2.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#ebefe9' /><param name='play' value='true' /><param name='loop' value='true' /><param name='wmode' value='opaque' /><param name='scale' value='showall' /><param name='menu' value='true' /><param name='devicefont' value='false' /><param name='salign' value='' /><param name='allowScriptAccess' value='sameDomain' /><param name='FlashVars' value='firstName="+firstname+"&lastName="+lastname+"&ccid="+uid+"&course="+course+"' /></object></object></div>");
});
*/
});