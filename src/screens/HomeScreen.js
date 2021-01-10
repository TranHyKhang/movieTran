import { DrawerActions } from '@react-navigation/native';
import React from 'react'
import { useEffect, useState } from 'react';
import { View, FlatList, SafeAreaView, StyleSheet, Button } from 'react-native'
import {useDispatch, useSelector} from 'react-redux';

import {fetchList} from '../actions/movieAction';
import HeaderApp from '../components/HeaderApp';
import RenderMovieItem from '../components/RenderMovieItem';

export default function HomeScreen({navigation}) {
    console.log(navigation)
    const movies = useSelector(state => state.movieReducer.movies);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            flex: 1
        },
        body: {
            paddingLeft: 15,
            paddingRight: 15,
            flex: 9
        }
    })

    useEffect(() => { 
        dispatch(fetchList(page));
    },[page])



    return (
        <SafeAreaView style={styles.container}>
            <Button onPress={() => navigation.openDrawer()} title='TOK'></Button>
            <HeaderApp/>
            <View style={styles.body}>
                <FlatList
                    data={movies}
                    renderItem={({item}) => <RenderMovieItem movie={item}/>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>     
        </SafeAreaView>
    )
}
