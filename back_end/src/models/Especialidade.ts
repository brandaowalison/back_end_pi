import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
  } from 'typeorm';
  import { ProfissionalEspecialidade } from './ProfissionalEspecialidade';
  
  @Entity('Especialidades')
  export class Especialidade {
    @PrimaryGeneratedColumn()
    id_Especialidade: number;
  
    @Column({ length: 45 })
    nome: string;
  
    @Column('decimal', { precision: 7, scale: 2 })
    preco_Base: number;
  
    @Column({ length: 45 })
    descricao: string;
  
    @OneToMany(
      () => ProfissionalEspecialidade,
      (profissionalEspecialidade) => profissionalEspecialidade.especialidade,
    )
    profissionalEspecialidades: ProfissionalEspecialidade[];
  
    constructor(nome: string, preco_Base: number, descricao: string) {
      this.nome = nome;
      this.preco_Base = preco_Base;
      this.descricao = descricao;
    }
  }
  