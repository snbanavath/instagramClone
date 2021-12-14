import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function AddPostIcon(props) {
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
      <Rect height={18} rx={2} ry={2} width={18} x={3} y={3} />
      <Path d="M12 8L12 16" />
      <Path d="M8 12L16 12" />
    </Svg>
  )
}

export default AddPostIcon
