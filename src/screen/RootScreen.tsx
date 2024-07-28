import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { StackParamList } from '@/src/shared/types/routes';
import { useSelector } from 'react-redux';
import { getAuthState } from '@/src/context/global/slice/authSlice';
import { APP_ROUTES } from '@/src/shared/types/routes';
import LoadingScreen from '@/src/screen/LoadingScreen';
import HomeScreen from '@/src/screen/HomeScreen';
import FeedScreen from '@/src/screen/FeedScreen';
import ChatListScreen from '@/src/screen/ChatListScreen';
import ChatDetailScreen from '@/src/screen/ChatDetailScreen';
import FolderScreen from '@/src/screen/FolderScreen';
import ProflieScreen from '@/src/screen/ProfileScreen';
import WelcomeScreen from '@/src/screen/WelcomeScreen';
import SettingScreen from '@/src/screen/SettingScreen';
import NotiListScreen from '@/src/screen/NotiListScreen';
import UserScreen from '@/src/screen/UserScreen';
import SignScreen from '@/src/screen/SignScreen';
import ProfileSettingModal from '@/src/screen/modal/ProfileSettingModal';
import LangSettingModal from '@/src/screen/modal/LangSettingModal';
import WorkspaceScreen from '@/src/screen/WorkspaceSceen';
import AppSettingModal from '@/src/screen/modal/AppSettingModal';
import DocumentDetailViewModal from '@/src/screen/modal/DocDetailViewModal';
import DocumentDetailEditModal from '@/src/screen/modal/DocDetailEditModal';
import RecentDocumentScreen from '@/src/screen/RecentDocListScreen';
import CreateFileScreen from '@/src/screen/CreateFileScreen';
import CreateFolderScreen from '@/src/screen/CreateFolderScreen';
import SearchScreen from '@/src/screen/SearchScreen';

const Stack = createNativeStackNavigator<StackParamList>();

const RootScreen = () => {
  const { isSignIn, isSigningIn, isSigningUp } = useSelector(getAuthState);

  const renderScreen = useCallback(() => {
    if (!isSignIn && isSigningIn && isSigningUp) {
      return (
        <Stack.Screen name={APP_ROUTES.SCREEN.LOADING} component={LoadingScreen} />
      );
    } else if (!isSignIn && !isSigningIn && !isSigningUp) {
      return <Stack.Screen name={APP_ROUTES.SCREEN.SIGN} component={SignScreen} />;
    } else {
      return (
        <>
          <Stack.Screen name={APP_ROUTES.SCREEN.HOME} component={HomeScreen} />
          <Stack.Screen name={APP_ROUTES.SCREEN.FEED} component={FeedScreen} />
          <Stack.Screen name={APP_ROUTES.SCREEN.FOLDER} component={FolderScreen} />
          <Stack.Screen
            name={APP_ROUTES.SCREEN.SEARCH}
            component={SearchScreen}
            options={{ animation: 'slide_from_right' }}
          />
          <Stack.Screen
            name={APP_ROUTES.SCREEN.CREATE_FILE}
            component={CreateFileScreen}
            options={{ animation: 'fade_from_bottom', animationDuration: 220 }}
          />
          <Stack.Screen
            name={APP_ROUTES.SCREEN.CREATE_FOLDER}
            component={CreateFolderScreen}
            options={{ animation: 'fade_from_bottom', animationDuration: 220 }}
          />
          <Stack.Screen name={APP_ROUTES.SCREEN.CHAT_LIST} component={ChatListScreen} />
          <Stack.Screen
            name={APP_ROUTES.SCREEN.CHAT_DETAIL}
            component={ChatDetailScreen}
          />
          <Stack.Screen
            name={APP_ROUTES.SCREEN.PROFILE}
            component={ProflieScreen}
          />
          <Stack.Screen
            name={APP_ROUTES.SCREEN.WELCOME}
            component={WelcomeScreen}
          />
          <Stack.Screen
            name={APP_ROUTES.SCREEN.SETTING}
            component={SettingScreen}
            options={{ animation: 'slide_from_right' }}
          />
          <Stack.Screen name={APP_ROUTES.SCREEN.USER} component={UserScreen} />
          <Stack.Screen
            name={APP_ROUTES.SCREEN.NOTI_LIST}
            component={NotiListScreen}
            options={{ animation: 'fade_from_bottom' }}
          />
          <Stack.Screen
            name={APP_ROUTES.SCREEN.WORKSPACE}
            component={WorkspaceScreen}
            options={{ animation: 'slide_from_right' }}
          />
          <Stack.Screen
            name={APP_ROUTES.SCREEN.RECENT_DOC_LIST}
            component={RecentDocumentScreen}
            options={{ animation: 'slide_from_right' }}
          />
          <Stack.Screen
            name={APP_ROUTES.MODAL.PROFILE_SETTING}
            component={ProfileSettingModal}
            options={{ animation: 'fade_from_bottom' }}
          />
          <Stack.Screen
            name={APP_ROUTES.MODAL.LANG_SETTING}
            component={LangSettingModal}
            options={{ animation: 'slide_from_right' }}
          />
          <Stack.Screen
            name={APP_ROUTES.MODAL.APP_SETTING}
            component={AppSettingModal}
            options={{ animation: 'slide_from_right' }}
          />
          <Stack.Screen
            name={APP_ROUTES.MODAL.DOC_DETAIL_VIEW}
            component={DocumentDetailViewModal}
            options={{ animation: 'fade_from_bottom' }}
          />
          <Stack.Screen
            name={APP_ROUTES.MODAL.DOC_DETAIL_EDIT}
            component={DocumentDetailEditModal}
            options={{ animation: 'slide_from_left' }}
          />
        </>
      );
    }
  }, [isSignIn, isSigningIn, isSigningUp]);

  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'none',
        headerShown: false,
      }}
    >
      {renderScreen()}
    </Stack.Navigator>
  );
};

export default RootScreen;
