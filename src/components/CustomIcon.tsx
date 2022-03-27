import React from 'react';

interface IIcon {
  path: React.SVGProps<SVGElement>;
  width?: number;
  height?: number;
}

export function CustomIcon({ path, width, height }: IIcon) {
  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
      {path}
    </svg>
  );
}

CustomIcon.defaultProps = {
  width: 24,
  height: 24,
};