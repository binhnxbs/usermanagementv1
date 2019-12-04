function createNewProfile(data) {

    var e = ModunUserMan.createNewProfile(data);
    return e;

}

function createNewEntity(data) {

try {
  
  var ssnew = SpreadsheetApp.create(""+data[0][1]+"");
  ssnew.insertSheet(""+data[0][1]+"",0);
  
  var ssjcr = SpreadsheetApp.openById(ssnew.getId());
  
  ssjcr.getSheetByName(""+data[0][1]+"").appendRow(data[1]);
  
  DriveApp.getFolderById(IDFOLDERDBSYS).addFile(DriveApp.getFileById(ssnew.getId()));
  
  var sdlt = ssjcr.getSheetByName('Sheet1');
  ssjcr.deleteSheet(sdlt);
  
  var ss = SpreadsheetApp.openById(IDDBSYS);
  var ws = ss.getSheetByName("Entities");
  var date = Utilities.formatDate(new Date(), "GMT+07:00", "dd-MM-yyyy");
  var dateTime = Utilities.formatDate(new Date(), "GMT+07:00", "dd-MM-yyyy HH:mm:ss");
  var id = generateID("ENT", ws.getLastRow(), 4);
  
  data[0].unshift(dateTime);
  data[0].unshift(data[0][1]);
  data[0].unshift(date);
  data[0].unshift("Active");
  data[0].unshift(id);
  data[0].push(ssnew.getId());
  
  Logger.log(data);
  
  ws.getRange(ws.getLastRow() + 1, 1, 1, ws.getLastColumn()).setValues([data[0]]);
  
  return true;
  
} catch (e) {
  Logger.log('triggerMail() yielded an error: ' + e);
  return e;
}

}