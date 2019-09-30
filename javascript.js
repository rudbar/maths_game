//if we click on the start/reset button
	//if we are playing
		//reload page
	//if we are not playing 
		//set score to 0
		//show countdown box
		//reduce time by 1sec in loops
			//timeleft?
				//yes->continue
				//no->gameover
		//change button to reset
		//generate new Q&A


//if we click on answer box
	// if we are playing
		//correct?
			//yes
				//increase score
				//show correct box for 1 sec
				//generate new Q&A
			//no 
				//show try again box for 1 sec

/*if (#startreset is clicked) {
	if (#question is filled) {
		tag the whole html and = reload it;
	}
	set #scorevalue = 0;
	set #timeremaining = visible;
	tag #timeremainingvalue - 1 * n;
		if (#timeremainingvalue > 0) {
			continue;
		}
		stop;
	tag #startreset = reset;
	make new Q&A;
}

if (#instruction is clicked) {
	if (#question is filled) {
		if(#box1 #box2 #box3 #box4 = correct_box) {
			tag #scorevalue + 1;
			show correct_box;
			make new Q&A;
		}
			tag #wrong = visible;
	}
} */

//================================================================

var playing = false;
var score;
var count = 60;
var timer;

//if we click on the start/reset button
document.getElementById("startreset").onclick = function() {
	//if we are playing
	if(playing == true){

		location.reload(); //reload page
	}else{//if we are not playing 

		//change mode to playing
		playing = true;

		//set score to 0
		score = 0;

		document.getElementById("scorevalue").innerHTML = score;

		//show countdown box

		show("timeremaining");

		//change button to reset

		document.getElementById("startreset").innerHTML = "Reset Game";

		//genereate a new Q&A

		generateQA();

		//start counter
		timer = setInterval(function() {

			document.getElementById("timeremainingvalue").innerHTML = count;
			count--;
			if(count == 0){
				clearInterval(timer);
				document.getElementById("timeremainingvalue").innerHTML = 0;
				show("gameOver");
				document.getElementById("gameOver").innerHTML = "<p>GAME OVER!</p><p>YOUR SCORE IS " + score + "</p>";
				hide("timeremaining");
				document.getElementById("startreset").innerHTML = "Start Game";
				hide("correct");
				hide("wrong");
				playing = false;
			}

		}, 1000);
		
	}

	//hide an element
	function hide(Id) {
		document.getElementById(Id).style.display = "none";
	}

	//show an element
	function show(Id) {
		document.getElementById(Id).style.display = "block";
	}

	//generate question and multiple answers (Q&A)

	function generateQA(){

	}

}

