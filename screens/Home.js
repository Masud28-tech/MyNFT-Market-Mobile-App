import { Text, SafeAreaView, View, FlatList } from "react-native"

import { COLORS, NFTData } from '../constants';
import { HomeHeader, NFTCard, FocusedStatusBar } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View>
      <Text>Hello</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home;