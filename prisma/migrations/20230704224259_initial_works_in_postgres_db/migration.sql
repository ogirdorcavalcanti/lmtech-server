-- CreateTable
CREATE TABLE "Clientes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sobreNome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cel" INTEGER NOT NULL,
    "observacao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aparelhos" (
    "id" SERIAL NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "memoria" TEXT NOT NULL,
    "hd" INTEGER NOT NULL,
    "placaMae" INTEGER NOT NULL,
    "carregador" BOOLEAN NOT NULL,
    "bateria" BOOLEAN NOT NULL,
    "clientesId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Aparelhos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ordens" (
    "id" SERIAL NOT NULL,
    "conclusao" TEXT NOT NULL,
    "aparelhosId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ordens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servicos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Servicos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Clientes_email_key" ON "Clientes"("email");

-- AddForeignKey
ALTER TABLE "Aparelhos" ADD CONSTRAINT "Aparelhos_clientesId_fkey" FOREIGN KEY ("clientesId") REFERENCES "Clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ordens" ADD CONSTRAINT "Ordens_aparelhosId_fkey" FOREIGN KEY ("aparelhosId") REFERENCES "Aparelhos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
