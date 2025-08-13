import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const Star = (props: Svg['props'] & { size: number }) => {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 16 16"
            fill="none"
            {...props}
        >
            <Path
                d="M7.308 2.325a.75.75 0 011.384 0l1.182 2.83a.75.75 0 00.591.455l3.156.427a.75.75 0 01.373 1.324l-2.42 1.975a.75.75 0 00-.256.75l.773 3.34c.155.67-.599 1.177-1.162.782l-2.498-1.753a.75.75 0 00-.862 0l-2.498 1.753c-.563.396-1.317-.113-1.162-.783l.773-3.339a.75.75 0 00-.257-.75l-2.42-1.975a.75.75 0 01.374-1.324l3.155-.427a.75.75 0 00.592-.454l1.182-2.831z"
                stroke="#EC8B00"
                strokeMiterlimit={3.3292}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
