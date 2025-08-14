import clsx from "clsx";
import React, { useState } from "react";
import { Platform, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { TrailingIcon } from "../assets/icons/TrailingIcon";

interface TextFieldProps extends TextInputProps {
    icon?: React.ReactNode;
}

export const TextField = ({ icon, ...rest }: TextFieldProps) => {
    const [value, setValue] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const textFieldRef = React.useRef<TextInput>(null);

    function clearField() {
        textFieldRef.current?.clear();
        rest.onChangeText && rest.onChangeText('')
        setValue('')
    }

    function focusField() {
        textFieldRef.current?.focus()
    }

    console.log(value);
    return (
        <TouchableOpacity activeOpacity={1} onPress={focusField} className={clsx("w-full relative justify-center", rest?.className)}>
            <TextInput
                ref={textFieldRef}
                onChange={(e) => {
                    setValue(e.nativeEvent.text)
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...rest}
                placeholder={undefined}
                className={clsx("border-b text-base border-secondary px-4 leading-tight min-h-16 pt-2 bg-tertiary text-secondary", {
                    'pl-14': !!icon,
                    'pt-6': Platform.OS == 'android'
                })}
            />

            <View className="absolute left-4 flex-row gap-2 items-center">
                <View className="h-8 w-8 items-center justify-center">
                    {icon}
                </View>

                {rest?.placeholder && (
                    <Text className={clsx("text-secondary absolute", {
                        'left-0': !icon,
                        'left-10': !!icon,
                        '-top-1 text-xs': (value && value !== '') || isFocused
                    })}>{rest.placeholder}</Text>
                )}
            </View>

            <TouchableOpacity
                onPress={clearField}
                className="absolute right-4"
            >
                <TrailingIcon size={20} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}