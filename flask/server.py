from flask import Flask
from flask_mongoengine import MongoEngine, MongoEngineSessionInterface

app = Flask(__name__)

app.config.from_pyfile('config_file.cfg')
app.config['MONGODB_SETTINGS'] = {
    'db' : 'LibraryManagement',
    'host' : 'localhost',
    'port' : 27017
}
app.config['DEBUG_TB_PANELS'] = ['flask_mongoengine_panels.MongoDebugPanel']

db = MongoEngine(app)
toolbar = DebugToolBarExtension(app)
db.init_app(app)


