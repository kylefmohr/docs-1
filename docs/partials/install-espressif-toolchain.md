import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="os"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'MacOS', value: 'macos'},
{label: 'Windows', value: 'windows'},
]}>

import InstallEspressifToolchainUnix from '/docs/partials/install-espressif-toolchain-unix.md'
import InstallEspressifToolchainWindows from '/docs/partials/install-espressif-toolchain-windows.md'

<TabItem value="linux">
<InstallEspressifToolchainUnix />
</TabItem>

<TabItem value="macos">
<InstallEspressifToolchainUnix />
</TabItem>

<TabItem value="windows">
<InstallEspressifToolchainWindows />
</TabItem>
</Tabs>
