import { useLang } from "../lang";

export default function Contact() {
  const { t } = useLang();
  return (
    <main className="container" style={{ padding: "80px 0" }}>
      <h1>{t("Contacto", "Contact")}</h1>
      <p>
        {t(
          "Página em construção — o formulário vai viver aqui.",
          "Under construction — the form will live here."
        )}
      </p>
    </main>
  );
}
