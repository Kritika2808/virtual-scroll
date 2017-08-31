import React, { Component } from 'react';
import { VirtualScroll } from 'react-virtual-scrolling';
import { Link } from 'react-router';
import { times } from 'lodash';
import logo from './logo.svg';
import './App.css';


export default class List extends Component {

  constructor() {
    super();
    this.scrollList = this.scrollList.bind(this);
    this.data = times(50000);
  }

  render() {
    return (
    <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
        <h3><center>List Virtual scroll of 50000 rows</center></h3>
        <div className="list" ref="list" onScroll={this.scrollList}>
            <VirtualScroll
                {...this.props}
                ref="virtualScroll"
                rows={this.data}
                scrollContainerHeight={400}
                totalNumberOfRows={(this.data.length) || 0}
                rowHeight={25}
                rowRenderer={this.contentRenderer.bind(this)}
            />
        </div>
        <p>
            <center><Link to="/">Go back to app</Link></center>
        </p>
      </div>
    );
  }


  renderRows(fromRow, toRow, styles) {
    const generatedRows = [];
    for (let i = fromRow; i < toRow; i++) {
      generatedRows.push(<li className='listRow' style={styles}>{ 'List item' + (i+1) }</li>);
    }
    return generatedRows;
  }

  scrollList(e) {
    if (this.refs.virtualScroll) {
      this.refs.virtualScroll.scrollHook(e.target);
    }
  }

  contentRenderer(rowStyles, fromRow, toRow, parentStyles) {
    console.log('fromrow, torow,', fromRow, toRow);
    return (
      <ul className='listContainer' style={parentStyles}>
        {this.renderRows(fromRow, toRow, rowStyles)}
      </ul>
    );
  }
}

