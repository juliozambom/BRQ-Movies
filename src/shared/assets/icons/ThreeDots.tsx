import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const ThreeDots = (props: Svg['props'] & { size: number }) => {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-2 8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
                fill="#A9A9A9"
            />
        </Svg>
    )
}
