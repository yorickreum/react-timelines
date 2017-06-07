import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import Timeline from '../Timeline'
import propTypes from './propTypes'
import raf from '../../utils/raf'

class DefaultLayout extends Component {
  constructor(props) {
    super(props)

    this.handleScrollX = this.handleScrollX.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.drag.x !== this.props.drag.x) {
      this.props.updateTimelineBodyScroll(this.timeline, true)
    }
  }

  handleScrollX() {
    raf(() => {
      this.props.updateScrollLeft(this.timeline)
      this.props.updateTimelineBodyScroll(this.timeline)
    })
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
          <div className="rt-layout__timeline" ref={(timeline) => { this.timeline = timeline }} onScroll={this.handleScrollX}>
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
