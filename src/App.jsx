import React, { useMemo, useState } from "react";

const screenshots = [
  { "id": 1, "title": "Dashboard", "description": "Management-Übersicht mit kritischen Artikeln, Artikelbestand, Standorten, offenen Alerts und 30-Tage-Verläufen.", "filename": "screen-01-dashboard.png", "device": "desktop", "width": 1788, "height": 866 },
  { "id": 2, "title": "Dashboard · Quick Note", "description": "Das Notiz-Widget kann direkt aus dem Dashboard geöffnet werden, ohne den aktuellen Arbeitskontext zu verlassen.", "filename": "screen-02-dashboard-quick-note.png", "device": "desktop", "width": 1788, "height": 866 },
  { "id": 3, "title": "Dashboard · Checkliste", "description": "Checklisten lassen sich als schnelle operative Arbeitsnotizen nutzen, z. B. für Schichtübergaben oder Refill-Prüfungen.", "filename": "screen-03-dashboard-checkliste.png", "device": "desktop", "width": 1788, "height": 866 },
  { "id": 4, "title": "Dashboard · gespeicherte Notizen", "description": "Gespeicherte Notizen bleiben im Zugriff und unterstützen wiederkehrende Kontrollen im Betrieb.", "filename": "screen-04-dashboard-gespeicherte-notizen.png", "device": "desktop", "width": 1788, "height": 866 },
  { "id": 5, "title": "Artikel", "description": "Artikelstamm als zentrale Grundlage für Bestand, Kategorien, Einheiten und spätere Import-/Mapping-Prozesse.", "filename": "screen-05-artikel.png", "device": "desktop", "width": 1788, "height": 866 },
  { "id": 6, "title": "Bestände · Gesamtansicht", "description": "Bestandsansicht mit Kategorien, Status und Mengenwerten für die operative Kontrolle.", "filename": "screen-06-best-nde-gesamtansicht.png", "device": "desktop", "width": 1788, "height": 866 },
  { "id": 7, "title": "Bestände · gefilterte Ansicht", "description": "Fokus auf einzelne Kategorien oder Statusbereiche, um relevante Artikel schneller zu finden.", "filename": "screen-07-best-nde-gefilterte-ansicht.png", "device": "desktop", "width": 1788, "height": 866 },
  { "id": 8, "title": "Wareneingang", "description": "Wareneingang als vorbereitete Oberfläche für spätere Einkaufs- und FoodNotify-Importprozesse.", "filename": "screen-08-wareneingang.png", "device": "desktop", "width": 1788, "height": 866 },
  { "id": 9, "title": "Auffüllliste Bar", "description": "Bar-Refill-Workflow mit aktivem Lauf, Artikeln, Mengensteuerung und Bestätigungslogik.", "filename": "screen-09-auff-llliste-bar.png", "device": "desktop", "width": 1788, "height": 866 },
  { "id": 10, "title": "Bewegungen", "description": "Bestandsbewegungen dokumentieren Verbrauch, Wareneingang, Korrekturen und operative Änderungen.", "filename": "screen-10-bewegungen.png", "device": "desktop", "width": 1788, "height": 866 },
  { "id": 11, "title": "Bewegung buchen", "description": "Modal für manuelle Bewegungen mit Menge, Typ und Kontext — wichtig für kontrollierte Bestandsänderungen.", "filename": "screen-11-bewegung-buchen.png", "device": "desktop", "width": 1788, "height": 866 },
  { "id": 12, "title": "Arbeitsbereiche", "description": "Arbeitsbereiche strukturieren operative Zonen wie Bar, Service, Küche oder weitere Einheiten.", "filename": "screen-12-arbeitsbereiche.png", "device": "desktop", "width": 1788, "height": 866 },
  { "id": 13, "title": "Lagerorte", "description": "Lagerorte bilden ab, wo Ware liegt und wo sie operativ benötigt wird.", "filename": "screen-13-lagerorte.png", "device": "desktop", "width": 1788, "height": 866 },
  { "id": 14, "title": "Alerts", "description": "Alert-Fläche für Bestands- und Prozesshinweise; aktuell sauberer Empty-State ohne offene Warnungen.", "filename": "screen-14-alerts.png", "device": "desktop", "width": 1788, "height": 866 },
  { "id": 15, "title": "Profil", "description": "Profil- und Organisationsansicht als Basis für Nutzerkontext, Workspace und Einstellungen.", "filename": "screen-15-profil.png", "device": "desktop", "width": 1788, "height": 866 },
  { "id": 16, "title": "Team", "description": "Teamverwaltung für Nutzer, Rollen und Verantwortlichkeiten im Betrieb.", "filename": "screen-16-team.png", "device": "desktop", "width": 1788, "height": 866 },
  { "id": 17, "title": "Rollen", "description": "Rollenübersicht als Grundlage für geregelte Zugriffe und spätere Organisationsskalierung.", "filename": "screen-17-rollen.png", "device": "desktop", "width": 1788, "height": 866 },
  { "id": 18, "title": "Mobile Dashboard", "description": "Mobile Startansicht mit denselben Kernkennzahlen für schnellen Zugriff im Betrieb.", "filename": "screen-18-mobile-dashboard.png", "device": "mobile", "width": 697, "height": 836 },
  { "id": 19, "title": "Mobile Auffüllliste", "description": "Mobile Bar-Refill-Ansicht für die tatsächliche Nutzung im Service- und Bar-Alltag.", "filename": "screen-19-mobile-auff-llliste.png", "device": "mobile", "width": 631, "height": 837 },
  { "id": 20, "title": "Mobile Bewegungen", "description": "Mobile Bewegungsübersicht für schnelle Kontrolle von Verbrauch, Zugang und Korrekturen.", "filename": "screen-20-mobile-bewegungen.png", "device": "mobile", "width": 631, "height": 837 },
  { "id": 21, "title": "Mobile Bestand", "description": "Mobile Bestandsansicht mit Statuskarten, Kategorien und artikelspezifischen Mengen.", "filename": "screen-21-mobile-bestand.png", "device": "mobile", "width": 631, "height": 837 },
  { "id": 22, "title": "Mobile Quick Actions", "description": "Zentraler Plus-Button öffnet schnelle Aktionen wie Notiz, Checkliste, Verbrauch und Auffüllliste.", "filename": "screen-22-mobile-quick-actions.png", "device": "mobile", "width": 631, "height": 837 },
  { "id": 23, "title": "Mobile Quick Note", "description": "Mobile Notizerfassung direkt im Gerät — hilfreich für kurze operative Hinweise während der Schicht.", "filename": "screen-23-mobile-quick-note.png", "device": "mobile", "width": 631, "height": 837 },
];

