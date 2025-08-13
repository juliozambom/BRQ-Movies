import clsx from "clsx";
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export const Button = ({ title, ...rest }: ButtonProps) => {
    return (
        <TouchableOpacity
            {...rest}
            className={clsx("rounded-full min-h-16 bg-primary w-full items-center justify-center", {
                'bg-foreground': rest.disabled
            }, rest?.className)} >
            <Text className="text-base text-secondary">{title}</Text>
        </TouchableOpacity>
    )
}