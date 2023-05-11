/*
 function enableMyMoInSettings(){

 cordova.plugins.MyMo_Cordova_Plugin.testing("abcd",function(resp){
 alert("Resp"+resp);
 },function(err){
 alert("Err"+err);
 }
 );
 }*/

function enableMyMoInSettings(){
    cordova.plugins.MyMo_Cordova_Plugin.enableMyMoInSettings("",function(resp){
                                                             console.log("Success"+resp);
                                                             },function(err){
                                                             console.log("Error"+err);
                                                             }
                                                             );
}

function selectKeyboardOptions(){
    cordova.plugins.MyMo_Cordova_Plugin.selectKeyboardOptions("",function(resp){
                                                              console.log("Success"+resp);
                                                              },function(err){
                                                              console.log("Error"+err);
                                                              }
                                                              );
}

function enableDisableBtnClick(){
    var enableDisableBtnTxt = document.getElementById("enableDisableBtnTxt").textContent;
    var phNo = document.getElementById("phNo").value;
    var senderName = document.getElementById("senderName").value;
    var custCode = document.getElementById("custCode").value;
    var idNumber = document.getElementById("idNumber").value;
    var additionaInformation = document.getElementById("additionaInformation").value;
    var countryCode = document.getElementById("countryCode").value;
    var currencyCode = document.getElementById("currencyCode").value;
    var loginId = document.getElementById("loginId").value;
    var password = document.getElementById("password").value;
    var merchantId = document.getElementById("merchantId").value;
    var currencySymbol = document.getElementById('currencySymbol').value;
    var minAmt = document.getElementById("minAmt").value;
    var maxAmt = document.getElementById("maxAmt").value;
    var postURL = document.getElementById("postURL").value;
    var branchCode = document.getElementById("branchCode").value;
    var bnkAcc = document.getElementById("bnkAcc").value;
    var banksdropdown = document.getElementById("banksdropdown").value;
    var recPhoneSecurity = document.getElementById("recPhoneSecurity").value;
    var phoneLength = document.getElementById('phoneLength').value;
    var txnSecurity = document.getElementById("txnSecurity").value;
    var noSecurity = document.getElementById("noSecurity").value;
    var PinValidateAtIDM = document.getElementById("PinValidateAtIDM").value;
    var customerSecurityPin = document.getElementById("customerSecurityPin").value;
    var txnSecurityPin = document.getElementById("txnSecurityPin").value;
	    var customerPinLength = document.getElementById("customerPinLength").value;

    if("Y" == txnSecurityPin){
        if (customerSecurityPin == null || customerSecurityPin == "") {
            document.getElementById("customerSecurityPin").focus();
            return false;
        }
        if (PinValidateAtIDM == null || PinValidateAtIDM == "") {
            document.getElementById("PinValidateAtIDM").focus();
            return false;
        }
        if (PinValidateAtIDM != "BANK" && PinValidateAtIDM != "IDM") {
            document.getElementById("PinValidateAtIDM").focus();
            return false;
        }
    }

    var mymoIconImg = document.getElementById("mymoIconBase").textContent;
    /*  var sendMoneyIcon = document.getElementById('sendMoneyBase').textContent;
     var atmIcon = document.getElementById('atmBase').textContent;
     var histIcon = document.getElementById('histBase').textContent;
     var payIcon = document.getElementById('payIconBase').textContent;*/
    var arrowIcon = document.getElementById('arrowIconBase').textContent;
    var txnSuccessIcon = document.getElementById('txnSuccessIconBase').textContent;
    var alertIcon = document.getElementById('alertIconBase').textContent;
    var contactIcon = document.getElementById('contactIconBase').textContent;
    var processingIcon = document.getElementById('processingIconBase').textContent;


    var textColor = document.getElementById("textColor").value;
    var headerPayTxtClr = document.getElementById("headerPayTxtClr").value;
    var headerPayBackClr = document.getElementById("headerPayBackClr").value;
    var editBoxBackClr = document.getElementById("editBoxBackClr").value;
    var histHeaderBackClr = document.getElementById("histHeaderBackClr").value;
    var txnSuccessTxtClr = document.getElementById("txnSuccessTxtClr").value;
    var txnSuccessAmountTxtClr = document.getElementById("txnSuccessAmountTxtClr").value;
    var alertTxtClr = document.getElementById("alertTxtClr").value;
    var calandarBtnTxtClr = document.getElementById("calandarBtnTxtClr").value;
    var loadMoreBtnTxtClr = document.getElementById("loadMoreBtnTxtClr").value;
	
	
    // Confirm  txn popup
    var confirmTxnYesBtnClr = document.getElementById("confirmTxnYesBtnClr").value;
    var confirmTxnNoBtnClr = document.getElementById("confirmTxnNoBtnClr").value;
    //Cancel Transaction popup
    var closeBtnClr = document.getElementById("closeBtnClr").value;
    var confirmCancelTxnBtnClr = document.getElementById("confirmCancelTxnBtnClr").value;
    //Confirm Cancel Transaction popup
    var confirmCancelYesBtnClr = document.getElementById("confirmCancelYesBtnClr").value;
    var confirmCancelNoBtnClr = document.getElementById("confirmCancelNoBtnClr").value;

    var sendMoneyLbl = document.getElementById("sendMoneyLbl").value;
    var atmLbl = document.getElementById("atmLbl").value;
    var historyLbl = document.getElementById("historyLbl").value;
    var payLbl = document.getElementById("payLbl").value;
	var TransactionSuccessLbl = document.getElementById("TransactionSuccessLbl").value;
	
    var bankUserName = document.getElementById("bankUserName").value;



// Error msg configurations :
var textOfErrorCode016 = document.getElementById('textOfErrorCode016').value;
var textOfErrorCode224 = document.getElementById('textOfErrorCode224').value;
var textOfErrorCode236 = document.getElementById('textOfErrorCode236').value;
var textOfErrorCode358 = document.getElementById('textOfErrorCode358').value;
var textOfErrorCode370 = document.getElementById('textOfErrorCode370').value;
var textOfErrorCode428 = document.getElementById('textOfErrorCode428').value;
var textOfErrorCode501 = document.getElementById('textOfErrorCode501').value;
var textOfErrorCode604 = document.getElementById('textOfErrorCode604').value;
var textOfErrorCode888 = document.getElementById('textOfErrorCode888').value;
var textOfErrorCode999 = document.getElementById('textOfErrorCode999').value;
var textOfErrorCode1003 = document.getElementById('textOfErrorCode1003').value;
var textOfErrorCode2054 = document.getElementById('textOfErrorCode2054').value;
var textOfErrorCode2071 = document.getElementById('textOfErrorCode2071').value;
var textOfErrorCode2077 = document.getElementById('textOfErrorCode2077').value;
var textOfErrorCode2080 = document.getElementById('textOfErrorCode2080').value;
var textOfErrorCode2082 = document.getElementById('textOfErrorCode2082').value;
var textOfErrorCode2084 = document.getElementById('textOfErrorCode2084').value;
var textOfErrorCode2086 = document.getElementById('textOfErrorCode2086').value;
var textOfErrorCode2087 = document.getElementById('textOfErrorCode2087').value;
var textOfErrorCode2589 = document.getElementById('textOfErrorCode2589').value;
var textOfErrorCode5000 = document.getElementById('textOfErrorCode5000').value;
var textOfErrorCode5010 = document.getElementById('textOfErrorCode5010').value;
var textOfErrorCode3059 = document.getElementById('textOfErrorCode3059').value;


var textOfValidation001 = document.getElementById('textOfValidation001').value;
var textOfValidation002 = document.getElementById('textOfValidation002').value;
var textOfValidation003 = document.getElementById('textOfValidation003').value;
var textOfValidation004 = document.getElementById('textOfValidation004').value;
var textOfValidation005 = document.getElementById('textOfValidation005').value;
var textOfValidation006 = document.getElementById('textOfValidation006').value;
var textOfValidation007 = document.getElementById('textOfValidation007').value;
var textOfValidation008 = document.getElementById('textOfValidation008').value;
var textOfValidation009 = document.getElementById('textOfValidation009').value;
var textOfValidation011 = document.getElementById('textOfValidation011').value;
var textOfValidation012 = document.getElementById('textOfValidation012').value;


    if("ENABLE MYMO" == enableDisableBtnTxt){
        var searchData = {
            phNo : phNo,
            senderName : senderName,
            custCode : custCode,
            idNumber : idNumber,
            additionaInformation : additionaInformation,
            countryCode : countryCode,
            currencyCode : currencyCode,
            loginId : loginId,
            password : password,
            merchantId : merchantId,
            minAmt : minAmt,
            maxAmt : maxAmt,
            postURL : postURL,
            branchCode : branchCode,
            bnkAcc : bnkAcc,
            txnSecurity : txnSecurity,
            recPhoneSecurity : recPhoneSecurity,
            txnSecurityPin : txnSecurityPin,
            noSecurity : noSecurity,
            PinValidateAtIDM : PinValidateAtIDM,
            customerSecurityPin : customerSecurityPin,
            textColor : textColor,
            editBoxBackClr : editBoxBackClr,
            mymoIconImg : mymoIconImg,
            phoneLength : phoneLength,
            arrowIcon : arrowIcon,
            currencySymbol : currencySymbol,
            banksdropdown : banksdropdown,
            histHeaderBackClr : histHeaderBackClr,
            txnSuccessTxtClr : txnSuccessTxtClr,
            alertTxtClr : alertTxtClr,
            confirmTxnYesBtnClr : confirmTxnYesBtnClr,
            confirmTxnNoBtnClr : confirmTxnNoBtnClr,
            closeBtnClr : closeBtnClr,
            confirmCancelTxnBtnClr : confirmCancelTxnBtnClr,
            confirmCancelYesBtnClr : confirmCancelYesBtnClr,
            confirmCancelNoBtnClr : confirmCancelNoBtnClr,
            txnSuccessIcon : txnSuccessIcon,
            alertIcon : alertIcon,
            contactIcon : contactIcon,
            processingIcon : processingIcon,
            sendMoneyLbl : sendMoneyLbl,
            atmLbl : atmLbl,
            historyLbl : historyLbl,
            payLbl : payLbl,
            headerPayTxtClr : headerPayTxtClr,
            headerPayBackClr : headerPayBackClr,
			customerPinLength : customerPinLength,
     		TransactionSuccessLbl : TransactionSuccessLbl,
     		txnSuccessAmountTxtClr : txnSuccessAmountTxtClr,
     		calandarBtnTxtClr : calandarBtnTxtClr,
     		loadMoreBtnTxtClr : loadMoreBtnTxtClr,
     			textOfErrorCode224 : textOfErrorCode224,
     			textOfErrorCode236 : textOfErrorCode236 ,
     			textOfErrorCode358 : textOfErrorCode358,
     			textOfErrorCode370 : textOfErrorCode370,
     			textOfErrorCode428 : textOfErrorCode428,
     			textOfErrorCode604 : textOfErrorCode604,
     			textOfErrorCode888 : textOfErrorCode888,
     			textOfErrorCode999 : textOfErrorCode999,
     			textOfErrorCode1003 : textOfErrorCode1003,
     			textOfErrorCode2054 : textOfErrorCode2054,
     			textOfErrorCode2071 : textOfErrorCode2071,
     			textOfErrorCode2077 : textOfErrorCode2077,
     			textOfErrorCode2080 : textOfErrorCode2080,
     			textOfErrorCode2084 : textOfErrorCode2084,
     			textOfErrorCode2086 : textOfErrorCode2086,
     			textOfErrorCode2087 : textOfErrorCode2087,
     			textOfErrorCode2589 : textOfErrorCode2589,
     			textOfErrorCode5000 : textOfErrorCode5000,
     			textOfErrorCode5010 : textOfErrorCode5010,
     			textOfErrorCode3059 : textOfErrorCode3059,
     			textOfValidation001 : textOfValidation001,
     			textOfValidation002 : textOfValidation002,
     			textOfValidation003 : textOfValidation003,
     			textOfValidation004 : textOfValidation004,
     			textOfValidation005 : textOfValidation005,
     			textOfValidation006 : textOfValidation006,
     			textOfValidation007 : textOfValidation007,
     			textOfValidation008 :textOfValidation008,
     			textOfValidation009 : textOfValidation009,
     			textOfValidation011 : textOfValidation011,
				textOfValidation012 : textOfValidation012,
				textOfErrorCode016 : textOfErrorCode016,
				textOfErrorCode501	: textOfErrorCode501,
				textOfErrorCode2082 : textOfErrorCode2082,
				bankUserName : bankUserName




        };

        document.getElementById('enableDisableBtnTxt').innerHTML = "DISABLE MYMO";
        cordova.plugins.MyMo_Cordova_Plugin.enableMyMoToAllowSendMoney(searchData,function(resp){
                                                                       console.log("Success"+resp);
                                                                       document.activeElement.blur();
                                                                       setTimeout(function(){document.getElementById("phNo").focus();},1500);
                                                                       },function(err){
                                                                       console.log("Error"+err);
                                                                       }
                                                                       );


    }else if("DISABLE MYMO" == enableDisableBtnTxt) {

        //document.getElementById("senderName").focus();

        document.getElementById('enableDisableBtnTxt').innerHTML = "ENABLE MYMO";
        cordova.plugins.MyMo_Cordova_Plugin.disableMyMoToRestrictSendMoney("",function(resp){
                                                                           console.log("Success"+resp);
                                                                           document.activeElement.blur();
                                                                           setTimeout(function(){document.getElementById("phNo").focus();},1500);
                                                                           },function(err){
                                                                           console.log("Error"+err);
                                                                           }
                                                                           );

    }
}


