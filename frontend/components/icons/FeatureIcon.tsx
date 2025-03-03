import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const FeatureIcon = ({
  size = 18,
  color = "currentColor",
  className = "",
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6076 9.66748L12.7438 16.062C12.7565 16.1373 12.746 16.2147 12.7135 16.2838C12.6811 16.3529 12.6283 16.4105 12.5623 16.4488C12.4962 16.4872 12.42 16.5044 12.3439 16.4983C12.2678 16.4921 12.1954 16.4629 12.1363 16.4145L9.45131 14.3992C9.32169 14.3024 9.16424 14.2501 9.00244 14.2501C8.84064 14.2501 8.68318 14.3024 8.55356 14.3992L5.86406 16.4137C5.80505 16.4621 5.73271 16.4912 5.65669 16.4974C5.58066 16.5035 5.50457 16.4864 5.43856 16.4481C5.37255 16.4099 5.31977 16.3525 5.28725 16.2835C5.25473 16.2145 5.24403 16.1372 5.25656 16.062L6.39206 9.66748"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 10.5C11.4853 10.5 13.5 8.48528 13.5 6C13.5 3.51472 11.4853 1.5 9 1.5C6.51472 1.5 4.5 3.51472 4.5 6C4.5 8.48528 6.51472 10.5 9 10.5Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
