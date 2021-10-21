# Dota 2 Analyzer App Server

Dota 2 Analyzer App is an application to analyze dota 2 match and draft.

## RESTful endpoints

### GET /matches/:matchId

> Get match analyzed data

_Request Header_

```
none
```

_Request Body_

```
none
```

_Request Params_

```
{
  "matchId": "<posted match id>"
}
```

_Response (200)_

```
{
  "match_id": 0,
  "barracks_status_dire": 0,
  "barracks_status_radiant": 0,
  "chat": [
    {
    "time": 0,
    "unit": "string",
    "key": "string",
    "slot": 0,
    "player_slot": 0
    }
  ],
  "cluster": 0,
  "cosmetics": { },
  "dire_score": 0,
  "draft_timings": [
    {
    "order": 0,
    "pick": true,
    "active_team": 0,
    "hero_id": 0,
    "player_slot": 0,
    "extra_time": 0,
    "total_time_taken": 0
    }
  ],
  "duration": 0,
  "engine": 0,
  "first_blood_time": 0,
  "game_mode": 0,
  "human_players": 0,
  "leagueid": 0,
  "lobby_type": 0,
  "match_seq_num": 0,
  "negative_votes": 0,
  "objectives": { },
  "picks_bans": { },
  "positive_votes": 0,
  "radiant_gold_adv": { },
  "radiant_score": 0,
  "radiant_win": true,
  "radiant_xp_adv": { },
  "start_time": 0,
  "teamfights": { },
  "tower_status_dire": 0,
  "tower_status_radiant": 0,
  "version": 0,
  "replay_salt": 0,
  "series_id": 0,
  "series_type": 0,
  "radiant_team": { },
  "dire_team": { },
  "league": { },
  "skill": 0,
  "players": [
    {
      "match_id": 0,
      "player_slot": 0,
      "ability_upgrades_arr": [
        0
      ],
      "ability_uses": { },
      "ability_targets": { },
      "damage_targets": { },
      "account_id": 0,
      "actions": { },
      "additional_units": { },
      "assists": 0,
      "backpack_0": 0,
      "backpack_1": 0,
      "backpack_2": 0,
      "buyback_log": [
        {
        "time": 0,
        "slot": 0,
        "player_slot": 0
        }
      ],
      "camps_stacked": 0,
      "connection_log": [
        {
        "time": 0,
        "event": "string",
        "player_slot": 0
        }
      ],
      "creeps_stacked": 0,
      "damage": { },
      "damage_inflictor": { },
      "damage_inflictor_received": { },
      "damage_taken": { },
      "deaths": 0,
      "denies": 0,
      "dn_t": [
        0
      ],
      "gold": 0,
      "gold_per_min": 0,
      "gold_reasons": { },
      "gold_spent": 0,
      "gold_t": [
        0
      ],
      "hero_damage": 0,
      "hero_healing": 0,
      "hero_hits": { },
      "hero_id": 0,
      "item_0": 0,
      "item_1": 0,
      "item_2": 0,
      "item_3": 0,
      "item_4": 0,
      "item_5": 0,
      "item_uses": { },
      "kill_streaks": { },
      "killed": { },
      "killed_by": { },
      "kills": 0,
      "kills_log": [
        {
        "time": 0,
        "key": "string"
        }
      ],
      "lane_pos": { },
      "last_hits": 0,
      "last_hit_efficiency": 0,
      "leaver_status": 0,
      "level": 0,
      "lh_t": [
        0
      ],
      "life_state": { },
      "max_hero_hit": { },
      "multi_kills": { },
      "obs": { },
      "obs_left_log": [
        { }
      ],
      "obs_log": [
        { }
      ],
      "obs_placed": 0,
      "party_id": 0,
      "permanent_buffs": [
        { }
      ],
      "pings": 0,
      "player_lane_efficiency": 0,
      "purchase": { },
      "purchase_log": [
        {
        "time": 0,
        "key": "string",
        "charges": 0
        }
      ],
      "rune_pickups": 0,
      "runes": {
        "property1": 0,
        "property2": 0
      },
      "runes_log": [
        {
        "time": 0,
        "key": 0
        }
      ],
      "sen": { },
      "sen_left_log": [
        { }
      ],
      "sen_log": [
        { }
      ],
      "sen_placed": 0,
      "stuns": 0,
      "times": [
        0
      ],
      "tower_damage": 0,
      "xp_per_min": 0,
      "xp_reasons": { },
      "xp_t": [
        0
      ],
      "personaname": "string",
      "name": "string",
      "last_login": "2021-10-21T02:42:12Z",
      "radiant_win": true,
      "start_time": 0,
      "duration": 0,
      "cluster": 0,
      "lobby_type": 0,
      "game_mode": 0,
      "patch": 0,
      "region": 0,
      "isRadiant": true,
      "win": 0,
      "lose": 0,
      "total_gold": 0,
      "total_xp": 0,
      "kills_per_min": 0,
      "kda": 0,
      "abandons": 0,
      "neutral_kills": 0,
      "tower_kills": 0,
      "courier_kills": 0,
      "lane_kills": 0,
      "hero_kills": 0,
      "observer_kills": 0,
      "sentry_kills": 0,
      "roshan_kills": 0,
      "necronomicon_kills": 0,
      "ancient_kills": 0,
      "buyback_count": 0,
      "observer_uses": 0,
      "sentry_uses": 0,
      "lane_efficiency": 0,
      "lane_efficiency_pct": 0,
      "lane": 0,
      "lane_role": 0,
      "is_roaming": true,
      "purchase_time": { },
      "first_purchase_time": { },
      "item_win": { },
      "item_usage": { },
      "purchase_tpscroll": { },
      "actions_per_min": 0,
      "life_state_dead": 0,
      "rank_tier": 0,
      "cosmetics": [
        0
      ],
      "benchmarks": { }
    }
  ],
  "patch": 0,
  "region": 0,
  "all_word_counts": { },
  "my_word_counts": { },
  "throw": 0,
  "comeback": 0,
  "loss": 0,
  "win": 0,
  "replay_url": "string"
}
```

