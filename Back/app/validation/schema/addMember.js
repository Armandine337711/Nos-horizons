const Joi = require ('joi');
const memberDataMapper= require ('../../datamapper/memberDataMapper');

const textOnlyPattern = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\-\s]+$/;
const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-.]).{8,}$/
const requireMessage = 'Ce champ est obligatoire';

const memberSchema = Joi.object({
    nickname: Joi.string().alphanum().min(6).required().messages({
        'string.alphanum':'Pseudo ne doit contenir que des chiffres et des lettres',
        'string.min':'Pseudo doit contenir au moins 6 caractères',
        'any.require': requireMessage}),
    first_name: Joi.string().regex(textOnlyPattern).required().messages({
        'string.pattern.base':'Firstname ne contient que des lettres ou des -',
        'any.require': requireMessage}),
    last_name: Joi.string().regex(textOnlyPattern).required().messages({
        'string.pattern.base':'lastname ne contient que des lettres ou des -',
        'any.require': requireMessage}),
    email: Joi.string().email().required().messages({
        'string.email': 'email doit contenir une adresse mail VALIDE',
        'any.require': requireMessage}),
    password: Joi.string().regex(passwordPattern).strip().required().messages({
        'string.pattern.base': 'Le mot de passe doit contenir au moins 8 caractères avec minimum une majuscule, une minuscule et un caractère spécial',
        'any.require': requireMessage}),
    })

module.exports = memberSchema;