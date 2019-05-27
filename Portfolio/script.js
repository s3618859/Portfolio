//The arm follow the mouse

var arm = document.querySelector(".container");
//I access the div with the 3 elements for the arm with the code above

arm.addEventListener ("mousemove", function(){
	
})
//What I want is to only make the div follow the mouse with the original point at the end of the arm
//I found out about the "mousemove" event and thought that it will work just by adding the event to the arm element
//I did add a translate function in the CSS file under the container class
//Though I'm not so sure if I'm placing it right
//When you put a translate function inside a div, will it select the original point (0,0) of the entire canvas or only the div?






//Moving hair
//My intention is to make the hair jiggle?, I attached a video in the email to describe the movement that I want

var hair01 = document.getElementsByClassName("Hair01")[0]; //I access the Hair01 image

//I think that it is appropriate to create a while loop, because it leads to an infinite loop
function moving(){
	var distance = 100 //Is the number automatically pixel?
	while (hair01.style.left === 400){ //The left property from the CSS file of the class .hair01 is equal to 400 pixels
		hair01.style.left + distance //The left property will move 100 pixels to the left
		//I also want to make it move back to the old place and then move 100 pixels to the right
		//And then loop it
	}
}