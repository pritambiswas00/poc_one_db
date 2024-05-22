import  Joi from 'joi';

export enum Envrionment {
    DEV = 'DEV',
    PROD = 'PROD',
    UAT = 'UAT'
}

interface IConfig {
    PORT:string,
    NODE_ENV: Envrionment
}

export const configSchema = Joi.object<IConfig>({
    PORT: Joi.string().max(4),
    NODE_ENV: Joi.string().valid(Envrionment.DEV, Envrionment.PROD, Envrionment.UAT),
});