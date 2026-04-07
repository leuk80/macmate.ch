---
title: "Apple Developer Programm: «Unknown Error» bei der Anmeldung lösen"
description: "Du willst dich beim Apple Developer Program registrieren, doch die Anmeldung scheitert mit «Unknown Error»? Die Ursache liegt bei der 2FA-Telefonnummer — so löst du das Problem."
date: "2026-04-07"
category: "Tipps & Tricks"
readingTime: "3 Min. Lesezeit"
---

Du willst dich beim Apple Developer Program registrieren, doch die Anmeldung scheitert mit einer nichtssagenden Fehlermeldung? Du bist nicht allein — und die Lösung ist überraschend einfach.

## Das Problem

Bei der Registrierung für das Apple Developer Program erscheint wiederholt folgende Meldung:

> «We are unable to process your request. An unknown error occurred.»

Kein Hinweis auf die Ursache, kein hilfreicher Fehlercode. Wer es erneut versucht, erhält immer dasselbe Ergebnis — egal ob im Browser oder in der Apple Developer App.

## Die Ursache

Das Problem liegt bei der Zwei-Faktor-Authentifizierung (2FA) deiner Apple-ID. Genauer gesagt: bei der dort hinterlegten vertrauenswürdigen Telefonnummer.

Apple verlangt, dass die Region der 2FA-Telefonnummer mit der Region der Apple-ID übereinstimmt. Stimmt das nicht überein — etwa weil du eine ausländische SIM nutzt oder kürzlich umgezogen bist — blockiert Apple die Enrollment-Anfrage mit dem beschriebenen Fehler.

## Die Lösung

**Vertrauenswürdige Telefonnummer anpassen:** Die 2FA-Telefonnummer muss aus derselben Region stammen wie deine Apple-ID.

So gehst du vor:

1. Öffne **appleid.apple.com** und melde dich an.
2. Gehe zu **Anmeldung und Sicherheit → Accountsicherheit**.
3. Prüfe die hinterlegte vertrauenswürdige Telefonnummer.
4. Ersetze sie durch eine Nummer aus dem Land, das deiner Apple-ID entspricht (z.B. eine Schweizer Nummer für eine Schweizer Apple-ID).
5. Starte den Enrollment-Prozess erneut.

## Warum ist das so schwer zu finden?

Apple zeigt leider keinen spezifischen Fehlercode an. Die generische Meldung «Unknown Error» lässt zunächst an Serverprobleme oder temporäre Ausfälle denken. Zahlreiche Entwickler in der iOS-Community haben dokumentiert, dass sie tagelang feststeckten, bevor sie auf diese Lösung kamen.

Falls du in der Schweiz eine Apple-ID besitzt und dich für das Developer Program anmelden möchtest, stelle also sicher, dass deine 2FA-Nummer mit einer Schweizer Vorwahl hinterlegt ist — und schon sollte es klappen.

---

*Brauchst du Hilfe mit deiner Apple-ID oder anderen Apple-Problemen? [Kontaktiere uns](/kontakt) — wir helfen dir gerne weiter.*
