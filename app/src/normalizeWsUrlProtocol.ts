export function normalizeWsUrlProtocol(url: string = "") {
  
  if (url.startsWith("ws://")) return url
  else if (url.startsWith("wss://")) return url
  else if (url.startsWith("http://")) return "ws://" + url.slice(7)
  else if (url.startsWith("https://")) return "wss://" + url.slice(8)
  else {
    if (!url.startsWith("/")) url = "/" + url
    try {
      return normalizeWsUrlProtocol(`${location.origin}${url}`)
    }
    catch(e) {
      throw new Error("Please provide a valid fully qualified url (starting with wss://). Got: " + url)
    }
    
  }
}


export default normalizeWsUrlProtocol
