import React from "react";
import styles from "./AdminApp.module.css"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


ChartJS.register(ArcElement, Tooltip, Legend);


// export const options = {
//     plugins: {
//         title: {
//             display: true,
//             text: 'Chart.js Bar Chart - Stacked',
//         },
//     },
//     responsive: true,
//     scales: {
//         x: {
//             stacked: true,
//         },
//         y: {
//             stacked: true,
//         },
//     },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//
// const randomNumbers = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 2000) - 1000);
//

const AdminApp = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [120, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return(
        <div>

            <Doughnut data={data} />
        </div>
    )
}

export default AdminApp;