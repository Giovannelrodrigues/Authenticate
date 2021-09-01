# Authenticate

Este projeto é back-end de Authenticação de usuarios, usando JWT

/auth/facebook = login using facebook

/auth/google = login using google

/auth/register = {Email, password} JSON

/auth/login = {Email, password} JSON

/auth/logout = Token header is required

authorization = Beare "TOKEN"

Tranformei as senhas em Hash utilizando bcrypt.hash e para comparar senhas bcrypt.compare
