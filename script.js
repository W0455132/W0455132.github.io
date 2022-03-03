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
            backgroundColor: ['rgba(18, 69, 89, 1)', 'rgba(174, 195, 176, 1)', 'rgba(89, 131, 146, 1)', 'rgba(1, 22, 30, 1)'],
            borderColor: 'rgba(239, 246, 224, 1)',
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
        labels: ['front-end', 'back-end'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['rgba(89, 131, 146, 1)', 'rgba(174, 195, 176, 1)'],
            borderColor: 'rgba(239, 246, 224, 1)',
            data: [70,20]
        }]
    },

    // Configuration options go here
    options: {cutoutPercentage: 30}
});

/* colour bank
rich black = rgba(1, 22, 30, 1)
midnight eagle green = rgba(18, 69, 89, 1)
teal blue = rgba(89, 131, 146, 1)
cambridge blue = rgba(174, 195, 176, 1)
beige = rgba(239, 246, 224, 1)
*/
