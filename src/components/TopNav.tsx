import type { CSSProperties } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLang } from "../lang";
import Icon from "./Icon";
import LangToggle from "./LangToggle";
import ThemeToggle from "./ThemeToggle";

function navLinkStyle({ isActive }: { isActive: boolean }): CSSProperties {
  return {
    position: "relative",
    padding: "8px 12px",
    color: isActive ? "var(--fg)" : "var(--fg-3)",
    textDecoration: "none",
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    transition: "color var(--t-fast) var(--ease-out)",
  };
}

// Sublinhado inset do link ativo (como no design: não ocupa o padding)
function ActiveLine() {
  return (
    <span
      style={{
        position: "absolute",
        left: 12,
        right: 12,
        bottom: 2,
        height: 1,
        background: "var(--accent)",
      }}
    />
  );
}

export default function TopNav() {
  const { t } = useLang();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(14px) saturate(140%)",
        WebkitBackdropFilter: "blur(14px) saturate(140%)",
        background: "var(--glass)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 60,
        }}
      >
        <Link
          to="/"
          className="mono"
          style={{ color: "var(--fg)", textDecoration: "none", fontSize: 13 }}
        >
          diogo<span style={{ color: "var(--fg-3)" }}>.dev</span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <NavLink to="/" end className="navlink" style={navLinkStyle}>
            {({ isActive }) => (
              <>
                {isActive && <ActiveLine />}
                {t("trabalhos", "work")}
              </>
            )}
          </NavLink>
          <NavLink to="/contacto" className="navlink" style={navLinkStyle}>
            {({ isActive }) => (
              <>
                {isActive && <ActiveLine />}
                {t("contacto", "contact")}
              </>
            )}
          </NavLink>
        </nav>

        <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <LangToggle />
          <ThemeToggle />
          <a
            href="https://github.com/DiogoFSP"
            target="_blank"
            rel="noopener"
            className="btn btn-ghost hide-sm"
            style={{ fontFamily: "var(--font-mono)", fontSize: 11, textDecoration: "none" }}
          >
            <Icon name="github" size={13} /> github
          </a>
        </div>
      </div>
    </header>
  );
}
