# Top Half Assembly

<!-- TODO: Add time/difficulty ratings and a description -->



<!-- ### 2. Brushless Fan

1.  Peel away the sticker located on the hub of the fan.

<ImageCarousel step="top-half-assembly/brushless-fan-sticker" />

2.  Desolder the red and black wires.

<ImageCarousel step="top-half-assembly/brushless-fan-desolder" />

3.  Cut `62mm` worth of picolock cable (from the tip of the connector) and strip a small section at the end.

<ImageCarousel step="top-half-assembly/brushless-fan-wire" />

4.  Solder the new picolock wires, noting the polarity. -->

<!-- ### 2. Rumble Motor

1.  Cut `16mm` worth of picolock cable (from the tip of the connector) and strip a small section at the end.
2.  If heat shrink tubing is available, place it over the red and blue wires now. Otherwise, electrical tape is needed after combining the wires.
3.  Solder the wires to their corresponding picolock wires. Keep the connections as flush as possible and avoid wire fraying. It is best to apply flux to both ends of the wire, put a little bit of solder on the tip of the iron, then try to spread the solder over the joint to make a solid connection.
4.  Verify the connection with a small tug on the wires, and by checking continuity with the tip of the picolock terminals.
5.  Heat the heat shrink tubing to cover the exposed wires, or use electrical tape instead. -->

### Installing the Display

1.  Retrieve the display from **Bag T1**. Peel off the film covering the front of the glass.

<ImageCarousel step="top-half-assembly/display-peel" />

2.  Retrieve the front shell from **Bag G1**. Place the display into the top shell at a 45° angle. The bottom of the display should sit flat on the indent of the case, and the ribbon cable should go through to the inside.

<ImageCarousel step="top-half-assembly/display-place" />

3.  Slowly rotate the screen toward the front of the shell. At the very end, a small amount of force may be required to set the display in place. A small lip surrounds the indent, and a soft “click” will indicate the display is snapped into place.

:::info NOTICE
After the click, the display will be held in by friction and the lip. It is not recommended to remove the display more than once or twice, as this can cause issues with the fitting.
:::

### Xii-DD PCB (XBU-002)

1.  Flip the top shell so the external side is facing down. Retrieve the Xii-DD PCB from **Bag T2**. Then, slide the Xii-DD PCB at a `20°` angle on the back of the display until it pushes against the top of the shell and underneath the notch. Fasten the Xii-DD PCB in place using two `4mm` Phillips screws from **Bag G3**.

<ImageCarousel step="top-half-assembly/xii-dd-place" />

2.  Open the slider ZIF connector on the RVL-DD. This ZIF is different from all others used in the XBU. To unlock it, pull directly away from the connector on both sides using a small amount of force. **Do NOT pull up on it at all.** The connector is fully unlocked when it extends out `1-2mm` and is even across both sides.

3. Fold the 3.5" display’s cable over the bottom edge of the Xii-DD PCB. Align it properly and carefully push the cable into the unlocked ZIF connector. Ensure it is pushed in all the way, as it can get stuck easily. Then, lock the ZIF connector.

<ImageCarousel step="top-half-assembly/xii-dd-zif" />

### Face Buttons

1.  Retrieve the DS lite buttons and D-pad from **Bag T3**. Place the DS lite buttons and D-pad in their respective slots. The buttons have notches to ensure correct orientation. The D-pad, however, can be installed in any orientation.

<ImageCarousel step="top-half-assembly/face-buttons" />

2.  Trim the membrane for the buttons. This is a required step - it is done to create a tighter fit with the shell. The square in the middle of the membrane can be completely cut out using an X-Acto knife with a `#2` blade.

<ImageCarousel step="top-half-assembly/membrane-cut" />

3.  Place the membranes for the buttons and D-pad. Then, place the center Start button. If the button's membrane does not sit flat, consider trimming the square a bit wider.

<ImageCarousel step="top-half-assembly/membrane-place" />

### Controller PCB (XBU-003)

:::danger Note
The order of the following steps is not optimal and needs to be updated. Use as reference only.
:::

1.  Retrieve the left and right speakers from **Bag T6** and connect them at the bottom of the PCB. They push directly in and will stay snug there.

<ImageCarousel step="top-half-assembly/speaker-connect" />

2.  Retrieve the rumble motor from **Bag T5**. Connect the rumble motor to the picolock connector at the bottom of the Controller PCB. The picolock connector is keyed and will only insert in one direction. Do not force it. Take note of the polarity: **The red wire on the rumble motor connects to the `+` pad, and the blue to the `-` pad.**

<ImageCarousel step="top-half-assembly/rumble-connect" />

3.  Unlock the ZIF connector on the Controller PCB labeled `To Xii-DD`. Retrieve an 18 pin FFC from **Bag G5** and insert it with the blue stiffener facing up. Then, lock the connector.

<ImageCarousel step="top-half-assembly/controller-pcb-zif" />

4.  Apply a small amount of flux to the `LRA` pads on the **GC+2.0 PCB**. Then, jump the two pads together by creating a solder bridge. Be careful not to damage any surrounding components.

<ImageCarousel step="top-half-assembly/lra-jump" />

<!-- TODO: NEW PHOTOS -->

### Finishing Top Half

1.  Line up the completed Controller PCB with its screw posts. Ensure the cables for the rumble motor and speakers do not get caught underneath the PCB. Then, screw the board into place using eleven `4mm` Phillips screws from **Bag G3**.

<!-- and one `5mm` screw. The `5mm` screw must be made by cutting or sanding the tip of a `6mm` screw. The `5mm` screw goes on the bottom right screw hole on the GC+2.0 PCB. -->

<ImageCarousel step="top-half-assembly/controller-pcb-screw" />

2.  On the Xii-DD PCB, unlock the 18 pin ZIF connector near the top and insert the FFC coming from the Controller PCB. Lock the ZIF connector when finished.

<ImageCarousel step="top-half-assembly/xii-dd-controller-zif" />

3.  Remove the sticker covering the adhesive backing on the rumble motor. Then, set the motor into its slot and tuck the wires under the PCB.

<ImageCarousel step="top-half-assembly/rumble-place" />

4.  Retrieve two speaker meshes from **Bag T6**. Place a `19mm x 9mm` speaker mesh into each speaker cutout. After that, place each speaker in its slot, and tuck the excess wire in between the rumble slot and the PCB.

<ImageCarousel step="top-half-assembly/speaker-mesh" />

5.  Place the retention bracket over the speakers, rumble motor, and screw posts. Secure the bracket with four `4mm` Phillips screws from **Bag G3**.

<ImageCarousel step="top-half-assembly/retention-bracket" />

6.  Retrieve two Joy-Con Joysticks from **Bag G2**. Connect the joysticks to their ZIF connectors. Then, place the joysticks over the screw posts and secure them with two `4mm` Phillips screws each from **Bag G3**. The left joystick (closest to the RVL-DD) will need to have its cable folded in order to fit.

<ImageCarousel step="top-half-assembly/joystick-install" />
