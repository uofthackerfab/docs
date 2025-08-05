# 🧪 Etching Techniques

> Comprehensive guide to etching processes for selective material removal and pattern transfer in semiconductor fabrication.

## Overview

Etching is a selective material removal process that transfers patterns from a mask (typically photoresist) into underlying layers of a semiconductor wafer. This section covers both wet and dry etching methods.

## Wet Etching Methods

### HF Jig (Hydrofluoric Acid Etching)

#### Function
- Performs wet etching using hydrofluoric acid (HF)
- Removes silicon dioxide (SiO₂) layers

#### Cost Assessment
- **Very Low** (simple glass beaker setup)

#### HF Etching Process

**Applications:**
- Contact hole etching
- Diffusion window opening
- Selective dopant area definition
- Post-diffusion glass stripping
- Native/thermal oxide removal
- Gate oxide removal

**Chemical Reaction:**
```
SiO₂ + HF → H₂SiF₆ + H₂O
```

**Buffered Oxide Etch (BOE):**
- Mixture of HF and NH₄F for controlled etching
- Standard ratio: 6:1 NH₄F to HF

#### Annealing Dependence
- **200-400°C annealed glass**: ~10 seconds with 6:1 BOE
- **1100°C annealed glass**: 5-10 minutes with 6:1 BOE

#### Safety Equipment
- **Inner layer**: Nitrile gloves
- **Outer layer**: Neoprene gloves
- **Protection**: Nitrile splash apron, face shield
- **Emergency**: Spill kit
- **Ventilation**: Fume hood (required)

#### Materials Required
- **Etchant**: Buffered Oxide Etch (6:1 NH₄F to HF)
- **Rinse**: Deionized water (DI)
- **Tools**: Self-locking tweezers with metal wire handle
- **Setup**: 3D-printed etching stand and tweezer guide
- **Containers**: Three polypropylene jars (BOE, Rinse 1, Rinse 2)

