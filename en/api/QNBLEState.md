# QNBLEState

Configuration object for displaying indicators of user settings for Wsp scale.

### Enumerations

| Name         | Value | Description                                |
| :----------- | :---: | :----------------------------------------- |
| unknown      |   0   | Unknown state, called back for the first time when initializing the system Bluetooth |
| resetting    |   1   | System Bluetooth is resetting (iOS exclusive) |
| unsupported  |   2   | System does not support Bluetooth function |
| unauthorized |   3   | Unauthorized                                |
| poweredOff   |   4   | System Bluetooth is turned off              |
| poweredOn    |   5   | System Bluetooth is turned on               |