var yourLink = document.getElementById("your-link")
var iframe = document.getElementById("iframe")

var btn = document.querySelector("[type='button']")
var template = ""
var tem1 = "<iframe height='569' src='https://embed."
var tem2 = "' width='640px' scrolling='no' allowfullscreen='true' sandbox='allow-scripts allow-same-origin allow-popups' allow='clipboard-read; clipboard-write' style='border: none; max-width: 100%; border-radius: 8px; display: block; margin: 0px auto;'></iframe>"

btn.addEventListener("click", genIframe)

function genIframe() {
  input = yourLink.value // https://www.reddit.com/r/memes/comments/1ar9nlu/the_sad_reality_we_live_in/


  parts = input.split("https://www.") //https://www.  reddit.com/r/memes/comments/1ar9nlu/the_sad_reality_we_live_in/
  cutLink = parts[1]
  template = tem1 + cutLink + tem2

  iframe.value = template

}
