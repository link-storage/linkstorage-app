export const APP_ROUTES = {
  SCREEN: {
    HOME: 'HomeScreen',
    CREATE_FILE: 'CreateFileScreen',
    CREATE_FOLDER: 'CreateFolderScreen',
    FEED: 'FeedScreen',
    FOLDER: 'FolderScreen',
    PROFILE: 'ProfileScreen',
    WELCOME: 'WelcomeScreen',
    SETTING: 'SettingScreen',
    CHAT_LIST: 'ChatListScreen',
    CHAT_DETAIL: 'ChatDetailScreen',
    LOADING: 'LoadingScreen',
    NOTI_LIST: 'NotiListScreen',
    USER: 'UserScreen',
    SIGN: 'SignScreen',
    WORKSPACE: 'WorkspaceScreen',
    RECENT_DOC_LIST: 'RecentDocListScreen',
    SEARCH: 'SearchScreen'
  },
  MODAL: {
    PROFILE_SETTING: 'ProfileSettingModal',
    LANG_SETTING: 'LangSettingModal',
    APP_SETTING: 'AppSettingModal',
    DOC_DETAIL_VIEW: 'DocDetailViewModal',
    DOC_DETAIL_EDIT: 'DocDetailEditModal',
    NOTI_SETTING: 'NotiSettingModal',
  }
} as const;

export type StackParamList = {
  [APP_ROUTES.SCREEN.HOME]: undefined;
  [APP_ROUTES.SCREEN.CREATE_FILE]: undefined;
  [APP_ROUTES.SCREEN.CREATE_FOLDER]: undefined;
  [APP_ROUTES.SCREEN.FEED]: undefined;
  [APP_ROUTES.SCREEN.FOLDER]: {
    id: string;
  };
  [APP_ROUTES.SCREEN.PROFILE]: undefined;
  [APP_ROUTES.SCREEN.WELCOME]: {
    id: string;
  };
  [APP_ROUTES.SCREEN.SETTING]: undefined;
  [APP_ROUTES.SCREEN.CHAT_LIST]: undefined;
  [APP_ROUTES.SCREEN.CHAT_DETAIL]: {
    id: string;
  };
  [APP_ROUTES.SCREEN.LOADING]: undefined;
  [APP_ROUTES.SCREEN.NOTI_LIST]: undefined;
  [APP_ROUTES.SCREEN.USER]: {
    id: string;
  };
  [APP_ROUTES.SCREEN.SIGN]: undefined;
  [APP_ROUTES.SCREEN.WORKSPACE]: undefined;
  [APP_ROUTES.SCREEN.RECENT_DOC_LIST]: undefined;
  [APP_ROUTES.SCREEN.SEARCH]: {
    id: string;
  };
  [APP_ROUTES.MODAL.PROFILE_SETTING]: undefined;
  [APP_ROUTES.MODAL.LANG_SETTING]: undefined;
  [APP_ROUTES.MODAL.APP_SETTING]: undefined;
  [APP_ROUTES.MODAL.DOC_DETAIL_VIEW]: {
    id: string;
  };
  [APP_ROUTES.MODAL.DOC_DETAIL_EDIT]: {
    id: string;
  };
  [APP_ROUTES.MODAL.NOTI_SETTING]: undefined;
}