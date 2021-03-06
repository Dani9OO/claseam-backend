// Library required to make validations in JavaScript

const Joi = require('@hapi/joi');

module.exports = {
    // Function to validate user data
    user: data => {
        let schema = Joi.object({
            forename: Joi.string(),
            surname: Joi.string(),
            email: Joi.string()
                .email()
                .required(),
            
            /*
            *   Passwords must have the following requirements:
            *       - Be at least 6 characters long
            *       - Have at least 1 lowercase letter
            *       - Have at least 1 uppercase letter
            *       - Have at least 1 number 
            */
            
            password: Joi.string()
                .regex(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])"))
                .min(6)
                .required(),

            type: Joi.string(),
            group: Joi.string(),
            grades: Joi.array()

        });
        return schema.validate(data);
    }
};