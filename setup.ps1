# Nel Terminale digita: ----->   .\setup.ps1   <-----

# -----------------------------> Avvio del Backend <-----------------------------

# Cambia la directory alla cartella backend
Set-Location -Path "backend"

# Crea un ambiente virtuale (se non esiste già)
if (!(Test-Path -Path "venv")) {
    Write-Host "Creating virtual environment..."
    python -m venv venv
}

# Attiva l'ambiente virtuale
Write-Host "Activating virtual environment..."
.\venv\Scripts\Activate

# Installa le dipendenze necessarie per il backend
Write-Host "Installing backend dependencies..."
pip install Flask pydub

# Avvia il server Flask e attendi che sia attivo prima di procedere
Write-Host "Starting Flask server..."
Start-Process "python" "Audio_Sample_Editor.py" -NoNewWindow -Wait

# Torna alla directory principale
Set-Location -Path ".."

# -----------------------------> Avvio del Frontend <-----------------------------

# Cambia la directory alla cartella frontend
Set-Location -Path "frontend"

# Installa le dipendenze del progetto
Write-Host "Installing dependencies..."
npm install

# Avvia l'applicazione frontend
Write-Host "Starting the frontend application..."
Start-Process "npm" "run dev"

# Mostra l'URL per accedere all'applicazione frontend
Write-Host "Frontend is running at: http://localhost:5173/"

# Mantieni la finestra del terminale aperta
Pause
