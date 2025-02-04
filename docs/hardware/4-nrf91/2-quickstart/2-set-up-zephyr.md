---
id: set-up-zephyr
title: Set up Zephyr for nRF9160
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Zephyr Setup Overview

Golioth is implemented on IoT devices using [Device SDKs](/firmware). These are based on different embedded Real Time Operating Systems (RTOS). Currently Golioth targets the [Zephyr Project](https://www.zephyrproject.org/) and builds upon the APIs & tools of Zephyr. As such, prior experience with Zephyr will be helpful when working with [Golioth's Zephyr Device SDK](https://github.com/golioth/zephyr-sdk). Refer to Zephyr's [detailed documentation](https://docs.zephyrproject.org/) when running into issues.

The nRF9160 Feather and all Nordic Semiconductor devices utilizing Zephyr require the [nRF Connect SDK (NCS)](https://www.nordicsemi.com/Products/Development-software/nRF-Connect-SDK). Nordic Semiconductor maintains a fork of the Zephyr project that includes some distinct features and IP, including the firmware for the cellular modem on the nRF9160. We will install the nRF Connect SDK in a directory in your home location separate from other Zephyr projects shown for Golioth (in a directory called `zephyr-nrf`)

### Install West

import SetupWestNRF91 from '/docs/partials/setup-west-nrf91.md'

<SetupWestNRF91/>

### Installing the NRF Connect SDK

import InstallNRFSDK from '/docs/partials/install-nrf91-sdk.md'

<InstallNRFSDK/>

### Installing the Zephyr SDK Toolchain

The nRF9160 is an ARM based device, so we will use the ARM toolchains (gcc, gdb, etc) included in the Zephyr SDK

import InstallZephyrSDKtoolchain from '/docs/partials/install-zephyr-sdk-toolchain.md'  

<InstallZephyrSDKtoolchain/>

### Build firmware for the nRF9160

Your system is all set up and ready to start building & flashing with Zephyr. Verify by building a minimal sample, in this case for the CircuitDojo nRF91 feather:

```
cd ~/zephyr-nrf/zephyr
west build -p auto -b  circuitdojo_feather_nrf9160_ns samples/basic/minimal
```
Alternatively, build for the nRF9160_DK with the following commands:

```
cd ~/zephyr-nrf/zephyr
west build -p auto -b  nrf9160dk_nrf9160_ns samples/basic/minimal
```

### Flash firmware to the device

If you are using a J-Link hardware programmer and already have the software for that tool set up on your system, flashing firmware is as simple as running:

```bash
west flash
```

There is a USB bootloader available for flashing boards like the nRF9160 Feather or the Thingy:91. In the next section we'll detail how to install the [software to flash code via the bootloader](flash-firmware/bootloader), as well as how to install [software for the J-Link programmer](flash-firmware/hardware-programmer) and the nRF9160 DK board.
