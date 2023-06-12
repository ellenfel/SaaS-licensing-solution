from flask import Flask, render_template

app = Flask(__name__,template_folder='templates')

@app.route('/')
def home():
    return render_template('index.html', data = ["Option 1", "Option 2", "Option 3"])

if __name__ == '__main__':
    app.run(port=8090)
