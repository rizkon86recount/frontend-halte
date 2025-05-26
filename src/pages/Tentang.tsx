function Tentang() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* Gambar Ilustrasi */}
      <div className="flex justify-center mb-10">
        <img
          src="/assets/hm.svg"
          alt="Ilustrasi Tentang"
          className="w-full max-w-md transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Konten Utama */}
      <div className="bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center drop-shadow-sm">
          Tentang Aplikasi
        </h1>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed text-center">
          Aplikasi ini dibuat sebagai bagian dari tugas akhir (skripsi) oleh{" "}
          <strong>Tedy Firmansyah</strong>, dengan tujuan membantu memprediksi
          waktu tempuh ke halte berdasarkan berbagai faktor lingkungan dan
          kondisi perjalanan.
        </p>

        <section className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
            🎯 <span>Tujuan Pengembangan</span>
          </h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2 text-base">
            <li>Meningkatkan efisiensi waktu pengguna menuju halte</li>
            <li>Menggunakan machine learning untuk prediksi cerdas</li>
            <li>Memanfaatkan data seperti cuaca, jam, dan kondisi jalan</li>
          </ul>
        </section>

        <section className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
            👨‍🎓 <span>Tentang Penulis</span>
          </h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2 text-base">
            <li>
              Nama: <strong>Tedy Firmansyah</strong>
            </li>
            <li>Status: Mahasiswa tingkat akhir</li>
            <li>Proyek: Tugas Akhir / Skripsi</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Tentang;
