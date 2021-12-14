import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function Searchicon(props) {
  return (
    <Svg
      fill="none"
      height={24}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={10.5} cy={10.5} r={7.5} />
      <Path d="M21 21L15.8 15.8" />
    </Svg>
  )
}

export default Searchicon
