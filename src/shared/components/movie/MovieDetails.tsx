import { Text } from "react-native"

interface MovieDetailsProps {
    title: string
    overview: string
}

export const MovieDetails = ({ title, overview }: MovieDetailsProps) => {
    return (
        <>
            <Text className="text-secondary text-4xl font-bold">{title}</Text>

            <Text className="text-primary font-bold text-lg mt-4">SINOPSE</Text>
            <Text className="text-secondary text-lg mt-2" >
                {overview}
            </Text>
        </>
    )
}