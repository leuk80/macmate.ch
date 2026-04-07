---
title: "Apple Developer Program: How to Fix the «Unknown Error» During Enrollment"
description: "Trying to enroll in the Apple Developer Program but getting an «Unknown Error»? The issue is your 2FA phone number — here's how to fix it."
date: "2026-04-07"
category: "Tipps & Tricks"
readingTime: "3 min read"
---

Trying to enroll in the Apple Developer Program but hitting a wall with a vague error message? You're not alone — and the fix is surprisingly simple.

## The Problem

When attempting to enroll in the Apple Developer Program, you see this message repeatedly:

> "We are unable to process your request. An unknown error occurred."

No error code, no useful hint. Retrying doesn't help — whether you use Safari, another browser, or the Apple Developer app.

## The Cause

The issue is tied to your Apple ID's two-factor authentication (2FA) setup — specifically, the trusted phone number on file.

Apple requires the trusted phone number used for 2FA to match the region of your Apple ID. If there's a mismatch — for instance, you're using a foreign SIM card or recently moved countries — Apple silently blocks the enrollment request with the generic error above.

## The Fix

**Update your trusted phone number:** Your 2FA phone number must be from the same region as your Apple ID.

Here's what to do:

1. Go to **appleid.apple.com** and sign in.
2. Navigate to **Sign-In and Security → Account Security**.
3. Check the trusted phone number on file.
4. Replace it with a number from the country matching your Apple ID (e.g. a Swiss number for a Swiss Apple ID).
5. Restart the enrollment process.

## Why Is This So Hard to Find?

Apple doesn't surface a specific error code. The generic "Unknown Error" message naturally leads people to assume it's a server-side issue or temporary outage. Numerous developers in the iOS community have reported being stuck for days before stumbling upon this fix.

If you're based in Switzerland and want to join the Apple Developer Program, make sure your 2FA phone number has a Swiss country code — and you should be good to go.

---

*Need help with your Apple ID or other Apple issues? [Contact us](/kontakt) — we're happy to help.*
