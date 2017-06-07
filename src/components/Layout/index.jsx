import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { addListener, removeListener } from '../../utils/events'

class LayoutContainer extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      headerMouseDown: false,
      startMouseX: 0,
      deltaX: 0,
      startScrollLeft: 0,
      scrollLeft: 0,
      timeline: {}
    }

    this.handleHeaderMouseDown = this.handleHeaderMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleHeaderMouseMove = this.handleHeaderMouseMove.bind(this)
    this.updateScrollLeft = this.updateScrollLeft.bind(this)
    this.updateTimelineBodyScroll = this.updateTimelineBodyScroll.bind(this)
  }

  componentDidMount() {
    addListener('mouseup', this.handleMouseUp)
    addListener('touchend', this.handleMouseUp)
  }

  componentWillUnmount() {
    removeListener('mouseup', this.handleMouseUp)
    removeListener('touchend', this.handleMouseUp)
  }

  handleHeaderMouseDown(e) {
    this.setState({
      headerMouseDown: true,
      startMouseX: isNaN(e.clientX) ? e.touches[0].clientX : e.clientX,
      startScrollLeft: this.state.timeline.scrollLeft || 0
    })
  }

  handleMouseUp() {
    this.setState({ headerMouseDown: false })
  }

  handleHeaderMouseMove(e) {
    if (this.state.headerMouseDown) {
      const deltaX = (isNaN(e.clientX) ? e.touches[0].clientX : e.clientX) - this.state.startMouseX
      this.setState({ deltaX })
    }
  }

  updateScrollLeft(timeline) {
    const scrollLeft = timeline.scrollLeft
    this.setState({ scrollLeft, timeline })
  }

  updateTimelineBodyScroll(timeline, dragging) {
    /* eslint-disable no-param-reassign */
    if (dragging) {
      timeline.scrollLeft = this.state.startScrollLeft - this.state.deltaX
    } else {
      timeline.scrollLeft = this.state.scrollLeft
    }
    /* eslint-enable */
  }

  render() {
    const drag = {
      onDown: this.handleHeaderMouseDown,
      onMove: this.handleHeaderMouseMove,
      x: this.state.deltaX,
      mouseDown: this.state.headerMouseDown
    }
    const { scrollLeft } = this.state
    const { updateTimelineBodyScroll } = this
    const updateScrollLeft = this.updateScrollLeft
    return (
      <div>
        {React.cloneElement(
          this.props.children,
          { drag, scrollLeft, updateTimelineBodyScroll, updateScrollLeft })}
      </div>
    )
  }
}

LayoutContainer.propTypes = {
  children: PropTypes.node
}

export default LayoutContainer
