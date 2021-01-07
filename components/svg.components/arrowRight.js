import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowRight(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#97a2ac"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="prefix__feather prefix__feather-chevron-right"
            {...props}
        >
            <Path d="M9 18l6-6-6-6" />
        </Svg>
    )
}

export default ArrowRight
