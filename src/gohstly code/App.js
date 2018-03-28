import React, { Component } from "react";
import ReactDOM from "react-dom";
import './App.css'; 

// Send a 'GET' request to the specified url and run the callback function when it completes.
function httpGetAsync(url, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  };
  xmlHttp.open('GET', url, true);
  xmlHttp.send(null);
}

/*
  Store users in an array to make things easier. 
  Store a reference to #content-area in a variable for quick access.
  Store the Random User Generator URI we're using in a variable.
*/
var users = null;
var contentArea = null;
var usersEndpoint = 'https://randomuser.me/api?seed=%22ph%27nglui%20mglw%27nafh%20Cthulhu%20R%27lyeh%20wgah%27nagl%20fhtagn%22&results=25&nat=US';
/*
  Application entry point / document has been loaded.
  Get the #content area stored in its respective variable.
  Send a request to the API, process data once the response is received.
*/
document.addEventListener('DOMContentLoaded', function(event) {
  contentArea = document.getElementById('content-area');
  httpGetAsync(usersEndpoint, getUsers);
});

// Store the parsed results to the respective variable and render the users.
function getUsers(data){
  users = JSON.parse(data).results;
  renderUsers();
}

function renderUsers(){
  for (var key in users){
    var htmlToRender = '<div class="col-md-offset-1 col-lg-offset-2">';
    htmlToRender += '<div class="card fluid" id="user_'+users[key].login.username+'">';
    htmlToRender += '<div class="section row">';
    htmlToRender += '<div class="col-sm-2 col-md-1">';
    htmlToRender += '<img src="'+users[key].picture.medium+'" alt="'+users[key].login.username+'" class="user-image" />';
    htmlToRender += '</div>';
    htmlToRender += '<div class="col-sm">';
    htmlToRender += '<h4 class="user-name">'+users[key].name.title+' '+users[key].name.first+' '+users[key].name.last;
    htmlToRender += '<small>'+users[key].login.username+'</small>';
    htmlToRender += '</h4>';
    htmlToRender += '</div>';
    htmlToRender += '</div>';
    htmlToRender += '<div class="section">';
    htmlToRender += '<p class="user-email">';
    htmlToRender += '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>';
    htmlToRender += '&nbsp;&nbsp;'+users[key].email;
    htmlToRender += '</p>';
    htmlToRender += '</div>';
    htmlToRender += '<div class="section">';
    htmlToRender += '<p class="user-birth">';
    htmlToRender += '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>';
    htmlToRender += '&nbsp;&nbsp;'+users[key].dob.split(" ")[0].split("-").reverse().join("/");
    htmlToRender += '</p>';
    htmlToRender += '</div>';
    htmlToRender += '<div class="section">';
    htmlToRender += '<p class="user-location">';
    htmlToRender += '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>';
    htmlToRender += '&nbsp;&nbsp;'+users[key].location.city+', '+users[key].location.state;
    htmlToRender += '</p>';
    htmlToRender += '</div>';
    htmlToRender += '</div>';
    htmlToRender += '</div>';
    contentArea.innerHTML += htmlToRender;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="sticky">
          <label htmlFor="drawer-checkbox" className="button drawer-toggle hidden-desktop"></label>
          <span href="#" className="logo">Autumn Blog</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
          <input type="search" className="searchBox"/>
        </header>
        <div className="row">
          <input type="checkbox" id="drawer-checkbox" />
          <div className="drawer">
            <label htmlFor="drawer-checkbox" className="button drawer-toggle hide"></label>
            <div className="post-link-container">
            </div>
          </div>
          <div className="col-sm-12 col-md content">
          </div>
        </div>
      </div>
    );
  }
}

export default App;