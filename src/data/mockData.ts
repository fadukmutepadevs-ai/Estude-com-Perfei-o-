import { Opportunity, AdmissionExam, CourseInfo, StudyTip } from '../types';

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: 'bolsa-ibe-2026',
    category: 'bolsas',
    categoryLabel: 'Bolsas de Estudo',
    title: 'Bolsas de Estudo Nacionais IBE 2026/2027',
    summary: 'O Instituto de Bolsas de Estudo de Moçambique abriu candidaturas para bolsas completas e reduzidas para o ensino superior público.',
    fullContent: 'O Instituto de Bolsas de Estudo (IBE) de Moçambique anuncia a abertura do concurso de bolsas de estudo internas para os cursos de Licenciatura nas instituições públicas de ensino superior (UEM, UP, UniLicungo, UniZambeze, UniRovuma e UniLúrio). O programa prioriza estudantes de comprovada carência financeira com excelente aproveitamento acadêmico na 12ª classe.',
    deadline: '15 de Abril de 2026',
    date: '10 de Março de 2026',
    institution: 'IBE Moçambique',
    location: 'Nacional (Todas as Províncias)',
    benefits: [
      'Subsídio mensal para alojamento e alimentação',
      'Isenção total de propinas e taxas de matrícula',
      'Apoio anual para material bibliográfico e didático'
    ],
    requirements: [
      'Nacionalidade moçambicana',
      'Certificado de conclusão da 12ª classe com média mínima de 14 valores',
      'Atestado de pobreza emitido pela autoridade local ou estrutura de bairro',
      'Idade máxima de 25 anos no ato da candidatura'
    ],
    linkText: 'Consultar Edital Completo',
    featured: true,
  },
  {
    id: 'bolsa-camoes-2026',
    category: 'bolsas',
    categoryLabel: 'Bolsas Internacionais',
    title: 'Programa de Bolsas Camões / Cooperação Portuguesa',
    summary: 'Bolsas para licenciatura e pós-graduação em instituições de ensino superior em Portugal e Moçambique.',
    fullContent: 'O Camões - Instituto da Cooperação e da Língua, I.P. disponibiliza vagas para estudantes moçambicanos nas áreas de Ciências da Saúde, Engenharia e Gestão Pública, promovendo a capacitação de quadros técnicos nacionais.',
    deadline: '30 de Maio de 2026',
    date: '02 de Março de 2026',
    institution: 'Embaixada de Portugal / Camões I.P.',
    location: 'Maputo / Portugal',
    benefits: [
      'Passagem aérea internacional de ida e volta',
      'Subsídio mensal de subsistência em euros',
      'Seguro de saúde e cobertura médica integral'
    ],
    requirements: [
      'Média de conclusão igual ou superior a 15 valores',
      'Carta de motivação estruturada',
      'Duas cartas de recomendação acadêmica'
    ],
    linkText: 'Ver Detalhes e Formulário',
  },
  {
    id: 'concurso-programacao-mz',
    category: 'concursos',
    categoryLabel: 'Concursos & Desafios',
    title: 'Olimpíada Moçambicana de Informática & Algoritmos 2026',
    summary: 'Desafio para estudantes do ensino secundário e universitário com prémios em computadores e estágios práticos.',
    fullContent: 'A competição anual visa descobrir jovens talentos em programação de software, inteligência artificial e resolução de problemas lógicos em Moçambique. Participação individual ou em equipas de até 3 estudantes.',
    deadline: '20 de Julho de 2026',
    date: '18 de Fevereiro de 2026',
    institution: 'Comunidade MozTech & Universidades',
    location: 'Online / Finais presenciais em Maputo',
    benefits: [
      '1º Lugar: Laptop de alto desempenho + Estágio remunerado',
      'Cursos certificados de desenvolvimento web e mobile',
      'Menção honrosa e troféu nacional'
    ],
    requirements: [
      'Estudantes matriculados na 10ª, 11ª, 12ª classe ou 1º/2º ano universitário',
      'Conhecimento básico em Python, C++, Java ou JavaScript'
    ],
    linkText: 'Inscrever Equipa',
  },
  {
    id: 'feira-profissoes-2026',
    category: 'universidades',
    categoryLabel: 'Universidades & Eventos',
    title: 'Feira Nacional das Profissões e Orientação Vocacional',
    summary: 'Conheça de perto as faculdades da UEM, UP, UniLicungo e saiba as tendências de empregabilidade no país.',
    fullContent: 'Evento anual aberto a todos os pré-universitários para esclarecer dúvidas sobre os planos curriculares, custos, corpo docente e saídas profissionais dos cursos mais procurados em Moçambique.',
    deadline: 'Entrada Gratuita',
    date: '25 de Março de 2026',
    institution: 'Consórcio Universitário Moçambicano',
    location: 'Centro Cultural Universitário UEM (Maputo) + Transmissão Online',
    benefits: [
      'Palestras com docentes e profissionais de destaque',
      'Sessões gratuitas de testes vocacionais',
      'Guia impresso de cursos e notas de corte históricas'
    ],
    requirements: [
      'Aberto ao público em geral, pré-universitários e encarregados de educação'
    ],
    linkText: 'Aceder à Programação',
  },
  {
    id: 'bolsa-china-csc-2026',
    category: 'bolsas',
    categoryLabel: 'Bolsas Internacionais',
    title: 'Bolsas do Governo Chinês (CSC) para Moçambicanos',
    summary: 'Oportunidades de graduação e pós-graduação totalmente financiadas em universidades de ponta na China.',
    fullContent: 'O Conselho de Bolsas da China (CSC) em parceria com o Ministério da Ciência, Tecnologia e Ensino Superior de Moçambique oferece bolsas para cursos lecionados em inglês e mandarim.',
    deadline: '10 de Janeiro de 2027',
    date: '15 de Janeiro de 2026',
    institution: 'MCTES / Embaixada da China',
    location: 'Pequim, Xangai e Wuhan',
    benefits: [
      'Isenção total de propinas e taxas académicas',
      'Alojamento universitário gratuito no campus',
      'Estipêndio mensal para despesas de vida'
    ],
    requirements: [
      'Certificado de 12ª classe autenticado',
      'Atestado médico internacional de robustez física',
      'Registo criminal limpo'
    ],
    linkText: 'Aceder às Instruções',
  },
  {
    id: 'concurso-ensaios-literarios',
    category: 'concursos',
    categoryLabel: 'Concursos & Desafios',
    title: 'Concurso Nacional de Ensaios Juvenis sobre Literatura Moçambicana',
    summary: 'Concurso em homenagem a José Craveirinha e Noémia de Sousa com publicação de textos e bolsas de estudo.',
    fullContent: 'Iniciativa voltada para promover o hábito da leitura, escrita analítica e preservação da identidade cultural entre a juventude estudantil moçambicana.',
    deadline: '30 de Junho de 2026',
    date: '10 de Fevereiro de 2026',
    institution: 'Associação dos Escritores Moçambicanos (AEMO)',
    location: 'Nacional',
    benefits: [
      'Publicação da antologia de ensaios vencedores',
      'Prémio monetário de 50.000 MT para o 1º colocado',
      'Kit completo de livros de literatura lusófona'
    ],
    requirements: [
      'Jovens moçambicanos entre 15 e 24 anos',
      'Ensaio original e inédito de 3 a 5 páginas'
    ],
    linkText: 'Regulamento do Concurso',
  }
];

