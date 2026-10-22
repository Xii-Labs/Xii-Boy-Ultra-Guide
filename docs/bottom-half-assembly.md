# Bottom Half Assembly

## Joystick Trigger Modification

:::danger Important
This trigger mod is **only** compatible with a specific revision of 3rd party joysticks. **OEM and Hall sticks are not compatible and will not work**. Use the included joysticks in the **Xii-Boy Ultra Kit**.
:::

1.  Retrieve a joystick from **Bag G2**. Grip the joystick head with pliers and carefully rotate it `90°` counterclockwise. Keep the pliers as flat as possible. The stick should detach from the mechanism. Dispose of the joystick head. Sometimes, the stick may break during removal, leaving a bit of plastic inside the base of the mechanism. This is not a major issue, the plastic can be removed later, but it can be quite difficult. 

<ImageCarousel step="bottom-half-assembly/joycon-trigger-mod-break" />

2.  Remove the back metal cover from the joystick assembly. There are four clips, use an **X-ACTO blade** to slightly bend the three small clips. The metal plate will then detach. Be careful not to lose any small parts.

<ImageCarousel step="bottom-half-assembly/joycon-trigger-mod-open" />

3.  On the FPC, carefully peel off the button using an **X-ACTO blade**. The button consists of an adhesive sticker with a small metal dome.

<ImageCarousel step="bottom-half-assembly/joycon-trigger-mod-button" />

4.  If part of the joystick head broke inside the mechanism, remove the small white mechanical parts from the top section to clear the area. Then, use two pliers to remove the remaining part of the plastic head.

<ImageCarousel step="bottom-half-assembly/joycon-trigger-mod-plastic" />

5.  Reassemble the joystick in the same way as before. Then install the 3D printed trigger by pressing the trigger down firmly from the top until it clicks into place.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe
    src="https://www.youtube.com/embed/MpkQuF2u9gk"
    title="Joycon Trigger Mod"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>

6.  Test the trigger to ensure it moves smoothly. If the movement is rough, remove the 3D printed trigger. Then, use a lighter for a moment by the bottom of the trigger. Insert it and repeat until the mechanism feels nice.

7.  Repeat the process for the second trigger.

## Lower Layer

### Heatsink & Fan Installation

1.  Retrieve the heatsink and fan from **Bag B2**. Before installation, inspect the heatsink base and fan for any dust or debris. Use a clean, dry cloth to gently remove any particles.

2.  Position the heatsink and fan over the designated area in the bottom shell, with the fan's cable facing the USB-C port and the top of the shell. **Align the heatsink so its fins and arches match the shell’s arches.**

3.  Once aligned, firmly press the assembly down to ensure it makes full contact with the shell. Both the heatsink and fan should be seated evenly without rocking. Route the cable through the small notch in the shell.

<ImageCarousel step="bottom-half-assembly/heatsink-fan-install" />

### Trigger PCB (XBU-005)

1.  Retrieve the RZ and LZ bumper buttons from **Bag G4**. Place the RZ and LZ bumper buttons.

<ImageCarousel step="bottom-half-assembly/rz-lz-buttons" />

:::danger Important
GUIDE NEEDS UPDATED - PLACE WIFI ANTENNAS (STEP 8) BEFORE FASTENING THE TRIGGER PCB BOARD
:::


2.  Connect the two modified Joy-Con Joystick Triggers to the Trigger PCB ZIF connectors.

<ImageCarousel step="bottom-half-assembly/triggers-connect" />

3.  Align the Trigger PCB and triggers with their respective screw posts. Fasten the Trigger PCB with five `4mm` Phillips screws from **Bag G3**, and fasten the triggers with two `4mm` Phillips screws each.

<ImageCarousel step="bottom-half-assembly/trigger-pcb-install" />

:::info
The ribbon cables on the triggers will need to be bent in order to fit properly.
:::

4.  Unlock the 8 Pin ZIF Connector on the Trigger PCB labeled “To Main PCB”. Retrieve the 8 Pin FFC from **Bag G5**. Insert the 8 Pin FFC and lock the connector. Bend the cable so that it is facing straight up - 90° from the connector.

<ImageCarousel step="bottom-half-assembly/trigger-pcb-zif" />

### Copper Heat Spreader

1.  Apply Arctic MX-4 thermal paste to the heat sink in an “X” shape. Apply more than what is pictured, but not so much it overflows.

<ImageCarousel step="bottom-half-assembly/thermal-paste" />

2.  Retrieve the copper plate from **Bag B2**. Firmly place the `30mm x 55mm x 1mm` copper plate over the heat sink and fan.

<ImageCarousel step="bottom-half-assembly/copper-plate" />

### Placing & Routing WiFi Antennas

1.  Retrieve the Wi-Fi antennas from **Bag B1**. Remove the white adhesive strips from the two black Wi-Fi antennas and place them as pictured. Wrap each of the wires twice around the upper right screw post.

<ImageCarousel step="bottom-half-assembly/antenna-place" />

### Side Buttons

1.  Retrieve the clear light pipe from **Bag B4**. Take the clear light pipe and a pair of pliers. Position the light pipe at the top of the shell on the left of the power button hole. Carefully use the pliers to push the pipe into place. Do not apply too much force, as this could crack the shell easily.

<ImageCarousel step="bottom-half-assembly/light-pipe" />

2. Retrieve the Power and Bluetooth Sync buttons from **Bag G4**. Place the `Power` (closest to the light pipe) and `Bluetooth Sync` (closest to the corner) buttons in their slots. Each button has a notch, so note the orientation. A small piece of tape can be used to keep them in place.

<ImageCarousel step="bottom-half-assembly/power-bluetooth-buttons" />

