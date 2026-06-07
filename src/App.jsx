import React, { useMemo, useState } from "react";

const screenshots = [
  {
    "id": 1,
    "title": "Dashboard",
    "description": "Management-Übersicht mit kritischen Artikeln, Artikelbestand, Standorten, offenen Alerts und 30-Tage-Verläufen.",
    "filename": "screen-01-dashboard.png",
    "device": "desktop",
    "width": 1788,
    "height": 866
  },
  {
    "id": 2,
    "title": "Dashboard · Quick Note",
    "description": "Das Notiz-Widget kann direkt aus dem Dashboard geöffnet werden, ohne den aktuellen Arbeitskontext zu verlassen.",
    "filename": "screen-02-dashboard-quick-note.png",
    "device": "desktop",
    "width": 1788,
    "height": 866
  },
  {
    "id": 3,
    "title": "Dashboard · Checkliste",
    "description": "Checklisten lassen sich als schnelle operative Arbeitsnotizen nutzen, z. B. für Schichtübergaben oder Refill-Prüfungen.",
    "filename": "screen-03-dashboard-checkliste.png",
    "device": "desktop",
    "width": 1788,
    "height": 866
  },
  {
    "id": 4,
    "title": "Dashboard · gespeicherte Notizen",
    "description": "Gespeicherte Notizen bleiben im Zugriff und unterstützen wiederkehrende Kontrollen im Betrieb.",
    "filename": "screen-04-dashboard-gespeicherte-notizen.png",
    "device": "desktop",
    "width": 1788,
    "height": 866
  },
  {
    "id": 5,
    "title": "Artikel",
    "description": "Artikelstamm als zentrale Grundlage für Bestand, Kategorien, Einheiten und spätere Import-/Mapping-Prozesse.",
    "filename": "screen-05-artikel.png",
    "device": "desktop",
    "width": 1788,
    "height": 866
  },
  {
    "id": 6,
    "title": "Bestände · Gesamtansicht",
    "description": "Bestandsansicht mit Kategorien, Status und Mengenwerten für die operative Kontrolle.",
    "filename": "screen-06-best-nde-gesamtansicht.png",
    "device": "desktop",
    "width": 1788,
    "height": 866
  },
  {
    "id": 7,
    "title": "Bestände · gefilterte Ansicht",
    "description": "Fokus auf einzelne Kategorien oder Statusbereiche, um relevante Artikel schneller zu finden.",
    "filename": "screen-07-best-nde-gefilterte-ansicht.png",
    "device": "desktop",
    "width": 1788,
    "height": 866
  },
  {
    "id": 8,
    "title": "Wareneingang",
    "description": "Wareneingang als vorbereitete Oberfläche für spätere Einkaufs- und FoodNotify-Importprozesse.",
    "filename": "screen-08-wareneingang.png",
    "device": "desktop",
    "width": 1788,
    "height": 866
  },
  {
    "id": 9,
    "title": "Auffüllliste Bar",
    "description": "Bar-Refill-Workflow mit aktivem Lauf, Artikeln, Mengensteuerung und Bestätigungslogik.",
    "filename": "screen-09-auff-llliste-bar.png",
    "device": "desktop",
    "width": 1788,
    "height": 866
  },
  {
    "id": 10,
    "title": "Bewegungen",
    "description": "Bestandsbewegungen dokumentieren Verbrauch, Wareneingang, Korrekturen und operative Änderungen.",
    "filename": "screen-10-bewegungen.png",
    "device": "desktop",
    "width": 1788,
    "height": 866
  },
  {
    "id": 11,
    "title": "Bewegung buchen",
    "description": "Modal für manuelle Bewegungen mit Menge, Typ und Kontext — wichtig für kontrollierte Bestandsänderungen.",
    "filename": "screen-11-bewegung-buchen.png",
    "device": "desktop",
    "width": 1788,
    "height": 866
  },
  {
    "id": 12,
    "title": "Arbeitsbereiche",
    "description": "Arbeitsbereiche strukturieren operative Zonen wie Bar, Service, Küche oder weitere Einheiten.",
    "filename": "screen-12-arbeitsbereiche.png",
    "device": "desktop",
    "width": 1788,
    "height": 866
  },
  {
    "id": 13,
    "title": "Lagerorte",
    "description": "Lagerorte bilden ab, wo Ware liegt und wo sie operativ benötigt wird.",
    "filename": "screen-13-lagerorte.png",
    "device": "desktop",
    "width": 1788,
    "height": 866
  },
  {
    "id": 14,
    "title": "Alerts",
    "description": "Alert-Fläche für Bestands- und Prozesshinweise; aktuell sauberer Empty-State ohne offene Warnungen.",
    "filename": "screen-14-alerts.png",
    "device": "desktop",
    "width": 1788,
    "height": 866
  },
  {
    "id": 15,
    "title": "Profil",
    "description": "Profil- und Organisationsansicht als Basis für Nutzerkontext, Workspace und Einstellungen.",
    "filename": "screen-15-profil.png",
    "device": "desktop",
    "width": 1788,
    "height": 866
  },
  {
    "id": 16,
    "title": "Team",
    "description": "Teamverwaltung für Nutzer, Rollen und Verantwortlichkeiten im Betrieb.",
    "filename": "screen-16-team.png",
    "device": "desktop",
    "width": 1788,
    "height": 866
  },
  {
    "id": 17,
    "title": "Rollen",
    "description": "Rollenübersicht als Grundlage für geregelte Zugriffe und spätere Organisationsskalierung.",
    "filename": "screen-17-rollen.png",
    "device": "desktop",
    "width": 1788,
    "height": 866
  },
  {
    "id": 18,
    "title": "Mobile Dashboard",
    "description": "Mobile Startansicht mit denselben Kernkennzahlen für schnellen Zugriff im Betrieb.",
    "filename": "screen-18-mobile-dashboard.png",
    "device": "mobile",
    "width": 697,
    "height": 836
  },
  {
    "id": 19,
    "title": "Mobile Auffüllliste",
    "description": "Mobile Bar-Refill-Ansicht für die tatsächliche Nutzung im Service- und Bar-Alltag.",
    "filename": "screen-19-mobile-auff-llliste.png",
    "device": "mobile",
    "width": 631,
    "height": 837
  },
  {
    "id": 20,
    "title": "Mobile Bewegungen",
    "description": "Mobile Bewegungsübersicht für schnelle Kontrolle von Verbrauch, Zugang und Korrekturen.",
    "filename": "screen-20-mobile-bewegungen.png",
    "device": "mobile",
    "width": 631,
    "height": 837
  },
  {
    "id": 21,
    "title": "Mobile Bestand",
    "description": "Mobile Bestandsansicht mit Statuskarten, Kategorien und artikelspezifischen Mengen.",
    "filename": "screen-21-mobile-bestand.png",
    "device": "mobile",
    "width": 631,
    "height": 837
  },
  {
    "id": 22,
    "title": "Mobile Quick Actions",
    "description": "Zentraler Plus-Button öffnet schnelle Aktionen wie Notiz, Checkliste, Verbrauch und Auffüllliste.",
    "filename": "screen-22-mobile-quick-actions.png",
    "device": "mobile",
    "width": 631,
    "height": 837
  },
  {
    "id": 23,
    "title": "Mobile Quick Note",
    "description": "Mobile Notizerfassung direkt im Gerät — hilfreich für kurze operative Hinweise während der Schicht.",
    "filename": "screen-23-mobile-quick-note.png",
    "device": "mobile",
    "width": 631,
    "height": 837
  }
];

