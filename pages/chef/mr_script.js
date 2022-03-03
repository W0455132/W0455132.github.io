// chart scripts
var ctx = document.getElementById('mgmtChart').getContext('2d')
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['junior', 'middle', 'senior', 'none'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['rgba(244, 208, 111, 1)', 'rgba(255, 136, 17, 1)', 'rgba(57, 47, 90, 1)', 'rgba(157, 217, 210, 1)'],
            borderColor: 'rgba(255, 248, 240, 1)',
            data: [15,40,10,25]
        }]
    },

    // Configuration options go here
    options: {cutoutPercentage: 30}
});

var ctxB = document.getElementById('staffChart').getContext('2d')
var chart = new Chart(ctxB, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['retained', 'quit', 'terminated', 'terminated, literally'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['rgba(244, 208, 111, 1)', 'rgba(255, 136, 17, 1)', 'rgba(57, 47, 90, 1)', 'rgba(157, 217, 210, 1)'],
            borderColor: 'rgba(255, 248, 240, 1)',
            data: [80,15,5,5]
        }]
    },

    // Configuration options go here
    options: {cutoutPercentage: 30}
});


//
// var myDoughnutChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: data,
//     options: options
// });
//
// data = {
//     datasets: [{
//         data: [10, 20, 30]
//     }],
//
//     // These labels appear in the legend and in the tooltips when hovering different arcs
//     labels: [
//         'Red',
//         'Yellow',
//         'Blue'
//     ]
// };
//
//
// var imgBank = ["cake0.png", "cake1.png", "cake2.png"];
//
// function makeHTML() {
//   var codeStart = '<div class="col-lg-3 col-md-4 col-xs-6 thumb"><img  src="images\\'
//   // console.log(codeStart);
//   var codeEnd = '" class="zoom img-fluid"  alt=""></div>'
//   // console.log(codeEnd);
//   var codeLine = ''
//   for (var i = 0; i < imgBank.length; i++) {
//     // if( (i%3 === true)||(i == 0)) {
//     //   codeLine += '<div class="rowpics" id="rowpics">'
//     // }
//     var imgSet = codeStart + imgBank[i] + codeEnd;
//     // console.log(codeStart + imgBank[i] + codeEnd);
//     codeLine += imgSet
//   }
//   return codeLine
// };
//
// console.log(makeHTML());
//
// document.getElementById("gallery").innerHTML = makeHTML();
// //
// // document.getElementById("rowpics").innerHTML(makeHTML())
// // function writeIt() {
// //   document.getElementById
// // };
