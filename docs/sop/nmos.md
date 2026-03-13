# NMOS Fabrication Standard Operating Procedure (SOP)

<p align="center">
  <img src="../images/nmos%20steps.svg" style="max-width: 800px; width: 100%; margin: 20px 0;" alt="NMOS Steps" />
</p>

This document outlines the step-by-step process for fabricating a baseline N-type MOSFET using Hacker Fab equipment. It is highly influenced by Sam Zeloof's DIY NMOS procedure, optimized for our student-led environment.

## 1. Bill of Materials

| Item | Purpose |
|------|---------|
| Silicon wafer, p-type (100) | Main substrate for the device |
| Quartz wafer carrier | For loading the wafer into the tube furnace |
| DI water | For rinsing after chemical steps |
| N₂ gun / spin rinse dryer | Drying the wafer |
| Vinyl mask / electrical tape | Protection during selective oxide etching |
| 2% Hydrofluoric Acid (HF) | Etchant for silicon dioxide |
| Phosphorus spin-on dopant | N-type liquid dopant source |
| Tube furnace (custom built) | Thermal oxidation and dopant drive-in |
| Spin coater (custom built) | Applying spin-on dopant uniformly |
| Solder / silver conductive epoxy | Creating electrical contacts |
| Probe station | Electrical characterization |

## 2. Process Overview

### Step 1: Field Oxide Growth
**Purpose:** Grow an insulating SiO₂ layer (the gate/field oxide) over the entire wafer.
- **Procedure:** Load the silicon wafer into the tube furnace. Run steam at roughly 1000°C for ~2.5 hours.
- **Validation:** Look for a blueish tint on the wafer surface, which indicates an oxide thickness of approximately 500nm.

### Step 2: Source/Drain Etching
**Purpose:** Remove the field oxide from the source and drain regions so dopants can enter the silicon.
- **Procedure:** 
  1. Cleave the wafer into smaller test dies.
  2. Apply a thin strip of vinyl mask across the middle of the die; this defines the gate width.
  3. Dip the masked die in 2% HF for a few minutes. (Heating the HF slightly speeds up this endothermic reaction).
  4. Rinse the die thoroughly in two successive DI water baths.
  5. Dry using nitrogen gas.
- **Validation:** The exposed regions (source and drain) should no longer have a blue tint, clearly indicating bare silicon.

### Step 3: Dopant Application
**Purpose:** Apply a controllable n-type dopant source to the exposed silicon areas.
- **Procedure:**
  1. Important: Perform an RCA clean (or a brief acid dip) to make the silicon surface hydrophilic. Poor wetting causes the liquid dopant to bead up.
  2. Dispense the phosphorus spin-on dopant and spin-coat the die at 3000+ RPM for ~30 seconds.
  3. Transfer the die immediately to a hotplate preheated to 115°C.
  4. Ramp the hotplate to 220°C and bake for 15 minutes to evaporate solvents. This leaves a glassy layer acting as a dopant source.

### Step 4: Dopant Drive-In
**Purpose:** Force the phosphorus dopant into the silicon lattice to form n+ wells (source and drain).
- **Procedure:**
  1. Load the coated die into the tube furnace.
  2. Run the furnace at ~900–1000°C.
  3. First cycle: heat for 15 minutes with steam.
  4. Second cycle: heat for 30 minutes dry (no steam).
- **Note:** This cycle drives the dopant in while also growing a thin layer of phosphosilicate glass/oxide on top, which will need to be etched later.

### Step 5: Contact Formation
**Purpose:** Create electrical access pads to test the device.
- **Procedure:**
  1. Mask the gate region again.
  2. Perform a brief HF dip to etch through the thin phosphosilicate glass layer, exposing the heavily doped silicon in the source and drain regions.
  3. Apply solder or silver conductive epoxy to create test pads for the Gate, Source, and Drain.
- **Note:** Precision is required. Ensure your gate contact material does not short to the source/drain regions.

### Step 6: Electrical Characterization
**Purpose:** Validate that the device functions as an n-channel MOSFET.
- **Procedure:**
  1. Use a multimeter or probe station to check isolation between Gate, Source, Drain, and Body.
  2. Apply a drain bias and sweep the gate voltage relative to the source.
  3. Measure the drain current. You should observe baseline transfer behavior (current increases when gate voltage exceeds the threshold).
- **Expectations:** Due to the thick gate oxide and wet processing in ambient air, expect high threshold voltages, noticeable leakage, and a poor on/off ratio. These are acceptable pedagogical tradeoffs for a DIY fab environment.
