# 📥 Deposition Techniques

> Comprehensive guide to various deposition methods for thin film growth and material layering in semiconductor fabrication.

## Overview

Deposition refers to the technique used to grow or deposit thin layers of various materials onto a substrate (e.g., metal, oxide, silicon). This section covers both professional and DIY-accessible methods.

## Sputtering

### Materials Deposited
- Gate oxides
- Metal gate contacts
- High-quality metal films
- Complex compounds and alloys
- Refractory metals (e.g., tungsten, molybdenum)

### Cost Assessment
- **High** (requires vacuum chamber and RF power supply)

### Process Summary
Physical vapor deposition using plasma to knock atoms off a target material:
1. Atoms travel to the substrate and condense into a thin film
2. Requires high vacuum (~10^-3 Torr)
3. Uses inert gas (e.g., argon) and high voltage (200-500V or 13.56 MHz RF)

### Equipment Required
- **Vacuum chamber**
- **Vacuum pump**
- **RF/DC power supply**
- **Target material**
- **Needle valve** for gas control
- **Substrate holder**

### Reference Materials
- [Sputtering Documentation](https://docs.google.com/document/d/1rf3GRqafH8iqekn8YzyOdSB1IbM-5DOVs08c3u3Zl0Y/edit?tab=t.0#heading=h.cklhwj1zlb95)
- [HackerFab Sputtering Chamber Guide](https://docs.hackerfab.org/home/fab-toolkit/deposition/sputtering-chamber)

---

## Electroless Nickel Plating

### Materials Deposited
- Nickel and other metals

### Cost Assessment
- **Low** (simple container-based chemical process)

### Process Summary
A chemical reaction deposits metal without electricity - ideal for DIY applications.

### Chemical Components
- **Nickel salt** (e.g., nickel sulfate or chloride) → source of Ni²⁺
- **Reducing agent** (e.g., sodium hypophosphite)
- **Complexing agents**, stabilizers, and pH buffers

### Chemical Reaction
```
Ni²⁺ + H₂PO₂⁻ + H₂O → Ni⁰ + H₂PO₃⁻ + 2H⁺
```

### Important Notes
- Non-catalytic surfaces like silicon require activation
- **Reference**: [Process Documentation Folder](https://drive.google.com/drive/u/2/folders/1o5fxdsvbNqkaUjlJolox5KOtbqi4PFFn)

---

## Spin Coating

### Materials Deposited
- **Photoresist**
- **Spin-on-glass (SOG)**
- **Dielectric polymers**
- **Solution-processed semiconductors**

### Cost Assessment
- **Low** (DIY-friendly)

### Process Summary
A liquid material is dispensed on a substrate and spread evenly by spinning at high speed.

### Required Components
- **High-speed motor** (e.g., PC cooling fan or hard drive motor)
- **Chuck to hold substrate** (3D printable)
- **Enclosure** to contain splatter
- **Arduino-based motor speed controller** (optional)
- **Vacuum chuck** (optional)

### Equipment Resources
- **Parts List**: [Detailed Spreadsheet](https://docs.google.com/spreadsheets/d/1n8dB-Vh3pZN99sLe7-j91mzc43uWQ1A1lQEvetoBo_8/edit?gid=0#gid=0)

---

## Thermal Evaporator

### Materials Deposited
- **Aluminum** and other metals

### Cost Assessment
- **High** (requires high vacuum and high temperatures)

### Process Summary
Metal is heated in a crucible under vacuum and evaporated onto a cooler substrate.

### Equipment and Setup

#### Vacuum System
- **Turbo pump** (e.g., Hi-Cube 80)
- **KF-40 plate**, flanges, and hex screws (10-32 × 5/8")
- **Pfeiffer MPT 200 gauge** for vacuum monitoring
- **KF-25 to KF-16 adapter** for gauge

#### Crucible Configuration
- **Tungsten filament** (heat source)
- **Alumina crucible** (holds aluminum)
- **Insulating bucket**

### Process Steps
1. **Evacuate chamber** to ~10^-6 Torr
2. **Heat crucible** to ~1200°C
3. **Vaporized aluminum** condenses on the substrate

### Reference Materials
- [Lesker Deposition Materials Notes](https://www.lesker.com/newweb/deposition_materials/deposition-materials-notes.cfm?pgid=al1)

---

## Atomic Layer Deposition (ALD)

> **Note**: Likely out of scope for DIY but documented here for reference.

### Process Summary
- **Sequential exposure** of substrate to precursors
- **Highly precise**, ultra-thin film deposition

### Equipment Requirements
- **Vacuum chamber** with multiple ports
- **Vacuum pump** (e.g., Hi-Cube 80)
- **Pressure gauge** (e.g., Pfeiffer MPT200)
- **Heated crucible system**: tungsten filament, alumina crucible, insulating bucket

### DIY Alternative
**Electroless plating** is a more accessible deposition method for DIY applications due to:
- Lower equipment costs
- Simpler process control
- No high vacuum requirements

## Summary Comparison

| Method | Cost | Complexity | Materials | DIY Feasibility |
|--------|------|------------|-----------|-----------------|
| Sputtering | High | High | Metals, oxides, alloys | Limited |
| Electroless Plating | Low | Low | Metals (Ni, etc.) | Excellent |
| Spin Coating | Low | Low | Polymers, resists | Excellent |
| Thermal Evaporation | High | High | Metals (Al, etc.) | Limited |
| ALD | Very High | Very High | Precise thin films | Not feasible |

---
[← Back to Home](README.md)
