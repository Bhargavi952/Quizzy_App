const mongoose = require("mongoose")
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String},
    email: {type: String},
    password: {type: String, required: true, minLength: 8}
},
{
    timestamps: true,
    versionKey: false
})

userSchema.pre("save", function (next) {
	// console.log(this);
	if (!this.isModified("password")) {
		return next();
	}
	bcrypt.hash(this.password, 8, (err, hash) => {
		if (err) {
			return next(err);
		}
		this.password = hash;
		next();
	});
});

userSchema.methods.checkPassword = function (password) {
	return new Promise((resolve, reject) => {
		bcrypt.compare(password, this.password, (err, same) => {
			if (err) {
				return reject(err);
			}
			return resolve(same);
		});
	});
};

const User = mongoose.model("user", userSchema)

module.exports = User