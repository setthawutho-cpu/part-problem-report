const page = location.pathname.split("/").pop();

document.body.insertAdjacentHTML(
  "beforeend",
  `
  <div class="bottom-nav">

      <button class="${page==='home.html' ? 'active' : ''}"
          onclick="location.href='home.html'">
          🏠
          <span>Home</span>
      </button>

      <button class="${page==='dashboard.html' ? 'active' : ''}"
          onclick="location.href='dashboard.html'">
          📊
          <span>Dashboard</span>
      </button>

      <button class="${page==='menu.html' ? 'active' : ''}"
          onclick="location.href='menu.html'">
          ☰
          <span>Menu</span>
      </button>

      <button class="${page==='calculator.html' ? 'active' : ''}"
          onclick="location.href='calculator.html'">
          🧮
          <span>Calc</span>
      </button>

      <button class="${page==='settings.html' ? 'active' : ''}"
          onclick="location.href='settings.html'">
          ⚙️
          <span>Setting</span>
      </button>

  </div>
`
);
