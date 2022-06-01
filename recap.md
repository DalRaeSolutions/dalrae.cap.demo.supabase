# RECAP 2022

1. INTRO
2. SUPABASE INTRO & WALKTHROUGH
3. VSCODE, CAP APPLICATION AS IT IS WITH AUTH
4. SUPABASE CLI AND DOCKER
5. CDS-PG
6. AUTH TIME: SHOW INDEX FILE, NO EVENT, 401
    1. SHOW SUPABASE METHODS IN INDEX
    2. SIGN IN, SHOW EVENT, SHOW LOCAL STORAGE & COOKIE
7. SHOW COOKIE PARSER, LOG COOKIE TO CONSOLE
8. SHOW COOKIE FULL, DECODE AND PASS TO AUTH
9. SHOW LOGOUT
10. SHOW REALTIME, LOG MESSAGE THROUGH BUTTON. SHOW WEBSOCKET IN CONSOLE
11. PROS AND CONS
12. TIME? TRY TO FIND CHAT

# Intro 

- I’m Jorg, tech lead at DalRae Solutions
- Sadly not wearing reCAP hoodie
- Set expectations regarding level of knowledge: have seen the hello world and awareness of Postgres plugin

# Supabase intro

- Firebase: NoSQL database, authentication, file storage, real time comms
- Supabase, built around open source add ons for Postgres, and the idea of Row Level Security
- Show Dashboard 

# Show Live App

http://localhost:59824
http://localhost:50378/

- Put email address in one window, open inbucket and click link
- Watch both tabs log on to app
- Put message in one app and watch it appear in the other as well

# Switch to VSCode

- Show CAP application, 
- Show schema and service

# Talk about local setup and cli 

- Show Supabase folder
- Explain SB start, show output of secrets and url’s 
- Show Docker

# CODE WALKTHROUGH

# Talk about CDS-PG
- Mention it’s not a CDS-PG demo
- Show package.json and default-env 

# AUTH
 
# IN INDEX FILE
- Show INDEX file, show successful call to $metadata
- Show `signIn` function and `onAuthChanged` function
- Demonstrate what happens, click inbucket link
- Show local storage and cookies

# IN CDS
- Show cookie parser, log cookie in middleware
- Show middleware with supabase verification, and log user object
- Show `lib/auth` and use user object to create a CDS USER

# SHOW LOGOUT COOKIE
- Show signout function in index, show cookie clearing in CDS
- Log out and show the 401 

# REAL TIME
- Log back in
- Show snippet for subscription 
- Call `createMessage`
- Show web socket throughput 
- Show database entry


# Pros and cons 
- Easy and quick. 
- User management and statistics 
- Mix and match features such as real-time and storage with Fiori elements UIs. Bit of a choose your own adventure 
    - In this case, auth and realtime through client, could be done on server as well
- Supabase more of a SAAS back end
- Can host multiple apps due to Postgres schema, is like hdi container. 
- Potential for multi-tenanted apps, reuse and compose 

# CONTACT:

Jorg Thuijls
@_jorgt
jorg@dalraesolutions.com.au
