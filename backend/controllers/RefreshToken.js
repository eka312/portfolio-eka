import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";



export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.sendStatus(401);
        const user = await User.findAll({
            where: {
                refresh_token: refreshToken
            }
        });
        if (!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) =>{
            if (err) return res.sendStatus(403);
            const userId = user[0].id;
            const email = user[0].email;
            const accessToken = jwt.sign({userId, email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '50s'});
            res.json({accessToken});
        });
    } catch (error) {
        console.log(error);
    }
}