const phaseCards = [
  { label: "Etappe 1", title: "Was schon sichtbar ist", text: "Siebzehn Desktop-Screens. Sechs Mobile-Screens. Kein Mockup, kein Folien-Versprechen — was läuft, ist hier vergrößerbar." },
  { label: "Etappe 2", title: "Was als Nächstes einfließt", text: "FoodNotify-Bestellmails. Die Struktur, in der sie landen werden, existiert bereits — sie wartet nur auf den Trigger." },
  { label: "Etappe 3", title: "Was die externe Wahrheit ergänzt", text: "Gastronovi-Verbräuche. Der Bestand, gegen den sie sich spiegeln lassen, ist schon da. Was fehlt, ist nur die Pipeline." },
  { label: "Skalierung", title: "Was möglich wird, wenn der Pilot steht", text: "Mehrere Standorte. Eine eigene Organisation für Cube. Ein vollständig getrennter Datenpool — ohne Custom-Code." },
];

// ─── Phase 2/3 Data ───────────────────────────────────────────────────────────

const useCases = [
  {
    id: 1,
    number: "01",
    profile: "motorworld",
    profileLabel: "Motorworld BB",
    persona: "Sarah K.",
    role: "Barkeeperin",
    scenario: "Sarah öffnet die Auffüllliste auf ihrem Handy. Die Sollmengen für diesen Standort sind hinterlegt — andere Standorte sehen andere Werte, ohne dass Sarah das konfigurieren muss.",
    steps: ["Auffüllliste öffnet automatisch den richtigen Standort-Kontext", "Sollmenge stammt aus der standortspezifischen Konfiguration", "Buchung wird MW Böblingen zugeordnet — kein Chaos mit anderen Standorten"],
  },
  {
    id: 2,
    number: "02",
    profile: "cube",
    profileLabel: "CUBE Stuttgart",
    persona: "Jonas M.",
    role: "Event-Koordinator",
    scenario: "Jonas plant ein Bankett für 90 Gäste. Das System zeigt Mietpreis, Personalkosten ab Mitternacht und Non-Food-Positionen — alles standortspezifisch, kein manuelles Tabellenblatt.",
    steps: ["Gästeanzahl wird eingegeben → Exklusivmiete berechnet sich", "Personalstaffeln ab Mitternacht werden automatisch eingeblendet", "Non-Food (Deko, AV, Bestuhlung) summiert sich live auf"],
  },
  {
    id: 3,
    number: "03",
    profile: "management",
    profileLabel: "Geschäftsführung",
    persona: "F. Rauschenberger",
    role: "Geschäftsführung",
    scenario: "Ein Login, alle Standorte. Die Übersicht zeigt aggregierte Bestandssituation über Motorworld und CUBE — ohne Passwortwechsel, ohne E-Mail-Runden.",
    steps: ["Mother-Concern-Dashboard zeigt alle Standorte auf einen Blick", "Bestandsampeln aggregiert — rot heißt: irgendwo ist ein Problem", "Ein Klick drilldown auf den betroffenen Standort"],
  },
  {
    id: 4,
    number: "04",
    profile: "cube",
    profileLabel: "CUBE Premium",
    persona: "Thomas B.",
    role: "Küchenchef",
    scenario: "Bei CUBE ist die Qualitätsnotiz kein Optionsfeld — sie ist Pflicht. Thomas bucht eine Weinlieferung, das System fordert Chargennummer und Qualitätsbewertung, bevor gespeichert werden kann.",
    steps: ["Artikel trägt Flag: Qualitätsnotiz erforderlich", "Eingabemaske erzwingt Notiz + Chargennummer", "Buchung inkl. Qualitätsinfo revisionssicher gespeichert"],
  },
];

