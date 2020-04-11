var sections=document.getElementById('sections');
function sectiontoggle(section){
  section.classList.toggle('hidden');
}
function exportcss(){
  var exportedcss='/*Automatically generated*/'
  for (var sect=0;sect<sections.children.length;sect++){
    exportedcss+='\n/*Section: '+sections.children[sect].querySelector('.secttitle').value+'*/\n';
    exportedcss+=sections.children[sect].querySelector('.sectcontent').value;
  }
  document.getElementById('csstransfer').value=exportedcss;
}
function loadcss(){
  loadedcss=document.getElementById('csstransfer').value.split('\n/*Section: ');
  loadedcss.shift()
  sections.innerHTML='';
  console.log(loadedcss)
  for (var sect=0;sect<loadedcss.length;sect++){
    templatetemp=template.cloneNode(true);
    var splitat="*/\n"
    templatetemp.querySelector('.secttitle').value=loadedcss[sect].slice(0,loadedcss[sect].indexOf(splitat))
    templatetemp.querySelector('.sectcontent').value=loadedcss[sect].slice(loadedcss[sect].indexOf(splitat)+splitat.length)
    sections.appendChild(templatetemp);
  }
}
function addsection(){
  sections.appendChild(template.cloneNode(true));
}
var template=document.getElementById('sectiontemplate').children[0];
