import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function Usericon(props) {
  return (
    <Svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <G data-name="Layer 2" id="Layer_2">
        <Path d="M16 29a13 13 0 1113-13 13 13 0 01-13 13zm0-24a11 11 0 1011 11A11 11 0 0016 5z" />
        <Path d="M16 17a5 5 0 115-5 5 5 0 01-5 5zm0-8a3 3 0 103 3 3 3 0 00-3-3zM25.55 24a1 1 0 01-.74-.32A11.35 11.35 0 0016.46 20h-.92a11.27 11.27 0 00-7.85 3.16 1 1 0 01-1.38-1.44A13.24 13.24 0 0115.54 18h.92a13.39 13.39 0 019.82 4.32 1 1 0 01-.73 1.68z" />
      </G>
      <Path id="frame" d="M0 0H32V32H0z" fill="none" />
    </Svg>
  )
}

export default Usericon
