import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function InProgress({call}) {
    return (
        <Fragment>
            <div className={call}>in progress</div>
        </Fragment>
    )
}

PropTypes.InProgress = {
    call: PropTypes.string
}
InProgress.defaultProps = {
    call: 'in-progress'
}
export default InProgress
