import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function TitleOfBlock({title}) {
    return (
        <Fragment>
            <h2>{title}</h2>
        </Fragment>
    )
}

TitleOfBlock.propTypes = {
    title: PropTypes.string.isRequired
}

export default TitleOfBlock
