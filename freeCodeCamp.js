/**
 * Created by jacobmenke on 5/15/17.
 */
function factorialize(num) {

    if (num == 0) {
        return 1;
    } else {
        return (num * factorialize(num - 1))
    }

}

//5*4*3*2*1

// console.log(factorialize(1));

function palindrome(str) {
    // Good luck!

    var rev = str.toLowerCase().split("").reverse().join("").replace(/[\W_]/g, "");

    console.log(rev);
    if (str.toLowerCase().replace(/[\W_]/g, "") == rev) {
        return true;
    } else {
        return false;
    }

}

function findLongestWord(str) {
    var longest = 0;

    str.split(" ").forEach(function (item) {
        if (item.length > longest) {
            longest = item.length;
        }
    });

    return longest;

}

findLongestWord("dogs are coolio");

function titleCase(str) {

    var finalStr = "";

    str.split(" ").forEach(function (item) {

        finalStr += item[0].toUpperCase() + item.substr(1).toLowerCase() + " ";

    });

    return finalStr.slice(0, -1);
}
//
// console.log(titleCase("I'm a little tea pot"));
//
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
//
// console.log(titleCase("sHoRt AnD sToUt"));

var count = 0;

function cc(card) {
    // Only change code below this line

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    if (count <= 0) {
        return count + " Hold";
    } else {
        return count + " Bet";
    }

    // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(7);
cc(8);
cc(9);// cc('K'); cc('A');

//
// function largestOfFour(arr) {
//
//     var largestArray = [];
//
//     for (var i = 0; i < arr.length; i++){
//         var largest = 0;
//         for (var j = 0; j < arr[i].length; j++){
//             if (arr[i][j]> largest){
//                 largest = arr[i][j];
//             }
//         }
//         largestArray.push(largest);
//     }
//
//     return largestArray;
//
//
// }
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
// );

function confirmEnding(str, target) {

    if (str.endsWith(target)) {
        return true;
    } else {
        return false;
    }

}

function repeatStringNumTimes(str, num) {
    starting = "";
    for (var i = 0; i < num; i++) {
        starting += str;
    }
    return starting;
}

repeatStringNumTimes("abc", 3);

function truncateString(str, num) {
    // Clear out that junk in your trunk
    final = "";
    if (num <= 3) {
        final = str.substr(0, num) + "...";

    } else {
        if (str.length > num) {
            final = str.substr(0, num - 3) + "...";
        } else {
            final = str;
        }

    }

    return final;
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

function chunkArrayInGroups(arr, size) {

    var final = [];
    var iterTimes = arr.length / size;

    for (var j = 0; j < iterTimes; j++) {
        var intermed = [];

        for (var i = 0; i < size; i++) {

            if (arr.length > 0) {
                intermed.push(arr.shift());
            }
        }

        final.push(intermed);

    }

    return final;
}

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));

function slasher(arr, howMany) {

    for (var i = 0; i < howMany; i++) {
        arr.shift();
    }

    return arr;
}

function mutation(arr) {
    var libStr = arr[1].toLowerCase();
    var checkStr = arr[0].toLowerCase();

    for (var i = 0; i < libStr.length; i++) {
        var letter = libStr[i];

        if (checkStr.indexOf(letter) < 0) {
            return false;
        }

    }

    return true;

}

// console.log(mutation(["hello", "Hello"]));

function bouncer(arr) {

    arr = arr.filter(function (p1) {
        if (isNaN(p1) && typeof p1 === 'number') {
            return false;
        }
        switch (p1) {
            case false:
            case null:
            case 0:
            case "":
            case  undefined:

                return false;
                break;
        }

        return true;

    });

    // Don't show a false ID to this bouncer.
    return arr;
}

// console.log(bouncer([7, "ate", "", false, 9]));
//
// console.log(bouncer([false, null, 0, NaN, undefined, ""]));
//
// console.log(bouncer([1, null, NaN, 2, undefined]));

function destroyer(arr) {

    var args = [].slice.call(arguments);
    args.shift();

    arr = arr.filter(function (item) {

        for (var i = 0; i < args.length; i++) {
            if (item == args[i]) {
                return false;
            }
        }
        return true;

    });
    // Remove all the values
    return arr;
}

//
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//

function getIndexToIns(arr, num) {

    arr = arr.sort(function (a, b) {
        return a - b;
    });

    var index = 0;

    for (var i = 0; i < arr.length; i++) {
        if (num > arr[i]) {
            index = i + 1;
        }
    }

    // Find my place in this sorted array.
    return index;
}

// console.log(getIndexToIns([40, 60], 50));

function rot13(str) { // LBH QVQ VG!

    var newStr = "";
    var letterNumber = /[a-zA-Z]/;

    for (var i = 0; i < str.length; i++) {
        if (str[i].match(letterNumber)) {

            var code = str.charCodeAt(i);
            if (code - 13 > 64) {

                newStr += String.fromCharCode(code - 13);

            } else {
                //wrapping around
                var offset = 13 - (code - 65) - 1; //-1 for wrapping

                newStr += String.fromCharCode(90 - offset);

            }

        } else {
            newStr += str[i];
        }

    }

    return newStr;
}

// Change the inputs below to test
// console.log(rot13("SERR PBQR PNZC"));
//
// var userChoice = prompt("Do you choose rock, paper or scissors?");
//
// var computerChoice = Math.random();
//
// if (computerChoice >= 0 && computerChoice <= 0.33) {
//     computerChoice = "rock";
// } else if (computerChoice >= .34 && computerChoice <= 0.66) {
//     computerChoice = "paper";
// } else {
//     computerChoice = "scissors";
// }

