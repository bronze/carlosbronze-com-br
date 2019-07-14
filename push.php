<?php
function ccbysa($imagehtml, $sourceuri, $owneruri, $ownername) {
return <<<HTML
{$imagehtml}
<br/>
<small><a href="https://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA</a>
<a href="{$sourceuri}">image</a> by <a href="{$owneruri}">{$ownername}</a>
<br/>
HTML;
}
function ccbynd($imagehtml, $sourceuri, $owneruri, $ownername) {
return <<<HTML
{$imagehtml}
<br/>
<small><a href="https://creativecommons.org/licenses/by-nd/2.0/">CC BY-ND</a>
<a href="{$sourceuri}">image</a> by <a href="{$owneruri}">{$ownername}</a>
<br/>
HTML;
}
function pushImage($uri) {
header("Link: <{$uri}>; rel=preload; as=image", false);
return <<<HTML
<img src="{$uri}">
HTML;
}
$image1 = pushImage("/images/drucken.jpg");
$image2 = pushImage("/images/empire.jpg");
?>

<html>
<head><title>PHP Server Push</title></head>
<body>

<h1>PHP Server Push</h1>

<?php
echo ccbysa($image1, "https://bit.ly/1Wu5bYx",
"https://www.flickr.com/photos/hiperactivo/", "Javier Candeira");
echo ccbynd($image2, "https://bit.ly/24PHue3",
"https://www.flickr.com/photos/bobsfever/", "Robert McGoldrick");
?>

</body>
</html>
