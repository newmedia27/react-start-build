import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './svg-icon.module.scss';

const SvgIcon = ({
    children, className, height, width, onClick,
}) => {
    const classes = classNames(style.svgIcon, className);
    return (
        <div className={classes} height={height} width={width} onClick={onClick}>
            {children}
        </div>
    );
};

SvgIcon.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    onClick: PropTypes.func,
};
SvgIcon.defaultProps = {
    children: 'Must be svg',
    className: '',
    width: 10,
    height: 10,
    onClick: () => {},
};

export default SvgIcon;