function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }
    }
}
//
// console.log(computerChoice);

// var junkData = ["Eddie Murphy", 49, "peanuts", 31];
//
// var names = ["t", "d", "d", "a", "f"];
//
// for (var i = 0; i < names.length; i++) {
//     console.log("I know someone called " + names[i]);
// }
//
// for (var i = 1; i < 21; i++) {
//     var str = "";
//     if (i % 3 == 0) {
//         str = "Fizz";
//     }
//     if (i % 5 == 0) {
//         str += "Buzz";
//     }
//
//     if (str.length > 0){
//         console.log(str);
//     } else {
//         console.log(i);
//     }
//
// }
//
//
// var getReview = function (movie) {
//     switch (movie){
//         case "Toy Story 2":
//             return "good";
//             break;
//         case "Finding Nemo":
//             return "good";
//             break;
//         case "The Lion King":
//             return "good";
//             break;
//         default:
//             return "I don't know!";
//     }
// };
//
// function multiply(x,y) {
//     return x*y;
// }
//
// while (x){
//
//     x = false;
// }
//
// for (var i = 0; i < 10; i++){
//
// }
//
// do {
//
//
// } while (false);
//
// function Person(name,age) {
//     this.name = name;
//     this.age = age;
//     this.species = "Homo Sapiens";
// }
//
// var sally = new Person("Sally Bowles",39);
// var holden = new Person("Holden Caulfield",16);
// console.log("sally's species is " + sally.age + " and she is " + );
// console.log("holden's species is " + holden.age + " and he is " + );
// console.log();
//
// var Person = function (name,age) {
//     this.name = name;
//     this.age = age;
// }

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

function printPerson(person) {
    console.log(person.firstName, person.lastName);
}

var contacts = [bob, mary];

// printPerson(contacts[0]);
// printPerson(contacts[1]);

// function list() {
//     var contactsLength = contacts.length;
//     for (var i = 0; i < contactsLength; i++) {
//         printPerson(contacts[i])
//     }
// }
//
// list();
//
// function search(lastname) {
//     var contactsLength = contacts.length;
//     for (var i = 0; i < contactsLength; i++) {
//
//         if (contacts[i].lastName == lastname) {
//             printPerson(contacts[i])
//         }
//
//     }
// }
//
// search("Jones");

function add(firstName, lastName, email, phoneNumber) {
    var person = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };

    contacts.push(person);
}

add("jacob", "menke", "ett", "35");

console.log(contacts.length);

// printPerson added here

console.log("hello");

var james = {
    job: "programmer",
    married: false,
    speak: function (parm) {
        console.log("Hello, I am feeling " + parm);
    }
};

james.speak("great");
james.speak("just okay");

var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = "job";

// print the value of the first property of "james"
// using the variable "aProperty"

console.log(james[aProperty]);

var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty("shirt")) {

    console.log(suitcase.shirt);
}

// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log(myEmperor.saying); // should print "Waddle waddle"
console.log(myEmperor.numLegs); // should print 2

this.askTeller = function () {
    return returnBalance;
}

var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for (var prop in languages) {

    if (typeof languages[prop] === "string") {
        console.log(languages[prop]);

    }

}

var prototypeType = typeof Object.prototype;
console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty('hasOwnProperty');
console.log(hasOwn);

function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function () {
        return (grade1 + grade2 + grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for (var x in myStudentReport) {
    if (typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());

var cashRegister = {
    total: 0,
//insert the add method here
    add: function (item) {
        this.total += item;

    },
    scan: function (item, quantity) {

            switch (item) {
                case "eggs":
                    this.add(0.98*quantity);
                    break;

                case "milk":
                    this.add(1.23*quantity);
                    break;
                case "magazine":
                    this.add(4.99*quantity);
                    break;
                case "chocolate":
                    this.add(0.45*quantity);
                    break;
                //Add other 2 items here

            }

        return true;
    }
};

// // scan each item 4 times
// cashRegister.scan("eggs",4);
// cashRegister.scan("magazine",4);
// cashRegister.scan("milk",4);
// cashRegister.scan("chocolate",4);
// //Show the total bill
// console.log('Your bill is '+cashRegister.total);


var cashRegister = {
    total:0,
    lastTransactionAmount:0,
    //Dont forget to add your property
    add: function(itemCost) {
        this.total +=  itemCost;
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
            case "eggs": this.add(0.98 * quantity); break;
            case "milk": this.add(1.23 * quantity); break;
            case "magazine": this.add(4.99 * quantity); break;
            case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction: function(){

        this.total -= this.lastTransactionAmount;
    },
    applyStaffDiscount: function (employee) {
        this.total *= 1-employee.discountPercent/100;
    }
    //Add the voidLastTransaction Method here


};


cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Void the last transaction and then add 3 instead

cashRegister.voidLastTransaction();
cashRegister.scan('chocolate',3);
//Show the total bill
console.log('Your bill is '+cashRegister.total);



function diffArray(arr1, arr2) {
    var newArr = [];

    for (var i = 0; i < arr1.length; i++){
        if (arr2.indexOf(arr1[i]) < 0){
            newArr.push(arr1[i])
        }
    }

    for (var i = 0; i < arr2.length; i++){
        if (arr1.indexOf(arr2[i]) < 0 && newArr.indexOf(arr2[i] < 0) ){
            newArr.push(arr2[i])
        }
    }

    // Same, same; but different.
    return newArr;
}

function convertToRoman(num) {



}


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));