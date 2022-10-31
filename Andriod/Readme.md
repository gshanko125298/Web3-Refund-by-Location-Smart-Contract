# Android
https://developer.android.com/topic/libraries/architecture
# Android Emulator
The Android Emulator simulates Android devices on your computer so that you can test your application on a variety of devices and Android API levels without needing to have each physical device. The emulator offers these advantages:

      Flexibility: In addition to being able to simulate a variety of devices and Android API levels, the emulator comes with predefined configurations for various Android phone, tablet, Wear OS, and Android TV devices.

      High fidelity: The emulator provides almost all of the capabilities of a real Android device. You can simulate incoming phone calls and text messages, specify the location of the device, simulate different network speeds, simulate rotation and other hardware sensors, access the Google Play Store, and much more.

      Speed: Testing your app on the emulator is in some ways faster and easier than doing so on a physical device. For example, you can transfer data faster to the emulator than to a device connected over USB.

In most cases, the emulator is the best options for your testing needs. This page covers the core emulator functionalities and how to get started with it.

Alternatively, you can deploy your app to a physical device. For more information, see Run apps on a hardware device.
Get started with the emulator

The Android Emulator enables you to test your app on many different devices, virtually. The emulator comes with Android Studio by default, so you shouldn’t have to manually install it. The basic workflow with the emulator goes as follows:

      Verify that you have the system requirements.
      Create an Android Virtual Device (AVD).
      Run your app on the emulator.
      Navigate the emulator.

This page covers the steps to set up and explore your virtual testing environment in more detail. If you already have your app running on the emulator and are ready to use more advanced features, see Advanced emulator usage.

If you’re experiencing issues with the emulator, see Troubleshoot emulator. Depending on your needs and resources, it might be worth delving into system requirements and technical configurations, or it might be better to use a physical device.
Emulator system requirements

For the best experience, you should use the emulator in Android Studio on a computer with the following specs:

        16GB RAM
        64-bit Windows, macOS, Linux, or ChromeOS operating system
        16GB disk space

