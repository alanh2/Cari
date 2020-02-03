function ChangeLocation(Name, Id) {
    window.location.replace("http://www.w3schools.com");
}

function ShowPup(Name, Id) {
    var someDate = new Date();  // for example
    var ticks = someDate.getTime();
    
    document.getElementById('IfrmL2').src = Name + '.html?Id=' + Id + '&T=' + ticks;
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}



function ShowMod(Name, IdParam) {
    //debugger;
    var someDate = new Date();  // for example
    var ticks = someDate.getTime();

    document.getElementById('IfrmL2').src = Name + '?T=' + ticks + '&IdParam=' + IdParam;
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}


function SaveMod(FuncName, Params) {

    //debugger;
    var Name = FuncName;

    $.ajax({
        type: "POST",
        url: serverAddress + "UIS.aspx/Getts",
        data: JSON.stringify({
            'Name': Name, 'Params': Params
        }),
        async: false,

        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            alert('הפריט התווסף בהצלחה');
        },
        error: function (x, y, z) {
            alert('GetOrgType.' + x.responseText + "  " + x.status);
        }
    });
}

function DeleteRec(TableName, Param) {

    var Name = TableName + 'Delete';

    $.ajax({
        type: "POST",
        url: serverAddress + "UIS.aspx/Getts",
        data: JSON.stringify({
            'Name': Name, 'Params': Param
        }),
        async: false,

        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            alert('הפעולה בוצעה בהצלחה');
        },
        error: function (x, y, z) {
            alert('GetOrgType.' + x.responseText + "  " + x.status);
        }
    });
}

function UpdateFrame(obj, obj2) {
    var someDate = new Date();  // for example
    var ticks = someDate.getTime();

    document.getElementById('Ifrm').src = obj + '.html?T=' + ticks;
}

function ClosePopup() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

    // If Subform
    if (typeof LastModOpen !== 'undefined') {
        if (LastModOpen !== '')
            LoadGlobalGrid(LastModOpen);
    }
    else // If main form
    {
        GetTBL1();
    }
}


function GetDateFormat(options) {
    var d = new Date(parseInt(options.value.substr(6)));

    return ("00" + d.getHours()).slice(-2) + ":" +
        ("00" + d.getMinutes()).slice(-2) + ":" +
        ("00" + d.getSeconds()).slice(-2) + " " +
        ("00" + d.getDate()).slice(-2) + "/" +
        ("00" + (d.getMonth() + 1)).slice(-2) + "/" +
        d.getFullYear();
}


function GetTimeFormat(options) {
    return ("00" + options.value.Hours).slice(-2) + ":" +
        ("00" + options.value.Minutes).slice(-2) ;

}


function addDivEmptyProperties(DivName) {
    //Create Labels
   var label = document.createElement("Label");
    label.innerHTML = "";
    label.setAttribute("class", "containerControlsInternalLableControl");
    /*

    //Create an input type dynamically.
    var element = document.createElement("input");
    //Assign different attributes to the element.
    element.setAttribute("type", "checkbox");
    element.setAttribute("id", "EmptyLBL" );
    element.setAttribute("class", "containerControlsInternalTextControl");
    */


    // 'foobar' is the div id, where new fields are to be added
    var NewDiv = document.createElement("div");
    NewDiv.setAttribute("class", "containerControlsInternal");

    //Append the element in page (in span).
    NewDiv.appendChild(label);

    var foo = document.getElementById(DivName);
    foo.appendChild(NewDiv);
}

function addDivCHKProperties(DivName, Name, Caption) {
    //Create Labels
    var label = document.createElement("Label");
    label.innerHTML = Caption;
    label.setAttribute("class", "containerControlsInternalLableControl");


    //Create an input type dynamically.
    var element = document.createElement("input");
    //Assign different attributes to the element.
    element.setAttribute("type", "checkbox");
    element.setAttribute("id", "CHK" + Name);
    element.setAttribute("class", "containerControlsInternalTextControl");



    // 'foobar' is the div id, where new fields are to be added
    var NewDiv = document.createElement("div");
    NewDiv.setAttribute("class", "containerControlsInternal");

    //Append the element in page (in span).
    NewDiv.appendChild(label);
    NewDiv.appendChild(element);

    var foo = document.getElementById(DivName);
    foo.appendChild(NewDiv);
}

