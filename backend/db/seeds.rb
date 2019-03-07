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
i = User.create(password:'none', uuid: SecureRandom.uuid, username:'julissa')
i = User.create(password:'none', uuid: SecureRandom.uuid, username:'joel')
j = User.create(password:'none', uuid: SecureRandom.uuid, username:'joe')
fsafn = User.create(password:'none', uuid: SecureRandom.uuid, username:'thompson')
k = User.create(password:'none', uuid: SecureRandom.uuid, username:'la')
k = User.create(password:'none', uuid: SecureRandom.uuid, username:'anik')
j = User.create(password:'none', uuid: SecureRandom.uuid, username:'naomi')
l = User.create(password:'none', uuid: SecureRandom.uuid, username:'susan')
m = User.create(password:'none', uuid: SecureRandom.uuid, username:'roman')
n = User.create(password:'none', uuid: SecureRandom.uuid, username:'jerold')
o = User.create(password:'none', uuid: SecureRandom.uuid, username:'kevywevy')
geg = User.create(password:'none', uuid: SecureRandom.uuid, username:'gracie')
asgewg = User.create(password:'none', uuid: SecureRandom.uuid, username:'kiyana')


users = [pat, a,b,c,d,e,f,g,h,i,j,k]


# CREATE HANGOUTS

hangout = Hangout.create(user_id: pat.id, name:'the hangout', information:"the hangest of outtings", lat:'40.7128', long:'-74.0060')


User.all.each do |e|
    if e.id != pat.id
        pat.followers << e
        pat.following << e
    end
    hangout.users << e
end

event2 = Hangout.create(user_id: o.id, name:'WOOP DAY', information:"WOOP WOOP HANGOUT YAY", lat:'40.7128', long:'-74.0060' )

users.sample(4).each do |e|
    event2.users << e
end

event2 = Hangout.create(user_id: h.id, username: a.username, name:'WOOP DAY', information:"WOOP WOOP HANGOUT 2", lat:'40.3138', long:'-74.4060' )
event3 = Hangout.create(user_id: c.id, username: c.username, name:'cat party', information:"WOOP WOOP HANGOUT 3", lat:'40.728', long:'-74.33260' )
event4 = Hangout.create(user_id: d.id, username: d.username, name:'bird party', information:"WOOP WOOP HANGOUT 4", lat:'40.6948', long:'-74.0160' )
event5 = Hangout.create(user_id: e.id, username: e.username, name:'parrot party', information:"WOOP WOOP HANGOUT 5", lat:'40.8958', long:'-74.0460' )
event6 = Hangout.create(user_id: f.id, username: f.username, name:'game of thrones', information:"WOOP WOOP HANGOUT 6", lat:'40.7928', long:'-74.0660' )
event7 = Hangout.create(user_id: g.id, username: g.username, name:'mid-afternoon tea', information:"WOOP WOOP HANGOUT 7", lat:'40.7528', long:'-74.06960' )
event8 = Hangout.create(user_id: b.id, username: b.username, name:'my birth', information:"WOOP WOOP HANGOUT 8", lat:'40.72528', long:'-74.1400' )
