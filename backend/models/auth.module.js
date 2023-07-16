import pool from "../db.js";

class AuthModule{
    static async findOne(email){
        try {
            const query = {
                text: 'SELECT * FROM users WHERE email=$1',
                values: [email]
            };
            return await pool.query(query);
        } catch (error) {
            console.error(error);
        }
    }
    static async createUser(email, password) {
        try {
            const role = "ADMIN"
            const query = 'INSERT INTO users (email,password,role) VALUES($1,$2,$3)';
            const values = [email, password,role];
            await pool.query(query, values);
            return { success: true, message: 'Вы успешно зарегистрировались' };
        } catch (error) {
            console.error(error);
        }
    }
}

export default AuthModule;