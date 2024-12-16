import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Profissional } from './Profissional';

@Entity('Especialidades')
export class Especialidade {
  @PrimaryGeneratedColumn()
  idEspecialidade!: number;

  @Column({ length: 45 })
  nome!: string;

  @Column('decimal', { precision: 7, scale: 2 })
  precoBase!: number;

  @Column({ length: 45 })
  descricao!: string;

  @ManyToMany(() => Profissional,(profissional) => profissional.especialidades)
  profissionais!: Profissional;

  constructor(nome: string, 
    precoBase: number, 
    descricao: 
    string,) {
    this.nome = nome;
    this.precoBase = precoBase;
    this.descricao = descricao;
    }
}
