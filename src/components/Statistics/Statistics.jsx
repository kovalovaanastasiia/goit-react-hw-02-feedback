import React, { Component } from "react";
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    return (
      <>
        <h2 className="title">Statistics</h2>
        {this.props.total === 0 ? (<>{this.props.children}</>) : (
              <ul className="statistics-list">
                <li className="statistics-item">Good: {this.props.good}</li>
                <li className="statistics-item">Neutral: {this.props.neutral}</li>
                <li className="statistics-item">Bad: {this.props.bad}</li>
                <li className="statistics-item">Total: {this.props.total}</li>
                <li className="statistics-item">Positive feedback: {Math.round(this.props.positivePercentage)}%</li>
              </ul>
        )}
      </>
    )
  }
}

Statistics.propTypes = {
  children: PropTypes.object,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
}
