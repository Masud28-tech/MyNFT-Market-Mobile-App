import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import { CircleButton, ReactButton } from './Buttons';
import { EthPrice, NFTTitle, SubInfo } from './SubInfo';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

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

        <CircleButton imgUrl={assets.heart} top={10} right={10} />
      </View>

      <SubInfo />

      <View style={{ padding: SIZES.font, width: '100%' }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.font
          }}
        >
          <EthPrice price={data.price} />
          <ReactButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate('Details', { data })}
          />
        </View>
      </View>
    </View>
  )
}

export default NFTCard;