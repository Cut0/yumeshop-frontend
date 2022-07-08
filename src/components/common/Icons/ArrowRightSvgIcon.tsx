import { FC, SVGAttributes } from 'react';

type ArrowRightSvgIconProps = SVGAttributes<SVGElement>;

export const ArrowRightSvgIcon: FC<ArrowRightSvgIconProps> = ({
  fill = 'currentColor',
  ...svgProps
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill={fill}
    role="img"
    {...svgProps}
  >
    <title>Arrow Right</title>
    <path
      fill="#000000"
      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
    />
  </svg>
);
