const page = location.pathname.split("/").pop();

document.body.insertAdjacentHTML(
"beforeend",
`
<div class="bottom-nav">

    <button class="${page==='home.html' ? 'active' : ''}"
        onclick="location.href='home.html'">
        <i class="material-icons-round">home</i>
        <span>Home</span>
    </button>

    <button class="${page==='dashboard.html' ? 'active' : ''}"
        onclick="location.href='dashboard.html'">
        <i class="material-icons-round">dashboard</i>
        <span>Dashboard</span>
    </button>

    <button class="${page==='menu.html' ? 'active' : ''}"
        onclick="location.href='menu.html'">
        <i class="material-icons-round">apps</i>
        <span>Menu</span>
    </button>

    <button class="${page==='calculator.html' ? 'active' : ''}"
        onclick="location.href='calculator.html'">
        <i class="material-icons-round">calculate</i>
        <span>Calc</span>
    </button>

    <button class="${page==='settings.html' ? 'active' : ''}"
        onclick="location.href='settings.html'">
        <i class="material-icons-round">settings</i>
        <span>Setting</span>
    </button>

</div>
`
);
