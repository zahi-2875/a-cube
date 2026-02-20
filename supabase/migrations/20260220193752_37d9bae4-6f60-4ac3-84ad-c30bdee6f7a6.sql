-- Allow deleting community posts (for admin use)
CREATE POLICY "Anyone can delete community posts"
ON public.community_posts
FOR DELETE
USING (true);
