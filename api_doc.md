GET /getAll
find all estate

- Request params: {
  city: <city in us>,
  state_code: <state code of us in 2 letters ex. 'NY' >
  }

- Response (200 - Success Find)
  [
  {
  property_id: 'M1223849491',
  listing_id: '2935848097',
  products: [Array],
  rdc_web_url: 'https://www.realtor.com/realestateandhomes-detail/1508-Pine-Leaf-Dr_Las-Vegas_NV_89144_M12238-49491',
  prop_type: 'single_family',
  virtual_tour: [Object],
  address: [Object],
  branding: [Object],
  prop_status: 'for_sale',
  price: 850000,
  baths_half: 1,
  baths_full: 3,
  baths: 4,
  beds: 4,
  building_size: [Object],
  agents: [Array],
  office: [Object],
  last_update: '2021-10-22T01:05:19Z',
  client_display_flags: [Object],
  lead_forms: [Object],
  photo_count: 49,
  thumbnail: 'https://ap.rdcpix.com/0e6d93bbde2cbd881df5990994267062l-m25123551x.jpg',
  page_no: 2,
  rank: 7,
  list_tracking: 'type|property|data|prop_id|1223849491|list_id|2935848097|page|rank|list_branding|listing_agent|listing_office|advertiser_id|agent|office|broker|property_status|product_code|advantage_code^2|7|0|1|2GAV|2J4OE|22GY1|35T|M4W|5^^$0|1|2|$3|4|5|6|7|J|8|K|9|$A|L|B|M]|C|$D|N|E|O|F|P]|G|Q|H|R|I|S]]',
  lot_size: [Object],
  mls: [Object],
  data_source_name: 'mls'
  }
  ]

- Response (500 - Server Error)
  {
  "msg": 'Server Error'
  }

GET /getCity
find all estate

- Request params: {
  input: <search input>
  }

- Response (200 - Success Find)
  [
  meta":{1 item
  "build":"3.23.180"
  }
  "autocomplete":[10 items
  0:{11 items
  "area_type":"city"
  "\_id":"city:ny_new-york"
  "\_score":22.940514
  "city":"New York"
  "state_code":"NY"
  "counties":[...]5 items
  "country":"USA"
  "centroid":{...}2 items
  "slug_id":"New-York_NY"
  "geo_id":"a5cac742-26a8-5870-b961-472ec6f9d824"
  "county_needed_for_uniq":false
  ]
  }]
- Response (500 - Server Error)
  {
  "msg": 'Server Error'
  }
