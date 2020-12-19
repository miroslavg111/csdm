<b>Практическо задание към Модул 7</b><br><br>
<script>
// Част четири
const debugMode = true;

myJsonObj = {
  "organization":"Samsung",
  "data": {
    "founded":1938,
    "founder":"Lee Byung-chul",
    "revenue": {
        2016:"US$201.6 Billion",
        2017:"US$192.1 Billion",
        2018:"US$208.5 Billion"
    },
    "employees":309630
  },
  "headquarters":"Seocho District, Seoul, South Korea",
  "PMApartner":false
 }

if (debugMode) {
    document.write("<pre>");
    document.write(JSON.stringify(myJsonObj, null, 4));
    document.write("</pre>");
}
</script>