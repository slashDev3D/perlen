try {
    var oScope = document.querySelector('.dnd_module_3318b891c6fd3c7ca96363e89f8a6961'); // 컴포넌트 네임스페이스
    var oBankInfoElmenet = oScope.querySelector('.ec-bank-info'); // 테이블이 생성될 위치
    if (oBankInfoElmenet.innerHTML == '' && EC_SHOP_LIB_INFO.getBankInfo().length > 0) {
        var oTableElement = document.createElement("table");
        for (var iIndex in EC_SHOP_LIB_INFO.getBankInfo()) { 
            var oBankInfo = EC_SHOP_LIB_INFO.getBankInfo()[iIndex];
            var oTrElement = document.createElement('tr');
            for (var sKey in oBankInfo) {
                var oTdElement = document.createElement('td');
                oTdElement.appendChild(document.createTextNode(oBankInfo[sKey]));
                oTdElement.setAttribute('class', sKey);
                oTrElement.appendChild(oTdElement);
            }
            oTableElement.appendChild(oTrElement);
        }
        oBankInfoElmenet.appendChild(oTableElement);
    }
} catch (e) {}