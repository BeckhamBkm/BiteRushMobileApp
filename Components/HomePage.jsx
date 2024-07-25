import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Text,SafeAreaView, ScrollView, StyleSheet, View,TextInput,Image, Pressable,Alert} from 'react-native';
import {foodCategories} from './Data'
import SearchList from './SearchList';
import { restaurants } from './Data';
import { TouchableOpacity } from 'react-native-web';
import { styles } from './Styles';

export default function HomePage({navigation}) {

 // const [restaurants,setRestuarants] = useState([]);

//  useEffect(() => {
//   const fetchData = async () => {
//     try {
//       // const response = await axios.get('https://biterush.azurewebsites.net/restuarants');
//       const response = await axios.get('https://localhost:7086/restuarants');
//       setRestuarants(response.data);

//     } catch (error) {
//       console.error('Error fetching data', error);
//     }
//   };

//   fetchData();
// }, []);

const handleSearch =()=>{
  navigation.navigate('SearchList');
}
const handleNav =()=>{
  console.log("Index:");
  navigation.navigate('RestuarantPage')
}
  const random = Math.floor(Math.random()*10);

  return (
    <View>
      
    {/*---------------------------------------- Search Bar Component ---------------------------------*/}
    <SafeAreaView>
    <ScrollView style={styles.scrollView}>
    <View style={styles.body} >
    <View style={styles.appBar} >
    <Text style={styles.headerLabel}>BiteRush</Text>
    </View>
    <TextInput style={styles.searchBar} placeholder='Search food or restaurants' onPressIn={()=>navigation.navigate('SearchList')} ></TextInput>
    <View>
    </View>
    <View style={styles.carousel} >
      <ScrollView style={styles.scrollViewCircular}  horizontal showsHorizontalScrollIndicator={false} >
        {foodCategories.map((category,index)=>(
          <View key={index} style={styles.circularHolder} >
              <Image style={{ width: 60, height: 60,borderRadius:100,objectFit:'cover',aspectRatio:1}} source={{uri:category.logo}} ></Image> 
           <Text style={{marginTop:50,marginLeft:10}} >{category.category}</Text> 
          </View>
        ))}
      </ScrollView>
    </View>

   {/*------------------------------- Food Categories Component ---------------------------------*/}
   
    <View style={styles.carousel} >
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      {restaurants.map((restaurant,indexx)=>(
        <Pressable key={indexx} style={styles.cardItem} onPress={()=>navigation.navigate('RestuarantPage',{name:restaurant.name})} >
         <Image
                      source={{ uri: restaurant.displayPic}}
                      style={{ width: 310, height:200,borderRadius:8}}
              />
              <View style={styles.cardBottom} >
              <Text style={{marginLeft:5,marginTop:2,fontSize:16,fontWeight:'700'}} >{restaurant.name} , {restaurant.street} </Text> 
              <View style={styles.ratingContainer} >
              <Text style={styles.ratingText} >{restaurant.rating}</Text>
              </View> 
              </View>
              <Text style={{fontSize:14,fontWeight:500,marginLeft:5}} >R25 Delivery Fee ~ 20 - 35 min </Text>
        </Pressable>
      ))}
      </ScrollView>
    </View>
    
    {/*-------------------------------Popular Restuarants Component---------------------------------*/}

    <Text style={styles.header} >Popular brands</Text>
    
    <View style={styles.carousel} >
    
      <ScrollView style={styles.scrollViewCircular} horizontal showsHorizontalScrollIndicator={false} >
        {restaurants.map((restaurant,index)=>(
          <Pressable key={index} style={styles.circularHolder} onPress={()=>navigation.navigate('RestuarantPage',{name:restaurant.name})} >
            
            <Image
                    source={{ uri: restaurant.logo }}
                    style={{ width: 60, height: 60,borderRadius:100,objectFit:'scale-down',aspectRatio:1}}
            />
          </Pressable>
        ))}

      </ScrollView> 
    </View>
    

      {/*------------------------------- Static Card Image ---------------------------------*/}

    <Pressable style={styles.cardItemStatic} onPress={()=>navigation.navigate('RestuarantPage',{name:restaurants[random].name})}>

          <Image
          source={{uri: restaurants[random].displayPic}}
          style={{ width:'100%', height:180,borderRadius:8,objectFit:'cover'}}
          />
          <View style={{...styles.cardBottom,width:390}} >
              <Text style={{marginLeft:5,marginTop:2,fontSize:16,fontWeight:'700'}} >{restaurants[random].name} , {restaurants[random].street} </Text> 
              <View style={styles.ratingContainer} >
              <Text style={styles.ratingText} >{restaurants[random].rating}</Text>
              </View> 
              </View>
              <Text style={{fontSize:14,fontWeight:500,marginLeft:5}} >R25 Delivery Fee ~ 20 - 35 min </Text>
   
    </Pressable>

    {/*--------------------------------Recommended Restuarants Component-------------------------------------------*/}

    <Text style={styles.header} >Recommended for you</Text>

    <View style={styles.carousel} >
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      {restaurants.map((restaurant,index)=>(
        <Pressable key={index} style={styles.cardItem} onPress={()=>navigation.navigate('RestuarantPage',{name:restaurant.name})}>
        
        <Image
                      source={{ uri: restaurant.displayPic}}
                      style={{ width: 310, height:200,borderRadius:8}}
              /> 
              <View style={styles.cardBottom} >
               <Text style={{marginLeft:5,marginTop:2,fontSize:16,fontWeight:'700'}} >{restaurant.name} , {restaurant.street} </Text> 
              <View style={styles.ratingContainer} >
               <Text style={styles.ratingText} >{restaurant.rating}</Text> 
              </View> 
              
              </View>
              <Text style={{fontSize:14,fontWeight:500,marginLeft:5}} >R25 Delivery Fee ~ 20 - 35 min </Text>
        </Pressable>
      ))}
      </ScrollView>
    </View>
    

    {/*-------------------------------------All Restuarants Component-------------------------------------------- */}

    <Text style={styles.header} >All resturants</Text>
    
    {restaurants.map((restaurant,index)=>(
        <Pressable key={index} style={styles.AllResturantsCardItem} onPress={()=>navigation.navigate('RestuarantPage',{name:restaurant.name})}>
        
         <Image
                      source={{ uri: restaurant.displayPic}}
                      style={{ width: 485, height:200,borderRadius:8}}
              /> 
              <View style={styles.AllCardBottom} >
              <Text style={{marginLeft:5,marginTop:2,fontSize:16,fontWeight:'700'}} >{restaurant.name} , {restaurant.street} </Text> 
               <View style={styles.ratingContainer} >
               <Text style={styles.ratingText} >{restaurant.rating}</Text> 
              </View> 
              
              </View>
              <Text style={{fontSize:14,fontWeight:500,marginLeft:5}} >R25 Delivery Fee ~ 20 - 35 min </Text>
        </Pressable>
      ))}
   
    </View>
    </ScrollView>
    </SafeAreaView>
  
  </View>
 
  )
}
