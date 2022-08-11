const { withFaust } = require('@faustjs/next');

const nextConfig = {};

const withFaustConfig = {
  previewDestination: '/preview',
};

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust(nextConfig, withFaustConfig);