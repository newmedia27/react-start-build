import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Select } from 'antd';
import Select, { Option } from '../UI/select';

const SelectLanguage = () => {
  if (localStorage.getItem('i18nextLng') === null) {
    localStorage.setItem('i18nextLng', 'rus');
  }

  // const { Option } = Select;
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
  // <Select defaultValue="rus" onChange={changeLanguage}>
  //     <Option value="rus">Рус</Option>
  //     <Option value="ukr">Укр</Option>
  //     <Option value="eng">Eng</Option>
  // </Select>

    <Select defaultValue="Ru" changeAction={changeLanguage}>
      <Option value="ukr">Uk</Option>
      <Option value="rus">Ru</Option>
      <Option value="eng">En</Option>
    </Select>
  );
};

export default SelectLanguage;
