//Transform a string into an array and fix it!

let favoriteQUote= "Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand.- Martin Fowler. Agile Software Design";
favoriteQUote = favoriteQUote.split(" ")

console.log(favoriteQUote);

console.log(favoriteQUote.length); //27

favoriteQUote.pop();
console.log(favoriteQUote);
console.log(favoriteQUote.length);//26

favoriteQUote.push("Development" , "ThoughtWorks " , "Inc.");
console.log(favoriteQUote);

let indexNum = favoriteQUote.indexOf("body"); //body değerinin dizideki index numarasını değiştiryor.
favoriteQUote[indexNum]="fool" ;//index numarasına yeni değer atar.
console.log(favoriteQUote);

favoriteQUote.shift(); //ilk değeri siler
favoriteQUote.unshift("Any");

console.log(favoriteQUote);

let indexNum1=favoriteQUote.indexOf("very");
favoriteQUote.splice(indexNum1,5,"computer")

console.log(favoriteQUote);

favoriteQUote.join(" ");
favoriteQUote=favoriteQUote.join("")
console.log(favoriteQUote) //array dizisini string ifadeye çevirir.