from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

def home(request):
    """Homepage view"""
    return render(request, 'main/home.html')

def about(request):
    """About page view"""
    return render(request, 'main/about.html')

def fleet(request):
    """Fleet page view"""
    fleet_vehicles = [
        {
            'name': '24-Passenger Van',
            'image': 'images/24-Passenger-Van-768x473.png',
            'description': 'Perfect for group transportation'
        },
        {
            'name': '40-Passenger Coach Bus',
            'image': 'images/40-Passenger-Coach-Bus-768x473.png',
            'description': 'Ideal for large group events'
        },
        {
            'name': '56-Passenger Bus',
            'image': 'images/56-Passenger-Bus-768x473.png',
            'description': 'Maximum capacity for corporate events'
        },
        {
            'name': 'Lincoln Continental',
            'image': 'images/Black-Velvet-Lincoln-Continental-768x473.png',
            'description': 'Luxury and elegance combined'
        },
        {
            'name': 'Mercedes Benz S Class',
            'image': 'images/Mercedes-Benz-S-Class-768x473.png',
            'description': 'Premium luxury sedan'
        },
        {
            'name': 'Cadillac Escalade',
            'image': 'images/Cadillac-Escalade-768x473.png',
            'description': 'Spacious luxury SUV'
        },
        {
            'name': 'Cadillac XTS',
            'image': 'images/cadillac-xts-768x473.png',
            'description': 'Executive sedan'
        },
        {
            'name': 'Chevrolet Suburban',
            'image': 'images/Chevrolet-Suburban-768x473.png',
            'description': 'Family-friendly luxury SUV'
        },
        {
            'name': 'Chrysler 300',
            'image': 'images/Chrysler-300-768x473.png',
            'description': 'Stylish sedan'
        },
        {
            'name': 'Ford Expedition',
            'image': 'images/Ford-Expedition-768x473.png',
            'description': 'Robust luxury SUV'
        },
        {
            'name': 'GMC Yukon XL',
            'image': 'images/GMC-Yukon-XL-768x473.png',
            'description': 'Extended luxury SUV'
        },
        {
            'name': 'Infiniti QX60',
            'image': 'images/Infiniti-QX60-768x473.jpg',
            'description': 'Mid-size luxury SUV'
        },
        {
            'name': 'Lincoln Navigator',
            'image': 'images/Lincoln-Navigator-768x473.png',
            'description': 'Premium full-size SUV'
        },
        {
            'name': 'Mercedes Benz Sprinter',
            'image': 'images/Mercedes-Benz-Sprinter-768x473.png',
            'description': 'Luxury van for groups'
        },
        {
            'name': 'Stretch Cadillac Escalade',
            'image': 'images/Stretch-Cadillac-Escalade-768x473.png',
            'description': 'Ultimate luxury limousine'
        },
        {
            'name': 'Stretch Lincoln MKT',
            'image': 'images/Stretch-MKT-768x473.png',
            'description': 'Elegant stretch limousine'
        },
        {
            'name': 'Lincoln MKT',
            'image': 'images/Lincoln-MKT-768x473.png',
            'description': 'Luxury crossover'
        }
    ]
    return render(request, 'main/fleet.html', {'vehicles': fleet_vehicles})

def services(request):
    """Services page view"""
    return render(request, 'main/services.html')

def contact(request):
    """Contact page view"""
    return render(request, 'main/contact.html')

@csrf_exempt
def contact_form(request):
    """Handle contact form submission"""
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            # Here you would typically save to database or send email
            # For now, just return success
            return JsonResponse({'success': True, 'message': 'Thank you for your message! We will contact you soon.'})
        except json.JSONDecodeError:
            return JsonResponse({'success': False, 'message': 'Invalid data format'})
    
    return JsonResponse({'success': False, 'message': 'Invalid request method'})

def join_chauffeur(request):
    """Join as Chauffeur page view"""
    return render(request, 'main/join_chauffeur.html')

def book_online(request):
    """Book Online page view - redirects to external booking system"""
    return render(request, 'main/book_online.html')

def faq(request):
    """FAQ page view"""
    return render(request, 'main/faq.html')

def testimonials(request):
    """Testimonials page view"""
    return render(request, 'main/testimonials.html')

def terms(request):
    """Terms & Conditions page view"""
    return render(request, 'main/terms.html')

def cancellation_policy(request):
    """Cancellation Policy page view"""
    return render(request, 'main/cancellation_policy.html')
