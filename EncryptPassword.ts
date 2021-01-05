import bcrypt from 'bcrypt'
export default async function EncryptPassword (password:string){
    const salt= await bcrypt.genSalt(12)
    return bcrypt.hashSync(password,salt)
}
