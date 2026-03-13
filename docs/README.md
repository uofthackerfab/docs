# 👋 Welcome to the Toronto Hacker Fab Docs

Welcome to the internal documentation and SOP repository for the Toronto Hacker Fab! If you're reading this, you're probably about to build something awesome—or you're trying to figure out why your last wager with silicon didn't pan out. Either way, you're in the right place.

These docs form the open-source backbone of our hardware builds and fabrication processes. They are kept up to date to eliminate repetitive explanations, ensure consistency across fabrication runs, and centralize our hardware iterations so that future cohorts have a rock-solid foundation to build upon.

---

## 📚 Where Should I Start?

If you are new here and going through onboarding, we highly recommend reading through the documentation in the following order. It starts with the core process and then dives into the custom equipment that makes it all happen:

### 🌟 1. The Core Process
*   **[NMOS Standard Operating Procedure (SOP)](sop/nmos.md)**
    *Start here.* This is the step-by-step master plan for fabricating our baseline N-type MOSFETs using our current lab setup. It covers everything from our Bill of Materials down to electrical characterization.

### 🛠️ 2. Our Hardware Arsenal
Once you know *what* we're making, get to know the tools we've engineered to make it:

*   **🔥 [Tube Furnace Build](projects/tube-furnace/README.md)**
    Get familiar with our heavy-hitter. This high-temperature furnace is crucial for oxidation and dopant drive-in. Read up on its components, electrical safety, and programmed PID tuning profiles.

*   **🌀 [Spin Coater Build](projects/spin-coater/README.md)**
    Uniformity is key. Learn how our customized, Arduino-controlled spin coater perfectly deposits micro-thin films of spin-on dopant and photoresist across our silicon dies.

### 🔭 3. Into the Future (WIP Projects)
We are constantly expanding our capabilities. Check out what we're currently researching and prototyping to push the fab forward:

*   **🔦 [Lithography Stepper](projects/stepper/README.md)**
    Follow our progress on building a precision optical system designed to step-and-repeat intricate mask patterns onto photoresist.

*   **⚡ [Sputter Deposition System](projects/sputtering/README.md)**
    Review the first-principles physics and engineering constraints behind our upcoming DC Magnetron vacuum PVD chamber.

---

> *"Theory is when you know everything but nothing works. Practice is when everything works but no one knows why. In our lab, theory and practice are combined: nothing works and no one knows why."* 

Happy fabricating! 🚀
