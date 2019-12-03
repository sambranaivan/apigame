<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PokemonController extends Controller
{
    //

   public function test()
    {
        // $client = new \GuzzleHttp\Client();
        // $request = $client->get('https://pokeapi.co/api/v2/pokemon/800');
        // $response = $request->getBody();
        // dd($response);

        $obj = [
            "1" => ['sprite'=>333],
            "2" => ['sprite' => 222],
            "3" => ['sprite' => 444],
            "4" => ['sprite' => 555],
            "5" => ['sprite' => 666],
            "6" => ['sprite' => 123],

        ];
            return response()->json($obj);
    }


    public function battle()
    {


        $team = [] ;//array de mi equipo
        $enemy = [];//array del otro equipo


    }
}
