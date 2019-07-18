import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import SelectLanguage from './language';

const propTypes = {};

function Test(props) {
  const { t } = useTranslation();
  return (
    <>
      <div>{t('test')}</div>
      <SelectLanguage />
    </>
  );
}

Test.propTypes = propTypes;

export default Test;
