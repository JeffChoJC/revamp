# OpenRes

OpenRes is modeled after OpenTable. Like OpenTable, OpenRes is a web application that primarily features searching for and making reservations at restaurants using a wide range of search parameters: 
* Date
* Time
* Party Size
* Location (i.e. city, state, etc.)
* Cuisine
* Restaurant Name

Other features include:
* Writing reviews
* Saving a restaurant to your favorites

Live Site: https://git.heroku.com/open-res.git



## Architecture and Technologies:
* JavaScript 9
* React 16.8.6
* Redux 4.0.1
* Ruby on Rails 5.2.3
* PostgreSQL 2.2.2
* Webpack 4.32.2

# Features:
## Restaurant Search:
Users can search for multiple `keyword`s against multiple restaurant data columns. This feature implements the gem `PgSearch`. 

<img src="./readme_images/openres_ss.png">

## User-Authorization:
OpenRes features backend auth using BCrypt for password hashing purposes. Logged in user state is persisted via cookies unless deliberately signed out. Email addresses used to sign up are saved to the rails backend with associated passwor digests where uniqueness is ensured by database and model restraints.

