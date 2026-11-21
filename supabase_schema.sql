-- ==============================================================================
-- GOKULAVASAN CINEMATIC PORTFOLIO - SUPABASE DATABASE SCHEMA & POLICIES
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create Site Profile Table
CREATE TABLE IF NOT EXISTS public.site_profile (
    id TEXT PRIMARY KEY DEFAULT 'main',
    content JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Create Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT,
    thumbnail TEXT NOT NULL,
    video_url TEXT,
    drive_id TEXT,
    drive_view_url TEXT,
    media_type TEXT CHECK (media_type IN ('video', 'image')) DEFAULT 'video',
    date TEXT,
    featured BOOLEAN DEFAULT false,
    credits TEXT,
    tags TEXT[],
    client_or_channel TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.site_profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- 5. Public Read Access (Anyone can view portfolio content)
CREATE POLICY "Allow public read access on site_profile" 
    ON public.site_profile 
    FOR SELECT 
    USING (true);

CREATE POLICY "Allow public read access on projects" 
    ON public.projects 
    FOR SELECT 
    USING (true);

-- 6. Authenticated / Service Role Write Access (For Admin management)
CREATE POLICY "Allow authenticated users full access on site_profile" 
    ON public.site_profile 
    FOR ALL 
    TO authenticated 
    USING (true) 
    WITH CHECK (true);

CREATE POLICY "Allow authenticated users full access on projects" 
    ON public.projects 
    FOR ALL 
    TO authenticated 
    USING (true) 
    WITH CHECK (true);

-- 7. Storage Bucket Setup (Run in Supabase SQL editor or create in dashboard)
-- Insert storage bucket for portfolio media
INSERT INTO storage.buckets (id, name, public) 
VALUES ('portfolio-media', 'portfolio-media', true)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS Policies
CREATE POLICY "Public Read Access for Portfolio Media"
    ON storage.objects 
    FOR SELECT
    USING (bucket_id = 'portfolio-media');

CREATE POLICY "Authenticated Upload Access for Portfolio Media"
    ON storage.objects 
    FOR INSERT 
    TO authenticated 
    WITH CHECK (bucket_id = 'portfolio-media');

CREATE POLICY "Authenticated Update/Delete for Portfolio Media"
    ON storage.objects 
    FOR ALL 
    TO authenticated 
    USING (bucket_id = 'portfolio-media');
