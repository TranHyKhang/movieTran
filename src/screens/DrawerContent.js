import React from 'react';
import { View, StyleSheet, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'

import MyButton from '../components/MyButton';

import {
    useTheme,
    Avatar,
    Drawer,
    Text
} from 'react-native-paper'


import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import RenderDrawerItem from '../components/RenderDrawerItem';
const {width, height} = Dimensions.get('screen');


export default function DrawerContent(props) {
    const {colors} = useTheme();

    return (
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0, 0.9)'}}>
            <View style={{flex: 1}} {...props}>
                <View style={styles.scrollViewContainer}>
                    <View style={styles.userInfo}>
                        <Avatar.Image
                            source={{uri: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/17021649_2041022529457954_2850228655665691898_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ypSuKQbPu3cAX9SsDYB&_nc_ht=scontent.fsgn2-5.fna&oh=dd07223b3745e7d07275ebe3016322c3&oe=6027F0C7'}}
                            size={100}
                        />
                        <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 10}}>Hy Khang</Text>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            label={
                                () => <RenderDrawerItem 
                                    title={<Text style={{fontSize: 16, fontWeight: 'bold'}}>Home</Text>}
                                    icon={<AntDesign name="right" size={20} color={colors.icon}/>}
                                />
                            }
                        />
                        <DrawerItem
                            label={
                                () => <RenderDrawerItem 
                                    title={<Text style={{fontSize: 16, fontWeight: 'bold'}}>Favorites</Text>}
                                    icon={<AntDesign name="right" size={20} color={colors.icon}/>}
                                />
                            }
                        />
                        <DrawerItem
                            label={
                                () => <RenderDrawerItem 
                                    title={<Text style={{fontSize: 16, fontWeight: 'bold'}}>Account setting</Text>}
                                    icon={<AntDesign name="right" size={20} color={colors.icon}/>}
                                />
                            }
                        />
                    </Drawer.Section>
                </View>
                <View style={styles.footer}>
                    {/* <MyButton title="LOG OUT" styleButton={styles.button} _handleOnPress={() => console.log('haha')}/> */}
                    <DrawerItem
                        label={
                            () => <RenderDrawerItem 
                                title={<Text style={{fontSize: 18, fontWeight: 'bold', color: 'red'}}>Log out</Text>}
                                icon={<Entypo name="log-out" size={25} color={'red'}/>}
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
