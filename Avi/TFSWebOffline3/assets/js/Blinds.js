function UIGLoadBlindFilter() {
    GetGroups();


}


// Search functionss

function GetGroups() {

    

    $.ajax({
        type: "POST",
        url: serverAddress + "UIS.aspx/Getts",
        data: JSON.stringify({ 'Name': 'GetGroups', 'Params': ''}),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
         //   debugger;
            var obj4 = JSON.parse(data.d);
            LoadFilterGroups(obj4);
        },
        error: function (x, y, z) {
            //debugger;
            //alert(x.responseText + "  " + x.status);
            console.log(x.responseText + "  " + x.status);
      //      debugger;

        }
    });
}

function LoadFilterGroups(d) {
    //debugger;
    var DIV = document.getElementById('DivBlindFilterAll');
    var str = '';
    for (var i = 0; i < d.result_name.length; i++) {
        str = str + '<div class="BlindFilterBigBox" >  <div class="BlindFilterTitle" > ' + d.result_name[i].FldDisplayName +' </div>  <div class="BlindFilterBoxes">  ';
        for (var j = 0; j < d.result_name1.length; j++) {
            if (d.result_name1[j].FldGroupTypeId == d.result_name[i].FldId)
            str = str + ' <div class="BlindFilterBox" onclick="BlindFilterClick(this , ' + d.result_name1[j].FldId+');">' + d.result_name1[j].FldDisplayName+'</div>';
        }
        str = str + '</div >  </div >  ';

    }
    //str = '        < div class="BlindFilterTitle" > קומה</div >            <div class="BlindFilterBoxes">                <div class="BlindFilterBox" onclick="BlindFilterClick(this , 10);">10</div>            </div>';
    DIV.innerHTML = str;
}





UIGLoadBlindFilter();