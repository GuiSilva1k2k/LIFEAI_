from django.urls import path
from .viewsets import RegisterView, LoginView, LogoutView, ImcCreateAPIView
from core.services.api_ia import chat_ia_view

urlpatterns = [
    path('registro/', RegisterView.as_view(), name='RegisterView'),
    path('login/', LoginView.as_view(), name='LoginView'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('imc/', ImcCreateAPIView.as_view(), name='criar_imc'),
    path("chat-ia/", chat_ia_view, name="chat-ia"),
]
    