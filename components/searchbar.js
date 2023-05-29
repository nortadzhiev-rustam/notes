import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Perform search operation based on searchText
    console.log('Searching for:', searchText);
  };

  return (
    <View style={styles.container}>
      <Icon
        name="search"
        type="font-awesome"
        color="gray"
        onPress={handleSearch}
        containerStyle={styles.iconContainer}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    margin: 10
  },
  iconContainer: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 5,
  },
});

export default SearchBar;
