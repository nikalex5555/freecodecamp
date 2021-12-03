function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp) == true) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  return "Change Me!";
  // Only change code above this line
}
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));


const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    ['new'],
    "gold": true
  },
  {
     "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
      ],
  }
];
myMusic['new'];