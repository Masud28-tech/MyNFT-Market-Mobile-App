import { useState } from 'react';
import { View, Text } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants';
import { EthPrice, NFTTitle } from './SubInfo';

const DetailsDesc = ({ data }) => {
  const [description, setDescription] = useState(data.description.slice(0, 100));
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <>
      <View style={{
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '100%'
      }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>
      
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.font,
          color: COLORS.primary
        }}>
          Description
        </Text>

        <View style={{ marginTop: SIZES.base }}>
          <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }}>
            {description}...

            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.small,
                color: COLORS.primary
              }}
              onPress={() => {
                if (!isReadMore) {
                  setDescription(data.description);
                  setIsReadMore(true);
                }
                else {
                  setDescription(data.description.slice(0, 100));
                  setIsReadMore(false);
                }
              }}
            >
              {isReadMore ? "Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  )
}

export default DetailsDesc;