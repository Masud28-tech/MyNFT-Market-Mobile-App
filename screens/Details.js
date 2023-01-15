import React from "react";
import { FlatList, SafeAreaView, Text, View, Image, StatusBar } from "react-native";

import { FocusedStatusBar, DetailsBid } from '../components';
import { CircleButton, ReactButton } from "../components/Buttons";
import { SHADOWS, SIZES, assets } from "../constants";

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: '100%', height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}
      />

      <CircleButton
        imgUrl={assets.left}
        left={10}
        top={StatusBar.currentHeight + 10}
        handlePress={() => navigation.goBack()}
      />

      <CircleButton
        imgUrl={assets.heart}
        right={10}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
}

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: SIZES.font,
        zIndex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.5)"
      }}>

        <ReactButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
        />

      </View>

      <FlatList
        data={data.bids}
        renderItem={(item) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
          </React.Fragment>
        )}
      />

    </SafeAreaView>
  )
}

export default Details;