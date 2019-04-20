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

ActiveRecord::Schema.define(version: 2019_03_05_213453) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string "identifier"
    t.string "name"
    t.string "date"
    t.string "url"
    t.string "time"
    t.string "lat"
    t.string "long"
    t.text "information"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "follows", force: :cascade do |t|
    t.integer "followee_id", null: false
    t.integer "follower_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["followee_id"], name: "index_follows_on_followee_id"
    t.index ["follower_id", "followee_id"], name: "index_follows_on_follower_id_and_followee_id", unique: true
    t.index ["follower_id"], name: "index_follows_on_follower_id"
  end

  create_table "hangouts", force: :cascade do |t|
    t.bigint "user_id"
    t.string "username"
    t.string "name"
    t.string "date"
    t.string "time"
    t.float "lat"
    t.float "long"
    t.text "information"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_hangouts_on_user_id"
  end

  create_table "memberships", force: :cascade do |t|
    t.bigint "hangout_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hangout_id"], name: "index_memberships_on_hangout_id"
    t.index ["user_id"], name: "index_memberships_on_user_id"
  end

  create_table "tickets", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_tickets_on_event_id"
    t.index ["user_id"], name: "index_tickets_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "uuid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "hangouts", "users"
  add_foreign_key "memberships", "hangouts"
  add_foreign_key "memberships", "users"
  add_foreign_key "tickets", "events"
  add_foreign_key "tickets", "users"
end
