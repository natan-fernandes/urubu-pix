import { View, StyleSheet } from 'react-native';

export const HorizontalLine = () => <View style={styles.line}/>

const styles = StyleSheet.create({
  line: {
    borderBottomColor: '#00000050',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100%',
    height: 1,
    marginVertical: 10
  }
});