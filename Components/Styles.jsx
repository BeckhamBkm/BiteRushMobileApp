import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

    appBar:{
      //marginTop:30,
      // position: 'relative',
       //height: 70,
       //borderTopEndRadius:20,
       //borderTopStartRadius:20,
      // fontSize: 20,
      // color: '#fff',
      // textAlign: 'center',
      // width:'100%',
       //backgroundColor: '#0A2830'
    },
    container: {
      flex: 1,
    },
    header:{
      fontWeight:'bold',
        marginLeft: 5,
        marginBottom: 10,
        fontSize: 18
    },
    scrollView: {
      paddingHorizontal: 10,
  
    },
    scrollViewCircular: {
      paddingHorizontal: 10,
      height:70
    },
    headerLabel: {
      textAlign: 'center',
      fontSize: 20,
      marginTop: 20,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    searchBar: {
      marginTop:2,
      height: 50,
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    carousel: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      width:'100%'
    },
    circularHolder: {
      width: 60,
      height: 60,
      borderRadius: 100,
      //backgroundColor: 'purple',
      marginRight:20,
      marginBottom:50,
    },
    cardItem: {
      height: 215,
      width: 310,
      marginBottom: 40,
      borderRadius: 8,
      marginRight:10,
    },
    AllResturantsCardItem: {
      height: 215,
      width: 485,
      marginBottom: 60,
      borderRadius: 8,
      marginRight:10,
  
    },
  
    cardItemStatic: {
      //backgroundColor: 'purple',
      height: 180,
      width: '100%',
      marginBottom: 55,
      borderRadius: 8,
      marginRight:7,
      color:'black'
  
    },
    cardBottom:{
      marginTop:5,
      flexDirection: 'row',
      justifyContent:'space-between',
      width:310,
      height:25,
  
    },
    ratingContainer:{
      justifyContent:'center',
      height:27,
      width:27,
      marginRight:2,
      backgroundColor:'gray',
      //opacity:0.6,
      borderRadius:100
    },
    AllCardBottom:{
      marginTop:5,
      flexDirection: 'row',
      justifyContent:'space-between',
      width:385,
      height:25,
  
    },
    
    ratingText:{
      fontSize:15,
      fontWeight:'700',
      marginLeft:2.2
    }
  });