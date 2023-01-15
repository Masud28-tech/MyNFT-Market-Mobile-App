import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

import { FocusedStatusBar, DetailsBid, DetailsHeader } from '../components';
import { ReactButton } from "../components/Buttons";
import { SHADOWS, SIZES } from "../constants";


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
            <DetailsHeader />
          </React.Fragment>
        )}
      />

    </SafeAreaView>
  )
}

export default Details;