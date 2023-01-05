import React, {useLayoutEffect} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MealItem from '../components/MealItem';
//import { useRoute } from '@react-navigation/native';
import { CATEGORIES, MEALS } from '../assets/data/dummy-data';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/colors';

const MealsOverviewScreen = ({route, navigation}) => {
    // const route = useRoute();
   const catId =  route.params.categoryId;
   const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
   });
   useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({title: categoryTitle});
   }, [catId, navigation]);
   
   const renderNewMealItem = (itemData) => {
        const item = itemData.item;
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            duration: item.duration,
            complexity: item.complexity
        };
        return <MealItem {...mealItemProps}/>;
   };
  return (
    <LinearGradient colors={[Colors.backgroundColor, Colors.offWhite, Colors.inverse]} style={{height: '100%'}}>
        <View style={styles.container}>
            <FlatList keyExtractor={(item) => item.id} data={displayedMeals} renderItem={renderNewMealItem}/>
        </View>     
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

export default MealsOverviewScreen;