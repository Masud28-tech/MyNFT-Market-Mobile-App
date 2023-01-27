import { View, Text, Image, TextInput } from 'react-native'
import { assets, FONTS, COLORS, SIZES } from '../constants';

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={assets.nftLogo}
            resizeMode="contain"
            style={{ width: 50, height: 50, color: COLORS.white }}
          />
          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.large * 1.2,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
            marginLeft:SIZES.base
          }}>
            MyNFT Market
          </Text>
        </View>

        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person03}
            resizeMode="contain"
            style={{ width: '100%', height: '100%' }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{ width: 15, height: 15, position: 'absolute', top: 0, right: 0 }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.white
        }}>
          Hello, Masud 👋
        </Text>

        <Text style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.large,
          color: COLORS.white,
          marginTop: SIZES.base / 2
        }}>
          Lets find a NFT for you
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: COLORS.gray,
          borderRadius: SIZES.font,
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2
        }}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder='Search NFTs'
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>

    </View>
  )
}

export default HomeHeader;