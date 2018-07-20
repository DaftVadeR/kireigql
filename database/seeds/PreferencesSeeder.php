<?php

use Illuminate\Database\Seeder;

class PreferencesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Preference::class, 50)->create();
    }
}
