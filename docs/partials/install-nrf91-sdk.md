
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The nRF Connect SDK (NCS) is the Nordic fork of the Zephyr project. It is maintained outside of the main branch of Zephyr. Because of this, we will be installing this in a separate directory from other Zephyr installs (such as the ESP32). Note the folder names below. If you are following any external guides, they may advise you to install in `~/zephyrproject`. Please adjust those commands accordingly.

With `west` installed, grab the Device SDK:


```
cd ~
west init -m https://github.com/nrfconnect/sdk-nrf --mr v1.6.0main ~/zephyr-nrf
cd zephyr-nrf/
west update
west patch
```

Tell `west` to automatically configure CMake:

```
west zephyr-export
```

Lastly, install the remaining dependencies:

<Tabs
groupId="west-installation"
defaultValue="global"
values={[
{label: 'Install within a virtualenv', value: 'virtualenv'},
{label: 'Install globally', value: 'global'},
]}>
<TabItem value="virtualenv">

```
pip install -r ~/zephyr-nrf/zephyr/scripts/requirements.txt
```

</TabItem>
<TabItem value="global">

```
pip3 install -r ~/zephyr-nrf/zephyr/scripts/requirements.txt
```

</TabItem>
</Tabs>
