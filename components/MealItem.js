import React from 'react';
import { Text, View, Pressable, Image, StyleSheet, Platform } from 'react-native';

const MealItem = ({title, imageUrl, duration, complexity, affordability}) => {
  return (
     <View>
        <Pressable style={styles.mealItem}>
            <View>
                <Image source={{uri: imageUrl}} resizeMode='cover' style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.infoTextContainer}>
                <Text style={styles.infoText}>{duration} min(s) </Text>
                <Text style={[styles.infoText, styles.upperCase]}>{complexity}</Text>
                <Text style={[styles.infoText, styles.upperCase]}>{affordability}</Text>
            </View>
        </Pressable>
     </View>
  );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        shadowColor: 'black',
        backgroundColor: 'white',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowOffset: {height: 2, width:0},
        shadowRadius: 6,
    },
    infoTextContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    infoText: {
        fontSize: 13,
        padding: 5,
        fontFamily: 'SourceSansPro-Bold',
    },
    upperCase: {
        textTransform: 'capitalize'
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 5
    }
});

export default MealItem;