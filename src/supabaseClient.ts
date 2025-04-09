import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://nveecmxhxaxnyqfebnth.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52ZWVjbXhoeGF4bnlxZmVibnRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1NjIwMTMsImV4cCI6MjA1OTEzODAxM30.dt3VL8pAXrSevZvx_w-2UT4QbUKZH0yrtd6ODjkCJGA";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);