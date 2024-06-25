'use client';
import { useRef } from "react";
//= Modules
import { useGSAP } from "@gsap/react"
//= Components
import ThemeSwitcher from "@/components/Common/Switches/Theme-Switcher";
import LanguageSwitcher from "@/components/Common/Switches/Language-Switcher";
//= Animations
import { headingAnimation } from "./animations";
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import cls from './hello.module.scss';

type Props = {}

function Hello({ }: Props) {
  const { translations, locale } = useDictionary();
  const headingRef = useRef(null);

  useGSAP(() => {
    headingAnimation(headingRef.current)
  });

  return (
    <div className={cls.hello}>
      <h1 ref={headingRef}>{translations.welcome}</h1>
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  )
}

export default Hello