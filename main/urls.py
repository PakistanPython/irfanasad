from django.urls import path
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('fleet/', views.fleet, name='fleet'),
    path('services/', views.services, name='services'),
    path('contact/', views.contact, name='contact'),
    path('contact-form/', views.contact_form, name='contact_form'),
    path('join-chauffeur/', views.join_chauffeur, name='join_chauffeur'),
    path('book-online/', views.book_online, name='book_online'),
    path('faq/', views.faq, name='faq'),
    path('testimonials/', views.testimonials, name='testimonials'),
    path('terms/', views.terms, name='terms'),
    path('cancellation-policy/', views.cancellation_policy, name='cancellation_policy'),
]
