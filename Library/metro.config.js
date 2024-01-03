
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
getDefaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;
