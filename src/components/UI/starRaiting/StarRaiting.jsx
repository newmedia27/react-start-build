import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './starRaiting.module.scss';

function StarRaiting({ raiting, raitingCount }) {
    const classes = classNames(style.starRaiting);
    const showRaiting = (itteration = 0) => {
        const arr = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= itteration) {
                arr.push(
                    <svg
                        key={i}
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.736 15.7656L4.60111 17.5915L4.75094 12.1437L1.42757 7.82439L6.65507 6.28342L9.736 1.78796L12.8169 6.28342L18.0444 7.82439L14.7211 12.1437L14.8709 17.5915L9.736 15.7656Z"
                            fill="#FFBB05"
                            stroke="#FFBB05"
                            strokeWidth="1.248"
                        />
                    </svg>,
                );
            } else {
                arr.push(
                    <svg
                        key={i}
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.54517 14.1776L8.3361 14.1033L8.12703 14.1776L3.85 15.6985L3.9748 11.1609L3.9809 10.9391L3.84559 10.7632L1.07744 7.16548L5.4316 5.88196L5.64444 5.81922L5.76988 5.63618L8.3361 1.89176L10.9023 5.63618L11.0278 5.81922L11.2406 5.88196L15.5948 7.16548L12.8266 10.7632L12.6913 10.9391L12.6974 11.1609L12.8222 15.6985L8.54517 14.1776Z"
                            fill="white"
                            stroke="#FFBB05"
                            strokeWidth="1.248"
                        />
                    </svg>,
                );
            }
        }
        return arr;
    };
    return (
        <div className={classes}>
            {showRaiting(raiting)}

            {raitingCount && <span className={style.starRaiting__count}>{` (${raitingCount})`}</span>}
        </div>
    );
}

StarRaiting.propTypes = {
    raiting: PropTypes.number,
    raitingCount: PropTypes.node,
};
StarRaiting.defaultProps = {
    raiting: 0,
    raitingCount: 32,
};

export default StarRaiting;
