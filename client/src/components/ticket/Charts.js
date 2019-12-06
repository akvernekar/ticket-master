import React from 'react'
import {Chart} from 'react-google-charts'



class Pai extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    
    return (
      <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['low', this.props.tickets.filter(item=>{
      return item.priority=='low'
    }).length],

    ['medium', this.props.tickets.filter(item=>{
      return item.priority=='medium'
    }).length],
    
    ['high',this.props.tickets.filter(item=>{
      return item.priority=='high'
    }).length],
   
  ]}
  options={{
    title: 'Tickers Priority in %',
    backgroundColor:'transparent',
    pieSliceText: 'label',
    slices: {
      0: { offset: 0.1 },
      1: { offset: 0.1 },
      2: { offset: 0.1 }
      },
    
    }}
  rootProps={{ 'data-testid': '1' }}
/>
    );
  }}


export default Pai