
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {

  	   let resolver =document.getElementsByClassName("closebutton")	
	    resolve(resolver)
    }, 2000);
  });
}
async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log("result should be here",result);
	result[0].addEventListener("click", closing)
  // expected output: "the dom thingy"
}

asyncCall();


let body = document.body
body.style.backgroundColor="white"

function closing(){

	window.top.postMessage('reply', '*')
	body.style.display="none"
}
