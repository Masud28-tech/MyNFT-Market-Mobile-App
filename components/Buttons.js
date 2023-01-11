import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SHADOWS, SIZES } from '../constants';

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: SIZES.extraLarge,
                ...SHADOWS.light,
                ...props
            }}
        >
            <Image source={imgUrl} resizeMode="contain" style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
    );
}


export const ReactButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        // <TouchableOpacity
        //     style={{
        //         width: 40,
        //         height: 40,
        //         backgroundColor: COLORS.white,
        //         position: 'absolute',
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         borderRadius: SIZES.extraLarge,
        //         ...SHADOWS.light,
        //         ...props
        //     }}
        // >
        //     <Image source={imgUrl} resizeMode="contain" style={{ width: 24, height: 24 }} />
        // </TouchableOpacity>
        <Text>react button</Text>
    );
}