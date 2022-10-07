const nav = document.querySelector('.navbar')

fetch('https://havishvivek.github.io/havish_vivek/navigation.html')
.then(res=>res.text())
.then(data=>(
  nav.innerHTML = data
))