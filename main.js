function check(){
 
var fråga1 = document.quiz.fråga1.value;
var fråga2 = document.quiz.fråga2.value;
var fråga3 = document.quiz.fråga3.value;


var correct = 0;


if (fråga1 == "python") {
	correct ++;
      
}


if (fråga2 == "turtle") {
	correct ++;
	
	
}


if (fråga3 == "text") {
	correct ++;

}


 console.log(correct);
 document.getElementById("after_submit").style.visibility = "visible";
 document.getElementById("number_correct").innerHTML="Du fick" +' '+correct +"/3 av möjliga";
 


 
}
function datum(){
	alert("Datum för nästa tjejhack");
}
