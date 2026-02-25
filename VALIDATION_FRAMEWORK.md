# CareerJump — Stage 12 Validation Framework

**Purpose:** Track 48h post-distribution metrics to identify winning channels

**Trigger:** Execute 48 hours after Stage 11 distribution posts go live

---

## Metrics Collection Checklist

### Product Hunt
- [ ] Total upvotes
- [ ] Total comments
- [ ] Ranking (peak position, final position)
- [ ] Click-through rate (from PH analytics)
- [ ] Signups attributed to PH (via UTM: `?utm_source=producthunt`)

**Tool:** Product Hunt dashboard + Google Analytics

---

### Reddit (per subreddit)

#### r/careerchange
- [ ] Post upvotes
- [ ] Comments count
- [ ] Upvote rate (upvotes / views)
- [ ] Click-throughs to site (via UTM: `?utm_source=reddit&utm_medium=careerchange`)
- [ ] Signups attributed

#### r/careerguidance
- [ ] Post upvotes
- [ ] Comments count
- [ ] Upvote rate
- [ ] Click-throughs (UTM: `?utm_source=reddit&utm_medium=careerguidance`)
- [ ] Signups attributed

#### r/40something
- [ ] Post upvotes
- [ ] Comments count
- [ ] Upvote rate
- [ ] Click-throughs (UTM: `?utm_source=reddit&utm_medium=40something`)
- [ ] Signups attributed

**Tool:** Reddit post analytics + Google Analytics

---

### Twitter/X
- [ ] Total thread likes
- [ ] Total retweets
- [ ] Total replies
- [ ] Impressions (from Twitter analytics)
- [ ] Link clicks (UTM: `?utm_source=twitter`)
- [ ] Signups attributed

**Tool:** Twitter Analytics + Google Analytics

---

### Website (Overall)
- [ ] Total sessions (48h period)
- [ ] Unique visitors
- [ ] Bounce rate
- [ ] Average session duration
- [ ] Pages per session
- [ ] Top landing pages
- [ ] Top exit pages

**Tool:** Google Analytics

---

### Conversion Metrics
- [ ] Total email signups (waitlist)
- [ ] Mentor application submissions
- [ ] Mentee quiz completions
- [ ] Conversion rate per channel (signups / clicks)

**Tool:** Form submissions + Google Analytics goals

---

## Analysis Template

### Channel Performance Ranking

| Channel | Clicks | Signups | Conv. Rate | Engagement | ROI (time invested) |
|---------|--------|---------|------------|------------|---------------------|
| Product Hunt | [#] | [#] | [%] | [upvotes/comments] | [hours spent / signups] |
| Reddit r/careerchange | [#] | [#] | [%] | [upvotes/comments] | [hours / signups] |
| Reddit r/careerguidance | [#] | [#] | [%] | [upvotes/comments] | [hours / signups] |
| Reddit r/40something | [#] | [#] | [%] | [upvotes/comments] | [hours / signups] |
| Twitter/X | [#] | [#] | [%] | [likes/RTs/replies] | [hours / signups] |

### Top Performer Identification

**Highest Click Volume:** [Channel]  
**Highest Conversion Rate:** [Channel]  
**Best Engagement Quality:** [Channel]  
**Best ROI (time invested):** [Channel]

### Insights

**What worked:**
- [Observation 1]
- [Observation 2]
- [Observation 3]

**What didn't work:**
- [Observation 1]
- [Observation 2]

**Surprising findings:**
- [Unexpected result 1]
- [Unexpected result 2]

**Audience feedback themes:**
- [Common comment/question 1]
- [Common objection 1]
- [Common praise 1]

---

## Decision Framework

### Channel Categorization

**Winners (double down in Stage 13):**
- Conversion rate >3% OR
- Signups >10 AND positive ROI

**Maybes (iterate and retry):**
- Conversion rate 1-3% OR
- High engagement but low conversions

**Losers (cut or pause):**
- Conversion rate <1% AND
- Low engagement AND
- Negative or neutral feedback

---

## Trello Comment Template

```
📊 48H METRICS — STAGE 12 VALIDATION

**Distribution Date:** [Date posts went live]
**Validation Period:** [Start] to [End] (48 hours)

**Channel Performance:**

1. **Product Hunt**
   - Upvotes: [#] (peak rank: [#])
   - Comments: [#]
   - Clicks: [#]
   - Signups: [#]
   - Conversion: [%]

2. **Reddit r/careerchange**
   - Upvotes: [#]
   - Comments: [#]
   - Clicks: [#]
   - Signups: [#]
   - Conversion: [%]

3. **Reddit r/careerguidance**
   - Upvotes: [#]
   - Comments: [#]
   - Clicks: [#]
   - Signups: [#]
   - Conversion: [%]

4. **Reddit r/40something**
   - Upvotes: [#]
   - Comments: [#]
   - Clicks: [#]
   - Signups: [#]
   - Conversion: [%]

5. **Twitter/X**
   - Likes: [#]
   - Retweets: [#]
   - Replies: [#]
   - Clicks: [#]
   - Signups: [#]
   - Conversion: [%]

**TOTALS:**
- Total clicks: [#]
- Total signups: [#]
- Overall conversion rate: [%]

**TOP PERFORMER:** [Channel name]
- Why: [Highest conversion rate / Best ROI / Most qualified leads]

**KEY INSIGHTS:**
- [Insight 1]
- [Insight 2]
- [Insight 3]

**NEXT STEPS (Stage 13):**
- Double down on: [Winner channel(s)]
- Iterate on: [Maybe channel(s)]
- Pause: [Loser channel(s)]
```

---

## Tools Setup

### Google Analytics UTM Tracking

**URLs to use in posts:**

Product Hunt: `https://careerjump.ashketing.com?utm_source=producthunt&utm_medium=launch&utm_campaign=feb2026`

Reddit r/careerchange: `https://careerjump.ashketing.com?utm_source=reddit&utm_medium=careerchange&utm_campaign=feb2026`

Reddit r/careerguidance: `https://careerjump.ashketing.com?utm_source=reddit&utm_medium=careerguidance&utm_campaign=feb2026`

Reddit r/40something: `https://careerjump.ashketing.com?utm_source=reddit&utm_medium=40something&utm_campaign=feb2026`

Twitter: `https://careerjump.ashketing.com?utm_source=twitter&utm_medium=thread&utm_campaign=feb2026`

### Analytics Dashboard View

Create custom GA4 report filtering by:
- Date range: [Distribution date] to [Distribution date + 48h]
- Source/Medium: producthunt, reddit, twitter
- Goal completions: signup, mentor_application, quiz_complete

---

## Red Flags

If any of these occur, escalate to @main immediately:

- Overall conversion rate <0.5% across all channels
- Negative sentiment >30% in comments
- Bounce rate >80% on landing page
- Zero signups after 24h
- Site downtime or errors reported

---

**Status:** Framework ready — awaiting Stage 11 distribution completion
