const users = require("../../models/mongo/users");
//CRUD

//R-READ อ่านข้อมูล
exports.index = async (req, res, next) => {

    let data = await users.find();
    
    res.status(200).json(data);
 
};

// C-Create เขียนข้อมูล เพิ่มข้อมูล
exports.insert = async (req, res, next) => {

    let data = new users({
        username: req.body.username,
        email: req.body.email
    });

    data.save();
    res.status(200).json({
        message: "บันทึกข้อมูลเรียบร้อยแล้ว"
    });

};

// U-Update แก้ไขข้อมูล
exports.update = async (req, res, next) => {

    const id = "6119e57c8363e9164cc41bfd";

    const data = {
        username: "updatenow",
        email: "update@gmail.com"
    }

    let update = await users.updateOne(
        { _id: id },
        {
            username: data.username,
            email: data.email
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

    const id = "6119e57c8363e9164cc41bfd";

    const data = await users.deleteOne(
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