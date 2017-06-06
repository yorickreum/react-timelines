import React from 'react'
import Sidebar from '../Sidebar'
import Timeline from '../Timeline'
import propTypes from './propTypes'

const DefaultLayot = ({
  isOpen,
  tracks,
  now,
  time,
  timebar,
  toggleTrackOpen,
  clickElement,
  drag
}) => (
  <div className={`rt-layout ${isOpen ? 'rt-is-open' : ''}`}>
    <div className="rt-layout__side">
      <Sidebar
        timebar={timebar}
        tracks={tracks}
        toggleTrackOpen={toggleTrackOpen}
      />
    </div>
    <div className="rt-layout__main">
      <div className="rt-layout__timeline">
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

DefaultLayot.propTypes = propTypes

export default DefaultLayot
