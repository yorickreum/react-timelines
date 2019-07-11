import React from 'react'
import PropTypes from 'prop-types'
import {getDayMonth} from "../../../utils/formatDate";

const Cell = ({time, title, start, end, style, linkTarget, tooltip}) => {

    const Wrapper = ({children}) => (
        <a href={linkTarget}>
            <div>{children}</div>
        </a>
    );

    const content = <div
        className="rt-timebar__cell"
        style={{...time.toStyleLeftAndWidth(start, end), ...style}}
    >
        {title}
        {tooltip &&
        <div className="rt-timebar__cell__tooltip">
            <div dangerouslySetInnerHTML={{__html: tooltip.split('\n').join('<br>')}}/>
        </div>
        }
    </div>;

    if (linkTarget != null) {
        return <Wrapper>{content}</Wrapper>;
    } else {
        return content;
    }

};

Cell.propTypes = {
    time: PropTypes.shape({}),
    title: PropTypes.string.isRequired,
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
    linkTarget: PropTypes.string,
    tooltip: PropTypes.string,
    style: PropTypes.shape({})
}

export default Cell