function addDivCMBProperties(DivName, Name, Caption) {


    //Create Labels
    var label = document.createElement("Label");
    label.innerHTML = Caption;
    label.setAttribute("class", "containerControlsInternalLableControl");


    //Create an input type dynamically.
    var element = document.createElement("select");
     //Assign different attributes to the element.
    //element.setAttribute("type", "select");
    element.setAttribute("id", "CMB" + Name);
    element.setAttribute("class", "containerControlsInternalTextControl");



    // 'foobar' is the div id, where new fields are to be added
    var NewDiv = document.createElement("div");
    NewDiv.setAttribute("class", "containerControlsInternal");

    //Append the element in page (in span).
    NewDiv.appendChild(label);
    NewDiv.appendChild(element);

    var foo = document.getElementById(DivName);
    foo.appendChild(NewDiv);
}


/*    Multiple Properties */
function DisableDivCMBProperties(DivName, Name, Caption) {
    document.getElementById("CMB" + Name).disabled = true;
}/*    Multiple Properties */
/*    Multiple Properties */
function DisableDivCHKProperties(DivName, Name, Caption) {
    document.getElementById("CHK" + Name).disabled = true;
}/*    Multiple Properties */



function DisableDivProperties(DivName, Name, Caption) {
    document.getElementById("TXT" + Name).disabled = true;
}

/*    Multiple Properties */
function addDivProperties(DivName, Name, Caption) {

    //Create an input type dynamically.
    var element = document.createElement("input");

    //Create Labels
    var label = document.createElement("Label");
    label.innerHTML = Caption;
    label.setAttribute("class", "containerControlsInternalLableControl");

    //Assign different attributes to the element.
    element.setAttribute("type", "text");
    element.setAttribute("id", "TXT" + Name);
    element.setAttribute("class", "containerControlsInternalTextControl");

    

    // 'foobar' is the div id, where new fields are to be added
    var NewDiv = document.createElement("div");
    NewDiv.setAttribute("class", "containerControlsInternal");

    //Append the element in page (in span).
    NewDiv.appendChild(label);
    NewDiv.appendChild(element);

    var foo = document.getElementById(DivName);
    foo.appendChild(NewDiv);

}


/*    Multiple Properties */
function addDivLable(DivName, LableId, Text, className) {

    //Create Labels
    var label = document.createElement("Label");
    label.innerHTML = Text;
    label.setAttribute("class", "containerControlsInternalLableControl");
    label.setAttribute("id", LableId);

    // 'foobar' is the div id, where new fields are to be added
    var NewDiv = document.createElement("div");
    NewDiv.setAttribute("class", className);

    //Append the element in page (in span).
    NewDiv.appendChild(label);

    var foo = document.getElementById(DivName);
    foo.appendChild(NewDiv);

}

function AddDivPropertiesSaveButton(DivName, ControlArray) {
    //Create an input type dynamically.
    var element = document.createElement("input");
    //Assign different attributes to the element.
    element.setAttribute("type", "button");
    element.setAttribute("value", 'שמור');
    element.setAttribute("id", DivName + 'BtnSave');

    element.onclick = function () {
        SaveFormData(ControlArray);
    };

    element.setAttribute("class", "containerControlsInternalButtonControl");

    // 'foobar' is the div id, where new fields are to be added
    var NewDiv = document.createElement("div");
    NewDiv.setAttribute("class", "containerControlsInternalButton");
    NewDiv.setAttribute("Id", DivName+"containerControlsInternalButton");

    //Append the element in page (in span).
    NewDiv.appendChild(element);

    var foo = document.getElementById(DivName);
    foo.appendChild(NewDiv);
}

function HideDivPropertiesSaveButton(DivName, BtnName) {
    document.getElementById(DivName + BtnName).style.display = 'none';
}


