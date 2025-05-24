function Home() {
  return (
    <>
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">
          Selamat Datang di Aplikasi Prediksi
        </h1>
        <p className="text-gray-700 mb-6">
          Aplikasi ini memungkinkan Anda memprediksi waktu tempuh ke halte
          berdasarkan data seperti cuaca, waktu keberangkatan, dan kondisi
          jalan. Silakan navigasi ke menu <strong>Prediksi</strong> untuk mulai
          menggunakan sistem.
        </p>

        <section className="bg-blue-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Panduan Penggunaan:</h2>
          <ul className="list-disc pl-5 text-gray-800">
            <li>
              Masuk ke halaman <strong>Prediksi</strong>
            </li>
            <li>Isi data yang diperlukan secara lengkap</li>
            <li>
              Klik tombol <em>Prediksi</em> dan lihat hasilnya
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Home;
