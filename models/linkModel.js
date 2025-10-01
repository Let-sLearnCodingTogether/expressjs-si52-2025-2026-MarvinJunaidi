import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
    {
        Title: {
            type: String,
            required: [true, "User nama wajib di sisi"],
            unique: true,
            trim: true
        },
        Icon : {
            type: String,
            required: [true, "Masukan Foto"]
        },
        url : {
            type: String,
            required: [true, "Masukkan URL"],
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

const LinkModel = mongoose.Model("Link", LinkSchema)

export default LinkModel