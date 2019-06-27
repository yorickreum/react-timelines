/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'

import BasicElement from '../../Elements/Basic'
import NumberElement from '../../Elements/Number'

const Element = (props) => {
  const { time, style, title, start, end, classes, dataSet, tooltip, clickElement, numericValue, maxValue, lowValue } = props

  const handleClick = () => { clickElement(props) }

  const positionStyle = (end == null) ? time.toStyleLeft(start) : time.toStyleLeftAndWidth(start, end);
  const elementStyle = {
    ...positionStyle,
    ...clickElement ? { cursor: 'pointer' } : {}
  };

  return (
    <div
      className="rt-track__element"
      style={elementStyle}
      onClick={(clickElement && handleClick) && handleClick}
    >
      {(numericValue == null) ? (<BasicElement
        title={title}
        start={start}
        end={end}
        style={style}
        classes={classes}
        dataSet={dataSet}
        tooltip={tooltip}
      />) : (<NumberElement
        title={title}
        start={start}
        end={end}
        style={style}
        classes={classes}
        dataSet={dataSet}
        tooltip={tooltip}
        numericValue={numericValue}
        maxValue={maxValue}
        lowValue={lowValue}
    />)}
    </div>
  )
}

Element.propTypes = {
  time: PropTypes.shape({}).isRequired,
  style: PropTypes.shape({}),
  classes: PropTypes.arrayOf(PropTypes.string.isRequired),
  dataSet: PropTypes.shape({}),
  title: PropTypes.string,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date),
  tooltip: PropTypes.string,
  clickElement: PropTypes.func,
  numericValue: PropTypes.number,
  maxValue: PropTypes.number,
  lowValue: PropTypes.number
}

Element.defaultTypes = {
  clickElement: undefined
}

export default Element
