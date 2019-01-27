/**
 * Created by jacobmenke on 5/14/17.
 */

var orderCount = 0;

function takeOrder(topping, crustType) {
    orderCount++;
    console.log('Order: ' + crustType + 'pizza topped with ' + topping);
}

function getSubTotal(itemCount) {
    return itemCount * 7.5;
}

function getTax() {
    return getSubTotal(orderCount) * 0.06;
}

function getTotal() {
    return getSubTotal(orderCount) + getTax();
}

var vacationSpots = ['t', 'd', 'v']

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

for (var i = 0; i < vacationSpots.length; i++) {
    console.log(vacationSpots[i]);
}

var myPlaces = ["t", "d", "z"];

var friendPlaces = ["z", "a", "c"];

for (var i = 0; i < myPlaces.length; i++) {
    console.log(myPlaces[i]);

    for (var j = 0; j < friendPlaces.length; j++) {
        if (friendPlaces[j] === myPlaces[i]) {
            console.log(friendPlaces[j]);
        } else {

        }

    }
}

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    // Your code below this line
    result += myNoun + "-" + myAdjective + "-" + myVerb + "-" + myAdverb;

    // Your code above this line
    return result;
}

// Change the words here to test your function
console.log(wordBlanks("dog", "big", "ran", "quickly"));

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(firstName, prop) {
// Only change code below this line

    for (var i = 0; i < contacts.length; i++) {
        var object = contacts[i];

        if (object["firstName"] == firstName) {
            if (object.hasOwnProperty(prop)) {
                return object[prop];

            } else {
                return "No Such Property."
            }

        }

    }

    return "No such contact."

// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Bob", "number"));

var Bike = function () {

    var gear = 0;

    this.setGear = function (g) {
        gear = g;
    };

    this.getGear = function () {
        return gear;

    };

};

b = new Bike();

b.setGear(5);

console.log(b.getGear());
