    //------------------------------------------------------------------------------
    //Interactive Mind Map for nicolebreit.com
    //Images & Interactivy Copyright Bill Pickard, 2018. http://www.billrpickard.com
    //-------------------------------------------------------------------------------

    // Notes:
    // This script is separated into two parts. Function declarations are in the <head> of the document, and the rest of the script is at the end of the <body> element.

	// from https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
   	function isMobileDevice() {
    	return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	};
	
	//detect browser by feature detection -- from https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
	// Firefox 1.0+
	var isFirefox = typeof InstallTrigger !== 'undefined';

	// Safari 3.0+ "[object HTMLElementConstructor]" 
	var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

	// Internet Explorer 6-11
	var isIE = /*@cc_on!@*/false || !!document.documentMode;

	// Edge 20+
	var isEdge = !isIE && !!window.StyleMedia;

	// Chrome 1+
	var isChrome = !!window.chrome && !!window.chrome.webstore;

    /* Scrolls the text inside the floating scroller */
    function scrollText(e){
      isPlaying = true;
      scroller.style.userSelect='auto'
      scroller.style.zIndex = 999;

      //make text object unclickable while audio is playing
      brainObjects.map(function(brainArea){
        brainArea.removeEventListener('click', scrollText);
      })

      //to reference the currently playing area
      currentlyPlaying = e.target;
	  currentlyPlaying.adjustedScrollTime = currentlyPlaying.scrollTime;
      _timer = new Date();

      //we don't want the highlight to fade when we move to the audio controls in the scroller
      e.target.removeEventListener('mouseout',fadeHighlight);

      //show the scroller, set the text, make it scroll, and activate the css transform by changing the margin-top property
      scroller.style.opacity=1;
      scroller_content.innerHTML = e.target.txt;
      scroller_content.style.transition = 'margin 0s linear';
      scroller_content.style.marginTop = currentlyPlaying.marginStart+"px";


      //stop & reset any currently playing audio
      stopAllAudio();

      //start playing the audio for the clicked on brain area
      if(e.target.audio != ""){
	         //ioS won't trigger audio from a setTimeout function, so for mobile we start playing right away
		 if(isMobileDevice() === false){
		  _delay = setTimeout(function(){currentlyPlaying.audio.play()},5000);
		 }else{
				currentlyPlaying.audio.play();
		 }
      }

	  //for some reason, margin sizes are inconsistent in between browsers. We need to make adjustments so the text is properly positioned at the end of the audio segment
      let browserFix = setTimeout(function(){
		if(isFirefox === true){
			currentlyPlaying.marginEnd-=110;
		}
		if((isIE || isEdge) === true){
			currentlyPlaying.marginEnd-=30;
		}

                if((isSafari || isMobileDevice()) === true){
                        currentlyPlaying.marginEnd-=500;
                        currentlyPlaying.scrollTime+=5;
                }
		scroller_content.style.transition = 'margin '+currentlyPlaying.scrollTime+'s linear';
		scroller_content.style.marginTop = currentlyPlaying.marginEnd+"px";
      },100)

    }

    //invoked from the X button on the floating scroller
    function closeScroller(e){
      _timer = null;
	  clearInterval(_delay);
      isPlaying = false;

      scroller.style.userSelect = 'none';
      scroller.style.zIndex = 0;

      //add back the click events to the brain areas
      brainObjects.map(function(brainArea){
        brainArea.addEventListener('click',scrollText);
      })

      //fade out the scroller via css trasnform
      scroller.style.opacity=0;


      //since there is no audio.stop() :P
      if(currentlyPlaying.audio != ""){
        currentlyPlaying.audio.pause();
        currentlyPlaying.audio.currentTime = 0;
      }

      //reset the play/pause button to pause
      scroller_pause_btn.innerHTML = '&#10074;&#10074;'

      //add the fade back to whichever event was playing
      currentlyPlaying.addEventListener('mouseout',fadeHighlight);
	  currentlyPlaying.children[1].style.opacity=0;

      //fade out the line/highlight for the item just viewed
      currentlyPlaying.line.style.opacity = 0;
      currentlyPlaying.highlight.style.opacity = 0;

      //delay resetting the margin so you don't see the jump during the fade
      setTimeout(function(){
        scroller_content.style.transition = 'margin 0s linear';
        scroller_content.style.marginTop = currentlyPlaying.marginStart+"px";
      },500);

    }

    //stop all audio from playing
    function stopAllAudio(){
      brainObjects.map(function(brainArea){
        if(brainArea.audio != ""){
          brainArea.audio.pause();
          brainArea.audio.currentTime = 0;
        }

      })
    }

    //toggle pausing the scrolling text
    function pauseScroller() {
      isPaused = !isPaused;



    if(isPaused == true){
		clearInterval(_delay);
        _pauseInterval = setInterval(updateTimePaused,100);
        //pause the currently playing audio
        if(currentlyPlaying.audio !=""){
          currentlyPlaying.audio.pause();
        }

        //get the current margin position at the current time of the animation
        var currentTop = window.getComputedStyle(scroller_content).getPropertyValue("margin-top");

        //stop scrolling
        scroller_content.style.transition="margin 0s linear"

        //set the margin to the computed margin
        scroller_content.style.marginTop = currentTop;

        //change the pause icon to a play icon
        scroller_pause_btn.innerHTML = "&#9658;"
      }else{

        clearInterval(_pauseInterval);
        //restart the audio at its current position
        if(currentlyPlaying.audio != ""){
          currentlyPlaying.audio.play();
        }

		

        if(currentlyPlaying.audio != ""){
          currentlyPlaying.adjustedScrollTime = currentlyPlaying.scrollTime - currentlyPlaying.audio.currentTime;
        }else{
          currentlyPlaying.adjustedScrollTime-=_timePaused;
        }

        console.log('adj', currentlyPlaying.adjustedScrollTime)

        //start the text scrolling again
        scroller_content.style.transition="margin "+currentlyPlaying.adjustedScrollTime+"s linear";


        //activate the CSS transform
        scroller_content.style.marginTop = currentlyPlaying.marginEnd+"px";

        //change back to pause btn
        scroller_pause_btn.innerHTML = '&#10074;&#10074;'
      }
    }

    //highlights the brain area highlight
    function showHighlight(e){
      if(!isPlaying){
        e.target.highlight.style.opacity = 1;
	if(e.target.children[1]!=undefined){
		e.target.children[1].style.opacity = 1;
	}
        e.target.line.style.opacity = 1;
      }
    }

    //fades the brain area highlight
    function fadeHighlight(e){
      e.target.highlight.style.opacity = 0;
      if(e.target.children[1] != undefined){
      	e.target.children[1].style.opacity = 0;
      }
      e.target.line.style.opacity = 0;
    }

    function updateTimePaused(){
      _timePaused += 0.1;
    }
