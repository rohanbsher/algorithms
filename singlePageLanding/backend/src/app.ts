import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { isEmail } from 'validator';
import cors from 'cors';
import { Email } from './model/Email'; // Adjust the import path as needed

// Initialize express app
const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/signup', async (req: Request, res: Response) => {
    const { email } = req.body;

    if (!isEmail(email)) {
        return res.status(400).send({ message: 'Invalid email address.' });
    }

    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
        return res.status(409).send({ message: 'Email already in use.' });
    }

    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(200).send({ "Thanks for signing up watch out for updates": email });
});

app.post('/cleanUpDb', )



// Export the app for use in other files
export { app };
