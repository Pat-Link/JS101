let pat = {
fullName: "Pat Link",
age: 31,
faveColor: "Blue",
likesPizza: true
}

let favoriteColor = pat.faveColor;
console.log(favoriteColor);

pat.fullName = "Link"; 
console.log(pat.fullName);

delete pat.likesPizza;
console.log(pat); 

pat.likesCake = true;
console.log(pat);