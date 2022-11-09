console.log("my first extension ever? ")

let button = document.createElement("button")
button.textContent="offline chat"
button.classList.add("offlino")

let body = document.body
//the styling 
button.style.all="unset"
button.style.color="white"
button.style.backgroundColor="black"
button.style.width="130px"
button.style.height="60px"
button.style.fontSize="x-large"
button.style.cssFloat="right"
button.style.borderRadius="50px"
let styling = button.style
styling.cursor = "pointer"

console.log("first is srce:", "second is body:" ,body)
//the testing
let pathing = document.evaluate('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-browse/div[3]/ytd-c4-tabbed-header-renderer/tp-yt-app-header-layout/div/tp-yt-app-header/div[2]/div[1]', document, null ,XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
console.log("this should be pathing:", pathing)

window.addEventListener('load',(event) =>{
	let srce = document.getElementsByClassName('banner-visible-area style-scope ytd-c4-tabbed-header-renderer')
	let id = document.getElementById('banner-editor')

	

	console.log("if it works we win ? ", id)


})



function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {

  	   let resolver = document.getElementsByClassName('banner-visible-area style-scope ytd-c4-tabbed-header-renderer')
	resolve(resolver)
    }, 2000);
  });
}
async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log("result should be here",result);
	result[1].append(button)
  // expected output: "the dom thingy"
}

asyncCall();


button.addEventListener('click', async (event) =>{

	styling.display='none';
	console.log("offline have been clicked")
	let iframo = document.createElement("iframe")
	iframo.setAttribute("src", "https://www.google.com/custom?q=&btnG=Search")
	iframo.style.width="640px"
	iframo.style.height="480px"
	let sFrame = iframo.style
	sFrame.cssFloat="right"
	const result = await resolveAfter2Seconds()
	result[1].append(iframo)
})
