console.log("my first extension ever? ")
let button = document.createElement("button")

button.textContent="offline chat"
button.classList.add("offlino")

button.style.all="unset"
button.style.color="white"
button.style.backgroundColor="black"
button.style.width="150px"
button.style.height="60px"
button.style.fontSize="xx-large"
let body = document.body
let pathing = document.evaluate('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-browse/div[3]/ytd-c4-tabbed-header-renderer/tp-yt-app-header-layout/div/tp-yt-app-header/div[2]/div[1]', document, null ,XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
pathing.append(button)
console.log(body)

console.log(pathing)

