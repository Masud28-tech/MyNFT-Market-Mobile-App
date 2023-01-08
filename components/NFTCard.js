import { View, Text, Image } from 'react-native'
import { COLORS, SIZES, SHADOWS, FONTS } from '../constants';

const NFTCard = ({data}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
      }}
    >
      <View style={{ width: '100%', height: 256 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{ width: '100%', height: '100%', borderTopLeftRadius: SIZES.font, borderTopRightRadius: SIZES.font }}
        />
        <Text>{data.name}</Text>
      </View>
    </View>
  )
}

export default NFTCard;