import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const Bell = (props: Svg['props'] & { size: number }) => {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 14 14"
            fill="none"
            {...props}
        >
            <Path
                d="M11.278 5.259c0-1.086-.45-2.126-1.253-2.894A4.378 4.378 0 007 1.167a4.378 4.378 0 00-3.025 1.198A4.004 4.004 0 002.722 5.26c0 3.025-1.093 4.68-1.894 5.488-.186.187-.035.65.23.65h3.247c.117 0 .219.08.257.19.173.505.785 1.83 2.438 1.83s2.265-1.325 2.438-1.83a.277.277 0 01.257-.19h3.248c.264 0 .415-.463.229-.65-.801-.807-1.894-2.463-1.894-5.488z"
                stroke="#EC8B00"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
