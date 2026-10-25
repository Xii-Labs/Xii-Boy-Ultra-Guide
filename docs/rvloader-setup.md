# RVLoader Setup

This table outlines the directory structure RVLoader uses on the MicroSD card.

| Path           | Content Type      | Description                                  |
|----------------|-------------------|----------------------------------------------|
| `/games/`      | GameCube games    | Each game in its own subdirectory with game.iso |
| `/wbfs/`       | Wii games         | WBFS format files (can be in subdirectories) |
| `/apps/`       | Homebrew apps     | Folders containing DOL/ELF files             |
| `/vc/`         | Virtual Console   | WAD files for Virtual Console titles         |
| `/channels/`   | Wii Channels      | WAD files for Wii channels                   |
| `/rvloader/`   | RVLoader data     | Configuration, themes, covers, etc.          |
| `/wmemu/`      | GC2Wiimote data   | GC2Wiimote configuration files               |
| `LCDDriver.bit`| RVL-DD Bitstream  | FPGA bitstream required for RVL-DD functionality|

## RVLoader Configuration

RVLoader is designed to support a wide range of portable Wii builds. Because of this flexibility, several settings must be configured to achieve optimal setup on the Xii-Boy Ultra. These settings should only be adjusted after all hardware components are fully assembled and connected, since some configuration menus appear only when the corresponding hardware is detected.

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
Neither RVLoader nor Xii-Labs condones piracy! All games must be dumped using an untrimmed, homebrewed Wii. A guide for this can be found here: [https://wii.hacks.guide/dump-games.html](https://wii.hacks.guide/dump-games.html)
:::

RVLoader currently supports running GameCube games through Nintendont and Wii + Wii Virtual Console games through Hiidra. All these games are easily accessible in the RVLoader menu.

To access the files on the **Xii-Boy Ultra’s MicroSD card**, power off the portable. Then, connect it to a computer using a USB-C cable.

:::tip Cable Compatibility
A USB-C to USB-C cable is not supported by the PMS-PD3, use a USB-A to USB-C cable instead.
:::

#### Adding GameCube Games

GameCube games must be in `.iso` format. Games ending in `.rvz` and `.nkit.iso` are not supported.

1.  Open the `games` folder in the root of the drive. Create the folder if it isn’t already there.
2.  Inside `/games/` create one subfolder per title. The folder name can be anything, but including the game name is helpful.
3.  Put the game’s image file inside that subfolder and name it `game.iso`. If the game has two discs, add the second as `disc2.iso`. **The file naming is crucial, a different name will cause the game to not display.**

The next time RVLoader is booted, the GameCube games should appear under the GameCube section of the menu.

#### Adding Wii Games

Wii games must be in `.wbfs` format. Games ending in `.rvz` and `.nkit.iso` are not supported.

1.  Open the `wbfs` folder in the root of the drive. Create the folder if it isn’t already there.
2.  Inside `/wbfs/` create one subfolder per title. The folder name can be anything, but including the game name is helpful.
3.  Put the game’s `.wbfs` image file inside that subfolder and name it. Each game file can be named anything, but it must end in `.wbfs`.

The next time RVLoader is booted, the Wii games should appear under the Wii section of the menu.  

#### Adding Homebrew Apps

1.  Open the `apps` folder in the root of the drive.
2.  Inside `/apps/` create one subfolder per homebrew title.
3.  Put the homebrew’s .dol or .elf file inside that subfolder.
4.  (Optional) Add icon files (icon.png, meta.xml) in the same subfolder to show icons in RVLoader.

The next time RVLoader is booted, the homebrew apps should appear under the Homebrew section of the menu. 

#### Adding Virtual Console / WiiWare Titles

1.  Open the `vc` folder in the root of the drive. Create the folder if it isn’t already there.
2.  Inside `/vc/` place the Virtual Console or WiiWare `.wad` files.

The next time RVLoader is booted, the Virtual Console/WiiWare titles should appear under their respective sections in the menu.  

### Covers and Themes

Cover art can be retrieved from a site like GameTDB. A `.zip` pack with all Wii and GameCube game covers is available for download [here](https://www.gametdb.com/Wii/downloads). Place the covers in `/rvloader/covers/` on the MicroSD card.

Custom themes can also be installed. Refer to [Cy's BitBuilt Post](https://bitbuilt.net/forums/threads/switching-from-themes-to-backgrounds.6784/) for more details.
