import {Express} from 'express';

export const register = (app: Express) => {
    app.get('/', (req, res) => {
        res.render('index');
    })
}
