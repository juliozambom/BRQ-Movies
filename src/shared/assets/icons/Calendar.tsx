import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

export const Calendar = (props: Svg['props'] & { size: number }) => {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 14 14"
            fill="none"
            {...props}
        >
            <Rect
                x={1.1665}
                y={1.75}
                width={11.6667}
                height={11.0833}
                rx={3}
                stroke="#EC8B00"
            />
            <Path
                d="M4.083.583V1.75M9.916.583V1.75M1.167 4.667h11.666M3.792 7.583h.583M6.708 7.583h.584M9.625 7.583h.583M3.792 9.917h.583M6.708 9.917h.584M9.625 9.917h.583"
                stroke="#EC8B00"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
