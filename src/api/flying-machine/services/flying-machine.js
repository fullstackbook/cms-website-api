'use strict';

/**
 * flying-machine service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::flying-machine.flying-machine');
