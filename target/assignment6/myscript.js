/**
 * 
 */

//function myFunction() {
//    var x, text;
//
//    // Get the value of input field with id="numb"
//
//    x = document.getElementById("numb").value;
//
//    // If x is Not a Number or less than one or greater than 10
//
//    if (isNaN(x) || x < 1 || x > 10) {
//        text = "Invalid input.";
//    } else {
//        text = "Correct input.";
//    }
//    document.getElementById("demo").innerHTML = text;
//    
//    console.log("Testing console.");
//    console.log(text);
//}

function showTable() {
	document.getElementById("myTable").style.visibility = "visible";

}

var URL = "https://assignment6-apn387.herokuapp.com/app/traffic/";

function ajax0(){
	var thisURL = URL + "colwinjury";
	var ghttp;
	ghttp = new XMLHttpRequest();
	ghttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("v0").innerHTML=ghttp.responseText;
		}
	};
	ghttp.open("GET", thisURL, true);
	ghttp.send();
}

function ajax1(){
	var thisURL = URL + "colprivprop";
	var ghttp;
	ghttp = new XMLHttpRequest();
	ghttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("v1").innerHTML=ghttp.responseText;
		}
	};
	ghttp.open("GET", thisURL, true);
	ghttp.send();
}

function ajax2(){
	var thisURL = URL + "col";
	var ghttp;
	ghttp = new XMLHttpRequest();
	ghttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("v2").innerHTML=ghttp.responseText;
		}
	};
	ghttp.open("GET", thisURL, true);
	ghttp.send();
}

function ajax3(){
	var thisURL = URL + "collvng";
	var ghttp;
	ghttp = new XMLHttpRequest();
	ghttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("v3").innerHTML=ghttp.responseText;
		}
	};
	ghttp.open("GET", thisURL, true);
	ghttp.send();
}

function ajax4(){
	var thisURL = URL + "crashService";
	var ghttp;
	ghttp = new XMLHttpRequest();
	ghttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("v4").innerHTML=ghttp.responseText;
		}
	};
	ghttp.open("GET", thisURL, true);
	ghttp.send();
}

function ajax5(){
	var thisURL = URL + "crashUrgent";
	var ghttp;
	ghttp = new XMLHttpRequest();
	ghttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("v5").innerHTML=ghttp.responseText;
		}
	};
	ghttp.open("GET", thisURL, true);
	ghttp.send();
}

function ajax6(){
	var thisURL = URL + "livestock";
	var ghttp;
	ghttp = new XMLHttpRequest();
	ghttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("v6").innerHTML=ghttp.responseText;
		}
	};
	ghttp.open("GET", thisURL, true);
	ghttp.send();
}

function ajax7(){
	var thisURL = URL + "debris";
	var ghttp;
	ghttp = new XMLHttpRequest();
	ghttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("v7").innerHTML=ghttp.responseText;
		}
	};
	ghttp.open("GET", thisURL, true);
	ghttp.send();
}

function ajax8(){
	var thisURL = URL + "haz";
	var ghttp;
	ghttp = new XMLHttpRequest();
	ghttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("v8").innerHTML=ghttp.responseText;
		}
	};
	ghttp.open("GET", thisURL, true);
	ghttp.send();
}

function ajax9(){
	var thisURL = URL + "imped";
	var ghttp;
	ghttp = new XMLHttpRequest();
	ghttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("v9").innerHTML=ghttp.responseText;
		}
	};
	ghttp.open("GET", thisURL, true);
	ghttp.send();
}

function ajax10(){
	var thisURL = URL + "fire";
	var ghttp;
	ghttp = new XMLHttpRequest();
	ghttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("v10").innerHTML=ghttp.responseText;
		}
	};
	ghttp.open("GET", thisURL, true);
	ghttp.send();
}

function ajax11(){
	var thisURL = URL + "stalled";
	var ghttp;
	ghttp = new XMLHttpRequest();
	ghttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("v11").innerHTML=ghttp.responseText;
		}
	};
	ghttp.open("GET", thisURL, true);
	ghttp.send();
}

ajax0();
ajax1();
ajax2();
ajax3();
ajax4();
ajax5();
ajax6();
ajax7();
ajax8();
ajax9();
ajax10();
ajax11();






























