-- Create RLS policies for Mensajes table
-- Allow anyone to insert contact messages (public contact form)
CREATE POLICY "Anyone can insert messages"
ON public."Mensajes"
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only service role can read messages (for admin access)
-- Regular users should not be able to read messages
CREATE POLICY "Only service role can read messages"
ON public."Mensajes"
FOR SELECT
TO service_role
USING (true);

-- Prevent updates and deletes from all users
-- Messages should be immutable once created
CREATE POLICY "Prevent updates"
ON public."Mensajes"
FOR UPDATE
TO anon, authenticated
USING (false);

CREATE POLICY "Prevent deletes"
ON public."Mensajes"
FOR DELETE
TO anon, authenticated
USING (false);