import x from './x.js'
import png from './assets/1.png'//png得到的路径是由loader决定的

//console.log(x)
//console.log('hello world!啦啦啦')
const div=document.getElementById('app')
div.innerHTML=`
<img src="${png}">
`