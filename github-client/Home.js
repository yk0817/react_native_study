import React, { Component } from 'react';
import { 
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image
} from 'react-native';

export default class App extends React.Component<{}> {
  state = {
    items: [],
    refreshing: false,
    text: '',
  }
  page = 0;

  fetchRepositories(refreshing = false){
    const newPage = refreshing ? 1 : this.page + 1;
    this.setState({ refreshing });
    fetch(`https://api.github.com/search/repositories?q=${this.state.text}&page=${newPage}`)
      .then(response => response.json())
      .then(({ items }) => {
        this.page = newPage;
        if (refreshing) {
          this.setState({ items });
        } else {
          this.setState({ items: [...this.state.items, ...items],refreshing });
        }
    });        
  }
  
  navigateToDetail(item){
    this.props.navigation.navigate('Detail', { item });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputwrapper}>
          <TextInput style={styles.input} onChangeText={(text) => this.setState({ text })}/>
          <TouchableOpacity onPress={() => this.fetchRepositories(true)}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{marginTop: 20}} onPress={() => this.fetchRepositories()}>
          <Text>Fetch</Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.items}
          renderItem={({ item }) =>
            <TouchableOpacity style={{ padding: 10}} onPress={() => this.navigateToDetail(item) }>
              <Text style={{ fontSize: 20, padding: 20, fontWeight: 'bold', marginBottom: 10}}>{item.name}</Text>
              <View style={{ flexDirection: 'row'}}>
                <Image style={styles.ownerIcon} source={{ uri: item.owner.avatar_url }}/>
                <Text style={styles.ownerName}>{item.owner.login}</Text>
              </View>
            </TouchableOpacity>
         }
          keyExtractor={(item) => item.id}
          onEndReached={() => this.fetchRepositories(true)}
          onEndReachedThreshold={0.1}
          onRefresh={() =>{}}
          refreshing={this.state.refreshing}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  inputwrapper: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#EEE',
    borderRadius: 4,
  },
  searchText: {
    padding: 10,
  },
  ownerIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  ownerName: {
    fontSize: 14
  },
  ownerIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  ownerName: {
    fontSize: 14,
  },
});