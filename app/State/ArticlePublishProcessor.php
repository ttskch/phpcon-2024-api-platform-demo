<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Models\Article;

final readonly class ArticlePublishProcessor implements ProcessorInterface
{
    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): mixed
    {
        if (!$data instanceof Article) {
            throw new \InvalidArgumentException('このカスタムState ProcessorはArticleモデルに対してのみ使用可能です。');
        }

        $data->published = true;
        $data->save();

        return $data;
    }
}
