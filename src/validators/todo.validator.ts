import Joi from "joi";

const todoValidator = Joi.object({
    title: Joi.string().required().messages({
        "string.empty": "This field is empty."
    }),
    description: Joi.string().required().messages({
        "string.empty": "This field is empty."
    }),
});

export {
    todoValidator,
}