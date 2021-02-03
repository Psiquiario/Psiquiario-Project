import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import calendarIcon from '../../assets/icons/Group.png';
import headIcon from '../../assets/icons/Head.png';
import pacienteIcon from '../../assets/icons/paciente.png';

function Home() {
    return (
      <View style= {styles.Container}>
        <View style={styles.headContainer}>
          <Text style = {styles.headText}>Psiquiario </Text>
          <View style= {styles.headButtonSpace}>
            <RectButton style= {styles.headButtonContainer1}>
              <Image source ={calendarIcon} />
              <Text style={styles.headButtonText}>Calendário</Text>
            </RectButton>
            <RectButton style= {styles.headButtonContainer2}>
              <Image source ={headIcon} />
              <Text style={styles.headButtonText}>Pacientes</Text>
            </RectButton>
          </View>
        </View>
        <Text style={styles.lowerText}> Pacientes de hoje </Text>
        <ScrollView style={styles.scrollContainer}>
          <RectButton style={styles.cardContainer}>
            <Image style={styles.cardImage} source ={pacienteIcon} />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardText}>Sample Text</Text>
            </View>
            <View style={styles.cardHourContainer}>
              <Text style={styles.cardHour}>13:00 a 14:00</Text>
            </View>  
          </RectButton>
        </ScrollView>
      </View>  
    );
}

export default Home;
