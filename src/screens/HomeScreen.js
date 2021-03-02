import React from 'react'
import { useEffect, useState } from 'react';
import { 
    View,
    FlatList, 
    StyleSheet, 
    TouchableOpacity ,
    Button
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';


import {fetchList} from '../actions/movieAction';

import HeaderApp from '../components/HeaderApp';
import RenderMovieItem from '../components/RenderMovieItem';
import SearchBar from '../components/SearchBar';

export default function HomeScreen({navigation}) {
    const state = useSelector(state => state.movieReducer)
    const movies = useSelector(state => state.movieReducer.movies);
    const searchMovies = useSelector(state => state.movieReducer.searchMovies);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [searchIcon, setSearchIcon] = useState(false)

    useEffect(() => { 
        dispatch(fetchList(page));
    },[])

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => navigation.openDrawer()}
                style={styles.menuIcon}
            >
                <Entypo name="menu" size={40}/>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.searchIcon}
                onPress={() => setSearchIcon(!searchIcon)}
            >
                {searchIcon ? <AntDesign name="close" size ={30}/> : <AntDesign name="search1" size ={30}/>}
            </TouchableOpacity>

            <HeaderApp/>

            <View style={styles.body}>
                <SearchBar isClick={searchIcon}/>
                {
                    searchIcon ?  <FlatList
                        data={searchMovies}
                        renderItem={({item}) => <RenderMovieItem 
                                movie={item} 
                                isSearch={searchIcon}
                                navigation={navigation}
                            />
                        }
                        keyExtractor={(item, index) => index.toString()}
                    /> : <FlatList
                        data={movies}
                        extraData={state}
                        renderItem={({item}) => <RenderMovieItem 
                                movie={item} 
                                isSearch={searchIcon}
                                navigation={navigation}
                            />
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                }
            </View>
        </View>
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
    },
    searchIcon: {
        position: 'absolute',
        right: 12,
        top: 19,
        
    }
})
