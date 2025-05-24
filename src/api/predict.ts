export interface PredictionInput {
  JAM_BERANGKAT: number;
  CUACA_NUM: number;
  PENUMPANG: number;
  JARAK_KM: number;
  DAYOFWEEK: number;
  MONTH: number;
  HARI_LIBUR: number;
  STATUS_JALAN: number;
}

export async function predictWaktuTempuh(
  data: PredictionInput
): Promise<number> {
  const response = await fetch("https://halte.haltevacademy.com/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Gagal terhubung ke API.");
  }

  const result = await response.json();
  return result.predicted_time;
}
