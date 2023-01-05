import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../assets/data/dummy-data';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/colors';


const CategoryScreen = ({navigation}) => {
    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            });
        };
        return <CategoryGridTile
          title={itemData.item.title} 
          color={itemData.item.color} 
          onPress={pressHandler}
        />;
    };
  return (
    <LinearGradient colors={[Colors.backgroundColor, Colors.offWhite, Colors.inverse]}>
      <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item) => item.id} 
        renderItem={renderCategoryItem} 
        numColumns={2} 
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    
});

export default CategoryScreen;