import type { JSX } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  accent: string;
  children: React.ReactNode;
  label: string;
  onClick: () => void;
};

export function Button({
  accent,
  label,
  onClick,
  children,
}: Props): JSX.Element {
  return (
    <button
      className={twMerge(
        'text-md flex cursor-pointer items-center gap-1 rounded-md px-4 py-1 text-[#1b1b1b] hover:opacity-90',
        accent,
      )}
      onClick={onClick}
      type="button"
    >
      {children}
      {label}
    </button>
  );
}
