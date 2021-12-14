import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeIcon(props) {
  return (
    <Svg
      baseProfile="tiny"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 3s-6.186 5.34-9.643 8.232A1.041 1.041 0 002 12a1 1 0 001 1h2v7a1 1 0 001 1h3a1 1 0 001-1v-4h4v4a1 1 0 001 1h3a1 1 0 001-1v-7h2a1 1 0 001-1 .98.98 0 00-.383-.768C18.184 8.34 12 3 12 3z" />
    </Svg>
  )
}

export default HomeIcon
