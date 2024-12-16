import { AppDataSource } from "../db/data-source";
import { Especialidade } from "../models/Especialidade";


class EspecialidadeRepository {
    especialidadeRepository = AppDataSource.getRepository(Especialidade);

    async save(especialidade: Especialidade): Promise<Especialidade> {
        try {
            const savedEspecialidade = await this.especialidadeRepository.save(especialidade);
            return savedEspecialidade;
        } catch (err) {
        
            throw new Error("Falha ao criar uma Especialidade!");
        }
    }

    async retrieveAll(): Promise<Array<Especialidade>> {
        try {
            return this.especialidadeRepository.find();
        } catch (error) {
            throw new Error("Falha ao retornar uma Especialidade!");
        }
    }

    async retrieveById(especialidadeId: number): Promise<Especialidade | null> {
        try {
            return this.especialidadeRepository.findOneBy({
                idEspecialidade: especialidadeId
            });
        } catch (error) {
            throw new Error("Falha ao buscar uma Especialidade!");
        }
    }

    async retrieveByNome(n: string): Promise<Especialidade | null> {
        try {
            return this.especialidadeRepository.findOneBy({
                nome: n,
            });
        } catch (error) {
            throw new Error("Falha ao buscar uma Especialidade!");
        }
    }

    async update(especialidade: Especialidade) {
        const { idEspecialidade, nome, precoBase, descricao } = especialidade;
        try {
            this.especialidadeRepository.save(especialidade);
        } catch (error) {
            throw new Error("Falha ao atualizar uma Especialidade!");
        }
    }

    async delete(especialidadeId: number): Promise<number> {
        try {
            const especialidadeEncontrada = await this.especialidadeRepository.findOneBy({
                idEspecialidade: especialidadeId,
            });
            if (especialidadeEncontrada) {
                this.especialidadeRepository.delete(especialidadeEncontrada);
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar a Especialidade!");
        }
    }

    async deleteAll(): Promise<number> {
        try {
            let num = this.especialidadeRepository.query("select count(idEspecialidade) from especialidade;");
            this.especialidadeRepository.query("delete from especialidade;");
            return num;
        } catch (error) {
            throw new Error("Falha ao deletar todas as especialidades!");
        }
    }

}

export default new EspecialidadeRepository();