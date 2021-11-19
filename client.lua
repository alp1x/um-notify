
RegisterNetEvent('um-notify:client:n',function(icon,message,bg)
	N(icon,message,bg)
end)

N = function(icon,message,bg)
	SendNUIMessage({icon=icon,message=message,bg=bg})
end