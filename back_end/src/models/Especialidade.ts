import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn } from 'typeorm';
import { Profissional } from './Profissional';

@Entity('Especialidades')
export class Especialidade {
  @PrimaryGeneratedColumn()
  idEspecialidade!: number;

  @Column({ length: 45 })
  nome!: string;

  @Column('decimal', { precision: 7, scale: 2 })
  precoBase: number;

  @Column({ length: 45 })
  descricao: string;

  @ManyToMany(() => Profissional)
  @JoinColumn({ name: 'Profissional_idProfissional' })
  profissionais!: Profissional[];

  constructor(nome: string, 
    precoBase: number, 
    descricao: 
    string,
    id? : number,
    profissionais?: Profissional[]) {
    this.nome = nome;
    this.precoBase = precoBase;
    this.descricao = descricao;
    if(id) this.idEspecialidade = id;
    if (profissionais) this.profissionais = profissionais
    }
}
