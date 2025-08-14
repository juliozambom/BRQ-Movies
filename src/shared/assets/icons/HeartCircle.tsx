import * as React from "react"
import Svg, { Circle, ClipPath, Defs, G, Path } from "react-native-svg"

export const HeartCircle = (props: Svg['props'] & { size: number }) => {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_2206_1514)">
                <Circle opacity={0.8} cx={12} cy={12} r={12} fill={props.fill} />
                <Path
                    d="M6.617 8.2a3.53 3.53 0 000 4.992l5.346 5.346.037-.037.037.037 5.346-5.346a3.53 3.53 0 10-4.991-4.991L12 8.592l-.391-.391a3.53 3.53 0 00-4.992 0z"
                    fill={props.color}
                    stroke={props.color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_2206_1514">
                    <Path fill={props.fill} d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>

    )
}
