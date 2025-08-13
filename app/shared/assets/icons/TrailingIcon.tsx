import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const TrailingIcon = (props: Svg['props'] & { size: number }) => {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C4.47 0 0 4.47 0 10s4.47 10 10 10 10-4.47 10-10S15.53 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-9.41L13.59 5 15 6.41 11.41 10 15 13.59 13.59 15 10 11.41 6.41 15 5 13.59 8.59 10 5 6.41 6.41 5 10 8.59z"
                fill="#fff"
            />
        </Svg>
    )
}
