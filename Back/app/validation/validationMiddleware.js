module.exports = {

    validateBody(schema) {
        return (request, response, next) => {
            try {
                const validation = schema.validate(request.body);
                // validation contient un propriété error si qqc c'est mal passé
                if (validation.error) {
                    // Réponse d'erreur
                    console.log(validation.error.details)
                    response.status(400).json({error: validation.error});
                    return;
                }
                next();

            } catch (error) {
               
                next(error);
            }
        };
    },
};