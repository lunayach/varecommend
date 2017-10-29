from django.conf.urls import url
from . import views
app_name = 'me'

urlpatterns = [
    url(r'^$', views.intro, name='intro_'),
    url(r'^google0746f05affa7b80c.html$', views.google, name='googlr_'),
]
