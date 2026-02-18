
-- Create community posts table (public, no auth required)
CREATE TABLE public.community_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  occupation TEXT NOT NULL,
  message TEXT NOT NULL,
  likes INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS but allow public access
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read posts
CREATE POLICY "Anyone can read community posts"
  ON public.community_posts FOR SELECT
  USING (true);

-- Allow anyone to insert posts
CREATE POLICY "Anyone can create community posts"
  ON public.community_posts FOR INSERT
  WITH CHECK (true);

-- Allow anyone to update likes
CREATE POLICY "Anyone can update community post likes"
  ON public.community_posts FOR UPDATE
  USING (true)
  WITH CHECK (true);
