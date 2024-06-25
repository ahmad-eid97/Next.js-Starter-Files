"use client";
//= Components
import { ReactLenis } from 'lenis/react';
import { ThemeProvider } from './theme-provider';
import { StoreProvider } from '@/store/provider';
import { CursorPoint } from '@/components/UIs';

export function GlobalProviders({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      <CursorPoint />
      <StoreProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </StoreProvider>
    </ReactLenis>
  )
}