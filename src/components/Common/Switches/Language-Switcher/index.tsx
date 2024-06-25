"use client";
import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
//= Modules
import Cookies from "universal-cookie";
import { useGSAP } from "@gsap/react";
//= Animations
import { rightButtonAnimation, leftButtonAnimation } from "./animations";
//= Styles
import clsx from "clsx";
import cls from "./langSwitch.module.scss";

function LanguageSwitcher() {
  const pathName = usePathname();
  const router = useRouter();
  const cookies = useMemo(() => new Cookies(), []);
  const pathname = usePathname();
  const savedLang = pathname.split("/")[1];

  useGSAP(() => {
    rightButtonAnimation();
    leftButtonAnimation();
  });

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  function switchLang(lang: string) {
    cookies.set("website-locale", lang, { path: "/" });
    router.push(redirectedPathName(lang));
  }

  return (
    <div className={clsx(cls.switcherWrapper, 'switcherWrapper')} suppressHydrationWarning>
      <div className={cls.langSwitcher}>
        <button className="englishBtn" onClick={() => switchLang("en")}>English</button>
        <button className="arabicBtn" onClick={() => switchLang("ar")}>Arabic</button>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
