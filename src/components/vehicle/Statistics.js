// // import { Doughnut } from 'react-chartjs-2';
// // import { getExpensesPerCategory } from '../services/statistics';
// // import { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import React from 'react';

// // const Statistics = () => {
// //     const dispatch = useDispatch();
// //     const expenseAmountPerCategory = useSelector(state =>
// //         state.statisticsSlice.expenseAmountPerCategory);
// //     const [doughnut, setDoughnut] = useState({
// //         labels: [],
// //         data: [],
// //     });

// //     useEffect(() => {
// //         getExpensesPerCategory(dispatch);
// //     }, []);

// //     useEffect(() => {
// //         setDoughnut({
// //             labels: expenseAmountPerCategory.map(x => x.Key),
// //             data: expenseAmountPerCategory.map(x => x.Value),
// //         });
// //     }, [expenseAmountPerCategory]);

// //     const data = {
// //         labels: doughnut.labels,
// //         datasets: [{
// //             data: doughnut.data,
// //             backgroundColor: [
// //                 '#007bff', // blue
// //                 '#FF0000', // red
// //                 '#FFD700', // yellow
// //                 '#28a745', // green
// //                 '#FF00FF', // violet
// //                 '#ff9900', // orange
// //                 '#00FFFF', // aqua marine
// //                 '#d69ae5', // red violet
// //                 '#FF8F66', // orange red
// //                 '#00FF00', // lime
// //             ],
// //         }],
// //     };

// //     return <div hidden={!expenseAmountPerCategory || !expenseAmountPerCategory.length}
// //         style={{ maxWidth: '35rem', maxHeight: '35rem', margin: 'auto', textAlign: 'center' }}>
// //         <h4 style={{ marginTop: '10px' }}>Expenses per Category</h4>
// //         <Doughnut data={data} />
// //     </div>
// // }

// // export default Statistics

import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Chart as Chartjs} from 'chart.js/auto'
const Statistics = () => {
    const data = {
        labels: ['Shopping', 'Credit Card'],
        datasets: [{
            data: [10, 3],
            backgroundColor:[
                '#007bff',
                '#FF0000',
                '#28a745',
                '#FF00FF',
                '#ff9900',
                '#00FFFF',
                '#d69ae5',
                '#FF8F66',
                '#00FF00',
            ]
        }]
    }

  return (
    <div style={{maxWidth: '35rem', maxHeight: '35rem', margin: 'auto', textAlign: 'center'}}>Statistics
    <h4 style={{ marginTop:'10px'}}>Expenses Per Category</h4>
    <Doughnut data={data} />
    </div>
  )
};

export default Statistics;

// import React from 'react'

// export default function Statistics() {
//   return (
//     <div>Statistics</div>
//   )
// }
