export const profile = {
  name: 'Zachary Whelan',
  tagline: 'Finance, Investment Research & Applied AI',
  blurb: 'PPE graduate from Durham University, First Class Honours.',
  email: 'zachary.whelan4203@yahoo.co.uk',
  linkedin: 'https://www.linkedin.com/in/zachary-whelan-23604zw/',
  cv: '/cv.pdf',
  photo: '/images/profile.jpg',
}

export const nav = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
]

export const education = [
  {
    school: 'Durham University',
    detail: 'BA (Hons) Philosophy, Politics, and Economics',
    meta: 'Sept. 2022 – Jul. 2026',
    points: [
      'Graduated with First Class Honours.',
      'Notable modules: Economic Methods, Macro Application and Policy, Principles of Economics.',
    ],
  },
  {
    school: 'Aarhus University',
    detail: 'Business School — Year Abroad',
    meta: 'Sept. 2024 – Jun. 2025',
    points: [
      'Focused on Applied Finance, portfolio theory, capital budgeting, and risk-return analysis.',
      'Used Excel for financial modelling, scenario analysis, and valuation case studies; explored GenAI integration in business contexts.',
    ],
  },
  {
    school: 'Hampton School',
    detail: 'A-Levels & GCSEs',
    meta: 'Sept. 2014 – Jun. 2021',
    points: [
      'A-levels: Mathematics (A*), Economics (A*), Politics (A*), AS Level Art (A).',
      'GCSEs: 10 A*s and 1 A, including Further Maths.',
    ],
  },
]

export const experience = [
  {
    org: 'Pictet Asset Management',
    role: 'Work Experience',
    location: 'London, UK',
    meta: 'Jul. 2025 – Aug. 2025',
    points: [
      'Based primarily with the Total Return team, working with two hedge fund strategies (Atlas and Consumer), gaining exposure to long-short equity in the consumer discretionary sector.',
      'Analysed 8+ analyst reports during Diageo earnings season and discussed differing investment views with equity analysts; used Bloomberg to support a written investment summary.',
      'Completed a rotation across 10 investment teams — including Multi-Asset, Fixed Income, GEM, Trading, CPM, Sales and ESG — building a cross-functional view of the investment process.',
      'Observed portfolio construction discussions across teams and how investment ideas are communicated internally and to clients.',
    ],
  },
  {
    org: 'The Championships, Wimbledon (AELTC)',
    role: 'Retail Stock Team Leader',
    location: 'London, UK',
    meta: 'Jun. 2024 – Jul. 2025',
    points: [
      'Promoted to Team Leader a year early; supervised a team of 10 in the Centre Court Shop.',
      "Coordinated 100+ daily inventory replenishments, led briefings, and delegated tasks during one of the UK's most prestigious events.",
    ],
  },
  {
    org: 'Camp Dudley',
    role: 'Summer Camp Counsellor',
    location: 'New York, USA',
    meta: 'Jul. 2019 – Aug. 2023',
    points: [
      'Led daily activities for a cabin of 10 boys, planning and executing programs across four summers while developing leadership skills.',
    ],
  },
  {
    org: 'Vail Resorts',
    role: 'Professional Ski and Snowboard Instructor',
    location: 'Colorado, USA',
    meta: 'Nov. 2021 – Apr. 2022',
    points: [
      'Relocated independently to the US at 18; earned PSIA Level 1 certification and attracted pro-deals with The North Face and Helly Hansen.',
      'Achieved a 70% repeat client rate through tailored lesson plans for groups of 10–12.',
      'Demonstrated resilience working 15-day streaks in demanding conditions.',
    ],
  },
  {
    org: 'The River Café',
    role: 'Waiter',
    location: 'London, UK',
    meta: 'Aug. 2021 – Nov. 2021',
    points: [
      'Served 50–70 high-profile clients per shift in a Michelin-star restaurant.',
      'Collaborated closely with a 15-person front-of-house team.',
    ],
  },
]

