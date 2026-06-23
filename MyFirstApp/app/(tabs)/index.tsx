// import { useState } from 'react';
// import { View, Text, TextInput, Button, Image, ScrollView, StyleSheet } from 'react-native';

// export default function App() {
  
//   const [name, setName] = useState('');
//   const [count, setCount] = useState(0);

  
//   const message =
//     count > 0
//       ? `${name}, you tapped ${count} times!`
//       : 'Tap the + button to start';

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Profile Image */}
//       <Image
//         source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT5u0ykKLqe2RhYWpAbuxNEJSdrvWZWQ8kUA&s' }}
//         style={styles.image}
//       />

//       {/* Input */}
//       <TextInput
//         value={name}
//         placeholder="Type your name..."
//         onChangeText={setName}
//         style={styles.input}
//       />

//       {/* Greeting */}
//       <Text style={styles.text}>
//         {name === '' ? 'Please enter your name' : `Hello, ${name}!`}
//       </Text>

//       {/* Personal Info */}
//       <Text style={styles.name}>Jones Christian O. Juson</Text>
//       <Text style={styles.bio}>MMA Student - CS126 - A302</Text>

//       {/* Counter Message */}
//       <Text style={styles.text}>{message}</Text>

//       {/* Buttons */}
//       <View style={styles.buttonContainer}>
//         <Button title="+" onPress={() => setCount(count + 1)} />
//         <Button title="-" onPress={() => setCount(count - 1)} />
//         <Button title="Reset" onPress={() => setCount(0)} />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2c802b34',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20
//   },
//   image: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginBottom: 20
//   },
//   input: {
//     color: '#7c7c7c',
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     width: 200
//   },
//   text: {
//     fontSize: 16,
//     marginVertical: 5,
//     color: '#625b5b'
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 16,
//     color: '#b7b7b7'
//   },
//   bio: {
//     fontSize: 16,
//     color: '#625b5b'
//   },
//   buttonContainer: {
//     marginTop: 10,
//     width: '60%'
//   }
// });









// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import { NavigationIndependentTree } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // ─── Coffee Menu Data ────────────────────────────────────────────────────────
// const menuItems = [
//   { id: '1', category: 'Hot Drinks',  name: 'Americano',   price: '₱120', desc: 'Bold and strong black coffee brewed with espresso shots.' },
//   { id: '2', category: 'Hot Drinks',  name: 'Cappuccino',  price: '₱150', desc: 'Classic Italian coffee with equal parts espresso, steamed milk, and foam.' },
//   { id: '3', category: 'Hot Drinks',  name: 'Latte',       price: '₱160', desc: 'Smooth espresso blended with creamy steamed milk.' },
//   { id: '4', category: 'Cold Drinks', name: 'Iced Coffee', price: '₱130', desc: 'Chilled brewed coffee served over ice for a refreshing kick.' },
//   { id: '5', category: 'Cold Drinks', name: 'Frappuccino', price: '₱175', desc: 'Blended iced coffee drink topped with whipped cream.' },
// ];

// // ─── Stack Navigator Setup ───────────────────────────────────────────────────
// // createNativeStackNavigator() creates a "stack" of screens.
// // Think of it like a stack of cards — you push a card when you go forward,
// // and pop it off when you press Back.
// const Stack = createNativeStackNavigator();

// // ─── Home Screen (Coffee Menu) ───────────────────────────────────────────────
// function HomeScreen({ navigation }: any) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>☕ Coffee Shop Menu</Text>

//       {/* FlatList renders the menuItems array as a scrollable list */}
//       <FlatList
//         data={menuItems}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.item}
//             activeOpacity={0.75}
//             onPress={() => navigation.navigate('Detail', { coffee: item })}
//           >
//             <Text style={styles.category}>{item.category}</Text>
//             <Text style={styles.name}>{item.name}</Text>
//             <Text style={styles.price}>{item.price}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// // ─── Detail Screen ───────────────────────────────────────────────────────────
// function DetailScreen({ route, navigation }: any) {

