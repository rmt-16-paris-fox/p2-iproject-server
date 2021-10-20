const { google } = require('googleapis')

const { OAuth2 } = google.auth

const oAuth2Client =  new OAuth2(process.env.GCAL_CLIENTID, process.env.GCAL_CLIENTSECRET)

oAuth2Client.setCredentials({refresh_token: process.env.GCAL_OAUTHREFRESHTKN})

const calendar = google.calendar({
    version: 'v3',
    auth: oAuth2Client
})

function setCalendar (params) {
    
const eventStartTime = new Date(params.time)

const eventEndTime = new Date(params.time)

const event = {
    summary: `Watch Footbal Match`,
    location: `Anywhere`,
    description: `${params.description}`,
    colorId: 1,
    start: {
      dateTime: eventStartTime,
      timeZone: 'Asia/Jakarta',
    },
    end: {
      dateTime: eventEndTime,
      timeZone: 'Asia/Jakarta',
    },
    reminders: {
        "useDefault": false,
        "overrides": [
            {
              "method": "popup",
              "minutes": 60
            },
        ]
    },
    attendees: [
        {
          "email": `${params.email}`,
        }
      ],
  }

  calendar.events.insert(
    { calendarId: 'primary', resource: event },
    err => {
      if (err){
          console.error('Error Creating Calender Event:', err)
        }else{
            console.log('Calendar event successfully created.')
        }
    }
  )
}

module.exports = setCalendar
