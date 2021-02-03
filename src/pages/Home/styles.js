import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    Container: {
      flex: 1,
      backgroundColor: '#A2A0C8'
    },

    headContainer: {
      backgroundColor: '#494985',
      height: "40%",
      borderBottomLeftRadius:5,
      borderBottomRightRadius:5,
    },

    headText: {
      fontFamily: 'Poppins_700Bold',
      fontSize: 25,
      marginTop: 25,
      marginLeft: 25,
      color: "#F9FAFC",
    },

    headButtonSpace: {
      flexDirection:'row',
      justifyContent:"space-between"
    },

    headButtonContainer1: {
      backgroundColor: '#B2F7EF',
      width: "40%",
      marginLeft: 20,
      marginTop: 6,
      height: 130,
      borderRadius: 12,
      justifyContent:'center',
      alignItems:'center',
    },

    headButtonContainer2: {
      backgroundColor: '#7BDFF2',
      width: "40%",
      marginRight: 20,
      marginTop: 6,
      height: 130,
      borderRadius: 12,
      justifyContent:'center',
      alignItems:'center',
    },

    headButtonText:{
      fontSize: 20,
      fontFamily: 'Roboto_400Regular',
      color: '#494985',
    },

    lowerText: {
      fontFamily: 'Poppins_700Bold',
      fontSize: 18,
      marginTop: 15,
      marginLeft: 10,
      color: "#F9FAFC",
    },

    scrollContainer:{
      marginTop: 20,
    },

    cardContainer: {
      backgroundColor: '#494985',
      alignSelf:"center",
      width: '90%',
      borderRadius: 5,
      flexDirection:'row',
      justifyContent:'space-between',
      height: 80,
    },

    cardImage: {
      padding:30,
      alignSelf:'center',
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
    },

    cardTextContainer:{
      alignSelf:'center',
      width:'45%',
      marginLeft:5
    },

    cardText: {
      color:'#FFFFFF',
      fontFamily: 'Roboto_400Regular',
      fontSize: 22,
    },

    cardHourContainer: {
      alignSelf:'flex-end',
      marginRight:5,
    },

    cardHour: {
      marginLeft: 10,
      color:'#FFFFFF',
      fontFamily: 'Roboto_300Light',
      fontSize: 12,
    },

});

export default styles;