# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Company.destroy_all
Review.destroy_all

User.create!({
    fname: 'Guest',
    lname: 'Doe',
    phone_number: '(201)-655-4945',
    email: 'guest_doe@gmail.com',
    password: 'guestdope'
})

100.times do
    email = Faker::Internet.email
    next if User.exists?(email: email)

    User.create!(
        email: email,
        fname: Faker::Name.first_name,
        lname: Faker::Name.last_name,
        password: Faker::Internet.password
    )
end

Company.create!({
    name: 'John & Company',
    industry: 'Renovation',
    phone_number: '(212)319-2002',
    address: '10 E 52nd Street',
    city: 'New York',
    state: 'NY',
    zipcode: '10021',
    owner_id: User.all.sample.id
})

250.times do
    city_state = Company::CITIES.sample
    name = Faker::Company.name
    phone_number = Faker::PhoneNumber.cell_phone

    next if Company.exists?(name: name)
    next if Company.exists?(phone_number: phone_number)

    Company.create!({
        name: name,
        industry: Faker::Company.industry,
        phone_number: Faker::PhoneNumber.cell_phone,
        address: Faker::Address.street_address,
        city: city_state[0],
        state: city_state[1],
        zipcode: Faker::Address.zip,
        owner_id: User.all.sample.id
    })
end

Company.all.each do |company|
    5.times do
        author_id = User.all.sample.id
        next if company.reviews.exists?(author_id: author_id)

        Review.create!({
            service_rating: Review::RATING_VALUES.sample,
            value_rating: Review::RATING_VALUES.sample,
            efficiency_rating: Review::RATING_VALUES.sample,
            body: Faker::Company.review,
            author_id: author_id,
            company_id: company.id
        })
    end
end