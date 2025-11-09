# Wii Preparation

## Identify the Wii’s Revision

There are several revisions of the Nintendo Wii motherboard, but for this guide, only one difference really matters: the type of processor the board uses. To build a portable Wii that runs cool and uses less power, you'll need a motherboard with the **Hollywood-1 SoC** (**S**ystem **o**n **C**hip). These are often called **“4-layer Wiis”** because the **Hollywood-1** is always paired with a **4-layer PCB** as opposed to the older revision’s **6-layer PCB**.

**The following motherboard revisions will always be a 4-layers:**

* `RVL-CPU-40`
* `RVL-CPU-50`
* `RVL-CPU-60`
* `RVK-CPU-01`
* `RVK-CPU-02`

### How to Find a 4-Layer Wii
* **Colored Wiis (Black, Blue, or Red):** Always 4-layer with Hollywood-1 or newer.
* **White Wiis:** Could be 4-layer or 6-layer, depending on when they were made.

To confirm the revision without opening the Wii, go to the **[Wii Revision Checker](https://wii-revision.netlify.app/)** website and enter the Wii’s serial number.

:::details Want to Learn More About Wii Revisions?
To learn more about all the different Wii board versions, check out the [Wiki page by Rare Gaming Dump](https://wiki.raregamingdump.ca/index.php/Wii/Board_Revisions).
:::



## Software Preparation

### SoftMod the Wii

Before proceeding, your Wii must be "softmodded" with the **Homebrew Channel**. The definitive guide for this can be found at [Wii Hacks Guide](https://wii.hacks.guide/str2hax). After the **Homebrew Channel** is installed, proceed with the instructions for **Installing RVLoader**.

### Install RVLoader

1.  Navigate to the [RVLoader GitHub page](https://github.com/Aurelio92/RVLoader) on your computer.

2.  Select the `Releases` button on the right side of the screen.

![alt text](images/rvloader/rvloader_step1-2.png)

3.  Select the `.zip` file of the latest RVLoader release.

![alt text](images/rvloader/rvloader_step3.png)

4.  Navigate to your computer’s downloads folder (**Finder** on MacOS, **File Explorer** on Windows) and double-click the `.zip` archive to extract it.

5.  A folder will be created with the same name, without the `.zip` extension. Open this folder.

![alt text](images/rvloader/rvloader_step4-5.png)

6.  Insert the **MicroSD card** into your computer (use a MicroSD to USB adapter if needed). Drag the **contents** of the `.zip` folder onto the **root directory** of the MicroSD card. 

![alt text](images/rvloader/rvloader_step6.png)

:::details MicroSD Formatting Notice
It is highly reccomended to format your MicroSD card not only with FAT32, but also 32k cluster size. If on Windows, [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) provides a simple interface to do so.
:::

7.  Eject the drive and remove it. Then insert the MicroSD card into the MicroSD to USB adapter and plug it into one of the Wii’s back USB ports.

![alt text](images/rvloader/rvloader_step7.png)

8.  Power on the Wii and navigate to the Homebrew Channel. Select `RVLoader` from the list and boot it by selecting `Load`. A screen with the question `RVLoader is not installed. Do you want to run the installer?` will be presented. Press `A` to continue, and set the configuration to `Patch out WiFi: Yes` and `Enable VGA: No`. Press `Start/Home` to run the install process.

<Carousel :images="[
  {
    src: '/images/rvloader/hbl.png',
    alt: '',
    description: ''
  },
  {
    src: '/images/rvloader/hbl_rvloader.png',
    alt: '',
    description: ''
  },
  {
    src: '/images/rvloader/rvloader_intro.png',
    alt: '',
    description: ''
  },
  {
    src: '/images/rvloader/rvloader_selection.png',
    alt: '',
    description: ''
  } 
]" />

**RVLoader** is now successfully installed, and the Wii is ready to be disassembled and trimmed.

## Dumping Wii & GameCube Games

:::warning Critical Step
Games must be dumped **before** trimming the Wii, as the **Xii-Boy Ultra** does not have a disc drive, and games are loaded from the MicroSD card.
:::

Full guides on dumping games can be found on [Wii Hacks Guide](https://wii.hacks.guide/dump-games.html) and [Dolphin's website](https://dolphin-emu.org/docs/guides/ripping-games/). To access game dumping Homebrew from the RVLoader menu, use the C-Stick to navigate to the Homebrew loader section. Wii games need to be stored as `.wbfs` files, and GameCube games need to be stored as `.iso` files. Exact file placement is addressed in [RVLoader Setup](https://xbu-guide.me/rvloader-setup).

## Disassemble the Wii

Follow a standard guide to disassemble the Wii and remove the motherboard. The iFixit guide is highly recommended.

* **iFixit Guide:** [Nintendo Wii Motherboard Replacement](https://www.ifixit.com/Guide/Nintendo+Wii+Motherboard+Replacement/3460?revisionid=HEAD)