# RECAP 2022

## Intro 

- I’m Jorg, tech lead at DalRae Solutions
- Set expectations regarding level of knowledge: have seen the hello world and awareness of Postgres plugin

## CONTACT:

Jorg Thuijls  
@_jorgt  
jorg@dalraesolutions.com.au  

## Supabase intro

- Firebase: NoSQL database, authentication, file storage, real time comms
- Supabase, built around open source add ons for Postgres, and the idea of Row Level Security
- Show Dashboard 

## Switch to VSCode

- Show CAP application, 
- Show schema and service

## Talk about local setup and cli 

- Show Supabase folder
- Explain SB start, show output of secrets and url’s 
- Show Docker

## CODE WALKTHROUGH

### 1. AUTH
 
#### IN INDEX FILE
- Show INDEX file, show successful call to $metadata
- Show `signIn` function and `onAuthChanged` function
- Demonstrate what happens, click inbucket link
- Show local storage and cookies

#### IN CDS
- Show cookie parser, log cookie in middleware
- Show middleware with supabase verification, and log user object
- Show `lib/auth` and use user object to create a CDS USER

#### SHOW LOGOUT COOKIE
- Show signout function in index, show cookie clearing in CDS
- Log out and show the 401 

### 2. REALTIME
- Log back in
- Show snippet for subscription 
- Call `createMessage`
- Show web socket throughput 
- Show database entry

## Talk about CDS-PG
- Mention it’s not a CDS-PG demo
- Show package.json and default-env 

## Thoughts
- Easy and quick. 
- User management and statistics 
- Mix and match features such as real-time and storage with Fiori elements UIs. Bit of a choose your own adventure 
    - In this case, auth and realtime through client, could be done on server as well
    - Supabase user can be augmented with custom claims, so it can be used for CAP authorisations as well
- Supabase more of a SAAS back end
- Can host multiple apps due to Postgres schema, is like hdi container. 
- Potential for multi-tenanted apps, reuse and compose 
