import pool from "../db.js";

class AuthModule{
    static async findOne(email){
        try {
            const query = {
                text: 'SELECT * FROM users WHERE email=$1',
                values: [email]
            };
            await pool.query(query);
            return { success: true, message: `Пользователь найден` };
        } catch (error) {
            console.error(error);
        }
    }
    static async createUser(){

    }
}

export default AuthModule;