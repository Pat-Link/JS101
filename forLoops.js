let toDoList = ["Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom",
    "Clean Kitchen"

]

const numberOfChores = toDoList.length;

for (var i=toDoList.length; i > 2; i--) {
    console.log(toDoList)
    toDoList.pop()
}

console.log(toDoList);