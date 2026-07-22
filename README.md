# Clam Golf

Golf tracker to help improve your game. Play rounds with friends and analyze your rounds together, and post about your rounds yoo.

## Stack

- **Web Client:** React 18 + React Router v6 + Tailwind v4 + shadcn/ui
- **IOS Client:** Swift
- **Android Client:** Kotlin
- **Server:** ASP Net Core Web API (.NET 10)
- **Auth:** WorkOS
- **Monorepo:** Bun workspaces (`server/`, `client/`, `core/`)

## Todo 18-Jul-2026
[] How big a piece of work is it to have react for web, and kotlin for android? whilst keeping same look and feel? Ballache? Should i use react native?
[] 
[] L - Migrate to .NET 10 backend
[] L - Migrate to WorkOS
[] L- Add toot hill and decouple from GPS to make ti one way click thru
[] M - Add friends concept within the users table
[] M - Maybe migrate GPS to google and pay for it if cheap
[] L - Scorecards update live for your friends in you decided to link a scorecard
[] add temperate to the shot calculator (C/F toggle option that auto converts whatever is in there now, default to 25 C) since all my tracxkm an numbers i think are based on 25 degrees, we would changve in winter on a cold day for example!
[] auto do browser cache stuff, this required ctrl+shift+r