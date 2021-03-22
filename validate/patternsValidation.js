const patternValidation = {
    textOnlyPattern : /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\-\s]+$/,
    passwordPattern : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-.]).{8,}$/,
    alphanumPattern : /^[a-zA-Z\d]{6,}$/,
 /* mailPattern : /^[a-z\d\.\-\_]+)@{1}([a-z\d\.\-]{2,})[.]([a-z]{2,5})$/,*/

}
module.exports = patternValidation;