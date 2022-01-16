import {ColorSchemeName} from 'react-native';
import {BottomNotificationConfig} from '../../components/modal/bottom-notification/BottomNotification';
import {OnGoingProcessMessages} from '../../components/modal/ongoing-process/OngoingProcess';
import {Network} from '../../constants';
import {NavScreenParams, RootStackParamList} from '../../Root';
import {AppIdentity} from './app.models';

export enum AppActionTypes {
  SUCCESS_APP_INIT = 'APP/SUCCESS_APP_INIT',
  FAILED_APP_INIT = 'APP/FAILED_APP_INIT',
  SET_INTRO_COMPLETED = 'APP/SET_INTRO_COMPLETED',
  SET_ONBOARDING_COMPLETED = 'APP/SET_ONBOARDING_COMPLETED',
  SHOW_ONGOING_PROCESS_MODAL = 'APP/SHOW_ONGOING_PROCESS_MODAL',
  DISMISS_ONGOING_PROCESS_MODAL = 'APP/DISMISS_ONGOING_PROCESS_MODAL',
  SHOW_BOTTOM_NOTIFICATION_MODAL = 'APP/SHOW_BOTTOM_NOTIFICATION_MODAL',
  DISMISS_BOTTOM_NOTIFICATION_MODAL = 'APP/DISMISS_BOTTOM_NOTIFICATION_MODAL',
  SET_COLOR_SCHEME = 'APP/SET_COLOR_SCHEME',
  SET_CURRENT_ROUTE = 'APP/SET_CURRENT_ROUTE',
  SUCCESS_GENERATE_APP_IDENTITY = 'APP/SUCCESS_GENERATE_APP_IDENTITY',
  FAILED_GENERATE_APP_IDENTITY = 'APP/FAILED_GENERATE_APP_IDENTITY',
  SET_NOTIFICATIONS_ACCEPTED = 'APP/SET_NOTIFICATIONS_ACCEPTED',
  SHOW_ONBOARDING_FINISH_MODAL = 'APP/SHOW_ONBOARDING_FINISH_MODAL',
  DISMISS_ONBOARDING_FINISH_MODAL = 'APP/DISMISS_ONBOARDING_FINISH_MODAL',
}

interface SuccessAppInit {
  type: typeof AppActionTypes.SUCCESS_APP_INIT;
}

interface FailedAppInit {
  type: typeof AppActionTypes.FAILED_APP_INIT;
}

interface SetIntroCompleted {
  type: typeof AppActionTypes.SET_INTRO_COMPLETED;
}

interface SetOnboardingCompleted {
  type: typeof AppActionTypes.SET_ONBOARDING_COMPLETED;
}

interface ShowOnGoingProcessModal {
  type: typeof AppActionTypes.SHOW_ONGOING_PROCESS_MODAL;
  payload: OnGoingProcessMessages;
}

interface DismissOnGoingProcessModal {
  type: typeof AppActionTypes.DISMISS_ONGOING_PROCESS_MODAL;
}

interface ShowBottomNotificationModal {
  type: typeof AppActionTypes.SHOW_BOTTOM_NOTIFICATION_MODAL;
  payload: BottomNotificationConfig;
}

interface DismissBottomNotificationModal {
  type: typeof AppActionTypes.DISMISS_BOTTOM_NOTIFICATION_MODAL;
}

interface SetColorScheme {
  type: typeof AppActionTypes.SET_COLOR_SCHEME;
  payload: ColorSchemeName;
}

interface SetCurrentRoute {
  type: typeof AppActionTypes.SET_CURRENT_ROUTE;
  payload: [keyof RootStackParamList, NavScreenParams];
}

interface SuccessGenerateAppIdentity {
  type: typeof AppActionTypes.SUCCESS_GENERATE_APP_IDENTITY;
  payload: {network: Network; identity: AppIdentity};
}

interface FailedGenerateAppIdentity {
  type: typeof AppActionTypes.FAILED_GENERATE_APP_IDENTITY;
}

interface SetNotificationsAccepted {
  type: typeof AppActionTypes.SET_NOTIFICATIONS_ACCEPTED;
  payload: boolean;
}

interface ShowOnboardingFinishModal {
  type: typeof AppActionTypes.SHOW_ONBOARDING_FINISH_MODAL;
}

interface DismissOnboardingFinishModal {
  type: typeof AppActionTypes.DISMISS_ONBOARDING_FINISH_MODAL;
}

export type AppActionType =
  | SuccessAppInit
  | FailedAppInit
  | SetIntroCompleted
  | SetOnboardingCompleted
  | ShowOnGoingProcessModal
  | DismissOnGoingProcessModal
  | ShowBottomNotificationModal
  | DismissBottomNotificationModal
  | SetColorScheme
  | SetCurrentRoute
  | SuccessGenerateAppIdentity
  | FailedGenerateAppIdentity
  | SetNotificationsAccepted
  | ShowOnboardingFinishModal
  | DismissOnboardingFinishModal;
