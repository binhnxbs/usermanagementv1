var IDDBSYS = "1hAKrx46NY5lYHpSiAlj2mPLVjxp9D2QKGRnS3JJb2WM";

function doGet(e) {
   if(e.parameter.v == "users")
  {
    return HtmlService.createTemplateFromFile('users').evaluate();
  }
  
   if(e.parameter.v == "roles")
  {
    return HtmlService.createTemplateFromFile('roles').evaluate();
  }
  
   if(e.parameter.v == "rolesadd" && e.parameter.reportto)
  {
    var html = HtmlService.createTemplateFromFile('rolesAdd');
    
    html.dataid = e.parameter.reportto;
    
    return html.evaluate();
  }
  
   if(e.parameter.v == "usersadd")
  {
    return HtmlService.createTemplateFromFile('usersAdd').evaluate();
  }
  
   if(e.parameter.v == "groups")
  {
    return HtmlService.createTemplateFromFile('groups').evaluate();
  }
  
  if(e.parameter.v == "groupsadd")
  {
    return HtmlService.createTemplateFromFile('groupsAdd').evaluate();
  }
  
   if(e.parameter.v == "profiles")
  {
    return HtmlService.createTemplateFromFile('profiles').evaluate();
  }
  
  if(e.parameter.v == "profilesadd")
  {
    return HtmlService.createTemplateFromFile('profilesAdd').evaluate();
  }
  
  if(e.parameter.v == "sharingrules")
  {
    return HtmlService.createTemplateFromFile('sharingrules').evaluate();
  }
  
  else
  {
    return HtmlService.createTemplateFromFile('users').evaluate();
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}