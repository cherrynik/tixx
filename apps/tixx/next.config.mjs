import '../../libs/utils/env/src/client.mjs';
import '../../libs/utils/env/src/server.mjs';
import { composePlugins, withNx } from '@nx/next';
import i18nConfig from './next-i18next.config.mjs';

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  ...i18nConfig,

  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },

  reactStrictMode: true,

  compiler: {
    // For other options, see https://styled-components.com/docs/tooling#babel-plugin
    styledComponents: true,
    // removeConsole: true,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

export default composePlugins(...plugins)(nextConfig);
