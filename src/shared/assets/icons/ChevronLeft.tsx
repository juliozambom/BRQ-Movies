import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

export const ChevronLeft = (props: Svg['props'] & { size: number }) => {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Circle opacity={0.8} cx={12} cy={12} r={12} fill="#16171B" />
            <Path
                d="M18 11.25H8.873l4.192-4.192L12 6l-6 6 6 6 1.057-1.058-4.184-4.192H18v-1.5z"
                fill="#fff"
            />
        </Svg>

    )
}
