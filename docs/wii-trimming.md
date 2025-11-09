# Wii Trimming 

The reason Wii portables of this size are possible is because of motherboard trimming. The Wii is the perfect trim candidate. In almost any computer system, there are a few crucial components: the **CPU, GPU, RAM,** and **NAND**. All four of those components are next to each other on the Wii, and they are what define our trim lines. The **Xii-Boy Ultra** uses a **Standard Trim**, which just means the trim goes around the components without relocating them. The **Standard Trim** is one of the simplest, but that doesn’t mean it’s easy. Go slow and follow each step carefully. Cutting a critical component or trace can render the Wii inoperable.

## Trimming Diagrams

These diagrams contain annotated images of the bare Wii motherboard. Use it as a reference when drawing trim lines, removing components, or checking important traces. To view the diagrams in full quality, right click and open each image in a new tab.

![alt text](<XII-BOY ULTRA TRIM DIAGRAM - BOTTOM.png>)


## Trimming Steps  

1. Disassemble the console down to the bare motherboard. There are many great tutorials out there; the recommended one is [by iFixit](https://www.ifixit.com/Guide/Nintendo+Wii+Motherboard+Replacement/3460).
2. Use a pair of pliers and a soldering iron to remove the unnecessary large capacitors and inductors that lie near the trim line. They are highlighted Pink in the Top and Bottom diagrams.  
3. Use a permanent marker and ruler to trace the trim outline on both the top and bottom of the board.  
4. Apply masking tape over the **GPU** (Hollywood) and **CPU** (Broadway), keeping it flush with the board. This prevents copper shards from getting underneath the components while trimming.  
5. Prepare for trimming: Attach the diamond cutting wheel to the Dremel and fasten it tightly. Move to a well-ventilated area and put on a **mask, safety glasses,** and **gloves**. **A respirator rated for fine particulate matter (P100 or N95 minimum) is required.**

:::danger Important
**Cutting PCBs releases dust and shards. These micro-plastic dust clouds and copper shards can cause permanent lung damage. Equip proper safety gear to protect your eyes and lungs.**
:::

6. Begin trimming slowly, cutting slightly outside the trim line as the Wii will need to be sanded afterwards. If a component on one side blocks the Dremel, switch sides. Be extremely cautious of critical components (Red) and critical ICs (White) in the diagram.  

:::tip Note
Do NOT apply force with the Dremel. The wheel does the cutting; you are only guiding it. Force can cause it to skip and hit critical components.
:::

7. Once trimming is complete, sand the edges with progressively finer grits of sandpaper:  
**180 → 200 → 300 → 400 → 600 → 800 → 1000 grit** (anything higher than 1000 grit is optional).  
Low grits remove more of the board; high grits remove small amounts and create a smooth finish. Sand away burs or extrusions. At 1000 grit, each of the four layers should be distinct and the sides smooth.  

8. Remove tape and clean the board. Trimming is finished!  

## Testing a Trimmed Board  

Perform essential tests before powering the trimmed Wii to ensure functionality. Confirming functionality now saves troubleshooting headaches later.  

1. Test resistances of voltage rails using a multimeter set to resistance (Ω) mode. Set the multimeter to 20kΩ if it does not have auto-ranging. Navigate to the trim test website and follow instructions. Place the black probe on Ground (GND) and the red probe on each voltage rail. The site will identify incorrect rail resistances.  
2. Compare readings with the attached image. If any are significantly lower, sand edges at a high grit again and repeat Step 1.  
3. When resistances are correct, connect the RVL-PMS2 to the Wii. Solder a wire from each voltage pad on the RVL-PMS2 to the respective pad on the Wii (e.g., 3.3v → 3.3v). Use 24 AWG wire and keep wires short.  
4. Connect outlined AVE pads on the Wii to a stripped RCA cable. The original Wii composite cable and a trimmed video connector can work in a pinch. Connect the cable to a component-compatible display.  
5. Connect a battery to the B+ and B- pads on the RVL-PMS2. Short the BTN pad with GND for three seconds using a button or tweezers to activate the RVL-PMS2 and output all voltage rails.  
6. The Wii will display an error on screen (good error, confirming trim and RVL-PMS2 are working).  
7. Desolder all wires from both the Wii and RVL-PMS2.  

**Continue to Castellated Module Install.**