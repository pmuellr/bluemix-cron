bluemix-cron
================================================================================

A sample application for bluemix that runs cron tasks.

This application runs a server which allows returns with the same response:

    this server runs cron jobs

So, the server doesn't really do anything useful.  It also runs two "cron jobs",
using the [npm cron package](https://www.npmjs.org/package/cron). One cron job
runs every 10 seconds, the other runs every 15 seconds.  Both jobs just
print the current time and a short message to stdout.



install
--------------------------------------------------------------------------------

Run the following commands to install this sample:

    git clone https://github.com/pmuellr/bluemix-cron.git
    cd bluemix-cron
    npm install



run locally
--------------------------------------------------------------------------------

Run the server with the command:

    node server

By default the server uses port 3000; to use a different one, set the PORT
environment variable:

    PORT=4000 node server

You should see messages printed to the console every 10 and 15 seconds, and
an HTTP server will be running at the default or specified port that doesn't
do much.



run on bluemix
--------------------------------------------------------------------------------

Install per the install directions above, then from within the `bluemix-cron`
directory, run

    cf push <app-name>

where `<app-name>` is the name you'd like to use for this application.

When the `cf push` completes, the application should have been uploaded,
staged, and started on bluemix.  You can go to the URL displayed in the
`cf push` output and see the same web page output as running locally.

You can get see the console logs with either of these commands:

    cf logs <app-name>
    cf files <app-name> logs/stdout.log

When you're done verifying this application work, you should stop it because
it's not doing anything useful:

    cf stop <app-name>



license
--------------------------------------------------------------------------------

Apache License, Verison 2.0

<http://www.apache.org/licenses/LICENSE-2.0.html>
