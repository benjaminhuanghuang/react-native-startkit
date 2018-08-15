# React Native Startkit project

## Reference
- React Native Tutorial (https://www.youtube.com/watch?v=FUdy4PHIbww)
- QQ Login https://github.com/BrokerXu/QQLogin

## Steps
- https://facebook.github.io/react-native/docs/getting-started.html
- https://www.youtube.com/watch?v=yOAWwyp-vZ0&t=178s

Project with native node
```
brew install node
brew install watchman

npm  i -g react-native-cli
react-native init myApp
sudo sysctl -w kern.maxfiles=5242880

react-native run-ios
react-native run-android
```
or quick start with Expo
```
npm  i -g create-react-native-app
create-react-native-app myApp

npm run ios
npm run android
```
Setup for android:
Go to the android/ directory of your react-native project
Create a file called local.properties with this line:
```
sdk.dir = /Users/USERNAME/Library/Android/sdk
```
Use SDK Manager in Android Studio to install Android SDK

Create virtual device by using AVD Manager in Android Studio