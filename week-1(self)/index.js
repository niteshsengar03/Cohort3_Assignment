// 1 Variable
function Variable(){
let color = "red";
const height = 175;
let likePizza = true;
console.log(color);
console.log(height);
console.log(likePizza);
}
// Variable();


//Function 1
function sum(a,b){
    return a+b;
}
// console.log(sum(3,4));
// console.log(sum("Nitesh"," Singh"));

//Function 2
function canVote(age){
    if(age>=18)
        return true;
    return false;
}
// console.log(canVote(17)); // false
// console.log(canVote(18)); // true
// console.log(canVote(19)); // true


// if/Else
function evenodd(num){
    if(num%2==0)
        console.log("The num is even");
    else 
        console.log("The num is odd");
}
// evenodd(2);
// evenodd(5);
// evenodd(6);

function sum_Of_n_Number(num){
    let sum =0;
    let temp = num;
    while(num>0){
        sum = sum + num;
        num--;
    }
    console.log(`sum of ${temp} is ${sum}`);
}
// sum_Of_n_Number(10);



//Objects
let user = {
    name: "Nitesh",
    age: 20,
    gender: "male"
}
//Access
console.log(user.name);
console.log(user["name"]);
//Assignment #1 
function Greet(user){
    let mr = user.gender === "male" ? "Mr." : "Mrs.";
    console.log(`hello ${mr} ${user.name} age ${user.age}`);
    if(user.age>=18)
        console.log(`${mr} ${user.name} is leagal to vote`);
    else
        console.log(`${mr} ${user.name} is not leagal to vote`);
}
// Greet(user);


//Arrays and Object
let user1 = [{
    name:"nitesh",
    age:21,
    gender:"male"
},{
    name:"neharika",
    age:19,
    gender:"female"
},{
    name:"raman",
    age:11,
    gender:"male"
}]
function arr(user){
    const newarr = [];
    const result = user.filter(function(user){
        return user.age>=18;
    })
    for(let i =0;i<result.length;i++)
        newarr.push(result[i].age);

    console.log(result);
    console.log(newarr);
    // newarr.push("hello world");


}
arr(user1);






