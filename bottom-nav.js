const page = location.pathname.split("/").pop();

document.write(`
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
        📋
        <span>Meun</span>
    </button>

    <button class="${page==='calculator.html' ? 'active' : ''}"
        onclick="location.href='calculator.html'">
        🧮
        <span>CALC</span>
    </button>

    <button class="${page==='settings.html' ? 'active' : ''}"
        onclick="location.href='settings.html'">
        ⚙️
        <span>Setting</span>
    </button>

</div>
`);
