import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { theme } from '../core/theme'


export default function CategoryScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getListPhotos();
    return () => {}; // Clean-up function
  }, []);

  const getListPhotos = () => {
    const apiURL = 'http://192.168.1.2:5000/api/books/allBooks';
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
        setOriginalData(resJson);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error: ', error);
        setLoading(false); // Set loading to false in case of an error
      });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{ uri: item.ImageURL }}
          resizeMode="contain"
        />
        <View style={styles.wrapText}>
          <Text>{item.Title}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Handle button press action
              console.log('Button pressed for item:', item);
            }}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filteredData = originalData.filter((item) =>
      item.Title.toLowerCase().includes(text.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require('../assets/arrow_back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>List of Books</Text>
      </View>
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {loading ? (
        <ActivityIndicator style={styles.loading} size="large" color={theme.colors.primary} />
      ) : (
        <FlatList
          style={styles.list}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => `key-${item.id}`}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  list: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    marginTop: 8,
    padding: 5,
  },
  image: {
    width: 100,
    height: 150,
    flex: 1,
  },
  wrapText: {
    flex: 1,
    marginTop: 16,
    marginLeft: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', // Center the items horizontally
  },
  searchInput: {
    margin: 15,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 8, // Adjust the vertical padding
    paddingHorizontal: 16, // Adjust the horizontal padding
    borderRadius: 4,
    marginLeft: 8,
  },
  buttonText: {
    color: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 8
  },
  backButton: {
    // Updated styles for the back button
    position: 'absolute',
    left: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

