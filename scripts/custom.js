$(document).ready(function() {

		if(jQuery.browser.mobile == true){
			window.location.href='http://mobile.billrpickard.com';
		}

		//fancybox stuff
		$(".fancy").fancybox({height: '100%',	width: '100%',	helpers:{title: {type: 'outside'}}});		
		$(".video").fancybox({maxWidth	: 800,	maxHeight	: 600,	fitToView	: false,	width		: '70%',	height		: '70%',	autoSize	: false,	closeClick	: false,	openEffect	: 'none',	closeEffect	: 'none'	});	
		$(".yt1").fancybox({maxWidth	: 560,	maxHeight	: 315,	fitToView	: false,	width		: '70%',	height		: '70%',	autoSize	: false,	closeClick	: false,	openEffect	: 'none',	closeEffect	: 'none'	});
		$(".yt2").fancybox({maxWidth	: 420,	maxHeight	: 315,	fitToView	: false,	width		: '70%',	height		: '70%',	autoSize	: false,	closeClick	: false,	openEffect	: 'none',	closeEffect	: 'none'	});	
		
		
	
	//create an array of navigation link ids
	var pageLinks = [];
	var notFound = false;
	var counter = 1;
	
	while(notFound == false){
		var linkString = "#section"+counter+"link";
		if($(linkString).length != 0){
			pageLinks.push(linkString);
			counter++;
		}else{
			notFound = true;
		}
	}
	
	//set some initial properties
	$("#navhelper").css({'width':$("#section1link").width()+2});
	$("#section1link").css({'color':'black'});
	
	// jquery smooth scrolling 
	// http://www.zachstronaut.com/posts/2009/01/18/jquery-smooth-scroll-bugs.html
	var scrollElement = 'html, body';
	$('html, body').each(function () {
		var initScrollTop = $(this).attr('scrollTop');
		$(this).attr('scrollTop', initScrollTop + 1);
		if ($(this).attr('scrollTop') == initScrollTop + 1) {
			scrollElement = this.nodeName.toLowerCase();
			$(this).attr('scrollTop', initScrollTop);
			return false;
		}    
	});
	
	function addTriggers(){
	
	$("#scrolltrigger1").waypoint(function(event,direction){
		
		if(direction === "down"){
			animateLink("#section2link");
		}else{
			animateLink("#section1link");
		}

	},{offset:'50%'});
	
	$("#scrolltrigger2").waypoint(function(event,direction){
		if(direction === "down"){
			animateLink("#section3link");
		}else{
			animateLink("#section2link");
		}
		
	},{offset:'50%'});
	
	}
	
	addTriggers();
	
	function removeTriggers(){
		$("#scrolltrigger1").waypoint('destroy');
		$("#scrolltrigger2").waypoint('destroy');
	}
	
	function animateLink(linkID){
		console.log(linkID);
		for(var j=0;j<pageLinks.length;j++){
			
			if(pageLinks[j] == linkID){
				$(pageLinks[j]).css({'color':'black'});
			}else{
				$(pageLinks[j]).css({'color':'blue'});
			}
			
		
		}
		
		$("#navhelper").stop().animate({
			'width': $(linkID).width(),
			'left' : $(linkID).offset().left
		}, 500, 'swing', function() {
			
		});
		
	
	}
	
	
	// Smooth scrolling for internal links
	$("a[href^='#']").click(function(event) {
		removeTriggers();
		event.preventDefault();
		
		var $this = $(this),
		target = this.hash,
		$target = $(target);
		
		$(scrollElement).stop().animate({
			'scrollTop': $target.offset().top+-200
		}, 500, 'swing', function() {
			addTriggers();
		});
		
		//custom bit for animating the bar under the links and changing the link colours
		var linkID = String("#"+$target.attr('id')+'link');
		for(var j=0;j<pageLinks.length;j++){
			
			if(pageLinks[j] == linkID){
				$(pageLinks[j]).css({'color':'black'});
			}else{
				$(pageLinks[j]).css({'color':'blue'});
			}
			
		
		}
		
		$("#navhelper").stop().animate({
			'width': $(linkID).width(),
			'left' : $(linkID).offset().left
		}, 500, 'swing', function() {
			
		});
		
		
	});

	});