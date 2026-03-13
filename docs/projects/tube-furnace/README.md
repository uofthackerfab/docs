# Custom Tube Furnace Build

This outlines the design and build process of our high-temperature tube furnace. The furnace is an essential piece of equipment for our lab, capable of reaching 900°C–1200°C for processes like silicon oxidation and dopant drive-in.

## Design Constraints
- Must safely hit 1000°C and hold the temperature with high precision.
- Needs programmable ramping capabilities to prevent thermal shock to quartz/silicon.
- Proper thermal insulation to ensure operator safety and power efficiency.

## Bill of Materials (BOM)
* **Heating Element:** Nichrome wire - 0.65mm (22 AWG)
* **Chamber:** Quartz tube - 5/8" OD, 12" Long
* **Enclosure:** Carbon steel box
* **Controller:** Programmable digital PID controller (Ramp & Soak capable)
* **Sensor:** Type K Thermocouple rated for high temperatures
* **Switching:** Solid State Relay (SSR, 40A) with aluminum heatsink
* **Insulation:** Ceramic Fiber Blanket (>2600°F) and Ceramic Fiber Insulation Board
* **Wiring:** 12 AWG wire (Power), 12 AWG Silicone Wire (Internal), 99.9% Pure Copper Wire for interconnects
* **Terminals/Connectors:** Spade terminals (10-12 AWG), Wago 222 (8-12 AWG)
* **Adhesives/Cements:** Sodium Silicate Firebrick Refractory Cement, J-B Weld Original
* **Tape:** Polyimide High Temperature Resistant Tape

## Build Steps

1. **Enclosure Modification:**
   Modifications to the carbon steel box using metal hole saws/cutters to securely mount the quartz tube, display panels, and power sockets.

2. **Chamber & Element Prep:**
   Carefully wind the nichrome wire evenly around the exterior of the quartz tube. Secure the windings in place by applying layers of the refractory cement. Allow to cure fully.

3. **Thermal Insulation:**
   Pack the void between the cemented quartz tube and the steel housing tightly with ceramic fiber blanket and board. This maintains the core temperature while keeping the outer shell safe.

4. **Electrical & Safety:**
   - **Grounding:** The carbon steel enclosure is firmly bonded to Earth/PE to protect against live wire faults.
   - **Isolation:** Ceramic tubing is used at entry points to prevent electrical arcing between high-temperature elements and the metal box.
   - Wire the main power loop through the 40A SSR.

5. **PID Controller Tuning:**
   The PID controller uses an SSR to modulate high VAC power based on the Type K thermocouple readings. General process profiles involve ramping to 1000°C at roughly 20°C per minute to prevent quartz stress fracturing, followed by a soak period.
