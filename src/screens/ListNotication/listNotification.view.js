/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { useState, useEffect } from 'react';
import { Text, SafeAreaView, View, FlatList, TextInput, Button, StyleSheet,StatusBar } from 'react-native';
// import { strings } from 'i18n';


const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title.id}</Text>
        <Text style={styles.title}>{title.email}</Text>
        <Text style={styles.title}>{title.first_name}</Text>
        <Text style={styles.title}>{title.last_name}</Text>

    </View>
);
const ListView = props => {
const DATA = props.data;

    const renderItem = ({ item }) => (
        <Item title={item} />
      );
    return (
        <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
export default ListView;