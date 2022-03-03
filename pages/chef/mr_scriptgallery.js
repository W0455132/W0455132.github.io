var imgBankCake = ["cake0.jpg", "cake1.jpg", "cake2.jpg", "cake3.jpg", "cake4.jpg", "cake5.jpg", "cake6.jpg", "cake7.jpg", "cake8.jpg", "cake9.jpg", "cake10.jpg", "cake11.jpg"];
var imgBankCater = ["cater0.jpg", "cater1.jpg", "cater2.jpg", "cater3.jpg", "cater4.jpg", "cater5.jpg", "cater6.jpg", "cater7.jpg", "cater8.jpg", "cater9.jpg", "cater10.jpg", "cater11.jpg"];
var imgBankPlate = ["plate0.jpg", "plate1.jpg", "plate2.jpg", "plate3.jpg", "plate4.jpg", "plate5.jpg", "plate6.jpg", "plate7.jpg", "plate8.jpg", "plate9.jpg", "plate10.jpg", "plate11.jpg"];





// creates a div for each cake image in the cake array with appropriate classes and sets every three in its own row
function makeHTMLCake() {
  var codeStart = '<div class="col-md-4 thumb float"><img  src="images\\cake\\'
  // console.log(codeStart);
  var codeEnd = '" class="zoom img-fluid"  alt=""></div>'
  // console.log(codeEnd);
  var codeLine = ''
  for (var i = 0; i < imgBankCake.length; i++) {
    if( ((i%3==0) == true)||(i == 0)) {
      codeLine += '<div class="rowpics" id="rowpics">'
    }
    var imgSet = codeStart + imgBankCake[i] + codeEnd;
    // console.log(codeStart + imgBank[i] + codeEnd);
    codeLine += imgSet
    if ((i%3 == 2) == true) {
      codeLine += '</div>'
    }
  }
  return codeLine
};

// creates a div for each catering image in the cater array with appropriate classes and sets every three in its own row
function makeHTMLCater() {
  var codeStart = '<div class="col-md-4 thumb float"><img  src="images\\cater\\'
  // console.log(codeStart);
  var codeEnd = '" class="zoom img-fluid" salt=""></div>'
  // console.log(codeEnd);
  var codeLine = ''
  for (var i = 0; i < imgBankCater.length; i++) {
    if( ((i%3==0) == true)||(i == 0)) {
      codeLine += '<div class="rowpics" id="rowpics">'
    }
    var imgSet = codeStart + imgBankCater[i] + codeEnd;
    // console.log(codeStart + imgBank[i] + codeEnd);
    codeLine += imgSet
    if ((i%3 == 2) == true) {
      codeLine += '</div>'
    }
  }
  return codeLine
};

// creates a div for each plate image in the plates array with appropriate classes and sets every three in its own row
function makeHTMLPlate() {
  var codeStart = '<div class="col-md-4 thumb float"><img  src="images\\plate\\'
  // console.log(codeStart);
  var codeEnd = '" class="zoom img-fluid"  alt=""></div>'
  // console.log(codeEnd);
  var codeLine = ''
  for (var i = 0; i < imgBankPlate.length; i++) {
    if( ((i%3==0) == true)||(i == 0)) {
      codeLine += '<div class="rowpics" id="rowpics">'
    }
    var imgSet = codeStart + imgBankPlate[i] + codeEnd;
    // console.log(codeStart + imgBank[i] + codeEnd);
    codeLine += imgSet
    if ((i%3 == 2) == true) {
      codeLine += '</div>'
    }
  }
  return codeLine
};

function showCake() {
  document.getElementById("gallery").innerHTML = makeHTMLCake()
}

function showCater() {
  document.getElementById("gallery").innerHTML = makeHTMLCater()
}

function showPlate() {
  document.getElementById("gallery").innerHTML = makeHTMLPlate()
}

function showAll() {
  document.getElementById("gallery").innerHTML = makeHTMLPlate() + makeHTMLCater() + makeHTMLCake()
}

showAll()

// console.log(makeHTMLCater());
//
// document.getElementById("gallery").innerHTML = makeHTMLCake() + makeHTMLCater();
// document.getElementById("gallery").innerHTML = makeHTMLCater();
//
// document.getElementById("rowpics").innerHTML(makeHTML())
// function writeIt() {
//   document.getElementById
// };