const phaseCards = [
  {
    label: "Etappe 1",
    title: "Was schon sichtbar ist",
    text: "Siebzehn Desktop-Screens. Sechs Mobile-Screens. Kein Mockup, kein Folien-Versprechen — was läuft, ist hier vergrößerbar.",
  },
  {
    label: "Etappe 2",
    title: "Was als Nächstes einfließt",
    text: "FoodNotify-Bestellmails. Die Struktur, in der sie landen werden, existiert bereits — sie wartet nur auf den Trigger.",
  },
  {
    label: "Etappe 3",
    title: "Was die externe Wahrheit ergänzt",
    text: "Gastronovi-Verbräuche. Der Bestand, gegen den sie sich spiegeln lassen, ist schon da. Was fehlt, ist nur die Pipeline.",
  },
  {
    label: "Skalierung",
    title: "Was möglich wird, wenn der Pilot steht",
    text: "Mehrere Standorte. Eine eigene Organisation für Cube. Ein vollständig getrennter Datenpool — ohne Custom-Code.",
  },
];

function ScreenshotCard({ shot, onOpen }) {
  return (
    <article className={`shotCard ${shot.device}`}>
      <button className="shotImageButton" onClick={() => onOpen(shot)} aria-label={`${shot.title} vergrößern`}>
        <img src={`/screenshots/${shot.filename}`} alt={shot.title} loading="lazy" />
      </button>

      <div className="shotCopy">
        <div className="shotMeta">
          <span>{shot.device === "mobile" ? "Mobile" : "Desktop"}</span>
          <small>{String(shot.id).padStart(2, "0")}</small>
        </div>
        <h3>{shot.title}</h3>
        <p>{shot.description}</p>
      </div>
    </article>
  );
}

