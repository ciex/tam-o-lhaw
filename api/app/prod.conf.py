import os

ADMIN_KEY = os.environ.get("METAWAHL_ADMIN_KEY", "server secret")
DEBUG = False
SECRET_KEY = os.environ.get("METAWAHL_SECRET", "server secret")
SQLALCHEMY_DATABASE_URI = "postgresql:///metawahl"

SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = False
SQLALCHEMY_RECORD_QUERIES = False

CACHE_TYPE = "memcached"
CACHE_DEFAULT_TIMEOUT = 24 * 60 * 60

METAWAHL_API_LOGFILE = "/var/log/metawahl/flask.log"

if SECRET_KEY == "server secret":
    print("Set server secret key environment variable METAWAHL_SECRET!")

if ADMIN_KEY == "server secret":
    print("Set admin key environment variable ADMIN_KEY!")
