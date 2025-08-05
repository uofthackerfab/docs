# 🛠️ Fabrication Workflow

> Complete step-by-step guide to semiconductor fabrication processes and IC design implementation.

## Overview of IC Design

The complete integrated circuit fabrication process involves multiple sequential steps to create functional semiconductor devices:

1. **Starting wafer** (silicon substrate)
2. **Well formation**
   - Spin-on dopant for n-well or p-well
   - Drive-in diffusion in furnace
3. **Gate oxide formation**
   - Thermal oxidation or alternative
4. **Gate formation**
   - Polysilicon or metal deposition and patterning
5. **Source/drain formation**
   - Spin-on dopant for source/drain regions
   - Drive-in diffusion
6. **Contact holes**
   - Etching through oxide layers
7. **Metallization**
   - Metal deposition and patterning
8. **Interlayer dielectric**
   - Spin-on glass as insulation between metal layers
   - Often used in multi-level metal processes
9. **Final passivation**
   - Protective coating (can include spin-on glass)

---

## Detailed Fabrication Procedure

### Step 1: Clean Substrate

**Purpose**: Remove all contaminants to ensure proper adhesion and process reliability

**Process**:
- **Acetone**: Removes organic contaminants
- **Isopropanol (alcohol)**: Removes acetone residue
- **Nitrogen gas drying**: Prevents water spots
- **Pre-bake**: Remove any liquid remaining

### Step 2: HMDS Application

**Purpose**: Improve photoresist adhesion to silicon surface

**Process**:
1. Apply few drops of HMDS to the center of the wafer
2. **Spin** at 4000+ RPM for 20 seconds to create an extremely thin layer
3. **Bake** at 100°C for 20 seconds to set the adhesion layer

### Step 3: Apply Photoresist

**Purpose**: Create light-sensitive layer for pattern transfer

**Process**:
1. Apply few drops of photoresist to the center of the wafer using **Luer Lock filtered syringe**
2. **Spin** at 4000 RPM for 30 seconds to create a uniform thin layer
3. **"Soft bake"** at 100°C for 90 seconds to solidify but maintain light sensitivity

### Step 4: Develop Using Stepper/Spinner

**Purpose**: Transfer digital patterns to photoresist layer

#### Pattern Loading
Load digital patterns into the stepper software:
- **Blue pattern**: Defines areas to be exposed (will be removed after development)
- **Red alignment pattern**: Helps align with previous layers
- **UV focus pattern**: Helps ensure the exposure is properly focused

#### Exposure Process
1. **Position** the wafer under the projector
2. **Use red light** (safe for photoresist) to focus and align patterns
3. **Switch to UV light** by adjusting focus (Z-axis)
4. **Expose** for 8 seconds

### Step 5: Development

**Purpose**: Selectively remove exposed or unexposed photoresist areas

**Process**:
1. **Immerse** wafer in developer solution (3 parts water : 1 part AZ-400K)
2. **Agitate** gently for 60 seconds
3. **Rinse** in clean water to stop development

#### Development Details
- **Function**: After exposure, development selectively dissolves portions of photoresist:
  - **Positive photoresist**: Exposed areas become soluble and are removed
  - **Negative photoresist**: Unexposed areas remain soluble and are removed
- **Maintenance**: Refresh developer every 6 hours
- **Technique**: [Stir in developer solution](https://drive.google.com/file/d/1C2APhZpUS7O2a-3hzmjMloyEuc7RCg1Z/view)
- **Developer**: "AZ-400K" is a specific brand of developer (potassium-based)

### Step 6: Etch, Deposit, Implant Dopants

**Purpose**: Modify wafer structure using photoresist as mask

**Processes**:
- **Etching**: Removing material from unprotected areas
- **Deposition**: Adding material to the wafer (the resist is later removed)
- **Ion implantation**: Introducing dopant atoms into specific regions
- **Lift-off**: Depositing material, then removing resist to leave only patterned material

### Step 7: Photoresist Stripping

**Purpose**: Complete removal of photoresist after it has served its purpose

**Requirements**:
- Acetone
- Isopropyl alcohol
- Nitrogen gas for drying

**Process**: Remove all photoresist from semiconductor wafer after processing is complete

---

## Alternative Development Process

### Potassium Hydroxide (KOH) Development
- **Application**: Use with positive photoresist
- **Process**: After exposing, develop with potassium hydroxide (KOH)
- **Materials**: Photoresist, hotplate (baking), spin coating equipment

---

## Equipment Considerations

### Projector Optimization
- **Exposure field uniformity**: Place webcam to take image, use calibration mask
- **DLP projector alignment**: May be angled - requires calibration
- **Color wheel**: Remove to increase UV output
- **UV maximization**: Want as much UV to keep exposure time low
- **UV measurement**: Monitor lamp measurement/dosage for photoresist

---

## Purchase & Administration

### Equipment Inventory
Include a spreadsheet with:
- Everything purchased
- Funding sources
- Equipment inventory
- Parts tracking

### Wafer Suppliers
- **WaferPro**
- **University Wafer**

### Laser Lithography Components
- **Diode laser**: [Amazon Canada Green Laser Module](https://www.amazon.ca/Green-Laser-Module-Diode-532nm/dp/B086X6WGWJ?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A17O8U969TLM8D)
- **ER71 LKG**: Negative photoresist
- **MICROPOSIT S1800**: Positive photoresist

### Vacuum Chamber
- [Vacuum chamber purchase order spreadsheet](https://docs.google.com/spreadsheets/d/1TPauRe4IT71wgZRzCAktdQAIhP94O9i4d5mw1youb1I/edit?gid=0#gid=0)

### Lab Access Resources
- [BYU Cleanroom Color Chart](https://cleanroom.byu.edu/color_chart)
- [University of Toronto Equipment Capabilities](https://www.ece.utoronto.ca/equipmentcapabilities/)
- [University of Toronto TNFC User Access](https://www.ece.utoronto.ca/tnfc-user-access/)

---

## Process Parameters Summary

| Step | Temperature | Time | Speed/Conditions |
|------|-------------|------|------------------|
| HMDS Spin | - | 20 sec | 4000+ RPM |
| HMDS Bake | 100°C | 20 sec | - |
| Resist Spin | - | 30 sec | 4000 RPM |
| Soft Bake | 100°C | 90 sec | - |
| UV Exposure | - | 8 sec | Stepper/projector |
| Development | Room temp | 60 sec | 3:1 water:AZ-400K |

---

## Quality Control

### Critical Control Points
1. **Cleanliness**: Substrate preparation affects all subsequent steps
2. **Adhesion**: HMDS application ensures resist adherence
3. **Uniformity**: Spin coating parameters control film thickness
4. **Exposure**: Proper focus and timing for pattern fidelity
5. **Development**: Timing and agitation affect pattern quality

### Troubleshooting
- **Poor adhesion**: Check HMDS application and bake
- **Uneven coating**: Verify spin speed and substrate cleanliness
- **Poor pattern**: Check exposure focus, timing, and developer freshness
- **Residual resist**: Ensure complete development or stripping

---
[← Back to Home](README.md)