export const projects = [
  {
    id: 'zach-terminal',
    title: 'Zach-Terminal',
    subtitle: 'Personal Bloomberg-style trading terminal',
    meta: '2026 — Ongoing',
    flagship: true,
    tools: ['Python', 'Textual (TUI)', 'Pandas', 'Claude API', 'yfinance', 'Market Data APIs'],
    points: [
      'Built a full terminal-UI investment dashboard from scratch, run entirely in-terminal with mouse and keyboard support — six pages covering live ISA portfolio tracking, an EM watchlist, global ticker search, a macro dashboard (yield curves, world indices, FX), a filtered news reader, and a live US options chain.',
      'Designed an 11-signal scorecard (RSI, MACD, moving-average crosses, valuation multiples, growth, analyst consensus) to systematically flag opportunities across holdings and watchlist names.',
      'Automated a daily AI-written morning briefing: a scheduled job pulls live prices, macro data and five news feeds every weekday before market open, uses the Claude API to write story-specific macro analysis, a fresh analyst note per EM holding, and a full editorial "Position" section synthesising the day\'s news and numbers — then emails the formatted briefing automatically.',
      'Layered on an autonomous trading/signal engine with its own risk controls, on top of the manual-refresh dashboard.',
    ],
    links: [],
    gallery: [
      { src: '/images/zach-terminal/portfolio.png', alt: 'Live ISA portfolio tracking' },
      { src: '/images/zach-terminal/watchlist.png', alt: 'EM watchlist with live chart' },
      { src: '/images/zach-terminal/search.png', alt: 'Ticker search with 11-signal scorecard for AAPL' },
      { src: '/images/zach-terminal/macro.png', alt: 'Macro dashboard — yields, world indices, FX' },
      { src: '/images/zach-terminal/news.png', alt: 'Global Markets news tab' },
      { src: '/images/zach-terminal/option.png', alt: 'Options chain for a US-listed ticker' },
    ],
  },
  {
    id: 'em-equities',
    title: 'EM Equities Paper-Trading Experiment',
    subtitle: 'Independent stock-picking experiment',
    meta: '2025 — Ongoing',
    tools: ['Equity Research', 'Bloomberg', 'Paper Trading'],
    points: [
      'Running a paper-trading account tracking a small, highly selective basket of individual emerging-market stocks — deliberately concentrated rather than a diversified portfolio.',
      'A personal test of independent stock-picking judgement, informed by exposure to GEM investing during a rotation at Pictet Asset Management.',
    ],
    links: [],
  },
  {
    id: 'dissertation',
    title: 'PPE Dissertation',
    subtitle: 'The Illusion of Consensus: Cultural Cognition and the Polarising Role of Scientific Literacy in EU Nuclear Attitudes',
    meta: '2025 – 2026 · Durham University',
    tools: ['Python', 'statsmodels', 'Logistic Regression', 'Eurobarometer Survey Data'],
    points: [
      'Tested whether the "Information Deficit Model" (more scientific literacy → more support for nuclear energy) or "Cultural Cognition" theory (literacy amplifies existing ideological divides) better explains EU nuclear attitudes, using Special Eurobarometer 516 (N = 29,990, all 27 member states).',
      'Built clustered logistic regression and OLS models in Python with country fixed effects, isolating the independent effect of scientific literacy, political ideology, gender, age and education.',
      'Key finding: scientific literacy alone has no effect on nuclear support — but interacted with political ideology, it sharply polarises opinion, increasing support among right-leaning respondents while decreasing it among left-leaning respondents (b = 0.033, p < 0.001), a textbook cultural-cognition crossover.',
      'Gender emerged as the single largest individual-level predictor (+8.9 percentage points), ahead of ideology and well ahead of scientific literacy.',
      'Awarded a First.',
    ],
    links: [],
  },
  {
    id: 'wealth-projector',
    title: 'Wealth Projector & Financial Dashboard',
    subtitle: 'Interactive compound-growth calculator',
    meta: 'Jan. 2026',
    tools: ['JavaScript', 'Chart.js', 'HTML/CSS'],
    points: [
      'Responsive compound interest calculator with real-time graphical visualisation.',
      'Inflation-adjustment toggle and a dynamic year-on-year breakdown table.',
    ],
    links: [{ label: 'Launch Live Tool', href: 'https://zacharywhelan.github.io/compound-growth/' }],
  },
  {
    id: 'spotify-genai',
    title: 'Spotify Playlist Generator',
    subtitle: 'Generative AI applied project',
    meta: 'Aug. 2024 – Dec. 2024',
    tools: ['Python', 'Spotify API', 'GenAI'],
    points: [
      'Built a custom playlist generator combining 35+ structured input options with free-text descriptions to produce personalised playlists.',
      'Coordinated with 4 teammates on interface design and integration; ran user testing to improve usability.',
    ],
    links: [],
  },
  {
    id: 'nlp-diplomatic',
    title: 'NLP Diplomatic Analysis',
    subtitle: 'Text mining research',
    meta: 'Nov. 2023 – May 2024',
    tools: ['LLMs', 'NLP', 'Excel'],
    points: [
      'Analysed 200+ documents on Turkish-Armenian diplomatic relations using an LLM’s NLP capabilities.',
      'Performed sentiment and rhetoric analysis to identify key diplomatic trends, structuring findings in Excel.',
    ],
    links: [],
  },
]