export const ADMISSION_EXAMS: AdmissionExam[] = [
  {
    id: 'uem-matematica-2025',
    university: 'UEM',
    universityFullName: 'Universidade Eduardo Mondlane',
    subject: 'Matemática',
    year: 2025,
    durationMinutes: 120,
    totalQuestions: 60,
    description: 'Exame de Admissão de Matemática para as Faculdades de Engenharia, Ciências, Economia e Arquitetura.',
    hasSolutions: true,
    downloadFileName: 'Exame_Matematica_UEM_2025_Resolvido.pdf',
    tips: [
      'Foque em Funções (exponencial, logarítmica e trigonométrica)',
      'Pratique Geometria Plana e Espacial com rapidez',
      'Gerencie o tempo: média de 2 minutos por questão'
    ],
    sampleQuestions: [
      {
        number: 1,
        question: 'Qual é o domínio da função real f(x) = √(2x - 6) / (x - 5)?',
        options: [
          'A) x ≥ 3',
          'B) x > 3 e x ≠ 5',
          'C) [3, +∞[ \\ {5}',
          'D) ]-∞, 3] ∪ ]5, +∞['
        ],
        correctOptionIndex: 2,
        explanation: 'Para que a raiz quadrada seja real em ℝ, devemos ter 2x - 6 ≥ 0 ⇒ 2x ≥ 6 ⇒ x ≥ 3. Para o denominador não anular, x - 5 ≠ 0 ⇒ x ≠ 5. Logo, D = [3, +∞[ \\ {5}.'
      },
      {
        number: 2,
        question: 'O valor do limite lim (x→0) [sin(4x) / (2x)] é igual a:',
        options: [
          'A) 0',
          'B) 1',
          'C) 2',
          'D) 4'
        ],
        correctOptionIndex: 2,
        explanation: 'Usando o limite fundamental lim (u→0) [sin(u)/u] = 1: lim [sin(4x)/(2x)] = lim [(sin(4x)/(4x)) * (4x/(2x))] = 1 * 2 = 2.'
      },
      {
        number: 3,
        question: 'Uma progressão geométrica (P.G.) tem o primeiro termo a₁ = 3 e a razão q = 2. A soma dos 6 primeiros termos é:',
        options: [
          'A) 189',
          'B) 96',
          'C) 192',
          'D) 63'
        ],
        correctOptionIndex: 0,
        explanation: 'Fórmula da soma da P.G.: S_n = a₁(q^n - 1) / (q - 1). Para n=6: S₆ = 3(2⁶ - 1)/(2 - 1) = 3(64 - 1)/1 = 3 * 63 = 189.'
      }
    ]
  },
  {
    id: 'unilicungo-portugues-2024',
    university: 'UniLicungo',
    universityFullName: 'Universidade Licungo',
    subject: 'Português',
    year: 2024,
    durationMinutes: 120,
    totalQuestions: 60,
    description: 'Exame de Admissão de Língua Portuguesa para os cursos de Educação, Letras, Comunicação e Direito.',
    hasSolutions: true,
    downloadFileName: 'Exame_Portugues_UniLicungo_2024_Gabarito.pdf',
    tips: [
      'Leia o texto introdutório com extrema atenção a figuras de estilo',
      'Reveja sintaxe de orações subordinadas e concordância verbal/nominal',
      'Atenção às classes morfológicas e formação de palavras'
    ],
    sampleQuestions: [
      {
        number: 1,
        question: 'Na frase: "Ainda que chovesse torrencialmente, os estudantes não faltaram à sessão de estudo", a oração sublinhada classifica-se como:',
        options: [
          'A) Subordinada adverbial causal',
          'B) Subordinada adverbial concessiva',
          'C) Subordinada adverbial condicional',
          'D) Coordenada explicativa'
        ],
        correctOptionIndex: 1,
        explanation: 'A locução conjuntiva "ainda que" introduz uma ideia de concessão (fato oposto que não impede a ação principal).'
      },
      {
        number: 2,
        question: 'No excerto: "O vento sussurrava segredos antigos nas árvores da savana", a figura de estilo presente é:',
        options: [
          'A) Metáfora pura',
          'B) Personificação (Prosopopeia)',
          'C) Hipérbole',
          'D) Eufemismo'
        ],
        correctOptionIndex: 1,
        explanation: 'Atribuir a capacidade humana de sussurrar ao vento constitui personificação ou prosopopeia.'
      }
    ]
  },
  {
    id: 'up-biologia-2024',
    university: 'UP',
    universityFullName: 'Universidade Pedagógica de Maputo',
    subject: 'Biologia',
    year: 2024,
    durationMinutes: 120,
    totalQuestions: 60,
    description: 'Exame de Biologia para os cursos de Ensino de Biologia, Ciências Naturais, Educação Física e Nutrição.',
    hasSolutions: true,
    downloadFileName: 'Exame_Biologia_UP_2024_Completo.pdf',
    tips: [
      'Revise Citologia (organelos e suas funções específicas)',
      'Atenção a Genética Mendeliana e quadros de Punnett',
      'Ecologia e ciclos biogeoquímicos são recorrentes'
    ],
    sampleQuestions: [
      {
        number: 1,
        question: 'Qual organelo celular é responsável pela síntese de ATP através da respiração celular?',
        options: [
          'A) Complexo de Golgi',
          'B) Mitocôndria',
          'C) Retículo Endoplasmático Liso',
          'D) Lisossomo'
        ],
        correctOptionIndex: 1,
        explanation: 'A mitocôndria é a central energética da célula eucariótica, onde ocorrem o ciclo de Krebs e a fosforilação oxidativa.'
      },
      {
        number: 2,
        question: 'No cruzamento entre dois indivíduos heterozigotos (Aa x Aa), a proporção fenotípica esperada com dominância completa é:',
        options: [
          'A) 1 : 2 : 1',
          'B) 3 : 1',
          'C) 1 : 1',
          'D) 9 : 3 : 3 : 1'
        ],
        correctOptionIndex: 1,
        explanation: 'A proporção fenotípica da 1ª Lei de Mendel para dominância completa em cruzamento de heterozigotos é 3 dominantes para 1 recessivo (3:1).'
      }
    ]
  },
  {
    id: 'uem-fisica-2024',
    university: 'UEM',
    universityFullName: 'Universidade Eduardo Mondlane',
    subject: 'Física',
    year: 2024,
    durationMinutes: 120,
    totalQuestions: 60,
    description: 'Exame de Física com foco em Mecânica Clássica, Termodinâmica, Eletromagnetismo e Óptica.',
    hasSolutions: true,
    downloadFileName: 'Exame_Fisica_UEM_2024_Resolucao.pdf',
    tips: [
      'Dominar as leis de Newton e conservação da quantidade de movimento',
      'Circuitos elétricos (Lei de Ohm e resistores em série/paralelo)',
      'Leis da Termodinâmica e calorimetria'
    ],
    sampleQuestions: [
      {
        number: 1,
        question: 'Um corpo de massa 4 kg é acelerado uniformemente a partir do repouso até atingir 20 m/s em 5 segundos. A força resultante aplicada vale:',
        options: [
          'A) 12 N',
          'B) 16 N',
          'C) 20 N',
          'D) 80 N'
        ],
        correctOptionIndex: 1,
        explanation: 'Aceleração a = Δv/Δt = (20 - 0)/5 = 4 m/s². Pela 2ª Lei de Newton: F = m * a = 4 kg * 4 m/s² = 16 N.'
      }
    ]
  },
  {
    id: 'unizambeze-quimica-2025',
    university: 'UniZambeze',
    universityFullName: 'Universidade Zambeze',
    subject: 'Química',
    year: 2025,
    durationMinutes: 120,
    totalQuestions: 60,
    description: 'Exame de Química para Faculdades de Ciências de Saúde, Engenharia Ambiental e Agronomia.',
    hasSolutions: true,
    downloadFileName: 'Exame_Quimica_UniZambeze_2025.pdf',
    tips: [
      'Estequiometria e cálculo molar',
      'Química orgânica: nomenclatura de funções oxigenadas e nitrogenadas',
      'Equilíbrio químico e cálculo de pH'
    ],
    sampleQuestions: [
      {
        number: 1,
        question: 'Qual é o pH de uma solução aquosa de ácido clorídrico (HCl) de concentração 0,001 mol/L?',
        options: [
          'A) 1',
          'B) 2',
          'C) 3',
          'D) 11'
        ],
        correctOptionIndex: 2,
        explanation: 'O HCl é ácido forte totalmente ionizado: [H⁺] = 0,001 = 10⁻³ mol/L. pH = -log[H⁺] = -log(10⁻³) = 3.'
      }
    ]
  },
  {
    id: 'unirovuma-historia-2024',
    university: 'UniRovuma',
    universityFullName: 'Universidade Rovuma',
    subject: 'História',
    year: 2024,
    durationMinutes: 120,
    totalQuestions: 60,
    description: 'Exame de História de Moçambique e História Universal para Ciências Sociais e Humanidades.',
    hasSolutions: true,
    downloadFileName: 'Exame_Historia_UniRovuma_2024.pdf',
    tips: [
      'Estados pré-coloniais em Moçambique (Monomotapa, Gaza, Estados Marave)',
      'Resistência à dominação colonial e a Luta de Libertação Nacional (FRELIMO)',
      'História de África e independência dos países africanos'
    ],
    sampleQuestions: [
      {
        number: 1,
        question: 'O Estado de Gaza, fundado por Sochangane (Manicusse), teve o seu declínio selado após a captura do imperador Ngungunhane em Chaimite no ano de:',
        options: [
          'A) 1885',
          'B) 1895',
          'C) 1902',
          'D) 1917'
        ],
        correctOptionIndex: 1,
        explanation: 'Ngungunhane foi capturado pelas forças coloniais portuguesas em 28 de Dezembro de 1895 em Chaimite.'
      }
    ]
  },
  {
    id: 'uem-portugues-2025',
    university: 'UEM',
    universityFullName: 'Universidade Eduardo Mondlane',
    subject: 'Português',
    year: 2025,
    durationMinutes: 120,
    totalQuestions: 60,
    description: 'Exame de Admissão de Português I e II para todas as faculdades de Humanidades, Direito e Economia.',
    hasSolutions: true,
    downloadFileName: 'Exame_Portugues_UEM_2025_Resolvido.pdf',
    tips: [
      'Interpretação textual de autores moçambicanos contemporâneos',
      'Articulação coesiva e conectores discursivos',
      'Regência verbal e emprego do pronome oblíquo'
    ],
    sampleQuestions: [
      {
        number: 1,
        question: 'Assinale a opção em que a regência do verbo "obedecer" está de acordo com a norma-padrão:',
        options: [
          'A) O candidato obedeceu o regulamento do exame.',
          'B) O candidato obedeceu ao regulamento do exame.',
          'C) O candidato obedeceu no regulamento do exame.',
          'D) O candidato obedeceu com o regulamento do exame.'
        ],
        correctOptionIndex: 1,
        explanation: 'O verbo obedecer é transitivo indireto e exige a preposição "a": obedecer a algo/alguém.'
      }
    ]
  }
];

