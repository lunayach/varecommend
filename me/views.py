from django.shortcuts import render


def intro(request):
    return render(request, 'me/ME.HTML')
def google(request):
    return render(request,'me/google0746f05affa7b80c.html')

