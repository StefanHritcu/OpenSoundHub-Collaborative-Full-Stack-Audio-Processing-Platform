from flask import Flask, request, jsonify
from pydub import AudioSegment
import os

app = Flask(__name__)

# Directory per salvare i file audio
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/import', methods=['POST'])
def import_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    if file:
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)
        return jsonify({"message": "File imported", "file_path": file_path}), 200

@app.route('/export', methods=['POST'])
def export_file():
    data = request.json
    file_path = data.get('file_path')
    volume = data.get('volume', 0.5)
    if not file_path or not os.path.exists(file_path):
        return jsonify({"error": "File not found"}), 400
    audio = AudioSegment.from_file(file_path)
    audio = audio + (volume * 10 - 5)  
    export_path = os.path.join(UPLOAD_FOLDER, 'exported_' + os.path.basename(file_path))
    audio.export(export_path, format="wav")
    return jsonify({"message": "File exported", "export_path": export_path}), 200

@app.route('/volume', methods=['POST'])
def change_volume():
    data = request.json
    file_path = data.get('file_path')
    volume = data.get('volume', 0.5)
    if not file_path or not os.path.exists(file_path):
        return jsonify({"error": "File not found"}), 400
    audio = AudioSegment.from_file(file_path)
    audio = audio + (volume * 10 - 5)  
    audio.export(file_path, format="wav")
    return jsonify({"message": "Volume changed", "file_path": file_path}), 200

if __name__ == '__main__':
    app.run(debug=True)
        

