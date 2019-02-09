function FindProxyForURL(url, host)
{
	if(
		dnsDomainIs(host,"avlyun.org")||
		dnsDomainIs(host,"avlyun.com")||
		dnsDomainIs(host,"google.com")||
		dnsDomainIs(host,"facebook.com")
		)return "SOCKS 127.0.0.1:24000";
	else
		return "DIRECT";
}
