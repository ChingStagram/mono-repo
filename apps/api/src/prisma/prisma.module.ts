import { DynamicModule, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaController } from './prisma.controller';

@Module({})
export class PrismaModule {
  static register(): DynamicModule {
    return {
      module: PrismaModule,
      providers: [PrismaService],
      exports: [PrismaService],
      global: true,
    };
  }
}
