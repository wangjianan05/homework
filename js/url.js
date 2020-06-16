/**
 * Created by Mr.wang on 2017/10/26.
 */
var myApiUrl="http://10.133.232.58:8080/com_chitic_module_war";
// var myApiUrl="http://47.104.101.14:8090/ModuleMsgSystem";
/*var myApiUrl="http://10.133.232.59:8080/ModuleMsgSystem";*/
// var myApiUrl="http://116.62.165.169/ModuleMsgSystem";

/*登录*/
var loginUrl=myApiUrl+"/user/login";
/*退出*/
var logoutUrl=myApiUrl+"/user/logout";
/*修改密码*/
var changePwdUrl=myApiUrl+"/user/modify_pwd";
/*重置密码*/
var resetPwdUrl=myApiUrl+"/user/reset_pwd";
/*加载用户列表*/
var userList=myApiUrl+"/user/list";
/*添加用户*/
var addMyUser=myApiUrl+"/user/add";
/*删除用户*/
var deleteMyUser=myApiUrl+"/user/delete";
/*修改用户*/
var changeMyUser=myApiUrl+"/user/modify";
/*获取用户信息*/
var userDetail=myApiUrl+"/user/detail";
/*添加合同*/
var addContractUrl=myApiUrl+"/contract/add";
/*修改合同*/
var changeContractUrl=myApiUrl+"/contract/modify";
/*删除合同*/
var deleteContractUrl=myApiUrl+"/contract/delete";
/*查询合同*/
var searchContractUrl=myApiUrl+"/contract/list";
/*更换模块*/
var changeModelUrl=myApiUrl+"/colt/change";
/*添加模块*/
var addModelUrl=myApiUrl+"/colt/data";
/*模块发货验证*/
var modelValidateUrl=myApiUrl+"/colt/validate";
/*模块发货*/
var modelDelivery=myApiUrl+"/colt/url_delivery";
/*模块入库*/
var modelPutInStore=myApiUrl+"/colt/putInStore";
/*模块作废*/
var modeluUpdateOne=myApiUrl+"/colt/updateColtsModule";
/*模块查询*/
var modelSearch=myApiUrl+"/colt/list";
/*模块发货查询*/
var modelQuery=myApiUrl+"/colt/d_query";
/*新模块查询*/
var modelget=myApiUrl+"/colt/validcolt";
/*添加卡*/
var addSimCard=myApiUrl+"/colt/addsimcard";
/*搜索卡*/
var listSimCard=myApiUrl+"/colt/listSimCard";
/*删除卡*/
var deleteSimcards=myApiUrl+"/colt/deleteSimcards";
/*查看卡基础信息*/
var cardmonthdata=myApiUrl+"/colt/cardmonthdata";
/*查看物流单号*/
var logistics=myApiUrl+"/colt/logistics";
/*查看操作日志*/
var operationLog=myApiUrl+"/colt/operation_log";
/*验证物流单号*/
var checkDelivery=myApiUrl+"/colt/checkDelivery";
/*添加平台*/
var fly2Plat=myApiUrl+"/plat/fly2Plat";
/*搜索平台*/
var platlist=myApiUrl+"/plat/list";
/*修改平台*/
var update2Plat=myApiUrl+"/plat/update2Plat";
/*删除平台*/
var platDelete=myApiUrl+"/plat/delete";
/*删除模块*/
var deleteColts=myApiUrl+"/colt/deleteColts";
/*上传图片*/
var uploadFile=myApiUrl+"/colt/uploadFile";
/*获取图片*/
var getPic=myApiUrl+"/colt/showReceipt";
/*获取流量告警列表*/
var getFlow=myApiUrl+"/contract/outofdateInfo";
/*获取告警数量*/
var getFlowNum=myApiUrl+"/contract/countOutOfDateModule";
/*物联卡导出*/
var exportSimCard=myApiUrl+"/colt/exportSimCard";
/*流量报警导出*/
var exportOutDateInfo=myApiUrl+"/contract/exportOutDateInfo";
/*下载模板*/
var downloadF=myApiUrl+"/colt/download";
/*批量添加*/
var modultAdd=myApiUrl+"/colt/module/add";
/*批量替换*/
var modultReplace=myApiUrl+"/colt/module/replace";
/*流量年限编辑*/
var flowEdit=myApiUrl+"/colt/edit";
/*批量上传card*/
var batchAddCard=myApiUrl+"/colt/batchAddCard";
/*修改卡的状态*/
var simStatus=myApiUrl+"/sim/status";
/*修改模块的合同号*/
var editContractId=myApiUrl+"/colt/editContract";
/*预先处理ajax*/
$.ajaxSetup( {
 xhrFields: {
        withCredentials: true
    },
    crossDomain: true
} );


/*获取用户类型*/
var getUserType;
function getUserDetail(username,key){
    $.ajax({
        type : "get",
        url : userDetail,
        dataType : "json",
        async: false,
        data:{login_name:userName,key:key},
        success : function(data) {
            if(data.error_code==0){
                getUserType=data.data.user_type;
            }
            else if(data.error_code==99999){
                alert("登录超时");
                window.parent.location.href="../login/login.html";

            }
            else{
                alert(data.error_msg);
            }
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
            console.log(XMLHttpRequest.status,XMLHttpRequest.readyState,textStatus);
        }
    });
}

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
/*刷新事件*/
function reloadUrl(){
    window.location.reload();
}


















