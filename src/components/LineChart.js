import React from 'react'
import { Line } from 'react-chartjs-2'



function LineChart() {
    const data = {
        labels: ['jan','feb','mar','Apr','May'],
        datasets:[
            {
                label:'sales for 2020',
                data:[3,2,5,4,7],
                borderColor:['rgba(255,206,86,0.2)'],
                backgroundColor:['rgba(255,206,86,0.2)'],
                pointBackgroundColor:'rgba(255,206,86,0.2)',
                pointBorderColor:'rgba(255,206,86,0.2)',
            },
            {
                label:'sales from 2019',
                data:[1,5,3,1,5],
                borderColor:['rgba(66,206,86,0.2)'],
                backgroundColor:['rgba(66,206,86,0.2)'],
                pointBackgroundColor:'rgba(66,206,86,0.2)',
                pointBorderColor:'rgba(66,206,86,0.2)',
            }
        ],
    }

    const options = {
        title:{
            display:true,
            text:'Line chart'
        },
        scales:{
            yAxes:[{
                ticks:{
                    min:0,
                    max:8,
                }
            }]
        }
    }
    return (
        <Line data={data} options={options}/>
    )
}


export default LineChart
