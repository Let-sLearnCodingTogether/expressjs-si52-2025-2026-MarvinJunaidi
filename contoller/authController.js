import UserModel from "../models/userModel.js";
// 1. Impor fungsi 'hash' dari utilitas yang baru kita buat.
import { hash, compare } from "../utils/hashUtil.js";

export const register = async (req, res) => {
	try {
		// Mengambil semua data dari body request (misal: dari form registrasi).
		const request = req.body;

		// 2. Di sini menyimpan request.password, kita panggil fungsi hash kita.
		const hashPassword = hash(request.password);

		// 3. Membuat user baru di database dengan password yang SUDAH di-hash.
		await UserModel.create({
			username: request.username,
			email: request.email,
			password: hashPassword, // Menyimpan hash, bukan password asli.
		});

		// Mengirim respons sukses. Status 201 berarti "Created".
		res.status(201).json({
			message: "Berhasil register, silahkan login",
			data: null,
		});
	} catch (error) {
		// Jika terjadi error (misal: email sudah terdaftar), kirim respons error.
		res.status(500).json({
			message: error.message,
			data: null,
		});
	}

}

    export const login = async (req, res) => {
	try {
		const request = req.body;

		// Langkah 1: Cari user di database berdasarkan email yang diinput.
		const user = await UserModel.findOne({ email: request.email });

		// Langkah 2: Jika user tidak ditemukan, kirim respons error Unauthorized (401).
		if (!user) {
			return res.status(401).json({
				message: "Email atau password salah",
				data: null,
			});
		}

		// Langkah 3: Bandingkan password yang diinput dengan hash di database.
		// Inilah penggunaan fungsi 'compare' yang sudah kita buat!
		const isPasswordMatch = compare(request.password, user.password);

		// Langkah 4: Jika password tidak cocok, kirim respons error yang sama.
		if (!isPasswordMatch) {
			return res.status(401).json({
				message: "Email atau password salah",
				data: null,
			});
		}

		// Langkah 5: Jika semua cocok, login berhasil! Kirim respons sukses (200).
		return res.status(200).json({
			message: "Login berhasil",
			data: {
				username: user.username,
				email: user.email,
				// Nanti kita akan ganti "TOKEN" ini dengan JSON Web Token (JWT) asli.
				token: "TOKEN_PLACEHOLDER",
			},
		});

	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: null,
		});
	}
    };