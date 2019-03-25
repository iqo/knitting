class Picture {
    constructor(name,description, filename) {
        this.pic_id=0;
        this.picture_name=name;
        this.picture_description=description;
        this.file_name = filename;
    }


    static getAllPicturesSQL(){
        let sql = `SELECT * FROM pictures`;
        return sql;
    }

     static getPictureByIdSQL(pic_id) {
        let sql = `SELECT * FROM pictures WHERE picture_id = ${pic_id}`;
        return sql;           
     }

    getAddPictureSQL() {
        console.log(this.picture_name, this.picture_description)
        let sql = `INSERT INTO pictures(picture_name, picture_description, file_name) \
                   VALUES('${this.picture_name}','${this.picture_description}','${this.file_name}')`;
        return sql;           
    }

    static deletePictureByIdSQL(pic_id) {
        console.log(pic_id);
        let sql = `DELETE FROM pictures WHERE picture_id = ${pic_id}`;
        return sql;           
    }
}

// export default Picture;
module.exports = Picture;