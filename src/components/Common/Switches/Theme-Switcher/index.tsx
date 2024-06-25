"use client"
import { useRef } from "react"
import { useTheme } from "next-themes";
//= Modules
import { useGSAP } from "@gsap/react";
//= Components
import { Icon } from "@iconify/react";
//= Animations
import { buttonAnimation } from "./animations";
//= Styles
import cls from './themeSwitcher.module.scss';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef(null)

  useGSAP(() => {
    buttonAnimation(buttonRef.current)
  })

  return (
    <div className={cls.themeSwitcher}>
      <button ref={buttonRef} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === 'light' ?
          <Icon icon="radix-icons:moon" />
          :
          <Icon icon="grommet-icons:sun" />
        }
        <span>Toggle theme</span>
      </button>
    </div>
  )
}
