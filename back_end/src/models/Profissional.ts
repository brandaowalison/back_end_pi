import { Entity, PrimaryGeneratedColumn, Column, ManyToMany,} from 'typeorm';
import { Especialidade } from './Especialidade';

@Entity('Profissionais')
export class Profissional {
  @PrimaryGeneratedColumn()
  idProfissional!: number;

  @Column({ length: 45 })
  nome: string;

  @Column({ length: 14 })
  CPF: string;

  @Column({ length: 45 })
  email: string;

  @Column({ length: 1 })
  sexo: string;

  @Column('decimal', { precision: 7, scale: 2 })
  salario: number;

  @Column('date')
  data_Nasc: Date;

  @ManyToMany(() => Especialidade,(Especialidade) => Especialidade.profissionais)
  especialidades!: Profissional;

  constructor( nome: string, 
    CPF: string, 
    email: string, 
    sexo: string, 
    salario: number, 
    data_Nasc: Date, ) 
  {
    this.nome = nome;
    this.CPF = CPF;
    this.email = email;
    this.sexo = sexo;
    this.salario = salario;
    this.data_Nasc = data_Nasc;
  }
}
