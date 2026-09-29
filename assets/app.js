/* Rendu du document imprimable — Parcours littéraire CM2B.
   Aucune sélection : la page entière est le document à imprimer. */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function authorOf(book) { return AUTEURS[book.auteur] || { nom: "", bio: "" }; }

  function niveauLong(book) {
    return NIVEAUX[book.niveau].court + " · " + NIVEAUX[book.niveau].long;
  }

  /* Pictogrammes de genre (SVG inline, aucune image externe). */
  var ICONES = {
    "Aventure": '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2.2 5.3-5.3 2.2 2.2-5.3z"/>',
    "Humour": '<circle cx="12" cy="12" r="9"/><path d="M8.2 14.2c1 1.4 2.3 2.1 3.8 2.1s2.8-.7 3.8-2.1"/><path d="M9 9.3h.01M15 9.3h.01"/>',
    "Fantastique / imaginaire": '<path d="M12 3l2.3 6.2L20.5 12l-6.2 2.8L12 21l-2.3-6.2L3.5 12l6.2-2.8z"/>',
    "École & famille": '<path d="M4 11.5L12 5l8 6.5"/><path d="M6.2 10.3V19h11.6v-8.7"/><path d="M10 19v-4h4v4"/>',
    "Contes & fables": '<path d="M4 18h16"/><path d="M5 18l1-9 4 3.5L12 6l2 6.5 4-3.5 1 9z"/>',
    "Récits & nouvelles": '<path d="M12 6.2C10 4.8 8 4.2 5.5 4.2V17c2.5 0 4.5.6 6.5 2 2-1.4 4-2 6.5-2V4.2C16 4.2 14 4.8 12 6.2z"/><path d="M12 6.2V19"/>',
    "Enquête": '<circle cx="11" cy="11" r="6"/><path d="M15.4 15.4L20 20"/>',
    "Nature": '<path d="M12 3l4.5 6.5H13.8L17.5 15H6.5l3.7-5.5H8.5z"/><path d="M12 15v6"/>',
    "Solidarité / amitié": '<path d="M12 20s-7-4.2-7-9.4A4 4 0 0 1 12 7a4 4 0 0 1 7 3.6C19 15.8 12 20 12 20z"/>'
  };

  function icone(tag) {
    var p = ICONES[tag];
    if (!p) return "";
    return '<svg class="gico" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + "</svg>";
  }

  function iconesTags(tags) {
    if (!tags || !tags.length) return "";
    return '<span class="gicos" title="' + esc(tags.join(", ")) + '">' +
      tags.map(icone).join("") + "</span>";
  }

  function renderLegend() {
    document.getElementById("legend").innerHTML = [1, 2, 3].map(function (n) {
      return '<li><span class="dot n' + n + '"></span>' +
        '<span class="lvl-name">Niveau ' + n + " — " + esc(NIVEAUX[n].long) + "</span></li>";
    }).join("");
  }

  function fiche(book) {
    var a = authorOf(book);
    var noteBadge = book.note ? '<span class="note-badge">' + esc(book.note) + "</span>" : "";
    return '' +
      '<div class="fiche">' +
        '<span class="check" aria-hidden="true"></span>' +
        '<div class="fiche-body">' +
          "<h3>" + esc(book.titre) + "</h3>" +
          '<p class="meta">' +
            '<span class="author">' + esc(a.nom) + "</span>" +
            (book.annee ? '<span class="year">Œuvre : ' + esc(book.annee) + "</span>" : "") +
            iconesTags(book.tags) +
            '<span class="genre">' + esc(book.genre) + "</span>" +
            '<span class="lvl"><span class="dot n' + book.niveau + '"></span>' + esc(niveauLong(book)) + "</span>" +
            noteBadge +
          "</p>" +
          '<div class="fiche-aide">' +
            (book.image
              ? '<figure class="fiche-img"><img src="' + esc(book.image) + '" alt="' + esc(book.imageAlt || "") + '">' +
                (book.imageCredit ? "<figcaption>" + esc(book.imageCredit) + "</figcaption>" : "") + "</figure>"
              : "") +
            (book.accroche ? '<p class="accroche">' + esc(book.accroche) + "</p>" : "") +
            '<p class="resume">' + esc(book.resume) + "</p>" +
            (a.bio ? '<p class="auteur-bio"><span class="auteur-bio-label">L\'auteur</span> <strong class="auteur-bio-nom">' + esc(a.nom) + "</strong> " + esc(a.bio) + "</p>" : "") +
          "</div>" +
        "</div>" +
      "</div>";
  }

  function renderBooks() {
    var html = "";
    ["P", "C"].forEach(function (cat, i) {
      var books = LIVRES.filter(function (b) { return b.cat === cat; });
      html += '<section class="cat-block" id="' + (cat === "P" ? "patrimoine" : "contemporain") + '">';
      html += '<h2 class="cat-head"><span class="num">' + (i === 0 ? "3" : "4") + "</span>" +
        esc(CATEGORIES[cat]) + "</h2>";
      html += '<p class="cat-lead">Œuvres proposées, réparties par niveau de lecture.</p>';
      [1, 2, 3].forEach(function (n) {
        var group = books.filter(function (b) { return b.niveau === n; });
        if (!group.length) return;
        html += '<div class="level-block">' +
          '<h3 class="level-head"><span class="dot n' + n + '"></span>' +
          esc(NIVEAUX[n].court + " · " + NIVEAUX[n].long) + "</h3>" +
          group.map(fiche).join("") +
          "</div>";
      });
      html += "</section>";
    });
    document.getElementById("books").innerHTML = html;
  }

  /* Statuts du carnet : vert (si je veux), rouge sinon (obligatoire).
     La case garde son style d'origine ; le point de couleur est à l'intérieur. */
  function statutClass(statut) {
    return statut === "libre" ? "libre" : "obligatoire";
  }

  function checkBox(statut) {
    return '<span class="check" aria-hidden="true"><span class="check-dot ' +
      statutClass(statut) + '"></span></span>';
  }

  function renderCarnet() {
    var legende = document.getElementById("carnet-legende");
    if (legende) {
      legende.innerHTML = [
        ["libre", "« Si je veux et comme je veux » — facultatif"],
        ["obligatoire", "« C'est obligatoire, je dois donc le faire »"]
      ].map(function (it) {
        return "<li>" + checkBox(it[0]) + esc(it[1]) + "</li>";
      }).join("");
    }

    document.getElementById("steps").innerHTML = CARNET.map(function (step, i) {
      var points = step.points.map(function (p) {
        return "<li>" + checkBox(p.statut) + "<span>" + esc(p.texte) + "</span></li>";
      }).join("");
      return '<div class="step">' +
        '<h3><span class="num">' + (i + 1) + "</span>" + esc(step.titre) + "</h3>" +
        '<p class="intro">' + esc(step.texte) + "</p>" +
        "<ul>" + points + "</ul></div>";
    }).join("");
  }

  function renderSuivi() {
    var host = document.getElementById("suivi-table");
    if (!host) return;
    var head = '<tr><th scope="col" class="suivi-num">N°</th>' + SUIVI_COLS.map(function (c) {
      return '<th scope="col">' + esc(c) + "</th>";
    }).join("") + "</tr>";
    var body = "";
    for (var i = 1; i <= 7; i++) {
      body += '<tr><th scope="row" class="suivi-num">' + i + "</th>";
      SUIVI_COLS.forEach(function (c, j) {
        var cell = j === SUIVI_COLS.length - 1
          ? '<span class="check" aria-hidden="true"></span>'
          : "";
        body += "<td>" + cell + "</td>";
      });
      body += "</tr>";
    }
    host.innerHTML = '<table class="suivi-table">' +
      "<caption>Je coche « Carnet fait » quand le carnet du livre est terminé.</caption>" +
      "<thead>" + head + "</thead><tbody>" + body + "</tbody></table>";
  }

  function renderFiche() {
    var host = document.getElementById("fiche-vierge");
    if (!host || typeof FICHE_LECTURE === "undefined") return;

    var id = FICHE_LECTURE.identification.map(function (f) {
      var mod = f.wide ? " wide" : "";
      if (f.cases) {
        return '<p class="fv-id-item' + mod + '">' +
          '<span class="fv-id-label">' + esc(f.label) + "</span>" +
          '<span class="fv-cases">' + f.cases.map(function (n) {
            return '<span class="fv-case"><span class="dot n' + n + '"></span>' +
              esc(NIVEAUX[n].court) + "</span>";
          }).join("") + "</span></p>";
      }
      return '<p class="fv-id-item' + mod + '">' +
        '<span class="fv-id-label">' + esc(f.label) + "</span>" +
        '<span class="fv-fill"></span></p>';
    }).join("");

    function bloc(b) {
      var body;
      if (b.type === "lignes") {
        var lines = "";
        for (var n = 0; n < b.lignes; n++) lines += '<span class="fv-line"></span>';
        body = '<div class="fv-lines">' + lines + "</div>";
      } else if (b.type === "couverture") {
        body = '<div class="fv-cover-box" role="img" aria-label="Zone pour la couverture du livre">' +
          "je colle, j'imprime ou je dessine la couverture</div>";
      } else {
        body = '<div class="fv-draw" role="img" aria-label="Emplacement pour un dessin"></div>';
      }
      var cls = "fv-bloc" +
        (b.grow ? " fv-bloc-grow" : "") +
        (b.type === "couverture" ? " fv-bloc-cover" : "");
      return '<div class="' + cls + '">' +
        "<h3>" + esc(b.titre) + "</h3>" +
        '<p class="fv-hint">' + esc(b.texte) + "</p>" +
        body + "</div>";
    }

    var reprise = '<p class="fv-reprise">' +
      '<span class="fv-reprise-title">' + esc(FICHE_LECTURE.reprise) + "</span>" +
      '<span class="fv-id-label">Titre du livre</span><span class="fv-fill"></span></p>';

    var html = "";
    [1, 2, 3].forEach(function (pg) {
      var blocs = FICHE_LECTURE.blocs.filter(function (b) {
        return (b.page || 1) === pg;
      });
      if (!blocs.length) return;
      var head = pg === 1
        ? '<div class="fv-id">' + id + "</div>"
        : reprise;
      html += '<div class="fv-page fv-page-' + pg + '">' +
        head + blocs.map(bloc).join("") + "</div>";
    });
    host.innerHTML = html;
  }

  function init() {
    renderLegend();
    renderBooks();
    renderSuivi();
    renderCarnet();
    renderFiche();
    document.getElementById("print").addEventListener("click", function () {
      window.print();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
