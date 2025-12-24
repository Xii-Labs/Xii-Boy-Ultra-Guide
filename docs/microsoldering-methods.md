# Microsoldering Methods

The **Xii-Boy Ultra** requires advanced soldering methods in order to complete the build. It is highly reccomended to practice the follwoing methods on a junk PCB before bringing the iron near the Wii or other custom PCBs. 

## General Soldering

Solder is like the glue for electronics. It holds components together and is conductive, meaning electricity can flow through it freely. A soldering iron is the tool that melts the solder so you can make your own connections. A good soldering iron is one that is temperature-controlled and conducts heat well. The recommended soldering iron temperature for the **Xii-Boy Ultra** build is `350°C`. The only exception is the `1.8V LDO` because of the large pads which sink a large amount of heat. An iron’s tip greatly affects heat transfer, a conical tip is nowhere as effective as a **TS-D24 tip** or similar. However, conical tips can still be useful for tiny pins and flex soldering where less heat is required.

General soldering process:

1. Power on the iron and set the temperature to `350°C`.
2. Clean residual solder off the tip using a **brass wool** or a **damp sponge**.
3. Apply **flux** to the pad that will be soldered. The **flux** is essential to letting the solder flow, and prevents bridging pads.
4. Place the **soldering iron** on the pad. Allow it to heat the pad for a second.
5. Put the end of the solder roll on the joint between the iron tip and the pad. Allow the solder to melt briefly before removing the solder roll. Then, remove the iron.
6. Inspect for bridged component leads, pads, or vias. If necessary, apply **flux** and reflow the joint with the iron.
7. Clean **residual flux** using a **Q-tip** and **99% isopropyl alcohol**.

## Scraping Vias

The vias on the Wii’s motherboard are coated with conformal coating, and the copper isn’t fully exposed. Copper has to be exposed for solder to bond, so the conformal coating needs scraped off.

1. Prepare the **X-Acto knife** with a `#2` blade.
2. Gently scrape along the edge of the via with the tip of the blade. Move it in a circular motion until the copper is fully exposed. Remember, only the conformal coating should be scraped. **Do not scrape away the copper!**
3. Clean conformal coating flakes using a **Q-tip** and **99% isopropyl alcohol**.

<ImageCarousel step="microsoldering-methods/scraping-vias" />

## Flex Soldering

Flex cables are soldered directly to the scraped vias. A proper connection is absoltely necessary for the portable to work.

1.	Apply flux over all exposed vias.
2.	Heat the soldering iron and lightly touch it to the vias.
3.	Apply solder and distribute it so each via is fully tinned. Ensure there is no bridging between adjacent vias.
4.	Clean the area using a **Q-tip** and **99% isopropyl alcohol**, then apply a fresh layer of flux over the tinned vias.
5.	Align the flex cable over the vias. Make sure the silver pad of each flex trace is centered and visible on its corresponding via.
6.	Hold the flex in place with tweezers. Using a lightly tinned iron, solder each pad while applying gentle pressure so the flex sits flush against the board.
7.	Clean the area again with isopropyl alcohol.
8.	Test each connection using a multimeter. Rework any vias that do not show proper continuity.

<ImageCarousel step="microsoldering-methods/flex-soldering" />