import React from 'react';
import style from './page-not-found.module.scss';

import notFound from './images/404.png';

const PageNotFound = () => {
    return (
        <div className={style.pageNotFound}>
            <img src={notFound} alt="notFound" />
            <h3 className={style.pageNotFound__title}>Запрашиваемая страница не найдена</h3>
        </div>
    );
};

export default PageNotFound;
