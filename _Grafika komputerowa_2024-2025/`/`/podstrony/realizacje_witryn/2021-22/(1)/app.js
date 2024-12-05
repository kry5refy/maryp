const nav = `
<div id="navigation">
  <a href="#/">Home</a>
  <a href="#/download">Jak pobrac?</a>
  <a href="#/info">Skad czerpalem informacje</a>
</div>
`;

const footer = `
<div id="footer">
  Jakub Dlugosz i Kamil Kryszczynski
</div>
`

const routes = {
  "": `
  <div class="sidebar">
    <img src="./vim.png" alt="vim logo">
  </div>

  <h1>Co to jest vim?</h1>

  <p>
    W Vimie chodzi o to, że nie jest to IDE
  </p>

  <p>
    Vim nie jest IDE, to edytor tekstu. To błyskawiczny, pełen funkcji edytor tekstu z większą liczbą tajemnic niż Hogwart i twierdzę, że przy niewielkich zmianach może być równie dobry, jeśli nie lepszy, niż obecne IDE.
  </p>

  <p>
    Pracuję jako programista od około 2,5 roku, a od około 1 roku używam Vima jako „codziennego sterownika”. Około 80% czasu spędzam z Javascriptem, a pozostałe 20% z Pythonem. Przed użyciem Vima korzystałem z VS Code i IDE IntelliJ (w moim przypadku WebStorm i PyCharm). Wszystkie świetne narzędzia, ale wszystkie miały swoje słabości i sprawiały, że zastanawiałem się „czy jest coś lepszego?”.
  </p>

  <p>
    Zacząłem zauważać, że niektórzy z superbohaterów kodujących (znasz ten typ) w mojej firmie używali Vima. Na początku zakładałem, że to coś, czego używali, ponieważ są superbohaterami. Ale wkrótce zacząłem się zastanawiać, czy byli superbohaterami, ponieważ używali Vima. Cóż, prawda jest taka, że ​​Vim sam z siebie nie zrobi z Ciebie 10-krotnego programisty, ale jeśli poświęcisz trochę czasu na poznanie jego sposobów, z pewnością może pomóc (lub nie zaszkodzi).
  </p>
  `,

  "download": `
  <div id="download">
    <h1>Jak pobrac?</h1>

    <p>
      Dla systemu windows:
      <a href="https://www.vim.org/download.php" target="_blank">
        https://www.vim.org/download.php
      </a>
    </p>

    <p>
      Dla systemu Linux:
      <ul>
        <li>Arch: sudo pacman -S vim</li>
        <li>Void: sudo xbps-install vim</li>
        <li>Debian: sudo apt install vim</li>
      </ul>
    </p>
  </div>
  `,

  "info": `
  <div id="info">
    <a href="https://ichi.pro/pl/vim-dla-programistow-czesc-0-dlaczego-vim-164817453568929" target="_blank">
      <h1>Kliknij w to!</h1>
    </a>
  </div>
  `
};

const render = path => {
  const route = path.replace(/^#\//, "");

  document.querySelector("#app")
    .innerHTML = `
      <h1><span style="color:red;">></span> ${route || "home"}<cursor>|</cursor></h1>
      ${nav}
      <div id="content">
        ${routes[route] || `<h1>404 - Page not found</h1>`}
      </div>
      ${footer}
    `;
};

window.onhashchange = evt => render(window.location.hash);
render(window.location.hash);
