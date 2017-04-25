import React, { PropTypes } from 'react'
import TrackKey from './TrackKey'

const TrackKeys = ({ tracks, highlight, toggleOpen }) =>
  <div className="track-keys">
    {
      tracks.map(track => (
        <TrackKey
          key={track.id}
          track={track}
          highlight={highlight}
          toggleOpen={toggleOpen}
        />
      ))
    }
  </div>

TrackKeys.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  highlight: PropTypes.func,
  toggleOpen: PropTypes.func
}

export default TrackKeys
