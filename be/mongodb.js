const mongoose = require('mongoose');
const User = require('./models/User'); // Điều chỉnh đường dẫn tùy thuộc vào cấu trúc thư mục của bạn
require('dotenv').config();
const uri = process.env.URI_MONGODB;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Kết nối đến MongoDB thành công');

    // const newUser = new User({
    //   username: 'exampleUser',
    //   email: 'example@example.com',
    //   password: 'examplePassword',
    // });

    // try {
    //   const savedUser = await newUser.save();
    //   console.log('Dữ liệu đã được thêm vào bảng "user":', savedUser);
    // } catch (error) {
    //   console.error('Lỗi khi thêm dữ liệu vào bảng "user":', error);
    // }
  })
  .catch(error => {
    console.error('Kết nối đến MongoDB thất bại:', error);
  });
