function myfunc(fahrenheit){
    return (5/9) * (fahrenheit-32);
}
let fur1 = document.getElementById("far");
fur1.innerHTML = myfunc(25);

//exercise n3
let myglobal = "first meaning";

function change(){
    myglobal = "new meaning";
}
change();
console.log(myglobal);

//exercise n4
function filter(str){
    return str.replaceAll("html"," ");
}
let filtered = filter("html is markup language");

console.log(filtered);

//exercise n5
function apphtml(){
    let card11 = `
    <div class="card" style="width: 18rem;">
    <img src="img-work.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>

    `
    card12.innerHTML = card11;
}
apphtml();

//exercise n6
let x = 12.44;
let y = 23.12;
let sum = x * y;
console.log(sum.toFixed(1));
console.log(sum.toFixed(2));
console.log(sum.toFixed(3));

//obj excercise n1

let fruit = {
    
    დასახელება:"ვაშლი",
    ფოტო: 'img-work.jpg',
    წონა: 0.3,
    ფასი: 4.6,
    რაოდენობა: 100,
   bay:function(count){
       return this.ფასი * count;
   }

}
console.log(fruit);
console.log(fruit.bay(3).toFixed(1));

let pictures = "apple.jpg"
let title1 = "ვაშლი"
let title2 = "წონა"
let title3 = "ფასი"
let title4 = "რაოდენობა"
function apphtml2(){
    let card4 = `
    <div class="card" style="width: 18rem;">
    <img src="${pictures}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title1}</h5>
      <h5 class="card-text">${title2}</h5>
      <h5 class="card-text">${title3}</h5>
      <h5 class="card-text">${title4}</h5>
      
    </div>
  </div>

    `
    card3.innerHTML = card4;
}
apphtml2();

//obj exersize 3

let greeting;
const raodenoba = 50;
if (raodenoba == 0){
    greeting = ("არ არის მარაგში");
    console.log("არ არის მარაგში");
 
}else if(raodenoba > 0){
    greeting = ("მარაგშია:" + "რაოდენობა" + 50);
    console.log("მარაგშია:" + "რაოდენობა" + 50)
}



document.getElementById("demo").innerHTML = greeting;


