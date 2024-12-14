import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
  import { Profissional } from './Profissional';
  import { Especialidade } from './Especialidade';
  
  @Entity('ProfissionalEspecialidade')
  export class ProfissionalEspecialidade {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @ManyToOne(() => Profissional, (profissional) => profissional.profissionalEspecialidades)
    profissional!: Profissional;
  
    @ManyToOne(() => Especialidade, (especialidade) => especialidade.profissionalEspecialidades)
    especialidade!: Especialidade;
  
    @Column({ length: 100 })
    certificado: string;
  
    @Column({ length: 20 })
    nivel_Experiencia: string;
  
    constructor(certificado: string, nivel_Experiencia: string) {
      this.certificado = certificado;
      this.nivel_Experiencia = nivel_Experiencia;
    }
  }
  