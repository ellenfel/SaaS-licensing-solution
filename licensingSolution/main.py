from flask import Flask, render_template, request, jsonify
import secrets

app = Flask(__name__, static_folder='static', template_folder='templates')

valid_keys = set()  # In-memory storage for simplicity

@app.route('/keygen')
def keygen():
    key = secrets.token_hex(16)
    valid_keys.add(key)  # Store the key as valid
    return key

@app.route('/check_key')
def check_key():
    user_key = request.args.get('license_key')
    if user_key in valid_keys:
        return jsonify(valid=True)  # Key is valid
    else:
        return jsonify(valid=False), 401  # Key is invalid, return HTTP 401 Unauthorized

@app.route('/')
def serve_file():
    data = ["Option 1", "Option 2", "Option 3"]
    return render_template('index.html', data=data)


if __name__ == '__main__':
    app.run(port=8090)  # Change this to match the port you want
