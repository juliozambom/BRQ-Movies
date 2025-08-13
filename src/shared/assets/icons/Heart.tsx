import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

export const Heart = (props: Svg['props'] & { size: number }) => {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 14 14"
            fill="none"
            {...props}
        >
            <Path
                d="M1.617 2.2a3.53 3.53 0 000 4.992l5.346 5.346.037-.037.037.037 5.346-5.346a3.53 3.53 0 10-4.991-4.991L7 2.592l-.391-.391a3.53 3.53 0 00-4.992 0z"
                stroke="#EC8B00"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