export const COURSES_INFO: CourseInfo[] = [
  {
    id: 'eng-informatica',
    name: 'Engenharia Informática & Tecnologias',
    category: 'Informática',
    durationYears: 4,
    degree: 'Licenciatura',
    requiredExams: ['Matemática', 'Física ou Inglês'],
    mainInstitutions: ['UEM (Faculdade de Engenharia)', 'ISCTEM', 'UniZambeze', 'UniLicungo'],
    overview: 'Forma engenheiros de software, especialistas em redes, inteligência artificial e segurança cibernética capacitados para solucionar os desafios da transformação digital em Moçambique e no mundo.',
    careerPaths: [
      'Desenvolvedor Web e Mobile',
      'Engenheiro de Dados e IA',
      'Administrador de Redes e Cloud',
      'Consultor de Cibersegurança'
    ],
    averageDemand: 'Muito Alta'
  },
  {
    id: 'eng-civil',
    name: 'Engenharia Civil',
    category: 'Engenharia',
    durationYears: 5,
    degree: 'Licenciatura',
    requiredExams: ['Matemática', 'Física', 'Desenho'],
    mainInstitutions: ['UEM', 'UniZambeze (Tete)', 'ISCTEM', 'UniLúrio'],
    overview: 'Prepara profissionais para projetar, gerenciar e fiscalizar infraestruturas essenciais como edifícios, pontes, rodovias, portos e sistemas de abastecimento de água.',
    careerPaths: [
      'Diretor de Obras e Construção',
      'Engenheiro Calculista Estrutural',
      'Fiscal de Obras Públicas',
      'Especialista em Geotecnia e Vias de Comunicação'
    ],
    averageDemand: 'Alta'
  },
  {
    id: 'medicina-geral',
    name: 'Medicina Geral',
    category: 'Saúde',
    durationYears: 6,
    degree: 'Licenciatura',
    requiredExams: ['Biologia', 'Química'],
    mainInstitutions: ['UEM (Faculdade de Medicina)', 'UniLúrio (Nampula)', 'UniZambeze (Tete)', 'ISCTEM'],
    overview: 'Curso de excelência para formação de médicos clínicos dedicados à saúde pública, prevenção, diagnóstico e tratamento de patologias na rede hospitalar moçambicana.',
    careerPaths: [
      'Médico Clínico Geral',
      'Especialista em Saúde Comunitária',
      'Pesquisador Biomédico',
      'Gestor Hospitalar'
    ],
    averageDemand: 'Muito Alta'
  },
  {
    id: 'economia-gestao',
    name: 'Economia e Gestão de Empresas',
    category: 'Economia',
    durationYears: 4,
    degree: 'Licenciatura',
    requiredExams: ['Matemática', 'Português'],
    mainInstitutions: ['UEM (Faculdade de Economia)', 'UP Maputo', 'UniLicungo (Beira)', 'UniRovuma'],
    overview: 'Capacita líderes para atuar na análise macroeconómica, finanças corporativas, auditoria e gestão de micro e grandes organizações no mercado nacional.',
    careerPaths: [
      'Analista Financeiro e Bancário',
      'Gestor de Projetos e Investimentos',
      'Auditor e Consultor Fiscal',
      'Empreendedor'
    ],
    averageDemand: 'Alta'
  },
  {
    id: 'direito',
    name: 'Direito e Ciências Jurídicas',
    category: 'Direito & Sociais',
    durationYears: 4,
    degree: 'Licenciatura',
    requiredExams: ['Português', 'História ou Filosofia'],
    mainInstitutions: ['UEM (Faculdade de Direito)', 'UniLicungo', 'UniRovuma', 'ISCTEM', 'UP'],
    overview: 'Desenvolve sólidos conhecimentos do ordenamento jurídico moçambicano, direitos fundamentais, direito empresarial, penal e administrativo.',
    careerPaths: [
      'Advogado e Consultor Jurídico',
      'Magistrado Judicial ou do Ministério Público',
      'Assessor Jurídico em Empresas e ONGs',
      'Notário e Conservador'
    ],
    averageDemand: 'Muito Alta'
  },
  {
    id: 'ensino-matematica-fisica',
    name: 'Ensino de Matemática & Ciências',
    category: 'Educação',
    durationYears: 4,
    degree: 'Licenciatura',
    requiredExams: ['Matemática', 'Português'],
    mainInstitutions: ['UP Maputo', 'UniLicungo (Quelimane/Beira)', 'UniRovuma (Nampula)'],
    overview: 'Focado em metodologias modernas de ensino, didática e pedagogia para formar professores de alto nível para o Ensino Secundário e Médio Técnico.',
    careerPaths: [
      'Professor do Ensino Secundário e Médio',
      'Elaborador de Manuais Escolares e Currículos',
      'Supervisor e Inspetor Pedagógico',
      'Formador de Professores'
    ],
    averageDemand: 'Média'
  }
];

