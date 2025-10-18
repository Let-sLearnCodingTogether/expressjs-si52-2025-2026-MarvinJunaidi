import bcrypt from "bcrypt";

/**
 * @param {string} plainText - Password yang dimasukkan oleh pengguna.
 * @returns {string} - Hash dari password.
 */
export const hash = (plainText) => {
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