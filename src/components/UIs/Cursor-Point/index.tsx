'use client';
import { useEffect } from 'react';
//= Utils
import { turnCursorAnimation } from '@/utils/cursorPointer';
//= Styles
import cls from './styles.module.scss';

function CursorPoint() {
  useEffect(() => {
    turnCursorAnimation();
  }, [])

  return (
    <div className={cls.cursor_pointer} id="cursor_pointer">
      <div className={`${cls.circle} cursorCircle`}></div>
      <div className={`${cls.circle} cursorCircle`}></div>
      <div className={`${cls.circle} cursorCircle`}></div>
      <div className={`${cls.circle} cursorCircle`}></div>
      <div className={`${cls.circle} cursorCircle`}></div>
      <div className={`${cls.circle} cursorCircle`}></div>
      <div className={`${cls.circle} cursorCircle`}></div>
      <div className={`${cls.circle} cursorCircle`}></div>
      <div className={`${cls.circle} cursorCircle`}></div>
      <div className={`${cls.circle} cursorCircle`}></div>
      <div className={`${cls.circle} cursorCircle`}></div>
    </div>
  )
}

export default CursorPoint;