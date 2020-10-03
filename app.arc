@app
begin-app

@http
get /

@scheduled
ping rate(1 minute)

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
