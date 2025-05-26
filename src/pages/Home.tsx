import { motion } from "framer-motion";
import { MdTipsAndUpdates } from "react-icons/md";

function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* Gambar Hero Animasi */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/assets/prediksi.svg"
          alt="Ilustrasi Prediksi"
          className="w-full max-w-md transition-transform duration-500 hover:scale-105 drop-shadow-md"
          loading="lazy"
        />
      </motion.div>

      {/* Konten Utama */}
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center drop-shadow-sm">
          Selamat Datang di Aplikasi Prediksi
        </h1>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed text-center">
          Aplikasi ini memungkinkan Anda memprediksi waktu tempuh ke halte
          berdasarkan data seperti <strong>cuaca</strong>,{" "}
          <strong>waktu keberangkatan</strong>, dan{" "}
          <strong>kondisi jalan</strong>. Silakan navigasi ke menu{" "}
          <strong>Prediksi</strong> untuk mulai menggunakan sistem.
        </p>

        <section className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
            <MdTipsAndUpdates className="text-blue-600 text-3xl" />
            <span>Panduan Penggunaan</span>
          </h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2 text-base">
            <li>
              Masuk ke halaman <strong>Prediksi</strong>
            </li>
            <li>Isi data yang diperlukan secara lengkap</li>
            <li>
              Klik tombol <em>Prediksi</em> dan lihat hasilnya
            </li>
          </ul>
        </section>
      </motion.div>
    </main>
  );
}

export default Home;
