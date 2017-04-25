import React, { PropTypes } from 'react'
import Header from './Header'
import Body from './Body'

const Sidebar = ({ timebar, tracks, highlightTrack, toggleTrackOpen }) =>
  <div className="sidebar">
    <Header timebar={timebar} />
    <Body
      tracks={tracks}
      highlightTrack={highlightTrack}
      toggleTrackOpen={toggleTrackOpen}
    />
  </div>

Sidebar.propTypes = {
  timebar: PropTypes.shape({}),
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  highlightTrack: PropTypes.func,
  toggleTrackOpen: PropTypes.func
}

export default Sidebar
