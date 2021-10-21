# API DOC IP PROJECT

### GET /api/ig

> GET instagram data

_Request Headers_

```
not needed
```

_Request Params_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200 - Created)_

```
{
    "data": {
        "count": 53512,
        "page_info": {
            "has_next_page": true,
            "end_cursor": "QVFBVi1aRXNEN3M4aEZHSWJnT3hMamJ1NkJTYWZWam9pT0FpSnp1RGt0c1lKZGxSSWpweGhqcmRwMk5aTHBDN1ZZN242d1oxdTlPc21hZVZZWEZ5MHdtdg=="
        },
        "edges": [
            {
                "node": {
                    "__typename": "GraphVideo",
                    "id": "2688726590669861836",
                    "shortcode": "CVQRpa3BjPM",
                    "dimensions": {
                        "height": 750,
                        "width": 750
                    },
                    "display_url": "https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/246492759_235644501960425_1003421750770028765_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=1&_nc_ohc=XtrWtRzAt9IAX-K2fCN&edm=AAWvnRQBAAAA&ccb=7-4&oh=db1e7971729e574c44395b8f9ba6a401&oe=617321E8&_nc_sid=e7738c",
                    "edge_media_to_tagged_user": {
                        "edges": [
                            {
                                "node": {
                                    "user": {
                                        "full_name": "Isyana Sarasvati",
                                        "followed_by_viewer": false,
                                        "id": "5688704",
                                        "is_verified": true,
                                        "profile_pic_url": "https://scontent-sin6-1.cdninstagram.com/v/t51.2885-19/s150x150/154736393_2178932548923758_3790416183733840349_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=1&_nc_ohc=Nn6xx5z3DDAAX8NbfXl&edm=AAWvnRQBAAAA&ccb=7-4&oh=5c98b1a4b8ee3bbeb54bf7c52adf0740&oe=61787F99&_nc_sid=e7738c",
                                        "username": "isyanasarasvati"
                                    },
                                    "x": 0,
                                    "y": 0
                                }
                            },
                            {
                                "node": {
                                    "user": {
                                        "full_name": "Once Mekel",
                                        "followed_by_viewer": false,
                                        "id": "1501554591",
                                        "is_verified": true,
                                        "profile_pic_url": "https://scontent-sin6-3.cdninstagram.com/v/t51.2885-19/s150x150/100896227_1172621573088558_1163228318015684608_n.jpg?_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=106&_nc_ohc=blDc4yl7w3kAX_oeOia&edm=AAWvnRQBAAAA&ccb=7-4&oh=233218a061de9d089ce4dc2bcbec27f5&oe=61786442&_nc_sid=e7738c",
                                        "username": "oncemekelofficial"
                                    },
                                    "x": 0,
                                    "y": 0
                                }
                            }
                        ]
                    },
                }
            }
        ]
    }
}
```

_Response (500 - Server Error)_

```
{
    "message": "Internal Server Error"
}
```

### GET /api/partner

> GET instagram data

_Request Headers_

```
not needed
```

_Request Params_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200 - Created)_