_Response (500)_

```
{
    "message": "Internal server error"
}
```

---
### POST /draft/analyzer

> Analyze Draft

_Request Header_

```
none
```

_Request Body_

```
{
  "radiant": "<posted string>",
  "dire": "<posted string>",
  OR
  "radiant": "<posted array>",
  "dire": "<posted array>",
}
```


_Response (200)_

```
{
  "radiantTotalSynergy": 0,
  "direTotalSynergy": 0,
  "radiantToDireAdvantage": 0,
  "radiantComposition": {
    "Carry": 0,
    "Escape": 0,
    "Nuker": 0,
    "Initiator": 0,
    "Durable": 0,
    "Disabler": 0,
    "Jungler": 0,
    "Support": 0,
    "Pusher": 0
  },
  "direComposition": {
    "Carry": 0,
    "Escape": 0,
    "Nuker": 0,
    "Initiator": 0,
    "Durable": 0,
    "Disabler": 0,
    "Jungler": 0,
    "Support": 0,
    "Pusher": 0
  }
}
```

_Response (500)_

```
{
    "message": "Internal server error"
}
```

---

### POST /draft/composer

> Composing a draft based on enemy draft

_Request Header_

```
none
```

_Request Body_

```
{
  "draft": "<posted string>"
  OR
  "draft": "<posted array>"
}
```

_Response (200)_

```
{
    "advantage": 25.4,
    "allyDraft": {
        "safelane": {
            "heroId1": 1,
            "heroId2": 95,
            "week": 2702,
            "bracketBasic": 255,
            "matchCount": 5902,
            "kills": 47099,
            "deaths": 31665,
            "assists": 47066,
            "networth": 129401439,
            "duration": 14157120,
            "firstBloodTime": 616235,
            "cs": 2034954,
            "dn": 68945,
            "goldEarned": 115620658,
            "xp": 192364605,
            "heroDamage": 129243135,
            "towerDamage": 37435046,
            "heroHealing": 14806204,
            "level": 143795,
            "synergy": -4.147,
            "wins": 0.44
        },
        "midlane": {
            "heroId1": 1,
            "heroId2": 19,
            "week": 2702,
            "bracketBasic": 255,
            "matchCount": 23313,
            "kills": 188524,
            "deaths": 114680,
            "assists": 177784,
            "networth": 516813417,
            "duration": 54802396,
            "firstBloodTime": 2618363,
            "cs": 8266612,
            "dn": 293911,
            "goldEarned": 462625073,
            "xp": 753586503,
            "heroDamage": 531321138,
            "towerDamage": 153104054,
            "heroHealing": 65508964,
            "level": 565424,
            "synergy": -6.329,
            "wins": 0.43
        },
        "offlane": {
            "heroId1": 1,
            "heroId2": 104,
            "week": 2702,
            "bracketBasic": 255,
            "matchCount": 23912,
            "kills": 191919,
            "deaths": 131368,
            "assists": 189149,
            "networth": 523943750,
            "duration": 56861855,
            "firstBloodTime": 2619839,
            "cs": 8311547,
            "dn": 280185,
            "goldEarned": 468564829,
            "xp": 769092786,
            "heroDamage": 563643867,
            "towerDamage": 148613451,
            "heroHealing": 66477238,
            "level": 578515,
            "synergy": -5.781,
            "wins": 0.43
        },
        "softsupport": {
            "heroId1": 5,
            "heroId2": 33,
            "week": 2702,
            "bracketBasic": 255,
            "matchCount": 5607,
            "kills": 22927,
            "deaths": 56360,
            "assists": 82184,
            "networth": 59291642,
            "duration": 13891168,
            "firstBloodTime": 553466,
            "cs": 392801,
            "dn": 15537,
            "goldEarned": 47148849,
            "xp": 118449059,
            "heroDamage": 89127182,
            "towerDamage": 3569821,
            "heroHealing": 7983266,
            "level": 113778,
            "synergy": -3.338,
            "wins": 0.42
        },
        "hardsupport": {
            "heroId1": 1,
            "heroId2": 91,
            "week": 2702,
            "bracketBasic": 255,
            "matchCount": 6303,
            "kills": 49844,
            "deaths": 27324,
            "assists": 48650,
            "networth": 137318656,
            "duration": 14370058,
            "firstBloodTime": 725906,
            "cs": 2187959,
            "dn": 76935,
            "goldEarned": 121754753,
            "xp": 195486580,
            "heroDamage": 147151992,
            "towerDamage": 43588658,
            "heroHealing": 17235214,
            "level": 150226,
            "synergy": -5.805,
            "wins": 0.44
        }
    },
    "allyComposition": {
        "Carry": 7,
        "Escape": 2,
        "Nuker": 4,
        "Initiator": 5,
        "Durable": 4,
        "Disabler": 6,
        "Jungler": 3,
        "Support": 3,
        "Pusher": 6
    }
}
```

_Response (500)_

```
{
    "message": "Internal server error"
}
```

---