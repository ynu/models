/**
 * Created by 文琪 on 2015/2/19.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// 固定资产模型定义
var gdzcSchemaObject = {
    '设备名称': String,
    '标签号':String,
    '单价':Number,
    '数量':Number,
    '型号':String,
    '规格':String,
    '所属部门':{
        '名称':String,
        '代码':String
    },
    '购置日期':Date,
    '领用人':{
        '姓名':String
    },
    '管理人':{
        '姓名':String
    },
    '存放地点':String,
    '状态':String
};

// 填表系统模板模型定义
var formTemplateSchemaObject = {
    name: String,
    templateFile: String,
    singleValueFields: [{
        name: String,
        text:String,
        type:String,
        description: String
    }],
    multiLineValueFields:[{
        name:String,
        description:String,
        max:Number,
        min:Number,
        fields:[{
            name: String,
            text:String,
            type:String,
            description:String
        }]
    }]
}
module.exports = exports = {
    GdzcSchema: new Schema(gdzcSchemaObject),
    FormTemplateScheme: new Schema(formTemplateSchemaObject)
};