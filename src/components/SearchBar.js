import React from 'react'
import { View, StyleSheet, Dimensions, Animated } from 'react-native'
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {searchMovieWithName} from '../actions/movieAction';

const {width, height} = Dimensions.get('screen')
export default function SearchBar({isClick}) {
    const movies = useSelector(state => state.movieReducer.movies);
    const dispatch = useDispatch();

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            display: isClick ? 'flex' : 'none'
        },
        textInput: {
            width: width/1.15,
            height: 50,
            borderRadius: 20,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: '#DDD',
        }
    })
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="search..."  
                style={styles.textInput} 
                theme={{
                    colors: {
                        text: "#000",
                    }
                }}
                mode="flat"
                underlineColor="white"
                onChangeText={(text) => dispatch(searchMovieWithName(text, movies))}
            />
        </View>
    )
}


