function getEnviromentalVariable(name){
    const env = process.env[name];
    if(!env){
        throw new Error(`Missing required enviromental variable: ${name}`)
    }
    return env;
}

export const MONGO_DB_URI_ENV = getEnviromentalVariable("MONGO_DB_URI");