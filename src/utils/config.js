const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  getEnvVar: (key, defaultValue = '') => {
    const value = process.env[key];
    if (!value && defaultValue === '') {
      throw new Error(`Missing environment variable: ${key}`);
    }
    return value || defaultValue;
  },
};
