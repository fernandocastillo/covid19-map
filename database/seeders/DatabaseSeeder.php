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
            ]
        ];


        foreach($countries as $country){

            $dbCountry = Country::updateOrCreate(
                [
                    'datamap_scope' => $country['datamap_scope']
                ],
                [
                    'name' => $country['datamap_scope'], 
                    'datamap_topo_url' => $country['datamap_topo_url'], 
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
