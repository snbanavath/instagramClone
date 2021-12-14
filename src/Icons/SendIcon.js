import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SendIcon(props) {
  return (
    <Svg
      fill="none"
      height={24}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 2L11 13" />
      <Path d="M22 2L15 22 11 13 2 9 22 2z" />
    </Svg>
  )
}

export default SendIcon
