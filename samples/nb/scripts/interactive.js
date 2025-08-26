

    //put all of our variable attributes into an object for each brain area
	//note -- these margin values were calculated using Google Chrome
    var brainData = [
      {id:"sensory_cortex", marginStart:"200", marginEnd:"-950", audio:"sensory_cortex_audio", highlight:"sensory_cortex_highlight", txt:"sensory_cortex_text", line:"sensory_cortex_line", scrollTime:125},
      {id:"frontal_lobe", marginStart:"200", marginEnd:"-1100", audio:"frontal_lobe_audio", highlight:"frontal_lobe_highlight", txt:"frontal_lobe_text", line:"frontal_lobe_line", scrollTime:150},
      {id:"brain_stem", marginStart:"200", marginEnd:"-1000", audio:"brain_stem_audio", highlight:"brain_stem_highlight", txt:"brain_stem_text", line:"brain_stem_line", scrollTime:145},
      {id:"brocas_area", marginStart:"200", marginEnd:"-1100", audio:"brocas_area_audio", highlight:"brocas_area_highlight", txt:"brocas_area_text", line:"brocas_area_line", scrollTime:145},
      {id:"cerebellum", marginStart:"200", marginEnd:"-1120", audio:"cerebellum_audio", highlight:"cerebellum_highlight", txt:"cerebellum_text", line:"cerebellum_line", scrollTime:145},
      {id:"occipital_lobe", marginStart:"200", marginEnd:"-1050", audio:"occipital_lobe_audio", highlight:"occipital_lobe_highlight", txt:"occipital_lobe_text", line:"occipital_lobe_line", scrollTime:145},
      {id:"temporal_lobe", marginStart:"200", marginEnd:"-1030", audio:"temporal_lobe_audio", highlight:"temporal_lobe_highlight", txt:"temporal_lobe_text", line:"temporal_lobe_line", scrollTime:145},
      {id:"mindmap_title", marginStart:"300", marginEnd:"-1008", audio:"", highlight:"title_highlight", txt:"artist_statement_text", line:"title_line", scrollTime:60},
    ];

    //create an array to hold the objects once they have handlers attached
    var brainObjects = [];

	//boolean values for various states
    var isPaused = false;
    var isPlaying = false;

    var currentlyPlaying = null;

	//intervals prefixed by _
    var _timer = null;
    var _timePaused = 0;
    var _pauseInterval = null;
	var _delay = null;

	//assign handlers
    var scroller_content = document.getElementById('scroller_content');
    var scroller = document.getElementById("floating_scroller");
    
	scroller.close_btn = document.getElementById("scroller_close_btn");
    scroller.pause_btn = document.getElementById("scroller_pause_btn");

    scroller.close_btn.addEventListener('click',closeScroller);
    scroller.pause_btn.addEventListener('click',pauseScroller);

    //for each area of the brain in the brain array attach a bunch of properties and handlers
    brainData.map(function(brainArea){
      var currentArea = document.getElementById(brainArea.id);
          currentArea.txt = eval(brainArea.txt);
          currentArea.audio = "";
		  //the title doesn't have audio
          if(brainArea.audio != ""){currentArea.audio = document.getElementById(brainArea.audio)};
          currentArea.highlight = document.getElementById(brainArea.highlight);
          currentArea.line = document.getElementById(brainArea.line);
          currentArea.scrollTime = (brainArea.scrollTime);
          currentArea.adjustedScrollTime = brainArea.scrollTime;
          currentArea.marginStart = brainArea.marginStart;
          currentArea.marginEnd = brainArea.marginEnd;
          currentArea.addEventListener('click', scrollText);
          currentArea.addEventListener('mouseover', showHighlight);
          currentArea.addEventListener('mouseout', fadeHighlight);
    	
		  //store the object with handlers and props in an array for access
		  brainObjects.push(currentArea);
    });

