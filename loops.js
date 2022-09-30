let toDoList = ["Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom"
]

let roommatesToDoList = [ "Take Out Trash",
"Clean Bathroom",
"Make Bed",
"Mop Kitchen"
]

function canPlayVideoGames(arrayOfChores) {
    let numberOfChores = arrayOfChores.length;
    if (numberOfChores <3) {
        console.log ("You can go play some Video Games!");
    } else {
        console.log("No games! Do some chores")
    }
    
};

canPlayVideoGames(toDoList)