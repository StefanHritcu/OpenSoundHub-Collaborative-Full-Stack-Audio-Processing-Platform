# Audio Sample Editor

Questo progetto fornisce un server Flask con endpoint per importare, esportare e modificare il volume di file audio. Utilizza la libreria `pydub` per la manipolazione dei file audio.

## Requisiti

- Python 3.x
- Flask
- pydub
- ffmpeg (necessario per `pydub`)

## Endpoint

### 1. `/import`

**Metodo**: `POST`

**Descrizione**: Importa un file audio e lo salva nella directory `uploads`.

**Dati dal Frontend**:
- `file`: Il file audio da importare (multipart/form-data).

**Esempio di Richiesta**:
curl -X POST -F "file=@C:/path/to/your/file.wav" http://127.0.0.1:5000/import


### 2. `/export`

**Metodo**: `POST`

**Descrizione**: Esporta un file audio con il volume modificato e lo salva nella directory `uploads` con un nuovo nome.

**Dati dal Frontend**:
- `file_path`: Il percorso del file audio da esportare (stringa).
- `volume`: Il volume desiderato (float, opzionale, default: 0.5).

**Esempio di Richiesta**:
curl -X POST -H "Content-Type: application/json" -d '{"file_path": "uploads/your_file.wav", "volume": 0.5}' http://127.0.0.1:5000/export


### 3. `/volume`

**Metodo**: `POST`

**Descrizione**: Modifica il volume di un file audio esistente e lo sovrascrive.

**Dati dal Frontend**:
- `file_path`: Il percorso del file audio da modificare (stringa).
- `volume`: Il volume desiderato (float, opzionale, default: 0.5).

**Esempio di Richiesta**:
curl -X POST -H "Content-Type: application/json" -d '{"file_path": "uploads/your_file.wav", "volume": 0.5}' http://127.0.0.1:5000/volume

## Esecuzione del Server

Per avviare il server Flask, esegui il seguente comando:

python Audio_Sample_Editor.py

Il server sarà in esecuzione su `http://127.0.0.1:5000/`.

## Note

- I file audio devono essere in un formato supportato da `pydub` (ad esempio, WAV, MP3).


