TODO: Fix Sign In so that upon sucess, it saves the JWT and navigates to the next route.

# Front End Sections
### Auth: for Login and Registering new Users.
### Collections: for Picking the note to work on, or starting a new one.
### Note: for the actual note UI.

### Routing around from Auth to App
1. Upon Registration User navigates to Login.
2. Upon Login user navigates to Collections
3. Upon Picking a Collection user Navigates to the Note.
4. From Note the User can either:
    * Navigate back to Collections
    * Exit the Note without Saving it
    * Save the Note and Continue Working in it
    * Log Out