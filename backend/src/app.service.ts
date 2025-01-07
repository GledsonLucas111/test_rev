import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { Bank } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async findUnique(compensation: number) {
    try {
      const result = await this.prisma.bank.findUnique({
        where: { compensation: Number(compensation) },
      });

      if (!result) {
        throw new BadRequestException(
          `Nenhum banco encontrado com o código de compensação: ${compensation}`,
        );
      }

      return result;
    } catch (error: any) {
      console.error(
        'Erro ao buscar banco por código de compensação:',
        error.message,
      );
      throw new BadRequestException(
        'Erro ao buscar banco. Por favor, tente novamente mais tarde.',
      );
    }
  }

  async findAll(): Promise<Bank[]> {
    return this.prisma.bank.findMany();
  }
}
