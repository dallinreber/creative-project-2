

document.getElementById("photoSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  let value = document.getElementById("photoInput").value;

  if (value === "")
    return;
  getPhoto();
  })

//T SWIZZLE QUOTES
async function getQuotes() {
  // Default options are marked with *

  //API 1
  const response = await fetch('https://api.taylor.rest/')
  const response2 = await response.json()
  const quote = response2.quote
  const element = document.getElementById("inspirationalQuotes")
  element.innerHTML = quote
  console.log(response2)

  // return response.json()
}
                        // parses JSON response into native JavaScript objects
getQuotes()

//PICTURES
async function getPhoto() {
  let value = document.getElementById("photoInput").value;
  // Default options are marked with *
  if (typeof value !== 'undefined'){
  console.log("if statement running")
  //API 2 - ENDPOINT 1
  const response = await fetch(`https://picsum.photos/id/${value}/200/300`)
   const element = document.getElementById("photo")
   element.innerHTML = `<img src="${response.url}">`
  }
  else {
    console.log('else statement is running')
    //API 2 - ENDPOINT 2
    const response = await fetch('https://picsum.photos/200/300')
    const element = document.getElementById("photo")
    element.innerHTML = `<img src="${response.url}">`
  }
}

  //return response.json()                        // parses JSON response into native JavaScript objects
//}

getPhoto()
