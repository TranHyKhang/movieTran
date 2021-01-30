import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

import {likeMovie, unLikeMovie} from '../actions/movieAction';


export default function RenderMovieItem({movie}) {
    const dispatch = useDispatch();
    
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image 
                    style={{width: 80, height: 100}} 
                    source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}
                />
            </View>
            <View style={styles.titleView}>
                <Text style={styles.title}>{movie.original_title}</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    if(movie.isLiked === false) {
                        dispatch(likeMovie(movie));
                    } else {
                        dispatch(unLikeMovie(movie));
                    }
                }}
            >
                <View style={styles.iconView}>
                    <AntDesign name="heart" size={30} color={movie.isLiked ? 'red' : 'gray'}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#AAA',
        flex: 1
    },
    imageView: {
        flex:3
    },
    titleView: {
        flex: 6,
        justifyContent: 'center',
    },
    iconView: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    }
})
