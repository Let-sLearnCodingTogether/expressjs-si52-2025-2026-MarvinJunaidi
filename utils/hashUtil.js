// Mengimpor pustaka bcrypt yang akan kita gunakan untuk hashing.
import bcrypt from "bcrypt";

/**
 * Fungsi untuk mengubah teks biasa (password) menjadi hash.
 * @param {string} plainText - Password yang dimasukkan oleh pengguna.
 * @returns {string} - Hash dari password.
 */
export const hash = (plainText) => {
	// bcrypt.hashSync melakukan hashing secara sinkron.
	// Angka 10 adalah "salt rounds", yaitu tingkat kompleksitas hash.
	// Semakin tinggi angkanya, semakin aman tapi semakin lama prosesnya. 10 adalah standar yang baik.
	return bcrypt.hashSync(plainText, 10);
};

/**
 * Fungsi untuk membandingkan teks biasa dengan hash yang ada.
 * (Fungsi ini akan kita gunakan nanti untuk fitur login).
 * @param {string} plainText - Password yang dimasukkan pengguna saat login.
 * @param {string} hashText - Hash password yang tersimpan di database.
 * @returns {boolean} - True jika cocok, false jika tidak.
 */
export const compare = (plainText, hashText) => {
	return bcrypt.compareSync(plainText, hashText);
};