var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://minhquangdoan099:minhquangdoan099@cluster0.fub8ilw.mongodb.net/shopbanhang?retryWrites=true&w=majority";

MongoClient.connect(url, (err, client) => {
    if (err) throw err;

    console.log("Kết nối thành công");

    // var dbo = client.db("shopbanhang");
    //     var obj = { user: 'quang', password: 'quang' };
    //     dbo.collection("user").insertOne(obj, (err, result) => {
    //         if (err) throw err;
    //         console.log("Thêm Thành Công");
    //         console.log(result);
    //         client.close();
    //     }); 
    client.close();
});
