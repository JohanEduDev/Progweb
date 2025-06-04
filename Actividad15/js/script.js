google.charts.load('current',{'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart(){
    var data=google.visualization.arrayToDataTable([
        ['Language','Rating'],
        ['PHP', 79],
        ['JavaScript',71],
        ['Swift',68],
        ['SQL',56],
        ['Java',45],
        ['Perl',45],
        ['Ruby',35],
        ['Python',30],
        ['AngularJS',29],
        ['Node.js',28],
        ['Objetive-C',19],
        ['C#',17],
        ['C++',15],
        ['C',14]
    ]);
    var options={
        title: 'Most Popular Programing Languages',
        width: '100%',
        height: '500px'
    };
    var chart= new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data,options);
}