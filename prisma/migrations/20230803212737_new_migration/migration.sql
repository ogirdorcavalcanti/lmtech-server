/*
  Warnings:

  - You are about to drop the column `defeito` on the `Aparelhos` table. All the data in the column will be lost.
  - You are about to drop the column `observacao` on the `Aparelhos` table. All the data in the column will be lost.
  - Added the required column `equipamento` to the `Aparelhos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numerodeSerie` to the `Aparelhos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `observacaoRecebimento` to the `Aparelhos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `problema` to the `Aparelhos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataEntrada` to the `Ordens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataPrevista` to the `Ordens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataSaida` to the `Ordens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroOs` to the `Ordens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `observacaoInterna` to the `Ordens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `observacaoServico` to the `Ordens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalOrdem` to the `Ordens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPecas` to the `Ordens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalServicos` to the `Ordens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorFrete` to the `Ordens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Aparelhos" DROP COLUMN "defeito",
DROP COLUMN "observacao",
ADD COLUMN     "equipamento" TEXT NOT NULL,
ADD COLUMN     "numerodeSerie" TEXT NOT NULL,
ADD COLUMN     "observacaoRecebimento" TEXT NOT NULL,
ADD COLUMN     "problema" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Ordens" ADD COLUMN     "dataEntrada" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dataPrevista" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dataSaida" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "numeroOs" TEXT NOT NULL,
ADD COLUMN     "observacaoInterna" TEXT NOT NULL,
ADD COLUMN     "observacaoServico" TEXT NOT NULL,
ADD COLUMN     "totalOrdem" TEXT NOT NULL,
ADD COLUMN     "totalPecas" TEXT NOT NULL,
ADD COLUMN     "totalServicos" TEXT NOT NULL,
ADD COLUMN     "valorFrete" TEXT NOT NULL;
