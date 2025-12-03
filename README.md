# Instruments App

This app displays two instruments: a **Piano** and **Guitar**.  
It has been created with [Expo](https://expo.dev/) and [React Native](https://reactnative.dev/), and uses [expo-router](https://docs.expo.dev/versions/latest/sdk/router/) for navigation.

---

## Getting started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm run start
   ```
In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Folder Structure

This list contains the main folders for the project.

- App -> contains all pages
   - (tabs) -> contains **Piano** and **Guitar** pages. Read more about the [(tabs) folder in the Expo Router docs.](https://docs.expo.dev/router/advanced/tabs/)

 - Index -> redirects the root route / to the Piano screen (/Piano).

- +not-found -> custom **“Page Not Found”** screen, with a link back to the Piano page.

- Components
   - Piano.tsx -> main Piano layout (renders white and black keys).
   - WhiteKey.tsx -> individual white piano key component.
   - BlackKey.tsx -> individual black piano key component.
   - Guitar.tsx -> guitar neck and touch handling (frets, markers, string layout).
   - GuitarStrings.tsx -> individual guitar string component, exposes a pluck() method via ref.

- Helpers
   -audio.ts -> helper functions for loading piano and guitar audio samples.
   - notes/** -> audio files:
      - notes/piano/*.mp3 for piano notes (e.g. C4.mp3, Db4.mp3, etc.)
      - notes/guitar/*.m4a for guitar chords (e.g. ChordAm.m4a, ChordC.m4a, etc.)

- Hooks
   -useOrientation -> Hook to get the current app orientation.
      Used to prevent the Guitar view from displaying in portrait – instead it shows a message asking the user to rotate the device to landscape.

## Contribution Rules

### Icons
All icons added should come from the [expo official repositories](https://icons.expo.fyi/Index).

### Coding Style
All React components should be declared as follows:

File Name: WhiteKey.tsx
```
export default function WhiteKey(props: WhiteKeyProps) {
  const { /* props here */ } = props;
  /***
   * Rest of code
   */
}
```
- Use export default
- Use a function component
- Use PascalCase naming convention for components
- Declare props type through an interface named <ComponentName>Props
- The file should share the same name as the component
- All other code is generally written in camelCase, except where an imported package requires different casing.

## Writing New Code
- New pages must go in the (tabs) folder.
- Place components and hooks in their respective folders.
- New helper functions may be added to the appropriate helper file (e.g. helpers/audio.ts) and exported for use elsewhere.
- New audio files should be placed under helpers/notes/piano or helpers/notes/guitar, and wired up in audio.ts.

## Dependencies 
Apart from React Native and Expo dependencies, the app also relies on:
- expo-router – file-based routing and navigation
- expo-screen-orientation – orientation locking and detection
- expo-audio – audio playback for notes and chords
@expo/vector-icons – icons for the tab bar and UI