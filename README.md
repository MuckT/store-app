# store-app

## Development Setup

Review and follow the setup guide for your operating system at [Setting up the development environment](https://reactnative.dev/docs/environment-setup).
## Repository Setup

```sh
yarn install
```

### Mac

1. Download and install Xcode
2. Install Pods

```sh
# Install pods
cd ios && pod install
```

### Android

- Download and install Android Studio
- Ensure you have an emulator with API >= 21
## Launching the App

```sh
# Start the packager
yarn start

# In another terminal 
# Start the app for iOS or Android
yarn ios
yarn android
```

### Sources

[Setting up the development environment](https://reactnative.dev/docs/environment-setup)

[Redux Toolkit Quick Start](https://redux-toolkit.js.org/tutorials/quick-start)

[Getting an error "A non-serializable value was detected in the state" when using redux toolkit - but NOT with normal redux](https://stackoverflow.com/a/63244831/7967484)