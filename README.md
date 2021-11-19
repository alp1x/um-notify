# um-notify
[![Github Alp1x](https://img.shields.io/badge/Github-alp1x-pink?style=for-the-badge&logo=github)](https://github.com/alp1x/)
[![Donate Tebex](https://img.shields.io/badge/Coffee-Donate-%23FFDD00?style=for-the-badge&logo=buymeacoffee)](https://uyuyorum.tebex.io/package/4721743)
[![License MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&logo=opensourceinitiative)](https://choosealicense.com/licenses/mit/)




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
