-- CreateTable
CREATE TABLE "View" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessionId" TEXT NOT NULL,
    "contentMetaId" INTEGER,

    CONSTRAINT "View_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "View" ADD CONSTRAINT "View_contentMetaId_fkey" FOREIGN KEY ("contentMetaId") REFERENCES "ContentMeta"("id") ON DELETE CASCADE ON UPDATE CASCADE;
