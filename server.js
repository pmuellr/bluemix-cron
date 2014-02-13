// Licensed under the Apache License. See footer for details.

var CronJob = require("cron").CronJob
var express = require("express")

// get the port to use as an HTTP server
var port = process.env.PORT || 3000

// set up and run the HTTP server
var app = express()

app.get("/", function(request, response){
    response.send("this server runs cron jobs")
})

console.log("running HTTP server on port " + port)
app.listen(port)

// set up cron jobs
console.log("setting up cron jobs")

new CronJob("*/10 * * * * *", everyXseconds(10), null, true)
new CronJob("*/15 * * * * *", everyXseconds(15), null, true)

//------------------------------------------------------------------------------
function everyXseconds(seconds) {
    return function() {
        console.log(new Date() + ": another " + seconds + " seconds have passed")
    }
}

//------------------------------------------------------------------------------
// Copyright 2014 Patrick Mueller
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//------------------------------------------------------------------------------
