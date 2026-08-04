# Castellated Module Install

There are five Castellated Modules in the Xii-Boy Ultra, and they function as the backbone of the entire project. The boards power, process and interact with everything from the USB-C port to the batteries and to the display. These boards come separately, and need to be soldered directly to Xii-Boy Ultra's carrier PCBs, which keep the entire project modular and wire-free.

<ImageCarousel step="castellated-module-install/4lt-modules" />

## Xii-DD PCB (XBU-002)

<!-- TODO: Images images images -->

1.  Retrieve the Xii-DD PCB from **Bag T2**.

<!-- Should we mention retrieving the Direct Drive module? -->

2.  Align the Direct Drive module over Xii-DD, ensuring each castellated edge on the Direct Drive module is centered on the pads of Xii-DD.

3.  Refer to [General Soldering](https://xbu-guide.me/microsoldering-methods#general-soldering) and begin by applying flux to all pads. Solder pads `SCW` on the right, and `GND` on the bottom to ensure the Direct Drive module does not move from this point on.

4.  Solder the rest of the pads on the bottom side of Xii-DD starting with `3.3V` and finishing with `CK`. Then solder the pads on the right, starting at `V1` and working up to `V7`. Check for shorts before continuing.

<ImageCarousel step="castellated-module-install/xii-dd" />

## Controller PCB (XBU-003)

<!-- These are a bit repetitive, but I'll add more specific details once images are added for each step -->

1.  Retrieve the Controller PCB from **Bag T4**.

2.  Align GC+2.0 over the Controller PCB, ensuring each castellated edge on GC+2.0 is centered on the pads of the Controller PCB.

3.  Refer to [General Soldering](https://xbu-guide.me/microsoldering-methods#general-soldering) and begin by applying flux to all pads and soldering pad `A` on the left, and `M-` on the top to ensure GC+2.0 does not move from this point on.

4.  Solder the rest of the pads on the left side of the Controller PCB starting with `B` and finishing with `GND`. Then solder the pads on the top, starting at `M+` and working over to `CY`. Finally, solder the right side pads starting with `L` and working up to `D`. Check for shorts before continuing.

<ImageCarousel step="castellated-module-install/controller-pcb" />

## Main PCB (XBU-001)

<!-- Again with repetitiveness. This bit might end up being a bit long, so let me know whether you want me to describe each castellated module or just leave it as is and add pictures -->

1.  Retrieve the Main PCB from **Bag B5**.

2.  Align each Castellated Module over the Main PCB, ensuring each castellated edge is centered on the pads of the Main PCB.

3.  Refer to [General Soldering](https://xbu-guide.me/microsoldering-methods#general-soldering) and begin by applying flux to all pads and soldering two securing pads on each Castellated Module to keep it in place.

4.  Solder the rest of the pads sequentially, following the direction your soldering iron is leaning. Check for shorts before continuing.

<ImageCarousel step="castellated-module-install/main-pcb" />