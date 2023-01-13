import { View, Text, Image } from 'react-native';
import { SIZES, assets, FONTS, COLORS, SHADOWS } from '../constants'

export const SubInfo = () => {
    return (
        <View
            style={{
                width: "100%",
                paddingHorizontal: SIZES.font,
                marginTop: -SIZES.extraLarge,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
            <People />
            <EndDate />
        </View>
    );
}

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
    return (
        <View>
            <Text
                style={{
                    fontSize: titleSize,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary
                }}
            >
                {title}
            </Text>

            <Text
                style={{
                    fontSize: subTitleSize,
                    fontFamily: FONTS.regular,
                    color: COLORS.primary
                }}
            >
                {subTitle}
            </Text>
        </View>
    )
}

export const People = () => {
    return (
        <View style={{ flexDirection: "row" }}>
            {
                [assets.person01, assets.person02, assets.person03, assets.person04]
                    .map((imageUrl, idx) => <ImageComponent key={idx} imageUrl={imageUrl} index={idx} />)
            }
        </View>
    )
}

export const EndDate = () => {
    return (
        <View
            style={{
                justifyContent: 'center',
                alignContent: 'center',
                backgroundColor: COLORS.white,
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.base,
                elevation: '1%',
                maxWidth: '50%',
                ...SHADOWS.light,
            }}
        >
            <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.primary }}>
                Ending in
            </Text>
            <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.regular, color: COLORS.primary }}>
                12h 30min
            </Text>
        </View>
    )
}

export const EthPrice = ({ price }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
                source={assets.eth}
                resizeMode="contain"
                style={{ height: 20, width: 20, marginRight: 2 }}
            />
            <Text style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.font,
                color: COLORS.primary
            }}>
                {price}
            </Text>
        </View>
    )
}

export const ImageComponent = ({ imageUrl, index }) => {
    return (
        <Image
            source={imageUrl}
            resizeMode="contain"
            style={{ width: 48, height: 48, marginLeft: index === 0 ? 0 : -SIZES.font }}
        />
    )
}