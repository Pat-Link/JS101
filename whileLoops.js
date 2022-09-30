let toDoList = ["Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom"
]

let numberOfChores = toDoList.length;

while (numberOfChores > 2) {
    console.log (toDoList)
    toDoList.pop()
    numberOfChores = toDoList.length;
}
console.log(toDoList);