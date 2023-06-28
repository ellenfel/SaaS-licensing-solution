from flask import Flask, send_from_directory, request, jsonify, render_template
import os
import secrets

app = Flask(__name__, static_folder='static', template_folder='templates')

valid_keys = []  # List of dictionaries for storing keys with their order

@app.route('/keygen', methods=['GET', 'POST'])
def keygen():
    if request.method == 'POST':
        key = secrets.token_hex(16)
        valid_keys.append({'id': len(valid_keys) + 1, 'key': key})  # Store the key as valid with an order
        return jsonify(keys=valid_keys)  # Return all keys as JSON
    else:
        return render_template('keygen.html', keys=valid_keys)


@app.route('/check_key')
def check_key():
    user_key = request.args.get('license_key')
    if any(d['key'] == user_key for d in valid_keys):
        return jsonify(valid=True)  # Key is valid
    else:
        return jsonify(valid=False), 401  # Key is invalid, return HTTP 401 Unauthorized

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/<path:path>')
def serve_file(path):
    return send_from_directory(app.static_folder, path)


if __name__ == '__main__':
    app.run(port=8090)  # Change this to match the port you want
