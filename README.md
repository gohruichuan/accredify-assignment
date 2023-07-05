# essentials

## Project setup

```
# yarn
yarn install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev
```

### !!!IMPORTANT ENV VARIABLE (FOR LOCAL ONLY)

```
# Rename sample.env to .env

# Or create a .env file and put the following:
VITE_API_URL="https://api-accredify-d799d4385f74.herokuapp.com"
```

# Live Demo

See [Live Demo](https://main.dwa9u6sbradb9.amplifyapp.com/login).

# Frontend

### Frontend Components Structure

```
App
    Sidebar (Hide navigations when user is not logged in)
    Main View
        Header & Profile (Show when user is logged in)
        Router-View (Navigates to '/' and '/login')

```

### Frontend Auto Login Feature using JWT Token

```
1) After logging in for the first time
2) The backend API will sign a JWT Token stored on the frontend localstorage key name: jwtToken
3) This JWT token (jwtToken) will allow user to auto login the next time he arrive to the main page
```

### Frontend State Management using Pinia

```
1) After logging in
2) Call Documents and Career Goals API
3) Data returned are stored in Pinia state managements (src\store)
```

# Backend Nodejs API

See [Nodejs repo here](https://github.com/gohruichuan/api-accredify).

## API Architecture

See [API Architecture](https://miro.com/app/board/uXjVM6G5dI4=/?share_link_id=800805685663).

## Login API

### /login

To login user, validate user credentials, and get user data from database along with sign JWT token back to browser

```
POST https://api-accredify-d799d4385f74.herokuapp.com/login

Content-Type: application/json

{
    "username": "geraldgoh@gmail.com"
}
```

### /login/verify

To login user by verifying JWT token, get user data from database and send back to browser

```
POST https://api-accredify-d799d4385f74.herokuapp.com/login

Content-Type: application/json

{
    "username": "geraldgoh@gmail.com"
}
```

## Documents API

### /document-module/identities/1/documents

To get logged in user's documents by default: 1st page and in descending order

```
GET https://api-accredify-d799d4385f74.herokuapp.com/document-module/identities/1/documents

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiZ2VyYWxkZ29oQGdtYWlsLmNvbSIsImlhdCI6MTY4ODExODc2MX0.gAkICAZ-lODJ5ozD1PeKwuZR_CUC1eBj40zChCE3MRk

```

## Documents API - Query Params (Optional)

### ?page=2

To get logged in user's documents by pages (query params)

```
GET https://api-accredify-d799d4385f74.herokuapp.com/document-module/identities/1/documents?page=2

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiZ2VyYWxkZ29oQGdtYWlsLmNvbSIsImlhdCI6MTY4ODExODc2MX0.gAkICAZ-lODJ5ozD1PeKwuZR_CUC1eBj40zChCE3MRk
```

### ?page=1&sortBy=ASC

To get logged in user's documents by pages and ascending order (query params)

```
GET https://api-accredify-d799d4385f74.herokuapp.com/document-module/identities/1/documents?page=1&sortBy=ASC

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiZ2VyYWxkZ29oQGdtYWlsLmNvbSIsImlhdCI6MTY4ODExODc2MX0.gAkICAZ-lODJ5ozD1PeKwuZR_CUC1eBj40zChCE3MRk

```

### ?page=1&sortBy=DESC

To get logged in user's documents by pages and descending order (query params)

```
GET https://api-accredify-d799d4385f74.herokuapp.com/document-module/identities/1/documents?page=1&sortBy=DESC

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiZ2VyYWxkZ29oQGdtYWlsLmNvbSIsImlhdCI6MTY4ODExODc2MX0.gAkICAZ-lODJ5ozD1PeKwuZR_CUC1eBj40zChCE3MRk

```

## Career Goals API

### /career-goals

To get logged in user's career-goals

```
GET https://api-accredify-d799d4385f74.herokuapp.com/career-goals

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiZ2VyYWxkZ29oQGdtYWlsLmNvbSIsImlhdCI6MTY4ODExODc2MX0.gAkICAZ-lODJ5ozD1PeKwuZR_CUC1eBj40zChCE3MRk
```
