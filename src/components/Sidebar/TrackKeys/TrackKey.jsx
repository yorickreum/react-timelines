import React, { PropTypes } from 'react'
import TrackKeys from './'

const noop = () => {}
const TrackKey = ({ track, highlight = noop, toggleOpen = noop }) => {
  const { title, tracks, isOpen } = track
  return (
    <div className="track-key">
      <div
        className="track-key__entry"
        onMouseEnter={() => { highlight(track) }}
      >
        { (isOpen !== undefined) &&
          <button
            className={`track-key__toggle ${isOpen ? 'track-key__toggle--close' : 'track-key__toggle--open'}`}
            onClick={() => toggleOpen(track)}
          >
            { isOpen ? 'Close' : 'Open' }
          </button>
        }
        { title }
      </div>
      { isOpen && tracks && tracks.length > 0 &&
        <TrackKeys tracks={tracks} toggleOpen={toggleOpen} />
      }
    </div>
  )
}

TrackKey.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tracks: PropTypes.arrayOf(PropTypes.shape({})),
    isOpen: PropTypes.bool
  }),
  highlight: PropTypes.func,
  toggleOpen: PropTypes.func
}

export default TrackKey
