import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
    try {
        const user = await User.findAll({
            attributes: ['id', 'email']
        });
        res.json(user);

    }catch (error) {
        console.log(error);
    }
};

export const createUser = async (req, res) => {
    const {email,password, confPassword} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password dan konfirmasi password tidak cocok"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await User.create({
            email: email,
            password: hashPassword,
        });

        res.json({msg: "User berhasil dibuat"});
    }catch (error) {
        console.log(error)
    }
}


export const Login = async(req, res) => {
    try{
        const user = await User.findAll({
            where:{
                email:req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg: "wrong password"});
        const userId = user[0].id;
        const email = user[0].email;
        const accessToken = jwt.sign({userId, email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15s'});
        const refreshToken = jwt.sign({userId, email}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1d'});
        await User.update({refresh_token: refreshToken}, {
            where:{
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });
        res.json({accessToken});
    }catch (error) {
        res.status(404).json({msg: "Email tidak ditemukan"});
    }
}

export const Logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const user = await User.findAll({
        where: {
            refresh_token: refreshToken
        }
    });
    if (!user[0]) return res.sendStatus(403);
    const userId = user[0].id;
    await User.update({refresh_token: null}, {
        where: {
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}