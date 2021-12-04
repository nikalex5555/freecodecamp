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


const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside['glove box'];


console.log(gloveBoxContents)


const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(value === ""){
    delete recordCollection[id][prop];}
  else if(prop==='tracks'){recordCollection[id][prop]=recordCollection[id][prop]||[];
    recordCollection[id][prop].push(value);
  }
  else{
    recordCollection[id][prop]=value;
  }
  return recordCollection;
}
console.log(updateRecords(recordCollection, 2548, "artist", ""));
console.log(updateRecords(recordCollection, 2548, "tracks", ""));
console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));


/* const myArray = [];
let i=5;
while(i>=0){
  myArray.push(i);
i--;
} */


// const myArray = [];
// // Only change code below this line
// for (let i = 1; i < 6; i++) {
//   myArray.push(i);
// }

// const myArray = [];

// // Only change code below this line
// for (let i = 1; i < 10; i += 2) {
//   myArray.push(i);
// }

// const myArray = [];

// // Only change code below this line
// for (let i = 9; i > 0; i -= 2) {
//   myArray.push(i);
// }
const myArr = [2, 3, 4, 5, 6];
let total=0;
for (let i = 0; i < myArr.length; i++) {
    total+=myArr[i]

// Only change code below this line
}
console.log(total)


function multiplyAll(arr) {
  let product = 1;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
     product*=arr[i][j]
  }
  }
  return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);



//Iterate with JavaScript Do...While Loops

const myArray = [];
let i = 10;
do {
myArray.push(i);
  i++;
}
// Only change code below this line
while (i < 10) ;
console.log(myArray)

function sum(arr, n) {
  // Only change code below this line
if (n == 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }
  console.log( sum([1], 0));
  console.log( sum([2, 3, 4], 1));
  console.log( sum([2, 3, 4, 5], 3));