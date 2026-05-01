# Welcome to Toronto Hacker Fab

The Toronto Hacker Fab is a student-run effort to make semiconductor, photonics, and advanced hardware fabrication more accessible through low-cost tools, process development, open documentation, and hands-on experimentation.

The goal is simple: build real fabrication capability, document the process clearly, and give students a way to learn by actually making things.

This all started at CMU, where the first student-run fabrication facility started, and the idea has expanded to over ten facilities around the world, including three in Canada.

We know this can feel daunting at first. There is a real learning gap between coursework and what we do in the lab, and most programs give little emphasis or exposure to hands-on fabrication. Our mission is to make semiconductor education accessible to anyone willing to learn. We want students to understand how devices are actually made, from the material level to the final measurement—not only the equations, not only the simulations, but the real process.

## Recommended resources

Go through these first to get oriented with the wider ecosystem and vocabulary:

- **[ASML Semiconductor Manufacturing Overview](https://www.asml.com/en/news/stories/2021/semiconductor-manufacturing-process-steps)** — high-level overview of the main fabrication steps
- **[CMU Hacker Fab](https://hackerfab.ece.cmu.edu/)** — the original Hacker Fab project and the main inspiration for much of this work
- **[Hacker Fab Docs](https://docs.hackerfab.org/home)** — open documentation for tools, processes, and fabrication work across the network
- **[Sam Zeloof NMOS Fabrication Video](https://www.youtube.com/watch?v=s1MCi7FliVY)** — a walkthrough of a homemade transistor process

You do not need to absorb all of this immediately, but these ideas show up often in conversation and in the lab.

## Watch first: NMOS fabrication

One of the most important videos you will watch is Sam Zeloof's NMOS fabrication walkthrough. It connects the abstract semiconductor steps to the real sequence of material preparation, processing, and measurement.

<div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; margin: 1rem 0 1.5rem; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/s1MCi7FliVY"
    title="Sam Zeloof NMOS Fabrication Video"
    style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>

## What this looks like in our lab

The docs that follow cover the tools and processes we are building locally. Start by getting familiar with these pieces of the flow:

| Process area | Local reference |
| --- | --- |
| Thermal oxidation and dopant drive-in | [Tube Furnace Build](projects/tube-furnace/README.md) |
| Spin-on films and photoresist coating | [Spin Coater Build](projects/spin-coater/README.md) |
| Baseline device process | [NMOS Fabrication SOP](sop/nmos.md) |

## Terms that come up a lot

**wafer** — the silicon base everything is built on

**oxidation** — growing silicon dioxide as an insulating or masking layer

**lithography** — patterning the wafer using light and photoresist

**etching** — removing material from selected areas

**deposition** — adding thin films like metals or oxides

**doping** — changing silicon’s electrical properties

**metallization** — adding metal contacts so devices can be tested

---

## Continue in these docs

When you are ready to work with our lab and builds, use this site in order:

1. **[NMOS Standard Operating Procedure (SOP)](sop/nmos.md)** — step-by-step baseline N-MOSFET fabrication and characterization for our current setup
2. **[Tube Furnace Build](projects/tube-furnace/README.md)** — oxidation and dopant drive-in
3. **[Spin Coater Build](projects/spin-coater/README.md)** — spin-on dopant and photoresist
4. **[Lithography Stepper](projects/stepper/README.md)** — mask stepping (in progress)
5. **[Sputter Deposition System](projects/sputtering/README.md)** — upcoming PVD chamber notes

Happy fabricating.