const motorworldFeatures = [
  { text: "Standortspezifische Sollmengen & Mindestbestände", active: true },
  { text: "Bereiche: Bar, Küche, Lager, Service", active: true },
  { text: "Mobile Auffüllliste & Bewegungsbuchung", active: true },
  { text: "Automation & Bestands-Alerts", active: true },
  { text: "Schichtübergabe & operative Notizen", active: true },
  { text: "Qualitätsnotiz als Pflichtfeld", active: false },
  { text: "Chargenerfassung & Premium-Handling", active: false },
  { text: "Event-Kalkulation & Service-Slots", active: false },
];

const cubeFeatures = [
  { text: "Standortspezifische Sollmengen & Mindestbestände", active: true },
  { text: "Bereiche: Restaurant, Bar, Event, Lounge, Outdoor", active: true },
  { text: "Mobile Auffüllliste & Bewegungsbuchung", active: true },
  { text: "Automation & Bestands-Alerts", active: true },
  { text: "Schichtübergabe & operative Notizen", active: true },
  { text: "Qualitätsnotiz als Pflichtfeld", active: true },
  { text: "Chargenerfassung & Premium-Handling", active: true },
  { text: "Event-Kalkulation, Miete, Personal, Non-Food", active: true },
];

const connections = [
  { from: "Zentraler Artikelstamm", to: "Jeder Standort", label: "teilt Artikel, Einheiten, Kategorien" },
  { from: "Standort-Profil", to: "Inventar-Konfiguration", label: "steuert Sollmengen & Pflichtfelder" },
  { from: "Standort-Profil", to: "Operative Bereiche", label: "bestimmt Bar vs. Restaurant vs. Event" },
  { from: "Inventar-Konfiguration", to: "Auffüllliste", label: "filtert auf diesen Standort" },
  { from: "Inventar-Konfiguration", to: "Automation Engine", label: "löst Alerts bei Unterschreitung aus" },
  { from: "Operative Bereiche", to: "Event-Kalkulation", label: "Miete, Personal ab Mitternacht, Non-Food" },
  { from: "Operative Bereiche", to: "Schichtübergabe", label: "trägt Bereichs-Kontext" },
  { from: "Alle Standorte", to: "Management-Übersicht", label: "aggregiert Bestand & Alerts" },
];

