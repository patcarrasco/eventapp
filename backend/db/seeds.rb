# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Follow.destroy_all


uuid = SecureRandom.uuid
password = 'none'
username = 'pat'

pat = User.create(password:password, uuid: uuid, username: username)

a = User.create(password:'none', uuid: SecureRandom.uuid, username:'taimuru')
b = User.create(password:'none', uuid: SecureRandom.uuid, username:'jesus')
c = User.create(password:'none', uuid: SecureRandom.uuid, username:'johnmark')
d = User.create(password:'none', uuid: SecureRandom.uuid, username:'stephen')
e = User.create(password:'none', uuid: SecureRandom.uuid, username:'mariel')
f = User.create(password:'none', uuid: SecureRandom.uuid, username:'gigi')
g = User.create(password:'none', uuid: SecureRandom.uuid, username:'eric')
h = User.create(password:'none', uuid: SecureRandom.uuid, username:'ana')
i = User.create(password:'none', uuid: SecureRandom.uuid, username:'joel')
j = User.create(password:'none', uuid: SecureRandom.uuid, username:'joe')
k = User.create(password:'none', uuid: SecureRandom.uuid, username:'julissa')

users = [a,b,c,d,e,f,g,h,i,j,k]

users.each do |e|
    pat.followers << e
    pat.following << e
end
