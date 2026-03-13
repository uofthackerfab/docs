# DC Magnetron Sputtering System

This project outlines our Physical Vapor Deposition (PVD) system designed to deposit thin metallic films ranging from a few nanometers to ~5 micrometers. Magnetron sputtering offers high chemical purity, excellent film adhesion, and operates at lower temperatures than thermal evaporation.

## Principle of Operation
1. **High Vacuum:** Contaminants are removed by pumping the chamber down to ~10⁻⁶ to 10⁻⁷ Torr using a roughing pump and a diffusion pump.
2. **Plasma Generation:** Argon is introduced as a sputtering gas. A DC breakdown voltage creates a potential difference between the cathode (the target material) and the anode (the chamber walls). Free electrons collide with Argon atoms, ionizing them into Ar⁺.
3. **Bombardment:** Positively charged Ar⁺ ions slam into the cathode/target. Through a momentum cascade, surface atoms on the target are ejected (sputtered) and fly outward toward the substrate.
4. **Magnetron Enhancement:** Rare-earth magnets are placed behind the target. This produces an inhomogeneous magnetic field that traps electrons in endless localized 'racetracks' (E x B drift currents). This massive increase in local electron density creates a dense plasma and dramatically scales up the ionization efficiency—allowing operation at lower pressures (10⁻³ mbar) and lower voltages (500-600V) compared to classic diode sputtering (kV ranges).

## System Components
* **Chamber:** A thick-walled 10-12" Borosilicate glass bell jar seated on a baseplate. 
* **Vacuum Pumps:** A VIVOHOME 3.5 CFM rotary vane pump for roughing and an eventual diffusion pump for high vacuum.
* **Target and Magnet Assembly:** A water-cooled cathode backed by N52 neodymium magnets. A collimator ring confines Plasma to the target area.
* **Substrate Holders:** Four rotatable holders capable of heating the sample.
* **Shutter:** Located between the target and substrate.

## Initial Bill of Materials (BOM)
* **Pumps:** VIVOHOME 3.5 CFM 1/4 HP Single Stage Rotary Vane Vacuum Pump
* **Vacuum Hardware:** KF25 fittings kit, reinforced 1" vacuum hose, oil mist filter, 0-30 inHg Gauge, Needle valves (1/4" NPT)
* **Baseplate:** 6061 aluminum plate (12"x12"x0.5" thick)
* **Seals:** Viton O-rings, high vacuum grease, silicone gasket / Permatex RTV sealant
* **Chamber:** Borosilicate glass bell jar
* **Power Supply:** DC lab switching supply or variable high voltage supply (0-500V or 0-600V, ~500mA rating minimum)
* **Target/Cathode:** Copper disc/plate (3-4" diameter, 1/4" thick)
* **Magnets:** Neodymium N52 grade ring and disc magnets
* **Feedthroughs:** High voltage compatible electrical vacuum feedthroughs
* **Hardware:** Stainless steel threaded rods, brass barb fittings, JB Weld epoxy for structurally sealing ports.

## Build Parameters to Control
- **Applied Power / Voltage:** Dictates material ejection rate.
- **Argon Gas Pressure:** Influences film density, roughness, and deposition speed.
- **Target-to-Substrate Distance:** Key variable for film thickness distribution.
- **Substrate Temperature:** Impacts film adhesion, stress control, and crystallinity.
