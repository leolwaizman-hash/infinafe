-- Run this in your Supabase SQL Editor
-- https://supabase.com/dashboard/project/_/sql

create table if not exists agent_actions (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz default now(),
  platform    text,                        -- zapier | make | n8n | lindy | custom
  action_type text,                        -- e.g. "send_email", "query_crm"
  payload     jsonb,                       -- the raw action data
  is_threat   boolean default false,
  threat_level text,                       -- low | medium | high | critical
  analysis    text,                        -- plain English from Claude
  blocked     boolean default false
);

alter table agent_actions enable row level security;

-- Allow anonymous inserts (from your webhook)
create policy "Allow anon insert" on agent_actions
  for insert to anon with check (true);

-- Allow anonymous reads (for dashboard)
create policy "Allow anon select" on agent_actions
  for select to anon using (true);
