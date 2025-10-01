import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
    {
        DisplayName: {
            type: String,
            required: [true, "User nama wajib di sisi"],
            unique: true,
            trim: true
        },
        ProfilPicture: {
            type: String,
            required: [true, "Masukan Foto"]
        },
        Bio: {
            type: String,
            minlength: [10, "minimal 10 karakter"],
            maclength: [150, "maximal 150 karakter"],
            required: [true, "Masukkan Foto"],
            trim: true
        },
        User: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true

    },


)

const ProfileModel = mongoose.Model("Profile", ProfileSchema)

export default ProfileModel