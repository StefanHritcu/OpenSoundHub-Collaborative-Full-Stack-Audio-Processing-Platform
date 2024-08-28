import { useState } from "react";
import { axios } from "axios";

function GenerateAudio() {
  const [audioSrc, setAudioSrc] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateAudio = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/generate_wave", {
        responseType: "blob",
      });
      const audioUrl = URL.createObjectURL(response.data);
      setAudioSrc(audioUrl);
    } catch (error) {
      console.error("Errore durante la richiesta del file audio:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <h1>Genera Audio</h1>
        <button
          disabled={loading}
          onClick={handleGenerateAudio}
          className="mx-4 px-6 bg-blue-500 text.white py-4 rounded hover:bg-blue-600"
        >
          {loading ? "Generazione in corso..." : "Genera Audio"}
        </button>

        {audioSrc && (
          <div>
            <audio controls src={audioSrc}>
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
    </>
  );
}
export default GenerateAudio;
