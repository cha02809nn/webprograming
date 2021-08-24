const Product = require("../../models/mongo/Product");
//CRUD

//R-READ อ่านข้อมูล
exports.index = async (req, res, next) => {

    let data = await Product.find();
    
    res.status(200).json(data);
 
};

// C-Create เขียนข้อมูล เพิ่มข้อมูล
exports.insert = async (req, res, next) => {

    let data = new Product({

        ProductID: req.body.ProductID,
        ProductName: req.body.ProductName,
        ProductPrice: req.body.ProductPrice,
        ProductStrock: req.body.ProductStrock,
        ProductUnit: req.body.ProductUnit 

    });

    data.save();
    res.status(200).json({
        message: "บันทึกข้อมูลเรียบร้อยแล้ว"
    });

};

// U-Update แก้ไขข้อมูล
exports.update = async (req, res, next) => {

    const id = "6119e6058363e9164cc41bff";

    const data = {
        ProductID: req.body.ProductID,
        ProductName: req.body.ProductName,
        ProductPrice: req.body.ProductPrice,
        ProductStrock: req.body.ProductStrock,
        ProductUnit: req.body.ProductUnit,
    }

    let update = await Product.updateOne(
        { _id: id },
        {
            ProductID: req.body.ProductID,
        ProductName: req.body.ProductName,
        ProductPrice: req.body.ProductPrice,
        ProductStrock: req.body.ProductStrock,
        ProductUnit: req.body.ProductUnit,
        }
    );

    if(update.nModified === 0){
        res.status(400).json({
            error: "ไม่สามารถแก้ไขข้อมูลได้"
        });
    } else {
        res.status(200).json({
            data: "แก้ไขข้อมูลเรียบร้อยแล้ว"
        });
    }

};

// D-Delete ลบข้อมูล
exports.delete = async (req, res, next) => {

    const id = "6119e6058363e9164cc41bff";

    const data = await Product.deleteOne(
        { _id: id }
    );

    if(data.deleteCount === 0){
        require.status(400).json({
            error: "ไม่สามารถลบข้อมูลได้"
        });
    }else{
        res.status(200).json({
            message: "ลบข้อมูลเรียบร้อย"
        });
    }
};