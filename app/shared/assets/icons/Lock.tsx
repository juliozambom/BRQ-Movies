import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

export const Lock = (props: Svg['props'] & { size: number }) => {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Rect
                x={3}
                y={10}
                width={18}
                height={12}
                rx={2}
                stroke="#fff"
                strokeWidth={2}
            />
            <Path
                d="M7 9.167V6a5 5 0 1110 0v3.167"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
