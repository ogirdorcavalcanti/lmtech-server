/*
  Warnings:

  - The primary key for the `Aparelhos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Clientes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Ordens` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Servicos` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Aparelhos" DROP CONSTRAINT "Aparelhos_clientesId_fkey";

-- DropForeignKey
ALTER TABLE "Ordens" DROP CONSTRAINT "Ordens_aparelhosId_fkey";

-- AlterTable
ALTER TABLE "Aparelhos" DROP CONSTRAINT "Aparelhos_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "clientesId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Aparelhos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Aparelhos_id_seq";

-- AlterTable
ALTER TABLE "Clientes" DROP CONSTRAINT "Clientes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Clientes_id_seq";

-- AlterTable
ALTER TABLE "Ordens" DROP CONSTRAINT "Ordens_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "aparelhosId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Ordens_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Ordens_id_seq";

-- AlterTable
ALTER TABLE "Servicos" DROP CONSTRAINT "Servicos_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Servicos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Servicos_id_seq";

-- AddForeignKey
ALTER TABLE "Aparelhos" ADD CONSTRAINT "Aparelhos_clientesId_fkey" FOREIGN KEY ("clientesId") REFERENCES "Clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ordens" ADD CONSTRAINT "Ordens_aparelhosId_fkey" FOREIGN KEY ("aparelhosId") REFERENCES "Aparelhos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
