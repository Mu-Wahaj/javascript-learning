let No= prompt("enter a number....")

if(No%5===0){
    console.log( No + " it is a multiple of 5");
}
else{
    console.log(No +  " it is not a multiple of 5");
}

// question no 2

let score=prompt("enter yor grades..");
let grade;
if(score>=80 && score <=100){
   grade= "A+";
}
else if(score>=70&& score <=79){
grade="B";
}
 else if(score>=60 &&  score <= 69){
grade="B+";
}
 else if(score>=50 && score <= 59){
grade="C";
}
 else if(score>=40 && score <= 49){
grade="c+";
}
else{
    grade="f" ;
}

console.log(" acording to our given grades you have eraned : " , grade )