@app
begin-app

@http
get /

@scheduled
backup rate(6 hours)

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
