'use strict';

exports.config = {
  app_name: ['Node Test'],
  license_key: process.env.NEWRELIC_LICENSE_KEY,
  profile_trace: true,
  logging: {
    level: 'info',
  },
  log_to_newrelic: true,
  log_file_name: './log.txt',
};
