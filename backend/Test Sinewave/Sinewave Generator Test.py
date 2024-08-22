from flask import Flask, send_file, make_response
import numpy as np
import io
import wave

app = Flask(__name__)

class Sinusoid:
    def __init__(self, freq=440, amp=1.0, offset=0):
        self.freq = freq
        self.amp = amp
        self.offset = offset

    def generate_wave(self, duration=1, framerate=44100):
        t = np.linspace(0, duration, int(framerate * duration), endpoint=False)
        wave_data = (self.amp * np.sin(2 * np.pi * self.freq * t + self.offset)).astype(np.float32)
        return wave_data

@app.route('/generate_wave')
def generate_wave():
    sinusoid = Sinusoid(freq=440, amp=1.0, offset=0)
    wave_data = sinusoid.generate_wave(duration=1.0, framerate=44100)

    # Convert to bytes
    byte_io = io.BytesIO()
    with wave.open(byte_io, 'wb') as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(44100)
        wf.writeframes((wave_data * 32767).astype(np.int16).tobytes())

    byte_io.seek(0)
    return send_file(byte_io, mimetype='audio/wav', as_attachment=True, download_name='sinewave.wav')

if __name__ == '__main__':
    app.run(debug=True)

