# um-notify
[![umstore](https://cdn.discordapp.com/attachments/715130970294059088/1044857362617470986/Baslksz-3.png)](https://uyuyorumstore.com)
[![Donate](https://cdn.discordapp.com/attachments/715130970294059088/1044848075996405820/coffee.png)](https://www.buymeacoffee.com/umcof)
[![License MIT](https://cdn.discordapp.com/attachments/715130970294059088/1044845854508449822/license.png)](https://choosealicense.com/licenses/mit/)
[![Discord](https://cdn.discordapp.com/attachments/715130970294059088/1044855172494532628/discord.png)](https://discord.gg/cf6wkBFeYV)




<p align="center">
  <img  src="https://i.hizliresim.com/4ryxcwy.png">
</p>

## How to use
### Client
 ```lua
exports['um-notify']:N("icon","text","class or colorhex")
```
### Server
 ```lua
TriggerClientEvent('um-notify:client:n',source,"icon","text","class or colorhex")
```
### Class
+ success
+ warning
+ error
+ info

### Examples
 ```lua
exports['um-notify']:N("check","Hello World !","success")
exports['um-notify']:N("car","Hello World !","#000")
```

+ [Font Awesome Icons](https://fontawesome.com/v5.15/icons)
+ server.cfg ```ensure um-notify```


## License
[MIT](https://choosealicense.com/licenses/mit/)
