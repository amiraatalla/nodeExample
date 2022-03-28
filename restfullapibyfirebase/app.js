const { response } = require('express')
var express = require('express')
var FCM = require('fcm-node')
var app = express()
var port = process.env.port || 8000

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//fcm end point
app.post('/fcm', async (req, res, next) => {
    try {
        let fcm = new FCM(process.env.SERVER_KEY)
        let message = {
            to: '/topics/' + req.body.topic,
            notification: {
                title: req.body.title,
                body: req.body.body,
                sound: 'default',
                "click_action": "FCM_PLUGIN_ACTIVITY",
                "icon": "fcm_push_icon",
            },
            data: req.body.data
        }
        console.log("m", message)
        fcm.send(message, (response,err) => {
            if (err) {
                next(err);
            } else {
                res.json(response)
            }
        })

    } catch (error) {
        next(error)
    }

})