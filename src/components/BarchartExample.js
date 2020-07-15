import React, { Component } from 'react'
import { select } from 'd3-selection';
import { scaleLinear, scaleOrdinal } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import { max } from 'd3-array';

export class BarchartExample extends Component {
    constructor(props) {
        super(props);
        this.createBarChart = this.createBarChart.bind(this);
    }
    componentDidMount() {
        this.createBarChart();
    }
    createBarChart() {
        let data = this.props.data;
        const node = this.node;
        let axisMargin = 20;
        let margin = 40;
        let valueMargin = 4;
        let width = 960;
        let height = 400;
        //let barHeight = (height - axisMargin - margin * 2) * 0.4 / data.length;
        //let barPadding = (height - axisMargin - margin * 2) * 0.6 / data.length;

        let bar = 0;
        let svg = null;
        let scale = 0;
        let xAxis = 0;
        let labelWidth = 0;

       

        //let maxChart = max(data, function (d) { return d.keyValue; });
        svg = select(node)
            .append("svg")
            .attr("viewBox", "0 0 960 400")
            .attr("preserveAspectRatio", "xMidYMid meet")
            .attr("ID", "divBarID");

            scale = scaleLinear()
            .domain([0, null])
            .range([0, width - margin * 2 - labelWidth]);
    
             xAxis = axisBottom(scale)
            .tickSize(-height + 2 * margin + axisMargin);
            svg.insert("g", ":first-child")
            .attr("class", "axisHorizontal")
            .attr("transform", "translate(" + (margin + labelWidth) + "," + (height - axisMargin - margin) + ")")
            .call(xAxis);
    }
    render() {
        return (
            <div>
                <div ref={node => this.node = node} ></div>
            </div>
        )
    }
}

export default BarchartExample
