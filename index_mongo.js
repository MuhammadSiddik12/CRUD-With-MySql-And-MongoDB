const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/data', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Connected') })
    .catch((err) => { console.log(err) })


const scheme_data = mongoose.Schema({
    name: String,
    phone: Number,
})

var data = mongoose.model('user_info', scheme_data);

const create = async () => {
    const result = await data.insertMany({
        name: 'Muhammad Siddik',
        phone: 9811073783
    })
}
create()

const read = async () => {
    const result = await data.find()
    console.log(result)
}
read()

const update = async () => {
    const result = await data.updateOne({ phone: 9811073783 }, { $set: { phone: 9910645054 } })
    console.log(result)
}
update()

const delete_ = async () => {
    const result = await data.deleteOne({ phone: 9811073783 })
    console.log(result)
}
delete_()


