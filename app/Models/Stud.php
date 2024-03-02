<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stud extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'email', 'mobile', 'address'];

}
