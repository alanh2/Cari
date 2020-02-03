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

function DeleteRec(Id, TableName, Param) {

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


function AddDivPropertiesSaveButtonCustom(DivName, Caption, Id , Func,data) {
    //Create an input type dynamically.
    var element = document.createElement("input");
    //Assign different attributes to the element.
    element.setAttribute("type", "button");
    element.setAttribute("value", Caption);
    element.setAttribute("id", DivName + Id);

    element.onclick = function () {
        Func(data);
    };

    element.setAttribute("class", "containerControlsInternalButtonControl");
    
    var foo = document.getElementById(DivName + "containerControlsInternalButton");
    foo.appendChild(element);
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
    SaveData(FuncName, Params);

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
                alert('הפריט נוצר בהצלחה');
                debugger;

                GlobalParams = Qstring + "," + JSON.parse(data.d).result_name[0].Column1;
                LoadPageData();

            },
            error: function (x, y, z) {
                alert('GetOrgType.' + x.responseText + "  " + x.status);
            }
        });

    }

function AddDivContainer(Name, Caption) {
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


    var foo = document.getElementById("DivProperties");
    foo.appendChild(element);
}

function LoadGlobalParams(Name) {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('Id');
    GlobalParams = Name + ',' + myParam;
}

function GetQS(Name) {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('Id');
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
    
function GeneratePropertiesControls(ControlArray, DivName, DivStarter, Caption) {

    AddDivContainer(DivName, Caption);
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
            if (element.split("~").length === 3)
                DisableDivCMBProperties(DivName, DivStarter + element.split("~")[0], element.split("~")[1]);
            else
                if (element.split("~")[1] !== '')
                    DisableDivProperties(DivName, DivStarter + element.split("~")[0], element.split("~")[1]);
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
    var selectObj = document.getElementById("CMB" +Name);

    for (var i = 0; i < selectObj.options.length; i++) {
        if (selectObj.options[i].value === valueToSet) {
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
