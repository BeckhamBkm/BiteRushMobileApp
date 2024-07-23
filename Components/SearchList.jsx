import React from 'react';
import { View,TextInput,Text, Pressable, Alert,Image} from 'react-native';
import { styles } from './Styles';
import { restaurants } from './Data';


export default function SearchList({navigation}) {

  return (
    <View>
        <TextInput style={{...styles.searchBar,marginTop:35,marginLeft:10,width:'95%'}} placeholder='Search categories or restaurants'></TextInput>
        <View>{
          restaurants.map((restuarant,index)=>(

            <Pressable style={{width:'100%',height:50,marginTop:1,flexDirection:'row'}} key={index} onPress={()=>navigation.navigate('RestuarantPage',{name:restuarant.name})}>
              <Image source={{uri:restuarant.logo}} style={{objectFit:'contain',marginLeft:10,width:35,height:35,borderRadius:100,marginTop:5}} ></Image>
              <Text style={{fontSize:17,margin:9,fontWeight:500}} >{restuarant.name}</Text>
              </Pressable>
            
          ))}</View>
    </View>
  )
    
}
