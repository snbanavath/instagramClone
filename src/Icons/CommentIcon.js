import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CommentIcon(props) {
  return (
    <Svg
      viewBox="0 0 48 48"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 48 48"
      {...props}
    >
      <Path d="M42 45.3l-13.3-3.7c-1.4.3-2.9.4-4.7.4-12.7 0-22-8.4-22-20 0-5.4 1.9-10.1 5.6-13.8C11.7 4.2 17.6 2 24 2c12.7 0 22 8.4 22 20 0 4.3-1.4 8.5-4 11.8v11.5zm-13.3-5.7L40 42.7v-9.5l.2-.3C42.7 29.8 44 26 44 22c0-10.4-8.4-18-20-18-6 0-11.3 2-15 5.6-3.3 3.3-5 7.6-5 12.4 0 10.4 8.4 18 20 18 1.8 0 3.2-.1 4.5-.4h.2z" />
    </Svg>
  )
}

export default CommentIcon
