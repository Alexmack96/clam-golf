#!/bin/sh
# nginx does not consult /etc/resolv.conf for runtime lookups, so a proxy_pass
# built from a variable needs an explicit resolver to reach *.railway.internal.
# Copy whatever nameserver the platform gave the container into http context.
set -e

nameserver=$(awk '/^nameserver/ { print $2; exit }' /etc/resolv.conf)
[ -n "$nameserver" ] || exit 0

# Bracket IPv6 addresses — legacy Railway environments resolve IPv6 only.
case "$nameserver" in
  *:*) nameserver="[$nameserver]" ;;
esac

echo "resolver $nameserver valid=10s ipv6=on;" >/etc/nginx/conf.d/resolver.conf