```
{
    "data": {
        "seo_category_infos": [
            [
                "Beauty",
                "beauty"
            ],
            [
                "Dance & Performance",
                "dance_and_performance"
            ],
            [
                "Fitness",
                "fitness"
            ],
            [
                "Food & Drink",
                "food_and_drink"
            ],
            [
                "Home & Garden",
                "home_and_garden"
            ],
            [
                "Music",
                "music"
            ],
            [
                "Visual Arts",
                "visual_arts"
            ]
        ],
        "logging_page_id": "profilePage_367005646",
        "show_suggested_profiles": true,
        "show_follow_dialog": false,
        "graphql": {
            "user": {
                "biography": "Tau aja yang asik! @hai.dudu\n📧: sales@infia.co\n——\nMau kerja sama? Klik link di bawah! ⬇️⬇️",
                "blocked_by_viewer": false,
                "restricted_by_viewer": null,
                "country_block": false,
                "external_url": "https://desty.page/DAGELAN",
                "external_url_linkshimmed": "https://l.instagram.com/?u=https%3A%2F%2Fdesty.page%2FDAGELAN&e=ATMhevPSmFo2aU3MLABuHdhYz4-AXrPS-ljRa6d8C2imA7Cy6KP6pgZ1IW7d_U0nOT178MkF6hRa7Euf&s=1",
                "edge_followed_by": {
                    "count": 20316433
                },
                "fbid": "17841400889385734",
                "followed_by_viewer": false,
                "edge_follow": {
                    "count": 509
                },
                "follows_viewer": false,
                "full_name": "Dagelan",
                "has_ar_effects": false,
                "has_clips": true,
                "has_guides": false,
                "has_channel": false,
                "has_blocked_viewer": false,
                "highlight_reel_count": 14,
                "has_requested_viewer": false,
                "hide_like_and_view_counts": false,
                "id": "367005646",
                "is_business_account": true,
                "is_professional_account": true,
                "is_joined_recently": false,
                "business_address_json": null,
                "business_contact_method": null,
                "business_email": null,
                "business_phone_number": null,
                "business_category_name": "Local Events",
                "overall_category_name": null,
                "category_enum": "TOPIC_ARTS_ENTERTAINMENT",
                "category_name": "Arts & Entertainment",
                "is_private": false,
                "is_verified": true,
                "edge_mutual_followed_by": {
                    "count": 0,
                    "edges": []
                },
                "profile_pic_url": "https://scontent-sin6-1.cdninstagram.com/v/t51.2885-19/s150x150/138846725_417112166373493_2758765771774023641_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=1&_nc_ohc=p3yHSWhJhz4AX8vwPuP&edm=AAWvnRQBAAAA&ccb=7-4&oh=2892af470ce03a97ca510296e2ff6dd6&oe=617735ED&_nc_sid=e7738c",
                "profile_pic_url_hd": "https://scontent-sin6-1.cdninstagram.com/v/t51.2885-19/s320x320/138846725_417112166373493_2758765771774023641_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=1&_nc_ohc=p3yHSWhJhz4AX8vwPuP&edm=AAWvnRQBAAAA&ccb=7-4&oh=e6ea5a579d40bb69dc5df885c53ae1d2&oe=61779FD5&_nc_sid=e7738c",
                "requested_by_viewer": false,
                "should_show_category": true,
                "should_show_public_contacts": true,
                "username": "dagelan",
                "connected_fb_page": null,
                "pronouns": [],
                "edge_felix_video_timeline": {
                    "count": 9778,
                    "page_info": {
                        "has_next_page": true,
                        "end_cursor": "QVFCb0FxemJwSXpBOE5KaThRZVRRZGJOekJxRHAwVl81UkdwT0N6M2IyVmZvdTBDQ0U1UmlXb3FZZEhoZnFfaXNLOHVqcmVxNURqU29MRm8yVGhac0NaSA=="
                    },
                    "edges": [
                        {
                            "node": {
                                "__typename": "GraphVideo",
                                "id": "2688726590669861836",
                                "shortcode": "CVQRpa3BjPM",
                                "dimensions": {
                                    "height": 750,
                                    "width": 750
                                },
                                "display_url": "https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/246492759_235644501960425_1003421750770028765_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=1&_nc_ohc=XtrWtRzAt9IAX-K2fCN&edm=AAWvnRQBAAAA&ccb=7-4&oh=db1e7971729e574c44395b8f9ba6a401&oe=617321E8&_nc_sid=e7738c",
                                "edge_media_to_tagged_user": {
                                    "edges": [
                                        {
                                            "node": {
                                                "user": {
                                                    "full_name": "Isyana Sarasvati",
                                                    "followed_by_viewer": false,
                                                    "id": "5688704",
                                                    "is_verified": true,
                                                    "profile_pic_url": "https://scontent-sin6-1.cdninstagram.com/v/t51.2885-19/s150x150/154736393_2178932548923758_3790416183733840349_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=1&_nc_ohc=Nn6xx5z3DDAAX8NbfXl&edm=AAWvnRQBAAAA&ccb=7-4&oh=5c98b1a4b8ee3bbeb54bf7c52adf0740&oe=61787F99&_nc_sid=e7738c",
                                                    "username": "isyanasarasvati"
                                                },
                                                "x": 0,
                                                "y": 0
                                            }
                                        },
                    ]
                }
            }
        },
        "toast_content_on_load": null,
        "show_view_shop": false,
        "profile_pic_edit_sync_props": {
            "show_change_profile_pic_confirm_dialog": false,
            "show_profile_pic_sync_reminders": false,
            "identity_id": "",
            "remove_profile_pic_header": null,
            "remove_profile_pic_subtext": null,
            "remove_profile_pic_confirm_cta": null,
            "remove_profile_pic_cancel_cta": null,
            "is_business_central_identity": false,
            "change_profile_pic_actions_screen_header": [
                "C",
                "h",
                "a",
                "n",
                "g",
                "e",
                " ",
                "P",
                "r",
                "o",
                "f",
                "i",
                "l",
                "e",
                " ",
                "P",
                "h",
                "o",
                "t",
                "o"
            ],
            "change_profile_pic_actions_screen_subheader": [
                "I",
                "n",
                "s",
                "t",
                "a",
                "g",
                "r",
                "a",
                "m",
                ",",
                " ",
                "F",
                "a",
                "c",
                "e",
                "b",
                "o",
                "o",
                "k"
            ],
            "change_profile_pic_actions_screen_upload_cta": [
                "U",
                "p",
                "l",
                "o",
                "a",
                "d",
                " ",
                "P",
                "h",
                "o",
                "t",
                "o"
            ],
            "change_profile_pic_actions_screen_remove_cta": [
                "R",
                "e",
                "m",
                "o",
                "v",
                "e",
                " ",
                "C",
                "u",
                "r",
                "r",
                "e",
                "n",
                "t",
                " ",
                "P",
                "h",
                "o",
                "t",
                "o"
            ],
            "change_profile_pic_actions_screen_cancel_cta": [
                "C",
                "a",
                "n",
                "c",
                "e",
                "l"
            ]
        },
        "always_show_message_button_to_pro_account": false
    }
}
```

