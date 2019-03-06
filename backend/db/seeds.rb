# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Follow.destroy_all


uuid = SecureRandom.uuid
password = 'none'
username = 'pat'

pat = User.create(password:password, uuid: uuid, username: username)

# CREATE USERS 
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

users = [pat, a,b,c,d,e,f,g,h,i,j,k]


# CREATE HANGOUTS

hangout = Hangout.create(user_id: pat.id, name:'the hangout', information:"the hangest of outtings")


users.each do |e|
    if e.id != pat.id
        pat.followers << e
        pat.following << e
    end
    hangout.users << e
end

event2 = Hangout.create(user_id: d.id, name:'WOOP DAY', information:"WOOP WOOP HANGOUT 2")

users.sample(4).each do |e|
    event2.users << e
end

Hangout.create(user_id: d.id, name:'pat not invited', information: "JOHN MARK IS INVITED")
Hangout.create(user_id: d.id, name:'event2', information: "JOHN MARK THEMED")
Hangout.create(user_id: d.id, name:'event3', information: "JOHN MARK IS DEFINATELY INVITED")
Hangout.create(user_id: d.id, name:'event4', information: "STEPHEN NOT INVITED")