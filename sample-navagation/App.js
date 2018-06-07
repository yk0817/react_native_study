import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

const economics = [
  { key: 'micro', title: 'microeconomics', detail: '世の中に存在する希少な資源の配分について研究する経済学の研究領域であり、最小単位の経済主体の行動を扱う。'},
  { key: 'macro', title: 'macroeconomics', detail: '個別の経済活動を集計した一国経済全体を扱うものである。'},
  { key: 'game', title: 'game_theory', detail: '個別の経済活動を集計した一国経済全体を扱うものである。'}
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    color: 'rgba(14, 13, 13, .38)',
  },
  paragraph: {
    fontSize: 18,
    color: '#737373',
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(14, 13, 13, .38)',
    marginVertical: 12,
  },
});

// データのタイトルをリスト表示するコンポーネント

const ListScreen = ({ navigation }) => (
  <FlatList
    data={economics}
    renderItem={({ item }) => (
      <TouchableOpacity
        key={item.key}
        style={styles.listItem}
        onPress={() => navigation.navigate('Detail', item)}
      >
        <Text style={styles.heading}>{item.title}</Text>
      </TouchableOpacity>
    )}
    contentContainerStyle={styles.container}
  />
);

// ナビゲーションの見た目や挙動に関する設定
ListScreen.navigationOptions = () => ({
  title: 'Economics',
});

// データの詳細を表示するコンポーネント
const DetailScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={[styles.heading, { marginBottom: 24 }]}>{navigation.state.params.title}</Text>
    <Text style={styles.paragraph}>{navigation.state.params.detail}</Text>
  </View>
);
DetailScreen.navigationOptions = {
  title: 'Detail',
};


export default StackNavigator({
  Detail: { screen: DetailScreen },
  List: { screen: ListScreen },
}, {
  initialRouteName: 'List'
});