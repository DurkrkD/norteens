/* ============================================================
   NORTEENS · Banco de dados das profissões
   ------------------------------------------------------------
   Aqui ficam TODAS as informações de cada profissão, separadas
   do código do site. Para adicionar uma profissão nova, copie um
   bloco abaixo, cole no final (antes do });) e troque os dados.

   Campos:
   - nome            → título da profissão
   - icone           → ícone principal: "code" | "health" | "design" | "law" | "brain"
   - descricao       → descrição e rotina
   - formacao        → caminhos de formação
   - tecnicas        → lista de habilidades técnicas
   - comportamentais → texto de habilidades comportamentais
   - salario         → faixa de salário médio
   - regioes         → lista de regiões com mais vagas
   - ferramentas     → lista de ferramentas usadas
   - famosos         → lista de referências: { nome, bio }

   Obs.: este é o mesmo conteúdo de um arquivo .json. Está em .js
   apenas para funcionar ao abrir o site direto no navegador.
   Para o Base44/servidor, é só salvar o objeto abaixo como .json.
   ============================================================ */

const PROFISSOES = {

  "eng-computacao": {
    nome: "Engenharia de Computação",
    icone: "code",
    descricao: "Projeta e desenvolve sistemas que unem software e hardware — de aplicativos e sites a dispositivos e automações. O dia a dia mistura programação, resolução de problemas, testes e trabalho em equipe, com muito raciocínio lógico e aprendizado constante.",
    formacao: "Graduação em Engenharia da Computação, Ciência da Computação ou áreas afins. Cursos técnicos e bootcamps também abrem portas.",
    tecnicas: ["Lógica", "Programação", "Banco de dados", "Redes", "Algoritmos"],
    comportamentais: "Resolução de problemas, atenção ao detalhe, comunicação, trabalho em equipe e curiosidade para aprender sempre.",
    salario: "R$ 5.000 – R$ 8.000",
    regioes: ["São Paulo", "Rio de Janeiro", "Curitiba", "Florianópolis", "Remoto"],
    ferramentas: ["VS Code", "Git", "Python", "Docker", "Figma"],
    famosos: [
      { nome: "Ada Lovelace", bio: "Pioneira da programação." },
      { nome: "Alan Turing", bio: "Um dos pais da computação." },
      { nome: "Grace Hopper", bio: "Criou o primeiro compilador." },
      { nome: "Linus Torvalds", bio: "Criador do Linux." }
    ]
  },

  "medicina": {
    nome: "Medicina",
    icone: "health",
    descricao: "Cuida da saúde das pessoas: previne, diagnostica e trata doenças. A rotina envolve atendimento a pacientes, exames, estudo constante e decisões de responsabilidade, com forte contato humano.",
    formacao: "Graduação em Medicina (6 anos) e residência na especialidade escolhida. O estudo continua por toda a carreira.",
    tecnicas: ["Anatomia", "Diagnóstico", "Farmacologia", "Procedimentos clínicos", "Análise de exames"],
    comportamentais: "Empatia, atenção ao detalhe, controle emocional, comunicação e capacidade de decidir sob pressão.",
    salario: "R$ 8.000 – R$ 15.000",
    regioes: ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Interior", "Todo o país"],
    ferramentas: ["Estetoscópio", "Prontuário eletrônico", "Equipamentos de exame", "Protocolos clínicos"],
    famosos: [
      { nome: "Hipócrates", bio: "Considerado o pai da medicina." },
      { nome: "Drauzio Varella", bio: "Médico e divulgador da saúde." },
      { nome: "Zilda Arns", bio: "Pediatra e sanitarista brasileira." },
      { nome: "Adib Jatene", bio: "Cardiologista de referência." }
    ]
  },

  "design": {
    nome: "Design",
    icone: "design",
    descricao: "Cria soluções visuais e experiências que comunicam e resolvem problemas — de identidades de marca a telas de aplicativos. Trabalho criativo, com pesquisa, testes e muito uso de referências e ferramentas visuais.",
    formacao: "Graduação em Design, Design Gráfico ou Design Digital. Cursos livres e um bom portfólio contam muito.",
    tecnicas: ["Tipografia", "Teoria das cores", "UI/UX", "Composição", "Prototipagem"],
    comportamentais: "Criatividade, sensibilidade estética, comunicação, abertura a feedback e organização.",
    salario: "R$ 3.500 – R$ 7.000",
    regioes: ["São Paulo", "Rio de Janeiro", "Remoto", "Freelance", "Startups"],
    ferramentas: ["Figma", "Photoshop", "Illustrator", "InDesign", "Canva"],
    famosos: [
      { nome: "Paul Rand", bio: "Designer de logos icônicos." },
      { nome: "Massimo Vignelli", bio: "Mestre do design gráfico." },
      { nome: "Alexandre Wollner", bio: "Pioneiro do design brasileiro." },
      { nome: "Jony Ive", bio: "Design dos produtos da Apple." }
    ]
  },

  "direito": {
    nome: "Direito",
    icone: "law",
    descricao: "Aplica e interpreta as leis para defender direitos, resolver conflitos e orientar pessoas e empresas. A rotina envolve muita leitura, redação, análise de casos e argumentação.",
    formacao: "Graduação em Direito (5 anos) e aprovação no exame da OAB para advogar.",
    tecnicas: ["Interpretação da lei", "Redação jurídica", "Análise de casos", "Argumentação", "Pesquisa"],
    comportamentais: "Raciocínio crítico, comunicação, ética, organização e atenção ao detalhe.",
    salario: "R$ 4.000 – R$ 9.000",
    regioes: ["São Paulo", "Brasília", "Rio de Janeiro", "Capitais", "Todo o país"],
    ferramentas: ["Vade Mecum", "Sistemas de processo", "Bancos de jurisprudência", "Editor de texto"],
    famosos: [
      { nome: "Ruth Bader Ginsburg", bio: "Juíza histórica da Suprema Corte dos EUA." },
      { nome: "Nelson Mandela", bio: "Advogado e líder pela justiça." },
      { nome: "Rui Barbosa", bio: "Jurista brasileiro célebre." },
      { nome: "Joaquim Barbosa", bio: "Jurista e ex-ministro do STF." }
    ]
  },

  "psicologia": {
    nome: "Psicologia",
    icone: "brain",
    descricao: "Estuda o comportamento e as emoções para ajudar pessoas a lidarem melhor com a vida. A rotina pode envolver atendimento, escuta, avaliações e acompanhamento, com muito contato humano.",
    formacao: "Graduação em Psicologia (5 anos). As especializações definem a área de atuação.",
    tecnicas: ["Escuta ativa", "Avaliação psicológica", "Técnicas terapêuticas", "Observação", "Análise de comportamento"],
    comportamentais: "Empatia, paciência, ética, comunicação e equilíbrio emocional.",
    salario: "R$ 3.000 – R$ 6.000",
    regioes: ["São Paulo", "Capitais", "Clínicas", "Remoto", "Todo o país"],
    ferramentas: ["Testes psicológicos", "Prontuário", "Materiais terapêuticos", "Teleatendimento"],
    famosos: [
      { nome: "Sigmund Freud", bio: "Pai da psicanálise." },
      { nome: "Carl Jung", bio: "Criador da psicologia analítica." },
      { nome: "Jean Piaget", bio: "Estudou o desenvolvimento infantil." },
      { nome: "Nise da Silveira", bio: "Psiquiatra brasileira pioneira." }
    ]
  }

};
