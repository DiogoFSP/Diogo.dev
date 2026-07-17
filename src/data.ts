import type { Lang } from "./lang";

// Um texto pode ser igual nas duas línguas (string) ou bilingue ({pt, en})
export type Localized = string | { pt: string; en: string };

export type Metric = { label: Localized; value: Localized };

// Um passo da narrativa do projeto (desafio → processo → resultado)
export type StoryStep = { kind: Localized; title: Localized; body: Localized };

// Um ponto de arquitetura/implementação
export type BuildPoint = { title: Localized; body: Localized };

export type Project = {
  id: string;
  title: string;
  slug: string;
  year: string;
  role: Localized;
  summary: Localized;
  tagline: Localized;
  tags: string[];
  metrics: Metric[];
  accent: string;
  featured: "tall" | "wide" | "small";
  status: "published" | "hidden";
  github: string | null;
  demo: string | null;
  course: Localized;
  team?: string[];
  story?: StoryStep[];
  build?: BuildPoint[];
};

// Tradutor para valores Localized (o t() do contexto só trata strings soltas)
export function loc(v: Localized, lang: Lang): string {
  if (typeof v === "string") return v;
  return v[lang] ?? v.pt ?? v.en;
}

export const PROJECTS: Project[] = [
  {
    id: "deepsea",
    title: "Deep Sea Mining",
    slug: "deepsea",
    year: "2026",
    role: { pt: "Trabalho universitário · Grupo de 3", en: "University project · Team of 3" },
    summary: {
      pt: "Jogo de estratégia e exploração em alto-mar. O jogador comanda um navio e três drones submarinos para recuperar artefactos de uma civilização antiga, gerindo combustível e integridade do casco. Arquitetura MVC com máquina de estados, sete padrões de design e testes unitários em JUnit 5.",
      en: "Strategy and exploration game set on the open sea. The player commands a ship and three underwater drones to recover artifacts from an ancient civilization, managing fuel and hull integrity. MVC architecture with a state machine, seven design patterns and JUnit 5 unit tests.",
    },
    tagline: {
      pt: "Mergulha, recolhe, sobrevive — e não percas todos os drones.",
      en: "Dive, collect, survive — and don't lose all the drones.",
    },
    tags: ["Java", "JavaFX", "MVC", "FSM", "JUnit 5", "Maven"],
    metrics: [
      { label: { pt: "fases por expedição", en: "phases per expedition" }, value: "4" },
      { label: { pt: "nota final", en: "final grade" }, value: "94 / 100" },
    ],
    accent: "#5EBFFF",
    featured: "tall",
    status: "published",
    github: "https://github.com/DiogoFSP/DeepSeaMining",
    demo: null,
    course: "Programação Avançada · ISEC",
    team: ["Diogo Pinto", "Rafael Marques", "Vera Ribeiro"],
    story: [
      {
        kind: { pt: "o desafio", en: "the challenge" },
        title: { pt: "Uma operação de resgate em águas profundas", en: "A deep-water salvage operation" },
        body: {
          pt: "O jogador comanda um navio com três drones submarinos e alterna entre a gestão estratégica à superfície e a exploração subaquática: descer o fosso marinho a desviar de rochas, animais e correntes, recolher minérios e artefactos no fundo do mar, resolver um sliding puzzle para recuperar cada artefacto, e voltar à oficina para reparar e abastecer. O jogo termina se todos os drones forem destruídos ou se o combustível do navio acabar.",
          en: "The player commands a ship with three underwater drones, alternating between strategic management at the surface and underwater exploration: descending the marine chasm while dodging rocks, animals and currents, collecting minerals and artifacts on the ocean floor, solving a sliding puzzle to recover each artifact, and returning to the workshop to repair and refuel. The game ends if all drones are destroyed or the ship runs out of fuel.",
        },
      },
      {
        kind: { pt: "o processo", en: "the process" },
        title: { pt: "Quatro etapas incrementais", en: "Four incremental stages" },
        body: {
          pt: "O projeto foi entregue em quatro etapas: primeiro o modelo de dados (jogo, navio, drones, grelhas e elementos), depois a máquina de estados que gere o fluxo do jogo, a seguir a interface gráfica em JavaFX sobre arquitetura MVC, e por fim o polimento — segunda janela sincronizada, sistema de som, redimensionamento proporcional, testes unitários e Javadoc.",
          en: "The project was delivered in four stages: first the data model (game, ship, drones, grids and elements), then the state machine driving the game flow, then the JavaFX interface on an MVC architecture, and finally the polish — a second synchronized window, sound system, proportional resizing, unit tests and Javadoc.",
        },
      },
      {
        kind: { pt: "o resultado", en: "the result" },
        title: { pt: "Entregue completo: 94/100", en: "Delivered complete: 94/100" },
        body: {
          pt: "Todas as etapas entregues, com 18 classes de testes unitários a cobrir estados, modelo de dados, grelhas e puzzle, e relatório final com diagramas de classes e de estados.",
          en: "All stages delivered, with 18 unit-test classes covering states, data model, grids and puzzle, plus a final report with class and state diagrams.",
        },
      },
    ],
    build: [
      {
        title: { pt: "Máquina de estados (FSM)", en: "Finite State Machine (FSM)" },
        body: {
          pt: "O fluxo do jogo vive numa FSM com oito estados concretos — superfície, descida, fosso, fundo, subida, puzzle, oficina e fim de jogo — geridos por um contexto com transições controladas.",
          en: "The game flow lives in an FSM with eight concrete states — surface, descent, chasm, floor, ascent, puzzle, workshop and game over — managed by a context with controlled transitions.",
        },
      },
      {
        title: { pt: "MVC + Observer", en: "MVC + Observer" },
        body: {
          pt: "A interface JavaFX nunca toca no modelo diretamente: um manager (Facade) expõe uma API simplificada e notifica as views por PropertyChangeSupport — é isso que permite ter duas janelas sincronizadas sobre o mesmo jogo.",
          en: "The JavaFX interface never touches the model directly: a manager (Facade) exposes a simplified API and notifies the views via PropertyChangeSupport — which is what makes two synchronized windows over the same game possible.",
        },
      },
      {
        title: { pt: "Sete padrões de design", en: "Seven design patterns" },
        body: {
          pt: "FSM/State, Factory Method (instanciação dos estados), Observer, Singleton (log central), Facade, Multiton (carregamento de imagens) e Adapter (comportamento por omissão dos estados).",
          en: "FSM/State, Factory Method (state instantiation), Observer, Singleton (central log), Facade, Multiton (image loading) and Adapter (default state behaviour).",
        },
      },
      {
        title: { pt: "Testes e build", en: "Tests and build" },
        body: {
          pt: "18 classes de testes unitários em JUnit 5 e build gerido com Maven.",
          en: "18 unit-test classes in JUnit 5 and a Maven-managed build.",
        },
      },
    ],
  },
  {
    id: "4inline",
    title: "4 in Line · Special",
    slug: "4-in-line",
    year: "2025",
    role: { pt: "Trabalho universitário · Grupo de 2", en: "University project · Team of 2" },
    summary: {
      pt: "Versão estendida do Connect-Four desenvolvida em React na cadeira de Linguagens e Sistemas. Inclui modos especiais e modo single-player contra o computador, jogável no browser.",
      en: "Extended version of Connect-Four built with React for the Languages and Systems course. Includes special modes and a single-player mode against the computer, playable in the browser.",
    },
    tagline: {
      pt: "Connect-Four, mas com regras a sério.",
      en: "Connect-Four, with real rules this time.",
    },
    tags: ["React", "JavaScript", "CSS"],
    metrics: [
      { label: { pt: "modos de jogo", en: "game modes" }, value: "3" },
      { label: { pt: "nota final", en: "final grade" }, value: "92 / 100" },
    ],
    accent: "#FFB454",
    featured: "tall",
    status: "published",
    github: "https://github.com/DiogoFSP/LS-4-em-linha-Especial",
    demo: null,
    course: "Linguagens e Sistemas · ISEC",
    team: ["Diogo Pinto", "Rafael Marques"],
    story: [
      {
        kind: { pt: "o desafio", en: "the challenge" },
        title: { pt: "Connect-Four com regras especiais", en: "Connect-Four with special rules" },
        body: {
          pt: "Construir uma versão estendida do clássico quatro em linha para a cadeira de Linguagens e Sistemas: além do modo clássico, o jogo inclui modos especiais que mudam as regras — e um modo single-player contra o computador.",
          en: "Build an extended version of the classic Connect-Four for the Languages and Systems course: beyond the classic mode, the game includes special modes that change the rules — plus a single-player mode against the computer.",
        },
      },
      {
        kind: { pt: "o resultado", en: "the result" },
        title: { pt: "Jogável no browser: 92/100", en: "Playable in the browser: 92/100" },
        body: {
          pt: "Interface construída em React com a lógica de jogo em JavaScript, entregue em grupo de dois com nota final de 92/100.",
          en: "Interface built in React with the game logic in JavaScript, delivered as a team of two with a final grade of 92/100.",
        },
      },
    ],
  },
];
