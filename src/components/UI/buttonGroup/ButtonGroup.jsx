import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './button-group.module.scss';

const ButtonGroup = ({
  children, className, vertical, ...args
}) => {
  const classes = classNames(style.buttonGroup, style[className], { [style.vertical]: vertical });

  return (
    <div className={classes} {...args}>
      {children}
    </div>
  );
};
ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.bool,
};
ButtonGroup.defaultProps = {
  children: null,
  className: '',
  vertical: false,
};

export default ButtonGroup;
