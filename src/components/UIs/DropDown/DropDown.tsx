'use client';
import React, { useState } from "react";
//= I18n
import useDictionary from "@/dictionaries/clientDictionary";
//= Components
//= Styles
import cls from "./styles.module.scss";

type Props = {
  menu: any[];
}

const DropDown = ({ menu }: Props) => {
  const { locale } = useDictionary();
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <div className={cls.dropdown}>
      {openMenu && <div className={cls.overlay} onClick={handleClose}></div>}
      <img
        src={menu.find((item) => item.locale === locale)?.img || ''}
        alt="flag"
        onClick={handleClick}
        loading="lazy"
      />
      <div className={`${cls.dropdown_menu} ${openMenu ? cls.show : ""} ${locale === 'ar' ? cls.ar : ''}`}>
        <ul>
          {menu.map((item) => (
            <li key={item.title} onClick={handleClose}>
              <div onClick={item.method}>
                {item.img && (
                  <img loading='lazy' src={item.img} alt="flag" />
                )}
                <p>{item.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
