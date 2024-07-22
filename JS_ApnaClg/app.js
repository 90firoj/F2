// CONDITIONAL STATEMENT

// Traffic light

// let color=prompt("Enter a color: ")
// if(color.toLowerCase()=="red"){
//     console.log("STOP")
// }
// else if (color.toLowerCase()=="yellow") {
//     console.log("SLOW GO")
    
// } 
// else if(color.toLowerCase()=="green") {
//     console.log("GO")
// } else{
//     console.log("INVALID")
// }


//Popcorn Prices

// let size=prompt("Enter popcorn size:")
// if(size.toUpperCase()=="XL"){
//     console.log("price is: 250")
// }
// else if(size.toUpperCase()=="L"){
//     console.log("price is: 200")
// }
// else if(size.toUpperCase()=="M"){
//     console.log("price is: 100")
// }
// else if(size.toUpperCase()=="S"){
//     console.log("price is: 50")
// }
// else{
//     console.log("INVALID")
// }


//logical operator

// let str=prompt("Enter your string:")
// if((str[0]=="a"&&str.length>3)){
//     console.log("It is a good string")
// }else{
//     console.log("It's not a good string")
// }


//switch statement

// let color=prompt("Entre a color:")
// switch(color.toLowerCase()){
//     case "red":
//         console.log("STOP")
//         break;
//     case "yellow":
//         console.log("GO SLOW")
//         break;
//     case "green":
//         console.log("GO")
//         break;
//     default:
//         console.log("INVALID")            
// }

// let day=7
// switch(day){
//     case 1:
//         console.log("MONDAY")
//         break;
//     case 2:
//         console.log("TUESDAY")
//         break;
//     case 3:
//         console.log("WEDNESDAY")
//         break;
//     case 4:
//         console.log("THURESDAY")
//         break;
//     case 5:
//         console.log("FRIDAY")
//         break;
//     case 6:
//         console.log("SATURDAY")
//         break;
//     case 7:
//         console.log("SUNDAY")
//         break;
//     default:
//         console.log("INVALID")                            
// }


//ASSIGNMENT PART2 JS

//Q1
// let num=prompt("Enter a number:")
// if(num%10===0){
//     console.log("GOOD")
// }else{
//     console.log("BAD")
// }

//Q2
// let Name=prompt("Enter your name:");
// let age=prompt("Enter your age:");
// alert(`${Name} is ${age} years old.`);

//Q3
// let quarter=prompt("Enter Quarter:")
// switch(quarter){
//     case "1":
//         console.log("JANUARY,FEBUARY,MARCH");
//         break
//     case "2":
//         console.log("APRIL,MAY,JUN");
//         break;
//     case "3":
//         console.log("JULY,AUGUAST,SEPTEMBER");
//         break;
//     case "4":
//         console.log("OCTOBER,NOVEMBER,DECMBER");
//         break;
//     default:
//         console.log("Invalid")                
// }

//Q4
// let string=prompt("Enter a string");
// if(string[0].toUpperCase()==="A"&&string.length>5){
//     console.log("Given string is a GOLDEN string");
// }
// else{
//     console.log("Given string is not a GOLDEN string")
// }

//Q5
// let num1=prompt("Enter num1:");
// let num2=prompt("Enter num2:");
// let num3=prompt("Enter num3:");
// if((num1>num2)&&(num1>num3)){
//     console.log(`${num1} is greater than ${num2} and ${num3}`);
// }
// else if((num2>num1)&&(num2>num3)){
//     console.log(`${num2} is greater than ${num1} and ${num3}`)
// }
// else{
//     console.log(`${num3} is greater than ${num1} and ${num2}`)
// }

//Q6
// let num1=prompt("Enter num1:");
// let num2=prompt("Enter num2:");
// if(num1[num1.length-1]===num2[num2.length-1]){
//     console.log("Both number have same last digit.")
// }else{
//     console.log("Both number have not same last digit.")
// }

//Trim method
// let str=prompt("Enter your string:")
// console.log(str.trim());

//Method chaining
// let str="   firoj    "
// console.log(str.toUpperCase().trim());

// let msg="help!";
// console.log(msg.trim().toUpperCase())

// let name="Apnacollege";
// console.log(name.slice(4,name.length))
// console.log(name.slice(4,name.length).replace("l","t"))
