import React, { Component } from 'react';
import { VirtualScroll } from 'react-virtual-scrolling';
import { times, find } from 'lodash';

export default class Virtualization extends Component {

//   componentDidMount() {
//     this.refs.rightContainer.onScroll(this.updateScrollPosition);
//   }

  constructor() {
    super();
    // this.noStyles = {};
    // this.handleWheelEvent = this.handleWheelEvent.bind(this);
    this.scrollList = this.scrollList.bind(this);
    this.memoryObj = [];
    // this.contentRenderer = this.contentRenderer.bind(this);
    // this.renderListItems = this.renderListItems.bind(this);
  }

  render() {
    const data = times(40);
    return (
      <div ref="list" onScroll={this.scrollList}>
        <PerformanceScroll
            {...this.props}
            ref="performanceScroll"
            rows={data}
            scrollContainerHeight={100}
            totalNumberOfRows={(data.length) || 0}
            rowHeight={25}
            rowRenderer={this.contentRenderer.bind(this)}
        />
      </div>
    );
   // <div>
     //       <VirtualizationComponent
            // parentComponent={[<ul>ChildItems</ul>]}
            // childComponent={[<li>InsertItem</li>]}
            // rowHeight={25}
            // containerHeight={200}
            // name={['This ', <strong>IS</strong>, ' working!']}
            // data={data}/>
        // </div>
  }

  // for performance scroll
//   updateScrollPosition($rightPanelEl) {
//     window.requestAnimationFrame(() => {
//       // scroll both the grids when right panel scrolls
//       this.refs.rightGrid.getWrappedInstance().scrollGrid($rightPanelEl);
//     });
//   }

  renderRows(fromRow, toRow, styles) {
    const rows = times(40);
    const generatedRows = [];
    // const memoryObjKeys = Object.keys(this.memoryObj);
    for (let i = fromRow; i < toRow; i++) {
      const currentRow = rows[i];
      // _.find(users, { 'age': 1, 'active': true });
      // if (memoryObjKeys.indexOf(i) === -1) { // if a row is not found in memory
      if (!find(this.memoryObj, { 'index': i })) { // if a row is not found in memory
        this.memoryObj.push({
          'index': i,
          'elem': <li style={styles}>{ currentRow + 'abcd' }</li>
        });
        // this.memoryObj[Number(i)] = <li style={styles}>{ currentRow + 'abcd' }</li>;
        console.log('i not found in memory,', i);
      } else {
        console.log('i found in memory,', i);
      }
      generatedRows.push(find(this.memoryObj, { 'index': i }).elem);
    }
    console.log('this.memoryObj,', this.memoryObj);
    console.log('generatedRows,', generatedRows);
    return generatedRows;
  }

  scrollList(e) {
    if (this.refs.performanceScroll) {
      this.refs.performanceScroll.scrollHook(e.target);
    }
  }

  contentRenderer(rowStyles, fromRow, toRow, parentStyles) {
    console.log('fromrow, torow,', fromRow, toRow);// 1000px = 45rows * 25px
    console.log('rowStyles,', rowStyles);
    return (
      <ul style={parentStyles}>
        {this.renderRows(fromRow, toRow, rowStyles)}
      </ul>
    );
  }
}
