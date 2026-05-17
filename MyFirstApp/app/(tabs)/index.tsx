// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/hello-wave';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { Link } from 'expo-router';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Skibidiiiiiii sigma!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Subscribe to become sigma</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <Link href="/modal">
//           <Link.Trigger>
//             <ThemedText type="subtitle">Step 2: Become Sigma</ThemedText>
//           </Link.Trigger>
//           <Link.Preview />
//           <Link.Menu>
//             <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
//             <Link.MenuAction
//               title="Share"
//               icon="square.and.arrow.up"
//               onPress={() => alert('Share pressed')}
//             />
//             <Link.Menu title="More" icon="ellipsis">
//               <Link.MenuAction
//                 title="Delete"
//                 icon="trash"
//                 destructive
//                 onPress={() => alert('Delete pressed')}
//               />
//             </Link.Menu>
//           </Link.Menu>
//         </Link>

//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Aura Farm</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

//OLD NI NGA CODE SA TAAS OKAY?

//NEW CODE BELOW OKAY?



import { useState } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  return (
    <View style={s.screen}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT5u0ykKLqe2RhYWpAbuxNEJSdrvWZWQ8kUA&s' }} //I change the photo into a funny pic of a bear
        style={s.photo}
      />
      <TextInput
        value={name}
        placeholder="Type your name..."
        onChangeText={setName}
        style={{color: '#7c7c7c',
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          width: 200,
        }}
      />
      <Text style={s.name}>
        Hello, {name}!
      </Text>
      
      <Text style={s.name}>Jones Christian O. Juson</Text> {/*I changed the old name here into my own name*/}
      <Text style={s.bio}>MMA Student - CS126 - A302</Text> {/*I added my class section at the end of the bio*/}
    </View>
  );
}

const s = StyleSheet.create({
    screen: {flex:1, backgroundColor: '#2c802b34', alignItems: 'center', justifyContent: 'center'}, //I changed background color into forest green or "#2c802b34"
    photo: {width: 120, height: 120, borderRadius: 60},
    name: {fontSize: 24, fontWeight: 'bold', marginTop: 16, color: '#b7b7b7'}, //I changed my name font color into color white
    bio: {fontSize: 16, color: '#625b5b'}, //I changed my bio font color into a brownish shade
});
