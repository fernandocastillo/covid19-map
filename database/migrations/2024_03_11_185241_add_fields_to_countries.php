<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('countries', function (Blueprint $table) {
            $table->string('datamap_scale')->nullable()->after('datamap_topo_url');
            $table->string('datamap_center_x')->nullable()->after('datamap_topo_url');
            $table->string('datamap_center_y')->nullable()->after('datamap_topo_url');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('countries', function (Blueprint $table) {
            $table->dropColumn('datamap_scale');
            $table->dropColumn('datamap_center_x');
            $table->dropColumn('datamap_center_y');
        });
    }
};
