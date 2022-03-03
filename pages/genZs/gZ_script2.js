
var wordList = [
"lolsob",
"sneaky link",
"B.C.V.",
"steezy",
"enby",
"hits different",
"thirstposting",
"hydt",
"shineboxing",
"doffing",
"chonk",
"you so fluke",
"toady",
"woat",
"lit"
];


var wordDef = [
"acronym for Laugh Out Loud + sob -- an expression for something that makes you lol and cry at the same time",
"When you meet with someone without anyone knowing except you and the other person",
"The time between Christ’s birth and the beginning of the coronavirus",
"style with ease",
"based of the abbreviation of Non-Binary: A term used by the non-binary/genderqueer community as an alternative to girl/boy.",
"to listen or experience something that conveys a different emotion or feeling than when previously experienced. this new feeling is typically significantly worse or better after new information is discovered.",
"Posting on social media simply to get likes and reacts.",
"How You Do That",
"Attacking someone for previous shameful actions, giving the impression said acts are indelible.",
"Taking off clothes, equipment, etc.",
"that which is fat or large, in a way that is majestic",
"being whack, full of s&*t, fake",
"One who flatters in the hope of gaining favors.",
"Worst Of All Time. Opposite of Goat meaning Greatest Of All Time",
"When something is turned up or popping ..."

];

var wordSentence = [
"That fatal clown car accident made me lolsob-- clown cars are funny but my best friend was driving",
"Sneaky link with me and Mark!",
"In late 2016 AD or 3 B.C.V., Donald Trump was elected as the 45th President of the United States of America.",
"Damn that was a steezy ass kickflip son!",
"Are they a girl or a boy? Neither, they're an enby!",
"i love michael jackson, but this song hits different now that he’s dead",
"Apple's marketing is basically thirstposting",
"That cake is delicious, hytd?",
"Mike opted to avoid attending his high school reunion, knowing they'd remember his loss of bladder control in gym class and be shineboxing him all night.",
"Practice donning and doffing your equipment.",
"You have been visited by the chonk. He will bring good fortune.",
"you so fluke man",
"M often acts like a complete toady, commenting J on her taste, just because J is so rich",
"Dude, that party last night was so woat, the kegs were tapped after an hour",
"That party was lit!"


];


function getNewWord() {
  // function to get a random integer
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };

  // a random integer that is between 0 and the length of the word bank
  var x = getRndInteger(0, wordList.length-1)

  document.getElementById("word").innerHTML = wordList[x];
  document.getElementById("definition").innerHTML = wordDef[x];
  document.getElementById("sentence").innerHTML = '"' + wordSentence[x] + '"';

}

getNewWord();
