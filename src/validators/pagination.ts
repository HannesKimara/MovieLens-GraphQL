import * as Joi from 'joi';

const MoviePageSchema: Joi.ObjectSchema = Joi.object({
    limit: Joi.number()
        .min(1)
        .max(20)
        .default(20),

    skip: Joi.number()
        .min(1)
        .default(1)
})

const SubsetPageSchema: Joi.ObjectSchema = Joi.object({
    limit: Joi.number()
        .min(1)
        .max(10)
        .default(10),

    skip: Joi.number()
        .min(1)
        .default(1)
})

export {
    MoviePageSchema, SubsetPageSchema
}
