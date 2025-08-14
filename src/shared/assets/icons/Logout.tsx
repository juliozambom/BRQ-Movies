import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

export const Logout = (props: Svg['props'] & { size: number }) => {
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
                d="M13 3a1 1 0 01-1 1h-1a8 8 0 100 16h1a1 1 0 110 2h-1C5.477 22 1 17.523 1 12S5.477 2 11 2h1a1 1 0 011 1z"
                fill="#fff"
            />
            <Rect x={7.58545} y={10.9995} width={13} height={2} rx={1} fill="#fff" />
            <Rect
                x={16.0498}
                y={7.04932}
                width={7.00067}
                height={2}
                rx={1}
                transform="rotate(45 16.05 7.05)"
                fill="#fff"
            />
            <Rect
                x={19.585}
                y={10.5845}
                width={2.00121}
                height={7.0015}
                rx={1.0006}
                transform="rotate(45 19.585 10.585)"
                fill="#fff"
            />
        </Svg>
    )
}
