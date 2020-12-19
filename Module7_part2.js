<b>Практическо задание към Модул 7</b><br><br>
<script>
// Част две
const debugMode = true;

function App(name, logo, welcomemessage, logoutmessage, updateURL) {
  this.name = name;
  this.logo = logo;
  this.welcomemessage = welcomemessage;
  this.logoutmessage = logoutmessage;
  this.updateURL = updateURL;
  
  this.open = function () {
    document.write("<b>" + this.welcomemessage + "</b><br>");
  };
  
  this.close = function () {
    document.write("<b>" + this.logoutmessage + "</b><br>");
  };
  
  this.update = function () {
    if (debugMode) {
        // write debug text
        document.write("<b>" + this.updateURL + "</b><br>");
    } else {
        // Redirecting the user to page userNameOkUrl
        windоw.lоcation.replace(this.updateURL);
    }
  };
}

var facebookApp = new App("Facebook", "logo.gif", "Welcome Dude", "Goodbye", "https://facebook.com/update/");
facebookApp.open();
facebookApp.close();
facebookApp.update();

var Instagram = Object.create(facebookApp);
Instagram.updateURL = "https://instagram.com/update/";
Instagram.open();
Instagram.close();
Instagram.update();

</script>
