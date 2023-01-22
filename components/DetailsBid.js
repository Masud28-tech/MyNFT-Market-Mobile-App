import { View, Text, Image } from 'react-native';
import { FONTS, COLORS, SIZES } from '../constants';
import { EthPrice } from './SubInfo';

const DetailsBid = ({ bid }) => {
    return (
        <View style={{
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: SIZES.base,
            paddingHorizontal: SIZES.base * 2
        }}>
            <Image
                source={bid.image}
                resizeMode='contain'
                style={{ width: 48, height: 48 }}
            />
            <View>
                <Text style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.small,
                    color: COLORS.primary
                }}>
                    Bid placed by {bid.name}</Text>

                <View>
                    <Text style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.small - 2,
                        color: COLORS.secondary,
                        marginTop: 3
                    }}>
                        {bid.date}
                    </Text>
                </View>
            </View>
            <EthPrice price={bid.price} />
        </View>
    )
}

export default DetailsBid;