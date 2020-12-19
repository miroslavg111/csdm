<b>Практическо задание към Модул 7</b><br><br>
<script>
// Част три
const debugMode = true;
/*
var browserWidth = 1920;
var browserHeight = 1080;
var browserSizesUnit = "pixels";
var displayColorDepth = 12;
var displayColorUnit = "bit";
var displayTrueColor = true;
var monitorBrand = "DELL";
var monitorFullModelName = "Dell UltraSharp 27 4K PremierColor";
var minimumResolutionPageRequirements = [1200, 480];
var maximum_resolution_page_requirements_width = 3840;
var maximum_resolution_page_requirements_height = 2160;
var minimumPagedisplayColorDepth = 8;
*/
var webAppParams = new Object;
webAppParams.browser = new Object;
webAppParams.display = new Object;
webAppParams.monitor = new Object;
webAppParams.resolution = new Object;
webAppParams.resolution.pageRequirements = new Object;

webAppParams.browser.width = 1920;
webAppParams.browser.height = 1080;
webAppParams.browser.sizesUnit = "pixels";

webAppParams.display.colorDepth = 12;
webAppParams.display.colorUnit = "bit";
webAppParams.display.trueColor = true;

webAppParams.monitor.brand = "DELL";
webAppParams.monitor.fullModelName = "Dell UltraSharp 27 4K PremierColor";

webAppParams.resolution.pageRequirements.minimumWidth = 1200;
webAppParams.resolution.pageRequirements.minimumHeight = 480;
webAppParams.resolution.pageRequirements.maximumWidth = 3840;
webAppParams.resolution.pageRequirements.maximumHeight = 2160;

webAppParams.resolution.minimumDisplayColorDepth = 8;

if (debugMode) {
	alert(JSON.stringify(webAppParams, null, 4));
}
</script>

