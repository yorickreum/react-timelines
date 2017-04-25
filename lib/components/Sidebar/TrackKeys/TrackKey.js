'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};
var TrackKey = function TrackKey(_ref) {
  var track = _ref.track,
      _ref$highlight = _ref.highlight,
      highlight = _ref$highlight === undefined ? noop : _ref$highlight,
      _ref$toggleOpen = _ref.toggleOpen,
      toggleOpen = _ref$toggleOpen === undefined ? noop : _ref$toggleOpen;
  var title = track.title,
      tracks = track.tracks,
      isOpen = track.isOpen;

  return _react2.default.createElement(
    'div',
    { className: 'track-key' },
    _react2.default.createElement(
      'div',
      {
        className: 'track-key__entry',
        onMouseEnter: function onMouseEnter() {
          highlight(track);
        }
      },
      isOpen !== undefined && _react2.default.createElement(
        'button',
        {
          className: 'track-key__toggle ' + (isOpen ? 'track-key__toggle--close' : 'track-key__toggle--open'),
          onClick: function onClick() {
            return toggleOpen(track);
          }
        },
        isOpen ? 'Close' : 'Open'
      ),
      title
    ),
    isOpen && tracks && tracks.length > 0 && _react2.default.createElement(_2.default, { tracks: tracks, toggleOpen: toggleOpen })
  );
};

TrackKey.propTypes = {
  track: _react.PropTypes.shape({
    title: _react.PropTypes.string.isRequired,
    tracks: _react.PropTypes.arrayOf(_react.PropTypes.shape({})),
    isOpen: _react.PropTypes.bool
  }),
  highlight: _react.PropTypes.func,
  toggleOpen: _react.PropTypes.func
};

exports.default = TrackKey;
module.exports = exports['default'];