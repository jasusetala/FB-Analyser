// Event listener
$(document).ready(function () {
    $('#submit').click(show);
});

function show() {
    event.preventDefault();
    var selection = document.selectForm.options.value;
    if (selection === 'likes') {
        $('#likes').show();
        $('#genders').hide();
        createBarChart();
    } else if (selection === 'genders') {
        $('#genders').show();
        $('#likes').hide();
        createPieChart();
    }
}

function createBarChart() {
    var ctx = document.getElementById('likeBars');
    var likeBars = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Music', 'TV', 'Movies', 'Restaurants'],
            datasets: [{
                label: '# of Likes',
                data: [likes.music, likes.tv, likes.movies, likes.restaurants],
                backgroundColor: [
                    'rgba(141, 198, 63, 0.2)',
                    'rgba(255, 242, 0, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(141, 198, 63, 1)',
                    'rgba(255, 242, 0, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1.5
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function createPieChart() {
    var ctx = document.getElementById('genderPie');
    var genderPie = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Females', 'Males', 'Unknown'],
            datasets: [{
                data: [genders.females, genders.males, genders.unknown],
                backgroundColor: [
                    'rgba(255, 242, 0, 0.2)',
                    'rgba(141, 198, 63, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 242, 0 ,1)',
                    'rgba(141, 198, 63, 1)',
                    'rgba(255, 99, 132, 1)'
                ]
            }]
        }
    });
}
