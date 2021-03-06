# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_12_030558) do

  create_table "user_auths", charset: "utf8mb4", force: :cascade do |t|
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "jti", null: false
    t.string "user_id", default: "", null: false
    t.index ["jti"], name: "index_user_auths_on_jti", unique: true
    t.index ["reset_password_token"], name: "index_user_auths_on_reset_password_token", unique: true
    t.index ["user_id"], name: "index_user_auths_on_user_id", unique: true
  end

  create_table "user_infos", charset: "utf8mb4", force: :cascade do |t|
    t.string "name"
    t.bigint "user_auth_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_auth_id"], name: "index_user_infos_on_user_auth_id"
  end

  add_foreign_key "user_infos", "user_auths"
end