#### Safety Reference
- [CMU HF Safety SOP](https://www.cmu.edu/ehs/Laboratory-Safety/chemical-safety/documents/sop-for-the-use-of-hydrofluoric-acid.pdf)

---

### Aluminum Etching

#### Function
- Removes aluminum films using wet etchant

#### Etchant Composition
- **Ratio**: 16:1:1:2
- **Components**: Phosphoric acid : Nitric acid : Acetic acid : DI water

#### Cost Assessment
- **Low** (common chemicals)

---

## Dry Etching Methods

### Plasma Etcher

#### Function
- Uses ionized gas (plasma) for material removal
- Combines physical bombardment and chemical reactions
- Requires RF power supply and vacuum chamber

#### Cost Assessment
- **High** (not likely for DIY setup; HF jig preferred for most applications)

---

## Spinning & Doping Processes

### Photoresist (DIY)

#### DIY Development
**Developer**: Josiah, 21-year-old student from Wisconsin
**Cost**: $120 organic photoresist system

**Components:**
- **Polyvinyl cinnamate**: ~$85 for 5g ([ScIPoly Supplier](https://scipoly.com/shop/polyvinyl-cinnamate-2/))
- **Tetrahydrofuran**: ~$35 for 200ml

**Mix Ratio:**
- 5% polyvinyl cinnamate / 95% tetrahydrofuran (by mass)

#### Photoresist Types
**Positive Photoresist:**
- Long polymer chains
- Light breaks bonds, making exposed areas weaker and soluble

**Negative Photoresist:**
- Small molecules
- Light forms bonds, hardening the exposed areas

---

### Spin-On Dopant

#### Function
- Introduces dopants to create electrically active regions

#### Process Steps
1. **Apply** liquid dopant solution using spin coater
2. **Heat** wafer to:
   - Evaporate solvent
   - Densify film into SiO₂
   - Drive dopant into silicon

#### Equipment Required
- Spin coater
- Hot plate or oven

---

### Spin-On Glass (SOG)

#### Function
- Creates insulating or dielectric SiO₂ layers on the wafer

#### Filmtronics Chemicals
| Product | Type | Result | Temperature | Time |
|---------|------|--------|-------------|------|
| **700B** | Undoped precursor | Pure SiO₂ | 400°C | 20-30 min |
| **P504** | Phosphorus-doped | PSG, n-type dopant | 200°C | 10-15 min |
| **B154** | Boron-doped | p-type film | 200°C | 10-15 min |

#### Material Handling
- **Storage**: Cold storage (5°C) for stock
- **Preparation**: Equilibrate to room temperature before use
- **Shelf Life**: One month once opened
- **Application**: Use filtered syringe

#### Process Steps
1. **Apply** liquid containing silicon-based compounds
2. **Spin-coat** onto wafer
3. **Heat** to densify into SiO₂

#### Storage Tips
- Store bulk SOG in refrigerator (32-40°F) to maximize shelf life

---

### Spin Coating Process

#### Standard Steps
1. **HDMS spin**
2. **HDMS bake**
3. **Resist spin**
4. **Resist bake**

#### HMDS (Hexamethyldisilazane)
- **Purpose**: Primer for photoresist adhesion
- **Function**: Makes silicon surface hydrophobic

#### Positive Resist Example
- **Type**: AZ-P4210
- **Behavior**: Exposed areas become soluble in developer

#### Equipment Recommendations
- **Preferred**: Vacuum spin coater for secure high-speed spinning

#### Reference Materials
- [Spin Coating Guide](https://www.ossila.com/pages/spin-coating)

---

## Thermal Processing Equipment

### Tube Furnace

#### Functions
- **Oxidation**: Grows SiO₂ layers
- **Diffusion**: Diffuses dopants into silicon
- **Annealing**: Activates dopants and repairs crystal damage
- **Alloying**: Forms metal-semiconductor contacts

#### System Components
- **Chamber**: Quartz/ceramic tube
- **Heating**: Surrounding heating elements
- **Control**: Temperature controller
- **Gas System**: O₂, N₂, forming gas flow control
- **Loading**: Wafer loading system

#### References
- [UofT Furnace Facility](https://keslerlab.mie.utoronto.ca/facilities/furnaces/)
- [DIY Build Guide](https://www.youtube.com/watch?v=oqOlrGPgng8)

---

### Hot Plate

#### Functions
- **Soft bake**: Photoresist processing
- **Annealing**: SOG to form glass layers

#### Cost Assessment
- **Low** cost option

#### Equipment Options
- [Amazon Canada Hot Plate](https://www.amazon.ca/s?k=MHP30M+Mini+Hot+Plate+Soldering+Preheating+Station+Preheater+Multi+Intelligent+Modes+with+Built-in+OLED+Display+60W+30X30mm+%2B+Power+Supply&crid=J73KQD1JPGRE&sprefix=mhp30m+mini+hot+plate+soldering+preheating+station+preheater+multi+intelligent+modes+with+built-in+oled+display+60w+30x30mm+%2B+power+supply%2Caps%2C62&ref=nb_sb_noss)

#### Important Notes
- Precision temperature control required
- Consumer hot plates may not be ideal but can serve as starting point

---

### Oven

#### Functions
- **Post-spin baking** and curing steps
- **General heating** and annealing processes

#### Cost Assessment
- **Low** cost option

---

## Wafer Processing

### Cleaving Jig

#### Function
- **Breaks** silicon wafers into smaller chips or dies
- **Ensures** clean, controlled cleaving along crystal planes

#### Applications
- Wafer dicing
- Sample preparation
- Device separation

## Process Summary

| Process | Method | Cost | DIY Feasibility | Safety Level |
|---------|--------|------|-----------------|--------------|
| HF Etching | Wet chemical | Very Low | Good | High Risk |
| Al Etching | Wet chemical | Low | Good | Medium Risk |
| Plasma Etch | Dry plasma | High | Poor | Medium Risk |
| Spin Coating | Physical | Low | Excellent | Low Risk |
| Tube Furnace | Thermal | Medium | Moderate | Medium Risk |
| Hot Plate | Thermal | Low | Excellent | Low Risk |

---
[← Back to Home](README.md)
