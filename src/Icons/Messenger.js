import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MessageIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      {...props}
    >
      <Path d="M12 2C6.486 2 2 6.262 2 11.5c0 2.545 1.088 4.987 3 6.771v4.346l4.08-2.039c.96.28 1.94.422 2.92.422 5.514 0 10-4.262 10-9.5S17.514 2 12 2zm0 2c4.411 0 8 3.365 8 7.5S16.411 19 12 19a8.461 8.461 0 01-2.361-.342l-.752-.219-.701.35L7 19.383v-1.981l-.637-.591C4.861 15.409 4 13.472 4 11.5 4 7.365 7.589 4 12 4zm-1 5l-5 5 4.5-2 2.5 2 5-5-4.5 2L11 9z" />
    </Svg>
  )
}

export default MessageIcon