Git clone
mkdir client,server
bikin folder client dan server

# Server
npm init -y
npm i express pg sequelize bcryptjs jsonwebtoken cors axios jest supertest
npm install -D sequelize-cli
npx sequelize init
atur config file
npx sequelize db:create
npx sequelize model:generate --name 'nama tabel' --attributes string:string,integer:integer
atur foreign key dan tambahin unique di email
npx sequelize db:migrate

(kalo ada user bikin dummy data atau langsung register)
seed data json yg dikasih

### bikin seed dari file json
npx sequelize seed:generate --name 

sequelize db:seed:all / npx sequelize db:seed --seed nama file

touch .gitignore (isi node_modules) bisa ada di client dan server

### atur package.json
"start-app": "npx nodemon bin/www",

### bikin App.js
copas dari tutorial express hello world  (https://expressjs.com/en/starter/hello-world.html,
https://www.geeksforgeeks.org/express-js-express-urlencoded-function/)
require cors
process.env.PORT
app.use(express.json())
bcrypt(https://www.npmjs.com/package/bcryptjs)
jwt(https://www.npmjs.com/package/jsonwebtoken)

### kondisi rute"
post login 
dptin email dan password dari req.body
cari user
kalo ada compare password
kalo ok bikin token dgn data objek id dan email
kirim 200 access_token token

### setup buat jalanin testing

- Created db testing: `sequelize --env test db:create`
- Migrate db testing: `sequelize --env test db:migrate`
- Seeding db testing: `sequelize --env test db:seed:all`
npx sequelize --env test db:seed --seed 20211017043423-create-dummy-user.js
- Ketika run test, app.listen nya boleh dicomment atau bikin di bin/www, di app.js lakukan module.exports = app
- Pada package.json tambahkan script `"test": "jest --runInBand --detectOpenHandles --forceExit"`


# client
npm init -y
npm i vue axios
.gitignore (node_modules)
mkdir src
touch src/App.js src/main.js  di src
touch index.html di global
di html include main.js di src
https://wahyudiputra.com/blog/build-vue-app-with-parcel/


client vue cli
vue create client


command" cli