export default function App() {
  const [activeShot, setActiveShot] = useState(null);
  const desktopShots = useMemo(() => screenshots.filter((shot) => shot.device === "desktop"), []);
  const mobileShots = useMemo(() => screenshots.filter((shot) => shot.device === "mobile"), []);

  return (
    <main className="page">
      <nav className="topbar">
        <div className="brand">
          <span className="brandMark" />
          <strong>bevero</strong>
        </div>

        <div className="navLinks">
          <a href="#screens">Screenshots</a>
          <a href="#desktop">Desktop</a>
          <a href="#mobile">Mobile</a>
          <a href="#phases">Etappen</a>
        </div>

        <a className="navCta" href="#screens">Webapp ansehen</a>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Aktueller Webapp-Stand · echte Screenshots</p>
          <h1>
            Was passiert,
            <span> wenn die Demo wegfällt?</span>
          </h1>
          <p className="lead">
            Dreiundzwanzig echte Webapp-Screenshots. Klicken Sie sich durch. Vergrößern Sie,
            was hängenbleibt. Was läuft, läuft — und ist hier einsehbar.
          </p>

          <div className="heroStats">
            <div>
              <b>{screenshots.length}</b>
              <span>eingebundene Screenshots</span>
            </div>
            <div>
              <b>{desktopShots.length}</b>
              <span>Desktop-Flächen</span>
            </div>
            <div>
              <b>{mobileShots.length}</b>
              <span>Mobile-Flächen</span>
            </div>
          </div>
        </div>

        <aside className="heroPreview">
          <img src="/screenshots/screen-19-mobile-auff-llliste.png" alt="Mobile Auffüllliste Bar" />
          <div className="previewBadge">
            <span>Mobile-first</span>
            <b>Auffüllliste Bar</b>
          </div>
        </aside>
      </section>

      <section className="truthStrip">
        <article>
          <span>Was Sie hier sehen</span>
          <p>Echte Screenshots. Gebaut auf dem, was heute im Repo liegt.</p>
        </article>
        <article>
          <span>Was hier wegfällt</span>
          <p>Folien, Mockups, Operations-Map. Alles nicht mehr nötig.</p>
        </article>
        <article>
          <span>Was als Nächstes zählt</span>
          <p>Vier Etappen. Eine Richtung. Eine offene Frage pro Etappe.</p>
        </article>
      </section>

      <section className="sectionIntro" id="screens">
        <p className="eyebrow">Screenshot-Rundgang</p>
        <h2>Was zeigt man jemandem, der noch gar nicht fragt?</h2>
        <p>
          Klicken Sie sich durch. Vergrößern Sie, was hängenbleibt. Die Reihenfolge ist
          Einladung, nicht Pfad.
        </p>
      </section>

      <section className="gallerySection" id="desktop">
        <div className="galleryHeader">
          <div>
            <p className="eyebrow">Desktop Cockpit</p>
            <h2>Siebzehn Flächen, die sonst niemand zu sehen bekommt.</h2>
          </div>
          <p>
            Cockpit, Inventar, Struktur, Einstellungen — der Pilot-Blick hinter die Kulissen.
            Was der Admin sieht, wenn er sich umdreht.
          </p>
        </div>

        <div className="shotGrid desktopGrid">
          {desktopShots.map((shot) => (
            <ScreenshotCard key={shot.id} shot={shot} onOpen={setActiveShot} />
          ))}
        </div>
      </section>

      <section className="gallerySection" id="mobile">
        <div className="galleryHeader">
          <div>
            <p className="eyebrow">Mobile Webapp</p>
            <h2>Sechs Bildschirme für Momente, in denen niemand am Schreibtisch sitzt.</h2>
          </div>
          <p>
            Bar, Service, Küche. Mobile-first, weil der Alltag keinen Schreibtisch hat —
            und der Pilot auch nicht.
          </p>
        </div>

        <div className="shotGrid mobileGrid">
          {mobileShots.map((shot) => (
            <ScreenshotCard key={shot.id} shot={shot} onOpen={setActiveShot} />
          ))}
        </div>
      </section>

      <section className="phaseSection" id="phases">
        <div className="phaseIntro">
          <p className="eyebrow">Etappen-Logik</p>
          <h2>Wie wird aus einer Bildersammlung eine Geschichte?</h2>
          <p>
            Vier Etappen. Jede baut eine Annahme auf — bis aus Screens ein Versprechen wird,
            das im Pilot trägt.
          </p>
        </div>

        <div className="phaseGrid">
          {phaseCards.map((phase) => (
            <article key={phase.label} className="phaseCard">
              <span>{phase.label}</span>
              <h3>{phase.title}</h3>
              <p>{phase.text}</p>
            </article>
          ))}
        </div>
      </section>

      {activeShot && (
        <div className="modalBackdrop" onClick={() => setActiveShot(null)} role="presentation">
          <div className={`modalContent ${activeShot.device}`} onClick={(event) => event.stopPropagation()}>
            <button className="modalClose" onClick={() => setActiveShot(null)}>×</button>
            <img src={`/screenshots/${activeShot.filename}`} alt={activeShot.title} />
            <div className="modalText">
              <span>{activeShot.device === "mobile" ? "Mobile" : "Desktop"} · {String(activeShot.id).padStart(2, "0")}</span>
              <h3>{activeShot.title}</h3>
              <p>{activeShot.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
