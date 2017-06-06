import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import Timeline from '../Timeline'
import propTypes from './propTypes'

class DefaultLayout extends Component {

  componentDidUpdate(prevProps) {
    if (prevProps.drag.x !== this.props.drag.x) {
      this.props.updateTimelineBodyScroll(this.timeline, true)
    }
  }

  render() {
    const {
      isOpen,
      tracks,
      now,
      time,
      timebar,
      toggleTrackOpen,
      clickElement,
      drag
    } = this.props
    return (
      <div className={`rt-layout ${isOpen ? 'rt-is-open' : ''}`}>
        <div className="rt-layout__side">
          <Sidebar
            timebar={timebar}
            tracks={tracks}
            toggleTrackOpen={toggleTrackOpen}
          />
        </div>
        <div className="rt-layout__main">
          <div className="rt-layout__timeline" ref={(timeline) => { this.timeline = timeline }}>
            <Timeline
              drag={drag}
              now={now}
              time={time}
              timebar={timebar}
              tracks={tracks}
              clickElement={clickElement}
            />
          </div>
        </div>
      </div>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout
