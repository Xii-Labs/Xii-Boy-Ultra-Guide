# Assembling the Xii-Boy Ultra

<!-- TODO: Add time/difficulty ratings and a description -->

## Parts Preparation

Some off-the-shelf parts used on the **Xii-Boy Ultra** will need to be modified before they can work properly in the build.

### Joystick Triggers

:::danger Important
This trigger mod is **only** compatible with a specific revision of 3rd party joysticks. **OEM and Hall sticks are not compatible and will not work**. Use the included joysticks in the **Xii-Boy Ultra Kit**.
:::

1.  Retrieve a joystick from **Bag G2**. Grip the joystick head with pliers and carefully rotate it `90°` counterclockwise. Keep the pliers as flat as possible. The stick should detach from the mechanism. Dispose of the joystick head. Sometimes, the stick may break during removal, leaving a bit of plastic inside the base of the mechanism. This is not a major issue, the plastic can be removed later, but it can be quite difficult. 

<ImageCarousel step="portable-assembly/joycon-trigger-mod-break" />

1.  Remove the back metal cover from the joystick assembly. There are four clips, use an **X-ACTO blade** to slightly bend the three small clips. The metal plate will then detach. Be careful not to lose any small parts.

<ImageCarousel step="portable-assembly/joycon-trigger-mod-open" />

3.  On the FPC, carefully peel off the button using an **X-ACTO blade**. The button consists of an adhesive sticker with a small metal dome.

<ImageCarousel step="portable-assembly/joycon-trigger-mod-button" />

4.  If part of the joystick head broke inside the mechanism, remove the small white mechanical parts from the top section to clear the area. Then, use two pliers to remove the remaining part of the plastic head.

<ImageCarousel step="portable-assembly/joycon-trigger-mod-plastic" />

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

<!-- ### 2. Brushless Fan

1.  Peel away the sticker located on the hub of the fan.

<ImageCarousel step="portable-assembly/brushless-fan-sticker" />

2.  Desolder the red and black wires.

<ImageCarousel step="portable-assembly/brushless-fan-desolder" />

3.  Cut `62mm` worth of picolock cable (from the tip of the connector) and strip a small section at the end.

<ImageCarousel step="portable-assembly/brushless-fan-wire" />

4.  Solder the new picolock wires, noting the polarity. -->

<!-- ### 2. Rumble Motor

1.  Cut `16mm` worth of picolock cable (from the tip of the connector) and strip a small section at the end.
2.  If you have heat shrink tubing, place it over the red and blue wires now. Otherwise, electrical tape is needed after combining the wires.
3.  Solder the wires to their corresponding picolock wires. Keep the connections as flush as possible and avoid wire fraying. It is best to apply flux to both ends of the wire, put a little bit of solder on the tip of the iron, then try to spread the solder over the joint to make a solid connection.
4.  Verify the connection with a small tug on the wires, and by checking continuity with the tip of the picolock terminals.
5.  Heat the heat shrink tubing to cover the exposed wires, or use electrical tape instead. -->

## Top Half Assembly

### Installing the Display

1.  Peel off the film covering the front of the glass.
2.  Place the display into the top shell at a 45° angle. The bottom of the display should sit flat on the indent of the case, and the ribbon cable should go through to the inside.
3.  Slowly rotate the screen toward the front of the shell. At the very end, a small amount of force may be required to set the display in place. A small lip surrounds the indent, and you may hear a soft “click” as the display snaps into place.

:::info
After the click, the display will be held in by friction and the lip. It is not recommended to remove the display more than once or twice, as this can cause issues with the fitting.
:::

### Installing the Xii-DD PCB (XBU-002)

1.  Flip the top shell so the external side is facing down. Then, slide the Xii-DD PCB at a `20°` angle on the back of the display until it pushes against the top of the shell and underneath the notch. Fasten the Xii-DD PCB in place using two `4mm` Phillips screws.
2.  Open the slider ZIF connector on the RVL-DD. This ZIF is different from all others used in the XBU. To unlock it, pull directly away from the connector on both sides using a small amount of force. **Do NOT pull up on it at all.** The connector is fully unlocked when it extends out `1-2mm` and is even across both sides.
3.  Fold the display’s cable over the bottom edge of the Xii-DD PCB. Align it properly and carefully push the cable into the unlocked ZIF connector. Ensure it is pushed in all the way, as it can get stuck easily. Refer to the photos. Then, lock the ZIF connector.

### Buttons

1.  Place the DS lite buttons and D-pad in their respective slots. The buttons have notches to ensure correct orientation. The D-pad, however, can be installed in any orientation.
2.  Trim the membrane for the buttons. This is required, and is done to create a tighter fit with the shell. The square in the middle of the membrane can be completely cut out using an X-Acto knife with a `#2` blade.
3.  Place the membranes for the buttons and D-pad. Then, place the center Start button. If the button's membrane does not sit flat, consider trimming the square a bit wider.

### Preparing the Controller PCB (XBU-003)

1.  Take the Left and Right Speakers and connect them at the bottom of the PCB. They push directly in and will stay snug there.
2.  Connect the modified rumble motor to the picolock connector at the bottom of the Controller PCB. The picolock connector is keyed and will only insert in one direction. Do not force it. Take note of the polarity - the red wire on the rumble motor connects to the “+” pad, and the blue to the “-” pad.
3.  Unlock the ZIF connector on the Controller PCB labeled “To Xii-DD”. Insert an 18 pin FFC with the blue stiffener facing up. Then, lock the connector. To ensure it has been inserted completely, give a very small tug to the cable. If it releases easily, repeat the process.
4.  Apply a small amount of flux to the “LRA” pads on the GC+2.0 PCB. Then, jump the two pads together by creating a solder bridge. Be careful not to damage any surrounding components.

### Finishing Top Half Installation

1.  Line up the completed Controller PCB with its screw posts. Ensure the cables for the rumble motor and speakers do not get caught underneath the PCB. Then, screw the board into place. There are ten `4mm` Phillips screws, and one `5mm` screw. The `5mm` screw must be made by cutting or sanding the tip of a `6mm` screw. The `5mm` screw goes on the bottom right screw hole on the GC+2.0 PCB.
2.  On the Xii-DD PCB, unlock the 18 pin ZIF connector near the top and insert the FFC coming from the Controller PCB. Lock the ZIF connector when finished.
3.  Remove the sticker covering the adhesive backing on the rumble motor. Then, set the motor into its slot and tuck the wires under the PCB.
4.  Cut two `19mm x 9mm` rectangles out of the metal mesh. Place one into each speaker cutout. After that, place each speaker in its slot, and tuck the excess wire in between the rumble slot and the PCB.
5.  Place the 3D printed bracket over the speakers, rumble motor, and screw posts. Secure the bracket with four `4mm` Phillips screws.
6.  Connect two Joy-Con Joysticks to their ZIF connectors. Then, place the joysticks over the screw posts and secure them with two `4mm` Phillips screws each. The left joystick (closest to the RVL-DD) will need to have its cable folded in order to fit.

---

## Bottom Half Assembly

### Lower Layer

1.  Start the first layer off by installing the black heat sink and modified fan. The heat sink should be placed in the orientation that aligns the arches with the arches on the shell. The fan must be installed so that the cable faces the USB-C port and the top of the shell. There is a small notch in the shell that allows the cables to pass through.
2.  Place the RZ and LZ bumper buttons.
3.  Connect the two modified Joy-Con Joystick Triggers to the Trigger PCB ZIF connectors.
4.  Align the Trigger PCB and triggers with their respective screw posts. Fasten the Trigger PCB with five `4mm` Phillips screws, and fasten the triggers with two `4mm` Phillips screws each.

:::info
The ribbon cables on the triggers will need to be bent in order to fit properly.
:::

5.  Unlock the 8 Pin ZIF Connector on the Trigger PCB labeled “To Main PCB”. Insert the 8 Pin FFC and lock the connector. Bend the cable so that it is facing straight up - 90° from the connector.
6.  Apply Arctic MX-4 thermal paste to the heat sink in an “X” shape. Apply more than what is pictured, but not so much it overflows.
7.  Firmly place the `30mm x 55mm x 1mm` copper plate over the heat sink and fan.
8.  Remove the white adhesive strips from the two black Wi-Fi antennas and place them as pictured. Wrap each of the wires twice around the upper right screw post.
9.  Take the clear light pipe and a pair of pliers. Position the light pipe at the top of the shell on the left of the power button hole. Carefully use the pliers to push the pipe into place. Do not apply too much force, as this could crack the shell easily.
10. Place the Power (closest to the light pipe) and BT Sync (closest to the corner) buttons into their slots. Each button has a notch, so note the orientation. A small piece of tape can be used to keep them there.
11. Place the Brightness and Volume rockers into their slots. Each button has a notch, so note the orientation. A small piece of tape can be used to keep them there.
12. Take the Bluetooth module that was retrieved from the Wii’s PCB and insert it into the gray connector on the bottom of the Main PCB. The module should have a small cushion to keep it adhered to the Main PCB. If the cushion ripped or is missing, a strip of double sided tape works instead.
13. Take the Wi-Fi module that was retrieved from the Wii’s PCB and attach the Wi-Fi antenna connectors. Insert the Wi-Fi connector into the white connector on the bottom of the Main PCB. Ensure the Wi-Fi antenna cables are facing toward the top of the bottom shell.

### Upper Layer

1.  Take the Main PCB and insert it at a 45° angle. The USB-C port and Headphone Jack will slot nicely into place. While lowering the PCB, ensure the Trigger PCB flex cable and Fan PicoLock (not pictured) pass into the Upper Layer.
2.  If everything was performed properly, the Main PCB will sit flat against the shell. If not, lift it and try again, making sure no cables were pinched underneath. Then, screw nine `4mm` Phillips screws into place.
3.  Pull directly up and remove the tape covering the Power, BT Sync, Brightness, and Volume buttons.
4.  Unlock the 8 Pin Trigger PCB ZIF connector. Bend the FFC as pictured and insert it into the ZIF connector. Lock the connector, and bend the cable over the RVL-PMS2.
5.  Connect the Fan’s male PicoLock connector to the Main PCB’s Female connector located in the upper right of the board.

:::info
This is not pictured, as it was added in a later revision.
:::

6.  Take the 40p Shielded FFC (XBU-007) and bend the stiffener to a 90° angle. Note the orientation, as the flex can only be installed one way. If it is inserted in the incorrect orientation, it will cause a short between 3.3v and GND.
7.  Unlock the 40 Pin Xii-DD ZIF connector. Bend the FFC as pictured and insert it into the ZIF connector. Lock the connector.
8.  Apply a few drops of 99% isopropyl alcohol onto the copper plate. A Q-Tip can then be used to wipe it up and clean off the surface. Repeat for the Hollywood and Broadway on the Wii’s PCB.
9.  Check the voltages of both 18650 battery cells with a multimeter. Ensure they are within ~0.1v of each other. Insert each of the batteries into the holders at the bottom of the shell, noting the orientation (+ on the left and - on the right). Check that there is a solid connection between the battery terminals and the Main PCB battery tabs.

:::danger IMPORTANT: Battery Safety
The orientation of the batteries is crucial, inserting them backwards can cause permanent damage to the RVL-PMS2 and the rest of the Xii-Boy Ultra. Connecting two batteries in parallel at drastically different voltages can cause a fire in the worst case scenario, and damage the battery capacity at best. If the batteries are not within ~0.1v of each other, charge one until it is equivalent.
:::

10. Apply thermal paste to the copper plate in two “X” shapes. One large “X” for Hollywood, and a smaller “X” for Broadway.
11. Unlock the 50 Pin Xii-Flex Ultra ZIF connector. Insert the Xii-Flex Ultra into the ZIF connector and lock it.
12. Insert the PicoLock power connector into the Main PCB and the Xii-Strip.

:::info
This is not pictured, as it was added in a later revision. It replaces the pogo pins in the images.
:::

13. Fold the Wii over the copper plate and press down firmly to spread the thermal paste. Align the screw holes on the Wii with the three screw posts on the bottom shell. Use three silver `7.3mm` Phillips screws from the Wii’s motherboard cover ([https://www.ifixit.com/Guide/Nintendo+Wii+Heat+Sink+Replacement/3458#s16575](https://www.ifixit.com/Guide/Nintendo+Wii+Heat+Sink+Replacement/3458#s16575)) to fasten the trimmed Wii in place.
14. Unlock the 40 Pin Main PCB ZIF connector on the Xii-DD PCB. Insert the 40 Pin Shielded FFC and lock the connector.
15. Close both halves and connect them with six `6mm` Phillips screws. The screwholes in the bottom shell are recessed, so a screwdriver with a long tip is required.

**The Xii-Boy Ultra Assembly is now complete. Proceed to RVLoader setup.**