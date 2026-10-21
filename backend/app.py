import os
from flask import Flask
from flask_cors import CORS
from config import Config
from database import init_db
from routes import api

# Ensure instance directory exists
os.makedirs('instance', exist_ok=True)

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

init_db(app)
app.register_blueprint(api, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
