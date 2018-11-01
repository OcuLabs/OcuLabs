//SCRIPT BY ABDUL AL-ZUBAIDI, 300066767
//USED TO MAKE THE ROTATING EYE WHICH FOLLOWS THE MOUSE ON THE MAIN PAGE, INDEX.HTML

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
});

