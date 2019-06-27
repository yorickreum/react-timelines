import React from 'react'
import PropTypes from 'prop-types'
import { getDayMonth } from '../../utils/formatDate'
import createClasses from '../../utils/classes'
import FancyNumber from "./FancyNumber";

const buildDataAttributes = (attributes = {}) => {
  const value = {}
  Object.keys(attributes).forEach((name) => {
    value[`data-${name}`] = attributes[name]
  })
  return value
}

const data = [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ];

const axes = [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ];


const Number = ({
  title, start, end, style, classes, dataSet, tooltip, numericValue, maxValue, lowValue
}) => {
    console.log("dataset");
    console.log(dataSet);
    return (
        <div
            className={createClasses('rt-element', classes)}
            style={{
                ...style,
                ...end ? {borderLeft: '3px solid red'} : {}
            }}
            {...buildDataAttributes(dataSet)}
        >
            <div className="rt-element__content" aria-hidden="true">
                {/*<span className="rt-element__title">{title}</span>*/}
                <FancyNumber value={numericValue} min={lowValue} max={maxValue} />
            </div>
            <div className="rt-element__tooltip">
                {
                    tooltip
                        // eslint-disable-next-line react/no-danger
                        ? <div dangerouslySetInnerHTML={{__html: tooltip.split('\n').join('<br>')}}/>
                        : (
                            <div>
                                <div>{title}</div>
                                <div><strong>Start</strong> {getDayMonth(start)}</div>
                                {end && (<div><strong>End</strong> {getDayMonth(end)}</div>)}
                                <div><strong>Value</strong> {numericValue}</div>
                                <div><strong>min</strong> {lowValue}</div>
                                <div><strong>max</strong> {maxValue}</div>
                            </div>
                        )
                }
            </div>
        </div>
    );
}

Number.propTypes = {
  title: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date),
  style: PropTypes.shape({}),
  classes: PropTypes.arrayOf(PropTypes.string.isRequired),
  dataSet: PropTypes.shape({}),
  tooltip: PropTypes.string,
  numericValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  lowValue: PropTypes.number.isRequired
}

export default Number
