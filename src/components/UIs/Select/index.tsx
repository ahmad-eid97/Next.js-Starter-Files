'use client';
import React, { useState, useEffect } from 'react';
//= Components
import { Icon } from '@iconify/react';
//= I18n
import useDictionary from "@/dictionaries/clientDictionary";
//= Styles
import cls from './styles.module.scss';

type Props = {
  icon?: string;
  options: Option[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  disabled?: boolean;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  noFocus?: boolean,
  small?: boolean
}

type Option = {
  value: string;
  label: string;
  hidden?: boolean;
  isHeader?: boolean;
}

function SelectBox({ label, icon, options, disabled, placeholder, defaultValue, onChange, name, noFocus, small }: Props) {
  const [DefaultValue, setDefaultValue] = useState(defaultValue)
  const { locale } = useDictionary();

  useEffect(() => {
    if (defaultValue && options.length) {
      setDefaultValue(defaultValue);
    }
  }, [options, defaultValue]);


  return (
    <div className={`${cls.box} ${locale === 'ar' ? cls.ar : ''} ${noFocus ? cls.noFocus : ''}`} data-label={label ? label : ''}>
      {icon && <Icon icon={icon} />}
      <select className={`${cls.select_box} ${small ? cls.small : ''}`} name={name} onChange={onChange} disabled={disabled} value={DefaultValue}>
        {
          placeholder &&
          <option value="" disabled>{placeholder}</option>
        }
        {
          options.map((option) => (
            option.isHeader ?
              <optgroup key={option.value} label={option.label}></optgroup>
              :
              <option value={option.value} key={option.value} hidden={option.hidden}>
                {option.label}
              </option>
          ))
        }
      </select>
    </div>
  )
}

export default SelectBox