//   // route.params contains the data we passed when calling navigation.navigate()
//   const { coffee } = route.params;

//   return (
//     <View style={styles.detailContainer}>
//       <Text style={styles.detailCategory}>{coffee.category}</Text>
//       <Text style={styles.detailName}>{coffee.name}</Text>
//       <Text style={styles.detailPrice}>{coffee.price}</Text>
//       <Text style={styles.detailDesc}>{coffee.desc}</Text>

//       {/* navigation.goBack() pops this screen off and returns to HomeScreen */}
//       <TouchableOpacity
//         style={styles.backButton}
//         activeOpacity={0.8}
//         onPress={() => navigation.goBack()}
//       >
//         <Text style={styles.backButtonText}>← Back to Menu</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// // ─── App (Navigation Container) ─────────────────────────────────────────────
// // NavigationIndependentTree is needed because Expo Router already has its own
// // navigator running. This tells React Navigation to treat our Stack as
// // a separate, independent navigation tree so they don't conflict.
// export default function App() {
//   return (
//     <NavigationIndependentTree>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: { backgroundColor: '#3E1F00' },
//           headerTintColor: '#F5E6D3',
//           headerTitleStyle: { fontWeight: 'bold' },
//         }}
//       >
//         {/* Register our two screens with the Stack */}
//         <Stack.Screen name="Menu"   component={HomeScreen}   options={{ title: '☕ Coffee Shop'}} />
//         <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Coffee Details', headerLeft: () => null }} />
//       </Stack.Navigator>
//     </NavigationIndependentTree>
//   );
// }

// // ─── Styles ──────────────────────────────────────────────────────────────────
// const styles = StyleSheet.create({

//   // Home Screen
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#FDF6EE',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#3E1F00',
//   },
//   item: {
//     backgroundColor: '#FFF8F2',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//     borderLeftWidth: 4,
//     borderLeftColor: '#C1440E',
//     shadowColor: '#000',
//     shadowOpacity: 0.06,
//     shadowRadius: 6,
//     elevation: 2,
//   },
//   category: {
//     fontSize: 12,
//     color: '#888',
//     marginBottom: 4,
//     textTransform: 'uppercase',
//     letterSpacing: 1,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#3E1F00',
//   },
//   price: {
//     fontSize: 14,
//     color: '#C1440E',
//     marginTop: 4,
//   },

//   // Detail Screen
//   detailContainer: {
//     flex: 1,
//     padding: 28,
//     backgroundColor: '#FDF6EE',
//     justifyContent: 'center',
//   },
//   detailCategory: {
//     fontSize: 13,
//     color: '#888',
//     textTransform: 'uppercase',
//     letterSpacing: 1.5,
//     marginBottom: 8,
//   },
//   detailName: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#3E1F00',
//     marginBottom: 8,
//   },
//   detailPrice: {
//     fontSize: 22,
//     color: '#C1440E',
//     fontWeight: '600',
//     marginBottom: 20,
//   },
//   detailDesc: {
//     fontSize: 16,
//     color: '#555',
//     lineHeight: 24,
//     marginBottom: 40,
//   },
//   backButton: {
//     backgroundColor: '#3E1F00',
//     paddingVertical: 14,
//     paddingHorizontal: 28,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   backButtonText: {
//     color: '#FDF6EE',
//     fontSize: 16,
//     fontWeight: '600',
//   },

// });










