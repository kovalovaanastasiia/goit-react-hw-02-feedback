import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    return (
      <div className='options'>
        <h2 className='title'>Please, leave feedback:</h2>
        <div className='buttons-list'>
            <button className='button good-button'
                    type='button'
                    onClick={() => this.props.onChange(this.props.options[0])}>
              Good
            </button>
            <button className='button neutral-button'
                    type='button'
                    onClick={() => this.props.onChange(this.props.options[1])}>
              Neutral
            </button>
            <button className='button bad-button'
                    type='button'
                    onClick={() => this.props.onChange(this.props.options[2])}>
              Bad
            </button>
        </div>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};
