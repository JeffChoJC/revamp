# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# Restaurant.destroy_all

# User.create!({
#     fname: 'John',
#     lname: 'Doe',
#     email: 'john_doe@gmail.com',
#     password: 'johndope'
# })

# 100.times do
#     email = Faker::Internet.email
#     next if User.exists?(email: email)

#     User.create!(
#         email: email,
#         fname: Faker::Name.first_name,
#         lname: Faker::Name.last_name,
#         password: Faker::Internet.password
#     )
# end

# Restaurant.create!({
#     name: 'FIG & OLIVE',
#     price_range: "$31 to $50",
#     description: 'FIG & OLIVE is about passion for the best olive oils, flavors and cuisine from the Riviera & Coastal regions of the South of France, Italy and Spain. It is a full service restaurant featuring lunch, brunch and dinner menus. The exceptional wine list includes over 30 wines offered by the glass or bottle from Italy, France and Spain.',
#     phone_number: '(212)319-2002',
#     cuisine: 'Mediterranean',
#     address: '10 E 52nd Street',
#     city: 'New York',
#     state: 'NY',
#     zipcode: '10021',
#     owner_id: 1
# })

# 70.times do
#     city_state = Restaurant::CITIES.sample
#     name = Faker::Restaurant.name
#     next if Restaurant.exists?(name: name)

#     Restaurant.create!({
#         name: name,
#         price_range: Restaurant::PRICE_RANGES.sample,
#         description: Faker::Restaurant.description,
#         phone_number: Faker::PhoneNumber.cell_phone,
#         cuisine: Restaurant::CUISINES.sample,
#         address: Faker::Address.street_address,
#         city: city_state[0],
#         state: city_state[1],
#         zipcode: Faker::Address.zip,
#         owner_id: User.all.sample.id
#     })
# end