# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_08_153013) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "company_id", null: false
    t.index ["user_id", "company_id"], name: "index_favorites_on_user_id_and_company_id", unique: true
  end

  create_table "reservations", force: :cascade do |t|
    t.string "date", null: false
    t.string "time", null: false
    t.integer "company_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id", "date", "time"], name: "index_reservations_on_company_id_and_date_and_time", unique: true
    t.index ["company_id", "user_id"], name: "index_reservations_on_company_id_and_user_id", unique: true
    t.index ["company_id"], name: "index_reservations_on_company_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "companies", force: :cascade do |t|
    t.string "name", null: false
    t.string "industry", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zipcode", null: false
    t.string "phone_number", null: false
    t.time "open_time"
    t.time "close_time"
    t.decimal "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "owner_id", null: false
    t.index ["name"], name: "index_companies_on_name", unique: true
    t.index ["address"], name: "index_companies_on_address", unique: true
    t.index ["city"], name: "index_companies_on_city"
    t.index ["state"], name: "index_companies_on_state"
    t.index ["zipcode"], name: "index_companies_on_zipcode"
    t.index ["owner_id"], name: "index_companies_on_owner_id"
    t.index ["phone_number"], name: "index_companies_on_phone_number", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.decimal "overall_rating"
    t.integer "service_rating", null: false
    t.integer "value_rating", null: false
    t.integer "efficiency_rating", null: false
    t.text "body", null: false
    t.integer "author_id", null: false
    t.integer "company_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id", "company_id"], name: "index_reviews_on_author_id_and_company_id", unique: true
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["company_id"], name: "index_reviews_on_company_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "phone_number"
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["fname"], name: "index_users_on_fname"
    t.index ["lname"], name: "index_users_on_lname"
    t.index ["phone_number"], name: "index_users_on_phone_number", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
