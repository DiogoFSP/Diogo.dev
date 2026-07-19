-- ============================================================================
-- MIGRAÇÃO: galeria de imagens dos projetos (correr uma vez no SQL Editor)
-- ============================================================================

-- lista de URLs das imagens da galeria (null = projeto sem galeria);
-- os ficheiros vivem no bucket "thumbs", que já tem as políticas certas
alter table public.projects add column gallery jsonb;
