# Learning day

## About me 

Jorg Thuijls  
@_jorgt  
jorg@dalraesolutions.com.au

## Presentation

### Intro
- Thanks for the invite
- Background and interest in tech
- Several types of innovation
- This innovation is more about using existing technology in creative ways

### About CAP
- SAP's new development framework
- Most frameworks do API, or ORM but not both. 
- CAP generates DB and API from same definitions, and deals with delta's
- CAP Core goes open source
- CAP Core AFAIK will include the Postgres plugin by default

### About Supabase
- Bit of firebase history
- Bit of Supabase history 
- How it works
    - Postgres
    - API from all public tables
    - Security definers 
- Walkthrough of supabase dashboard
- Explain SB local development
- Show CLI and Docker

### About the project
- Chats, so messages and channels
- I ran cds init, supabase init
- Installed supabase, cds-pg 

### Into the CODE
- Show CAP project
- Show package.json, vcap-services
- Show the schema and the service

### CODE WALKTHROUGH

#### 1. AUTH
 
##### IN INDEX FILE
- Show INDEX file, show successful call to $metadata
- Show `signIn` function and `onAuthChanged` function
- Demonstrate what happens, click inbucket link
- Show local storage and cookies

##### IN CDS
- Show cookie parser, log cookie in middleware
- Show middleware with supabase verification, and log user object
- Show `lib/auth` and use user object to create a CDS USER

##### SHOW LOGOUT COOKIE
- Show signout function in index, show cookie clearing in CDS
- Log out and show the 401 

#### 2. REALTIME
- Log back in
- Show snippet for subscription 
- Call `createMessage`
- Show web socket throughput 
- Show database entry

### Thoughts and how CAP & Supabase work together
- CAP can use Postgres
- There's overlap
- Supabase does not do migrations as well (there's a CLI)
- Postgres policies can be tricky to set up and debug
- CAP does not have persistence
- Both generate a very usable API. One does ODATA and GraphQL, the other JSON and GraphQL
