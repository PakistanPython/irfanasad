from django.contrib import admin
from .models import ContactMessage, ChauffeurApplication

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'email', 'phone', 'created_at']
    list_filter = ['created_at']
    search_fields = ['first_name', 'last_name', 'email', 'company']
    readonly_fields = ['created_at']

@admin.register(ChauffeurApplication)
class ChauffeurApplicationAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'email', 'phone', 'created_at']
    list_filter = ['created_at']
    search_fields = ['first_name', 'last_name', 'email']
    readonly_fields = ['created_at']
