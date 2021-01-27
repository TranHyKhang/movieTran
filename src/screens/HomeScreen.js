import React from 'react'
import { useEffect, useState } from 'react';
import { 
    View,
    FlatList, 
    SafeAreaView, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo'

import {fetchList} from '../actions/movieAction';
import HeaderApp from '../components/HeaderApp';
import RenderMovieItem from '../components/RenderMovieItem';

export default function HomeScreen({navigation}) {
    console.log(navigation)
    const movies = useSelector(state => state.movieReducer.movies);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => { 
        dispatch(fetchList(page));
    },[page])

    return (
        <SafeAreaView style={styles.container}>
            {/* <Button onPress={() => navigation.openDrawer()} title='TOK'></Button> */}
            <TouchableOpacity 
                onPress={() => navigation.openDrawer()}
                style={styles.menuIcon}
            >
                <Entypo name="menu" size={40}/>
            </TouchableOpacity>
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    body: {
        paddingLeft: 15,
        paddingRight: 15,
        flex: 9
    },
    menuIcon: {
        position: 'absolute',
        left: 8,
        top: 16,
        flex: 1
    }
})
