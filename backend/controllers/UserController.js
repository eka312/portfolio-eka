import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const UserLogin = async (req, res) => {
    try {
        const user = await User.findOne({
            where:{email: req.body.username}
        });

        if (!user) {
            return res.status(404).json({ message: "User tidak ditemukan" });
        }

        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) return res.status(401).json({msg: "Password Salah"});

        const token = jwt.sign({userId: user.id}, "rahasia", {expiresIn: 'id'});
    }catch (error) {
        res.status(500).json({msg: error.message});
    }
};