// Rainbow Coffee — Menu Screen
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert, ActivityIndicator, Animated } from 'react-native';
import { NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ─── Theme Constants ──────────────────────────────────────────────────────────
const BROWN = '#3E1F00';
const CREAM = '#FDF6EE';
const ACCENT_ORANGE = '#C1440E';
const CARD_BG = '#FFF8F2';

const Stack = createNativeStackNavigator();

// Global Notification Helper State/Component setup inside the layout
let showToastGlobal: (message: string) => void = () => {};

// ─── Menu List Screen ─────────────────────────────────────────────────────────
function HomeScreen({ navigation }: any) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch menu from internet using fetch() and async/await
  const fetchMenu = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://raw.githubusercontent.com/adamalexisyahya-ops/Rainbow-Coffee/main/menu.json');
      
      if (!response.ok) {
        throw new Error('Could not retrieve menu data');
      }
      const data = await response.json();
      setMenuItems(data);
    } catch (err: any) {
      setError('No internet connection or server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Initial load & Load favorites
  useEffect(() => {
    fetchMenu();

    const loadFavorites = async () => {
      const storedFavs = await AsyncStorage.getItem('user_favorites');
      if (storedFavs) setFavorites(JSON.parse(storedFavs));
    };

    const unsubscribe = navigation.addListener('focus', loadFavorites);
    loadFavorites();
    return unsubscribe;
  }, [navigation]);

  // Toggle favorite inclusion status
  const handleToggleFavorite = async (itemId: string) => {
    let updatedFavs = [...favorites];
    if (updatedFavs.includes(itemId)) {
      updatedFavs = updatedFavs.filter(id => id !== itemId);
    } else {
      updatedFavs.push(itemId);
    }
    setFavorites(updatedFavs);
    await AsyncStorage.setItem('user_favorites', JSON.stringify(updatedFavs));
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color={BROWN} />
        <Text style={{ marginTop: 12, color: BROWN, fontWeight: '600' }}>Loading Rainbow Menu...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.center, { paddingHorizontal: 30 }]}>
        <Text style={styles.errorText}>⚠️ {error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchMenu}>
          <Text style={styles.retryButtonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>☕ Coffee Shop Menu</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isFavorite = favorites.includes(item.id);
          return (
            <TouchableOpacity
              style={styles.item}
              activeOpacity={0.75}
              onPress={() => navigation.navigate('Detail', { coffee: item })}
            >
              <Image source={{ uri: item.image }} style={styles.thumbnail} />

              <View style={styles.itemTextContainer}>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>₱{item.price}</Text>
              </View>

              <TouchableOpacity 
                style={styles.favoriteListButton} 
                onPress={() => handleToggleFavorite(item.id)}
              >
                <Text style={[styles.heartIcon, isFavorite && styles.activeHeart]}>
                  {isFavorite ? '♥' : '♡'}
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

// ─── Item Detail Screen ───────────────────────────────────────────────────────
function DetailScreen({ route, navigation }: any) {
  const { coffee } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      const storedFavs = await AsyncStorage.getItem('user_favorites');
      if (storedFavs) {
        const favsArray = JSON.parse(storedFavs);
        setIsFavorite(favsArray.includes(coffee.id));
      }
    };
    checkFavoriteStatus();
  }, [coffee.id]);

  const handleAddToCart = async () => {
    try {
      const existingCartString = await AsyncStorage.getItem('cart_items');
      let currentCart = existingCartString ? JSON.parse(existingCartString) : [];

      const itemIndex = currentCart.findIndex((item: any) => item.id === coffee.id);
      if (itemIndex > -1) {
        currentCart[itemIndex].quantity += 1;
      } else {
        currentCart.push({
          id: coffee.id,
          name: coffee.name,
          price: `₱${coffee.price}`,
          quantity: 1,
          image: coffee.image
        });
      }

      await AsyncStorage.setItem('cart_items', JSON.stringify(currentCart));
      
      // Trigger our new floating toast notification!
      showToastGlobal(`🛍️ Added ${coffee.name} to cart!`);
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };

  const handleToggleFavorite = async () => {
    const storedFavs = await AsyncStorage.getItem('user_favorites');
    let favsArray = storedFavs ? JSON.parse(storedFavs) : [];

    if (favsArray.includes(coffee.id)) {
      favsArray = favsArray.filter((id: string) => id !== coffee.id);
      setIsFavorite(false);
    } else {
      favsArray.push(coffee.id);
      setIsFavorite(true);
    }
    await AsyncStorage.setItem('user_favorites', JSON.stringify(favsArray));
  };

  return (
    <View style={styles.detailContainer}>
      <Image source={{ uri: coffee.image }} style={styles.detailImage} />

      <View style={styles.detailHeaderRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.detailCategory}>{coffee.category}</Text>
          <Text style={styles.detailName}>{coffee.name}</Text>
        </View>
        
        <TouchableOpacity style={styles.favoriteDetailButton} onPress={handleToggleFavorite}>
          <Text style={[styles.detailHeartIcon, isFavorite && styles.activeHeart]}>
            {isFavorite ? '♥' : '♡'}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.detailPrice}>₱{coffee.price}</Text>
      <Text style={styles.detailDesc}>{coffee.desc}</Text>

      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart} activeOpacity={0.85}>
        <Text style={styles.addToCartButtonText}>Add to Cart 🛒</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

// ─── Main App Wrapper with Floating Toast Notification ────────────────────────
export default function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));

  // Expose toast activation globally to child screens
  showToastGlobal = (message: string) => {
    setToastMessage(message);
    
    // Fade In
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      // Hold for 2 seconds, then Fade Out
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => setToastMessage(''));
      }, 2000);
    });
  };

  return (
    <NavigationIndependentTree>
      <View style={{ flex: 1 }}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: BROWN },
            headerTintColor: '#F5E6D3',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen name="Menu"   component={HomeScreen}   options={{ title: '☕ Rainbow Coffee'}} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Coffee Details', headerLeft: () => null }} />
        </Stack.Navigator>

        {/* Floating Notification Toast UI */}
        {toastMessage ? (
          <Animated.View style={[styles.toastNotification, { opacity: fadeAnim }]}>
            <Text style={styles.toastText}>{toastMessage}</Text>
          </Animated.View>
        ) : null}
      </View>
    </NavigationIndependentTree>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: CREAM },
  center: { justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: BROWN },
  item: {
    backgroundColor: CARD_BG,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: BROWN,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: { width: 70, height: 100, borderRadius: 8, marginRight: 16 },
  itemTextContainer: { flex: 1 },
  category: { fontSize: 12, color: '#6c6b6b', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1 },
  name: { fontSize: 18, fontWeight: '600', color: BROWN },
  price: { fontSize: 14, color: ACCENT_ORANGE, marginTop: 4 },
  favoriteListButton: { padding: 10 },
  heartIcon: { fontSize: 26, color: '#aaa' },
  detailHeaderRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 },
  favoriteDetailButton: { padding: 8, backgroundColor: CARD_BG, borderRadius: 30, elevation: 2 },
  detailHeartIcon: { fontSize: 30, color: '#aaa' },
  activeHeart: { color: '#E03B3B' },
  detailContainer: { flex: 1, padding: 28, backgroundColor: CREAM, justifyContent: 'center' },
  detailImage: { width: 240, height: 340, borderRadius: 16, alignSelf: 'center', marginBottom: 24, resizeMode: 'cover' },
  detailCategory: { fontSize: 13, color: '#888', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 },
  detailName: { fontSize: 32, fontWeight: 'bold', color: BROWN },
  detailPrice: { fontSize: 22, color: ACCENT_ORANGE, fontWeight: '600', marginBottom: 16 },
  detailDesc: { fontSize: 16, color: '#555', lineHeight: 24, marginBottom: 30 },
  addToCartButton: { backgroundColor: ACCENT_ORANGE, paddingVertical: 14, borderRadius: 10, alignItems: 'center', marginBottom: 12 },
  addToCartButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  backButton: { backgroundColor: BROWN, paddingVertical: 14, paddingHorizontal: 28, borderRadius: 10, alignItems: 'center' },
  backButtonText: { color: CREAM, fontSize: 16, fontWeight: '600' },
  errorText: { color: 'red', fontSize: 16, textAlign: 'center', fontWeight: '500', marginBottom: 15 },
  retryButton: { backgroundColor: BROWN, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 6 },
  retryButtonText: { color: CREAM, fontWeight: 'bold' },
  
  // Custom Toast Banner Styles
  toastNotification: {
    position: 'absolute',
    bottom: 50,
    left: '10%',
    right: '10%',
    backgroundColor: '#004d26', // Deep green theme color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 }
  },
  toastText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center'
  }
});