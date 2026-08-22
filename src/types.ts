export type OpportunityCategory = 'bolsas' | 'concursos' | 'universidades' | 'noticias';

export interface Opportunity {
  id: string;
  category: OpportunityCategory;
  categoryLabel: string;
  title: string;
  summary: string;
  fullContent?: string;
  deadline?: string;
  date: string;
  institution?: string;
  location?: string;
  benefits?: string[];
  requirements?: string[];
  linkText?: string;
  featured?: boolean;
}

export type UniversityCode = 'UEM' | 'UniLicungo' | 'UP' | 'UniZambeze' | 'UniRovuma' | 'Outras';

export type SubjectName = 'Matemática' | 'Português' | 'Física' | 'Química' | 'Biologia' | 'História' | 'Geografia' | 'Inglês' | 'Filosofia' | 'Desenho';

export interface ExamQuestion {
  number: number;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export interface AdmissionExam {
  id: string;
  university: UniversityCode;
  universityFullName: string;
  subject: SubjectName;
  year: number;
  durationMinutes: number;
  totalQuestions: number;
  description: string;
  hasSolutions: boolean;
  sampleQuestions: ExamQuestion[];
  downloadFileName: string;
  tips: string[];
}

export interface CourseInfo {
  id: string;
  name: string;
  category: 'Informática' | 'Engenharia' | 'Economia' | 'Saúde' | 'Educação' | 'Direito & Sociais';
  durationYears: number;
  degree: 'Licenciatura' | 'Mestrado' | 'Técnico Superior';
  requiredExams: string[];
  mainInstitutions: string[];
  overview: string;
  careerPaths: string[];
  averageDemand: 'Muito Alta' | 'Alta' | 'Média';
}

export interface StudyTip {
  id: string;
  title: string;
  summary: string;
  steps: string[];
  iconName: string;
}
