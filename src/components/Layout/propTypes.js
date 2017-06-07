import PropTypes from 'prop-types'

export default {
  timebar: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  time: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  now: PropTypes.instanceOf(Date),
  isOpen: PropTypes.bool,
  toggleTrackOpen: PropTypes.func,
  drag: PropTypes.shape({}),
  scrollLeft: PropTypes.number,
  updateScrollLeft: PropTypes.func,
  handleHeaderScrollY: PropTypes.func
}
