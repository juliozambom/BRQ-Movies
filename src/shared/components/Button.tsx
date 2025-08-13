import clsx from "clsx";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    isLoading?: boolean;
}

export const Button = ({ title, isLoading, ...rest }: ButtonProps) => {
    return (
        <TouchableOpacity
            {...rest}
            disabled={rest.disabled || isLoading}
            className={clsx("rounded-full min-h-16 bg-primary w-full items-center justify-center", {
                'bg-foreground': rest.disabled
            }, rest?.className)} >

            {!isLoading && <Text className="text-base text-secondary">{title}</Text>}

            {isLoading && <ActivityIndicator size="small" color="white" />}
        </TouchableOpacity>
    )
}