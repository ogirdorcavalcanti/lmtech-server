-- CreateTable
CREATE TABLE "Clientes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sobreNome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cel" TEXT NOT NULL,
    "observacao" TEXT NOT NULL,
    "aparelhosId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aparelhos" (
    "id" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "memoria" TEXT NOT NULL,
    "hd" TEXT NOT NULL,
    "placaMae" TEXT NOT NULL,
    "carregador" BOOLEAN NOT NULL,
    "bateria" BOOLEAN NOT NULL,
    "caracteristicas" TEXT NOT NULL,
    "defeito" TEXT NOT NULL,
    "observacao" TEXT NOT NULL,
    "clientesId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Aparelhos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ordens" (
    "id" TEXT NOT NULL,
    "Counter" SERIAL NOT NULL,
    "conclusao" TEXT NOT NULL,
    "aparelhosId" TEXT,
    "clientesId" TEXT,
    "servicosId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ordens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servicos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Servicos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Clientes_email_key" ON "Clientes"("email");

-- AddForeignKey
ALTER TABLE "Clientes" ADD CONSTRAINT "Clientes_aparelhosId_fkey" FOREIGN KEY ("aparelhosId") REFERENCES "Aparelhos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ordens" ADD CONSTRAINT "Ordens_aparelhosId_fkey" FOREIGN KEY ("aparelhosId") REFERENCES "Aparelhos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ordens" ADD CONSTRAINT "Ordens_clientesId_fkey" FOREIGN KEY ("clientesId") REFERENCES "Clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ordens" ADD CONSTRAINT "Ordens_servicosId_fkey" FOREIGN KEY ("servicosId") REFERENCES "Servicos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
