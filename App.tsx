import React, { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from '@/src/context/global/store';
import { NavigationContainer } from '@react-navigation/native';
import RootScreen from '@/src/screen/RootScreen';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import SplashScreen from 'react-native-splash-screen';
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

GoogleSignin.configure({
  webClientId: "969882082409-0g60khn4r5060mfs22ropk1tik6eosu6.apps.googleusercontent.com",
  iosClientId: '969882082409-024g6ecutgh4qj8ri5mrbqe54s13c4ot.apps.googleusercontent.com'
});

const App = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: 1 },
      mutations: { retry: 1 },
    },
  });

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RootScreen />
        </Provider>
      </QueryClientProvider>
    </NavigationContainer>
  )
}

export default App
