import { View, Text, StyleSheet } from 'react-native';

interface BoxProps {
  children: React.ReactNode;
}

export const Box = (props: BoxProps) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    borderRadius: 10,
    padding: 20
  }
});