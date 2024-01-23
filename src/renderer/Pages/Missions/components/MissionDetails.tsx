import * as d3 from 'd3';
import NavigationPlan from '../../../../API/models/NavigationPlan';

export default function MissionDetails() {

const renderChart(plan:NavigationPlan){

  // const cleanChart = () => {
  //   const chart = document.getElementById('chart-window');
  //   const svgChild = chart.querySelector('svg');
  //   if (svgChild) chart.removeChild(svgChild);
  // };

  // const drawChart = () => {
  //   cleanChart();
  //   // Declare the chart dimensions and margins.

  //   // Set up the SVG container
  //   const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  //   const width = 600 - margin.left - margin.right;
  //   const height = 400 - margin.top - margin.bottom;

  //   const svg = d3
  //     .select('#chart-window')
  //     .append('svg')
  //     .attr('width', width + margin.left + margin.right)
  //     .attr('height', height + margin.top + margin.bottom)
  //     .append('g')
  //     .attr('transform', `translate(${margin.left},${margin.top})`);

  //   // Set up scales
  //   const xScale = d3
  //     .scaleLinear()
  //     .domain([
  //       0,
  //       d3.max(sampleData, function (d) {
  //         return d.x;
  //       }),
  //     ])
  //     .range([0, width]);
  //   const yScale = d3
  //     .scaleLinear()
  //     .domain([
  //       d3.min(sampleData, function (d) {
  //         return d.y;
  //       }),
  //       0,
  //     ])
  //     .range([height, 0]);

  //   // Create the line function
  //   const line = d3
  //     .line()
  //     .x(function (d) {
  //       return xScale(d.x);
  //     })
  //     .y(function (d) {
  //       return yScale(d.y);
  //     });

  //   // Add the line to the SVG
  //   svg
  //     .append('path')
  //     .data([sampleData])
  //     .attr('class', 'line')
  //     .attr('d', line)
  //     .attr('fill', 'none') // Do not fill the area below the line
  //     .attr('stroke', 'black') // Line color
  //     .attr('stroke-width', 4); // Line width;

  //   // Add x-axis
  //   svg.append('g').call(
  //     d3.axisBottom(xScale).ticks(
  //       d3.max(sampleData, function (d) {
  //         return d.x;
  //       })
  //     )
  //   );

  //   // Add y-axis
  //   svg.append('g').call(d3.axisLeft(yScale));

  //   console.log('drawing chart');
  // };
}





  return (
    <div>
      <span>Mission Details</span>
      <div id="chart-window">

      </div>
    </div>
  );
}
