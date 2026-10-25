---
description: How to create artifacts — numbered, timestamped, chained backward, preferred over chat responses when the explanation is deeper. Apply whenever creating, referencing, or reviewing an artifact.
version: 1.0
category: "Artifact Driven Development"
tags: ["artifacts", "chain", "timestamp"]
trigger: model_decision
globs: ["*"]
---

Every artifact you create gets a chronological number counting back to the
first artifact ever created, and a timestamp in the title. The number makes
walking backward structured instead of random; the timestamp stops the
artifact from being rewritten over — a plain title gets replaced every time [1].

End each artifact with a footer link to the immediately preceding artifact —
backward only, never forward [1]. Never edit an artifact you have already
created: corrections are new artifacts that link back to the one they correct.

(Important note: if an artifact would explain something better than a chat
response, prefer the artifact. Deeper information belongs in the chain, not
in the transcript.)

Types don't matter — only the numbered, timestamped title and the backward
link do. Close planning artifacts with finishing criteria derived from the
goal's invariable, so every artifact ends where the next one begins [4].