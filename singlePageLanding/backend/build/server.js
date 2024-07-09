"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const validator_1 = require("validator");
require('dotenv').config();
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
mongoose_1.default.connect(process.env.DB_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));
const emailSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    }
});
// Use a function to add a custom build method to the schema
emailSchema.statics.build = (attrs) => {
    return new Email(attrs);
};
//create the model
const Email = mongoose_1.default.model('Email', emailSchema);
app.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    // Use validator to check if the email is valid
    if (!(0, validator_1.isEmail)(email)) {
        return res.status(400).send({ message: 'Invalid email address.' });
    }
    const existingEmail = yield Email.findOne({ email });
    if (existingEmail) {
        return res.status(400).send({ message: 'Email already in use.' });
    }
    const newEmail = new Email({ email });
    yield newEmail.save();
}));
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
