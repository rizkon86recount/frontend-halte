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
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-3 text-blue-700 text-center">
        Form Prediksi Waktu Tempuh
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Isi data perjalanan berikut untuk mendapatkan estimasi waktu tempuh ke
        halte.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Input Fields */}
        {[
          {
            label: "Jam Keberangkatan",
            name: "JAM_BERANGKAT",
            type: "select",
            options: [...Array(24)].map((_, i) => ({
              label: `${i.toString().padStart(2, "0")}:00`,
              value: i,
            })),
          },
          {
            label: "Cuaca",
            name: "CUACA_NUM",
            type: "select",
            options: [
              { label: "Cerah", value: 0 },
              { label: "Mendung", value: 1 },
              { label: "Hujan", value: 2 },
            ],
          },
          {
            label: "Jumlah Penumpang",
            name: "PENUMPANG",
            type: "number",
          },
          {
            label: "Jarak Tempuh (KM)",
            name: "JARAK_KM",
            type: "number",
          },
          {
            label: "Hari Dalam Minggu",
            name: "DAYOFWEEK",
            type: "select",
            options: [
              "Senin",
              "Selasa",
              "Rabu",
              "Kamis",
              "Jumat",
              "Sabtu",
              "Minggu",
            ].map((day, idx) => ({ label: day, value: idx })),
          },
          {
            label: "Bulan",
            name: "MONTH",
            type: "select",
            options: [
              "Januari",
              "Februari",
              "Maret",
              "April",
              "Mei",
              "Juni",
              "Juli",
              "Agustus",
              "September",
              "Oktober",
              "November",
              "Desember",
            ].map((month, idx) => ({ label: month, value: idx + 1 })),
          },
          {
            label: "Hari Libur",
            name: "HARI_LIBUR",
            type: "select",
            options: [
              { label: "Bukan Hari Libur", value: 0 },
              { label: "Hari Libur", value: 1 },
            ],
          },
          {
            label: "Status Jalan",
            name: "STATUS_JALAN",
            type: "select",
            options: [
              { label: "Lancar", value: 0 },
              { label: "Ramai", value: 1 },
              { label: "Macet", value: 2 },
            ],
          },
        ].map((field) => (
          <div key={field.name}>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              {field.label}
            </label>
            {field.type === "select" ? (
              <select
                name={field.name}
                value={formData[field.name as keyof PredictionInput]}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="number"
                name={field.name}
                value={formData[field.name as keyof PredictionInput]}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            )}
          </div>
        ))}
      </div>

      {/* Tombol Prediksi */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePredict}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Memproses..." : "Prediksi"}
        </button>
      </div>

      {/* Hasil Prediksi */}
      {result !== null && (
        <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg shadow text-center">
          <p className="text-lg font-medium text-green-700">
            Hasil Prediksi Waktu Tempuh:
          </p>
          <p className="text-3xl font-bold text-green-800 mt-2">
            {result} menit
          </p>
        </div>
      )}
    </main>
  );
}

export default Prediksi;
