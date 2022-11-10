console.log("my first extension ever? ")

let button = document.createElement("button")
button.textContent="offline chat"
button.classList.add("offlino")

let body = document.body
//the styling 
button.style.all="unset"
button.style.color="white"
button.style.backgroundImage="url('chrome-extension://fmofipljeljpddeppfnmgbmhnckcehbpk/Untitled.png')"
button.style.width="130px"
button.style.height="60px"
button.style.fontSize="x-large"
button.style.cssFloat="right"
button.style.borderRadius="50px"
let styling = button.style
styling.cursor = "pointer"





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

let files = [
	"index.html",
	"Untitled.png"
]
let file = 'iframe/' + files[0]
let url = chrome.runtime.getURL(file)
console.log("SHOW ME THE GOD DAMN EARL",url)
button.addEventListener('click', async (event) =>{

	styling.display='none';
	console.log("offline have been clicked")
	let iframo = document.createElement("iframe")
	iframo.classList.add("offlineframe")
	iframo.src = url
	iframo.style.display="block"
	iframo.style.width="640px"
	iframo.style.height="480px"
	let sFrame = iframo.style
	sFrame.cssFloat="right"
	let offlineframe = document.getElementsByClassName("offlineframe")
	console.log(offlineframe.contentWindow)
	const result = await resolveAfter2Seconds()
	result[1].append(iframo)
})

window.onmessage = function(event){
	if (event.data == 'reply'){
		console.log('reply received!');
		styling.display="block";	
	}
}
