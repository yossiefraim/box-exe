var count = 7;
var i = 0;
	function loadSquares() {
 		for(i = 0;i<count;i++){
			var sect = document.createElement("SECTION");
			sect.setAttribute("id", "box"+(i+1));
			sect.setAttribute("onclick","changeBackground(this);");
			sect.style.backgroundColor = "white";
			if(i==0){
				 sect.setAttribute("onmouseover","printDate();");
				 sect.setAttribute("onmouseout","deleteDate();");
			};
			
			document.getElementById("thirdMain").appendChild(sect);
		}	
}
function changeBackground (sect) {
	if (sect.style.backgroundColor == "white" ) {
    	sect.style.backgroundColor = "#DCDCDC";
        if(sect.id=="box1"){
       		var date=document.getElementById("birthDay");
        	date.style.color="#F0FFFF";
        }
   	} else {
      	sect.style.backgroundColor = "white";
       	if(sect.id=="box1"){
        	var date=document.getElementById("birthDay");
        	date.style.color="#000000";
        }
	}		
}
function printDate () {
	var box=document.getElementById("box1");
	var date = document.createElement("H1");
	date.id="birthDay";
	if(box.style.backgroundColor=="white"){
		date.style.color="#000000";			
	}else{
		date.style.color="#F0FFFF";
	}
	var t = document.createTextNode("14.02.1990"); 
	date.appendChild(t);
	box.appendChild(date);
}
function deleteDate (){
	var box=document.getElementById("box1");
	var date = document.getElementById("birthDay");
	box.removeChild(date);
}
function add () {
	var sect = document.createElement("SECTION");
	sect.setAttribute("id", "box"+(i+1));
	sect.setAttribute("onclick","changeBackground(this);");
	document.getElementById("thirdMain").appendChild(sect);
	if(i==0){
		var date = document.createElement("H1");
		date.id="birthDay";
        date.style.color="#F0FFFF";
        sect.setAttribute("onmouseover","printDate();");
		sect.setAttribute("onmouseout","deleteDate();");
	}
	i=i+1;
}
function remove () {
	if(i==0){
		window.alert("no box to remove");
	}
	var main = document.getElementById("thirdMain");
	var sect = document.getElementById("box"+(i));
	main.removeChild(sect);
	i=i-1;
}