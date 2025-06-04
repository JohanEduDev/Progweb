var ctx=document.getElementById("myChart").getContext("2d");
var myChart=new Chart(ctx,{
    type:"bar",
    data:{
        labels:['coll', 'col2', 'col3', 'col4'],
        datasets:[{
            label:'Num datos',
            data:[10,9,15, 30],
            backgroundColor:[
                'rgb(66, 134,244)',
                'rgb(74, 135,72)',
                'rgb(229, 89,50)',
                'rgb(200, 80,90)',
            ]
        }]
    },
    options:{
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
});