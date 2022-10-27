# react-native-document-picker

🚧🚧 GH discussions available 🚧🚧

If you want to ask questions, we opened GH discussions for that purpose! 🤗 Issue tracker is now reserved for bugs and feature requests only and issues not following the issue template can be closed. Thank you!

A React Native wrapper for:

    Apple's UIDocumentPickerViewController
    Android's Intent.ACTION_GET_CONTENT
    Windows Windows.Storage.Pickers
# Installation 

    Installation
    React Native

            npm i --save react-native-document-picker

OR

            yarn add react-native-document-picker

Expo

This package is supported in Expo managed workflow through the usage of custom development clients.

        expo install react-native-document-picker

# Create a development build (provided you have expo-dev-client installed and set up)
        eas build

# Or run it locally
        expo prebuild
        expo run:ios
        expo run:android

# RN >= 0.63

If you are using RN >= 0.63, only run pod install from the ios directory. Then rebuild your project. Older RN versions are not supported.
# API
        DocumentPicker.pickMultiple(options) / 
        DocumentPicker.pickSingle(options) /
        DocumentPicker.pick(options)

⚠️ Breaking in v6: pick returns a Promise<Array<DocumentPickerResponse>> instead of Promise<DocumentPickerResponse>. If you were using pick, change those usages to pickSingle.

Use pickMultiple, pickSingle or pick to open a document picker for the user to select file(s). All methods return a Promise.
DocumentPicker.pickDirectory()

Open a system directory picker. Returns a promise that resolves to ({ uri: string }) of the directory selected by user.
DocumentPicker.pick(options) and DocumentPicker.pickMultiple(options)

      
    pick is the most universal, you can use allowMultiSelection param to control whether or not user can select multiple files (false by default). Returns a Promise<Array<DocumentPickerResponse>>
  

pickSingle and pickMultiple are "sugar functions" on top of pick, and they might be removed in a future release for increased API clarity.

    pickSingle only allows a single selection and the Promise will resolve to that single result (same behavior as pick in v5)
    pickMultiple allows multiple selection and the Promise will resolve to an array of results.

Options

All of the options are optional
allowMultiSelection:boolean

Whether selecting multiple files is allowed. For pick, this is false by default. allowMultiSelection is false for pickSingle and true for pickMultiple and cannot be overridden for those calls.
type:string|Array<string>

The type or types of documents to allow selection of. May be an array of types as single type string.

    On Android these are MIME types such as text/plain or partial MIME types such as image/*. See common MIME types.
    On iOS these must be Apple "Uniform Type Identifiers"
    If type is omitted it will be treated as */* or public.item.
