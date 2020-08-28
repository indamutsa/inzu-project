# remove databases and email backends in production and store them in
# a local_settings.py file on the server

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'inzu',
        'USER': 'arsene',
        'PASSWORD': 'password',
        'HOST': "postgres_db"
    }
}

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'aindamut@gmail.com'
EMAIL_HOST_PASSWORD = 'hxpxhgqchhimfmmc'
EMAIL_USE_TLS = True