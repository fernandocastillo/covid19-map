<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use App\Models\Country;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        if(!User::where('email', 'admin@admin.com')->first()){
            \App\Models\User::create([
                'name' => 'Admin',
                'email' => 'admin@admin.com',
                'password' => '12345678'
            ]);
        }

        

        $countries = [
            [
                'name' => 'India',
                'datamap_scope' => 'india',
                'datamap_topo_url' => 'https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json',
                'datamap_scale' => 800,
                'datamap_center_x'=>80,
                'datamap_center_y'=>25,

                'states' => [
                    [
                        "topo_key"=>"AN",
                        "name"=>"Andaman and Nicobar Islands",                        
                    ],
                    [
                        "topo_key"=>"AP",
                        "name"=>"Andhra Pradesh"
                    ],
                    [
                        "topo_key"=>"AR",
                        "name"=>"Arunachal Pradesh"
                    ],
                    [
                        "topo_key"=>"AS",
                        "name"=>"Assam"
                    ],
                    [
                        "topo_key"=>"BR",
                        "name"=>"Bihar"
                    ],
                    [
                        "topo_key"=>"CG",
                        "name"=>"Chandigarh"
                    ],
                    [
                        "topo_key"=>"CH",
                        "name"=>"Chhattisgarh"
                    ],
                    [
                        "topo_key"=>"DH",
                        "name"=>"Dadra and Nagar Haveli"
                    ],
                    [
                        "topo_key"=>"DD",
                        "name"=>"Daman and Diu"
                    ],
                    [
                        "topo_key"=>"DL",
                        "name"=>"Delhi"
                    ],
                    [
                        "topo_key"=>"GA",
                        "name"=>"Goa"
                    ],
                    [
                        "topo_key"=>"GJ",
                        "name"=>"Gujarat"
                    ],
                    [
                        "topo_key"=>"HR",
                        "name"=>"Haryana"
                    ],
                    [
                        "topo_key"=>"HP",
                        "name"=>"Himachal Pradesh"
                    ],
                    [
                        "topo_key"=>"JK",
                        "name"=>"Jammu and Kashmir"
                    ],
                    [
                        "topo_key"=>"JH",
                        "name"=>"Jharkhand"
                    ],
                    [
                        "topo_key"=>"KA",
                        "name"=>"Karnataka"
                    ],
                    [
                        "topo_key"=>"KL",
                        "name"=>"Kerala"
                    ],
                    [
                        "topo_key"=>"LD",
                        "name"=>"Lakshadweep"
                    ],
                    [
                        "topo_key"=>"MP",
                        "name"=>"Madhya Pradesh"
                    ],
                    [
                        "topo_key"=>"MH",
                        "name"=>"Maharashtra"
                    ],
                    [
                        "topo_key"=>"MN",
                        "name"=>"Manipur"
                    ],
                    [
                        "topo_key"=>"ML",
                        "name"=>"Meghalaya"
                    ],
                    [
                        "topo_key"=>"MZ",
                        "name"=>"Mizoram"
                    ],
                    [
                        "topo_key"=>"NL",
                        "name"=>"Nagaland"
                    ],
                    [
                        "topo_key"=>"OR",
                        "name"=>"Odisha"
                    ],
                    [
                        "topo_key"=>"PY",
                        "name"=>"Puducherry"
                    ],
                    [
                        "topo_key"=>"PB",
                        "name"=>"Punjab"
                    ],
                    [
                        "topo_key"=>"RJ",
                        "name"=>"Rajasthan"
                    ],
                    [
                        "topo_key"=>"SK",
                        "name"=>"Sikkim"
                    ],
                    [
                        "topo_key"=>"TN",
                        "name"=>"Tamil Nadu"
                    ],
                    [
                        "topo_key"=>"TS",
                        "name"=>"Telangana"
                    ],
                    [
                        "topo_key"=>"TR",
                        "name"=>"Tripura"
                    ],
                    [
                        "topo_key"=>"UK",
                        "name"=>"Uttarakhand"
                    ],
                    [
                        "topo_key"=>"UP",
                        "name"=>"Uttar Pradesh"
                    ],
                    [
                        "topo_key"=>"WB",
                        "name"=>"West Bengal"
                    ]
                ]
            ],

            [
                'name' => 'United States',
                'datamap_scope' => 'usa',
                'datamap_topo_url' => null,
                'datamap_scale' => 300,
                'datamap_center_x'=>-100,
                'datamap_center_y'=>55,
                '',
                'states' => [
                    [
                        "topo_key"=>"AL",
                        "name"=>"Alabama"
                    ],
                    [
                        "topo_key"=>"AK",
                        "name"=>"Alaska"
                    ],
                    [
                        "topo_key"=>"AZ",
                        "name"=>"Arizona"
                    ],
                    [
                        "topo_key"=>"AR",
                        "name"=>"Arkansas"
                    ],
                    [
                        "topo_key"=>"CA",
                        "name"=>"California"
                    ],
                    [
                        "topo_key"=>"CO",
                        "name"=>"Colorado"
                    ],
                    [
                        "topo_key"=>"CT",
                        "name"=>"Connecticut"
                    ],
                    [
                        "topo_key"=>"DE",
                        "name"=>"Delaware"
                    ],
                    [
                        "topo_key"=>"DC",
                        "name"=>"District of Columbia"
                    ],
                    [
                        "topo_key"=>"FL",
                        "name"=>"Florida"
                    ],
                    [
                        "topo_key"=>"GA",
                        "name"=>"Geogia"
                    ],
                    [
                        "topo_key"=>"HI",
                        "name"=>"Hawaii"
                    ],
                    [
                        "topo_key"=>"ID",
                        "name"=>"Idaho"
                    ],
                    [
                        "topo_key"=>"IL",
                        "name"=>"Illinois"
                    ],
                    [
                        "topo_key"=>"IL",
                        "name"=>"Indiana"
                    ],
                    [
                        "topo_key"=>"IA",
                        "name"=>"Iowa"
                    ],
                    [
                        "topo_key"=>"KS",
                        "name"=>"Kansas"
                    ],
                    [
                        "topo_key"=>"KY",
                        "name"=>"Kentucky"
                    ],
                    [
                        "topo_key"=>"LA",
                        "name"=>"Louisiana"
                    ],
                    [
                        "topo_key"=>"ME",
                        "name"=>"Maine"
                    ],
                    [
                        "topo_key"=>"MD",
                        "name"=>"Maryland"
                    ],
                    [
                        "topo_key"=>"MA",
                        "name"=>"Massachusetts"
                    ],
                    [
                        "topo_key"=>"MI	",
                        "name"=>"Michigan"
                    ],
                    [
                        "topo_key"=>"MN",
                        "name"=>"Minnesota"
                    ],
                    [
                        "topo_key"=>"MS",
                        "name"=>"Mississippi"
                    ],
                    [
                        "topo_key"=>"MO",
                        "name"=>"Missouri"
                    ],
                    [
                        "topo_key"=>"MT",
                        "name"=>"Montana"
                    ],
                    [
                        "topo_key"=>"NE",
                        "name"=>"Nebraska"
                    ],
                    [
                        "topo_key"=>"NV",
                        "name"=>"Nevada"
                    ],
                    [
                        "topo_key"=>"NH",
                        "name"=>"New Hampshire"
                    ],
                    [
                        "topo_key"=>"NJ",
                        "name"=>"New Jersey"
                    ],
                    [
                        "topo_key"=>"NM",
                        "name"=>"New Mexico"
                    ],
                    [
                        "topo_key"=>"NY",
                        "name"=>"New York"
                    ],
                    [
                        "topo_key"=>"NC",
                        "name"=>"North Carolina"
                    ],
                    [
                        "topo_key"=>"ND",
                        "name"=>"North Dakota"
                    ],
                    [
                        "topo_key"=>"OH",
                        "name"=>"Ohio"
                    ],
                    [
                        "topo_key"=>"OK",
                        "name"=>"Oklahoma"
                    ],
                    [
                        "topo_key"=>"OR",
                        "name"=>"Oregon"
                    ],
                    [
                        "topo_key"=>"PA",
                        "name"=>"Pennsylvania"
                    ],
                    [
                        "topo_key"=>"RI",
                        "name"=>"Rhode Island"
                    ],
                    [
                        "topo_key"=>"SC",
                        "name"=>"South Carolina"
                    ],
                    [
                        "topo_key"=>"SD",
                        "name"=>"South Dakota"
                    ],
                    [
                        "topo_key"=>"TN",
                        "name"=>"Tennessee"
                    ],
                    [
                        "topo_key"=>"TX",
                        "name"=>"Texas"
                    ],
                    [
                        "topo_key"=>"UT",
                        "name"=>"Utah"
                    ],
                    [
                        "topo_key"=>"VT",
                        "name"=>"Vermont"
                    ],
                    [
                        "topo_key"=>"VA",
                        "name"=>"Virginia"
                    ],
                    [
                        "topo_key"=>"WA",
                        "name"=>"Washington"
                    ],
                    [
                        "topo_key"=>"WV",
                        "name"=>"West Virginia"
                    ],
                    [
                        "topo_key"=>"WI",
                        "name"=>"Wisconsin"
                    ],
                    [
                        "topo_key"=>"WY",
                        "name"=>"Wyoming"
                    ],
                    
                ]
            ]
        ];


        foreach($countries as $country){

            $dbCountry = Country::updateOrCreate(
                [
                    'datamap_scope' => $country['datamap_scope']
                ],
                [
                    'name' => $country['name'], 
                    'datamap_topo_url' => $country['datamap_topo_url'], 
                    'datamap_scale' => $country['datamap_scale'], 
                    'datamap_center_x' => $country['datamap_center_x'], 
                    'datamap_center_y' => $country['datamap_center_y'], 
                ]
            );
            
            
            foreach($country['states'] as $state){                
                $dbCountry->states()->updateOrCreate(
                    [
                        'topo_key' => $state['topo_key']
                    ],
                    [
                        'name' => $state['name'],                        
                        "active" => rand(45,450),
                        "recovered" => rand(0,100),
                        "deceased" => rand(0,35),
                        
                    ]
                );
            }
        }
        
    }


    
}
