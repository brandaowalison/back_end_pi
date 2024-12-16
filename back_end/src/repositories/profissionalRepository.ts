import { AppDataSource } from "../db/data-source";
import { Profissional } from "../models/Profissional";


class ProfissionalRepository {
    profissionalRepository = AppDataSource.getRepository(Profissional);

    async save(profissional: Profissional): Promise<Profissional> {
        try {
            this.profissionalRepository.save(profissional);
            return profissional;
        } catch (err) {
            throw new Error("Falha ao criar cadastro do Profissional!");
        }
    }

    async retrieveAll(): Promise<Array<Profissional>> {
        try {
            return this.profissionalRepository.find();
        } catch (error) {
            throw new Error("Falha ao retornar Profissional!");
        }
    }

    async retrieveById(profissionalId: number): Promise<Profissional | null> {
        try {
            return this.profissionalRepository.findOneBy({
                idProfissional: profissionalId
            });
        } catch (error) {
            throw new Error("Falha ao buscar um Profissional!");
        }
    }

    async retrieveByNome(n: string): Promise<Profissional | null> {
        try {
            return this.profissionalRepository.findOneBy({
                nome: n,
            });
        } catch (error) {
            throw new Error("Falha ao buscar um Profissional!");
        }
    }

    async update(profissional: Profissional) {
        const { idProfissional, nome, CPF, email, sexo, salario, data_Nasc } = profissional;
        try {
            this.profissionalRepository.save(profissional);
        } catch (error) {
            throw new Error("Falha ao atualizar o Profissional!");
        }
    }

    async delete(profissionalId: number): Promise<number> {
        try {
            const profissionalEncontrado = await this.profissionalRepository.findOneBy({
                idProfissional: profissionalId,
            });
            if (profissionalEncontrado) {
                this.profissionalRepository.delete(profissionalEncontrado);
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar Profissional!");
        }
    }

    async deleteAll(): Promise<number> {
        try {
            let num = this.profissionalRepository.query("select count(id_profissional) from profissional;");
            this.profissionalRepository.query("delete from profissional;");
            return num;
        } catch (error) {
            throw new Error("Falha ao deletar todos os Profissionais!");
        }
    }

}

export default new ProfissionalRepository();