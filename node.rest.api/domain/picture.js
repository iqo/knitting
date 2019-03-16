class Picture {
    constructor(name,description) {
        this.pic_id=0;
        this.picture_name=name;
        this.picture_description=description;
    }

    /* getAddProductSQL() {
        let sql = `INSERT INTO PICTURES(picture_name, picture_description) \
                   VALUES('${this.picture_name}',${this.picture_description})`;
        return sql;           
    } */

    static getAllPicturesSQL(){
        let sql = `SELECT * FROM pictures`;
        return sql;
    }

    /* static getProductByIdSQL(pic_id) {
        let sql = `SELECT * FROM PICTURES WHERE PICTURE_ID = ${pic_id}`;
        return sql;           
    }

    static deleteProductByIdSQL(pic_id) {
        let sql = `DELETE FROM PICTURES WHERE PICTURE_ID = ${pic_id}`;
        return sql;           
    } */
}

// export default Picture;
module.exports = Picture;