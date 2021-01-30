import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import {useSelector} from 'react-redux'
import RenderMovieItem from '../components/RenderMovieItem';

export default function FavoritesScreen() {
    const likeListMovie = useSelector(state => state.movieReducer.likeListMovie);
    return (
        <View>
            <FlatList
                data={likeListMovie}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <RenderMovieItem movie={item}/>}
            />
        </View>
    )
}
