import React, { useState } from "react";
import { predictWaktuTempuh, type PredictionInput } from "../api/predict";

function Prediksi() {
  const [formData, setFormData] = useState<PredictionInput>({
    JAM_BERANGKAT: 0,
    CUACA_NUM: 0,
    PENUMPANG: 0,
    JARAK_KM: 0,
    DAYOFWEEK: 0,
    MONTH: 0,
    HARI_LIBUR: 0,
    STATUS_JALAN: 0,
  });

  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value),
    });
  };

  const handlePredict = async () => {
    try {
      setLoading(true);
      const prediction = await predictWaktuTempuh(formData);
      setResult(parseFloat(prediction.toFixed(2)));
    } catch (err) {
      alert("Gagal menghubungi server prediksi.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Form Prediksi Waktu Tempuh</h1>
      <p className="mb-4 text-gray-600">
        Silakan isi data perjalanan berikut dengan lengkap untuk mendapatkan
        estimasi waktu tempuh ke halte.
      </p>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium">Jam Keberangkatan</label>
          <select
            name="JAM_BERANGKAT"
            value={formData.JAM_BERANGKAT}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            {[...Array(24)].map((_, i) => (
              <option key={i} value={i}>
                {i.toString().padStart(2, "0")}:00
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Cuaca</label>
          <select
            name="CUACA_NUM"
            value={formData.CUACA_NUM}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value={0}>Cerah</option>
            <option value={1}>Mendung</option>
            <option value={2}>Hujan</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Jumlah Penumpang</label>
          <input
            type="number"
            name="PENUMPANG"
            value={formData.PENUMPANG}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Jarak Tempuh (KM)</label>
          <input
            type="number"
            name="JARAK_KM"
            step="0.1"
            value={formData.JARAK_KM}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Hari Dalam Minggu</label>
          <select
            name="DAYOFWEEK"
            value={formData.DAYOFWEEK}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value={0}>Senin</option>
            <option value={1}>Selasa</option>
            <option value={2}>Rabu</option>
            <option value={3}>Kamis</option>
            <option value={4}>Jumat</option>
            <option value={5}>Sabtu</option>
            <option value={6}>Minggu</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Bulan</label>
          <select
            name="MONTH"
            value={formData.MONTH}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value={1}>Januari</option>
            <option value={2}>Februari</option>
            <option value={3}>Maret</option>
            <option value={4}>April</option>
            <option value={5}>Mei</option>
            <option value={6}>Juni</option>
            <option value={7}>Juli</option>
            <option value={8}>Agustus</option>
            <option value={9}>September</option>
            <option value={10}>Oktober</option>
            <option value={11}>November</option>
            <option value={12}>Desember</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Hari Libur</label>
          <select
            name="HARI_LIBUR"
            value={formData.HARI_LIBUR}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value={0}>Bukan Hari Libur</option>
            <option value={1}>Hari Libur</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Status Jalan</label>
          <select
            name="STATUS_JALAN"
            value={formData.STATUS_JALAN}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value={0}>Lancar</option>
            <option value={1}>Ramai</option>
            <option value={2}>Macet</option>
          </select>
        </div>
      </div>

      <button
        onClick={handlePredict}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Memproses..." : "Prediksi"}
      </button>

      {result !== null && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded">
          <p className="font-semibold">
            Waktu tempuh diprediksi:{" "}
            <span className="text-xl">{result} menit</span>
          </p>
        </div>
      )}
    </main>
  );
}

export default Prediksi;
