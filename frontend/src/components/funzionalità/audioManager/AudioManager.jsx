import { useState } from "react";
import axios from "axios";

const AudioManager = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [volume, setVolume] = useState(5);
  const [exporting, setExporting] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setMessage("");
    }
  };

  const handleVolumeChange = (change) => {
    setVolume((prevVolume) => {
      let newVolume = prevVolume + change;
      newVolume = Math.max(0, Math.min(newVolume, 10));
      return newVolume;
    });
  };

  const handleExport = async () => {
    if (!selectedFile) {
      setMessage("Seleziona prima un file audio.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("volume", volume);

    try {
      setExporting(true);
      setMessage("Esportazione in corso...");

      const response = await axios.post("/export", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("File esportato con successo!");
      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Errore durante l'esportazione del file:", error);
      setMessage("Errore durante l'esportazione del file. Riprova.");
    } finally {
      setExporting(false);
    }
  };

  return (
    <>
      <div>
        <h1 className="ml-4 my-2">Gestione Audio</h1>
        <main className="w-[90vw] mx-auto shadow-2xl bg-white p-6 mt-4 rounded-md">
          {/* File import components */}
          <section>
            <h2>Importa File Audio .</h2>
            <input
              type="file"
              accept=".wav"
              className="block w-full"
              onChange={handleFileSelect}
            />
          </section>

          {/* If a file is selected, show controls */}
          {selectedFile && (
            <section>
              <h2>{selectedFile.name}</h2>
              <p className="bg-red-50">
                Il volume del tuo audio è attualmente impostato su 5. Aumentando
                il numero, il volume sarà più alto, mentre diminuendo il numero,
                il volume sarà più basso.
              </p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => handleVolumeChange(1)}
                  className="bg-red-600 m-4 text-white px-4 py-2 rounded-md"
                  disabled={exporting}
                >
                  +
                </button>
                {volume}
                <button
                  onClick={() => handleVolumeChange(-1)}
                  className="bg-blue-500 m-4 text-white px-4 py-2 rounded-md mr-2"
                  disabled={exporting}
                >
                  -
                </button>
              </div>
            </section>
          )}

          {/* File export component */}
          <section className="mt-4">
            <h2>Esporta File Audio Modificato</h2>
            <button
              onClick={handleExport}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
              disabled={exporting}
            >
              {exporting
                ? "Esportazione in corso..."
                : `Esporta con Volume: ${volume}`}
            </button>
          </section>

          {/* Feedback message section */}
          {message && (
            <section className="mt-4">
              <p className="text-center text-red-500">{message}</p>
            </section>
          )}
        </main>
      </div>
    </>
  );
};

export default AudioManager;
