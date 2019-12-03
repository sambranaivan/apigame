<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pokemon extends Model
{
    //
    public function get()
    {
        
        $client = new \GuzzleHttp\Client();
        $request = $client->get('https://pokeapi.co/api/v2/pokemon/800');
        $response = $request->getBody();
        dd($response);
    }
}
