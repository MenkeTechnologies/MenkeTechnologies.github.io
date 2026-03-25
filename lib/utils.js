function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result += myNoun + "-" + myAdjective + "-" + myVerb + "-" + myAdverb;
  return result;
}

function lookUpProfile(contacts, firstName, prop) {
  for (var i = 0; i < contacts.length; i++) {
    var object = contacts[i];
    if (object["firstName"] == firstName) {
      if (object.hasOwnProperty(prop)) {
        return object[prop];
      } else {
        return "No Such Property.";
      }
    }
  }
  return "No such contact.";
}

module.exports = {
  getSubTotal,
  wordBlanks,
  lookUpProfile,
};