export const STUDY_TIPS: StudyTip[] = [
  {
    id: 'dica-exames-anteriores',
    title: 'Pratique com Exames dos Últimos 5 Anos',
    summary: 'A estrutura dos exames da UEM, UniLicungo e UP repete padrões conceituais. Resolver provas anteriores é a melhor forma de fixação.',
    steps: [
      'Baixe os exames dos últimos 3 a 5 anos da sua universidade pretendida',
      'Simule as 2 horas de prova sem interrupções nem uso do celular',
      'Identifique os conteúdos em que errou e faça fichas de revisão direcionadas'
    ],
    iconName: 'FileCheck'
  },
  {
    id: 'dica-cronograma',
    title: 'Crie um Cronograma de Estudos Realista',
    summary: 'Divida a sua semana entre as duas disciplinas nucleares do exame (Ex: Matemática + Física ou Biologia + Química).',
    steps: [
      'Estude 2 a 3 horas diárias com intervalos de 10 minutos (Técnica Pomodoro)',
      'Dedique mais 40% do tempo para a disciplina que você considera mais difícil',
      'Reserve os sábados de manhã para simulados práticos'
    ],
    iconName: 'Calendar'
  },
  {
    id: 'dica-conteudos-12a',
    title: 'Domine a Matriz da 11ª e 12ª Classe',
    summary: 'Cerca de 70% das perguntas dos exames de admissão em Moçambique baseiam-se nos programas oficiais da 11ª e 12ª classe.',
    steps: [
      'Consulte o programa oficial do Ministério da Educação (MINEDH)',
      'Não decore fórmulas: entenda a lógica e o significado de cada variável',
      'Crie resumos manuscritos para ativar a memória de longo prazo'
    ],
    iconName: 'BookOpen'
  },
  {
    id: 'dica-gestao-tempo',
    title: 'Gestão de Tempo no Dia da Prova',
    summary: 'Cada exame tem 60 perguntas de escolha múltipla para 120 minutos (2 minutos por questão).',
    steps: [
      'Faça uma primeira ronda respondendo às questões fáceis e diretas',
      'Não fique preso mais de 3 minutos na mesma questão: marque e avance',
      'Reserve 15 minutos finais para preencher a folha de respostas com precisão'
    ],
    iconName: 'Clock'
  }
];

export const UNIVERSITIES_LIST = [
  { name: 'UEM - Universidade Eduardo Mondlane', location: 'Maputo', type: 'Pública' },
  { name: 'UniLicungo - Universidade Licungo', location: 'Zambézia / Sofala', type: 'Pública' },
  { name: 'UP - Universidade Pedagógica de Maputo', location: 'Maputo', type: 'Pública' },
  { name: 'UniZambeze - Universidade Zambeze', location: 'Beira / Tete', type: 'Pública' },
  { name: 'UniRovuma - Universidade Rovuma', location: 'Nampula / Cabo Delgado', type: 'Pública' },
  { name: 'UniLúrio - Universidade Lúrio', location: 'Nampula / Pemba / Niassa', type: 'Pública' },
  { name: 'ISCTEM - Instituto Superior de Ciências e Tecnologia', location: 'Maputo', type: 'Privada' },
  { name: 'USTM - Universidade São Tomás de Moçambique', location: 'Maputo / Gaza', type: 'Privada' }
];
