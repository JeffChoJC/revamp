#Revamp

Revamp is modeled after OpenTable. Unlike OpenTable, Revamp is a web application that primarily features searching for and making reservations with contractors and companies using a wide range of search parameters: 
* Date
* Time
* Location (i.e. city, state, etc.)
* Industry
* Company Name

Other features include:
* Writing reviews
* Saving a contractor or company to your favorites

Live Site: https://git.heroku.com/open-res.git



## Architecture and Technologies:
* JavaScript 9
* React 16.8.6
* Redux 4.0.1
* Ruby on Rails 5.2.3
* PostgreSQL 2.2.2
* Webpack 4.32.2

# Features:
## Company Search:
Users can search for multiple `keyword`s against multiple company data columns. This feature implements the gem `PgSearch`. 

## User-Authorization:
Revamp features backend auth using BCrypt for password hashing purposes. Logged in user state is persisted via cookies unless deliberately signed out. Email addresses used to sign up are saved to the rails backend with associated passwor digests where uniqueness is ensured by database and model restraints.

## Reservations:
Users can select date, time, and party size and Revamp will generate a list of companies with available reservations closest to the selected options.

## Favorites:
Accessing a favorite company is made easy. Once the user has saved a company, it is accessible through the drop down menu in the top-right corner via "Saved Companies".

## Reviews:
Once logged in, Revamp allows users to leave a single review per company. Reviews require 1-5 star ratings of 3 categories and a description.