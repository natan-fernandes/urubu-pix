import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { icons } from '../shared/icons';


interface HomeHeaderProps {
  name: string;
  navigation: any;
}

export const HomeHeader = (props: HomeHeaderProps) => {
  const profilePicture = icons.find(i => i.name === 'Urubu').icon;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={profilePicture}/>
      <View style={styles.header}>
        <Text style={styles.greeting}>Bom dia</Text>
        <Text style={styles.username}>{props.name}</Text>
      </View>
      <View style={styles.fill} onTouchStart={() => props.navigation.push('Profile')}>
        <FontAwesome5 style={styles.editPencil} name="pencil-alt"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    borderRadius: 50,
    resizeMode: 'contain',
    height: 60,
    width: 60,
    backgroundColor: '#4dff7f',
    marginRight: 20,
    borderColor: '#fff',
    borderWidth: 3
  },
  header: {
    display: 'flex',
  },
  greeting: {
    color: '#fff',
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25
  },
  fill: {
    display: 'flex',
    alignSelf: 'flex-end',
    marginLeft: 10,
    marginBottom: 8,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#8ccec650',
  },
  editPencil: {
    color: '#fff',
    fontSize: 14,
  }
});
