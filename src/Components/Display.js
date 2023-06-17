import { Text, View } from 'react-native';

export default function Display({ value = '0', tFont = 50, tFlex = 1 }) {
  return (
    <View style={styles(tFlex).container}>
      <Text style={styles(tFont).content}>{String(value)}</Text>
    </View>
  );
}
