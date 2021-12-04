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


const myArray = [];
let i=5;
while(i>=0){
  myArray.push(i);
i--;
}


const myArray = [];
// Only change code below this line
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}

const myArray = [];

// Only change code below this line
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}