function AddDivPropertiesSaveButtonCustom(DivName, Caption, Id, Func, data, data2) {
    //debugger;
    //Create an input type dynamically.
    var element = document.createElement("input");
    //Assign different attributes to the element.
    element.setAttribute("type", "button");
    element.setAttribute("value", Caption);
    element.setAttribute("id", DivName + Id);

    element.onclick = function () {
        Func(data, data2);
    };

    element.setAttribute("class", "containerControlsInternalButtonControl");
    
    var foo = document.getElementById(DivName + "containerControlsInternalButton");
    foo.appendChild(element);
}


function AddDivPropertiesBR(DivName) {

    // 'foobar' is the div id, where new fields are to be added
    var NewDiv = document.createElement("div");
    NewDiv.setAttribute("class", "DivBR");

    var foo = document.getElementById(DivName + "containerControlsInternalButton");
    foo.appendChild(NewDiv);
}

function DivPropertiesChangeTxtCaption(TxtId , Caption)
{
    document.getElementById(TxtId).parentElement.children[0].innerText = Caption;
}


function SaveFormData(ControlArray) {
    var Params='';
    var FuncName;

    if (typeof ExtraParams !== 'undefined')
        if (ExtraParams !== '')
            Params = ExtraParams + ';';

    if (GlobalParams.split(',')[1] !== '-1') {
        FuncName = tableName + "Update";
        Params = Params+ GlobalParams+';'; 
    }
    else {
        FuncName = tableName + "Insert";
    }


    ControlArray.forEach(function (element) {
        if (element !== "") {
            var name = element.split("~")[0];
            // CMB handle
            if (element.split("~").length === 3) {
                if (element.split("~")[2] === "CHK") {
                    if (document.getElementById("CHK" + tableName + name).disabled === false)
                        Params = Params + element.split("~")[0] + ',' + GetCHKData(tableName, name) + ';';
                }
                else {
                    // Save only Enabled elements
                    if (document.getElementById("CMB" + tableName + name).disabled === false)
                        Params = Params + element.split("~")[0] + ',' + GetCMBData(tableName, name) + ';';
                }
            }
            // TXT handle
            else if (element.split("~")[1] !== '') {
                // Save only Enabled elements
                if (document.getElementById("TXT" + tableName + name).disabled === false)
                    Params = Params + element.split("~")[0] + ',' + GetTxtData(tableName, name) + ';';
            }
        }
    });
    //debugger;
    SaveDataAndRegreshPage(FuncName, Params);

}


function SaveDataAndRegreshPage(FuncName, Params) {


    var Name = FuncName;

    $.ajax({
        type: "POST",
        url: serverAddress + "UIS.aspx/Getts",
        data: JSON.stringify({
            'Name': Name, 'Params': Params
        }),
        async: false,

        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            alert('הפריט נוצר בהצלחה');

            GlobalParams = Qstring + "," + JSON.parse(data.d).result_name[0].Column1;
            LoadPageData();

        },
        error: function (x, y, z) {
            alert('GetOrgType.' + x.responseText + "  " + x.status);
        }
    });

}

    function SaveData(FuncName, Params) {


        var Name = FuncName;

        $.ajax({
            type: "POST",
            url: serverAddress + "UIS.aspx/Getts",
            data: JSON.stringify({
                'Name': Name, 'Params': Params
            }),
            async: false,

            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
            },
            error: function (x, y, z) {
                alert('GetOrgType.' + x.responseText + "  " + x.status);
            }
        });

    }

function AddDivContainer(DestinationDivContainer,Name, Caption) {
    //Create an input type dynamically.
    var element = document.createElement("div");

    //Assign different attributes to the element.
    element.setAttribute("id", Name);
    element.setAttribute("class", "containerControls");

    //Create Label Caption
    var label = document.createElement("Label");
    label.innerHTML = Caption;
    label.setAttribute("class", "containerControlsDivLableCaption");
    element.appendChild(label);


    var foo = document.getElementById(DestinationDivContainer);
    foo.appendChild(element);
}

function LoadGlobalParams(Name) {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('Id');
    GlobalParams = Name + ',' + myParam;
}

function GetQS(Name) {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get(Name);
    return myParam;
}

