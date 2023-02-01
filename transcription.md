Hello, my name is Nazarii and today I will present Firebase to you.

On the slide, Google introduces us to Firebase on YouTube. On that channel we can find official videos about new features and a lot of information about product from Google.

On the next slide we can see traditional app development structure.
If you going to get from Zero to App you probably start building this:
Your mobile client makes REST calls to an application server.
Your application server handles all the hard pieces like Authentication.
But you still need to store app data, so your server has to talk to a database.

Firebase has several core features that allow you to do same but easier and faster:
A realtime database that stores and syncs JSON data in milliseconds.
Coupled with a serverless authentication system that handles complex social auth flows and session management with ease.
And new feature, a highly scalable file storage solution that lets you upload petabytes of user generated content.

Here I have small guide how to start work with Firebase for JavaScript App.
First of all, we need to Create Firebase Project.

1. In the Firebase console, click Add project
2. If prompted, review and accept the Firebase terms.
3. Click Continue.
4. (Optional) Set up Google Analytics for your project.
5. Click Create project.

Secondary, register your app.

1. In the center of the Firebase console's project overview page, click the Web icon (plat_web) to launch the setup workflow.
2. Enter your app's nickname. This nickname is an internal, convenience identifier and is only visible to you in the Firebase console.
3. Click Register app.
4. Follow the on-screen instructions to add and initialize the Firebase SDK in your app.

And finally, install the SDK and initialize Firebase

1. Install Firebase using npm.
2. Initialize Firebase in your app and create a Firebase App object.

After these simple steps we could access Firebase in our App.
More information how to start work with Firebase you could find at the official documentation.

And now I want to go back to first main feature of Firebase: Realtime Database.

It is a cloud hosted JSON database, which means that it's just a tree of values. This allows for very flexible data modelling.
Here is the data model as example for chat app.
As you can see we have a top-level chat node.
Under that we have chat messages and for each of those, we have a name and the actual content of the message.

But Realtime Database is not a regular request/response database, it synchronizes in realtime.
Instead of asking for the value at a location, we say: tell me whenever the value at this location changes.
With that: whenever any client makes a change, that change is synchronized to all connected clients within milliseconds.
This is the original magic of Firebase.

Next feature of Firebase is Authentication.
We need an authentication system to personalize this experience and also to provide some security to the system.
So, let’s get our users signed in.

You can get your users signed-in very fast without requiring you to know anything about how authentication works, by using Firebase Auth.

With Firebase, you can sign your users in with multiple options.
No matter if your users use Facebook, Github or email and passwords, Firebase always create a user record for that user with a single unique id across all accounts, like what you see pictured at the bottom of the slide.
Also, users can have more than one sign-in mechanism linked to their account.

Session management.
For your users, signing in is a pain. If you ask them to sign in every certain time they come into your application, one day they may decide not come back.
At the same time, if a user’s device is stolen, they will want to ensure that their session is revoked.
This is very tricky to handle. However, Firebase now does it automatically for you without you having to write any code.

Password resets.
Your users will forget their passwords. Handling this is a pain, you have to send them an email, with a one-time code, and then host some user interface to have them reset it.
Firebase has APIs to help you do this very easily, including sending emails on your behalf and optionally hosting a website so your users can reset their password no matter which device they are in.

Firebase also allow you to use anonymous accounts. For example, you can have users add items to their shopping cart, without having to sign in.
Then when they want to check out, they can sign in and we will upgrade their account without you having to move any data around.

And last but not least: Storage.
What about pictures, video and other media?
That's where Firebase Storage comes in.

With this new feature, you can select an image, set the filename, and upload it!
But wait … isn't there already something for that? Something called Google Cloud Storage?
Yes. And behind the scenes, Firebase uses Google Cloud Storage.
This means you automatically get crazy scale at the same price.
And you can also integrate with other parts of Google Cloud Platform.
By using the Firebase, you get integration with other Firebase services and you don't have to run your own server-side code.

This allows you to focus on developing new features to share images, videos, audio or documents.
You can even perform application data backups for your users.

Firebase will help you deal with user access.
By default, it checks if your users are logged in with Firebase Authentication.
But you can configure who can read and write to which files and folders.
You can make it so that each user can only write files to their own folder, or set it so that only images smaller than 1MB can be written.

Firebase will also handle network failures, and continue uploads when you get connected again …

to make sure your files get to Firebase Storage so that you can share content across your app.

Firebase is a suite of integrated products designed to help you develop your app, grow a user base and earn money.
Firebase products are backed by Google infrastructure, so Firebase scales with as you scale.

Thank you very much for your time!