// ─── SVG Org Hierarchy ────────────────────────────────────────────────────────

function SystemMapSVG() {
  return (
    <svg
      viewBox="0 0 820 290"
      xmlns="http://www.w3.org/2000/svg"
      className="p23-svg"
      role="img"
      aria-label="Standort-Hierarchie: Rauschenberger GmbH, darunter Marken Motorworld Inn und CUBE, darunter je zwei Standorte"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* ── Connector lines ────────────────────────────── */}
      <line x1="410" y1="64" x2="410" y2="92" stroke="#1d2521" strokeWidth="1.5" strokeOpacity="0.15" />
      <line x1="200" y1="92" x2="620" y2="92" stroke="#1d2521" strokeWidth="1.5" strokeOpacity="0.15" />
      <line x1="200" y1="92"  x2="200" y2="112" stroke="#1d2521" strokeWidth="1.5" strokeOpacity="0.15" />
      <line x1="620" y1="92"  x2="620" y2="112" stroke="#1d2521" strokeWidth="1.5" strokeOpacity="0.15" />

      <line x1="200" y1="164" x2="200" y2="188" stroke="#cf8228" strokeWidth="1.5" strokeOpacity="0.45" />
      <line x1="120" y1="188" x2="280" y2="188" stroke="#cf8228" strokeWidth="1.5" strokeOpacity="0.45" />
      <line x1="120" y1="188" x2="120" y2="208" stroke="#cf8228" strokeWidth="1.5" strokeOpacity="0.45" />
      <line x1="280" y1="188" x2="280" y2="208" stroke="#cf8228" strokeWidth="1.5" strokeOpacity="0.45" />

      <line x1="620" y1="164" x2="620" y2="188" stroke="#2875b8" strokeWidth="1.5" strokeOpacity="0.45" />
      <line x1="540" y1="188" x2="700" y2="188" stroke="#2875b8" strokeWidth="1.5" strokeOpacity="0.45" />
      <line x1="540" y1="188" x2="540" y2="208" stroke="#2875b8" strokeWidth="1.5" strokeOpacity="0.45" />
      <line x1="700" y1="188" x2="700" y2="208" stroke="#2875b8" strokeWidth="1.5" strokeOpacity="0.45" />

      {/* ── Level 0: Rauschenberger GmbH ──────────────── */}
      <rect x="260" y="10" width="300" height="54" rx="14" fill="#146b3f" />
      <text x="410" y="34" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" letterSpacing="-0.3">Rauschenberger GmbH</text>
      <text x="410" y="52" textAnchor="middle" fill="rgba(255,255,255,0.62)" fontSize="10" fontWeight="600" letterSpacing="0.6">MOTHER CONCERN · ALLE STANDORTE</text>

      {/* ── Level 1: Brands ───────────────────────────── */}
      <rect x="80" y="112" width="240" height="52" rx="10" fill="#cf8228" />
      <text x="200" y="134" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" letterSpacing="-0.3">Motorworld Inn</text>
      <text x="200" y="152" textAnchor="middle" fill="rgba(255,255,255,0.68)" fontSize="10" fontWeight="600" letterSpacing="0.4">MOTORWORLD_STANDARD</text>

      <rect x="500" y="112" width="240" height="52" rx="10" fill="#2875b8" />
      <text x="620" y="134" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" letterSpacing="-0.3">CUBE</text>
      <text x="620" y="152" textAnchor="middle" fill="rgba(255,255,255,0.68)" fontSize="10" fontWeight="600" letterSpacing="0.4">CUBE_PREMIUM</text>

      {/* ── Level 2: Locations ────────────────────────── */}
      <rect x="62" y="208" width="116" height="46" rx="9" fill="rgba(207,130,40,0.1)" stroke="#cf8228" strokeWidth="1.5" />
      <text x="120" y="228" textAnchor="middle" fill="#cf8228" fontSize="11.5" fontWeight="700">MW Böblingen</text>
      <text x="120" y="244" textAnchor="middle" fill="#cf8228" fontSize="9.5" fontWeight="600" opacity="0.75">Pilotstandort · aktiv</text>

      <rect x="222" y="208" width="116" height="46" rx="9" fill="rgba(207,130,40,0.1)" stroke="#cf8228" strokeWidth="1.5" />
      <text x="280" y="228" textAnchor="middle" fill="#cf8228" fontSize="11.5" fontWeight="700">MW Inn</text>
      <text x="280" y="244" textAnchor="middle" fill="#cf8228" fontSize="9.5" fontWeight="600" opacity="0.75">Phase 2</text>

      <rect x="482" y="208" width="116" height="46" rx="9" fill="rgba(40,117,184,0.1)" stroke="#2875b8" strokeWidth="1.5" />
      <text x="540" y="228" textAnchor="middle" fill="#2875b8" fontSize="11.5" fontWeight="700">CUBE Stuttgart</text>
      <text x="540" y="244" textAnchor="middle" fill="#2875b8" fontSize="9.5" fontWeight="600" opacity="0.75">Phase 2 / 3</text>

      <rect x="642" y="208" width="116" height="46" rx="9" fill="rgba(40,117,184,0.1)" stroke="#2875b8" strokeWidth="1.5" />
      <text x="700" y="228" textAnchor="middle" fill="#2875b8" fontSize="11.5" fontWeight="700">CUBE München</text>
      <text x="700" y="244" textAnchor="middle" fill="#2875b8" fontSize="9.5" fontWeight="600" opacity="0.75">Skalierung</text>

      {/* ── Legend ────────────────────────────────────── */}
      <rect x="245" y="267" width="11" height="11" rx="3" fill="#146b3f" />
      <text x="262" y="277" fill="#1d2521" fontSize="10" opacity="0.55">Unternehmensebene</text>
      <rect x="395" y="267" width="11" height="11" rx="3" fill="#cf8228" />
      <text x="412" y="277" fill="#1d2521" fontSize="10" opacity="0.55">Motorworld-Profil</text>
      <rect x="540" y="267" width="11" height="11" rx="3" fill="#2875b8" />
      <text x="557" y="277" fill="#1d2521" fontSize="10" opacity="0.55">CUBE-Profil</text>
    </svg>
  );
}

