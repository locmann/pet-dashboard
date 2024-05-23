import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://niruknwamgqkfvgfxzlh.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pcnVrbndhbWdxa2Z2Z2Z4emxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyMTkwNjksImV4cCI6MjAzMTc5NTA2OX0.Qpm6eirYc0TEXkPNxcy6gCvhqTSxOc5Gw3bd4knSi-Y';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
