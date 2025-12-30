---
layout: text
permalink: /ghidra-amp-achievements
title: Ghidra AMP Achievements
---

# AMP Ghidra Achievements
Under the [Assured Micropatching (AMP)](https://www.darpa.mil/program/assured-micropatching) program, we've improved the [Ghidra](https://ghidra-sre.org/) decompiler through a series of improvements to decompilation and Ghidra itself. Below, you can find a list of the most notable ones.

## Select Achievements 
- A data serialization format as well as asynchronous data sharing between decompilers (Ghidra, IDA Pro, Binary Ninja, and angr decompiler): [BinSync](https://github.com/binsync/binsync)

- A common programmatic interface and type lifter for decompiler interaction: [LibBS](https://github.com/binsync/libbs), which powers decompiler tools such as [AI based variable renaming](https://github.com/mahaloz/DAILA)

- Directly interacting with Sleigh/Ghidra P-Code in Python: [Pypcode](https://github.com/angr/pypcode)

- A control-flow graph structuring algorithm that's gradually [making its way into Ghidra](https://github.com/NationalSecurityAgency/ghidra/issues/6133): [SAILR](https://github.com/mahaloz/sailr-eval)

- The most advanced variable name prediction solution in decompiled code: [VarBERT](https://github.com/sefcom/varbert) with a [Ghidra plugin](https://github.com/binsync/varbert_api)

- Full support for [lifting from Sleigh/Ghidra](https://github.com/angr/angr/blob/8dec7fbe5537791d71f93e038b06b9d73544b06f/angr/engines/pcode/lifter.py) P-Code in angr and angr decompiler.