import React from 'react'
import { 
    View, 
    Text, 
    Image, 
    Dimensions, 
    StyleSheet,
    TouchableOpacity ,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('screen')

export default function MovieDetailScreen({route}) {
    const {movie, navigation} = route.params;
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.wrapIcon}>
               <Ionicons name="arrow-back" size={30} style={styles.icon}/>
            </TouchableOpacity>
            <Image 
                style={{
                    width: width, 
                    height: height/2, 
                    resizeMode: 'contain'
                }} 
                source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}
            />
            <View style={styles.wrapMovieContent}>
                <Text style={styles.movieTitle}>{movie.title}</Text>
                <Text style={styles.movieOverview}>{movie.overview}</Text>
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        position: 'relative'
    },
    wrapIcon: {
        position: 'absolute',
        zIndex: 1,
        left: 10,
        top: 10
    },
    icon: {
        color: 'white'
    },
    wrapMovieContent: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },  
    movieTitle: {
        color: 'red',
        fontSize: 32,
        fontWeight: 'bold'
    },
    movieOverview: {
        color: 'white',
        fontSize: 18
    }
})
