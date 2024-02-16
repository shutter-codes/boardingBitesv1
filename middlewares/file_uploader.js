const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");
const {cloudName, cloudinaryApiKey, cloudinaryApiSecret} = require('../config');

cloudinary.config({
	cloud_name: "dzx2bhq4l",
	api_key: "825929245355794",
	api_secret:" AvItG_a-KcMyKeD_zAiWG8hbmqs"
});

const riderStorage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: 'user-files',
	},
	allowedFormats: ["jpg", "png", "pdf","jpeg"]
});

const propertyImages = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: 'properties',
	},
	allowedFormats: ["jpg", "png","pdf","jpeg"],
});

const uploadRiderFiles = multer({
	storage: riderStorage,
	limits: {
		fileSize: 1024 * 1024 * 2
	},
	fileFilter (req, file, cb) {
		if (!file.originalname.match(/\.(png|jpg|pdf|jpeg)$/))
			return cb(new Error('Please upload files in correct format!'));

		cb (undefined, true);
	}
})

const uploadPropertyImages = multer ({
	storage: propertyImages,
	limits: {
		fileSize: 1024 * 1024 * 5 // 5 MB
	},
	fileFilter (req, file, cb) {
		if (!file.originalname.match(/\.(jpg|png|jpeg|pdf)$/))
			return cb(new Error('please upload an image file only!'));

		cb (undefined, true);
	}
});

module.exports = {
	uploadRiderFiles,
	uploadPropertyImages
}