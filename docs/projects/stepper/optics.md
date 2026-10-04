# Stepper optics, from zero

How the stepper turns an HDMI frame into a pattern on a wafer, built up one idea at a time. Each step only uses ideas from the steps before it.

## 1. Light, rays and power

Light is an electromagnetic wave, like a radio wave at a much higher frequency. Our 410 nm LEDs run at f = c / λ ≈ 730 THz, far too fast for any detector to follow, so we only ever measure power:

- **Irradiance** (mW/cm²): power landing per unit area. This is what the photoresist feels.
- **Dose** (mJ/cm²): irradiance × time. The resist clears once the dose passes a threshold.

A **ray** is bookkeeping: a line perpendicular to the wavefronts, pointing where the energy flows. Light spreading from a point has spherical wavefronts and rays fanning out. A plane wave has flat wavefronts and parallel, or **collimated**, rays. Ray optics tells us where light goes. Waves come back in step 5 to tell us how sharp it can be.

## 2. Every ray is two numbers

A ray is described by its **height y** and its **slope u**. That is the mental model everything else rests on.

- A point source has one position and many angles.
- A collimated beam has many positions and one angle.
- An LED die has many positions *and* many angles. Every point on it emits into the whole hemisphere, with power falling off as cos θ.

Mirrors and lenses turn out to be linear maps on (y, u). One quantity those maps conserve explains most of the stepper's limits.

## 3. Mirrors: tilt by α, swing by 2α

A ray leaves a mirror at the same angle from the normal that it arrived at. Tilt the mirror by α and its normal turns by α, so the reflected ray swings by 2α. That is the whole principle of the DMD, covered with an interactive diagram in [How a DMD steers light](projects/stepper/README.md?id=how-a-dmd-steers-light).

## 4. Lenses are 2×2 matrices

A lens bends each ray toward the axis by an angle proportional to the height where it crosses: Δu = −y / f. A ray through the centre is not bent. With small angles, a whole optical system is just two kinds of matrix, multiplied in the order light meets them:

```
travel d:   [y']   [1  d] [y]        thin lens f:   [y']   [  1    0] [y]
            [u'] = [0  1] [u]                       [u'] = [-1/f   1] [u]
```

Multiplying travel s, a lens, then travel s′ gives a system matrix [A B; C D]. **Forming an image** means every ray from one object point lands on one image point, whatever its angle. So the landing height must not depend on the slope, which means B = 0. That gives the thin lens equation and the magnification:

```
1/s + 1/s' = 1/f          M = A = −s'/s
```

<iframe class="hf-widget" src="widgets/lens-imaging.html" title="Interactive: a lens as a 2x2 map" loading="lazy"></iframe>

## 5. Cones, NA and the seesaw

The rays from one object point that make it through the system fill a **cone**. Its size is written as the **numerical aperture**, NA = sin θ in air, where θ is the cone's half-angle. NA 0.25 is a 14.5° cone, roughly f/2.

Every matrix above has determinant 1, so the whole system does too: AD − BC = 1. At an image B = 0, so D = 1/M, and cone widths scale by 1/M. That is the **seesaw**:

```
NA_object = |M| × NA_image
```

Shrink the picture 10× and each point's cone gets 10× wider. No arrangement of lenses and mirrors can beat this; light can be thrown away but never squeezed into a smaller size and a smaller angle at once (this conserved quantity is called étendue). The power in a uniformly filled cone grows as NA², so the share of a mirror's light the lens catches is:

```
η = (NA_accept / NA_supply)²
```

<iframe class="hf-widget" src="widgets/seesaw.html" title="Interactive: the magnification and cone-angle seesaw" loading="lazy"></iframe>

## 6. Waves come back: blur and focus

A perfectly sharp point contains every spatial frequency, but the lens only passes angles up to its NA, so it acts as a low-pass filter. A point images to an **Airy spot**, and the wafer pattern is the ideal picture blurred by it. Move the wafer off focus and the cone smears into a disc, so a wider cone also has a thinner window of good focus:

```
spot size        d  = 1.22 λ / NA
depth of focus   Δz = ± λ / (2 NA²)
```

<iframe class="hf-widget" src="widgets/blur-focus.html" title="Interactive: Airy spot and depth of focus" loading="lazy"></iframe>

## 7. Inside the projector

- **HDMI to mirrors.** Each mirror is only ever fully ON or OFF. The controller splits each 8-bit colour into bit-planes and shows them for times proportional to 2ᵏ, so a pixel value v is ON about v / 255 of the time. Colours take turns within each frame. For lithography, send pure white to expose and pure black not to, with gamma and image processing turned off.
- **LED to DMD.** A condenser collects the LED's light, but a die of real size can never become a perfectly parallel beam. A TIR prism folds that light onto the DMD and lets the image back out.
- **Where the supply cone comes from.** Our DMD (DLP471TP) tilts its mirrors ±17°, not the ±12° of older parts. The ON cone (0°) must not overlap the flat-state cone (−34°), so the supply cone is capped at 17°: **NA_supply ≤ sin 17° ≈ 0.29**.

A projector magnifies about 100× onto a wall, so by the seesaw its lens can accept the DMD's whole cone and nothing is wasted. Our build reverses that.

## 8. Our build, in numbers

We remove the projection lens and put a 10× DIN microscope objective in its place, run backwards. Rays are reversible, so placing the DMD where the objective normally forms its image puts a 10× smaller copy at its working distance, where the wafer goes. Treated as one thin lens:

| Quantity | Value | From |
|---|---|---|
| Focal length f | 16 mm | DIN geometry, s + s′ ≈ 195 mm, \|M\| = 0.1 |
| DMD to lens s, lens to wafer s′ | 176 mm, 17.6 mm | 1/176 + 1/17.6 = 1/16 |
| Magnification M | −0.1 | −s′/s, the picture is 10× smaller and upside down |
| NA at the wafer | 0.25 | the objective's rating |
| Acceptance NA at the DMD | 0.025 | seesaw: 0.1 × 0.25 |
| Light collected η | about 0.8–1.1% | (0.025 / 0.25–0.29)² |
| Picture on the wafer | 1.04 × 0.58 mm | 10.37 × 5.83 mm × 0.1 |
| One mirror on the wafer | 0.54 µm | 5.4 µm × 0.1 |
| Smallest reliable line | about 2.0 µm | 1.22 × 0.41 / 0.25, about 4 mirrors wide |
| Depth of focus | ± 3.3 µm | 0.41 / (2 × 0.25²) |

About 99% of each ON mirror's light misses the objective and is absorbed in the tubes. That is the unavoidable cost of 10× reduction, and it sets our exposure times. The Z stage exists to hold the wafer inside the ±3.3 µm focus window.
