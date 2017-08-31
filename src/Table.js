import React, { Component } from 'react';
import { VirtualScroll } from 'react-virtual-scrolling';
import { times } from 'lodash';

export default class Table extends Component {

  constructor() {
    super();
    this.scrollList = this.scrollList.bind(this);
  }

  render() {
    const data = times(40);
    return (
      <div ref="list" onScroll={this.scrollList}>
        <VirtualScroll
            {...this.props}
            ref="virtualScroll"
            rows={data}
            scrollContainerHeight={100}
            totalNumberOfRows={(data.length) || 0}
            rowHeight={25}
            rowRenderer={this.contentRenderer.bind(this)}
        />
      </div>
    );
  }


  renderRows(fromRow, toRow, styles) {
    const rows = times(40);
    const generatedRows = [];
    for (let i = fromRow; i < toRow; i++) {
        if (rows[i]) {
            generatedRows.push(<tr style={styles}>
                <th scope="row">{rows[i]}</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>);
        }
    }
    console.log('generatedRows,', generatedRows);
    return generatedRows;
  }

  scrollList(e) {
    if (this.refs.virtualScroll) {
      this.refs.virtualScroll.scrollHook(e.target);
    }
  }

  contentRenderer(rowStyles, fromRow, toRow, parentStyles) {
    console.log('fromrow, torow,', fromRow, toRow);// 1000px = 45rows * 25px
    console.log('rowStyles,', rowStyles);
    return (
      <table className="table">
        <thead>
            <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            </tr>
        </thead>
        <tbody style={parentStyles}>
            {this.renderRows(fromRow, toRow, rowStyles)}
        </tbody>
      </table>
    );
  }
}

