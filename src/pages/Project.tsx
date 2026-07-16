import { Link, useParams } from "react-router-dom";
import { useLang } from "../lang";

export default function Project() {
  const { slug } = useParams();
  const { t } = useLang();
  return (
    <main className="container" style={{ padding: "80px 0" }}>
      <span className="tag accent">{slug}</span>
      <h1>{t("Projeto", "Project")}</h1>
      <p>
        {t(
          "Página em construção — o detalhe do projeto vai viver aqui.",
          "Under construction — the project detail will live here."
        )}
      </p>
      <Link to="/" style={{ color: "var(--accent)" }}>
        ← {t("voltar aos trabalhos", "back to work")}
      </Link>
    </main>
  );
}
