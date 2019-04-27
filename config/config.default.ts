import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config: PowerPartial<EggAppConfig> = {};

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1555722509908_2866';
  // add your egg config in here
  // add middleware
  config.middleware = ['forbidIP'];
  // pass options config for the corresponding middleware
  config.view = {
    defaultViewEngine: 'ejs',
    mapping: {
      '.ejs': 'ejs',
    },
  };

  // add your special config in here
  const bizConfig = {};

  // the return config will combines to EggAppConfig
  return {
    ...(config as {}),
    ...bizConfig,
  };
};
