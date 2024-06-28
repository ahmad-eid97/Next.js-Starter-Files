'use client';
import { useEffect } from 'react';
//= Utils
import { turnCursorAnimation } from '@/utils/cursorPointer';
//= Styles
import styles from './styles.module.scss';

function CursorPoint() {
  useEffect(() => {
    turnCursorAnimation();
  }, [])

  return (
    <div className={styles.cursorPointer} id="cursor_pointer">
      <div className={`${styles.circle} cursorCircle`}></div>
      <div className={`${styles.circle} cursorCircle`}></div>
      <div className={`${styles.circle} cursorCircle`}></div>
      <div className={`${styles.circle} cursorCircle`}></div>
      <div className={`${styles.circle} cursorCircle`}></div>
      <div className={`${styles.circle} cursorCircle`}></div>
      <div className={`${styles.circle} cursorCircle`}></div>
      <div className={`${styles.circle} cursorCircle`}></div>
      <div className={`${styles.circle} cursorCircle`}></div>
      <div className={`${styles.circle} cursorCircle`}></div>
      <div className={`${styles.circle} cursorCircle`}></div>
    </div>
  )
}

export default CursorPoint;