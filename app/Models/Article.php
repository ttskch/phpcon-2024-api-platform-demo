<?php

namespace App\Models;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use App\State\ArticlePublishProcessor;
use App\State\ArticleRandomProvider;
use Illuminate\Database\Eloquent\Model;

#[Get(uriTemplate: '/articles/random', provider: ArticleRandomProvider::class)]
#[Put(uriTemplate: '/articles/{id}/publication', deserialize: false, processor: ArticlePublishProcessor::class)]
#[ApiResource]
class Article extends Model
{
    //
}
