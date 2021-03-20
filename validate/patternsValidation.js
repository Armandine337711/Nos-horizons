const patternValidation = {
    textOnlyPattern = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\-\s]+$/,
    passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-.]).{8,}$/,
    alphanumPattern = /^[a-zA-Z\d]{6,}$/,
    
}
module.exports = patternValidation;