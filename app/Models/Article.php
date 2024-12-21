<?php

namespace App\Models;

use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use App\State\ArticlePublishProcessor;
use App\State\ArticleRandomProvider;
use Illuminate\Database\Eloquent\Model;
use Symfony\Component\PropertyInfo\Type;

#[Get(uriTemplate: '/articles/random', provider: ArticleRandomProvider::class)]
#[Put(uriTemplate: '/articles/{id}/publication', deserialize: false, processor: ArticlePublishProcessor::class)]
#[ApiResource]
#[ApiProperty(builtinTypes: [new Type('bool')], schema: ['type' => 'boolean'], property: 'published')]
class Article extends Model
{
    //
}
