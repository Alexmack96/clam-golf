## Problem

Knowing how far you hit each club is the difference between a good miss and a bad
one, and the numbers drift. Standing over a shot, you also need to know how far you
actually are from the green — and phone rangefinder apps are cluttered with social
features and subscriptions.

## Solution

A single-player app that holds one thing well: your real yardages, and what to do
with them on the course.

## Features

- Club bag: 14 active clubs, benched clubs keep their history
- Measured carry distances per club, per swing length, with a change history
- Gapping view across the bag
- Shot calculator: plays-like distance from wind and elevation, and the club for it
- GPS rangefinder on `/gps`: live front/middle/back yardages to the green
- Layup planning on holes longer than you can carry
- Tap-to-measure to any point — a ditch to carry, a spot to lay up to
- Offline-capable PWA

## Courses

Richmond Park Golf Course: Duke's and Prince's, both 18 holes.

Scorecard data (yardage, par, stroke index) is seeded for yellow, white and red.
Green outlines come from OpenStreetMap and are bound to hole numbers by hand in the
assignment editor, since OSM carries no hole numbering.

## Users

Single player. Every signed-in user sees everything; there are no roles. Sign-up is
disabled — the admin account is seeded.

## Open Questions

- Score and shot tracking — worth building, and does it feed measured distances back
  into the bag automatically?
- Tee coordinates for white and red, or is yellow enough forever?
- More courses, and if so does the OSM-import-plus-assignment flow scale or does it
  need buying course data?
