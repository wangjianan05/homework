/*
 * @Module: 
 * @FileName: 
 * @Description: 
 * @Author: Wangjianan
 * @Date: 2020-06-16 10:35:34
 * @LastEditors: Wangjianan
 * @LastEditTime: 2020-06-18 16:41:01
 */ 
var myApiUrl="http://121.40.230.153:8099";

/*登录*/
var loginUrl=myApiUrl+"/login";
/*退出*/
var registerUrl=myApiUrl+"/register";
/*修改密码*/
var changePwdUrl=myApiUrl+"/password";
/*新增商品*/
var addUrl=myApiUrl+"/add";
/*加载列表*/
var goodsList=myApiUrl+"/goods";
/*删除商品*/
var delMyUser=myApiUrl+"/delete";
/*预先处理ajax*/
// $.ajaxSetup( {
//  xhrFields: {
//         withCredentials: true
//     },
//     crossDomain: true
// } );


/*通用提示框*/
function getAlert(infor){
    $("#alertInformain").html(infor);
    $('#alert').modal('show');
}
/*成功提示框*/
function getAlertS(infor){
    $("#alertInforSuc").html(infor);
    $('#alertSuccess').modal('show');
}
/*判断提示框*/
function getAlertIf(infor){
    $("#alertInforIf").html(infor);
    $('#alertIf').modal('show');
}

















