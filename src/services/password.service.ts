import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

export const hashPassword = async (password:string):Promise<string>=>{
    return await bcrypt.hash(password,SALT_ROUNDS)
}

//leer y comparar con el hash de la base de datos

export const comparePasswords = async(password:string,hash:string):Promise<boolean>=>{
    return await bcrypt.compare(password,hash)
}