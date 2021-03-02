import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';

import {likeMovie, unLikeMovie} from '../actions/movieAction';

const compairID = (movie, arr) => {
    return arr.includes(movie.id);
}


export default function RenderMovieItem({movie, navigation}) {
    const movieLikedID = useSelector(state => state.movieReducer.movieLikedID)
    const dispatch = useDispatch();
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("DetailMovie", {movie, navigation})
        }}>
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
                        if(compairID(movie, movieLikedID)) {
                            dispatch(unLikeMovie(movie))

                        } else {
                            dispatch(likeMovie(movie))
                        }
                    }}
                >
                    <View style={styles.iconView}>
                        <AntDesign name="heart" size={30} color={compairID(movie, movieLikedID) ? 'red': 'gray'}/>
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
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