function LoadGlobalGrid(FuncName) {

    var Name = FuncName + 'Select';

    $.ajax({
        type: "POST",
        url: serverAddress + "UIS.aspx/Getts",
        data: JSON.stringify({
            'Name': Name, 'Params': GlobalParams
        }),
        async: false,

        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {

            var Tbl1DataSource = JSON.parse(data.d).result_name;
            window[FuncName + "LoadGrid"](Tbl1DataSource);
        },
        error: function (x, y, z) {
            alert('GetOrgType.' + x.responseText + "  " + x.status);
        }
    });
}
    
function GeneratePropertiesControls(DestinationDivContainer , ControlArray, DivName, DivStarter, Caption) {

    AddDivContainer(DestinationDivContainer,DivName, Caption);
    ControlArray.forEach(function (element) {
        var elementArr = element.split("~");

        if (element === "")
            addDivEmptyProperties(DivName);
        else {

            // If no caption then this is a Lable
            if (elementArr.length === 3) {
                if (elementArr[2] === "CHK") {
                    addDivCHKProperties(DivName, DivStarter + elementArr[0], elementArr[1]);
                }
                else {
                    addDivCMBProperties(DivName, DivStarter + elementArr[0], elementArr[1]);
                }
            }
            else {
                if (element.split("~")[1] !== '') {
                    addDivProperties(DivName, DivStarter + elementArr[0], elementArr[1]);
                }
            }
        }
    });

    var foo = document.getElementById(DivName);
    DivName.innerHTML += "<br>";
    AddDivPropertiesSaveButton(DivName, ControlArray);
}

function PresentMainLable(source, dest, starter)
{
    document.getElementById("TXT" + starter + dest).value = GetTxtData(starter, source);
}


function DisablePropertiesControls(ControlArray, DivName, DivStarter) {

    
    ControlArray.forEach(function (element) {
        if (element !== "") {
            // If no caption then this is a Lable
            if (element.split("~").length === 3) {
                if (element.split("~")[2] === "CHK") {
                    DisableDivCHKProperties(DivName, DivStarter + element.split("~")[0], element.split("~")[1]);
                }
                else {
                    DisableDivCMBProperties(DivName, DivStarter + element.split("~")[0], element.split("~")[1]);
                }
            }
            else {
                if (element.split("~")[1] !== '')
                    DisableDivProperties(DivName, DivStarter + element.split("~")[0], element.split("~")[1]);
            }
        }
    });


}

function GetPropertiesData(FuncName, ControlArray) {

    var Name = FuncName + 'Select';

    $.ajax({
        type: "POST",
        url: serverAddress + "UIS.aspx/Getts",
        data: JSON.stringify({
            'Name': Name, 'Params': GlobalParams
        }),
        async: false,

        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            
            var Tbl1DataSource = JSON.parse(data.d).result_name;
            LoadPropertiesData(FuncName, Tbl1DataSource, ControlArray);
        },
        error: function (x, y, z) {
            alert('GetOrgType.' + x.responseText + "  " + x.status);
        }
    });

}

function LoadPropertiesData(starter, data, ControlArray) {
    ControlArray.forEach(function (element) {
        if (element !== "") {
            if (element.split("~").length === 3)
                if (element.split("~")[2] === "CHK")
                    setCHKSelectedValue(starter + element.split("~")[0], data[0][element.split("~")[0]]);
                else
                    setCMBSelectedValue(starter + element.split("~")[0], data[0][element.split("~")[0]]);
            else
                LoadTxtData(starter, element.split("~")[0], data);
        }
    });
}

function LoadCMBData( name, data) {
    var x = document.getElementById("CMB" + name);

    data.forEach(function (element) {
        var option = document.createElement("option");
        option.text = element.FldDisplayName;
        option.value= element.FldId;
        x.add(option);
    });
}


function setCHKSelectedValue(Name, valueToSet) {
    var selectObj = document.getElementById("CHK" + Name);

    if (valueToSet === true) 
        selectObj.checked = true;
    else
        selectObj.checked = false;

}

function setCMBSelectedValue(Name, valueToSet) {
    //debugger;
    var selectObj = document.getElementById("CMB" +Name);

    for (var i = 0; i < selectObj.options.length; i++) {
        // need == and not === because in CMB the value is string and in DB is int

        if (selectObj.options[i].value == valueToSet) {
            selectObj.options[i].selected = true;
            return;
        }
    }
}


