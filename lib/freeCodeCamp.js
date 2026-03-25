function factorialize(num) {
  if (num == 0) {
    return 1;
  } else {
    return (num * factorialize(num - 1));
  }
}

function palindrome(str) {
  var rev = str.toLowerCase().split("").reverse().join("").replace(/[\W_]/g, "");
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

function titleCase(str) {
  var finalStr = "";
  str.split(" ").forEach(function (item) {
    finalStr += item[0].toUpperCase() + item.substr(1).toLowerCase() + " ";
  });
  return finalStr.slice(0, -1);
}

function confirmEnding(str, target) {
  if (str.endsWith(target)) {
    return true;
  } else {
    return false;
  }
}

function repeatStringNumTimes(str, num) {
  var starting = "";
  for (var i = 0; i < num; i++) {
    starting += str;
  }
  return starting;
}

function truncateString(str, num) {
  var final = "";
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
      case undefined:
        return false;
    }
    return true;
  });
  return arr;
}

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
  return arr;
}

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
  return index;
}

function rot13(str) {
  var newStr = "";
  var letterNumber = /[a-zA-Z]/;
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(letterNumber)) {
      var code = str.charCodeAt(i);
      if (code - 13 > 64) {
        newStr += String.fromCharCode(code - 13);
      } else {
        var offset = 13 - (code - 65) - 1;
        newStr += String.fromCharCode(90 - offset);
      }
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

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

function diffArray(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) < 0) {
      newArr.push(arr1[i]);
    }
  }
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) < 0 && newArr.indexOf(arr2[i] < 0)) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

module.exports = {
  factorialize,
  palindrome,
  findLongestWord,
  titleCase,
  confirmEnding,
  repeatStringNumTimes,
  truncateString,
  slasher,
  mutation,
  bouncer,
  destroyer,
  getIndexToIns,
  rot13,
  compare,
  diffArray,
};
