# Expo React Native Template

Universal template supporting iOS, Android, and Web.

## What's Included

-  TypeScript
-  Expo SDK
-  React Navigation
-  Zustand (State Management)
-  React Query (Data Fetching)
-  Axios (HTTP Client)
-  AsyncStorage
-  **iOS + Android + Web Support**

## Prerequisites

1. [Node.js](https://nodejs.org/) (LTS)
2. [Expo CLI](https://docs.expo.dev/get-started/installation/)
3. Expo Go app on your phone (for testing)

## Setup

```bash
  npm install
```

## Development

```bash
  # Start development server
npx expo start

# Run on Android emulator
npx expo run:android

# Run on iOS simulator (Mac only for local)
npx expo run:ios

# Run on physical device
# Scan QR code with Expo Go app
```

## Building for Production

```bash
  # Install EAS CLI
npm install -g eas-cli

# Configure EAS
eas build:configure

# Build for iOS (no Mac required!)
eas build --platform ios

# Build for Android
eas build --platform android

# Build for both
eas build --platform all
```


## Project Structure

```text
src/
├── config/          # Environment configuration
├── navigation/      # Navigation setup
├── screens/         # Screen components
├── services/        # API, storage
│   ├── api/
│   └── storage/
├── hooks/           # Custom hooks
├── utils/           # Utilities
├── types/           # TypeScript types
└── theme/           # Styling
```

## Environment Variables

Edit `app.json` → `extra` section:

```json
"extra": {
  "apiUrl": "https://your-api.com"
}
```