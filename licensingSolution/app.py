from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', data = ["Button 1", "Button 2", "Button 3", "Button 4", "Button 5", "Button 6"])

if __name__ == '__main__':
    app.run(port=8070)
