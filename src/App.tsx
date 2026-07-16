import { useLang } from "./lang";
import { useTheme } from "./theme";

function App() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();
  return (
    <main>
      <button className="btn" onClick={toggleTheme}>
        {theme === "dark" ? "modo claro" : "modo escuro"}
      </button>
      <button className="btn" onClick={toggleLang}>
        {lang === "pt" ? "EN" : "PT"}
      </button>
      <h1>Diogo Pinto</h1>
      <p>{t("Estudante de Engenharia Informática · ISEC", "Computer Engineering student · ISEC")}</p>

      <div>
        <span className="tag">Java</span>
        <span className="tag">JavaFX</span>
        <span className="tag accent">AI</span>
      </div>
    </main>
  )
}

export default App
