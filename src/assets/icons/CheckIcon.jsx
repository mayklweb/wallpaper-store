import * as React from "react"
const CheckIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="b"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="url(#a)" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#b)">
      <path fill="#000" d="M0 0h512v512H0z" />
    </g>
    
  </svg>
)
export default CheckIcon
