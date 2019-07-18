import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './select.module.scss';

const { Provider: SelectProvider, Consumer: SelectConsumer } = React.createContext();

class Select extends Component {
    state = {
        value: '',
        open: false,
    };

    Ref = React.createRef();

    onBlurhnadler = () => {
        const { open } = this.state;
        if (open) {
            this.setState({ open: false });
        }
    };

    onFocusHandler = () => {
        const { open } = this.state;
        if (!open) {
            this.setState({ open: true });
        }
    };

    onSelectedAction = ({ target }) => {
        const data = target.getAttribute('data-value');
        const value = target.textContent;

        this.Ref.current.blur();
        this.setState({ value }, () => this.changePropsAction(data));
    };

    changePropsAction = value => {
        const { changeAction } = this.props;
        this.onBlurhnadler();
        changeAction(value);
    };

    onClickHandler = () => {
        const { open } = this.state;
        if (open) {
            this.onBlurhnadler();
        } else {
            this.onFocusHandler();
        }
    };

    render() {
        const { open, value } = this.state;
        console.log(open, 'OPEN');
        const {
            defaultValue, children, dropDownClassName, className,
        } = this.props;

        const classes = classNames(style.select, className, style[className]);
        return (
            <div
                ref={this.Ref}
                className={classes}
                tabIndex="-1"
                onBlur={this.onBlurhnadler}
                onClick={this.onClickHandler}
            >
                <SelectProvider value={{ open, dropDownClassName, onClick: this.onSelectedAction }}>
                    <Select.Visual defaultValue={defaultValue} value={value} open={open} onClick={this.onClickHandler}>
                        <Select.DropDown options={children} />
                    </Select.Visual>
                </SelectProvider>
            </div>
        );
    }
}

Select.propTypes = {
    defaultValue: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    children: PropTypes.node,
    dropDownClassName: PropTypes.string,
    className: PropTypes.string,
    changeAction: PropTypes.func,
};
Select.defaultProps = {
    defaultValue: '',
    children: null,
    dropDownClassName: '',
    className: '',
    changeAction: () => {},
};

export default Select;

Select.Visual = ({
    defaultValue, value, children, open,
}) => {
    const classes = classNames(style.select__visual, { [style.select__open]: open });
    return (
        <>
            <div className={classes}>
                {value || defaultValue}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.83337 7.5H14.1667L10 12.5L5.83337 7.5Z"
                        fill="black"
                    />
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="7" width="10" height="6">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.83337 7.5H14.1667L10 12.5L5.83337 7.5Z"
                            fill="white"
                        />
                    </mask>
                    <g mask="url(#mask0)" />
                </svg>
            </div>
            {children}
        </>
    );
};

Select.Visual.propTypes = {
    defaultValue: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    value: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    children: PropTypes.node,
    open: PropTypes.bool,
};
Select.Visual.defaultProps = {
    defaultValue: '',
    value: '',
    children: null,
    open: false,
};

Select.DropDown = ({ options, ...rest }) => (
    <SelectConsumer>
        {({ open, dropDownClassName }) => open && (
            <div
                {...rest}
                className={classNames(style.select__dropdown, dropDownClassName, { [style.open]: open })}
            >
                {options}
            </div>
        )
        }
    </SelectConsumer>
);

Select.DropDown.propTypes = {
    options: PropTypes.node,
};
Select.DropDown.defaultProps = {
    options: null,
};

Select.Option = ({ children, value }) => (
    <SelectConsumer>
        {({ onClick }) => (
            <div className={classNames(style.select__option)} data-value={value} onClick={onClick}>
                {children}
            </div>
        )}
    </SelectConsumer>
);

Select.Option.propTypes = {
    children: PropTypes.node,
    value: PropTypes.node,
};
Select.Option.defaultProps = {
    children: null,
    value: 'rus',
};

export const { Option } = Select;
