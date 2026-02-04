import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Toss Coin</h1>
    <div>
      <button id="toss-btn">Toss Coin</button>
    </div>
    <div>
      <p>Result: <span id="result">—</span></p>
    </div>
    <!-- background color black, text white -->
    <style>
      body {
        background-color: black;
        color: white;
      }
    </style>
  </div>
`

const resultEl = document.querySelector('#result')
const tossBtn = document.querySelector('#toss-btn')
if (tossBtn && resultEl) {
  tossBtn.addEventListener('click', () => {
    const side = Math.random() < 0.5 ? 'Heads' : 'Tails'
    resultEl.textContent = side
  })
}
