import React from 'react';
import { View, StyleSheet, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'

import {
    useTheme,
    Avatar,
    Drawer,
    Text,
    Button
} from 'react-native-paper'


import {DrawerItem} from '@react-navigation/drawer'
import RenderDrawerItem from '../components/RenderDrawerItem';
const {width, height} = Dimensions.get('screen');


export default function DrawerContent(props) {
    const {colors} = useTheme();
    const {navigation} = props;

    return (
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0, 0.9)'}}>
            <View style={{flex: 1}} {...props}>
                <View style={styles.scrollViewContainer}>
                    <View style={styles.userInfo}>
                        <Avatar.Image
                            source={{uri: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/17021649_2041022529457954_2850228655665691898_n.jpg?_nc_cat=104&ccb=3&_nc_sid=09cbfe&_nc_ohc=Onh45hB-mtUAX9nJSL3&_nc_ht=scontent.fsgn2-5.fna&oh=17f3a0172020c3c0cda6767d6b3d86e2&oe=605766C7'}}
                            size={100}
                        />
                        <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 10}}>Hy Khang</Text>
                    </View>

                    <Button title="haha" onPress={() => console.log(navigation)}/>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            label={
                                () => <RenderDrawerItem 
                                    title={<Text style={{fontSize: 16, fontWeight: 'bold'}}>Home</Text>}
                                    icon={<AntDesign name="right" size={20} color={colors.icon}/>}
                                />
                            }
                            onPress={() => navigation.navigate('Home')}
                        />
                        <DrawerItem
                            label={
                                () => <RenderDrawerItem 
                                    title={<Text style={{fontSize: 16, fontWeight: 'bold'}}>Favorites</Text>}
                                    icon={<AntDesign name="right" size={20} color={colors.icon}/>}
                                />
                            }
                            onPress={() => navigation.navigate('Favorite')}
                        />
                        <DrawerItem
                            label={
                                () => <RenderDrawerItem 
                                    title={<Text style={{fontSize: 16, fontWeight: 'bold'}}>Account setting</Text>}
                                    icon={<AntDesign name="right" size={20} color={colors.icon}/>}
                                />
                            }
                            onPress={() => navigation.navigate('User')}
                        />
                    </Drawer.Section>
                </View>
                <View style={styles.footer}>
                    <DrawerItem
                        label={
                            () => <RenderDrawerItem 
                                title={<Text style={{fontSize: 16, fontWeight: 'bold', color: 'red'}}>Log out</Text>}
                                icon={<Entypo name="log-out" size={23} color={'red'}/>}
                            />
                        }
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 9,
        // backgroundColor: 'red'
    },
    userInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: height/4
    },
    drawerSection: {
        // backgroundColor: 'red'
    },
    footer: {
        flex: 1,
        // backgroundColor: 'red'
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'red',
        height: 40,
        width: width/2.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    }
})