function LoadTxtData(starter, name, data) {
   // debugger;
    document.getElementById("TXT" + starter + name).value = data[0][name];
}

function GetTxtData(starter, name) {
    return document.getElementById("TXT" + starter + name).value;
}

function GetCMBData(starter, name) {
    
    var e = document.getElementById("CMB" + starter + name);
    return e.options[e.selectedIndex].value;
}


function GetCHKData(starter, name) {

    var e = document.getElementById("CHK" + starter + name);
    if (e.checked === true)
        return "1";
    else
        return "0";
    
}

function AddNewRecButton(DivName, OnClickAction) {
    document.getElementById(DivName).innerHTML = ' <div class="dx-datagrid-header-panel"><div class="dx-toolbar dx-widget dx-visibility-change-handler dx-collection" role="toolbar"><div class="dx-toolbar-items-container"><div class="dx-toolbar-before"></div><div class="dx-toolbar-center" style="margin: 0px 48px 0px 0px; float: right;"></div><div class="dx-toolbar-after">   <div onclick="' + OnClickAction + '"  class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide dx-toolbar-text-auto-hide" > <div class="dx-item-content dx-toolbar-item-content"><div class="dx-datagrid-toolbar-button dx-edit-button dx-datagrid-addrow-button dx-button dx-button-normal dx-button-mode-text dx-widget dx-button-has-icon dx-button-has-text" role="button" aria-label="Add a row" title="Add a row" tabindex="0"><div class="dx-button-content"><i class="dx-icon dx-icon-edit-button-addrow"></i><span class="dx-button-text">Add a row</span><div class="dx-inkripple"><div class="dx-inkripple-wave" style="left: -36.5px; top: -13.5px; height: 76px; width: 76px;"></div></div></div></div></div></div > <div class="dx-toolbar-button dx-toolbar-menu-container dx-state-invisible"><div class="dx-dropdownmenu dx-dropdownmenu-button dx-button dx-button-normal dx-button-mode-contained dx-widget dx-button-has-icon" role="menubar" aria-label="overflow" tabindex="0" aria-haspopup="true" aria-expanded="false"><div class="dx-button-content"><i class="dx-icon dx-icon-overflow"></i></div></div></div></div ></div ></div ></div > ';
}



function ActivateDevice(_OrgTypeId, FuncId, version, FldId, ExtraParam) {
    ////////debugger;
    var Name = 'TblZOrgType' + _OrgTypeId + 'F' + FuncId + 'V' + version + 'Activate';
    //debugger;
    var param = 'FldId,' + FldId + ExtraParam;
    $.ajax({
        type: "POST",
        url: serverAddress + "UIS.aspx/Getts",
        data: JSON.stringify({
            'Name': Name, 'Params': param
        }),
        async: false,

        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            //GetTBL1();
        },
        error: function (x, y, z) {
            alert('GetOrgType.' + x.responseText + "  " + x.status);
        }
    });

}

function TypeAddToOrgByName(num) {
    var Name = 'TblZOrgType' + OrgTypeId+'AddToOrgByName';

    $.ajax({
        type: "POST",
        url: serverAddress + "UIS.aspx/Getts",
        data: JSON.stringify({
            'Name': Name, 'Params': 'FldId,' + num
        }),
        async: false,

        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            CmbField = JSON.parse(data.d).result_name;
            LoadPageData();
            alert(CmbField[0].Column1);
        },
        error: function (x, y, z) {
            alert('GetOrgType.' + x.responseText + "  " + x.status);
        }
    });
}

function GetCMBFormList(functionName , FieldName , CmbField) {

    var Name = functionName;

    $.ajax({
        type: "POST",
        url: serverAddress + "UIS.aspx/Getts",
        data: JSON.stringify({
            'Name': Name, 'Params': ''
        }),
        async: false,

        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            CmbField = JSON.parse(data.d).result_name;
            LoadCMBData(FieldName, CmbField);
        },
        error: function (x, y, z) {
            alert('GetOrgType.' + x.responseText + "  " + x.status);
        }
    });

}



