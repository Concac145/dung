const https = require("https")
const BASE_URL = 'wss://nepumajhiihqzpvuoqhr.supabase.co/realtime/v1/websocket?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcHVtYWpoaWlocXpwdnVvcWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyNzU5MTcsImV4cCI6MjEwMzg1MTkxN30.hZy4tids6Nvy8yvfdJe-lPifjJ6cgxGrcaGrlT3-nf4&vsn=1.0.0';
let connected = 0

const agent = new https.Agent({
  keepAlive: true,
  maxSockets: 100000,
  scheduling: 'fifo'
})

const clients = new Set()
let ref = 0

const sleep = async (m) => new Promise(r=>setTimeout(r,m))

setInterval(async () => {
  let i = 0
  for (const client of clients) {
    if (client.readyState === WebSocket.OPEN) {
      await sleep(i * 100)
      client.send(JSON.stringify({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: `${ref}`
      }))
    }
  }
  ref++
}, 20000)

const PushClient = () => {
    const uuid = crypto.randomUUID()
    const ws = new WebSocket(BASE_URL, {
        agent: agent,
        perMessageDeflate: false,
        maxPayload: 1024
    })

    ws.onopen = () => {
        connected++;

        const joinPayload = {
            "topic": "realtime:online-users",
            "event": "phx_join",
            "payload":{
                "config": {
                    "broadcast": {
                        "ack": false,
                        "self":false
                    },
                    "presence":{
                        "key": uuid,
                        "enabled":true
                    },
                    "postgres_changes": [],
                    "private":false
                }
            },
            "ref": `1`,
            "join_ref":"1"
        }

        const presencePay = {
            "topic": "realtime:online-users",
            "event": "presence",
            "payload": {
                "type": "presence",
                "event": "track",
                "payload": {
                    "online_at": new Date().toISOString()
                }
            },
            "ref": `2`,
            "join_ref":"1"
        }


        ws.send(JSON.stringify(joinPayload))
        ws.send(JSON.stringify(presencePay))

        clients.add(ws)
    }

    ws.onclose = () => {
        PushClient(connected++)
        clients.delete(ws)
    }
}

const MAX = 10_000
for (let i = 0; i < MAX; i++) setTimeout(() => PushClient(connected), i * 100)
