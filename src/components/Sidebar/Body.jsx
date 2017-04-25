import React, { PropTypes } from 'react'
import TrackKeys from './TrackKeys'

const Body = ({ tracks, highlightTrack, toggleTrackOpen }) =>
  <div className="sidebar__body">
    <TrackKeys
      tracks={tracks}
      highlight={highlightTrack}
      toggleOpen={toggleTrackOpen}
    />
  </div>

Body.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  highlightTrack: PropTypes.func,
  toggleTrackOpen: PropTypes.func
}

export default Body
