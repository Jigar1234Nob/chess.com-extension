(() => {
  const api = globalThis.browser ?? globalThis.chrome;
  document.getElementById("openChess").addEventListener("click", () => {
    api.tabs.create({ url: "https://www.chess.com/" });
    window.close();
  });
  document.getElementById("openDashboard").addEventListener("click", () => {
    api.tabs.create({ url: api.runtime.getURL("newtab.html") });
    window.close();
  });
})();