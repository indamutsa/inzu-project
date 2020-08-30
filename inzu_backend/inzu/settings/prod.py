from inzu.settings.base import *  # NOQA

SECRET_KEY = 'HFSDJKFHWEHIRFHBDSJI&*njJDSJF*6763274&^&$#%&^*SHKFJDHSFK'

ALLOWED_HOSTS = ['0.0.0.0', 'localhost']

DEBUG = True


STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, '/static')
]

STATIC_ROOT = os.path.join(BASE_DIR, 'static')

#MEDIA_URL = 'https://inzuestates.eu/backend/media/'
#MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
