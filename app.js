const app = document.querySelector('.app');
const projects = [
  {
    "title": "Ocean Sounds",
    "url": "1DAY-Ocean"
  },
  {
    "title": "CSS + SVG + JS Clock",
    "url": "2DAY-Clock"
  },
  {
    "title": "CSS Variables and JS",
    "url": "3DAY-CSS-Variables"
  },
  {
    "title": "Flex Panels Gallery",
    "url": "5DAY-CSS-gallery"
  },
  {
    "title": "Ajax Type Ahead",
    "url": "6DAY-ajax"
  },
  {
    "title": "HTML5 Canvas",
    "url": "8DAY-HTML-Canvas"
  },
  {
    "title": "Multiple Selection",
    "url": "10DAY-Checkboxes"
  },
  {
    "title": "Custom HTML5 Video Player",
    "url": "11DAY-Custom-Video-Player"
  },
  {
    "title": "Key Sequence Detection",
    "url": "12DAY-Key-Sequence"
  },
  {
    "title": "Slide In on Scroll",
    "url": "13DAY-Slide-on-Scroll"
  },
  {
    "title": "LocalStorage",
    "url": "15DAY-Local-Storage"
  },
  {
    "title": "CSS Text Shadow",
    "url": "16DAY-CSS-Shadow"
  },
  {
    "title": "Follow Along Links",
    "url": "22DAY-Link-Highlighter"
  },
  {
    "title": "Speech Synthesis",
    "url": "23DAY-Speech-Synthesis"
  },
  {
    "title": "Sticky Nav",
    "url": "24DAY-Sticky-Nav"
  },
  {
    "title": "Stripe Follow Along Dropdown",
    "url": "26DAY-Drop-Down-Menu"
  },
  {
    "title": "Click and Drag to Scroll",
    "url": "27DAY-Drag-to-Scroll"
  },
  {
    "title": "Video Speed Controller",
    "url": "28DAY-Video-Speed"
  },
  {
    "title": "Countdown Clock",
    "url": "29DAY-Countdown"
  },
  {
    "title": "Catch the Bunny",
    "url": "30DAY-Game"
  }
];

function addContent() {
  return projects.map(project => {
   const render =
   `<div class='card' style="background-image: url(images/${project.url}.jpg)">
     <a target='_blank' href='${project.url}/index.html' class="title">${project.title}</a>
   </div>`;

   app.insertAdjacentHTML("beforeend", render);
   });
}

window.onload = addContent;
