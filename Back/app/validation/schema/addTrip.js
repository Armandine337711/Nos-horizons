const Joi = require ('joi');

const tripSchema = Joi.object({
    title: Joi.string().required(),
    summary: Joi.string().allow(''),
    country_code: Joi.string().length(3).required(),
    covert_picture: Joi.string().allow(''),
    
});
module.exports = tripSchema;