_Response (500 - Server Error)_

```
{
    "message": "Internal Server Error"
}
```

### GET /api/celebBirth

> GET instagram data

_Request Headers_

```
not needed
```

_Request Params_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200 - Created)_

```
{
    "data": {
        "Birthdays": [
            {
                "celebId": "7703",
                "name": "Snoop Dogg",
                "dob": "1971-10-20",
                "havePic": "1",
                "twitter": "SnoopDogg",
                "price": 58000,
                "age": 50
            },
            {
                "celebId": "4266",
                "name": "John Krasinski",
                "dob": "1979-10-20",
                "havePic": "1",
                "twitter": "",
                "price": 14000,
                "age": 42
            },
            {
                "celebId": "8876",
                "name": "Dannii Minogue",
                "dob": "1971-10-20",
                "havePic": "1",
                "twitter": "",
                "price": 12000,
                "age": 50
            },
            {
                "celebId": "78",
                "name": "Viggo Mortensen",
                "dob": "1958-10-20",
                "havePic": "1",
                "twitter": "",
                "price": 10000,
                "age": 63
            },
            {
                "celebId": "9448",
                "name": "Candice Swanepoel",
                "dob": "1988-10-20",
                "havePic": "1",
                "twitter": "angelcandice",
                "price": 7000,
                "age": 33
            },
            {
                "celebId": "1766",
                "name": "Dan Fogler",
                "dob": "1976-10-20",
                "havePic": "0",
                "twitter": "mrdanfogler",
                "price": 7000,
                "age": 45
            },
            {
                "celebId": "5817",
                "name": "Melanie Mayron",
                "dob": "1952-10-20",
                "havePic": "0",
                "twitter": "",
                "price": 7000,
                "age": 69
            },
            {
                "celebId": "7461",
                "name": "Samuel Witwer",
                "dob": "1977-10-20",
                "havePic": "0",
                "twitter": "",
                "price": 7000,
                "age": 44
            },
            {
                "celebId": "177",
                "name": "Addison Richards",
                "dob": "1887-10-20",
                "havePic": "0",
                "twitter": "",
                "price": 0,
                "age": 134
            },
            {
                "celebId": "562",
                "name": "Anna Neagle",
                "dob": "1904-10-20",
                "havePic": "0",
                "twitter": "",
                "price": 0,
                "age": 117
            },
            {
                "celebId": "642",
                "name": "Anton Diffring",
                "dob": "1918-10-20",
                "havePic": "0",
                "twitter": "",
                "price": 0,
                "age": 103
            },
            {
                "celebId": "664",
                "name": "Arlene Francis",
                "dob": "1907-10-20",
                "havePic": "0",
                "twitter": "",
                "price": 0,
                "age": 114
            },
            {
                "celebId": "801",
                "name": "Barrie Chase",
                "dob": "1933-10-20",
                "havePic": "0",
                "twitter": "",
                "price": 0,
                "age": 88
            },
            {
                "celebId": "836",
                "name": "Bela Lugosi",
                "dob": "1882-10-20",
                "havePic": "0",
                "twitter": "",
                "price": 0,
                "age": 139
            },
            {
                "celebId": "957",
                "name": "Bill Nunn",
                "dob": "1953-10-20",
                "havePic": "0",
                "twitter": "",
                "price": 0,
                "age": 68
            },
            {
                "celebId": "2126",
                "name": "Dolores Hart",
                "dob": "1938-10-20",
                "havePic": "0",
                "twitter": "",
                "price": 0,
                "age": 83
            },
            {
                "celebId": "2274",
                "name": "Earl Hindman",
                "dob": "1942-10-20",
                "havePic": "0",
                "twitter": "",
                "price": 0,
                "age": 79
            },
            {
                "celebId": "2628",
                "name": "Evelyn Brent",
                "dob": "1901-10-20",
                "havePic": "0",
                "twitter": "",
                "price": 0,
                "age": 120
            },
            {
                "celebId": "3971",
                "name": "Jerry Orbach",
                "dob": "1935-10-20",
                "havePic": "1",
                "twitter": "",
                "price": 0,
                "age": 86
            },
            {
                "celebId": "5437",
                "name": "Margaret Dumont",
                "dob": "1882-10-20",
                "havePic": "0",
                "twitter": "",
                "price": 0,
                "age": 139
            },
            {
                "celebId": "5479",
                "name": "Marian Nixon",
                "dob": "1904-10-20",
                "havePic": "0",
                "twitter": "",
                "price": 0,
                "age": 117
            },
            {
                "celebId": "7065",
                "name": "Rita Corday",
                "dob": "1920-10-20",
                "havePic": "0",
                "twitter": "",
                "price": 0,
                "age": 101
            },
            {
                "celebId": "7231",
                "name": "Roger Hanin",
                "dob": "1925-10-20",
                "havePic": "0",
                "twitter": "",
                "price": 0,
                "age": 96
            },
            {
                "celebId": "8392",
                "name": "William Christopher",
                "dob": "1932-10-20",
                "havePic": "1",
                "twitter": "",
                "price": 0,
                "age": 89
            },
            {
                "celebId": "8429",
                "name": "William Russ",
                "dob": "1950-10-20",
                "havePic": "0",
                "twitter": "",
                "price": 0,
                "age": 71
            }
        ]
    }
}
```

