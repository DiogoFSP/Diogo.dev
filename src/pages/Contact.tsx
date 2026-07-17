import { useLang } from "../lang";

export default function Contact() {
  const { t } = useLang();
  return (
    <main className="container" style={{ padding: "80px 0" }}>
      <h1>{t("Contacto", "Contact")}</h1>
      <p className="mono" style={{ color: "var(--fg-3)", fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--warn)", boxShadow: "0 0 10px var(--warn)" }} />
        {t("Em desenvolvimento", "In development")}
      </p>
    </main>
  );
}