3. Retrieve the Brightness and Volume rockers from **Bag G4**. Place the `Brightness` and `Volume` rockers into their slots. Each rocker has a notch, so note the orientation. A small piece of tape can be used to keep them there. 

<ImageCarousel step="bottom-half-assembly/volume-brightness-rockers" />

### Main PCB Preparation

1. Take the Bluetooth module that was retrieved from the Wii’s PCB and insert it into the gray connector on the bottom of the **Main PCB**. The module should have a small cushion to keep it adhered to the **Main PCB**. If the cushion ripped or is missing, a strip of double sided tape works instead.

<ImageCarousel step="bottom-half-assembly/bluetooth-module" />

2.  Take the Wi-Fi module that was retrieved from the Wii’s PCB and attach the Wi-Fi antenna connectors. Insert the Wi-Fi connector into the white connector on the bottom of the **Main PCB**. Ensure the Wi-Fi antenna cables are facing toward the top of the shell.

<ImageCarousel step="bottom-half-assembly/wifi-module" />


## Upper Layer

### Main PCB (XBU-001)

1.  Insert the **Main PCB** into the shell at a `45°` angle. The USB-C port and Headphone Jack will slot nicely into place. While lowering the PCB, ensure the Trigger PCB flex cable and Fan PicoLock (not pictured) pass into the Upper Layer.

<ImageCarousel step="bottom-half-assembly/main-pcb-place" />

2.  If everything was performed properly, the **Main PCB** will sit flat against the shell. If not, lift it and try again, ensuring no cables were pinched underneath. Then, screw nine `4mm` Phillips screws from **Bag G3** into place.

<ImageCarousel step="bottom-half-assembly/main-pcb-install" />

3.  Pull directly up and remove the tape covering the `Power`, `BT Sync`, `Brightness`, and `Volume` buttons.

<ImageCarousel step="bottom-half-assembly/tape-removal" />

4.  Unlock the 8 Pin **Trigger PCB ZIF connector**. Bend the FFC as pictured and insert it into the ZIF connector. Lock the connector, and bend the cable over the **RVL-PMS2**.

<ImageCarousel step="bottom-half-assembly/main-pcb-trigger-zif" />

5.  Connect the Fan’s male PicoLock connector to the **Main PCB’s Female connector** located in the upper left corner of the board. Tuck the excess cable to the side so it avoids the copper plate.

<ImageCarousel step="bottom-half-assembly/fan-connect" />

### Finishing Bottom Half

1.  Retrieve the 40p Shielded FFC from **Bag B6**. Take the **40p Shielded FFC (XBU-007)** and bend the tips of the stiffener. Note the orientation, as the flex can only be installed one way. **If it is inserted in the incorrect orientation, it will cause a short between 3.3v and GND.**

<ImageCarousel step="bottom-half-assembly/shielded-ffc" />

2.  Unlock the 40 Pin Xii-DD ZIF connector. Bend the FFC as pictured and insert it into the ZIF connector. Lock the connector.

<ImageCarousel step="bottom-half-assembly/shielded-ffc-install" />

3.  Apply a few drops of 91% isopropyl alcohol onto the copper plate. A Q-Tip can then be used to wipe it up and clean off the surface. Repeat for the Hollywood and Broadway chips on the Wii’s PCB.

<ImageCarousel step="bottom-half-assembly/copper-clean" />

4.  Check the voltages of both **18650 battery cells** with a multimeter. Ensure they are within ~0.1v of each other. Insert each of the batteries into the holders at the bottom of the shell, noting the orientation (+ on the left and - on the right). Check that there is a solid connection between the battery terminals and the Main PCB battery tabs.

<ImageCarousel step="bottom-half-assembly/18650-install" />

:::danger IMPORTANT: Battery Safety
The orientation of the batteries is crucial, inserting them backwards can cause permanent damage to the RVL-PMS2 and the rest of the **Xii-Boy Ultra**. Connecting two batteries in parallel at drastically different voltages can cause a fire in the worst case scenario, and damage the battery capacity at best. If the batteries are not within ~0.1v of each other, charge one until it is equivalent.
:::

5. Apply thermal paste to the copper plate in two `X` shapes. One large `X` for Hollywood, and a smaller `X` for Broadway.

<ImageCarousel step="bottom-half-assembly/thermal-paste-install" />

6. Unlock the **50 Pin Xii-Flex Ultra ZIF connector**. Insert the **Xii-Flex Ultra** into the ZIF connector and lock it.

<ImageCarousel step="bottom-half-assembly/xii-flex-ultra-install" />

7. Insert the **PicoLock power connector** into the **Main PCB** and the **Xii-Strip**.

:::info
This is not pictured, as it was added in a later revision. It replaces the pogo pins in the images.
:::

8.  Fold the Wii over the copper plate and press down firmly to spread the thermal paste. Align the screw holes on the Wii with the three screw posts on the bottom shell. Use three silver `7.3mm` Phillips screws from the Wii’s motherboard cover ([https://www.ifixit.com/Guide/Nintendo+Wii+Heat+Sink+Replacement/3458#s16575](https://www.ifixit.com/Guide/Nintendo+Wii+Heat+Sink+Replacement/3458#s16575)) to fasten the trimmed Wii in place.

<ImageCarousel step="bottom-half-assembly/wii-board-install" />

9. Unlock the 40 Pin Main PCB ZIF connector on the Xii-DD PCB. Insert the 40 Pin Shielded FFC and lock the connector.

<ImageCarousel step="bottom-half-assembly/xii-dd-shielded-zif" />

10. Close both halves and connect them with six `6mm` Phillips screws from **Bag G3**. The screwholes in the bottom shell are recessed, so a screwdriver with a long tip is required.

**The Xii-Boy Ultra Assembly is now complete. Proceed to RVLoader setup.**
