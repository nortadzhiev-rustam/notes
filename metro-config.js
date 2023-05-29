const { getDefaultConfig } = require("@expo/metro-config");
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExst.push("cjs");
module.exports = defaultConfig;
