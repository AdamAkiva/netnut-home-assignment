## Home assignment for netnut.io fullstack developer:

### What I've managed to do with the time I had:

1. Desktop UI - Almost done
2. Database design - Done

### What remains to be done:

1. Mobile UI
2. Validation (Front & Back)
3. API routes design
4. Containerization
5. Deployment

### The ideas I have how to on how to add the missing features which I couldn't due to

time constraints:

1. Mobile UI - Reuse the assets and have a different layout for the relevant
   screen size
2. Validation - On the frontend use the basic html validation and on the server-side
   use zod to validate the request payload
3. API routes - Implement using swagger which has the following options:

   - `/submissions` - POST contains user & plan data
   - `/plans` - GET all available plans (including the available addons)
   - `/submissions` - GET all users submission (paginated)
   - `/submissions/{userEmail}` - GET user submissions (by email since it is unique, can also by by id)

4. Done multiple of those, while at work and personal projects. Didn't have the
   time.
5. Need to research it but didn't have the time

In order to add/update/remove plans & addons one may add the corresponding routes,
but for the current use case I think it is enough

### Personal notes

I know this is not a lot but I did have real-life constraints which only gave me
around 10 hours in total to work on the application.  
If you have the time and the will, I do suggest going to my personal project(s)
to see what I can do when I have the time:

1. https://github.com/AdamAkiva/movie-reservation-system/tree/dev
2. https://github.com/AdamAkiva/dashboard
