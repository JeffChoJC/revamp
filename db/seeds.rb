# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create!({
    fname: 'John',
    lname: 'Doe',
    email: 'john_doe@gmail.com',
    password: 'johndope'
})

restaurants = Restaurant.create!({
    name: 'FIG & OLIVE',
    description: 'FIG & OLIVE is about passion for the best olive oils, flavors and cuisine from the Riviera & Coastal regions of the South of France, Italy and Spain. It is a full service restaurant featuring lunch, brunch and dinner menus. The exceptional wine list includes over 30 wines offered by the glass or bottle from Italy, France and Spain.',
    phone_number: '(212)319-2002',
    cuisine: 'Mediterranean',
    address: '10 E 52nd Street',
    city: 'New York',
    state: 'NY',
    zipcode: '10021',
    owner_id: 1
})