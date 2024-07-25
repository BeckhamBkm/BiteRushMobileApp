import React, { useEffect, useState } from 'react';
import { Text,View,Image, Alert, Pressable,ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Restuarantstyles as styles }  from './Styles/RestuarantPage';
import { restaurants,tabItems } from './Data';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


export default function RestuarantPage({navigation}) {
  const [selectedRestuarant,setSelectedRestuarant] = useState('');
  const route = useRoute();
  const name = route.params?.name

    const getRestuarant=()=>{ 
      setSelectedRestuarant(restaurants.find(x=>x.name == name))
    }

    useEffect(()=>{
      getRestuarant(name);
    },[])

  return (
    <View>
        <View style={styles.TopBackgroundImageContainer} >
          <Image style={styles.TopBackgroundImageContainer} source={{uri:selectedRestuarant['displayPic']}} ></Image>
          <Pressable style={{marginTop:10,marginLeft:10,width:50,height:50,borderRadius:100,position:'absolute',backgroundColor:'black',opacity:0.5}} onPress={()=>navigation.navigate('Home')} ></Pressable>
        </View>
        <Text style={styles.headerText}>{name}, {selectedRestuarant["street"]}</Text>

        <ScrollView style={styles.tabList} horizontal showsHorizontalScrollIndicator={false}>
          {tabItems.map((Item,index)=>(
            <Text style={{fontSize:16,marginLeft:10,marginRight:25}} key={index} >{Item.name}</Text>
          ))}
        </ScrollView>
    </View>
  )
}
