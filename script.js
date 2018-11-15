//Coded by Angelica Paynter 300062844 for fade in of Features Page

//fadeInOne, fadeInTwo, and fadeInThree fade in features 1,2 and 3 respectively
//imgFadeIn is for the image across the bottom
//titleFadeIn fades in the title across the top

var i = 0;
function fadeInOne() {
    if (i < 101) {
        document.getElementById("icon1").style.opacity = i/100;
        document.getElementById("head1").style.opacity = i/100;
        document.getElementById("para1").style.opacity = i/100;
        i = i + 1;
    }
}
var j = 0;
function fadeInTwo() {
   if (j >= 20 && j < 121) {
        document.getElementById("icon2").style.opacity = (j-20)/100;
        document.getElementById("head2").style.opacity = (j-20)/100;
        document.getElementById("para2").style.opacity = (j-20)/100;
   }
   j = j + 1;
}
var k = 0;
function fadeInThree() {
   if (k >= 40 && k < 141) {
	   document.getElementById("icon3").style.opacity = (k-40)/100;
	   document.getElementById("head3").style.opacity = (k-40)/100;
	   document.getElementById("para3").style.opacity = (k-40)/100;
   }
   k = k + 1;
}
var l = 0;
function imgFadeIn() {
   if (l >= 70 && l < 171) {
	   document.getElementById("img").style.opacity = (l-70)/100;
   }
   l = l + 1;
}
var m = 0;
function titleFadeIn() {
    if (m < 101) {
        document.getElementById("Features_head").style.opacity = m/100;
        m = m + 1;
    }
}
// end of code by Angelica

// When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("myBtn").style.display = "block";
            } else {
                document.getElementById("myBtn").style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
		
//FOLLOWING CODE BY ABDUL AL-ZUBAIDI, 300066767
//USED TO MAKE THE ROTATING EYE WHICH FOLLOWS THE MOUSE ON THE MAIN PAGE, INDEX.HTML
var rotatingEye = document.getElementById("rotatingEye");
if (document.getElementById("rotatingEye") == null) {
	console.log("rtEye is null");
}
pointerBox = rotatingEye.getBoundingClientRect();
centerPoint = window.getComputedStyle(rotatingEye).transformOrigin;
centers = centerPoint.split(" ");
centerX = pointerBox.left + pointerBox.width/2 - window.pageXOffset;
centerY = pointerBox.top + pointerBox.height/2 - window.pageYOffset;
window.addEventListener("mousemove", function(e) {
	console.log("testinfunciton");
	var radians = Math.atan2(e.clientX - centerX, e.clientY - centerY);
	var radians = Math.atan2(centerX - e.clientX , centerY- e.clientY );
	var degree = (radians * (180 / Math.PI) * -1) + 180; 
	rotatingEye.style.transform = "rotate("+degree+"deg)";
})

//END CODE BY ABDUL

