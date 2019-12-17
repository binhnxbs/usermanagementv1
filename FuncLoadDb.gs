function loadValueOfCreateNewProfile() {
  
  var data = ModunUserMan.loadValueOfCreateNewProfile();
  return data;
  
}

function loadValueOfProfile() {
  
  var data = ModunUserMan.loadValueOfProfile();
  
  return data;
  
}

function loadValueOfEntity()
{
  var data = ModuleEntityMana.loadValueOfEntity();
  
  return data;
}

function loadEntitySidebar()
{
  var data = ModuleEntityMana.loadEntitySidebar();
  
  return data;
}


function loadFieldOfEntity(indexrow)
{
  var data = ModuleEntityMana.loadFieldOfEntity(indexrow);
  
  Logger.log(data);
  
  return data;
}

function loadValueEditProfile(id)
{
  var data = ModunUserMan.loadValueEditProfile(id);
  return data;
}

function loadTypeOfField()
{
  var data = ModuleEntityMana.loadTypeOfField();
  return data;
}