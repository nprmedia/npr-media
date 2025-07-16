'use client';

import React from 'react';
import clsx from 'clsx';

export interface HighlightedSegment {
  text: string;
  highlight: boolean;
}

export function parseTaggedText(text: string, tag: string = 'blood'): HighlightedSegment[] {
  const regex = new RegExp(`\\[${tag}\\](.*?)\\[\\/${tag}\\]`, 'g');
  const segments: HighlightedSegment[] = [];
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ text: text.slice(lastIndex, match.index), highlight: false });
    }
    segments.push({ text: match[1], highlight: true });
    lastIndex = regex.lastIndex;
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
  className?: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({
  text,
  tag = 'blood',
  highlightClassName = 'text-blood glow-blood',
  className,
}) => {
  const segments = parseTaggedText(text, tag);
  return (
    <span className={className}>
      {segments.map((seg, idx) => (
        <span key={idx} className={clsx(seg.highlight && highlightClassName)}>
          {seg.text}
        </span>
      ))}
    </span>
  );
};

export default HighlightedText;
