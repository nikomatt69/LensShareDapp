import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


export default function App() {
  return (
    <>
    <View style={styles.container}></View>
      <WebView source={{ uri: 'https://mycrumbs.xyz' }} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.06,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0.75,
    
  },
});