function UpdateIsShowCHK(name) {
    var Val = document.getElementById(name).checked;

    if (Val === true)
        Val = 1;
    else
        Val = 0;

    setCookie(name, Val, 3650);
}


function IsShowMac() {
    if (getCookie("ChkIsShowMac") === '1')
        return true;
    else
        return false;
}

function LoadIsShowMacVal() {
    
    if (getCookie("ChkIsShowMac") === '1')
        document.getElementById('ChkIsShowMac').checked = true;
    else
        document.getElementById('ChkIsShowMac').checked = false;
}


function LoadIsAutoUpdatel() {
    if (getCookie("ChkIsAutoUpdate") === '1') {
        document.getElementById('ChkIsAutoUpdate').checked = true;
        UpdatePageInterval = 3000;
        try{
            document.getElementById('Ifrm').contentWindow.GetTBL1();
        }
        catch{
            var x = 0;
        }
    }
    else {
        UpdatePageInterval = 3000000;
        document.getElementById('ChkIsAutoUpdate').checked = false;
    }
}

function ConvertMac(Mac) {
    if (IsShowMac()===true)
        return zeroPad(Mac[0].toString(16), 2) + ":" + zeroPad(Mac[1].toString(16), 2) + ":" + zeroPad(Mac[2].toString(16), 2) + ":" +
            zeroPad(Mac[3].toString(16), 2) + ":" + zeroPad(Mac[4].toString(16), 2) + ":" + zeroPad(Mac[5].toString(16), 2);
    else
        return Mac[0]  + ":" + Mac[1]  + ":" + Mac[2]  + ":" + Mac[3]  + ":" + Mac[4]  + ":" + Mac[5];

}


function UpdateTxtAutoFilter(Name) {
    setCookie(Name, document.getElementById(Name).value, 3650);
}

function LoadTxtAutoFilter(Name) {

    var x = getCookie(Name);
    // If First time
    if (x === null)
    {
        x = '';
        setCookie(Name, '', 3650);
    }

    document.getElementById(Name).value = getCookie(Name);
}

function GetTxtAutoFilter(Name) {
    
   return getCookie(Name);
}


function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}



function ActivateMultipleDevice(_OrgTypeId, ExtraParam) {
    ////////debugger;
    var Name = 'TblZOrgType3ActivateMultiple';
    //debugger;
    var param = 'FldSearch,' + document.getElementsByClassName('dx-texteditor-input')[0].value + ExtraParam;
    $.ajax({
        type: "POST",
        url: serverAddress + "UIS.aspx/Getts",
        data: JSON.stringify({
            'Name': Name, 'Params': param
        }),
        async: false,

        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            alert('הפעולה בוצעה בהצלחה');
        },
        error: function (x, y, z) {
            //alert('GetOrgType.' + x.responseText + "  " + x.status);
        }
    });

}

function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}




function TypeOrgToOrgRemoveVal(OrgTypeFldId) {


    var Name = 'TblZOrgType' + OrgTypeId + 'RemoveToOrg';

    $.ajax({
        type: "POST",
        url: serverAddress + "UIS.aspx/Getts",
        data: JSON.stringify({
            'Name': Name, 'Params': 'FldId,' + OrgTypeFldId
        }),
        async: false,

        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            alert('הפעולה בוצעה בהצלחה');
            LoadPageData();

        },
        error: function (x, y, z) {

            alert('התרחשה שגיאה');
            LoadPageData();
        }
    });

}

function TypeDelete(OrgTypeFldId) {
    var r = confirm("האם אתה בטוח שאתה מועניין למחוק?");
    if (r === true) {


        TypeOrgToOrgRemoveVal(OrgTypeFldId)
        setTimeout(3000);

        var Name = 'TblZOrgType' + OrgTypeId + 'Delete';

        $.ajax({
            type: "POST",
            url: serverAddress + "UIS.aspx/Getts",
            data: JSON.stringify({
                'Name': Name, 'Params': 'FldId,' + OrgTypeFldId
            }),
            async: false,

            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                alert('הפעולה בוצעה בהצלחה');
                parent.ClosePopup();

            },
            error: function (x, y, z) {

                alert('התרחשה שגיאה');
                LoadPageData();
            }
        });
    }
}
