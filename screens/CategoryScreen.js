import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/colors'

;
const renderCategoryItem = (itemData) => {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>;
};

const CategoryScreen = () => {
  return (
    <SafeAreaView style={styles.background}>
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2} style={styles.background}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: Colors.backgroundColor,
    }
});

export default CategoryScreen;