
//折形图

var ctx1=$('#myChart1').get(0).getContext("2d");
var config={
	type:'line',
	data:{
		labels:["January", "February", "March", "April", "May", "June", "July"],
		datasets:[{
			label:'My First dataset',
			data: [0, 10, 5, 2, 20, 30, 45],
			backgroundColor: 'rgba(0, 0, 0,0.8)',  //上面标签颜色与背景颜色一致
            borderColor: 'rgb(255, 99, 132)',
            steppedLine: true,  //阶梯型
            borderWidth:1,
            yAxisID: "y-axis-1",
            showLine: true,  //显示线条
		},
		{
			label:'My Second dataset',
			data: [5, 100, 1, 50, 10, 20, 90],
			//backgroundColor: 'rgb(255, 1, 32)',
            borderColor: 'rgb(250, 9, 40)',
            borderWidth:1,
            borderDash: [5, 5],  //线条样式  虚线
            pointRadius: 15,  //点的大小
            pointHoverRadius: 10,
            yAxisID: "y-axis-2",
            showLine: true,  //显示线条
		}],
	},
	options:{
        showLines: false,  //是否显示线
        elements: {   //折线条，禁用贝塞尔曲线,默认是曲线
            line: {
                tension: 0, // disables bezier curves
            }
        },
        scales: {
            yAxes: [{
                type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: "left",
                id: "y-axis-1",
            }, {
                type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: "right",
                id: "y-axis-2",

                // grid line settings
                gridLines: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
            }],
        }

    }
}
var myChart1= new Chart(ctx1,config);
//点击改变
$('#change1').click(function(){
	config.data.datasets[0].data=[30,13,25,2,7,25,11];
	myChart1.update();
});


//柱形图
var ctx2=$('#myChart2').get(0).getContext("2d");
var myChart2 = new Chart(ctx2, {
    //type: 'horizontalBar',  //水平（横向）条形图
    type: 'bar',          //竖直条形图
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '# of People',
            data: [-1, -3, -13, -15, -5, 9],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

//雷达图
var ctx3=$('#myChart3').get(0).getContext('2d');
var myChart3 =new Chart(ctx3,{
    type:'radar',
    data:{
        labels : ["Eating","Drinking","Sleeping","Designing","Coding","Partying","Running"],
        datasets:[{
            label:'My First dataset',
            data: [70, 20, 50, 92, 20, 70, 45],
            backgroundColor: 'rgba(0, 0, 0,0.8)',  //上面标签颜色与背景颜色一致
            borderColor: 'rgb(255, 99, 132)',
            borderWidth:1,
            showLine: true,  //显示线条
            pointStyle:'star'  //点的风格
        },
        {
            label:'My Second dataset',
            data: [5, 100, 1, 50, 10, 20, 90],
            backgroundColor: 'rgb(255, 1, 32)',
            borderColor: 'rgb(250, 9, 40)',
            borderWidth:1,
            showLine: true,  //显示线条
        }],

    },
    options:{
        elements: {   //折线条，禁用贝塞尔曲线,默认是曲线
            line: {
                tension: 0, // disables bezier curves
            }
        },
    }
});

//饼图或者环形图
var ctx4=$('#myChart4').get(0).getContext('2d');
var myChart4= new Chart(ctx4,{
    //type:'pie', // 饼图
    type:'doughnut', //环形图
    data:{
        labels:["Red","Green","Yellow"],
        datasets:[{
            data: [10, 20, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options:{}
});

//极地区域图
var ctx5=$('#myChart5').get(0).getContext('2d');
var myChart5= new Chart(ctx5,{
    type:'polarArea',
    data:{
        labels:['Red','Green','Yellow','Gray','Blue'],
        datasets:[{
            data:[20,5,12,3,9],
            backgroundColor:[
                'red','green','yellow','gray','blue'
            ],
            borderColor:[
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(210,11,200,1)',
                'rgba(100, 200, 250, 1)'
            ],
            borderWidth:1
        }]
    },
    options:{

    }
});