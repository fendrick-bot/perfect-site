'use client'
import { Chart as chartJS, ArcElement, Tooltip,Legend, plugins} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

chartJS.register(
    ArcElement,
    Tooltip,
    Legend,

);

export default function DonutChart(){
    const data = {
        labels:['Customers', 'Restaurant', 'Delivery'],
        datasets:[{
            label: " total ",
            data:[6,4,5],
            backgroundColor:['black', 'grey','skyblue'],
            borderColor:['white','white', 'white'],
            hoverOffset: 5,
            borderRadius: 5,
            weight: 7,


        }]
    }
    const options = {
        responsive: true,
        maintainAspectRatio : true,
        plugins: {
            datalabels: {
                color: 'white',
                formatter: function (value, context) {
                    return context.chart.data.labels[
                        context.dataIndex
                    ];
                },
            },
            title: {
                display: true,
                text: "Reported Fault Allocation",
                color: "#D6001C",
                font: {
                    family: "AvenirNextLTW01-Regular",
                    size: 16,
                    style: 'normal'
                }
            },
            legend: {
                position:'right',
                font:{
                    size:20
                }

            }
        },
        elements: {
            point: {
                radius: 0
            }
        },
    }
    const textCenter = {
        id:"textCenter",
        beforeDatasetsDraw(chart, args, pluginOptions){
            const {ctx, data} = chart;
            ctx.save();
            ctx.font = 'bolder 20px sans-serif';
            ctx.fillStyle = 'gray'
            ctx.textAlign = 'center';
            ctx.textBaseLine = 'middle';
            ctx.fillText(`Total : 15`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)

        }
    }
    return(
        <div style={{maxWidth:'650px' , margin:'20px', boxSizing:"border-box" , borderRadius:'5px'}}>
            <h2>Analytics</h2>
            <Doughnut data={data} options={options} plugins={[textCenter]}
             style={{height: "400px",
                maxHeight: "400px",
                maxWidth: "100%",
                position: 'relative',
                width: "400px"}}></Doughnut>
        </div>
    )

}