// ─── Phase 2/3 Sub-Components ─────────────────────────────────────────────────

function ProfileCard({ label, color, bg, features }) {
  return (
    <div className="p23-profileCard" style={{ "--pc": color, "--pb": bg }}>
      <div className="p23-profileHeader">
        <span className="p23-profileBadge" style={{ background: color }}>{label}</span>
      </div>
      <ul className="p23-featureList">
        {features.map((f, i) => (
          <li key={i} className={f.active ? "pf-on" : "pf-off"}>
            <span className="pf-icon">{f.active ? "✓" : "–"}</span>
            {f.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function UseCaseCard({ uc }) {
  return (
    <article className={`p23-ucCard p23-uc-${uc.profile}`}>
      <div className="p23-ucTop">
        <span className="p23-ucNum">{uc.number}</span>
        <span className="p23-ucTag">{uc.profileLabel}</span>
      </div>
      <div className="p23-ucPerson">
        <strong>{uc.persona}</strong>
        <span>{uc.role}</span>
      </div>
      <p className="p23-ucScene">{uc.scenario}</p>
      <ol className="p23-ucSteps">
        {uc.steps.map((s, i) => <li key={i}>{s}</li>)}
      </ol>
    </article>
  );
}

function ConnectivityMap() {
  return (
    <div className="p23-connTable">
      {connections.map((c, i) => (
        <div key={i} className="p23-connRow">
          <span className="p23-connFrom">{c.from}</span>
          <span className="p23-connArrow">→</span>
          <span className="p23-connTo">{c.to}</span>
          <span className="p23-connLabel">{c.label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Phase 2/3 Tab ────────────────────────────────────────────────────────────

function Phase2Tab() {
  return (
    <div className="p23-tab">

      {/* Hero */}
      <section className="p23-hero">
        <div className="p23-heroCopy">
          <p className="eyebrow">Phase 2 · Phase 3 · Zielbild</p>
          <h1 className="p23-h1">
            Ein System.
            <span> Jeder Standort sein Profil.</span>
          </h1>
          <p className="p23-lead">
            Bevero wächst vom Piloten bei Motorworld Böblingen zu einer
            Multi-Standort-Plattform. Motorworld Inn und CUBE werden mit derselben
            Software betrieben — kein Custom-Code, keine doppelte Datenpflege,
            keine getrennte Logik.
          </p>
          <div className="p23-heroStats">
            <div><b>2</b><span>Profile</span></div>
            <div><b>4+</b><span>Standorte</span></div>
            <div><b>1</b><span>Artikelstamm</span></div>
            <div><b>0</b><span>Custom-Code pro Standort</span></div>
          </div>
        </div>
        <aside className="p23-heroAside">
          <div className="p23-asideCard p23-asideTop">
            <span className="p23-asideLabel motorworld-label">Motorworld Standard</span>
            <p>Sollmengen, Bereiche, Bewegungen, Alerts — der bewährte Kern, jetzt auf mehrere Standorte skaliert.</p>
          </div>
          <div className="p23-asideConnector">
            <span>shared core</span>
          </div>
          <div className="p23-asideCard p23-asideBottom">
            <span className="p23-asideLabel cube-label">CUBE Premium</span>
            <p>Alles vom Standard, plus Qualitätsnotiz-Pflicht, Chargenerfassung und vollständige Event-Kalkulation.</p>
          </div>
        </aside>
      </section>

      {/* System Map */}
      <section className="p23-section">
        <div className="p23-sHead">
          <div>
            <p className="eyebrow">Das Zielbild</p>
            <h2>Wie hängen die Standorte zusammen?</h2>
          </div>
          <p className="p23-sLead">
            Alle Standorte laufen unter einer Organisation. Die Marke bestimmt das
            Profil — Motorworld Standard oder CUBE Premium. Das Profil entscheidet,
            welche Felder, Funktionen und Pflichten ein Standort hat.
          </p>
        </div>
        <div className="p23-svgWrap">
          <SystemMapSVG />
        </div>
        <p className="p23-caption">
          Jeder Standort hat eigene Bereiche (Bar, Küche, Lager, Restaurant) und
          standortspezifische Sollmengen. Der Artikelstamm ist zentral und geteilt —
          einmal gepflegt, überall verfügbar.
        </p>
      </section>

      {/* Data Principle */}
      <section className="p23-section p23-altbg">
        <div className="p23-sHead">
          <div>
            <p className="eyebrow">Datenprinzip</p>
            <h2>Zentral denken. Lokal handeln.</h2>
          </div>
          <p className="p23-sLead">
            Ein Artikel ist einmal angelegt — und gilt überall. Was sich
            unterscheidet, sind nur die lokalen Regeln: Sollmenge, Pflichtfelder,
            zugewiesener Bereich.
          </p>
        </div>
        <div className="p23-flow">
          <div className="p23-flowCenter">
            <div className="p23-flowIcon">▣</div>
            <strong>Zentraler Artikelstamm</strong>
            <span>Name, Einheit, Kategorie — einmal gepflegt, an allen Standorten verfügbar</span>
          </div>
          <div className="p23-flowDown">
            <div className="p23-flowLine" />
            <span className="p23-flowHint">teilt Artikel mit →</span>
            <div className="p23-flowLine" />
          </div>
          <div className="p23-flowLeaves">
            <div className="p23-flowLeaf p23-leafMW">
              <strong>Motorworld BB</strong>
              <ul>
                <li>Sollmenge: 5 Fl.</li>
                <li>Bereich: Bar</li>
                <li>Standard-Präzision</li>
              </ul>
            </div>
            <div className="p23-flowLeaf p23-leafMW">
              <strong>Motorworld Inn</strong>
              <ul>
                <li>Sollmenge: 8 Fl.</li>
                <li>Bereich: Bar + Lounge</li>
                <li>Standard-Präzision</li>
              </ul>
            </div>
            <div className="p23-flowLeaf p23-leafCUBE">
              <strong>CUBE Stuttgart</strong>
              <ul>
                <li>Sollmenge: 24 Fl.</li>
                <li>Bereich: Restaurant + Bar</li>
                <li>Qualitätsnotiz Pflicht</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Comparison */}
      <section className="p23-section">
        <div className="p23-sHead">
          <div>
            <p className="eyebrow">Zwei Profile, eine Plattform</p>
            <h2>Was Motorworld und CUBE unterscheidet</h2>
          </div>
          <p className="p23-sLead">
            Das Profil ist kein Label — es steuert, welche Felder sichtbar sind,
            welche Angaben Pflicht sind und welche Module aktiviert werden.
            Kein Code-Unterschied, nur Konfiguration.
          </p>
        </div>
        <div className="p23-profiles">
          <ProfileCard
            label="Motorworld Standard"
            color="#cf8228"
            bg="rgba(207,130,40,0.07)"
            features={motorworldFeatures}
          />
          <ProfileCard
            label="CUBE Premium"
            color="#2875b8"
            bg="rgba(40,117,184,0.07)"
            features={cubeFeatures}
          />
        </div>
      </section>

      {/* Use Cases */}
      <section className="p23-section p23-altbg">
        <div className="p23-sHead">
          <div>
            <p className="eyebrow">Anwendungsfälle</p>
            <h2>Wer macht was — und wie fühlt es sich an?</h2>
          </div>
          <p className="p23-sLead">
            Vier konkrete Szenarien — von der Barkeeperin bis zur Geschäftsführung.
            Kein Techniker nötig zum Verstehen.
          </p>
        </div>
        <div className="p23-ucGrid">
          {useCases.map((uc) => <UseCaseCard key={uc.id} uc={uc} />)}
        </div>
      </section>

      {/* Connectivity */}
      <section className="p23-section">
        <div className="p23-sHead">
          <div>
            <p className="eyebrow">Interkonnektivität</p>
            <h2>Was verbindet sich mit was?</h2>
          </div>
          <p className="p23-sLead">
            Kein Modul steht für sich. Artikel, Standort, Bereiche,
            Automation und Übergabe kennen alle ihren Standort-Kontext — und
            sprechen miteinander.
          </p>
        </div>
        <ConnectivityMap />
      </section>

    </div>
  );
}

// ─── Existing Components ──────────────────────────────────────────────────────

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

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeTab, setActiveTab] = useState("webapp");
  const [activeShot, setActiveShot] = useState(null);
  const desktopShots = useMemo(() => screenshots.filter((s) => s.device === "desktop"), []);
  const mobileShots  = useMemo(() => screenshots.filter((s) => s.device === "mobile"),  []);

  const switchTab = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="page">
      <nav className="topbar">
        <div className="brand">
          <span className="brandMark" />
          <strong>bevero</strong>
        </div>

        <div className="tabSwitcher">
          <button
            className={`tabBtn ${activeTab === "webapp" ? "tabBtn--active" : ""}`}
            onClick={() => switchTab("webapp")}
          >
            Webapp heute
          </button>
          <button
            className={`tabBtn ${activeTab === "phase23" ? "tabBtn--active" : ""}`}
            onClick={() => switchTab("phase23")}
          >
            Phase 2/3 Zielbild
          </button>
        </div>

        <button
          className="navCta"
          onClick={() =>
            activeTab === "phase23"
              ? switchTab("webapp")
              : document.querySelector("#screens")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {activeTab === "webapp" ? "Webapp ansehen" : "Webapp heute"}
        </button>
      </nav>

      {/* ── Tab: Webapp heute ─────────────────────── */}
      {activeTab === "webapp" && (
        <>
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
                <div><b>{screenshots.length}</b><span>eingebundene Screenshots</span></div>
                <div><b>{desktopShots.length}</b><span>Desktop-Flächen</span></div>
                <div><b>{mobileShots.length}</b><span>Mobile-Flächen</span></div>
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
        </>
      )}

      {/* ── Tab: Phase 2/3 Zielbild ───────────────── */}
      {activeTab === "phase23" && <Phase2Tab />}

      {/* ── Modal ─────────────────────────────────── */}
      {activeShot && (
        <div className="modalBackdrop" onClick={() => setActiveShot(null)} role="presentation">
          <div className={`modalContent ${activeShot.device}`} onClick={(e) => e.stopPropagation()}>
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
