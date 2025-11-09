# RVLoader Setup

This table outlines the directory structure RVLoader uses on your MicroSD card.

| Path         | Content Type      | Description                                  |
|--------------|-------------------|----------------------------------------------|
| `/games/`    | GameCube games    | Each game in its own subdirectory with game.iso |
| `/wbfs/`     | Wii games         | WBFS format files (can be in subdirectories) |
| `/apps/`     | Homebrew apps     | Folders containing DOL/ELF files             |
| `/vc/`       | Virtual Console   | WAD files for Virtual Console titles         |
| `/channels/` | Wii Channels      | WAD files for Wii channels                   |
| `/rvloader/` | RVLoader data     | Configuration, themes, covers, etc.          |
| `/wmemu/`    | GC2Wiimote data   | GC2Wiimote configuration files               |

## RVLoader Configuration

RVLoader is a versatile software made to accommodate many different portable Wii builds. Because of this, there are a few options to configure for the optimal setup on the Xii-Boy Ultra. All settings should be applied only when all parts are assembled and connected, as certain menus only display when their respective parts are detected.

### Fan Calibration

The fan must be calibrated to run quietly and efficiently.

1.  Boot into the RVLoader menu and go to the `Settings` section using the right joystick.
2.  Navigate to the `Power` section and under `Fan` select `Run calibration`.
3.  Follow the directions on screen and do not cover the fan intake or exhaust while it is running.

After the calibration is complete, adjust the following values in the `Fan` setting under the `Power` section:

* **Target temperature:** `50.0 °C`
* **PID kP:** `4.0000`
* **PID kI:** `0.1200`
* **PID kD:** `0.5000`

### Games

:::danger Legal Notice
Neither RVLoader nor the Xii-Labs condone piracy! All games must be dumped using an untrimmed, homebrewed Wii. A guide for this can be found here: [https://wii.hacks.guide/dump-games.html](https://wii.hacks.guide/dump-games.html)
:::

RVLoader currently supports running GameCube games through Nintendont and Wii + Wii Virtual Console games through Hiidra. All these games are easily accessible in the RVLoader menu.

To access the files on the Xii-Boy Ultra’s MicroSD card, power off the portable. Then, connect it to a computer using a USB-C cable.

:::tip Cable Compatibility
A USB-C to USB-C cable often will not work; try a USB-A to USB-C cable instead.
:::