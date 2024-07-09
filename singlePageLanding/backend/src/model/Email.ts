import mongoose from 'mongoose';

interface EmailAttributes {
	email: string;
}

interface EmailDoc extends mongoose.Document {
	email: string;
}

interface EmailModel extends mongoose.Model<EmailDoc> {
	build(attrs: EmailAttributes): EmailDoc;
}



const emailSchema = new mongoose.Schema({
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
emailSchema.statics.build = (attrs: EmailAttributes) => {
	return new Email(attrs);
};


//create the model
const Email = mongoose.model<EmailDoc, EmailModel>('Email', emailSchema);

export { Email };