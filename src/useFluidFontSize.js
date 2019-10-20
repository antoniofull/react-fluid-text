import { useState, useRef, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

/**
 * React Hook for calculating Font Size of an element given his width
 * returns the max Font Size relative to the width
 *
 * @param {number} compressor how aggressive resize the font
 * @param {number} minFontSize Minimum Font Size to resize the element
 * @param {number} maxFontSize Maximum Font Size to resize the element
 * @returns {Array} [ReactRef, Number]
 */

export function useFluidFontSize({
  compressor = 1,
  minFontSize = 16,
  maxFontSize = 512
}) {
  const ref = useRef(null);
  const [fontSize, setFontSize] = useState(minFontSize);
  let observerStarted = true;

  useEffect(() => {
    // get the ref to our element
    const el = ref.current;

    // set initial state with the actual width
    setFontSize(
      Math.min(
        Math.max(
          el.getBoundingClientRect().width / (compressor * 10),
          minFontSize
        ),
        maxFontSize
      )
    );

    const observer = new ResizeObserver(entries => {
      if (!entries || !entries.length) {
        return;
      }

      // Avoid infinite loop
      // https://github.com/WICG/ResizeObserver/issues/38#issuecomment-532833484
      if (observerStarted) {
        observerStarted = false;
        return;
      }

      observer.disconnect();
      observerStarted = true;

      // Only the first entry is needed
      const entry = entries[0];

      // get the width
      const { width } = entry.contentRect;

      // calculate the new Font Size
      // Full credits to: https://github.com/davatron5000/FitText.js
      const newFontSize = Math.min(
        Math.max(width / (compressor * 10), minFontSize),
        maxFontSize
      );
      setFontSize(newFontSize);

      requestAnimationFrame(() => observer.observe(el));
    });

    observer.observe(el);
    // on unmount
    return () => observer.unobserve(el);
  }, [fontSize]);

  return [ref, fontSize];
}
