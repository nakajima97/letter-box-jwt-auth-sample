# rails-react-jwt-auth
LetterBoxでJWT認証を用いて認証機能を実装したいと考えている。
Rails + ReactでJWT認証が可能なのか試すためのリポジトリ

# requestの形式
## ユーザ登録
```json
{ 
  "user_auth": {
                  "email": "example1@example.com", 
                  "password": "password"}, 
                  "user_info": {"name": "nameeeee"}
               }
}
```
