/*let firstName = "Zamly";
console.log(firstName);
let age = 20;
console.log(age);
let accept = true;
console.log(accept)*/


/*var studentName = prompt("Please enter your name" , "");
var score = prompt ("Please Enter Your Score","")
var grade ;
var score1 = parseInt(score);
if (studentName && score1 !=null){
    if(score1>90 && score1<=100)
    {
        grade = "A"
    }
    else if (score1>85 && score1<=90){
        grade = "B"
    }
    else if (score1>70 && score1<=85){
        grade = "C"
    }
    else if (score1>=60 && score1<=70){
        grade = "D"
    }
    else{
        grade = "F"
    }

    document.getElementById('x').innerText= " Hello " + studentName + "Your Grade is " + grade ;
}*/

/*var i = 0 ;

while(i<=10)
{
    if(i%3==0)
    {
        console.log(i + ' Is Odd ')
    }
    i++;
}*/

/*function measures(uName , h , w ){
    console.log(uName);
    return h+w;
}

console.log(measures('Zamly',165,80));

let measures1 = (uName , h , w )=> {
    console.log(uName)
    return h+w
};
console.log(measures1('zamly1',5,6))*/

/*let fruits = ['Orange','Apple','Kiwi'];

for(i=0;i<fruits.length;i++){
    console.log(fruits[i])
}*/

students = [
    {
        name:'Ahmed',
        age:15,
        math: 15,
        eng:30,
        arabic:20,
        degrees:[15,30,20]
    },

    {
        name:'Omar',
        age:17,
        math: 18,
        eng:20,
        arabic:10,
        degrees:[17,18,10]
    },

    {
        name:'Zain',
        age:18,
        math: 15,
        eng:20,
        arabic:20,
        degrees:[15,20,20]
    },
]


students.forEach((students)=>{
    console.log(students.name)
    sum=0;
    students.degrees.forEach((deg) =>(sum +=deg))
        console.log(sum)
})

const stFind = students.find((s)=> s.age === 17)
console.log(stFind);

const stFilter = students.filter((s)=> s.age===17)

console.log(stFilter);