<b>Практическо задание към Модул 7</b><br><br>
<script>
// Част едно
// contants
const acceptableURL = "www.example.com/create-cv";
const notAcceptableUserNameMessage = "Дължината на потреб. име не е между ";
const debugMode = true;

// variables
var userNameString = "Това е въведеното потреб. име";//"потреб-име";//
var userNameMinLen = 50;
var userNameMaxLen = 18;
var notAcceptableUserNameMessageComplete = "Грешка: Дължината на потребителско име '<i>" +userNameString+"</i>' не е между " + userNameMinLen;

notAcceptableUserNameMessageComplete = notAcceptableUserNameMessageComplete + " и " + userNameMaxLen;
notAcceptableUserNameMessageComplete = notAcceptableUserNameMessageComplete + " символа";


function checkUserName(paramUserName, minLen, maxLen, userNameErrorMessage, userNameOkUrl) {
    if (minLen>=maxLen) {
        alert("minLen("+minLen+") трябва да е по-малко или равно на maxLen("+maxLen+")!");
        return 0;
    }

    if (debugMode) {
        alert("userNameString.lenght=" +paramUserName.length); // show popup with a random number
    }
    
    if(paramUserName.length < minLen || paramUserName.length >maxLen) {
        // write error message
        document.write("<b>" + userNameErrorMessage + "</b><br>");
    } else {
        if (debugMode) {
            // write debug text
            document.write("<b>" + userNameOkUrl + "</b><br>");
        } else {
            // Redirecting the user to page userNameOkUrl
            windоw.lоcation.replace(userNameOkUrl);
        }
    }
}
checkUserName(userNameString, userNameMinLen, userNameMaxLen, notAcceptableUserNameMessageComplete, acceptableURL)
</script>