function showPinDiv(){
    var x = document.getElementById("showPinDiv");
    x.style.display = "block";

    var y = document.getElementById("showOtpDiv");
    y.style.display = "none";

    document.getElementById('txnSecurityPin').value = "Y";
    document.getElementById('txnSecurity').value = "N";
    document.getElementById('noSecurity').value = "N";

}

function showOtpDiv(){
    var x = document.getElementById("showOtpDiv");
    x.style.display = "block";

    var y = document.getElementById("showPinDiv");
    y.style.display = "none";

    document.getElementById('txnSecurityPin').value = "N";
    document.getElementById('txnSecurity').value = "Y";
    document.getElementById('noSecurity').value = "N";
}

function showNoDiv(){
    var x = document.getElementById("showOtpDiv");
    x.style.display = "none";

    var y = document.getElementById("showPinDiv");
    y.style.display = "none";

    document.getElementById('txnSecurityPin').value = "N";
    document.getElementById('txnSecurity').value = "N";
    document.getElementById('noSecurity').value = "Y";
}

function readImageFile(ths,iconString,iconImg){
    if (ths.files && ths.files[0]) {
        var FR= new FileReader();

        FR.addEventListener("load", function(e) {
                            document.getElementById(iconImg).src       = e.target.result;
                            document.getElementById(iconString).innerHTML = e.target.result;
                            document.getElementById(iconImg).width = "30";
                            document.getElementById(iconImg).height = "30";
                            });

        FR.readAsDataURL( ths.files[0] );
    }
}
