//read from xml
//define variables and arrays
var xml:XMLList;
var target_xml = this.loaderInfo.parameters.targetXML;
(target_xml == null || target_xml == undefined) ? target_xml = "accordion.xml" : null;

//get the XML
var XMLURL:URLRequest = new URLRequest(target_xml)
var XMLLoader:URLLoader = new URLLoader(XMLURL)
XMLLoader.addEventListener(Event.COMPLETE,parseXML)


//handle the XML
function parseXML(e:Event){
	trace("XML loaded...")
	xml = new XMLList(e.currentTarget.data)
	
	var barCount = 0;
	
	for(var bars in xml.bar){
		barCount++;
	}
	
	for(var i=0;i<barCount;i++){
		createBar(xml.bar[i].title,xml.bar[i].content);
	}
}

//create bars
function createBar(title:String,content:String){
	
	
}


//create areas
//load content
//format content
//format bars
