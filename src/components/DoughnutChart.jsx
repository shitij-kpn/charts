import React from 'react'
import { Doughnut } from 'react-chartjs-2'



function DoughnutChart() {
    const data = {
        labels: ['jan','feb','mar','Apr','May'],
        datasets:[
            {
                label:'sales for 2020',
                data:[3,2,5,4,7],
                backgroundColor:['rgba(255,99,86,1)','rgba(66,206,86,1)','rgba(21,106,86,1)','rgba(255,162,86,1)','rgba(155,156,86,1)',],
            },
        ],
    }

    const options = {
        title:{
            display:true,
            text:'Doughnut chart'
        },
    }
    return (
        <Doughnut data={data} options={options}/>
    )
}


export default DoughnutChart
