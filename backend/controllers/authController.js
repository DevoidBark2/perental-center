import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authModule from "../models/auth.module.js";
class AuthController{
    async registration(req, res) {
        try {
            const { email, password } = req.body;
            const candidate = await authModule.findOne(email);

            if (candidate.rowCount !== 0) {
                return res.status(200).json({ success:false, message: "Такой пользователь существует!",candidate:candidate });
            }
            const hashPassword = bcrypt.hashSync(password,5);

            const result = await authModule.createUser(email,hashPassword)
            const token = jwt.sign({ email: email,role:"ADMIN"}, 'asdasda2131sad12312sad@#@$#$DSD', { expiresIn: '12h' });

            res.json({token:token,message:result.message})
        } catch (e) {
            console.log(e);
            return res.status(400).json({ message: "Error registration!" });
        }
    }
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const candidate = await authModule.findOne(email);

            if (candidate.rowCount === 0) {
                return res.status(200).json({ success: false, message: "Пользователь не найден" });
            }

            const validPassword = bcrypt.compareSync(password, candidate.rows[0].password);

            if (!validPassword) {
                return res.status(200).json({ success: false, message: "Неверный логин или пароль" });
            }

            const token = jwt.sign(
                { email: email, role: candidate["rows"][0]["role"] },
                'asdasda2131sad12312sad@#@$#$DSD',
                { expiresIn: '12h' }
            );

            return res.status(200).json({ success: true, message: "Вы успешно вошли в систему", token: token });
        } catch (error) {
            console.error(error);
            return res.status(400).json({ message: "Error login!" });
        }
    }
    async check(req, res) {
        const token = req.cookies.token;
        if (!token) {
            return res.status(403).json({ success: false, message: "Пользователь не найден" });
        }

        try {
            const decodedData = jwt.verify(token, 'asdasda2131sad12312sad@#@$#$DSD');
            res.json(decodedData);
        } catch (error) {
            return res.status(403).json({ success: false, message: "Недействительный токен" });
        }
    }
}

export default AuthController;