_Response (500 - Server Error)_

```
{
    "message": "Internal Server Error"
}
```

### GET /api/celebPrice

> GET instagram data

_Request Headers_

```
not needed
```

_Request Params_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200 - Created)_

```
{
    "data": {
        "BonusBucks": [
            {
                "celebId": "8698",
                "price": 1000,
                "expires": "2021-10-20 23:00:00",
                "name": "Blake Shelton"
            },
            {
                "celebId": "4756",
                "price": 98000,
                "expires": "2021-10-21 01:00:00",
                "name": "Kelly Rowan"
            },
            {
                "celebId": "4466",
                "price": 29000,
                "expires": "2021-10-20 23:00:00",
                "name": "Josie Davis"
            },
            {
                "celebId": "9151",
                "price": 16000,
                "expires": "2021-10-20 23:00:00",
                "name": "Michael Lohan"
            }
        ],
        "CelebrityValues": [
            {
                "celebId": "1853",
                "price": 445000,
                "name": "Dave Chappelle"
            },
            {
                "celebId": "8521",
                "price": 424000,
                "name": "Kourtney Kardashian"
            },
            {
                "celebId": "504",
                "price": 412000,
                "name": "Angelina Jolie"
            },
            {
                "celebId": "9334",
                "price": 404000,
                "name": "Travis Barker"
            },
            {
                "celebId": "8608",
                "price": 385000,
                "name": "Perez Hilton"
            },
            {
                "celebId": "8906",
                "price": 269000,
                "name": "Donald Trump"
            },
            {
                "celebId": "8544",
                "price": 259000,
                "name": "Kanye West"
            },
            {
                "celebId": "9267",
                "price": 237000,
                "name": "Scott Disick"
            },
            {
                "celebId": "7425",
                "price": 224000,
                "name": "Salma Hayek"
            },
            {
                "celebId": "6296",
                "price": 215000,
                "name": "Nicole Kidman"
            },
            {
                "celebId": "9601",
                "price": 204000,
                "name": "Adele"
            },
            {
                "celebId": "5284",
                "price": 183000,
                "name": "Lucille Ball"
            },
            {
                "celebId": "9404",
                "price": 179000,
                "name": "Zendaya"
            },
            {
                "celebId": "8522",
                "price": 159000,
                "name": "LeBron James"
            },
            {
                "celebId": "9053",
                "price": 139000,
                "name": "Katie Couric"
            },
            {
                "celebId": "4854",
                "price": 132000,
                "name": "Kim Kardashian"
            },
            {
                "celebId": "3146",
                "price": 126000,
                "name": "Gwyneth Paltrow"
            }
        ]
    }
}
```

_Response (500 - Server Error)_

```
{
    "message": "Internal Server Error"
}
```
