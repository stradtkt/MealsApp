import React from 'react';
import { StyleSheet, Pressable, Text, View, Platform } from 'react-native';
import Colors from '../constants/colors';

const CategoryGridTile = ({title, color, onPress}) => {
    return (
    <View style={styles.gridItem}>
        <Pressable style={
            ({pressed}) => [
                styles.button, 
                pressed 
                ? styles.buttonPressed 
                : null
            ]} 
            android_ripple={{color: '#ccc'}}
            onPress={onPress}>
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        backgroundColor: 'white'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        color: Colors.offWhite,
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 18,
        textShadowColor: Colors.inverse,
        textShadowOffset: {height: 2, width: 0},
        textShadowRadius: 4
      }
});

export default CategoryGridTile;