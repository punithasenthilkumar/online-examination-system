// Login Page
function startExam(){

let studentName=document.getElementById("studentName").value;
let regno=document.getElementById("regno").value;

if(studentName=="" || regno==""){

alert("Please Enter Student Name and Register Number");

return;

}

localStorage.setItem("studentName",studentName);
localStorage.setItem("regno",regno);

window.location.href="exam.html";

}

// Timer

// let minutes=10;
// let seconds=0;

// let timer=setInterval(function(){

// if(seconds==0){

// if(minutes==0){

// clearInterval(timer);

// submitExam();

// return;

// }

// minutes--;

// seconds=59;

// }

// else{

// seconds--;

// }

// document.getElementById("timer").innerHTML=
// "Time Left : "+minutes+":"+(seconds<10?"0":"")+seconds;

// },1000);
let time=120;
let timer=setInterval(function(){
    let minutes=Math.floor(time/60);
    let seconds=time%60;
    document.getElementById("timer").innerHTML=
    "Timer Left :"+minutes+":"+seconds;
    time--;
    if(time<0){
        clearInterval(timer);
        submitExam();
    }
},1000);

// Submit Exam

function submitExam(){

clearInterval(timer);

let score=0;

let q1=document.querySelector('input[name="q1"]:checked');
let q2=document.querySelector('input[name="q2"]:checked');
let q3=document.querySelector('input[name="q3"]:checked');
let q4=document.querySelector('input[name="q4"]:checked');
let q5=document.querySelector('input[name="q5"]:checked');
let q6=document.querySelector('input[name="q6"]:checked');
let q7=document.querySelector('input[name="q7"]:checked');
let q8=document.querySelector('input[name="q8"]:checked');
let q9=document.querySelector('input[name="q9"]:checked');
let q10=document.querySelector('input[name="q10"]:checked');

// Correct Answers

if(q1 && q1.value=="b") score++;
if(q2 && q2.value=="b") score++;
if(q3 && q3.value=="c") score++;
if(q4 && q4.value=="b") score++;
if(q5 && q5.value=="c") score++;
if(q6 && q6.value=="b") score++;
if(q7 && q7.value=="b") score++;
if(q8 && q8.value=="b") score++;
if(q9 && q9.value=="b") score++;
if(q10 && q10.value=="b") score++;

let percentage=(score/10)*100;

let result;

if(percentage>=50){

result="PASS";

}
else{

result="FAIL";

}

localStorage.setItem("score",score+"/10");
localStorage.setItem("percentage",percentage.toFixed(2)+"%");
localStorage.setItem("result",result);

window.location.href="result.html";

}