import { useLang } from "../lang";

export default function Home() {
  const { t } = useLang();
  return (
    <main className="container" style={{ padding: "80px 0" }}>
      <h1>Diogo Pinto</h1>
      <p>{t("Estudante de Engenharia Informática · ISEC", "Computer Engineering student · ISEC")}</p>

      <div>
        <span className="tag">Java</span>
        <span className="tag">JavaFX</span>
        <span className="tag accent">AI</span>
      </div>
    </main>
  );
}
