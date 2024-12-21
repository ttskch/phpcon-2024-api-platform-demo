<?php

namespace App\Models;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use App\State\ArticleRandomProvider;
use Illuminate\Database\Eloquent\Model;

#[Get(uriTemplate: '/articles/random', provider: ArticleRandomProvider::class)]
#[ApiResource]
class Article extends Model
{
    //
}
