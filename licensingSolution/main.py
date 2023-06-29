from flask import Flask, send_from_directory, request, jsonify, render_template
import os
import secrets
from datetime import datetime


app = Flask(__name__, static_folder='static', template_folder='templates')

valid_keys = []  # List of dictionaries for storing keys with their order


@app.route('/keygen', methods=['GET', 'POST'])
def keygen():
    if request.method == 'POST':
        expire_time = request.json.get('expireTime', 30)
        key = secrets.token_hex(16)
        creation_date = datetime.now().strftime('%Y.%m.%d')
        valid_keys.append({
            'id': len(valid_keys) + 1, 
            'key': key, 
            'created': creation_date, 
            'expireTime': expire_time, 
            'active': 'Yes'
        })
  
        return jsonify(keys=valid_keys)
    else:
        return render_template('keygen.html')


@app.route('/keys', methods=['GET'])
def keys():
    return jsonify(keys=valid_keys)

@app.route('/toggle_active/<int:key_id>', methods=['POST'])
def toggle_active(key_id):
    key = next((item for item in valid_keys if item["id"] == key_id), None)
    if key:
        key['active'] = 'No' if key['active'] == 'Yes' else 'Yes'
    return jsonify(keys=valid_keys)

@app.route('/check_key')
def check_key():
    user_key = request.args.get('license_key')
    key = next((item for item in valid_keys if item["key"] == user_key), None)
    if key and key['active'] == 'Yes':
        return jsonify(valid=True, active=key['active'])  # Return validity and active state of the key
    else:
        return jsonify(valid=False), 401  # Key is invalid or inactive, return HTTP 401 Unauthorized



@app.route('/')
def home():
    return render_template('index.html')

@app.route('/<path:path>')
def serve_file(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(port=8090)  # Change this to match the port you want
