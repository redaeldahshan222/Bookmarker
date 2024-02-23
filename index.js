var bookmarkName = document.getElementById("bookmarkName");
var bookmarkURL = document.getElementById("bookmarkURL");

var sites = [];

function add(){

    var sitesgo ={ 
    name: bookmarkName.value ,
    url: bookmarkURL.value,
}
sites.push(sitesgo)
display();
clear()

}
function display() {
  var list = "";
  for (i = 0; i < sites.length; i++) {
    list += `<tr>
        <td> ${i + 1} </td>
                <td>${sites[i].name}</td>
        <td><a href="${sites[i].url}"> <button class="btn btn-success"><i class="fa-solid fa-eye pe-2"></i> Visit</button></a></td>
                        <td><button onclick="deletelist(${i})" class="btn btn-danger "><i class="fa-solid fa-trash pe-2"></i>Delete</button></td>
        </tr>`;
  }
  document.getElementById("tableContent").innerHTML = list;
}
function clear(){
    bookmarkName.value = ""
    bookmarkURL.value = ""
}
function deletelist(index){
    sites.splice(index , 1)
    display()
}
 