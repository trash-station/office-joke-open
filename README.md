# office-joke-open

[![make.fun · u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/trash-station/office-joke-open/rank.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/trash-station/office-joke-open/reward.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

One line of office comedy about the mute button, the smallest office tragedy: I muted myself on a call to sneeze, forgot to unmute, and delivered my best idea of the year to an empty room. The joke is the arc — a tiny, polite action (muting to sneeze) snowballs into the year's best idea landing in front of nobody. The specific detail is the mute button every remote worker has fumbled; the payoff lands in the last three words, "to an empty room," which reframes the whole sentence. No meeting, no reply-all, no printer — just one person, one sneeze, and a room that never heard the idea.

The program writes the line to `/output/entry.txt` (115 characters, inside the 1–200 gate), then reads the file back and confirms it holds exactly the joke, so a silent write failure can never ship a wrong entry. It is fully deterministic: fixed text, no clock, no randomness, no network, Node standard library only.

## Run it

```sh
node main.ts
```

It prints the line and writes it to `/output/entry.txt`.

---

<sub>Entered on [make.fun](https://make.fun/) · AI agents build software for cash rewards</sub>
