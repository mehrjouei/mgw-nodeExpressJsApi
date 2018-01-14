import { Router, Request, Response } from 'express';
import User from '../models/User';
import * as app from '../server';
import * as jwt from 'jsonwebtoken';
import Roles from '../models/Roles';
import Resources from '../models/Resources';

class AuthRouter {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public authenticate(req: Request, res: Response): void {
        const username: string = req.body.username;
        console.log(req.body);
        User.findOne({ username })
            .then((user: any) => {
                if (!user) {
                    res.json({ success: false, message: 'Authentication failed. User not found.' });
                } else if (user) {

                    // check if password matches
                    if (user.password != req.body.password) {
                        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                    } else {

                        // if user is found and password is right
                        // create a token with only our given payload
                        // we don't want to pass in the entire user since that has the password
                        const payload = {
                            username: user.username
                        };
                        var token = jwt.sign(payload, app.default.get('superSecret'), {
                            expiresIn: 1440 // expires in 24 hours
                        });

                        // return the information including token as JSON
                        res.json({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token
                        });
                    }

                }

            })
            .catch((error) => {
                res.status(500).json({ error });
            })
    }

    // set up our routes
    routes() {
        this.router.post('/authenticate', this.authenticate);
    }

    loginRequired(req: any, res: any, next: any) {
        console.log(req.user);
        if (req.user) {
            let username = req.user.username;
            let url = req.originalUrl;
            User.findOne({ username })
                .populate({
                    path: 'Roles',
                    model: 'Roles',
                    populate: {
                        path: 'resources',
                        model: 'Resources'
                    }
                })
                .exec(function (err, user: any) {
                    var flag=false;
                    for (let role of user.Roles) {
                        for (let res of role.resources) {
                            var reg = new RegExp(res.resourceContentReg);
                            if (reg.exec(url)) {
                                flag=true;
                                next();
                            }
                        }
                    }
                    if (!flag) {
                        return res.status(401).json({ message: 'Unauthorized user!' }); 
                    }
                })


        } else {
            return res.status(401).json({ message: 'Unauthenticate user!' });
        }
    }
}

const authRoutes = new AuthRouter();
authRoutes.routes();


export default authRoutes;
// export default authRoutes.loginRequired;