function createForm(){
  form = document.createElement("input");
  form.type = "input";
  form.placeholder = "form input";
  form.className = "form-class";

  holder = document.getElementById("test");
  holder.appendChild(form);
}

function createButton(){
  button = document.createElement("input");
  button.type = "button";
  button.value = "another button";

  holder = document.getElementById("test");
  holder.appendChild(button);
}

function visitPage(){
    window.location='http://www.google.com';
  }

