function createNewProfile(data) {

    var e = ModunUserMan.createNewProfile(data);
    return e;

}

function createNewEntity(data) {

try {
  
  var modifiedby = data[0];
  
  var ssnew = SpreadsheetApp.create(""+data[1]+"");
  ssnew.insertSheet(""+data[1]+"",0);
  
  var ssjcr = SpreadsheetApp.openById(ssnew.getId());
  
  DriveApp.getFolderById(IDFOLDERDBSYS).addFile(DriveApp.getFileById(ssnew.getId()));
  
  var sdlt = ssjcr.getSheetByName('Sheet1');
  ssjcr.deleteSheet(sdlt);
  
  var ss = SpreadsheetApp.openById(IDDBSYS);
  var ws = ss.getSheetByName("Entities");
  var date = Utilities.formatDate(new Date(), "GMT+07:00", "dd-MM-yyyy");
  var dateTime = Utilities.formatDate(new Date(), "GMT+07:00", "dd-MM-yyyy HH:mm:ss");
  var id = generateID("ENT", ws.getLastRow(), 5);
  
  data.unshift(dateTime);
  data.unshift(modifiedby);
  data.unshift(date);
  data.unshift("Active");
  data.unshift(id);
  data.push(ssnew.getId());
  
  Logger.log(data);
  
  ws.getRange(ws.getLastRow() + 1, 1, 1, ws.getLastColumn()).setValues([data]);
  
  return true;
  
} catch (e) {
  Logger.log('triggerMail() yielded an error: ' + e);
  return e;
}

}