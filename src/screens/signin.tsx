import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {popupScreenOptions} from '@app/helpers';

import {OnboardingBiometryScreen} from './onboarding-biometry';
import {OnboardingFinishScreen} from './onboarding-finish';
import {OnboardingRepeatPinScreen} from './onboarding-repeat-pin';
import {OnboardingSetupPinScreen} from './onboarding-setup-pin';
import {SignInAgreementScreen} from './signin-agreement';
import {SignInRestoreScreen} from './signin-restore-wallet';
import {SigninStoreWalletScreen} from './signin-store-wallet';

import {ScreenOptionType} from '../types';

const SignInStack = createStackNavigator();

const screenOptions: ScreenOptionType = {
  title: '',
  headerBackHidden: true,
};

export const SignInScreen = () => {
  const title = 'Recovery account';
  return (
    <SignInStack.Navigator screenOptions={popupScreenOptions}>
      <SignInStack.Screen
        name="signinAgreement"
        component={SignInAgreementScreen}
        options={{title}}
        initialParams={{
          nextScreen: 'signinRestoreWallet',
        }}
      />
      <SignInStack.Screen
        name="signinRestoreWallet"
        component={SignInRestoreScreen}
        options={{title}}
        initialParams={{
          nextScreen: 'onboardingSetupPin',
        }}
      />
      <SignInStack.Screen
        name="onboardingSetupPin"
        component={OnboardingSetupPinScreen}
        options={{title}}
      />
      <SignInStack.Screen
        name="onboardingRepeatPin"
        component={OnboardingRepeatPinScreen}
        options={{title}}
        initialParams={{nextScreen: 'signinStoreWallet'}}
      />
      <SignInStack.Screen
        name="onboardingBiometry"
        component={OnboardingBiometryScreen}
        options={screenOptions}
        initialParams={{nextScreen: 'signinStoreWallet'}}
      />
      <SignInStack.Screen
        name="signinStoreWallet"
        component={SigninStoreWalletScreen}
        options={screenOptions}
        initialParams={{action: 'restore'}}
      />
      <SignInStack.Screen
        name="onboardingFinish"
        component={OnboardingFinishScreen}
        options={screenOptions}
        initialParams={{action: 'restore'}}
      />
    </SignInStack.Navigator>
  );
};
