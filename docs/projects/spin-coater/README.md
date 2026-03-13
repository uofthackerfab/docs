# Spin Coater Build

A uniform spin coater is critical for depositing thin layers of spin-on dopants and photoresist. Our DIY spin coater uses modified off-the-shelf PC components driven by an Arduino to achieve precise 600–3000 RPM spins for our wafer dies.

## Design Overview
- **Capacity:** Supports substrates up to 50mm in diameter.
- **Operation Time:** User-programmable job durations from 1 to 300 seconds.
- **Speed Control:** Granular PWM control for coarse and fine RPM adjustments.

## Bill of Materials (BOM)
* **Drive Motor:** Arctic P8 Max 12 V PC fan (modified)
* **Controller:** Arduino Uno
* **User Interface:** I2C 1602 LCD module, 4×4 membrane keypad
* **Controls:** Dual 10 kΩ potentiometers (for Coarse and Fine speed adjustment)
* **Power:** 12 V DC supply (>= 0.5 A)
* **Switching:** MOSFET or standard motor driver module
* **Structural:** Custom 3D-printed housing and sample chuck

## Build Steps

1. **Fan Modification:**
   First, carefully pop the hub off the Arctic P8 Max fan to directly access the motor rotor. The fan blades are removed or snapped, and the motor cap is sanded completely flat to create a stable mounting surface for the chuck.

2. **Enclosure & Chuck:**
   Print the 3D housing (inspired by BirdBrain's DIY design) to encapsulate the electronics and catch any spilled chemicals during spinning. Mount the custom 3D printed chuck to the flattened motor cap.

3. **Circuitry & Arduino Logic:**
   - Hook up the motor through the MOSFET/driver, powered by the 12V supply. The driver gets its PWM signal from the Arduino.
   - Read the analog values from the 10k potentiometers. The coarse pot dictates the broad RPM range, while the fine pot enables a precise ±5% trim.

4. **UI Integration:**
   Interface the 4x4 keypad and I2C LCD with the Arduino. The screen provides real-time feedback of the target speed, estimated actual RPM, and the remaining spin job time.
