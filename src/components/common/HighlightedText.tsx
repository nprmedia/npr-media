'use client';

import React from 'react';
import clsx from 'clsx';

export interface HighlightedSegment {
  text: string;
  highlight: boolean;
}

export function parseTaggedText(
  text: string,
  tag: string = 'blood',
): HighlightedSegment[] {
  const regex = new RegExp(`\\[${tag}\\](.*?)\\[\\/${tag}\\]`, 'g');
  const segments: HighlightedSegment[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(regex)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      segments.push({ text: text.slice(lastIndex, index), highlight: false });
    }
    segments.push({ text: match[1], highlight: true });
    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    segments.push({ text: text.slice(lastIndex), highlight: false });
  }

  return segments;
}

interface HighlightedTextProps {
  text: string;
  tag?: string;
  highlightClassName?: string;
  /** class applied to non-highlighted segments */
  defaultClassName?: string;
  /** wrapper element class */
  className?: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({
  text,
  tag = 'blood',
  highlightClassName = 'text-blood glow-blood',
  defaultClassName = 'text-charcoal',
  className,
}) => {
  const segments = parseTaggedText(text, tag);
  return (
    <span className={className}>
      {segments.map((seg, idx) => (
        <span
          key={idx}
          className={clsx('inline', seg.highlight ? highlightClassName : defaultClassName)}
        >
          {seg.text}
        </span>
      ))}
    </span>
  );
};

export default HighlightedText;
