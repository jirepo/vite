import './style.css'
// @ts-ignore
import MyService from './api/common/MyService.ts'

const app = document.querySelector<HTMLDivElement>('#app')!

let myService = new MyService();
console.log(myService.getString()); 

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
