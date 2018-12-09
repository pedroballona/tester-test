from rest_framework import permissions

class OnlyPostToAnonymous(permissions.BasePermission):
    
    def has_permission(self, request, view):
        return request.user.is_authenticated or request.method == "POST"